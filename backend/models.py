from sqlalchemy import Column, Integer, String, Float, DateTime, ForeignKey
from sqlalchemy.orm import relationship
import datetime
from backend.database import Base

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
