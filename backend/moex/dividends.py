"""
MOEX ISS — дивиденды по акциям.
Эндпоинт: /iss/securities/{ticker}/dividends
"""

import datetime
import logging
from sqlalchemy.orm import Session
from .client import iss_get, iss_rows

logger = logging.getLogger(__name__)


def fetch_dividends(ticker: str) -> list[dict]:
    """
    Загружает историю дивидендов по тикеру.
    Возвращает список: {secid, isin, registryclosedate, value, currencyid}
    """
    data = iss_get(
        f"/securities/{ticker}/dividends",
        params={"dividends.columns": "secid,isin,registryclosedate,value,currencyid"},
    )
    return iss_rows(data, "dividends")


def save_dividends(db: Session, ticker: str, rows: list[dict]) -> int:
    """Сохраняет/обновляет записи о дивидендах в таблицу moex_dividends."""
    try:
        from backend import models
    except ImportError:
        import models  # type: ignore

    MoexDividend = models.MoexDividend
    saved = 0

    # Удаляем старые данные по тикеру и вставляем заново
    db.query(MoexDividend).filter(MoexDividend.ticker == ticker).delete()

    for row in rows:
        date_str = row.get("registryclosedate")
        value = row.get("value")
        if not date_str or value is None:
            continue
        try:
            record_date = datetime.datetime.strptime(date_str, "%Y-%m-%d").date()
        except ValueError:
            continue

        db.add(MoexDividend(
            ticker=ticker,
            isin=row.get("isin"),
            record_date=datetime.datetime.combine(record_date, datetime.time()),
            value=float(value),
            currency=row.get("currencyid") or "RUB",
        ))
        saved += 1

    db.commit()
    return saved


def sync_dividends(db: Session, ticker: str) -> int:
    rows = fetch_dividends(ticker)
    return save_dividends(db, ticker, rows)


def sync_dividends_batch(db: Session, tickers: list[str]) -> dict[str, int]:
    results = {}
    for ticker in tickers:
        try:
            n = sync_dividends(db, ticker)
            results[ticker] = n
        except Exception as exc:
            logger.warning("Ошибка дивидендов %s: %s", ticker, exc)
            results[ticker] = 0
    return results


def calc_div_yield(db: Session, ticker: str, price: float | None) -> float | None:
    """
    Рассчитывает дивидендную доходность за последние 12 месяцев.
    div_yield = sum(dividends last 12m) / price * 100
    """
    if not price or price <= 0:
        return None
    try:
        from backend import models
    except ImportError:
        import models  # type: ignore

    MoexDividend = models.MoexDividend
    cutoff = datetime.datetime.utcnow() - datetime.timedelta(days=365)

    divs = (
        db.query(MoexDividend)
        .filter(MoexDividend.ticker == ticker, MoexDividend.record_date >= cutoff)
        .all()
    )

    total = sum(d.value for d in divs if d.currency == "RUB")
    if total <= 0:
        return None
    return round(total / price * 100, 2)
