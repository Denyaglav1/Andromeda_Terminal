import sys
import os

# Add backend to path
sys.path.append(os.path.join(os.getcwd(), 'backend'))

try:
    from database import SessionLocal, engine
    import models
    from sqlalchemy import inspect
except ImportError as e:
    print(f"Import failed: {e}")
    sys.exit(1)

def verify():
    print("--- Company Database Verification ---")
    
    # Check tables
    inspector = inspect(engine)
    tables = inspector.get_table_names()
    print(f"Tables in DB: {tables}")
    
    expected = ["companies", "company_financials", "bonds", "company_indicators"]
    for t in expected:
        if t in tables:
            print(f"[OK] Table '{t}' exists.")
        else:
            print(f"[ERROR] Table '{t}' is MISSING.")
            # Try to create them if missing
            print(f"Attempting to create missing tables...")
            models.Base.metadata.create_all(bind=engine)
            break

    db = SessionLocal()
    try:
        count = db.query(models.Company).count()
        print(f"Total companies: {count}")
        
        sber = db.query(models.Company).filter_by(ticker="SBER").first()
        if sber:
            print(f"[OK] Found SBER: {sber.full_name}")
            fin_count = len(sber.financials)
            bond_count = len(sber.bonds)
            print(f"   Financials: {fin_count}")
            print(f"   Bonds: {bond_count}")
        else:
            print("[WARNING] SBER not found in database.")
    except Exception as e:
        print(f"Error querying data: {e}")
    finally:
        db.close()

if __name__ == '__main__':
    verify()
