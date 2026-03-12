"""
MOEX ISS — текущие котировки акций.
Один запрос на весь рынок (TQBR), затем upsert в таблицу moex_quotes.
"""

import datetime
import logging
from sqlalchemy.orm import Session
from .client import iss_get, iss_rows

logger = logging.getLogger(__name__)

# Только акции основного режима T+ (TQBR)
BOARD = "TQBR"


def fetch_all_quotes() -> list[dict]:
    """
    Загружает котировки всех акций с борда TQBR одним запросом.
    Возвращает список словарей с объединёнными данными securities + marketdata.
    """
    data = iss_get(
        f"/engines/stock/markets/shares/boards/{BOARD}/securities",
        params={
            "iss.only": "securities,marketdata",
            "securities.columns": "SECID,SHORTNAME,PREVPRICE,PREVDATE,LOTSIZE,DECIMALS,ISIN",
            "marketdata.columns": "SECID,LAST,OPEN,HIGH,LOW,WAPRICE,LASTCHANGE,LASTTOPREVPRICE,VOLTODAY,VALTODAY,TIME,SYSTIME",
        },
    )

    sec_rows    = {r["SECID"]: r for r in iss_rows(data, "securities")}
    market_rows = {r["SECID"]: r for r in iss_rows(data, "marketdata")}

    result = []
    for secid, sec in sec_rows.items():
        mkt = market_rows.get(secid, {})
        result.append({**sec, **mkt})
    return result


def fetch_quote(ticker: str) -> dict | None:
    """Котировка одного инструмента."""
    data = iss_get(
        f"/engines/stock/markets/shares/boards/{BOARD}/securities/{ticker}",
        params={
            "iss.only": "securities,marketdata",
            "securities.columns": "SECID,SHORTNAME,PREVPRICE,PREVDATE,LOTSIZE,ISIN",
            "marketdata.columns": "SECID,LAST,OPEN,HIGH,LOW,WAPRICE,LASTCHANGE,LASTTOPREVPRICE,VOLTODAY,VALTODAY,TIME",
        },
    )
    from .client import iss_first
    sec = iss_first(data, "securities")
    mkt = iss_first(data, "marketdata")
    if sec:
        return {**(sec or {}), **(mkt or {})}
    return None


def upsert_quotes(db: Session, quotes: list[dict]) -> int:
    """Upsert котировок в таблицу moex_quotes. Возвращает количество обновлённых."""
    try:
        from backend import models
    except ImportError:
        import models  # type: ignore

    MoexQuote = models.MoexQuote
    now = datetime.datetime.utcnow()
    saved = 0

    for q in quotes:
        secid = q.get("SECID")
        if not secid:
            continue

        last = q.get("LAST") or q.get("PREVPRICE")
        if last is None:
            continue  # нет цены — пропускаем

        row = db.query(MoexQuote).filter(MoexQuote.ticker == secid).first()
        if row is None:
            row = MoexQuote(ticker=secid)
            db.add(row)

        row.shortname        = q.get("SHORTNAME") or row.shortname
        row.isin             = q.get("ISIN") or row.isin
        row.last_price       = float(last)
        row.open_price       = _f(q.get("OPEN"))
        row.high_price       = _f(q.get("HIGH"))
        row.low_price        = _f(q.get("LOW"))
        row.prev_close       = _f(q.get("PREVPRICE"))
        row.wap_price        = _f(q.get("WAPRICE"))
        row.change           = _f(q.get("LASTCHANGE"))
        row.change_pct       = _f(q.get("LASTTOPREVPRICE"))
        row.volume           = _i(q.get("VOLTODAY"))
        row.value_rub        = _f(q.get("VALTODAY"))
        row.updated_at       = now
        saved += 1

    db.commit()
    return saved


def run_quotes_update(db: Session) -> int:
    """Полный цикл: загрузка всех котировок с MOEX и сохранение в БД."""
    logger.info("Обновление котировок MOEX...")
    quotes = fetch_all_quotes()
    if not quotes:
        logger.warning("MOEX котировки не получены")
        return 0
    saved = upsert_quotes(db, quotes)
    logger.info("Сохранено котировок: %d", saved)
    return saved


# ─── helpers ──────────────────────────────────────────────────────────────────

def _f(val) -> float | None:
    try:
        return float(val) if val is not None else None
    except (TypeError, ValueError):
        return None


def _i(val) -> int | None:
    try:
        return int(val) if val is not None else None
    except (TypeError, ValueError):
        return None
