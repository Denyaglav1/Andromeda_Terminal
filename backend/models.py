from sqlalchemy import Column, Integer, String, Float, DateTime, ForeignKey
from sqlalchemy.orm import relationship
import datetime
try:
    from backend import database
except ImportError:
    import database

Base = database.Base

class IndexTicker(Base):
    __tablename__ = "index_tickers"

    id = Column(Integer, primary_key=True, index=True)
    ticker = Column(String, unique=True, index=True)
    name = Column(String)

    # relations
    data = relationship("IndexData", back_populates="ticker_info", cascade="all, delete-orphan")
    constituents = relationship("IndexConstituent", back_populates="ticker_info", cascade="all, delete-orphan")
    documents = relationship("IndexDocument", back_populates="ticker_info", cascade="all, delete-orphan")

class IndexConstituent(Base):
    __tablename__ = "index_constituents"

    id = Column(Integer, primary_key=True, index=True)
    ticker_id = Column(Integer, ForeignKey("index_tickers.id"))
    ticker = Column(String, index=True)
    asset_name = Column(String)
    isin = Column(String, nullable=True)
    weight = Column(Float, nullable=True)
    last_updated = Column(DateTime, default=datetime.datetime.utcnow)

    ticker_info = relationship("IndexTicker", back_populates="constituents")

class IndexData(Base):
    __tablename__ = "index_data"

    id = Column(Integer, primary_key=True, index=True)
    ticker_id = Column(Integer, ForeignKey("index_tickers.id"))
    timestamp = Column(DateTime, default=datetime.datetime.utcnow, index=True)
    
    current_value = Column(Float, nullable=True)
    percent_change = Column(Float, nullable=True)
    absolute_change = Column(Float, nullable=True)
    
    open_value = Column(Float, nullable=True)
    prev_close = Column(Float, nullable=True)
    day_max = Column(Float, nullable=True)
    day_min = Column(Float, nullable=True)
    year_max = Column(Float, nullable=True)
    year_min = Column(Float, nullable=True)

    ticker_info = relationship("IndexTicker", back_populates="data")

class IndexDocument(Base):
    __tablename__ = "index_documents"

    id = Column(Integer, primary_key=True, index=True)
    ticker_id = Column(Integer, ForeignKey("index_tickers.id"))
    title = Column(String)
    category = Column(String, nullable=True)
    url = Column(String)
    publish_date = Column(DateTime, nullable=True)
    start_date = Column(DateTime, nullable=True)

    ticker_info = relationship("IndexTicker", back_populates="documents")

class Company(Base):
    __tablename__ = "companies"
    id = Column(Integer, primary_key=True, index=True)
    ticker = Column(String, unique=True, index=True)
    name = Column(String)
    full_name = Column(String, nullable=True)
    description = Column(String, nullable=True)
    sector = Column(String, nullable=True)
    region = Column(String, nullable=True)
    website = Column(String, nullable=True)
    logo_bg = Column(String, nullable=True)
    logo_color = Column(String, nullable=True)
    logo_text = Column(String, nullable=True)

    # Relations
    financials = relationship("CompanyFinancial", back_populates="company", cascade="all, delete-orphan")
    bonds = relationship("Bond", back_populates="company", cascade="all, delete-orphan")
    indicators = relationship("CompanyIndicator", uselist=False, back_populates="company", cascade="all, delete-orphan")

class CompanyFinancial(Base):
    __tablename__ = "company_financials"
    id = Column(Integer, primary_key=True, index=True)
    company_id = Column(Integer, ForeignKey("companies.id"))
    period = Column(String) # e.g. "2021", "2024 Q1"
    revenue = Column(Float, nullable=True)
    ebitda = Column(Float, nullable=True)
    net_profit = Column(Float, nullable=True)
    fcf = Column(Float, nullable=True)
    net_debt = Column(Float, nullable=True)

    company = relationship("Company", back_populates="financials")

class Bond(Base):
    __tablename__ = "bonds"
    id = Column(Integer, primary_key=True, index=True)
    company_id = Column(Integer, ForeignKey("companies.id"))
    ticker = Column(String)
    name = Column(String)
    currency = Column(String)
    volume = Column(Float)
    yield_val = Column(Float)
    duration = Column(Float)
    coupon = Column(Float)
    option = Column(String, nullable=True)
    maturity_date = Column(DateTime, nullable=True)
    placement_date = Column(DateTime, nullable=True)

    company = relationship("Company", back_populates="bonds")

class CompanyIndicator(Base):
    __tablename__ = "company_indicators"
    id = Column(Integer, primary_key=True, index=True)
    company_id = Column(Integer, ForeignKey("companies.id"))
    
    pe = Column(Float, nullable=True)
    ev_ebitda = Column(Float, nullable=True)
    roe = Column(Float, nullable=True)
    net_debt_ebitda = Column(Float, nullable=True)
    div_yield = Column(Float, nullable=True)
    next_record_date = Column(DateTime, nullable=True)
    next_div_per_share = Column(Float, nullable=True)
    mkt_cap = Column(Float, nullable=True)
    free_float = Column(Float, nullable=True) # %

    company = relationship("Company", back_populates="indicators")
