import datetime
import os
from typing import List, Optional, Any
from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from sqlalchemy import Column, Integer, String, Float, DateTime, ForeignKey, create_engine
from sqlalchemy.orm import Session, relationship, sessionmaker, declarative_base

# ── DATABASE SETUP ──
SQLALCHEMY_DATABASE_URL = "sqlite:///./sql_app.db"
engine = create_engine(SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False})
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

# ── MODELS ──
class Company(Base):
    __tablename__ = "companies"
    id = Column(Integer, primary_key=True, index=True)
    ticker = Column(String, unique=True, index=True)
    name = Column(String)
    full_name = Column(String, nullable=True)
    description = Column(String, nullable=True)
    sector = Column(String, nullable=True)
    logo_bg = Column(String, nullable=True)
    logo_color = Column(String, nullable=True)
    logo_text = Column(String, nullable=True)
    financials = relationship("CompanyFinancial", back_populates="company")
    bonds = relationship("Bond", back_populates="company")
    indicators = relationship("CompanyIndicator", uselist=False, back_populates="company")

class CompanyFinancial(Base):
    __tablename__ = "company_financials"
    id = Column(Integer, primary_key=True, index=True)
    company_id = Column(Integer, ForeignKey("companies.id"))
    period = Column(String)
    revenue = Column(Float, nullable=True)
    ebitda = Column(Float, nullable=True)
    net_profit = Column(Float, nullable=True)
    fcf = Column(Float, nullable=True)
    company = relationship("Company", back_populates="financials")

class Bond(Base):
    __tablename__ = "bonds"
    id = Column(Integer, primary_key=True, index=True)
    company_id = Column(Integer, ForeignKey("companies.id"))
    ticker = Column(String)
    name = Column(String)
    currency = Column(String)
    yield_val = Column(Float)
    company = relationship("Company", back_populates="bonds")

class CompanyIndicator(Base):
    __tablename__ = "company_indicators"
    id = Column(Integer, primary_key=True, index=True)
    company_id = Column(Integer, ForeignKey("companies.id"))
    pe = Column(Float, nullable=True)
    mkt_cap = Column(Float, nullable=True)
    free_float = Column(Float, nullable=True)
    company = relationship("Company", back_populates="indicators")

# ── SCHEMAS ──
class BondSchema(BaseModel):
    ticker: str
    name: str
    yield_val: float
    class Config: from_attributes = True

class FinancialSchema(BaseModel):
    period: str
    revenue: Optional[float]
    net_profit: Optional[float]
    class Config: from_attributes = True

class IndicatorSchema(BaseModel):
    pe: Optional[float]
    mkt_cap: Optional[float]
    free_float: Optional[float]
    class Config: from_attributes = True

class CompanySchema(BaseModel):
    ticker: str
    name: str
    full_name: Optional[str]
    sector: Optional[str]
    logo_bg: Optional[str]
    financials: List[FinancialSchema]
    bonds: List[BondSchema]
    indicators: Optional[IndicatorSchema]
    class Config: from_attributes = True

# ── APP ──
app = FastAPI(title="Andromeda Standalone API")
app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_methods=["*"], allow_headers=["*"])

def get_db():
    db = SessionLocal()
    try: yield db
    finally: db.close()

@app.get("/api/companies/{ticker}", response_model=CompanySchema)
def get_company(ticker: str, db: Session = Depends(get_db)):
    company = db.query(Company).filter(Company.ticker == ticker.upper()).first()
    if not company: raise HTTPException(status_code=404, detail="Company not found")
    return company

@app.get("/api/companies", response_model=List[CompanySchema])
def list_companies(db: Session = Depends(get_db)):
    return db.query(Company).all()

if __name__ == "__main__":
    import uvicorn
    Base.metadata.create_all(bind=engine)
    uvicorn.run(app, host="0.0.0.0", port=8005)
