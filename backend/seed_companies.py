import datetime
import random
import sys
import os

# Add current directory to path if needed for local execution
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

try:
    from backend import database
except ImportError:
    import database

try:
    from backend import models
except ImportError:
    import models

SessionLocal = database.SessionLocal
engine = database.engine
Company = models.Company
CompanyFinancial = models.CompanyFinancial
Bond = models.Bond
CompanyIndicator = models.CompanyIndicator
Base = models.Base

def seed_data():
    print("Starting seed_data...")
    # Create tables
    print("Creating tables...")
    Base.metadata.create_all(bind=engine)
    print("Tables created.")
    
    db = SessionLocal()
    try:
        # Check if companies already exist
        if db.query(Company).first():
            print("Database already seeded. Skipping...")
            return

        # 1. SPECIAL CASE: SBERBANK (Matching Figma)
        sber = Company(
            ticker="SBER",
            name="Сбербанк",
            full_name="ПАО «СберБанк России»",
            description="ПАО «СберБанк России» занимается оказанием банковских и финансовых услуг. Компания ведет корпоративную и розничную банковскую деятельность, предлагая такие услуги, как: корпоративные займы, управление активами...",
            sector="Financials",
            region="Россия",
            website="sber.ru",
            logo_bg="#008E38",
            logo_color="#FFFFFF",
            logo_text="СБ"
        )
        db.add(sber)
        db.flush() # Get ID

        # SBER Financials (Matching Figma numbers $ mln)
        fin_data = [
            ("2021", 6395, 1377, 547, 1555, -99),
            ("2022", 11869, 4175, 2895, 1611, -99),
            ("2023", 10129, 2184, 987, 1129, -99),
            ("2024 Q1", 8956, 2259, 987, 351, -99),
            ("2024 Q2", 10018, 2732, 987, 1113, -99),
        ]
        for period, rev, ebitda, ni, fcf, nd in fin_data:
            db.add(CompanyFinancial(
                company_id=sber.id,
                period=period,
                revenue=rev,
                ebitda=ebitda,
                net_profit=ni,
                fcf=fcf,
                net_debt=nd
            ))

        # SBER Bonds (Sample based on Figma)
        for i in range(1, 7):
            db.add(Bond(
                company_id=sber.id,
                ticker=f"Сбер Sb1{i}R",
                name=f"Сбер Sb1{i}R",
                currency="RUB",
                volume=750000,
                yield_val=24.00,
                duration=0.85,
                coupon=24.00,
                option="Put",
                maturity_date=datetime.datetime(2024, 11, 10),
                placement_date=datetime.datetime(2024, 7, 18)
            ))

        # SBER Indicators
        db.add(CompanyIndicator(
            company_id=sber.id,
            pe=23.76,
            ev_ebitda=23.76,
            roe=23.76,
            net_debt_ebitda=23.76,
            div_yield=23.76,
            next_record_date=datetime.datetime(2026, 6, 28),
            next_div_per_share=23.76,
            mkt_cap=6637335.64,
            free_float=79.0
        ) )

        # 2. GENERATE OTHER COMPANIES (Expanded to 40 total)
        others: list[tuple[str, str, str, str]] = [
            ("GAZP", "Газпром", "Energy", "#003DA5"),
            ("LKOH", "ЛУКОЙЛ", "Energy", "#E30611"),
            ("ROSN", "Роснефть", "Energy", "#FFCA30"),
            ("VTBR", "ВТБ", "Financials", "#004B87"),
            ("YNDX", "Яндекс", "Technology", "#FFBE00"),
            ("NVTK", "Новатэк", "Energy", "#00569C"),
            ("TATN", "Татнефть", "Energy", "#E11C23"),
            ("GMKN", "Норникель", "Materials", "#004A99"),
            ("MGNT", "Магнит", "Consumer Staples", "#E30611"),
            ("CHMF", "Северсталь", "Materials", "#014B87"),
            ("ALRS", "АЛРОСА", "Materials", "#0066B3"),
            ("MTSS", "МТС", "Communication Services", "#E30611"),
            ("NLMK", "НЛМК", "Materials", "#005A9C"),
            ("PHOR", "Фосагро", "Materials", "#00A251"),
            ("MOEX", "МосБиржа", "Financials", "#E30611"),
            ("IRAO", "Интер РАО", "Utilities", "#E30611"),
            ("SNGS", "Сургутнефтегаз", "Energy", "#FFCD00"),
            ("PLZL", "Полюс", "Materials", "#D4AF37"),
            ("POLY", "Polymetal", "Materials", "#999999"),
            ("MAGN", "ММК", "Materials", "#00569C"),
            ("CBOM", "МКБ", "Financials", "#C8102E"),
            ("TCSG", "ТКС Холдинг", "Financials", "#FFDD00"),
            ("AFKS", "АФК Система", "Financials", "#E30611"),
            ("HYDR", "РусГидро", "Utilities", "#005CAB"),
            ("PIKK", "ПИК", "Real Estate", "#FF6600"),
            ("FEES", "Россети", "Utilities", "#005A9C"),
            ("TRNFP", "Транснефть", "Energy", "#004B87"),
            ("AFLT", "Аэрофлот", "Industrials", "#003DA5"),
            ("RTKM", "Ростелеком", "Communication Services", "#005CAB"),
            ("RENI", "Ренессанс", "Financials", "#E30611"),
            ("FESH", "ДВМП", "Industrials", "#005A9C"),
            ("OZON", "ОЗОН", "Consumer Discretionary", "#005BFF"),
            ("POSI", "Positive Tech", "Technology", "#E30611"),
            ("GLTR", "Globaltrans", "Industrials", "#004B87"),
            ("SGZH", "Сегежа", "Materials", "#008B45"),
            ("SELG", "Селигдар", "Materials", "#DAA520"),
            ("UPRO", "Юнипро", "Utilities", "#005A9C"),
            ("LSRG", "ЛСР", "Real Estate", "#E30611"),
            ("BSPB", "БСП", "Financials", "#004B87"),
        ]

        for ticker, name, sector, color in others:
            c = Company(
                ticker=ticker,
                name=name,
                sector=sector,
                logo_bg=color,
                logo_color="#FFFFFF",
                logo_text=ticker[:2]
            )
            db.add(c)
            db.flush()
            
            # Generate random financials
            years = ["2021", "2022", "2023", "2024 Q1", "2024 Q2"]
            for period in years:
                db.add(CompanyFinancial(
                    company_id=c.id,
                    period=period,
                    revenue=random.uniform(5000, 25000),
                    ebitda=random.uniform(1000, 8000),
                    net_profit=random.uniform(500, 5000),
                    fcf=random.uniform(400, 3000),
                    net_debt=random.uniform(-500, 5000)
                ))
            
            # Generate sample bonds for each
            for i in range(1, 4):
                db.add(Bond(
                    company_id=c.id,
                    ticker=f"{ticker} B{i}",
                    name=f"{name} Облигация {i}",
                    currency="RUB",
                    volume=random.uniform(100000, 1000000),
                    yield_val=random.uniform(15, 25),
                    duration=random.uniform(0.5, 3.0),
                    coupon=random.uniform(10, 20),
                    maturity_date=datetime.datetime.now() + datetime.timedelta(days=random.randint(200, 1000))
                ))

            db.add(CompanyIndicator(
                company_id=c.id,
                pe=random.uniform(3, 40),
                ev_ebitda=random.uniform(2, 20),
                roe=random.uniform(5, 50),
                div_yield=random.uniform(0, 15),
                mkt_cap=random.uniform(500000, 50000000),
                free_float=random.uniform(5, 50)
            ))

        db.commit()
        print(f"Successfully seeded {len(others) + 1} companies!")
    except Exception as e:
        db.rollback()
        print(f"Error seeding data: {e}")
        raise
    finally:
        db.close()

if __name__ == "__main__":
    seed_data()
