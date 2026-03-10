import os
import sys
import datetime

# Setup paths
backend_dir = os.path.dirname(os.path.abspath(__file__))
project_root = os.path.dirname(backend_dir)
sys.path.append(project_root)
sys.path.append(backend_dir)

try:
    from backend import database, models
except ImportError:
    import database
    import models

def quick_seed():
    print("--- Quick Seed Start ---")
    try:
        # Create all tables explicitly
        models.Base.metadata.create_all(bind=database.engine)
        print("Tables created/verified.")
        
        db = database.SessionLocal()
        
        # SBER check
        sber = db.query(models.Company).filter_by(ticker="SBER").first()
        if not sber:
            print("Creating SBER...")
            sber = models.Company(
                ticker="SBER",
                name="Сбербанк",
                full_name="ПАО «СберБанк России»",
                description="ПАО «СберБанк России» занимается оказанием банковских и финансовых услуг...",
                sector="Financials",
                logo_bg="#008E38",
                logo_color="#FFFFFF",
                logo_text="СБ"
            )
            db.add(sber)
            db.flush()
            
            # Indicators
            db.add(models.CompanyIndicator(
                company_id=sber.id,
                pe=23.76, mkt_cap=6637335.64, free_float=79.0
            ))
            
            # Financials
            db.add(models.CompanyFinancial(
                company_id=sber.id, period="2023", revenue=10129, net_profit=987
            ))
            
            db.commit()
            print("SBER seeded successfully.")
        else:
            print("SBER already exists.")
            
        db.close()
    except Exception as e:
        print(f"Quick seed failed: {e}")
        import traceback
        traceback.print_exc()

if __name__ == "__main__":
    quick_seed()
