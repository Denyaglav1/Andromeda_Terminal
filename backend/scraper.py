import os
import sys
import httpx
from sqlalchemy.orm import Session
import datetime

try:
    from backend import models, database
    from backend.database import SessionLocal
except ImportError:
    import models, database
    from database import SessionLocal

# Base URLs for SPB Exchange Indices API
API_BASE = "https://indexapi.spbexchange.ru/indexes/v1"
SPB_APIKEY = "39F30F1D6DF6A17684A7C90C5DAE0F5F"

def get_spb_headers():
    return {
        "apikey": SPB_APIKEY,
        "Referer": "https://spbexchange.ru/",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36",
        "Accept": "application/json, text/plain, */*"
    }

# List of known SPB Indices
KNOWN_INDICES = [
    "SPB100", "SPBIBTC", "SPBICAR", "SPBIDGT", "SPBIEVI", "SPBIFR", "SPBIFUT", 
    "SPBIHIDE", "SPBILR", "SPBIOIL", "SPBIPR", "SPBIREC", "SPBIRG", "SPBIRT", 
    "SPBIRUS", "SPBIRUS2", "SPBISEC", "SPBISEM", "SPBISEM10", "SPBISI"
]

def spb_get(url: str, params: dict | None = None):
    try:
        # If params is None, httpx handles it, but let's be explicit for the linter
        request_params = params if params is not None else {}
        response = httpx.get(url, headers=get_spb_headers(), params=request_params, verify=False, timeout=15.0)
        if response.status_code != 200:
            print(f"DEBUG: SPB API Error {response.status_code} for {url}. Result: {response.text[:200]}")
        response.raise_for_status()
        return response.json()
    except Exception as e:
        print(f"Error fetching {url}: {e}")
        return None

def fetch_index_metadata(ticker: str):
    return spb_get(f"{API_BASE}/websiteview", params={"index_code": ticker, "lang": "ru", "bar_size": 1})

def fetch_index_history(ticker: str, start_date_unix: int, end_date_unix: int):
    return spb_get(f"{API_BASE}/bars/history", params={
        "index_code": ticker, 
        "bar_size": "1D", 
        "date_from": start_date_unix, 
        "count_back": 0, 
        "date_to": end_date_unix, 
        "first_data_request": "true"
    }) or []

def fetch_index_composition(ticker: str):
    return spb_get(f"{API_BASE}/components/last", params={"index_code": ticker})

def fetch_index_documents(ticker: str):
    return spb_get(f"{API_BASE}/websitedocs", params={"index_code": ticker, "lang": "ru"}) or []

def get_or_create_ticker(db: Session, ticker_code: str, name: str):
    ticker = db.query(models.IndexTicker).filter(models.IndexTicker.ticker == ticker_code).first()
    if not ticker:
        ticker = models.IndexTicker(ticker=ticker_code, name=name)
        db.add(ticker)
        # We don't commit here anymore, we commit after each ticker in update_db_with_scrape
        db.flush() 
    return ticker

# Modular save functions
def save_current_metadata(db: Session, ticker_id: int, meta: dict):
    # Extract real timestamp from the API if available (bar_unixtime)
    last_bar = meta.get("last_bar", {})
    bar_time = last_bar.get("bar_unixtime") if isinstance(last_bar, dict) else None
    
    # Используем время записи (utcnow) чтобы 1D фильтрация работала корректно.
    # bar_unixtime из API — это дата последнего торгового дня биржи,
    # которая может отставать от текущей даты.
    data_ts = datetime.datetime.utcnow()

    def safe_get_float(d, key):
        val = d.get(key)
        try:
            return float(val) if val is not None else None
        except (ValueError, TypeError):
            return None

    current_data = models.IndexData(
        ticker_id=ticker_id,
        timestamp=data_ts,
        current_value=safe_get_float(meta, "current_price"),
        open_value=safe_get_float(meta, "last_open"),
        prev_close=safe_get_float(meta, "prev_last"),
        day_max=safe_get_float(meta, "day_high"),
        day_min=safe_get_float(meta, "day_low"),
        absolute_change=safe_get_float(meta, "day_change"),
        percent_change=safe_get_float(meta, "day_change_pct"),
        year_max=safe_get_float(meta, "year_high"),
        year_min=safe_get_float(meta, "year_low")
    )
    db.add(current_data)

def save_historical_data(db: Session, ticker_id: int, ticker_code: str, start_unix: int, end_unix: int):
    yesterday = datetime.datetime.now() - datetime.timedelta(days=1)
    has_history = db.query(models.IndexData).filter(
        models.IndexData.ticker_id == ticker_id,
        models.IndexData.timestamp < yesterday
    ).count() > 10
    
    if not has_history:
        print(f"Fetching history for {ticker_code}...")
        history_bars = fetch_index_history(ticker_code, start_unix, end_unix)
        
        if isinstance(history_bars, list):
            print(f"Got {len(history_bars)} historical bars for {ticker_code}")
            for bar in history_bars:
                if isinstance(bar, dict) and "bar_unixtime" in bar:
                    dt = datetime.datetime.fromtimestamp(bar["bar_unixtime"], datetime.timezone.utc).replace(tzinfo=None)
                    hist_data = models.IndexData(
                        ticker_id=ticker_id,
                        timestamp=dt,
                        current_value=bar.get("close"),
                        open_value=bar.get("open"),
                        day_max=bar.get("high"),
                        day_min=bar.get("low")
                    )
                    db.add(hist_data)

def save_composition(db: Session, ticker_id: int, ticker_code: str):
    composition = fetch_index_composition(ticker_code)
    if composition and isinstance(composition, dict) and "constituents" in composition:
        db.query(models.IndexConstituent).filter(models.IndexConstituent.ticker_id == ticker_id).delete()
        
        for item in composition["constituents"]:
            constituent = models.IndexConstituent(
                ticker_id=ticker_id,
                ticker=item.get("ticker"),
                asset_name=item.get("asset_name"),
                isin=item.get("isin"),
                weight=item.get("w_i"),
                last_updated=datetime.datetime.utcnow()
            )
            db.add(constituent)

def save_documents(db: Session, ticker_id: int, ticker_code: str):
    docs_data = fetch_index_documents(ticker_code)
    if docs_data and isinstance(docs_data, list):
        db.query(models.IndexDocument).filter(models.IndexDocument.ticker_id == ticker_id).delete()
        
        for doc_group in docs_data:
            title = doc_group.get("full_name")
            versions = doc_group.get("versions", [])
            if versions and isinstance(versions, list):
                latest = versions[0]
                
                def parse_dt(dt_str):
                    if not dt_str: return None
                    try:
                        if 'T' in dt_str:
                            return datetime.datetime.fromisoformat(dt_str.replace('Z', '+00:00')).replace(tzinfo=None)
                        else:
                            return datetime.datetime.strptime(dt_str, "%Y-%m-%d")
                    except:
                        return None

                doc = models.IndexDocument(
                    ticker_id=ticker_id,
                    title=title,
                    category=doc_group.get("name"),
                    url=latest.get("url"),
                    publish_date=parse_dt(latest.get("publish_date")),
                    start_date=parse_dt(latest.get("start_date"))
                )
                db.add(doc)

def update_db_with_scrape(db: Session):
    print(f"[{datetime.datetime.now()}] Starting full SPB indices scrape...")
    
    end_date = datetime.datetime.now()
    start_date = end_date - datetime.timedelta(days=365 * 3)
    end_unix = int(end_date.timestamp())
    start_unix = int(start_date.timestamp())

    for ticker_code in KNOWN_INDICES:
        print(f"Scraping metadata for {ticker_code}...")
        meta = fetch_index_metadata(ticker_code)
        
        if not isinstance(meta, dict):
            continue
            
        name = meta.get("full_name") or meta.get("name") or ticker_code
        db_ticker = get_or_create_ticker(db, ticker_code, str(name))
        
        save_current_metadata(db, db_ticker.id, meta)
        save_historical_data(db, db_ticker.id, ticker_code, start_unix, end_unix)
        save_composition(db, db_ticker.id, ticker_code)
        save_documents(db, db_ticker.id, ticker_code)
        
        db.commit() # Commit after each ticker to save progress

def run_scrape_job():
    db = SessionLocal()
    try:
        update_db_with_scrape(db)
    finally:
        db.close()

if __name__ == "__main__":
    import argparse
    parser = argparse.ArgumentParser()
    parser.add_argument("--ticker", help="Specific ticker to scrape")
    args = parser.parse_args()
    
    db = SessionLocal()
    try:
        if args.ticker:
            # Modify KNOWN_INDICES temporarily for single ticker scrape
            globals()["KNOWN_INDICES"] = [args.ticker]
            update_db_with_scrape(db)
        else:
            update_db_with_scrape(db)
    finally:
        db.close()
