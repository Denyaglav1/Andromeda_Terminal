"""
SPBIDGT Index Calculator
СПБ Цифровая Экономика – SPB Digital Economy Index

Методика: утверждена приказом №338/2 от 04.12.2025
База расчёта (с 29.09.2025): ASTR, DELI, HEAD, MTSS, OZON, POSI, T, VKCO, WUSH, YDEX

Формула:
    I_t = I_{t-1} × [1 + Exp_{t-1} × (PP_t/PP_{t-1} - 1)
                        - Exp_{t-1} × ((R_{t-1} + 0.0061) × DC/365)]

    Exp_t    = min(MaxExp=1.00; TargetVol=0.15 / FactVol_{t-1})
    FactVol_t = sqrt(252) × rolling_sample_std(ln(PP), n=20)
    PP_t     = PP_{t-1} × (1 + sum_i(Ratio_i × Δ_t_i))
    Δ_t_i    = (px_t_i + Div_t_i*(1-tax)) / px_{t-1}_i - 1

Источники данных:
  - Цены: MOEX ISS (все бумаги в рублях, борд TQBR)
  - Ставка R: RUONIA из ЦБ РФ SOAP API (fallback: ключевая ставка ЦБ)
  - Дивиденды: MOEX ISS /securities/{ticker}/dividends
"""

import math
import datetime
import logging

import httpx
import numpy as np
import pandas as pd
from sqlalchemy.orm import Session

logger = logging.getLogger(__name__)

# ── CONFIG ─────────────────────────────────────────────────────────────────────

INDEX_CODE = "SPBIDGT"
# Дата начала расчётов по методике — 17.12.2018.
# Расширяем расчёт до начала официальной истории в БД (07.03.2023),
# используя текущий состав базы (с 29.09.2025) с нормализацией весов
# для компонентов, которые ещё не торговались.
START_DATE = datetime.date(2023, 3, 7)
I0 = 100.0

# Состав базы расчёта (Приложение к Методике, дата 29.09.2025)
COMPONENTS = [
    {"ticker": "ASTR",  "ratio": 0.1, "isin": "RU000A106T36", "name": "Группа Астра"},
    {"ticker": "DELI",  "ratio": 0.1, "isin": "RU000A107J11", "name": "Делимобиль"},
    {"ticker": "HEAD",  "ratio": 0.1, "isin": "RU000A107662", "name": "HeadHunter"},
    {"ticker": "MTSS",  "ratio": 0.1, "isin": "RU0007775219", "name": "МТС"},
    {"ticker": "OZON",  "ratio": 0.1, "isin": "RU000A10CW95", "name": "Ozon"},
    {"ticker": "POSI",  "ratio": 0.1, "isin": "RU000A103X66", "name": "Positive Technologies"},
    {"ticker": "T",     "ratio": 0.1, "isin": "RU000A107UL4", "name": "ТКС Холдинг"},
    {"ticker": "VKCO",  "ratio": 0.1, "isin": "RU000A106YF0", "name": "VK Company"},
    {"ticker": "WUSH",  "ratio": 0.1, "isin": "RU000A105EX7", "name": "Whoosh"},
    {"ticker": "YDEX",  "ratio": 0.1, "isin": "RU000A107T19", "name": "Яндекс"},
]

# Тикеры-предшественники для редомицилированных бумаг.
# Формат: ticker → [(predecessor, date_from, date_till), ...]
# date_till — последний день торгов под старым тикером (включительно).
PREDECESSOR_MAP: dict[str, list[tuple[str, datetime.date | None, datetime.date]]] = {
    "T":    [("TCSG", None, datetime.date(2024, 11, 27))],  # ТКС до редомициляции
    "YDEX": [("YNDX", None, datetime.date(2024, 7, 23))],   # Яндекс до редомициляции
}

TARGET_VOL  = 0.15   # 15% годовых
MAX_EXP     = 1.00   # 100%
N_VOL       = 20     # скользящее окно волатильности
DIV_TAX_RUB = 0.15   # налог на дивиденды для РФ бумаг
RUONIA_SPREAD = 0.0061  # +61 bps к RUONIA согласно методике
DC_DIVISOR  = 365    # годовой делитель (365, не 360)
BOOTSTRAP_DAYS = 90  # дней истории до START_DATE для расчёта vol

# ── ДАННЫЕ: СТАВКА RUONIA ──────────────────────────────────────────────────────

# Историческая таблица ключевых ставок ЦБ РФ (приближение RUONIA ≈ ключевая - 15 bps)
# Используется как fallback, если ЦБ РФ API недоступен.
# RUONIA_APPROX = ключевая_ставка - 0.0015
_KEY_RATE_HISTORY: list[tuple[datetime.date, float]] = [
    # Источник: https://ipb.ru/about/general-information/rate-history.php
    # (дата вступления в силу, ставка в долях)
    (datetime.date(2018,  2,  9), 0.0750),
    (datetime.date(2018,  3, 23), 0.0725),
    (datetime.date(2018,  9, 14), 0.0750),
    (datetime.date(2018, 12, 14), 0.0775),
    (datetime.date(2019,  6, 14), 0.0750),
    (datetime.date(2019,  7, 26), 0.0725),
    (datetime.date(2019,  9,  6), 0.0700),
    (datetime.date(2019, 10, 25), 0.0650),
    (datetime.date(2019, 12, 13), 0.0625),
    (datetime.date(2020,  2,  7), 0.0600),
    (datetime.date(2020,  4, 24), 0.0550),
    (datetime.date(2020,  6, 19), 0.0450),
    (datetime.date(2020,  7, 24), 0.0425),
    (datetime.date(2021,  3, 19), 0.0450),
    (datetime.date(2021,  4, 23), 0.0500),
    (datetime.date(2021,  6, 11), 0.0550),
    (datetime.date(2021,  7, 23), 0.0650),
    (datetime.date(2021,  9, 10), 0.0675),
    (datetime.date(2021, 10, 22), 0.0750),
    (datetime.date(2021, 12, 17), 0.0850),
    (datetime.date(2022,  2, 11), 0.0950),
    (datetime.date(2022,  2, 28), 0.2000),
    (datetime.date(2022,  4,  8), 0.1700),
    (datetime.date(2022,  4, 29), 0.1400),
    (datetime.date(2022,  5, 26), 0.1100),
    (datetime.date(2022,  6, 10), 0.0950),
    (datetime.date(2022,  7, 22), 0.0800),
    (datetime.date(2022,  9, 16), 0.0750),
    (datetime.date(2023,  7, 21), 0.0850),
    (datetime.date(2023,  8, 15), 0.1200),
    (datetime.date(2023,  9, 15), 0.1300),
    (datetime.date(2023, 10, 27), 0.1500),
    (datetime.date(2023, 12, 15), 0.1600),
    (datetime.date(2024,  7, 26), 0.1800),
    (datetime.date(2024,  9, 13), 0.1900),
    (datetime.date(2024, 10, 25), 0.2100),
    # Цикл снижения 2025–2026
    (datetime.date(2025,  6,  6), 0.2000),
    (datetime.date(2025,  7, 25), 0.1800),
    (datetime.date(2025,  9, 12), 0.1700),
    (datetime.date(2025, 10, 24), 0.1650),
    (datetime.date(2025, 12, 19), 0.1600),
    (datetime.date(2026,  2, 13), 0.1550),
]


def get_key_rate_on_date(d: datetime.date) -> float:
    """Возвращает ключевую ставку ЦБ РФ на дату d (ступенчатая таблица)."""
    rate = _KEY_RATE_HISTORY[0][1]
    for effective_date, r in _KEY_RATE_HISTORY:
        if d >= effective_date:
            rate = r
        else:
            break
    return rate


def fetch_ruonia(start: datetime.date, end: datetime.date) -> pd.Series:
    """
    Получает ставку RUONIA из ЦБ РФ (SOAP API).
    Fallback: ключевая ставка ЦБ РФ - 15 bps (историческая таблица).
    """
    # Попытка 1: ЦБ РФ SOAP
    series = _ruonia_from_cbr_soap(start, end)
    if not series.empty:
        return series

    logger.warning("RUONIA из ЦБ РФ недоступна. Используем ключевую ставку ЦБ - 15 bps.")
    return _ruonia_from_key_rate(start, end)


def _ruonia_from_cbr_soap(start: datetime.date, end: datetime.date) -> pd.Series:
    """SOAP запрос к ЦБ РФ для получения RUONIA."""
    soap_body = f'''<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <GetRuoniaSV xmlns="http://web.cbr.ru/">
      <fromDate>{start.isoformat()}T00:00:00</fromDate>
      <ToDate>{end.isoformat()}T00:00:00</ToDate>
    </GetRuoniaSV>
  </soap:Body>
</soap:Envelope>'''

    try:
        r = httpx.post(
            "https://www.cbr.ru/DailyInfoWebServ/DailyInfo.asmx",
            content=soap_body.encode("utf-8"),
            headers={
                "Content-Type": "text/xml; charset=utf-8",
                "SOAPAction": "http://web.cbr.ru/GetRuoniaSV",
            },
            timeout=15.0,
        )
        if r.status_code != 200:
            return pd.Series(dtype=float, name="ruonia")

        import xml.etree.ElementTree as ET
        root = ET.fromstring(r.content)

        ns = {"cbr": "http://web.cbr.ru/"}
        dates, rates = [], []
        for row in root.iter("RuoniaSV"):
            d_elem = row.find("D0")
            r_elem = row.find("ruo")
            if d_elem is not None and r_elem is not None and r_elem.text:
                try:
                    dt = datetime.datetime.fromisoformat(d_elem.text)
                    rates.append(float(r_elem.text.replace(",", ".")) / 100.0)
                    dates.append(dt)
                except (ValueError, TypeError):
                    continue

        if not dates:
            return pd.Series(dtype=float, name="ruonia")

        s = pd.Series(rates, index=pd.DatetimeIndex(dates), name="ruonia")
        return s.sort_index()

    except Exception as exc:
        logger.debug("CBR SOAP RUONIA error: %s", exc)
        return pd.Series(dtype=float, name="ruonia")


def _ruonia_from_key_rate(start: datetime.date, end: datetime.date) -> pd.Series:
    """
    Строит ежедневный ряд RUONIA ≈ ключевая ставка ЦБ РФ - 15 bps.
    """
    fetch_start = start - datetime.timedelta(days=90)
    date_range = pd.date_range(
        start=fetch_start.strftime("%Y-%m-%d"),
        end=end.strftime("%Y-%m-%d"),
        freq="D",
    )
    rates = [get_key_rate_on_date(d.date()) - 0.0015 for d in date_range]
    s = pd.Series(rates, index=date_range, name="ruonia")
    return s


# ── ДАННЫЕ: ЦЕНЫ КОМПОНЕНТОВ ───────────────────────────────────────────────────

def _fetch_candles_for_ticker(db, models_module, ticker: str,
                               dt_from: datetime.datetime, dt_to: datetime.datetime) -> pd.Series:
    """Вспомогательная: читает дневные свечи одного тикера из БД."""
    rows = (
        db.query(models_module.MoexCandle)
        .filter(
            models_module.MoexCandle.ticker == ticker,
            models_module.MoexCandle.interval == "day",
            models_module.MoexCandle.begin_dt >= dt_from,
            models_module.MoexCandle.begin_dt <= dt_to,
            models_module.MoexCandle.close.isnot(None),
        )
        .order_by(models_module.MoexCandle.begin_dt)
        .all()
    )
    if not rows:
        return pd.Series(dtype=float)
    return pd.Series(
        [float(r.close) for r in rows],
        index=pd.DatetimeIndex([r.begin_dt for r in rows]),
        name=ticker,
    )


def _prices_from_db(db, start: datetime.date, end: datetime.date) -> dict[str, pd.Series]:
    """
    Читает дневные свечи из таблицы moex_candles.
    Для тикеров с predecessor (T→TCSG, YDEX→YNDX) объединяет ряды:
      predecessor до даты перехода + текущий тикер после.
    """
    try:
        from backend import models
    except ImportError:
        import models  # type: ignore

    result: dict[str, pd.Series] = {}
    fetch_start = start - datetime.timedelta(days=BOOTSTRAP_DAYS)
    dt_from = datetime.datetime.combine(fetch_start, datetime.time.min)
    dt_to   = datetime.datetime.combine(end, datetime.time.max)

    for comp in COMPONENTS:
        ticker = comp["ticker"]
        series = _fetch_candles_for_ticker(db, models, ticker, dt_from, dt_to)

        # Predecessor: добавляем данные до даты перехода
        if ticker in PREDECESSOR_MAP:
            parts = [series]
            for pred_ticker, pred_from, pred_till in PREDECESSOR_MAP[ticker]:
                pred_dt_till = datetime.datetime.combine(pred_till, datetime.time.max)
                pred_series  = _fetch_candles_for_ticker(db, models, pred_ticker, dt_from, pred_dt_till)
                if not pred_series.empty:
                    parts.append(pred_series.rename(ticker))
            if len(parts) > 1:
                combined = pd.concat(parts).sort_index()
                # Убираем дубли (предпочитаем текущий тикер при перекрытии)
                combined = combined[~combined.index.duplicated(keep="last")]
                series = combined

        # Intraday: если последняя свеча старше сегодня — добавляем текущую котировку
        today = datetime.date.today()
        if not series.empty and series.index[-1].date() < today:
            quote_row = db.query(models.MoexQuote).filter(
                models.MoexQuote.ticker == ticker
            ).first()
            if quote_row and quote_row.last_price:
                intraday_dt = pd.Timestamp(datetime.datetime.combine(today, datetime.time(18, 30)))
                intraday = pd.Series([float(quote_row.last_price)], index=[intraday_dt], name=ticker)
                series = pd.concat([series, intraday])

        if not series.empty:
            result[ticker] = series

    return result


def _prices_from_http(start: datetime.date, end: datetime.date) -> dict[str, pd.Series]:
    """Fallback: загружает цены напрямую с MOEX ISS."""
    try:
        from backend.moex.history import fetch_daily_history
    except ImportError:
        from moex.history import fetch_daily_history  # type: ignore

    fetch_start = start - datetime.timedelta(days=BOOTSTRAP_DAYS)
    result: dict[str, pd.Series] = {}

    for comp in COMPONENTS:
        ticker = comp["ticker"]
        try:
            rows = fetch_daily_history(ticker, fetch_start.strftime("%Y-%m-%d"), end.strftime("%Y-%m-%d"))
            if not rows:
                continue
            valid = [(r["TRADEDATE"], r["CLOSE"]) for r in rows if r.get("CLOSE") is not None]
            dates  = [datetime.datetime.strptime(d, "%Y-%m-%d") for d, _ in valid]
            closes = [float(c) for _, c in valid]
            result[ticker] = pd.Series(closes, index=pd.DatetimeIndex(dates), name=ticker)
        except Exception as exc:
            logger.warning("HTTP: ошибка загрузки %s: %s", ticker, exc)

    return result


def fetch_component_prices(start: datetime.date, end: datetime.date,
                           db=None) -> pd.DataFrame:
    """
    Цены закрытия всех компонентов SPBIDGT.
    Приоритет: БД (moex_candles) → HTTP (MOEX ISS).
    Возвращает DataFrame: колонки = тикеры, индекс = DatetimeIndex.
    """
    all_prices: dict[str, pd.Series] = {}

    if db is not None:
        all_prices = _prices_from_db(db, start, end)
        missing = [c["ticker"] for c in COMPONENTS if c["ticker"] not in all_prices]
        if missing:
            logger.info("Не найдено в БД, запрашиваем через HTTP: %s", missing)
            http_prices = _prices_from_http(start, end)
            for t in missing:
                if t in http_prices:
                    all_prices[t] = http_prices[t]
    else:
        all_prices = _prices_from_http(start, end)

    if not all_prices:
        raise RuntimeError("Не удалось загрузить цены ни одного компонента SPBIDGT")

    df = pd.DataFrame(all_prices)
    df = df.sort_index().ffill()
    return df.dropna(how="all")


def _dividends_from_db(db, start: datetime.date, end: datetime.date) -> dict[str, pd.Series]:
    """Читает дивиденды из таблицы moex_dividends.
    Берём все записи до end без нижней границы — calc_portfolio_price
    самостоятельно фильтрует по торговому периоду.
    """
    try:
        from backend import models
    except ImportError:
        import models  # type: ignore

    result: dict[str, pd.Series] = {}
    for comp in COMPONENTS:
        ticker = comp["ticker"]
        rows = (
            db.query(models.MoexDividend)
            .filter(
                models.MoexDividend.ticker == ticker,
                models.MoexDividend.record_date <= datetime.datetime.combine(end, datetime.time.max),
            )
            .order_by(models.MoexDividend.record_date)
            .all()
        )
        if not rows:
            continue
        dates, amounts = [], []
        for r in rows:
            tax = DIV_TAX_RUB if (r.currency or "RUB") == "RUB" else 0.30
            amounts.append(float(r.value) * (1.0 - tax))
            dates.append(r.record_date)
        result[ticker] = pd.Series(amounts, index=pd.DatetimeIndex(dates), name=ticker)

    return result


def _dividends_from_http(start: datetime.date, end: datetime.date) -> dict[str, pd.Series]:
    """Fallback: дивиденды напрямую с MOEX ISS."""
    try:
        from backend.moex.client import iss_get, iss_rows
    except ImportError:
        from moex.client import iss_get, iss_rows  # type: ignore

    result: dict[str, pd.Series] = {}
    for comp in COMPONENTS:
        ticker = comp["ticker"]
        try:
            data = iss_get(f"/securities/{ticker}/dividends",
                           params={"dividends.columns": "secid,registryclosedate,value,currencyid"})
            rows = iss_rows(data, "dividends")
            dates, amounts = [], []
            for row in rows:
                date_str = row.get("registryclosedate")
                val = row.get("value")
                currency = row.get("currencyid", "RUB")
                if not date_str or val is None:
                    continue
                try:
                    dt = datetime.datetime.strptime(date_str, "%Y-%m-%d")
                    tax = DIV_TAX_RUB if currency == "RUB" else 0.30
                    amounts.append(float(val) * (1.0 - tax))
                    dates.append(dt)
                except ValueError:
                    continue
            if dates:
                result[ticker] = pd.Series(amounts, index=pd.DatetimeIndex(dates), name=ticker)
        except Exception as exc:
            logger.debug("HTTP: дивиденды %s: %s", ticker, exc)

    return result


def fetch_dividends_moex(start: datetime.date, end: datetime.date,
                         db=None) -> dict[str, pd.Series]:
    """
    Дивиденды для всех компонентов (после налога).
    Приоритет: БД (moex_dividends) → HTTP (MOEX ISS).
    Тикеры без дивидендов в БД не считаются «отсутствующими» — компания
    может просто не платить дивиденды, и это нормально.
    """
    if db is not None:
        return _dividends_from_db(db, start, end)
    return _dividends_from_http(start, end)


# ── ЯДРО РАСЧЁТА (переиспользуем из spbicar_calculator) ───────────────────────

def calc_portfolio_price(prices: pd.DataFrame, dividends: dict[str, pd.Series]) -> pd.Series:
    """
    PP_t = PP_{t-1} × (1 + Σ Ratio_i × Δ_t_i)

    Если тикер ещё не торговался (нет цен на дату), его вес перераспределяется
    пропорционально на присутствующие компоненты (нормализация весов).
    """
    pp = pd.Series(index=prices.index, dtype=float, name="PP")
    pp_prev = 1.0
    pp.iloc[0] = pp_prev

    for i in range(1, len(prices)):
        date_t    = prices.index[i]
        date_prev = prices.index[i - 1]

        # Собираем вклады присутствующих тикеров
        contributions: list[tuple[float, float]] = []  # (ratio, delta_i)
        for comp in COMPONENTS:
            ticker = comp["ticker"]
            ratio  = comp["ratio"]
            if ticker not in prices.columns:
                continue
            px_t    = prices.loc[date_t,    ticker]
            px_prev = prices.loc[date_prev, ticker]
            if pd.isna(px_t) or pd.isna(px_prev) or px_prev == 0:
                continue

            div_net = 0.0
            if ticker in dividends:
                divs = dividends[ticker]
                day_divs = divs[(divs.index > date_prev) & (divs.index <= date_t)]
                if not day_divs.empty:
                    div_net = float(day_divs.sum())

            delta_i = (px_t + div_net) / px_prev - 1.0
            contributions.append((ratio, delta_i))

        if contributions:
            total_ratio = sum(r for r, _ in contributions)
            if total_ratio > 0:
                # Нормализуем: сумма весов = 1.0
                weighted_return = sum(r / total_ratio * d for r, d in contributions)
            else:
                weighted_return = 0.0
        else:
            weighted_return = 0.0

        pp_new = pp_prev * (1.0 + weighted_return)
        pp.iloc[i] = pp_new
        pp_prev = pp_new

    return pp


def calc_realised_vol(pp: pd.Series, n: int = N_VOL) -> pd.Series:
    """FactVol_t = sqrt(252) × sample_std(log returns over n days)"""
    log_returns = pp.apply(math.log).diff()
    return (log_returns.rolling(n).std(ddof=1) * math.sqrt(252)).rename("FactVol")


def calc_exposure(fact_vol: pd.Series) -> pd.Series:
    """Exp_t = min(100%, 15% / FactVol_{t-1})"""
    exp = (TARGET_VOL / fact_vol).replace([np.inf, -np.inf], np.nan).clip(upper=MAX_EXP)
    return exp.rename("Exp")


def calc_index(pp: pd.Series, exp_lagged: pd.Series, ruonia: pd.Series) -> pd.Series:
    """
    I_t = I_{t-1} × [1 + Exp_{t-1} × (PP_t/PP_{t-1} - 1)
                        - Exp_{t-1} × ((R_{t-1} + 0.0061) × DC/365)]
    """
    if ruonia.empty or not isinstance(ruonia.index, pd.DatetimeIndex):
        ruonia_aligned = pd.Series(0.21, index=pp.index)  # fallback: 21%
    else:
        ruonia_aligned = ruonia.reindex(pp.index, method="ffill").fillna(0.21)

    index_vals = pd.Series(index=pp.index, dtype=float, name="Index")
    index_vals.iloc[0] = I0
    i_prev = I0

    for i in range(1, len(pp)):
        date_t    = pp.index[i]
        date_prev = pp.index[i - 1]
        pp_t      = pp.iloc[i]
        pp_prev   = pp.iloc[i - 1]
        exp_prev  = exp_lagged.iloc[i - 1]
        r_prev    = ruonia_aligned.iloc[i - 1]

        if pd.isna(pp_t) or pd.isna(pp_prev) or pp_prev == 0 or pd.isna(exp_prev):
            index_vals.iloc[i] = round(i_prev, 2)
            continue

        dc = (date_t.date() - date_prev.date()).days
        pp_return       = pp_t / pp_prev - 1.0
        financing_cost  = (r_prev + RUONIA_SPREAD) * dc / DC_DIVISOR

        i_t = i_prev * (1.0 + exp_prev * pp_return - exp_prev * financing_cost)
        i_t = round(i_t, 2)
        index_vals.iloc[i] = i_t
        i_prev = i_t

    return index_vals


# ── ПОЛНЫЙ ПАЙПЛАЙН ────────────────────────────────────────────────────────────

def calculate_spbidgt(start: datetime.date | None = None,
                      end:   datetime.date | None = None,
                      anchor_value: float | None = None,
                      db=None) -> pd.DataFrame:
    """
    Рассчитывает SPBIDGT от start до end.
    db — опциональная SQLAlchemy-сессия; если передана, цены и дивиденды
    берутся из БД (moex_candles / moex_dividends), иначе — HTTP MOEX ISS.
    Возвращает DataFrame: date, value, pp, fact_vol, exp_factor.
    """
    if start is None:
        start = START_DATE
    if end is None:
        end = datetime.date.today()

    logger.info("Расчёт %s с %s по %s (источник: %s)", INDEX_CODE, start, end,
                "БД" if db is not None else "HTTP")

    prices    = fetch_component_prices(start, end, db=db)
    dividends = fetch_dividends_moex(start, end, db=db)
    ruonia    = fetch_ruonia(start - datetime.timedelta(days=BOOTSTRAP_DAYS), end)

    pp       = calc_portfolio_price(prices, dividends)
    fact_vol = calc_realised_vol(pp)
    exp      = calc_exposure(fact_vol.shift(1))
    index    = calc_index(pp, exp.shift(1), ruonia)

    start_ts = pd.Timestamp(start)
    result = pd.DataFrame({
        "date":       index.index,
        "value":      index.values,
        "pp":         pp.values,
        "fact_vol":   fact_vol.values,
        "exp_factor": exp.values,
    })
    result = result[result["date"] >= start_ts].reset_index(drop=True)

    # Нормализация: приводим первое значение расчётного ряда к anchor_value
    # (официальное значение индекса на дату старта). Форма кривой не меняется.
    if anchor_value is not None and len(result) > 0 and result.iloc[0]["value"] not in (0, None):
        scale = anchor_value / result.iloc[0]["value"]
        result["value"] = (result["value"] * scale).round(2)
        logger.info("Нормализация SPBIDGT: коэффициент %.4f (anchor=%.2f)", scale, anchor_value)
    logger.info("Расчёт завершён: %d торговых дней", len(result))
    return result


# ── СОХРАНЕНИЕ В БД ────────────────────────────────────────────────────────────

def _get_official_value_on_date(db: Session, ticker_code: str,
                                 target_date: datetime.date, models_module) -> float | None:
    """
    Возвращает официальное значение индекса (из index_data) на дату target_date
    или ближайшее предыдущее значение.
    Используется как начальная точка расчёта чтобы шкалы совпадали.
    """
    try:
        ticker = db.query(models_module.IndexTicker).filter_by(ticker=ticker_code).first()
        if not ticker:
            return None
        dt = datetime.datetime.combine(target_date + datetime.timedelta(days=1), datetime.time.min)
        row = (
            db.query(models_module.IndexData)
            .filter(
                models_module.IndexData.ticker_id == ticker.id,
                models_module.IndexData.timestamp < dt,
                models_module.IndexData.current_value.isnot(None),
            )
            .order_by(models_module.IndexData.timestamp.desc())
            .first()
        )
        if row and row.current_value:
            logger.info("Официальный %s на %s = %.2f", ticker_code, target_date, row.current_value)
            return float(row.current_value)
    except Exception as exc:
        logger.warning("Не удалось получить официальное значение %s: %s", ticker_code, exc)
    return None


def _get_latest_official_value(db, ticker_code: str, models_module):
    """
    Возвращает (date, value) последней официальной точки из index_data.
    Используется для постфактум-нормализации расчётного ряда к текущему уровню.
    """
    try:
        ticker = db.query(models_module.IndexTicker).filter_by(ticker=ticker_code).first()
        if not ticker:
            return None, None
        row = (
            db.query(models_module.IndexData)
            .filter(
                models_module.IndexData.ticker_id == ticker.id,
                models_module.IndexData.current_value.isnot(None),
            )
            .order_by(models_module.IndexData.timestamp.desc())
            .first()
        )
        if row and row.current_value:
            logger.info("Официальный %s: %.2f на %s", ticker_code, row.current_value, row.timestamp)
            return row.timestamp.date(), float(row.current_value)
    except Exception as exc:
        logger.warning("Не удалось получить официальное значение %s: %s", ticker_code, exc)
    return None, None


def run_and_save(db: Session) -> int:
    """Рассчитывает SPBIDGT и сохраняет в index_calculated."""
    try:
        from backend import models
    except ImportError:
        import models  # type: ignore

    IndexCalculatedPoint = models.IndexCalculatedPoint

    last = (
        db.query(IndexCalculatedPoint)
        .filter(IndexCalculatedPoint.index_code == INDEX_CODE)
        .order_by(IndexCalculatedPoint.date.desc())
        .first()
    )

    if last:
        calc_start = max(last.date.date() - datetime.timedelta(days=N_VOL * 2 + 10), START_DATE)
    else:
        calc_start = START_DATE

    # При инкрементальном обновлении: якорь из последней сохранённой точки
    # (гарантирует непрерывность — без скачков при каждом пересчёте).
    # При первом запуске: anchor=None — нормализуем постфактум по последней
    # официальной точке, чтобы конец расчётного ряда совпадал с официальным.
    if last and calc_start > START_DATE:
        anchor_row = (
            db.query(IndexCalculatedPoint)
            .filter(
                IndexCalculatedPoint.index_code == INDEX_CODE,
                IndexCalculatedPoint.date < datetime.datetime.combine(calc_start, datetime.time.min),
            )
            .order_by(IndexCalculatedPoint.date.desc())
            .first()
        )
        anchor_value = float(anchor_row.value) if anchor_row else None
    else:
        anchor_value = None  # определяется постфактум ниже

    result_df = calculate_spbidgt(start=calc_start, anchor_value=anchor_value, db=db)

    # Постфактум-нормализация при первом запуске:
    # масштабируем весь ряд так, чтобы расчёт в последней официальной точке
    # совпадал с официальным значением.
    if anchor_value is None and not result_df.empty:
        official_date, official_value = _get_latest_official_value(db, INDEX_CODE, models)
        if official_date is not None and official_value is not None:
            result_df["_date"] = result_df["date"].dt.date
            closest = result_df.iloc[(result_df["_date"] - official_date).abs().argsort()[:1]]
            if not closest.empty:
                calc_at_anchor = float(closest.iloc[0]["value"])
                if calc_at_anchor != 0:
                    scale = official_value / calc_at_anchor
                    result_df["value"] = (result_df["value"] * scale).round(2)
                    logger.info(
                        "Нормализация %s: official=%.2f на %s, calc=%.2f → scale=%.4f",
                        INDEX_CODE, official_value, official_date, calc_at_anchor, scale,
                    )
            result_df = result_df.drop(columns=["_date"])
    if result_df.empty:
        return 0

    if last:
        delete_from = datetime.datetime.combine(calc_start, datetime.time.min)
        db.query(IndexCalculatedPoint).filter(
            IndexCalculatedPoint.index_code == INDEX_CODE,
            IndexCalculatedPoint.date >= delete_from,
        ).delete()

    saved = 0
    for _, row in result_df.iterrows():
        if pd.isna(row["value"]):
            continue
        db.add(IndexCalculatedPoint(
            index_code=INDEX_CODE,
            date=row["date"].to_pydatetime(),
            value=float(row["value"]),
            pp=_safe_float(row["pp"]),
            fact_vol=_safe_float(row["fact_vol"]),
            exp_factor=_safe_float(row["exp_factor"]),
        ))
        saved += 1

    db.commit()
    logger.info("Сохранено %d точек для %s", saved, INDEX_CODE)
    return saved


def _safe_float(val) -> float | None:
    try:
        f = float(val)
        return None if math.isnan(f) or math.isinf(f) else f
    except (TypeError, ValueError):
        return None


# ── CLI ────────────────────────────────────────────────────────────────────────

if __name__ == "__main__":
    import sys
    logging.basicConfig(level=logging.INFO, format="%(levelname)s %(message)s")
    start_arg = datetime.date.fromisoformat(sys.argv[1]) if len(sys.argv) > 1 else None
    end_arg   = datetime.date.fromisoformat(sys.argv[2]) if len(sys.argv) > 2 else None
    df = calculate_spbidgt(start=start_arg, end=end_arg)
    print(df.tail(20).to_string(index=False))
