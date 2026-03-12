"""
MOEX ISS — исторические данные и свечи.

Интервалы свечей ISS:
  1   = 1 минута
  10  = 10 минут
  60  = 1 час
  24  = 1 день
  7   = 1 неделя
  31  = 1 месяц

Дневная история доступна с 2011 года через /history/...
Свечи (intraday) — текущий и предыдущий дни.
"""

import datetime
import logging
from sqlalchemy.orm import Session
from .client import iss_get, iss_rows

logger = logging.getLogger(__name__)

BOARD = "TQBR"

# Маппинг удобных названий → коды ISS
INTERVAL_MAP = {
    "1min":  1,
    "10min": 10,
    "hour":  60,
    "day":   24,
    "week":  7,
    "month": 31,
}


# ─── Дневная история ──────────────────────────────────────────────────────────

def fetch_daily_history(ticker: str, date_from: str, date_till: str | None = None) -> list[dict]:
    """
    Загружает дневную историю торгов для тикера (режим TQBR).
    date_from / date_till: строки "YYYY-MM-DD"
    Возвращает список записей: {TRADEDATE, OPEN, HIGH, LOW, CLOSE, VOLUME, WAPRICE, VALUE}
    Поддерживает пагинацию автоматически.
    """
    params: dict = {
        "history.columns": "TRADEDATE,OPEN,HIGH,LOW,CLOSE,VOLUME,WAPRICE,VALUE",
        "from": date_from,
        "limit": 100,
        "start": 0,
    }
    if date_till:
        params["till"] = date_till

    all_rows: list[dict] = []

    while True:
        data = iss_get(
            f"/history/engines/stock/markets/shares/boards/{BOARD}/securities/{ticker}",
            params=params,
        )
        rows = iss_rows(data, "history")
        all_rows.extend(rows)

        # Пагинация через history.cursor
        cursor = iss_rows(data, "history.cursor")
        if not cursor:
            break
        c = cursor[0]
        total = c.get("TOTAL", 0)
        page_size = c.get("PAGESIZE", 100)
        index = c.get("INDEX", 0)
        if index + page_size >= total:
            break
        params["start"] = index + page_size

    return all_rows


def save_daily_history(db: Session, ticker: str, rows: list[dict]) -> int:
    """Сохраняет дневную историю в таблицу moex_candles (interval='day')."""
    try:
        from backend import models
    except ImportError:
        import models  # type: ignore

    MoexCandle = models.MoexCandle
    saved = 0

    for row in rows:
        trade_date = row.get("TRADEDATE")
        close_price = row.get("CLOSE")
        if not trade_date or close_price is None:
            continue

        # begin_dt = начало торгового дня 10:00 МСК
        try:
            dt = datetime.datetime.strptime(trade_date, "%Y-%m-%d").replace(hour=10)
        except ValueError:
            continue

        existing = db.query(MoexCandle).filter(
            MoexCandle.ticker == ticker,
            MoexCandle.interval == "day",
            MoexCandle.begin_dt == dt,
        ).first()

        if existing is None:
            candle = MoexCandle(
                ticker=ticker,
                interval="day",
                begin_dt=dt,
                open=_f(row.get("OPEN")),
                high=_f(row.get("HIGH")),
                low=_f(row.get("LOW")),
                close=_f(close_price),
                volume=_i(row.get("VOLUME")),
                value=_f(row.get("VALUE")),
                wap=_f(row.get("WAPRICE")),
            )
            db.add(candle)
            saved += 1

    db.commit()
    return saved


def sync_history(db: Session, ticker: str, years_back: int = 5) -> int:
    """
    Синхронизирует историю для тикера.
    Определяет с какой даты нужно докачивать.
    """
    try:
        from backend import models
    except ImportError:
        import models  # type: ignore

    MoexCandle = models.MoexCandle

    # Находим последнюю сохранённую свечу
    last = (
        db.query(MoexCandle)
        .filter(MoexCandle.ticker == ticker, MoexCandle.interval == "day")
        .order_by(MoexCandle.begin_dt.desc())
        .first()
    )

    if last:
        date_from = (last.begin_dt + datetime.timedelta(days=1)).strftime("%Y-%m-%d")
    else:
        date_from = (datetime.date.today() - datetime.timedelta(days=365 * years_back)).strftime("%Y-%m-%d")

    date_till = datetime.date.today().strftime("%Y-%m-%d")

    if date_from > date_till:
        return 0  # уже актуально

    rows = fetch_daily_history(ticker, date_from, date_till)
    return save_daily_history(db, ticker, rows)


# ─── Свечи (intraday) ─────────────────────────────────────────────────────────

def fetch_candles(ticker: str, interval: str = "hour",
                  date_from: str | None = None, date_till: str | None = None) -> list[dict]:
    """
    Загружает свечи для тикера.
    interval: '1min' | '10min' | 'hour' | 'day' | 'week' | 'month'
    Возвращает список: {open, high, low, close, volume, value, begin, end}
    """
    interval_code = INTERVAL_MAP.get(interval, 60)

    params: dict = {
        "candles.columns": "open,close,high,low,value,volume,begin,end",
        "interval": interval_code,
    }
    if date_from:
        params["from"] = date_from
    if date_till:
        params["till"] = date_till

    data = iss_get(
        f"/engines/stock/markets/shares/boards/{BOARD}/securities/{ticker}/candles",
        params=params,
    )
    return iss_rows(data, "candles")


def save_candles(db: Session, ticker: str, interval: str, rows: list[dict]) -> int:
    """Сохраняет свечи в таблицу moex_candles (без дублей)."""
    try:
        from backend import models
    except ImportError:
        import models  # type: ignore

    MoexCandle = models.MoexCandle
    saved = 0

    for row in rows:
        begin_str = row.get("begin")
        close_price = row.get("close")
        if not begin_str or close_price is None:
            continue
        try:
            dt = datetime.datetime.strptime(begin_str, "%Y-%m-%d %H:%M:%S")
        except ValueError:
            continue

        existing = db.query(MoexCandle).filter(
            MoexCandle.ticker == ticker,
            MoexCandle.interval == interval,
            MoexCandle.begin_dt == dt,
        ).first()

        if existing is None:
            db.add(MoexCandle(
                ticker=ticker,
                interval=interval,
                begin_dt=dt,
                open=_f(row.get("open")),
                high=_f(row.get("high")),
                low=_f(row.get("low")),
                close=_f(close_price),
                volume=_i(row.get("volume")),
                value=_f(row.get("value")),
            ))
            saved += 1

    db.commit()
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
