import sys
import os
sys.path.append('backend')
from database import SessionLocal
import models

def debug_db():
    db = SessionLocal()
    tickers = db.query(models.IndexTicker).all()
    print(f"{'Ticker':<10} | {'Data Count':<10} | {'Docs Count':<10}")
    print("-" * 35)
    for t in tickers:
        data_count = db.query(models.IndexData).filter_by(ticker_id=t.id).count()
        docs_count = db.query(models.IndexDocument).filter_by(ticker_id=t.id).count()
        print(f"{t.ticker:<10} | {data_count:<10} | {docs_count:<10}")
        
        if docs_count > 0:
            first_doc = db.query(models.IndexDocument).filter_by(ticker_id=t.id).first()
            print(f"  Sample Doc: {first_doc.title} ({first_doc.url})")
            
    db.close()

if __name__ == '__main__':
    debug_db()
