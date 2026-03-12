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
    from backend.index_calculators import spbicar_calculator
    from backend.index_calculators import spbidgt_calculator
    from backend.moex import quotes as moex_quotes
    from backend.moex import history as moex_history
    from backend.moex import dividends as moex_dividends
except ImportError:
    import models, database, scraper, seed_companies  # type: ignore
    from index_calculators import spbicar_calculator  # type: ignore
    from index_calculators import spbidgt_calculator  # type: ignore
    from moex import quotes as moex_quotes             # type: ignore
    from moex import history as moex_history           # type: ignore
    from moex import dividends as moex_dividends       # type: ignore

scheduler = BackgroundScheduler()


MOEX_TICKERS: list[str] = [
    "SBER", "GAZP", "LKOH", "YNDX", "GMKN", "NVTK", "ROSN", "MGNT",
    "ALRS", "VTBR", "MTSS", "NLMK", "PHOR", "MOEX", "IRAO", "SNGS",
    "PLZL", "MAGN", "CBOM", "TCSG", "AFKS", "HYDR", "PIKK", "FEES",
    "TRNFP", "AFLT", "RTKM", "RENI", "FESH", "OZON", "POSI", "GLTR",
    "SGZH", "SELG", "UPRO", "LSRG", "BSPB",
    # Компоненты SPBIDGT (СПБ Цифровая Экономика)
    "ASTR", "DELI", "HEAD", "T", "VKCO", "WUSH", "YDEX",
]


def _run_spbidgt_calc():
    """Расчёт SPBIDGT и сохранение в БД."""
    db = database.SessionLocal()
    try:
        saved = spbidgt_calculator.run_and_save(db)
        print(f"[{datetime.datetime.now()}] SPBIDGT calc complete: {saved} rows saved")
    except Exception as exc:
        import traceback; traceback.print_exc()
        print(f"[{datetime.datetime.now()}] SPBIDGT calc error: {exc}")
    finally:
        db.close()


def _run_moex_quotes():
    """Обновление котировок MOEX (весь рынок одним запросом)."""
    db = database.SessionLocal()
    try:
        n = moex_quotes.run_quotes_update(db)
        print(f"[{datetime.datetime.now()}] MOEX котировки: {n} обновлено")
    except Exception as exc:
        import traceback; traceback.print_exc()
        print(f"[{datetime.datetime.now()}] MOEX quotes error: {exc}")
    finally:
        db.close()


def _run_moex_history():
    """Синхронизация дневной истории для всех тикеров."""
    db = database.SessionLocal()
    try:
        total = 0
        for ticker in MOEX_TICKERS:
            try:
                n = moex_history.sync_history(db, ticker, years_back=5)
                total += n
            except Exception as exc:
                print(f"  history error {ticker}: {exc}")
        print(f"[{datetime.datetime.now()}] MOEX история: {total} свечей добавлено")
    except Exception as exc:
        print(f"[{datetime.datetime.now()}] MOEX history error: {exc}")
    finally:
        db.close()


def _run_moex_dividends():
    """Синхронизация дивидендов для всех тикеров."""
    db = database.SessionLocal()
    try:
        results = moex_dividends.sync_dividends_batch(db, MOEX_TICKERS)
        total = sum(results.values())
        print(f"[{datetime.datetime.now()}] MOEX дивиденды: {total} записей")
    except Exception as exc:
        print(f"[{datetime.datetime.now()}] MOEX dividends error: {exc}")
    finally:
        db.close()


def _run_spbicar_calc():
    """Wrapper for APScheduler: calculate SPBICAR and persist to DB."""
    db = database.SessionLocal()
    try:
        saved = spbicar_calculator.run_and_save(db)
        print(f"[{datetime.datetime.now()}] SPBICAR calc complete: {saved} rows saved")
    except Exception as exc:
        import traceback
        print(f"[{datetime.datetime.now()}] SPBICAR calc error: {exc}")
        traceback.print_exc()
    finally:
        db.close()

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
        replace_existing=True,
    )

    # ── Реестр калькуляторов индексов ──────────────────────────────────────────
    # Чтобы добавить новый индекс — достаточно добавить его сюда.
    INDEX_CALC_JOBS: list[tuple[str, callable]] = [
        ("SPBICAR", _run_spbicar_calc),
        ("SPBIDGT", _run_spbidgt_calc),
    ]

    def _run_all_index_calcs():
        for name, fn in INDEX_CALC_JOBS:
            try:
                fn()
            except Exception as exc:
                print(f"[{datetime.datetime.now()}] Ошибка пересчёта {name}: {exc}")

    # Пересчёт всех индексов каждые 15 минут
    scheduler.add_job(
        _run_all_index_calcs,
        'interval',
        minutes=15,
        id='index_calc_all',
        replace_existing=True,
    )
    # Первый запуск сразу при старте
    scheduler.add_job(_run_all_index_calcs, trigger='date', id='index_calc_all_init', replace_existing=True)

    # ── MOEX: котировки каждые 5 минут в торговые часы (10:00–18:50 МСК) ──
    scheduler.add_job(
        _run_moex_quotes,
        'cron',
        day_of_week='mon-fri',
        hour='10-18',
        minute='*/5',
        id='moex_quotes',
        replace_existing=True,
    )
    scheduler.add_job(_run_moex_quotes, trigger='date', id='moex_quotes_init', replace_existing=True)

    # ── MOEX: дневная история — раз в день в 19:30 ──
    scheduler.add_job(
        _run_moex_history,
        'cron',
        hour=19, minute=30,
        id='moex_history',
        replace_existing=True,
    )
    scheduler.add_job(_run_moex_history, trigger='date', id='moex_history_init', replace_existing=True)

    # ── MOEX: дивиденды — раз в неделю в воскресенье ──
    scheduler.add_job(
        _run_moex_dividends,
        'cron',
        day_of_week='sun',
        hour=10,
        id='moex_dividends',
        replace_existing=True,
    )
    scheduler.add_job(_run_moex_dividends, trigger='date', id='moex_dividends_init', replace_existing=True)

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


@app.post("/api/admin/scrape")
def admin_scrape():
    """Ручной запуск скрапера официальных данных индексов."""
    scheduler.add_job(scraper.run_scrape_job, trigger='date', id='manual_scrape', replace_existing=True)
    return {"status": "scheduled"}


@app.post("/api/admin/recalculate/{index_code}")
def admin_recalculate(index_code: str, db: Session = Depends(database.get_db)):
    """
    Принудительный полный пересчёт индекса с нуля (сбрасывает старые данные).
    POST /api/admin/recalculate/SPBICAR
    POST /api/admin/recalculate/SPBIDGT
    """
    code = index_code.upper()
    # Очищаем старые данные
    deleted = db.query(models.IndexCalculatedPoint).filter(
        models.IndexCalculatedPoint.index_code == code
    ).delete()
    db.commit()

    calc_map = {
        "SPBICAR": _run_spbicar_calc,
        "SPBIDGT": _run_spbidgt_calc,
    }
    fn = calc_map.get(code)
    if fn is None:
        return {"error": f"Unknown index: {code}"}

    # Запускаем в фоне через scheduler
    scheduler.add_job(fn, trigger="date", id=f"{code.lower()}_recalc_forced", replace_existing=True)
    return {"status": "scheduled", "index": code, "deleted_rows": deleted}

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
            history = query.filter(
                models.IndexData.timestamp >= datetime.datetime.combine(latest_day, datetime.time.min),
                models.IndexData.timestamp <= datetime.datetime.combine(latest_day, datetime.time.max),
            ).order_by(models.IndexData.timestamp.asc()).all()

            # Fallback: если за последний день нет данных — ищем предыдущий торговый день
            if len(history) == 0:
                for delta in range(1, 8):
                    prev_day = latest_day - datetime.timedelta(days=delta)
                    history = query.filter(
                        models.IndexData.timestamp >= datetime.datetime.combine(prev_day, datetime.time.min),
                        models.IndexData.timestamp <= datetime.datetime.combine(prev_day, datetime.time.max),
                    ).order_by(models.IndexData.timestamp.asc()).all()
                    if len(history) >= 1:
                        break
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

# ── MOEX API ──────────────────────────────────────────────────────────────────

@app.get("/api/moex/quotes")
def get_moex_quotes_all(db: Session = Depends(database.get_db)):
    """Котировки всех сохранённых тикеров."""
    rows = db.query(models.MoexQuote).all()
    return [_quote_to_dict(q) for q in rows]


@app.get("/api/moex/quotes/{ticker}")
def get_moex_quote(ticker: str, db: Session = Depends(database.get_db)):
    """Котировка одного тикера из БД (+ live-подтяжка если старше 1 мин)."""
    ticker = ticker.upper()
    row = db.query(models.MoexQuote).filter(models.MoexQuote.ticker == ticker).first()

    # Если нет в БД или данные старше 2 минут — подтягиваем live
    stale = True
    if row and row.updated_at:
        stale = (datetime.datetime.utcnow() - row.updated_at).total_seconds() > 120

    if stale:
        live = moex_quotes.fetch_quote(ticker)
        if live:
            moex_quotes.upsert_quotes(db, [live])
            row = db.query(models.MoexQuote).filter(models.MoexQuote.ticker == ticker).first()

    if not row:
        return {"error": "Тикер не найден"}
    return _quote_to_dict(row)


@app.get("/api/moex/candles/{ticker}")
def get_moex_candles(
    ticker: str,
    interval: str = "day",
    date_from: str | None = None,
    date_till: str | None = None,
    db: Session = Depends(database.get_db),
):
    """
    Свечи для тикера.
    interval: day | hour | 10min | 1min | week | month
    Дневные: из БД. Остальные: live из MOEX.
    """
    ticker = ticker.upper()

    if interval == "day":
        # Из БД
        query = db.query(models.MoexCandle).filter(
            models.MoexCandle.ticker == ticker,
            models.MoexCandle.interval == "day",
        )
        if date_from:
            try:
                dt_from = datetime.datetime.strptime(date_from, "%Y-%m-%d")
                query = query.filter(models.MoexCandle.begin_dt >= dt_from)
            except ValueError:
                pass
        if date_till:
            try:
                dt_till = datetime.datetime.strptime(date_till, "%Y-%m-%d")
                query = query.filter(models.MoexCandle.begin_dt <= dt_till)
            except ValueError:
                pass
        candles = query.order_by(models.MoexCandle.begin_dt.asc()).all()
        return [_candle_to_dict(c) for c in candles]
    else:
        # Live из MOEX
        rows = moex_history.fetch_candles(ticker, interval, date_from, date_till)
        return rows


@app.get("/api/moex/dividends/{ticker}")
def get_moex_dividends(ticker: str, db: Session = Depends(database.get_db)):
    """История дивидендов для тикера."""
    ticker = ticker.upper()
    divs = (
        db.query(models.MoexDividend)
        .filter(models.MoexDividend.ticker == ticker)
        .order_by(models.MoexDividend.record_date.desc())
        .all()
    )
    return [
        {
            "record_date": d.record_date.date().isoformat() if d.record_date else None,
            "value": d.value,
            "currency": d.currency,
        }
        for d in divs
    ]


@app.get("/api/moex/search")
def moex_search(q: str = "", limit: int = 20):
    """Поиск инструментов на MOEX ISS."""
    if not q or len(q) < 2:
        return []
    try:
        from backend.moex.client import iss_get, iss_rows
    except ImportError:
        from moex.client import iss_get, iss_rows  # type: ignore
    data = iss_get(
        "/securities",
        params={
            "q": q,
            "limit": limit,
            "securities.columns": "secid,shortname,name,type,isin,group",
            "iss.only": "securities",
        },
    )
    return iss_rows(data, "securities")


def _quote_to_dict(q: models.MoexQuote) -> dict:
    return {
        "ticker":      q.ticker,
        "shortname":   q.shortname,
        "isin":        q.isin,
        "last_price":  q.last_price,
        "open_price":  q.open_price,
        "high_price":  q.high_price,
        "low_price":   q.low_price,
        "prev_close":  q.prev_close,
        "wap_price":   q.wap_price,
        "change":      q.change,
        "change_pct":  q.change_pct,
        "volume":      q.volume,
        "value_rub":   q.value_rub,
        "updated_at":  q.updated_at.isoformat() if q.updated_at else None,
    }


def _candle_to_dict(c: models.MoexCandle) -> dict:
    return {
        "date":     c.begin_dt.date().isoformat() if c.begin_dt else None,
        "open":     c.open,
        "high":     c.high,
        "low":      c.low,
        "close":    c.close,
        "volume":   c.volume,
        "value":    c.value,
        "wap":      c.wap,
    }


@app.get("/api/indices/{ticker}/calculated")
def get_index_calculated(
    ticker: str,
    timeframe: str = "ALL",
    db: Session = Depends(database.get_db),
):
    """
    Returns index values calculated from first principles (SPBICAR methodology).
    Includes portfolio price (pp), realised volatility (fact_vol) and exposure factor (exp_factor).
    """
    points = (
        db.query(models.IndexCalculatedPoint)
        .filter(models.IndexCalculatedPoint.index_code == ticker.upper())
        .order_by(models.IndexCalculatedPoint.date.asc())
        .all()
    )

    if not points:
        return {"ticker": ticker, "calculated": [], "current": None}

    # Двойной буфер чтобы расчётные данные перекрывали официальные
    # (официальная история может возвращать данные за 2x дней из-за anchor_date логики)
    days_map = {"1W": 21, "1M": 90, "3M": 180, "1Y": 730, "ALL": 99999}
    cutoff_days = days_map.get(timeframe, 99999)
    cutoff_dt = datetime.datetime.now() - datetime.timedelta(days=cutoff_days)
    filtered = [p for p in points if p.date >= cutoff_dt] or points

    latest = filtered[-1]
    first  = filtered[0]

    pct_change = None
    if first.value and latest.value and first.value != 0:
        pct_change = round((latest.value / first.value - 1) * 100, 2)

    return {
        "ticker": ticker.upper(),
        "current": {
            "value":      latest.value,
            "pp":         latest.pp,
            "fact_vol":   round(latest.fact_vol * 100, 2) if latest.fact_vol else None,
            "exp_factor": round(latest.exp_factor * 100, 2) if latest.exp_factor else None,
            "timestamp":  latest.date.isoformat(),
            "pct_change_period": pct_change,
        },
        "calculated": [
            {
                "date":       p.date.isoformat(),
                "value":      p.value,
                "pp":         p.pp,
                "fact_vol":   round(p.fact_vol * 100, 4) if p.fact_vol else None,
                "exp_factor": round(p.exp_factor * 100, 2) if p.exp_factor else None,
            }
            for p in filtered
        ],
    }


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
