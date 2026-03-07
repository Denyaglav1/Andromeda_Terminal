import os
import sys

# Add current directory to path if needed for local execution
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

try:
    from backend.database import SessionLocal
    from backend.models import Company
except ImportError:
    from database import SessionLocal
    from models import Company

def check_db():
    if not os.path.exists("sql_app.db"):
        print("Database file sql_app.db does not exist.")
        return

    db = SessionLocal()
    try:
        count = db.query(Company).count()
        print(f"Number of companies in database: {count}")
        if count > 0:
            companies = db.query(Company).limit(5).all()
            print("First 5 companies:")
            for c in companies:
                print(f" - {c.ticker}: {c.name}")
    except Exception as e:
        print(f"Error checking database: {e}")
    finally:
        db.close()

if __name__ == "__main__":
    check_db()
