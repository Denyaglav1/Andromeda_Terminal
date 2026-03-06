import datetime
from fastapi import FastAPI, Depends, BackgroundTasks
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from contextlib import asynccontextmanager
from apscheduler.schedulers.background import BackgroundScheduler

try:
    from backend import models, database, scraper
except ImportError:
    import models, database, scraper

scheduler = BackgroundScheduler()

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Create database tables inside lifespan to avoid blocking module import
    try:
        models.Base.metadata.create_all(bind=database.engine)
    except Exception as e:
        print(f"Database sync error: {e}")

    # Startup: start scheduler to run every 15 minutes
    scheduler.add_job(
        scraper.update_db_with_scrape, 
        'interval', 
        minutes=15, 
        args=[database.SessionLocal()],
        id='scrape_job',
        replace_existing=True
    )
    # Trigger one run immediately (using 'date' trigger with no run_date means NOW)
    # This runs in a background thread of the BackgroundScheduler
    scheduler.add_job(
        scraper.update_db_with_scrape,
        trigger='date', 
        args=[database.SessionLocal()],
        id='initial_scrape',
        replace_existing=True
    )
    scheduler.start()
    
    yield
    
    # Shutdown
    scheduler.shutdown()

app = FastAPI(title="Andromeda Indices API", lifespan=lifespan)

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
        print(f"Error in get_index_data: {e}")
        traceback.print_exc()
        return {"error": str(e), "detail": "Internal Server Error"}

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
