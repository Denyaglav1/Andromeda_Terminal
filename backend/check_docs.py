from database import SessionLocal
import models

def check_docs():
    db = SessionLocal()
    try:
        tickers = db.query(models.IndexTicker).all()
        for t in tickers:
            doc_count = db.query(models.IndexDocument).filter(models.IndexDocument.ticker_id == t.id).count()
            print(f"Ticker: {t.ticker}, Documents: {doc_count}")
            if doc_count > 0:
                docs = db.query(models.IndexDocument).filter(models.IndexDocument.ticker_id == t.id).limit(2).all()
                for d in docs:
                    print(f"  - {d.title} ({d.url})")
    finally:
        db.close()

if __name__ == "__main__":
    check_docs()
