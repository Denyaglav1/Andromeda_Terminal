try:
    import models
    from database import SessionLocal
except ImportError:
    from backend import models
    from backend.database import SessionLocal

def check_data():
    db = SessionLocal()
    try:
        t_count = db.query(models.IndexTicker).count()
        d_count = db.query(models.IndexData).count()
        c_count = db.query(models.IndexConstituent).count()
        print(f"Tickers: {t_count}")
        print(f"Data points: {d_count}")
        print(f"Constituents: {c_count}")
        
        tickers = db.query(models.IndexTicker).all()
        for t in tickers:
            data_points = db.query(models.IndexData).filter(models.IndexData.ticker_id == t.id).count()
            constituents = db.query(models.IndexConstituent).filter(models.IndexConstituent.ticker_id == t.id).count()
            print(f"Ticker {t.ticker}: {data_points} data points, {constituents} constituents")
            
            if data_points > 0:
                sample = db.query(models.IndexData).filter(models.IndexData.ticker_id == t.id).order_by(models.IndexData.timestamp.desc()).first()
                print(f"  Latest data: {sample.current_value} at {sample.timestamp}")
                
            if constituents > 0:
                sample_c = db.query(models.IndexConstituent).filter(models.IndexConstituent.ticker_id == t.id).first()
                print(f"  Sample constituent: {sample_c.asset_name} ({sample_c.weight})")

    finally:
        db.close()

if __name__ == "__main__":
    check_data()
