import sys
import os
import urllib.request
import json
sys.path.append('backend')
from database import SessionLocal
import models

def check_db():
    print("--- Database Check ---")
    db = SessionLocal()
    tickers = db.query(models.IndexTicker).all()
    for t in tickers:
        data_count = db.query(models.IndexData).filter_by(ticker_id=t.id).count()
        docs_count = db.query(models.IndexDocument).filter_by(ticker_id=t.id).count()
        print(f"{t.ticker}: data={data_count}, docs={docs_count}")
    db.close()

def check_api():
    print("\n--- API Check (SPBIBTC) ---")
    url = 'https://indexapi.spbexchange.ru/indexes/v1/websitedocs?index_code=SPBIBTC&lang=ru'
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        resp = urllib.request.urlopen(req)
        data = resp.read().decode('utf-8')
        print(data[:500])
    except Exception as e:
        print("Failed:", e)

if __name__ == '__main__':
    check_db()
    check_api()
