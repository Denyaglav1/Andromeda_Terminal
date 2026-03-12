"""
SPBICAR Index Calculator
Interfax European Automakers Index

Methodology: https://spbexchange.ru/ru/stocks/index/SPBICAR/SPBICAR.pdf
Approved by order №1376 dated 21.09.2022

Formula:
    I_t = I_{t-1} × [1 + Exp_{t-1} × (PP_t/PP_{t-1} - 1) - Exp_{t-1} × (R_{t-1} × DC/360)]

    Exp_t    = min(MaxExp=1.50; TargetVol=0.10 / FactVol_{t-1})
    FactVol_t = sqrt(252) × rolling_sample_std(ln(PP), n=20)
    PP_t     = PP_{t-1} × (1 + sum_i(Ratio_i × Δ_t_i))
    Δ_t_i    = (px_t_i + Div_t_i*(1-tax)) / px_{t-1}_i - 1

Components (Appendix 1): equal weights 1/4 each
Rate R: 3-month EURIBOR in EUR (from ECB Data Portal)
Currency: EUR, I_0 = 100, start date 2021-03-04
"""

import math
import datetime
import logging

import httpx
import numpy as np
import pandas as pd
import yfinance as yf
from sqlalchemy.orm import Session

logger = logging.getLogger(__name__)

# ── CONFIG ─────────────────────────────────────────────────────────────────────

INDEX_CODE = "SPBICAR"
START_DATE = datetime.date(2021, 3, 4)
I0 = 100.0

# Appendix 1: Base components with equal weights
COMPONENTS = [
    {"yahoo": "MBG.DE",  "ratio": 0.25, "isin": "DE0007100000", "name": "Mercedes-Benz Group AG"},
    {"yahoo": "BMW.DE",  "ratio": 0.25, "isin": "DE0005190003", "name": "BMW AG"},
    {"yahoo": "VOW3.DE", "ratio": 0.25, "isin": "DE0007664039", "name": "Volkswagen AG"},
    {"yahoo": "PAH3.DE", "ratio": 0.25, "isin": "DE000PAH0038", "name": "Porsche Automobil Holding SE"},
]

TARGET_VOL = 0.10   # 10% annualised target volatility
MAX_EXP    = 1.50   # 150% maximum exposure
N_VOL      = 20     # rolling window for realised volatility

# Dividend withholding tax for EUR-denominated securities (Appendix, §4.7.4)
DIV_TAX_EUR = 0.25  # 25%

# Calendar days look-back to bootstrap PP before index start date.
# We need at least N_VOL+1 trading days ≈ 30 calendar days; use 90 to be safe.
BOOTSTRAP_CALENDAR_DAYS = 90

# ── DATA FETCHING ──────────────────────────────────────────────────────────────

def fetch_prices(start: datetime.date, end: datetime.date) -> pd.DataFrame:
    """
    Download daily Close prices for all components from Yahoo Finance.
    Returns DataFrame with columns = yahoo tickers, index = DatetimeIndex (UTC-naive).
    Missing values are forward-filled so every trading day has a price.
    """
    tickers = [c["yahoo"] for c in COMPONENTS]
    fetch_start = start - datetime.timedelta(days=BOOTSTRAP_CALENDAR_DAYS)

    df = yf.download(
        tickers,
        start=fetch_start.strftime("%Y-%m-%d"),
        end=(end + datetime.timedelta(days=1)).strftime("%Y-%m-%d"),
        auto_adjust=False,
        progress=False,
        threads=True,
    )

    # yfinance returns MultiIndex columns when multiple tickers
    if isinstance(df.columns, pd.MultiIndex):
        prices = df["Close"]
    else:
        # Single ticker edge-case (shouldn't happen here)
        prices = df[["Close"]].rename(columns={"Close": tickers[0]})

    # Ensure we have all expected columns
    for t in tickers:
        if t not in prices.columns:
            logger.warning("No price data for %s", t)
            prices[t] = float("nan")

    # Remove timezone info
    prices.index = prices.index.tz_localize(None) if prices.index.tz else prices.index

    # Forward-fill gaps (weekends, holidays, missing data)
    prices = prices.sort_index().ffill()

    return prices.dropna(how="all")


def fetch_dividends(start: datetime.date, end: datetime.date) -> dict[str, pd.Series]:
    """
    Fetch dividend histories for all components.
    Returns {yahoo_ticker: pd.Series(amounts, index=DatetimeIndex)}.
    Only includes dividends in [start-5d, end] range.
    """
    result: dict[str, pd.Series] = {}
    fetch_start = start - datetime.timedelta(days=5)

    for comp in COMPONENTS:
        ticker = comp["yahoo"]
        try:
            t = yf.Ticker(ticker)
            divs = t.dividends
            if divs.empty:
                continue

            # Remove timezone
            divs.index = divs.index.tz_localize(None) if divs.index.tz else divs.index

            # Filter to relevant date range
            mask = (divs.index.date >= fetch_start) & (divs.index.date <= end)
            filtered = divs[mask]
            if not filtered.empty:
                result[ticker] = filtered

        except Exception as exc:
            logger.warning("Could not fetch dividends for %s: %s", ticker, exc)

    return result


def fetch_euribor_3m(start: datetime.date, end: datetime.date) -> pd.Series:
    """
    Fetch 3-month EURIBOR.  Tries multiple sources in order:
      1. ECB Data Portal (SDMX REST)
      2. stooq.com CSV
    Returns pd.Series(decimal rates, DatetimeIndex).  Falls back to 0.0 if all fail.
    """
    series = _euribor_from_ecb(start, end)
    if not series.empty:
        return series

    logger.warning("ECB EURIBOR unavailable, trying stooq...")
    series = _euribor_from_stooq(start, end)
    if not series.empty:
        return series

    logger.error("All EURIBOR sources failed — using 0.0 fallback")
    return pd.Series(dtype=float, name="euribor3m")


def _euribor_from_ecb(start: datetime.date, end: datetime.date) -> pd.Series:
    """
    ECB monthly EURIBOR 3M via CSV (series FM.M.U2.EUR.4F.MM.R_EURIBOR3MD_.HSTA).
    Forward-filled to daily — adequate for the financing cost term in SPBICAR.
    """
    # Request from 3 months before start to ensure coverage
    fetch_start = (start - datetime.timedelta(days=90)).strftime("%Y-%m")
    fetch_end   = end.strftime("%Y-%m")

    # Nominal EURIBOR 3M from Refinitiv via ECB (monthly averages)
    url = "https://data-api.ecb.europa.eu/service/data/FM/M.U2.EUR.RT.MM.EURIBOR3MD_.HSTA"
    try:
        r = httpx.get(
            url,
            headers={"Accept": "application/vnd.ecb.data+csv;version=1.0.0"},
            params={"startPeriod": fetch_start, "endPeriod": fetch_end},
            timeout=20.0,
        )
        r.raise_for_status()

        import csv
        from io import StringIO

        reader = csv.reader(StringIO(r.text))
        rows   = list(reader)

        if len(rows) < 2:
            return pd.Series(dtype=float, name="euribor3m")

        headers = rows[0]
        idx_period = headers.index("Time period or range")
        idx_value  = headers.index("Observation value")

        dates, rates = [], []
        for row in rows[1:]:
            if len(row) <= max(idx_period, idx_value):
                continue
            period_str = row[idx_period].strip()  # e.g. "2025-10-31"
            value_str  = row[idx_value].strip()
            if not value_str or value_str in ("", "NaN", "."):
                continue
            try:
                dt = datetime.datetime.strptime(period_str, "%Y-%m-%d")
                dates.append(dt)
                rates.append(float(value_str) / 100.0)   # percent → decimal
            except ValueError:
                continue

        if not dates:
            return pd.Series(dtype=float, name="euribor3m")

        s = pd.Series(rates, index=pd.DatetimeIndex(dates), name="euribor3m")
        return s.sort_index()

    except Exception as exc:
        logger.debug("ECB EURIBOR (monthly) error: %s", exc)
        return pd.Series(dtype=float, name="euribor3m")


def _euribor_from_stooq(start: datetime.date, end: datetime.date) -> pd.Series:
    """stooq.com CSV — symbol '3meur' = 3-month EURIBOR."""
    fetch_start = start - datetime.timedelta(days=10)
    url = (
        f"https://stooq.com/q/d/l/?s=3meur"
        f"&d1={fetch_start.strftime('%Y%m%d')}"
        f"&d2={end.strftime('%Y%m%d')}&i=d"
    )
    try:
        r = httpx.get(url, timeout=20.0, follow_redirects=True)
        r.raise_for_status()
        from io import StringIO
        df = pd.read_csv(StringIO(r.text), parse_dates=["Date"])
        if df.empty or "Close" not in df.columns:
            return pd.Series(dtype=float, name="euribor3m")
        s = pd.Series(
            (df["Close"] / 100.0).values,
            index=pd.DatetimeIndex(df["Date"]),
            name="euribor3m",
        )
        return s.sort_index()
    except Exception as exc:
        logger.debug("stooq EURIBOR error: %s", exc)
        return pd.Series(dtype=float, name="euribor3m")


# ── CALCULATION CORE ───────────────────────────────────────────────────────────

def calc_portfolio_price(
    prices: pd.DataFrame,
    dividends: dict[str, pd.Series],
) -> pd.Series:
    """
    §4.7.3  PP_t = PP_{t-1} × (1 + Σ_i Ratio_i × Δ_t_i)
            Δ_t_i = (px_t_i + Div_t_i_net) / px_{t-1}_i - 1
            Div_t_i_net = gross dividend × (1 - DIV_TAX_EUR)  [§4.7.4]
            PP_0 = 1.0  (100%)
    """
    pp = pd.Series(index=prices.index, dtype=float, name="PP")
    pp_prev = 1.0
    pp.iloc[0] = pp_prev

    for i in range(1, len(prices)):
        date_t    = prices.index[i]
        date_prev = prices.index[i - 1]

        weighted_return = 0.0
        for comp in COMPONENTS:
            ticker = comp["yahoo"]
            ratio  = comp["ratio"]

            px_t    = prices.loc[date_t,    ticker]
            px_prev = prices.loc[date_prev, ticker]

            if pd.isna(px_t) or pd.isna(px_prev) or px_prev == 0:
                continue

            # Net dividends ex-dated between (date_prev, date_t]
            div_net = 0.0
            if ticker in dividends:
                divs_in_range = dividends[ticker][
                    (dividends[ticker].index > date_prev) &
                    (dividends[ticker].index <= date_t)
                ]
                if not divs_in_range.empty:
                    div_net = float(divs_in_range.sum()) * (1 - DIV_TAX_EUR)

            delta_i = (px_t + div_net) / px_prev - 1.0
            weighted_return += ratio * delta_i

        pp_new = pp_prev * (1.0 + weighted_return)
        pp.iloc[i] = pp_new
        pp_prev = pp_new

    return pp


def calc_realised_vol(pp: pd.Series, n: int = N_VOL) -> pd.Series:
    """
    §4.7.2  FactVol_t = sqrt(252) × sample_std(r_{t-n+1..t})
            where r_j = ln(PP_j / PP_{j-1})

    pandas rolling(...).std(ddof=1) matches the formula exactly:
        sample_variance = n/(n-1) × [mean(r²) - mean(r)²]
    """
    log_returns = pp.apply(math.log).diff()  # ln(PP_t / PP_{t-1})
    fact_vol = log_returns.rolling(n).std(ddof=1) * math.sqrt(252)
    return fact_vol.rename("FactVol")


def calc_exposure(fact_vol: pd.Series) -> pd.Series:
    """
    §4.7.2  Exp_t = min(MaxExp=1.50, TargetVol=0.10 / FactVol_{t-1})

    We receive fact_vol already shifted by one day externally so that
    exp.iloc[t] = TargetVol / fact_vol.iloc[t-1].
    Division by zero / NaN yields NaN, which is handled in calc_index.
    """
    exp = (TARGET_VOL / fact_vol).replace([np.inf, -np.inf], np.nan).clip(upper=MAX_EXP)
    return exp.rename("Exp")


def calc_index(
    pp: pd.Series,
    exp_lagged: pd.Series,   # Exp_{t-1} already aligned
    euribor: pd.Series,
) -> pd.Series:
    """
    §4.7.1  I_t = I_{t-1} × [1 + Exp_{t-1} × (PP_t/PP_{t-1} - 1)
                                  - Exp_{t-1} × (R_{t-1} × DC_{t,t-1}/360)]

    DC_{t,t-1} = calendar days from t-1 (inclusive) to t (exclusive).
    R_{t-1}    = 3-month EURIBOR on t-1, forward-filled from last known value.
    Result is rounded to 2 decimal places per §4.7.9.
    """
    # Align EURIBOR to trading calendar with forward-fill
    # Guard: if euribor is empty or has no DatetimeIndex, default to 0
    if euribor.empty or not isinstance(euribor.index, pd.DatetimeIndex):
        euribor_aligned = pd.Series(0.0, index=pp.index)
    else:
        euribor_aligned = euribor.reindex(pp.index, method="ffill").fillna(0.0)

    index_vals = pd.Series(index=pp.index, dtype=float, name="Index")
    index_vals.iloc[0] = I0
    i_prev = I0

    for i in range(1, len(pp)):
        date_t    = pp.index[i]
        date_prev = pp.index[i - 1]

        pp_t    = pp.iloc[i]
        pp_prev = pp.iloc[i - 1]
        exp_prev = exp_lagged.iloc[i - 1]   # Exp_{t-1}
        r_prev   = euribor_aligned.iloc[i - 1]

        # Guard against bad values
        if pd.isna(pp_t) or pd.isna(pp_prev) or pp_prev == 0 or pd.isna(exp_prev):
            index_vals.iloc[i] = round(i_prev, 2)
            continue

        # Calendar days between consecutive valuation dates (§4.7.1)
        dc = (date_t.date() - date_prev.date()).days

        pp_return       = pp_t / pp_prev - 1.0
        financing_cost  = r_prev * dc / 360.0

        i_t = i_prev * (1.0 + exp_prev * pp_return - exp_prev * financing_cost)
        i_t = round(i_t, 2)   # §4.7.9

        index_vals.iloc[i] = i_t
        i_prev = i_t

    return index_vals


# ── FULL CALCULATION PIPELINE ──────────────────────────────────────────────────

def calculate_spbicar(
    start: datetime.date | None = None,
    end:   datetime.date | None = None,
    anchor_value: float | None = None,
) -> pd.DataFrame:
    """
    Run the full SPBICAR calculation pipeline.

    Returns a DataFrame with columns:
        date, value (I_t), pp (PP_t), fact_vol, exp_factor
    Only rows from `start` (default START_DATE) onward are returned.

    anchor_value: если задан, нормализует первую точку расчётного ряда
    к этому значению (умножает весь ряд на коэффициент).
    Используется чтобы расчётный ряд был на той же шкале что официальный.
    """
    if start is None:
        start = START_DATE
    if end is None:
        end = datetime.date.today()

    logger.info("Calculating %s from %s to %s", INDEX_CODE, start, end)

    # 1. Fetch raw data
    prices    = fetch_prices(start, end)
    dividends = fetch_dividends(start, end)
    euribor   = fetch_euribor_3m(start - datetime.timedelta(days=BOOTSTRAP_CALENDAR_DAYS), end)

    if prices.empty:
        raise RuntimeError("No price data available for SPBICAR components")

    # 2. Portfolio price
    pp = calc_portfolio_price(prices, dividends)

    # 3. Realised volatility
    fact_vol = calc_realised_vol(pp)

    # 4. Exposure factor: Exp_t uses FactVol_{t-1}
    exp = calc_exposure(fact_vol.shift(1))

    # 5. Index: uses Exp_{t-1}, so pass exp.shift(1)
    index_vals = calc_index(pp, exp.shift(1), euribor)

    # 6. Assemble result, trimming bootstrap period
    start_ts = pd.Timestamp(start)
    result = pd.DataFrame({
        "date":       index_vals.index,
        "value":      index_vals.values,
        "pp":         pp.values,
        "fact_vol":   fact_vol.values,
        "exp_factor": exp.values,
    })
    result = result[result["date"] >= start_ts].reset_index(drop=True)

    # 7. Нормализация к anchor_value: масштабирует ряд без изменения формы
    if anchor_value is not None and len(result) > 0 and result.iloc[0]["value"] not in (0, None):
        scale = anchor_value / result.iloc[0]["value"]
        result["value"] = (result["value"] * scale).round(2)
        logger.info("Normalization %s: factor=%.4f (anchor=%.2f)", INDEX_CODE, scale, anchor_value)

    logger.info("Calculation complete: %d trading days", len(result))
    return result


# ── DB PERSISTENCE ─────────────────────────────────────────────────────────────

def _get_latest_official_value(db, ticker_code: str, models_module):
    """
    Возвращает (date, value) последней официальной точки для тикера из index_data.
    Используется как точка нормализации расчётного ряда.
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
    """
    Calculate SPBICAR and persist to index_calculated table.
    On first run calculates from START_DATE.
    On subsequent runs recalculates the last N_VOL*2 days to stay consistent.
    Returns number of saved rows.
    """
    try:
        from backend import models
    except ImportError:
        import models  # type: ignore

    IndexCalculatedPoint = models.IndexCalculatedPoint

    # Determine calculation window
    last = (
        db.query(IndexCalculatedPoint)
        .filter(IndexCalculatedPoint.index_code == INDEX_CODE)
        .order_by(IndexCalculatedPoint.date.desc())
        .first()
    )

    if last:
        recalc_from = last.date.date() - datetime.timedelta(days=N_VOL * 2 + 10)
        calc_start = max(recalc_from, START_DATE)
    else:
        calc_start = START_DATE

    # При инкрементальном обновлении якорь берём из последней сохранённой точки
    # (гарантирует непрерывность ряда без скачков).
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
        anchor_value = None  # будет определён после расчёта по последней официальной точке

    # Run calculation (без anchor на первом запуске — нормализуем постфактум)
    result_df = calculate_spbicar(start=calc_start, anchor_value=anchor_value)

    # Нормализация при первом запуске: привязываем расчётный ряд к последнему
    # официальному значению, а не к дате старта 2021г (данных за неё нет).
    if anchor_value is None and not result_df.empty:
        official_date, official_value = _get_latest_official_value(db, INDEX_CODE, models)
        if official_date is not None and official_value is not None:
            # Найти ближайшую расчётную точку к official_date
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
        logger.warning("No results to save for %s", INDEX_CODE)
        return 0

    # Delete rows we are about to rewrite
    if last:
        delete_from = datetime.datetime.combine(calc_start, datetime.time.min)
        db.query(IndexCalculatedPoint).filter(
            IndexCalculatedPoint.index_code == INDEX_CODE,
            IndexCalculatedPoint.date >= delete_from,
        ).delete()

    # Insert new rows
    saved = 0
    for _, row in result_df.iterrows():
        if pd.isna(row["value"]):
            continue

        point = IndexCalculatedPoint(
            index_code=INDEX_CODE,
            date=row["date"].to_pydatetime(),
            value=float(row["value"]),
            pp=_safe_float(row["pp"]),
            fact_vol=_safe_float(row["fact_vol"]),
            exp_factor=_safe_float(row["exp_factor"]),
        )
        db.add(point)
        saved += 1

    db.commit()
    logger.info("Saved %d calculated points for %s", saved, INDEX_CODE)
    return saved


def _safe_float(val) -> float | None:
    try:
        f = float(val)
        return None if math.isnan(f) or math.isinf(f) else f
    except (TypeError, ValueError):
        return None


# ── CLI ENTRYPOINT ─────────────────────────────────────────────────────────────

if __name__ == "__main__":
    import sys
    logging.basicConfig(level=logging.INFO, format="%(levelname)s %(message)s")

    start_arg = datetime.date.fromisoformat(sys.argv[1]) if len(sys.argv) > 1 else None
    end_arg   = datetime.date.fromisoformat(sys.argv[2]) if len(sys.argv) > 2 else None

    df = calculate_spbicar(start=start_arg, end=end_arg)
    print(df.tail(30).to_string(index=False))
