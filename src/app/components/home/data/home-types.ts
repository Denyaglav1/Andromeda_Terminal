/* ═══════════════════════════════════════
   Home Page — Shared Types
   ═══════════════════════════════════════ */

/** News source provider */
export type NewsSourceType = 'euler' | 'interfax' | 'rbc' | 'tass' | 'kommersant';

/** Analyst avatar entry */
export interface AnalystAvatar {
  /** Unique analyst id (transliterated last name, lowercase) */
  id: string;
  /** Full name in Russian */
  name: string;
  /** Company / broker */
  company: string;
  /** Imported PNG asset (128×128 px) */
  src: string;
}

export interface TickerQuote {
  ticker: string;
  price: number;
  changePercent: number;
}

export type AssetClass = 'stocks' | 'bonds';
export type PeriodFilter = '1D' | '1M' | '1Y' | 'YTD';

export interface GainerLoser {
  name: string;
  ticker: string;
  changePercent: number;
}

export interface MarketInstrument {
  ticker: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  lastUpdate: string;
  sparkline: number[];
  volatility: number;
}

export type MarketCategory = 'commodities' | 'currencies' | 'indices';