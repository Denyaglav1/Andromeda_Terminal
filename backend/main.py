import datetime
from fastapi import FastAPI, Depends, BackgroundTasks
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from contextlib import asynccontextmanager
from apscheduler.schedulers.background import BackgroundScheduler
from pydantic import BaseModel
from typing import List, Optional, Any

print(f"--- API STARTING/RELOADING AT {datetime.datetime.now()} ---")

try:
    from backend import models, database, scraper, seed_companies
except ImportError:
    import models, database, scraper, seed_companies

scheduler = BackgroundScheduler()

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Create database tables inside lifespan
    try:
        models.Base.metadata.create_all(bind=database.engine)
        
        # Seed basic tickers immediately to ensure API doesn't return empty list
        db = database.SessionLocal()
        try:
            if db.query(models.IndexTicker).count() == 0:
                print("Seeding initial tickers...")
                for ticker_code in scraper.KNOWN_INDICES:
                    # Provide a friendly name fallback
                    db.add(models.IndexTicker(ticker=ticker_code, name=ticker_code))
                db.commit()
            
            # Automated seeding for companies (SBER, etc.)
            if db.query(models.Company).count() == 0:
                print("Companies table empty. Starting automated seeding...")
                seed_companies.seed_data()
                print("Automated seeding completed.")
        finally:
            db.close()
    except Exception as e:
        print(f"Startup/Seeding error: {e}")

    # Startup: start scheduler
    scheduler.add_job(
        scraper.run_scrape_job, 
        'interval', 
        minutes=15, 
        id='scrape_job',
        replace_existing=True
    )
    # Trigger one full scrape in background
    scheduler.add_job(
        scraper.run_scrape_job,
        trigger='date', 
        id='initial_scrape',
        replace_existing=True
    )
    scheduler.start()
    
    yield
    
    # Shutdown
    scheduler.shutdown()

app = FastAPI(title="Andromeda Indices API V2 - RELOADED", lifespan=lifespan)

# Allow CORS for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Adjust this in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "Andromeda Indices API is running"}

@app.get("/api/indices")
def get_indices(db: Session = Depends(database.get_db)):
    tickers = db.query(models.IndexTicker).all()
    return tickers

@app.get("/health")
def health_check():
    return {"status": "ok", "time": datetime.datetime.utcnow().isoformat()}

@app.get("/api/indices/{ticker}")
def get_index_data(ticker: str, timeframe: str = "1D", db: Session = Depends(database.get_db)):
    try:
        db_ticker = db.query(models.IndexTicker).filter(models.IndexTicker.ticker == ticker).first()
        if not db_ticker:
            return {"error": "Ticker not found"}
            
        query = db.query(models.IndexData).filter(models.IndexData.ticker_id == db_ticker.id)
        # Find the latest data points to detect the 2023-2026 gap
        # We look at last 500 points to ensure we find the transition from 2023 to 2026
        latest_history = query.order_by(models.IndexData.timestamp.desc()).limit(500).all()
        if not latest_history:
            return {"ticker": db_ticker.ticker, "name": db_ticker.name, "history": [], "current": None}
            
        anchor_date = latest_history[0].timestamp
        # Detect the gap: SPB Exchange stopped data in Nov 2023 and resumed in 2026.
        # For SPB100, the "current" price shown in 2026 might be stale and disconnected from 2023 history.
        # We find the first point before any gap > 2 days to anchor our relative timeframes (1Y, 1M, etc)
        for i in range(len(latest_history) - 1):
            if (latest_history[i].timestamp - latest_history[i+1].timestamp).days > 2:
                anchor_date = latest_history[i+1].timestamp
                break
        
        # Timeframe filtering
        if timeframe == "1D":
            latest_day = latest_history[0].timestamp.date()
            history = query.filter(models.IndexData.timestamp >= datetime.datetime.combine(latest_day, datetime.time.min))\
                          .order_by(models.IndexData.timestamp.desc()).all()
            
            if len(history) < 5:
                history = query.order_by(models.IndexData.timestamp.desc()).limit(50).all()
        else:
            days_map = {"1W": 7, "1M": 30, "1Y": 365, "ALL": 3650}
            date_limit = anchor_date - datetime.timedelta(days=days_map.get(timeframe, 30))
            
            raw_history = query.filter(models.IndexData.timestamp >= date_limit)\
                              .order_by(models.IndexData.timestamp.desc()).all()
            
            # Deduplicate by day: keep only the LATEST point per day
            seen_dates = set()
            history = []
            for h in raw_history:
                day_str = h.timestamp.date().isoformat()
                if day_str not in seen_dates:
                    history.append(h)
                    seen_dates.add(day_str)
                    
            # Fallback if we have very little daily data (e.g. just started)
            if len(history) < 3 and raw_history:
                # If we have less than 3 distinct days, just show last 20 raw points
                # even if they belong to the same day, to avoid empty charts.
                history = raw_history[:20]
                    
        if not history:
            return {"ticker": db_ticker.ticker, "name": db_ticker.name, "history": [], "current": None}
            
        current = history[0]
        
        # Calculate scaling hints
        h_values = [h.current_value for h in history if h.current_value is not None]
        
        current_data = {
            "value": current.current_value,
            "percent_change": current.percent_change,
            "absolute_change": current.absolute_change,
            "open": current.open_value,
            "prev_close": current.prev_close,
            "day_max": current.day_max,
            "day_min": current.day_min,
            "year_max": max(h_values) if h_values else current.day_max,
            "year_min": min(h_values) if h_values else current.day_min,
            "timestamp": current.timestamp.isoformat()
        }
        
        return {
            "ticker": db_ticker.ticker,
            "name": db_ticker.name,
            "current": current_data,
            "history": [{"value": h.current_value, "timestamp": h.timestamp.isoformat()} for h in sorted(history, key=lambda x: x.timestamp)]
        }
    except Exception as e:
        import traceback
        print(f"Error in get_index_data for {ticker}: {e}")
        traceback.print_exc()
        return {"error": "Internal Server Error", "detail": str(e)}

@app.get("/api/indices/{ticker}/composition")
def get_index_composition(ticker: str, db: Session = Depends(database.get_db)):
    db_ticker = db.query(models.IndexTicker).filter(models.IndexTicker.ticker == ticker).first()
    if not db_ticker:
        return {"error": "Ticker not found"}
        
    constituents = db.query(models.IndexConstituent)\
                     .filter(models.IndexConstituent.ticker_id == db_ticker.id)\
                     .order_by(models.IndexConstituent.weight.desc())\
                     .all()
                     
    return constituents

@app.get("/api/indices/{ticker}/documents")
def get_index_documents(ticker: str, db: Session = Depends(database.get_db)):
    db_ticker = db.query(models.IndexTicker).filter(models.IndexTicker.ticker == ticker).first()
    if not db_ticker:
        return {"error": "Ticker not found"}
        
    documents = db.query(models.IndexDocument)\
                  .filter(models.IndexDocument.ticker_id == db_ticker.id)\
                  .order_by(models.IndexDocument.publish_date.desc())\
                  .all()
                  
    return documents

# ── COMPANY DATA SCHEMAS ──

class BondSchema(BaseModel):
    ticker: str
    name: str
    currency: str
    volume: float
    yield_val: float
    duration: float
    coupon: float
    option: Optional[str]
    maturity_date: Optional[datetime.datetime]
    placement_date: Optional[datetime.datetime]

    class Config:
        from_attributes = True

class FinancialSchema(BaseModel):
    period: str
    revenue: Optional[float]
    ebitda: Optional[float]
    net_profit: Optional[float]
    fcf: Optional[float]
    net_debt: Optional[float]

    class Config:
        from_attributes = True

class CompanyIndicatorSchema(BaseModel):
    pe: Optional[float]
    ev_ebitda: Optional[float]
    roe: Optional[float]
    net_debt_ebitda: Optional[float]
    div_yield: Optional[float]
    next_record_date: Optional[datetime.datetime]
    next_div_per_share: Optional[float]
    mkt_cap: Optional[float]
    free_float: Optional[float]

    class Config:
        from_attributes = True

class CompanySchema(BaseModel):
    ticker: str
    name: str
    full_name: Optional[str]
    description: Optional[str]
    sector: Optional[str]
    region: Optional[str]
    website: Optional[str]
    logo_bg: Optional[str]
    logo_color: Optional[str]
    logo_text: Optional[str]
    financials: List[FinancialSchema]
    bonds: List[BondSchema]
    indicators: Optional[CompanyIndicatorSchema]

    class Config:
        from_attributes = True

# ── COMPANY ENDPOINTS ──

@app.get("/api/companies", response_model=List[CompanySchema])
async def list_companies(db: Session = Depends(database.get_db)):
    """List all companies with basic info and relations."""
    return db.query(models.Company).all()

@app.get("/api/companies/{ticker}", response_model=CompanySchema)
async def get_company_details(ticker: str, db: Session = Depends(database.get_db)):
    """Get detailed info for a specific company by ticker."""
    company = db.query(models.Company).filter(models.Company.ticker == ticker.upper()).first()
    if not company:
        from fastapi import HTTPException
        raise HTTPException(status_code=404, detail="Company not found")
    return company

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
