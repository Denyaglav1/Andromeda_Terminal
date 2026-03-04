/* ═══════════════════════════════════════
   Home Page — Market Data Database
   Price series, tickers, gainers/losers
   ═══════════════════════════════════════ */

import type {
  TickerQuote,
  MarketInstrument,
  GainerLoser,
  MarketCategory,
  AssetClass,
  PeriodFilter,
} from './home-types';

/* ─── Helper: generate random walk sparkline ─── */
function generateSparkline(base: number, volatility: number, points = 30): number[] {
  const result: number[] = [base];
  for (let i = 1; i < points; i++) {
    const delta = result[i - 1] * volatility * (Math.random() - 0.5) * 0.1;
    result.push(result[i - 1] + delta);
  }
  return result;
}

/* ═══════ TICKER TAPE DATA ═══════ */

export const TICKER_TAPE_DATA: TickerQuote[] = [
  { ticker: 'YNDX', price: 5145.95, changePercent: 9.59 },
  { ticker: 'NRKL', price: 545.95, changePercent: -8.59 },
  { ticker: 'GMKN', price: 14230.00, changePercent: 2.31 },
  { ticker: 'PLZL', price: 32500.00, changePercent: 4.60 },
  { ticker: 'TCSG', price: 3850.00, changePercent: 1.66 },
  { ticker: 'NVTK', price: 980.00, changePercent: -2.22 },
  { ticker: 'OZON', price: 4200.00, changePercent: 3.21 },
  { ticker: 'SBER', price: 312.45, changePercent: 0.65 },
  { ticker: 'LKOH', price: 7890.00, changePercent: -1.12 },
  { ticker: 'GAZP', price: 168.30, changePercent: -0.45 },
  { ticker: 'ROSN', price: 580.00, changePercent: 1.89 },
  { ticker: 'MTSS', price: 280.00, changePercent: 0.31 },
  { ticker: 'AGRO', price: 1100.00, changePercent: -1.35 },
  { ticker: 'MGNT', price: 8950.00, changePercent: 2.10 },
  { ticker: 'POLY', price: 450.00, changePercent: -3.40 },
  { ticker: 'VTBR', price: 0.024, changePercent: 0.12 },
  { ticker: 'ALRS', price: 78.50, changePercent: -0.89 },
  { ticker: 'TATN', price: 720.00, changePercent: 1.55 },
  { ticker: 'AFLT', price: 56.30, changePercent: -2.10 },
  { ticker: 'NLMK', price: 210.00, changePercent: 0.95 },
  { ticker: 'CHMF', price: 1650.00, changePercent: -0.67 },
  { ticker: 'RUAL', price: 42.80, changePercent: 3.20 },
  { ticker: 'PHOR', price: 6800.00, changePercent: -1.80 },
  { ticker: 'PIKK', price: 890.00, changePercent: 0.44 },
  { ticker: 'TRMK', price: 180.00, changePercent: -0.35 },
  { ticker: 'FESH', price: 1250.00, changePercent: 2.42 },
  { ticker: 'NMTP', price: 12.50, changePercent: -5.21 },
  { ticker: 'RENI', price: 150.00, changePercent: 1.21 },
];

/* ═══════ MARKET TRENDS (Left sidebar) ═══════ */

const COMMODITIES: MarketInstrument[] = [
  { ticker: 'BRENT', name: 'Brent Crude', price: 1545.45, change: 15.50, changePercent: -1.7, lastUpdate: '03.12.24', sparkline: generateSparkline(1545, 0.02), volatility: 0.02 },
  { ticker: 'URALS', name: 'Urals Crude', price: 2845.45, change: -25.50, changePercent: -1.7, lastUpdate: '03.12.24', sparkline: generateSparkline(2845, 0.025), volatility: 0.025 },
  { ticker: 'TTFGAHD', name: 'TTF Gas NL', price: 145.45, change: 0.00, changePercent: 0.0, lastUpdate: '03.12.24', sparkline: generateSparkline(145, 0.03), volatility: 0.03 },
  { ticker: 'XAU', name: 'Gold', price: 2645.30, change: 12.80, changePercent: 0.49, lastUpdate: '02.12.24', sparkline: generateSparkline(2645, 0.01), volatility: 0.01 },
  { ticker: 'XAG', name: 'Silver', price: 31.25, change: -0.45, changePercent: -1.42, lastUpdate: '01.12.24', sparkline: generateSparkline(31.25, 0.02), volatility: 0.02 },
];

const CURRENCIES: MarketInstrument[] = [
  { ticker: 'USDRUB', name: 'USD/RUB', price: 99.45, change: 0.35, changePercent: 0.35, lastUpdate: '25.02.26', sparkline: generateSparkline(99.45, 0.005), volatility: 0.005 },
  { ticker: 'EURRUB', name: 'EUR/RUB', price: 105.20, change: -0.15, changePercent: -0.14, lastUpdate: '25.02.26', sparkline: generateSparkline(105.2, 0.005), volatility: 0.005 },
  { ticker: 'CNYRUB', name: 'CNY/RUB', price: 13.65, change: 0.02, changePercent: 0.15, lastUpdate: '25.02.26', sparkline: generateSparkline(13.65, 0.004), volatility: 0.004 },
  { ticker: 'EURUSD', name: 'EUR/USD', price: 1.0578, change: -0.0012, changePercent: -0.11, lastUpdate: '25.02.26', sparkline: generateSparkline(1.0578, 0.003), volatility: 0.003 },
  { ticker: 'GBPUSD', name: 'GBP/USD', price: 1.2645, change: 0.0034, changePercent: 0.27, lastUpdate: '25.02.26', sparkline: generateSparkline(1.2645, 0.003), volatility: 0.003 },
];

const INDICES: MarketInstrument[] = [
  { ticker: 'IMOEX', name: 'MOEX Russia', price: 2845.30, change: 23.40, changePercent: 0.83, lastUpdate: '25.02.26', sparkline: generateSparkline(2845, 0.01), volatility: 0.01 },
  { ticker: 'RTSI', name: 'RTS', price: 1125.60, change: -8.20, changePercent: -0.72, lastUpdate: '25.02.26', sparkline: generateSparkline(1125, 0.012), volatility: 0.012 },
  { ticker: 'SPX', name: 'S&P 500', price: 6045.20, change: 52.30, changePercent: 0.87, lastUpdate: '25.02.26', sparkline: generateSparkline(6045, 0.008), volatility: 0.008 },
  { ticker: 'NDX', name: 'NASDAQ 100', price: 21350.80, change: 285.40, changePercent: 1.35, lastUpdate: '25.02.26', sparkline: generateSparkline(21350, 0.01), volatility: 0.01 },
  { ticker: 'STOXX', name: 'STOXX 600', price: 528.90, change: 3.10, changePercent: 0.59, lastUpdate: '25.02.26', sparkline: generateSparkline(528.9, 0.007), volatility: 0.007 },
];

export const MARKET_TRENDS: Record<MarketCategory, MarketInstrument[]> = {
  commodities: COMMODITIES,
  currencies: CURRENCIES,
  indices: INDICES,
};

/* ═══════ GAINERS & LOSERS ═══════ */

interface PeriodData { gainers: GainerLoser[]; losers: GainerLoser[]; }

const STOCK_DATA: Record<PeriodFilter, PeriodData> = {
  '1D': {
    gainers: [
      { name: 'Полюс, ао', ticker: 'PLZL', changePercent: 4.60 },
      { name: 'Т-Технологии, ао', ticker: 'TCSG', changePercent: 3.12 },
      { name: 'Озон, ао', ticker: 'OZON', changePercent: 2.85 },
      { name: 'Яндекс, ао', ticker: 'YNDX', changePercent: 2.31 },
      { name: 'Ренессанс Страх., ао', ticker: 'RENI', changePercent: 1.98 },
      { name: 'МТС, ао', ticker: 'MTSS', changePercent: 1.45 },
      { name: 'Магнит, ао', ticker: 'MGNT', changePercent: 1.12 },
      { name: 'Сбербанк, ао', ticker: 'SBER', changePercent: 0.65 },
      { name: 'Русагро, ао', ticker: 'AGRO', changePercent: 0.44 },
    ],
    losers: [
      { name: 'НМТП, ао', ticker: 'NMTP', changePercent: -5.21 },
      { name: 'Полиметалл, ао', ticker: 'POLY', changePercent: -3.40 },
      { name: 'Аэрофлот, ао', ticker: 'AFLT', changePercent: -2.10 },
      { name: 'Фосагро, ао', ticker: 'PHOR', changePercent: -1.80 },
      { name: 'Русагро, ао', ticker: 'AGRO2', changePercent: -1.35 },
      { name: 'ЛУКОЙЛ, ао', ticker: 'LKOH', changePercent: -1.12 },
      { name: 'АЛРОСА, ао', ticker: 'ALRS', changePercent: -0.89 },
      { name: 'Северсталь, ао', ticker: 'CHMF', changePercent: -0.67 },
      { name: 'Газпром, ао', ticker: 'GAZP', changePercent: -0.45 },
    ],
  },
  '1M': {
    gainers: [
      { name: 'Полюс, ао', ticker: 'PLZL', changePercent: 18.50 },
      { name: 'Т-Технологии, ао', ticker: 'TCSG', changePercent: 14.22 },
      { name: 'НОВАТЭК, ао', ticker: 'NVTK', changePercent: 11.80 },
      { name: 'Озон, ао', ticker: 'OZON', changePercent: 9.35 },
      { name: 'HeadHunter, ао', ticker: 'HHRU', changePercent: 8.12 },
      { name: 'Яндекс, ао', ticker: 'YNDX', changePercent: 7.45 },
      { name: 'FESCO, ао', ticker: 'FESH', changePercent: 5.21 },
      { name: 'Сбербанк, ао', ticker: 'SBER', changePercent: 4.30 },
      { name: 'Магнит, ао', ticker: 'MGNT', changePercent: 3.10 },
    ],
    losers: [
      { name: 'Сегежа, ао', ticker: 'SGZH', changePercent: -22.13 },
      { name: 'НМТП, ао', ticker: 'NMTP', changePercent: -15.32 },
      { name: 'Аэрофлот, ао', ticker: 'AFLT', changePercent: -10.32 },
      { name: 'Мечел, ао', ticker: 'MTLR', changePercent: -8.50 },
      { name: 'РусАл, ао', ticker: 'RUAL', changePercent: -7.20 },
      { name: 'ПИК, ао', ticker: 'PIKK', changePercent: -6.40 },
      { name: 'ВТБ, ао', ticker: 'VTBR', changePercent: -5.35 },
      { name: 'НЛМК, ао', ticker: 'NLMK', changePercent: -4.10 },
      { name: 'Фосагро, ао', ticker: 'PHOR', changePercent: -3.80 },
    ],
  },
  '1Y': {
    gainers: [
      { name: 'Полюс, ао', ticker: 'PLZL', changePercent: 75.60 },
      { name: 'Т-Технологии, ао', ticker: 'TCSG', changePercent: 55.66 },
      { name: 'Озон, ао', ticker: 'OZON', changePercent: 42.30 },
      { name: 'HeadHunter, ао', ticker: 'HHRU', changePercent: 38.50 },
      { name: 'НОВАТЭК, ао', ticker: 'NVTK', changePercent: 31.22 },
      { name: 'Яндекс, ао', ticker: 'YNDX', changePercent: 28.90 },
      { name: 'Ренессанс Страх., ао', ticker: 'RENI', changePercent: 19.21 },
      { name: 'Сбербанк, ао', ticker: 'SBER', changePercent: 15.40 },
      { name: 'FESCO, ао', ticker: 'FESH', changePercent: 12.42 },
    ],
    losers: [
      { name: 'НМТП, ао', ticker: 'NMTP', changePercent: -75.12 },
      { name: 'Сегежа, ао', ticker: 'SGZH', changePercent: -65.30 },
      { name: 'Фосагро, ао', ticker: 'PHOR', changePercent: -35.66 },
      { name: 'Сургутнефтегаз, ао', ticker: 'SNGS', changePercent: -24.12 },
      { name: 'Аэрофлот, ао', ticker: 'AFLT', changePercent: -22.13 },
      { name: 'АЛРОСА, ао', ticker: 'ALRS', changePercent: -15.32 },
      { name: 'ВТБ, ао', ticker: 'VTBR', changePercent: -10.32 },
      { name: 'РусАл, ао', ticker: 'RUAL', changePercent: -8.50 },
      { name: 'НЛМК, ао', ticker: 'NLMK', changePercent: -5.35 },
    ],
  },
  'YTD': {
    gainers: [
      { name: 'Полюс, ао', ticker: 'PLZL', changePercent: 12.30 },
      { name: 'Т-Технологии, ао', ticker: 'TCSG', changePercent: 8.45 },
      { name: 'Озон, ао', ticker: 'OZON', changePercent: 6.80 },
      { name: 'Яндекс, ао', ticker: 'YNDX', changePercent: 5.20 },
      { name: 'HeadHunter, ао', ticker: 'HHRU', changePercent: 4.15 },
      { name: 'Сбербанк, ао', ticker: 'SBER', changePercent: 3.80 },
      { name: 'НОВАТЭК, ао', ticker: 'NVTK', changePercent: 2.90 },
      { name: 'Магнит, ао', ticker: 'MGNT', changePercent: 2.10 },
      { name: 'МТС, ао', ticker: 'MTSS', changePercent: 1.55 },
    ],
    losers: [
      { name: 'Сегежа, ао', ticker: 'SGZH', changePercent: -18.40 },
      { name: 'НМТП, ао', ticker: 'NMTP', changePercent: -12.50 },
      { name: 'Мечел, ао', ticker: 'MTLR', changePercent: -9.30 },
      { name: 'Аэрофлот, ао', ticker: 'AFLT', changePercent: -7.20 },
      { name: 'ПИК, ао', ticker: 'PIKK', changePercent: -5.80 },
      { name: 'Фосагро, ао', ticker: 'PHOR', changePercent: -4.60 },
      { name: 'РусАл, ао', ticker: 'RUAL', changePercent: -3.90 },
      { name: 'АЛРОСА, ао', ticker: 'ALRS', changePercent: -2.70 },
      { name: 'НЛМК, ао', ticker: 'NLMK', changePercent: -1.85 },
    ],
  },
};

const BOND_DATA: Record<PeriodFilter, PeriodData> = {
  '1D': {
    gainers: [
      { name: 'ОФЗ 26238', ticker: 'SU26238', changePercent: 0.45 },
      { name: 'ОФЗ 26244', ticker: 'SU26244', changePercent: 0.38 },
      { name: 'Газпром 2028', ticker: 'GAZP28', changePercent: 0.29 },
      { name: 'Сбер 2027', ticker: 'SBER27', changePercent: 0.21 },
      { name: 'РЖД 2030', ticker: 'RZD30', changePercent: 0.18 },
      { name: 'ВЭБ 2029', ticker: 'VEB29', changePercent: 0.14 },
    ],
    losers: [
      { name: 'Самолет 2026', ticker: 'SMLT26', changePercent: -1.85 },
      { name: 'Сегежа 2027', ticker: 'SGZH27', changePercent: -1.30 },
      { name: 'М.Видео 2026', ticker: 'MVID26', changePercent: -0.80 },
      { name: 'ПИК 2027', ticker: 'PIK27', changePercent: -0.52 },
      { name: 'Борец 2028', ticker: 'BRC28', changePercent: -0.31 },
      { name: 'МТС 2029', ticker: 'MTS29', changePercent: -0.15 },
    ],
  },
  '1M': {
    gainers: [
      { name: 'ОФЗ 26238', ticker: 'SU26238', changePercent: 4.20 },
      { name: 'ОФЗ 26244', ticker: 'SU26244', changePercent: 3.80 },
      { name: 'Газпром 2028', ticker: 'GAZP28', changePercent: 2.90 },
      { name: 'Сбер 2027', ticker: 'SBER27', changePercent: 2.15 },
      { name: 'РЖД 2030', ticker: 'RZD30', changePercent: 1.80 },
      { name: 'ВЭБ 2029', ticker: 'VEB29', changePercent: 1.45 },
    ],
    losers: [
      { name: 'Самолет 2026', ticker: 'SMLT26', changePercent: -8.50 },
      { name: 'Сегежа 2027', ticker: 'SGZH27', changePercent: -6.30 },
      { name: 'М.Видео 2026', ticker: 'MVID26', changePercent: -4.80 },
      { name: 'ПИК 2027', ticker: 'PIK27', changePercent: -3.20 },
      { name: 'Борец 2028', ticker: 'BRC28', changePercent: -2.10 },
      { name: 'МТС 2029', ticker: 'MTS29', changePercent: -1.50 },
    ],
  },
  '1Y': {
    gainers: [
      { name: 'ОФЗ 26238', ticker: 'SU26238', changePercent: 12.50 },
      { name: 'ОФЗ 26244', ticker: 'SU26244', changePercent: 10.80 },
      { name: 'Газпром 2028', ticker: 'GAZP28', changePercent: 8.40 },
      { name: 'Сбер 2027', ticker: 'SBER27', changePercent: 6.20 },
      { name: 'РЖД 2030', ticker: 'RZD30', changePercent: 5.10 },
      { name: 'ВЭБ 2029', ticker: 'VEB29', changePercent: 4.30 },
    ],
    losers: [
      { name: 'Самолет 2026', ticker: 'SMLT26', changePercent: -25.30 },
      { name: 'Сегежа 2027', ticker: 'SGZH27', changePercent: -18.50 },
      { name: 'М.Видео 2026', ticker: 'MVID26', changePercent: -15.20 },
      { name: 'ПИК 2027', ticker: 'PIK27', changePercent: -9.80 },
      { name: 'Борец 2028', ticker: 'BRC28', changePercent: -6.40 },
      { name: 'МТС 2029', ticker: 'MTS29', changePercent: -3.20 },
    ],
  },
  'YTD': {
    gainers: [
      { name: 'ОФЗ 26238', ticker: 'SU26238', changePercent: 2.10 },
      { name: 'ОФЗ 26244', ticker: 'SU26244', changePercent: 1.80 },
      { name: 'Газпром 2028', ticker: 'GAZP28', changePercent: 1.50 },
      { name: 'Сбер 2027', ticker: 'SBER27', changePercent: 1.15 },
      { name: 'РЖД 2030', ticker: 'RZD30', changePercent: 0.90 },
      { name: 'ВЭБ 2029', ticker: 'VEB29', changePercent: 0.65 },
    ],
    losers: [
      { name: 'Самолет 2026', ticker: 'SMLT26', changePercent: -4.50 },
      { name: 'Сегежа 2027', ticker: 'SGZH27', changePercent: -3.30 },
      { name: 'М.Видео 2026', ticker: 'MVID26', changePercent: -2.80 },
      { name: 'ПИК 2027', ticker: 'PIK27', changePercent: -1.60 },
      { name: 'Борец 2028', ticker: 'BRC28', changePercent: -1.10 },
      { name: 'МТС 2029', ticker: 'MTS29', changePercent: -0.75 },
    ],
  },
};

export function getGainersLosers(assetClass: AssetClass, period: PeriodFilter) {
  const data = assetClass === 'bonds' ? BOND_DATA : STOCK_DATA;
  return data[period];
}

/* ═══════ PRICE SERIES for sparklines (100 points per ticker) ═══════ */

export interface PriceSeries {
  ticker: string;
  basePrice: number;
  volatility: number;
  points: number[];
}

function buildPriceSeries(ticker: string, base: number, vol: number): PriceSeries {
  return {
    ticker,
    basePrice: base,
    volatility: vol,
    points: generateSparkline(base, vol, 100),
  };
}

export const PRICE_SERIES: PriceSeries[] = [
  buildPriceSeries('SBER', 312.45, 0.015),
  buildPriceSeries('LKOH', 7890, 0.018),
  buildPriceSeries('GAZP', 168.3, 0.02),
  buildPriceSeries('YNDX', 5145.95, 0.025),
  buildPriceSeries('GMKN', 14230, 0.02),
  buildPriceSeries('PLZL', 32500, 0.03),
  buildPriceSeries('TCSG', 3850, 0.025),
  buildPriceSeries('NVTK', 980, 0.02),
  buildPriceSeries('OZON', 4200, 0.03),
  buildPriceSeries('ROSN', 580, 0.015),
  buildPriceSeries('MTSS', 280, 0.012),
  buildPriceSeries('BRENT', 1545, 0.02),
  buildPriceSeries('XAU', 2645, 0.01),
];