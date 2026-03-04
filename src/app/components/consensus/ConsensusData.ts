/* ═══════════════════════════════════════════════════════
   ConsensusData — data layer for Consensus tab

   Historical data for the "Euler" source is generated with
   the EXACT SAME `generateTrend` function as Dashboard.tsx,
   so the numbers match the Euler Live Models view.
   Other sources apply per-source deviations.
   ═══════════════════════════════════════════════════════ */

// ─── Sources ───────────────────────────────────────────
export interface ConsensusSource {
  id: string;
  name: string;
  analyst: string;
  avatarId?: string;
}

export const SOURCES: ConsensusSource[] = [
  { id: 'euler', name: 'Euler', analyst: 'Л. Михайлова', avatarId: 'mikhaylova' },
  { id: 'bcs', name: 'BCS', analyst: 'А. Петров' },
  { id: 'vtb', name: 'VTB Capital', analyst: 'С. Иванова' },
  { id: 'sber', name: 'Sberbank CIB', analyst: 'Д. Козлов' },
  { id: 'alfa', name: 'Alfa Bank', analyst: 'Е. Смирнов' },
  { id: 'aton', name: 'Aton', analyst: 'М. Волкова' },
  { id: 'rencap', name: 'Renaissance Capital', analyst: 'И. Новиков' },
];

// ─── Metrics ───────────────────────────────────────────
export type MetricCategory = 'PnL' | 'Cash Flow' | 'Balance Sheet';
export type TabCategory = 'Summary' | 'BS' | 'PnL' | 'CF' | 'Mults & Yields' | 'Other';

export interface Metric {
  id: string;
  name: string;
  category: MetricCategory;
  tabCategory: TabCategory;
  unit?: string;
  isPercent?: boolean;
}

export const METRICS: Metric[] = [
  /* ══ PnL ══ */
  { id: 'revenue',           name: 'Revenue',              category: 'PnL', tabCategory: 'PnL', unit: 'mn USD' },
  { id: 'cogs',              name: 'CoGS',                 category: 'PnL', tabCategory: 'PnL', unit: 'mn USD' },
  { id: 'gross_profit',      name: 'Gross Profit',         category: 'PnL', tabCategory: 'PnL', unit: 'mn USD' },
  { id: 'sga',               name: 'SG&A',                 category: 'PnL', tabCategory: 'PnL', unit: 'mn USD' },
  { id: 'ebitda',            name: 'EBITDA',               category: 'PnL', tabCategory: 'PnL', unit: 'mn USD' },
  { id: 'ebitda_margin',     name: 'EBITDA margin, %',     category: 'PnL', tabCategory: 'PnL', isPercent: true },
  { id: 'dda',               name: 'DD&A',                 category: 'PnL', tabCategory: 'PnL', unit: 'mn USD' },
  { id: 'ebit',              name: 'EBIT',                 category: 'PnL', tabCategory: 'PnL', unit: 'mn USD' },
  { id: 'net_interest',      name: 'Net interest income',  category: 'PnL', tabCategory: 'PnL', unit: 'mn USD' },
  { id: 'ebt',               name: 'EBT',                  category: 'PnL', tabCategory: 'PnL', unit: 'mn USD' },
  { id: 'income_tax',        name: 'Income tax',           category: 'PnL', tabCategory: 'PnL', unit: 'mn USD' },
  { id: 'profit_after_tax',  name: 'Profit after tax',     category: 'PnL', tabCategory: 'PnL', unit: 'mn USD' },
  { id: 'minority_pnl',      name: 'Minority interest',    category: 'PnL', tabCategory: 'PnL', unit: 'mn USD' },
  { id: 'net_income',        name: 'Net income',           category: 'PnL', tabCategory: 'PnL', unit: 'mn USD' },
  { id: 'net_income_margin', name: 'Net income margin, %', category: 'PnL', tabCategory: 'PnL', isPercent: true },

  /* ══ BS ══ */
  { id: 'cash',              name: 'Cash & cash equivalents',                category: 'Balance Sheet', tabCategory: 'BS', unit: 'mn USD' },
  { id: 'current_inv',       name: 'Current Investments',                    category: 'Balance Sheet', tabCategory: 'BS', unit: 'mn USD' },
  { id: 'accounts_rec',      name: 'Accounts receivable',                    category: 'Balance Sheet', tabCategory: 'BS', unit: 'mn USD' },
  { id: 'inventories',       name: 'Inventories & WIP',                      category: 'Balance Sheet', tabCategory: 'BS', unit: 'mn USD' },
  { id: 'net_fixed_assets',  name: 'Net tangible fixed assets',              category: 'Balance Sheet', tabCategory: 'BS', unit: 'mn USD' },
  { id: 'associates',        name: 'Associates & affiliates',                category: 'Balance Sheet', tabCategory: 'BS', unit: 'mn USD' },
  { id: 'total_assets',      name: 'Total assets',                           category: 'Balance Sheet', tabCategory: 'BS', unit: 'mn USD' },
  { id: 'st_financing',      name: 'Short term financing liabilities',       category: 'Balance Sheet', tabCategory: 'BS', unit: 'mn USD' },
  { id: 'accounts_pay',      name: 'Accounts payable',                       category: 'Balance Sheet', tabCategory: 'BS', unit: 'mn USD' },
  { id: 'lt_financing',      name: 'Long term financing liabilities',        category: 'Balance Sheet', tabCategory: 'BS', unit: 'mn USD' },
  { id: 'total_liab',        name: 'Total liabilities',                      category: 'Balance Sheet', tabCategory: 'BS', unit: 'mn USD' },
  { id: 'shareholders',      name: "Shareholders' funds",                    category: 'Balance Sheet', tabCategory: 'BS', unit: 'mn USD' },
  { id: 'minority',          name: 'Minority interests',                     category: 'Balance Sheet', tabCategory: 'BS', unit: 'mn USD' },
  { id: 'stated_equity',     name: 'Stated equity capital (inc MI)',         category: 'Balance Sheet', tabCategory: 'BS', unit: 'mn USD' },
  { id: 'total_liab_sh',     name: "Total liabilities & shareholders' funds", category: 'Balance Sheet', tabCategory: 'BS', unit: 'mn USD' },
  { id: 'net_debt',          name: 'Net debt',                               category: 'Balance Sheet', tabCategory: 'BS', unit: 'mn USD' },

  /* ══ CF ══ */
  { id: 'change_wc',         name: 'Change in Working Capital',       category: 'Cash Flow', tabCategory: 'CF', unit: 'mn USD' },
  { id: 'net_op_cf',         name: 'Net operating cash flow',         category: 'Cash Flow', tabCategory: 'CF', unit: 'mn USD' },
  { id: 'capex',             name: 'Capital expenditure',             category: 'Cash Flow', tabCategory: 'CF', unit: 'mn USD' },
  { id: 'disposals',         name: 'Disposals of Assets',             category: 'Cash Flow', tabCategory: 'CF', unit: 'mn USD' },
  { id: 'cf_investing',      name: 'Cashflow from investing activities', category: 'Cash Flow', tabCategory: 'CF', unit: 'mn USD' },
  { id: 'div_paid',          name: 'Dividends paid',                  category: 'Cash Flow', tabCategory: 'CF', unit: 'mn USD' },
  { id: 'debt_issuance',     name: 'Debt issuance / (repayment)',     category: 'Cash Flow', tabCategory: 'CF', unit: 'mn USD' },
  { id: 'minority_div',      name: 'Minority dividends paid',         category: 'Cash Flow', tabCategory: 'CF', unit: 'mn USD' },
  { id: 'cf_financing',      name: 'Cashflow from financing activities', category: 'Cash Flow', tabCategory: 'CF', unit: 'mn USD' },
  { id: 'fx_effects',        name: 'Effects of exchange rate changes', category: 'Cash Flow', tabCategory: 'CF', unit: 'mn USD' },
  { id: 'cash_flow',         name: 'Cash inflow / (outflow)',         category: 'Cash Flow', tabCategory: 'CF', unit: 'mn USD' },
  { id: 'interest_cf',       name: 'Interest cost, net (CF based)',   category: 'Cash Flow', tabCategory: 'CF', unit: 'mn USD' },
  { id: 'taxes_cf',          name: 'Profit taxes (CF based)',         category: 'Cash Flow', tabCategory: 'CF', unit: 'mn USD' },
  { id: 'maint_capex',       name: 'Maintenance capex',              category: 'Cash Flow', tabCategory: 'CF', unit: 'mn USD' },
  { id: 'fcf',               name: 'Free cash flow',                  category: 'Cash Flow', tabCategory: 'CF', unit: 'mn USD' },
  { id: 'fcf_firm',          name: 'Free cash flow to firm',          category: 'Cash Flow', tabCategory: 'CF', unit: 'mn USD' },

  /* ══ Mults & Yields ══ */
  { id: 'ev_ebitda',         name: 'EV/EBITDA',                 category: 'PnL',       tabCategory: 'Mults & Yields' },
  { id: 'pe',                name: 'P/E',                       category: 'PnL',       tabCategory: 'Mults & Yields' },
  { id: 'net_debt_ebitda',   name: 'Net debt/EBITDA',           category: 'Balance Sheet', tabCategory: 'Mults & Yields' },
  { id: 'div_yield',         name: 'Dividend yield, %',         category: 'Cash Flow', tabCategory: 'Mults & Yields', isPercent: true },
  { id: 'fcf_yield',         name: 'Free cash flow yield, %',   category: 'Cash Flow', tabCategory: 'Mults & Yields', isPercent: true },
  { id: 'roe',               name: 'Return on equity, %',       category: 'PnL',       tabCategory: 'Mults & Yields', isPercent: true },
];

// ─── Periods (match Dashboard exactly) ────────────────
export const HISTORICAL_YEARS = [2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025];
export const FORECAST_YEARS = [2026, 2027, 2028, 2029, 2030];
export const ALL_YEARS = [...HISTORICAL_YEARS, ...FORECAST_YEARS];

// ─── generateTrend — EXACT copy from Dashboard.tsx ────
function generateTrend(
  base: number,
  count: number,
  trend: number,
  volatility: number,
  seed: number,
): number[] {
  return Array(count)
    .fill(0)
    .map((_, i) => {
      const trendFactor = 1 + trend * i;
      const cyclical = Math.sin(i * 0.7) * volatility;
      const pseudoRandom = Math.sin(seed * 12.9898 + i * 78.233) * 43758.5453;
      const random = (pseudoRandom - Math.floor(pseudoRandom) - 0.5) * volatility * 0.5;
      return base * trendFactor * (1 + cyclical + random);
    });
}

// ─── Euler base data ──────────────────────────────────
interface MetricSpec {
  id: string;
  base: number;
  trend: number;
  volatility: number;
  seed: number;
  negAbs?: boolean; // output = -|value|
}

/* Seed counter helper — avoids collisions */
let _seed = 0;
function S(): number { return ++_seed; }

const EULER_SPECS: Record<string, MetricSpec[]> = {
  ROSN: (() => { _seed = 0; return [
    /* PnL */
    { id: 'revenue',           base: 11500, trend: 0.08,  volatility: 0.12, seed: S() },
    { id: 'cogs',              base: 7200,  trend: 0.07,  volatility: 0.13, seed: S(), negAbs: true },
    { id: 'gross_profit',      base: 4300,  trend: 0.09,  volatility: 0.14, seed: S() },
    { id: 'sga',               base: 820,   trend: 0.05,  volatility: 0.10, seed: S(), negAbs: true },
    { id: 'ebitda',            base: 6800,  trend: 0.09,  volatility: 0.15, seed: S() },
    { id: 'ebitda_margin',     base: 56,    trend: 0.02,  volatility: 0.08, seed: S() },
    { id: 'dda',               base: 1750,  trend: 0.06,  volatility: 0.10, seed: S(), negAbs: true },
    { id: 'ebit',              base: 5050,  trend: 0.09,  volatility: 0.16, seed: S() },
    { id: 'net_interest',      base: 380,   trend: 0.03,  volatility: 0.25, seed: S(), negAbs: true },
    { id: 'ebt',               base: 4670,  trend: 0.09,  volatility: 0.17, seed: S() },
    { id: 'income_tax',        base: 940,   trend: 0.08,  volatility: 0.15, seed: S(), negAbs: true },
    { id: 'profit_after_tax',  base: 3730,  trend: 0.10,  volatility: 0.18, seed: S() },
    { id: 'minority_pnl',     base: 180,   trend: 0.04,  volatility: 0.20, seed: S(), negAbs: true },
    { id: 'net_income',        base: 4600,  trend: 0.10,  volatility: 0.18, seed: S() },
    { id: 'net_income_margin', base: 40,    trend: 0.02,  volatility: 0.10, seed: S() },
    /* BS */
    { id: 'cash',              base: 2800,  trend: 0.06,  volatility: 0.20, seed: S() },
    { id: 'current_inv',       base: 850,   trend: 0.04,  volatility: 0.15, seed: S() },
    { id: 'accounts_rec',      base: 2200,  trend: 0.05,  volatility: 0.12, seed: S() },
    { id: 'inventories',       base: 1600,  trend: 0.04,  volatility: 0.10, seed: S() },
    { id: 'net_fixed_assets',  base: 42000, trend: 0.05,  volatility: 0.06, seed: S() },
    { id: 'associates',        base: 3200,  trend: 0.03,  volatility: 0.08, seed: S() },
    { id: 'total_assets',      base: 58000, trend: 0.05,  volatility: 0.05, seed: S() },
    { id: 'st_financing',      base: 4200,  trend: 0.04,  volatility: 0.15, seed: S() },
    { id: 'accounts_pay',      base: 3100,  trend: 0.05,  volatility: 0.12, seed: S() },
    { id: 'lt_financing',      base: 11000, trend: 0.03,  volatility: 0.08, seed: S() },
    { id: 'total_liab',        base: 24000, trend: 0.04,  volatility: 0.07, seed: S() },
    { id: 'shareholders',      base: 32000, trend: 0.06,  volatility: 0.06, seed: S() },
    { id: 'minority',          base: 1250,  trend: 0.06,  volatility: 0.12, seed: S() },
    { id: 'stated_equity',     base: 34000, trend: 0.06,  volatility: 0.06, seed: S() },
    { id: 'total_liab_sh',     base: 58000, trend: 0.05,  volatility: 0.05, seed: S() },
    { id: 'net_debt',          base: 6500,  trend: 0.05,  volatility: 0.15, seed: S() },
    /* CF */
    { id: 'change_wc',         base: 420,   trend: 0.02,  volatility: 0.50, seed: S() },
    { id: 'net_op_cf',         base: 7500,  trend: 0.08,  volatility: 0.14, seed: S() },
    { id: 'capex',             base: 4200,  trend: 0.06,  volatility: 0.12, seed: S(), negAbs: true },
    { id: 'disposals',         base: 250,   trend: 0.02,  volatility: 0.35, seed: S() },
    { id: 'cf_investing',      base: 3950,  trend: 0.06,  volatility: 0.13, seed: S(), negAbs: true },
    { id: 'div_paid',          base: 3200,  trend: 0.07,  volatility: 0.25, seed: S(), negAbs: true },
    { id: 'debt_issuance',     base: 800,   trend: 0.01,  volatility: 0.60, seed: S(), negAbs: true },
    { id: 'minority_div',      base: 120,   trend: 0.04,  volatility: 0.20, seed: S(), negAbs: true },
    { id: 'cf_financing',      base: 4200,  trend: 0.05,  volatility: 0.18, seed: S(), negAbs: true },
    { id: 'fx_effects',        base: 150,   trend: 0.01,  volatility: 0.80, seed: S(), negAbs: true },
    { id: 'cash_flow',         base: 800,   trend: 0.03,  volatility: 0.45, seed: S() },
    { id: 'interest_cf',       base: 850,   trend: 0.04,  volatility: 0.18, seed: S(), negAbs: true },
    { id: 'taxes_cf',          base: 1200,  trend: 0.07,  volatility: 0.15, seed: S(), negAbs: true },
    { id: 'maint_capex',       base: 2400,  trend: 0.05,  volatility: 0.12, seed: S(), negAbs: true },
    { id: 'fcf',               base: 3800,  trend: 0.11,  volatility: 0.22, seed: S() },
    { id: 'fcf_firm',          base: 4200,  trend: 0.10,  volatility: 0.20, seed: S() },
    /* Mults & Yields */
    { id: 'ev_ebitda',         base: 4.2,   trend: -0.02, volatility: 0.20, seed: S() },
    { id: 'pe',                base: 5.5,   trend: -0.01, volatility: 0.22, seed: S() },
    { id: 'net_debt_ebitda',   base: 0.92,  trend: 0.01,  volatility: 0.30, seed: S() },
    { id: 'div_yield',         base: 15.5,  trend: 0.03,  volatility: 0.20, seed: S() },
    { id: 'fcf_yield',         base: 18.2,  trend: 0.04,  volatility: 0.25, seed: S() },
    { id: 'roe',               base: 18.5,  trend: 0.02,  volatility: 0.15, seed: S() },
  ]; })(),

  GAZP: (() => { _seed = 100; return [
    /* PnL */
    { id: 'revenue',           base: 9800,  trend: 0.12,  volatility: 0.20, seed: S() },
    { id: 'cogs',              base: 6400,  trend: 0.11,  volatility: 0.21, seed: S(), negAbs: true },
    { id: 'gross_profit',      base: 3400,  trend: 0.13,  volatility: 0.22, seed: S() },
    { id: 'sga',               base: 650,   trend: 0.08,  volatility: 0.14, seed: S(), negAbs: true },
    { id: 'ebitda',            base: 5500,  trend: 0.14,  volatility: 0.25, seed: S() },
    { id: 'ebitda_margin',     base: 52,    trend: 0.04,  volatility: 0.12, seed: S() },
    { id: 'dda',               base: 2100,  trend: 0.08,  volatility: 0.12, seed: S(), negAbs: true },
    { id: 'ebit',              base: 3400,  trend: 0.14,  volatility: 0.28, seed: S() },
    { id: 'net_interest',      base: 520,   trend: 0.05,  volatility: 0.30, seed: S(), negAbs: true },
    { id: 'ebt',               base: 2880,  trend: 0.14,  volatility: 0.30, seed: S() },
    { id: 'income_tax',        base: 620,   trend: 0.12,  volatility: 0.25, seed: S(), negAbs: true },
    { id: 'profit_after_tax',  base: 2260,  trend: 0.15,  volatility: 0.32, seed: S() },
    { id: 'minority_pnl',     base: 140,   trend: 0.06,  volatility: 0.22, seed: S(), negAbs: true },
    { id: 'net_income',        base: 3800,  trend: 0.15,  volatility: 0.30, seed: S() },
    { id: 'net_income_margin', base: 35,    trend: 0.03,  volatility: 0.14, seed: S() },
    /* BS */
    { id: 'cash',              base: 3200,  trend: 0.08,  volatility: 0.25, seed: S() },
    { id: 'current_inv',       base: 600,   trend: 0.05,  volatility: 0.18, seed: S() },
    { id: 'accounts_rec',      base: 1800,  trend: 0.07,  volatility: 0.15, seed: S() },
    { id: 'inventories',       base: 1200,  trend: 0.06,  volatility: 0.12, seed: S() },
    { id: 'net_fixed_assets',  base: 55000, trend: 0.06,  volatility: 0.05, seed: S() },
    { id: 'associates',        base: 4500,  trend: 0.04,  volatility: 0.10, seed: S() },
    { id: 'total_assets',      base: 72000, trend: 0.06,  volatility: 0.04, seed: S() },
    { id: 'st_financing',      base: 5600,  trend: 0.05,  volatility: 0.18, seed: S() },
    { id: 'accounts_pay',      base: 3800,  trend: 0.06,  volatility: 0.14, seed: S() },
    { id: 'lt_financing',      base: 14500, trend: 0.04,  volatility: 0.10, seed: S() },
    { id: 'total_liab',        base: 30000, trend: 0.05,  volatility: 0.06, seed: S() },
    { id: 'shareholders',      base: 40000, trend: 0.07,  volatility: 0.05, seed: S() },
    { id: 'minority',          base: 950,   trend: 0.08,  volatility: 0.15, seed: S() },
    { id: 'stated_equity',     base: 42000, trend: 0.07,  volatility: 0.05, seed: S() },
    { id: 'total_liab_sh',     base: 72000, trend: 0.06,  volatility: 0.04, seed: S() },
    { id: 'net_debt',          base: 7200,  trend: 0.08,  volatility: 0.18, seed: S() },
    /* CF */
    { id: 'change_wc',         base: 550,   trend: 0.03,  volatility: 0.55, seed: S() },
    { id: 'net_op_cf',         base: 6200,  trend: 0.12,  volatility: 0.20, seed: S() },
    { id: 'capex',             base: 5100,  trend: 0.08,  volatility: 0.14, seed: S(), negAbs: true },
    { id: 'disposals',         base: 180,   trend: 0.03,  volatility: 0.40, seed: S() },
    { id: 'cf_investing',      base: 4920,  trend: 0.08,  volatility: 0.15, seed: S(), negAbs: true },
    { id: 'div_paid',          base: 2800,  trend: 0.10,  volatility: 0.35, seed: S(), negAbs: true },
    { id: 'debt_issuance',     base: 650,   trend: 0.02,  volatility: 0.65, seed: S(), negAbs: true },
    { id: 'minority_div',      base: 90,    trend: 0.05,  volatility: 0.25, seed: S(), negAbs: true },
    { id: 'cf_financing',      base: 3600,  trend: 0.08,  volatility: 0.22, seed: S(), negAbs: true },
    { id: 'fx_effects',        base: 200,   trend: 0.01,  volatility: 0.85, seed: S(), negAbs: true },
    { id: 'cash_flow',         base: 600,   trend: 0.04,  volatility: 0.50, seed: S() },
    { id: 'interest_cf',       base: 1100,  trend: 0.05,  volatility: 0.20, seed: S(), negAbs: true },
    { id: 'taxes_cf',          base: 900,   trend: 0.10,  volatility: 0.18, seed: S(), negAbs: true },
    { id: 'maint_capex',       base: 2800,  trend: 0.06,  volatility: 0.14, seed: S(), negAbs: true },
    { id: 'fcf',               base: 3200,  trend: 0.13,  volatility: 0.28, seed: S() },
    { id: 'fcf_firm',          base: 3600,  trend: 0.12,  volatility: 0.25, seed: S() },
    /* Mults & Yields */
    { id: 'ev_ebitda',         base: 3.6,   trend: -0.03, volatility: 0.25, seed: S() },
    { id: 'pe',                base: 4.8,   trend: -0.02, volatility: 0.28, seed: S() },
    { id: 'net_debt_ebitda',   base: 1.15,  trend: 0.02,  volatility: 0.35, seed: S() },
    { id: 'div_yield',         base: 18,    trend: 0.05,  volatility: 0.28, seed: S() },
    { id: 'fcf_yield',         base: 16.5,  trend: 0.06,  volatility: 0.30, seed: S() },
    { id: 'roe',               base: 14.2,  trend: 0.03,  volatility: 0.20, seed: S() },
  ]; })(),

  LKOH: (() => { _seed = 200; return [
    /* PnL */
    { id: 'revenue',           base: 10800, trend: 0.10,  volatility: 0.14, seed: S() },
    { id: 'cogs',              base: 6100,  trend: 0.09,  volatility: 0.15, seed: S(), negAbs: true },
    { id: 'gross_profit',      base: 4700,  trend: 0.11,  volatility: 0.16, seed: S() },
    { id: 'sga',               base: 750,   trend: 0.06,  volatility: 0.11, seed: S(), negAbs: true },
    { id: 'ebitda',            base: 7200,  trend: 0.11,  volatility: 0.16, seed: S() },
    { id: 'ebitda_margin',     base: 62,    trend: 0.03,  volatility: 0.09, seed: S() },
    { id: 'dda',               base: 1900,  trend: 0.07,  volatility: 0.10, seed: S(), negAbs: true },
    { id: 'ebit',              base: 5300,  trend: 0.11,  volatility: 0.17, seed: S() },
    { id: 'net_interest',      base: 290,   trend: 0.02,  volatility: 0.22, seed: S(), negAbs: true },
    { id: 'ebt',               base: 5010,  trend: 0.11,  volatility: 0.18, seed: S() },
    { id: 'income_tax',        base: 1020,  trend: 0.10,  volatility: 0.16, seed: S(), negAbs: true },
    { id: 'profit_after_tax',  base: 3990,  trend: 0.12,  volatility: 0.20, seed: S() },
    { id: 'minority_pnl',     base: 95,    trend: 0.03,  volatility: 0.18, seed: S(), negAbs: true },
    { id: 'net_income',        base: 5200,  trend: 0.12,  volatility: 0.20, seed: S() },
    { id: 'net_income_margin', base: 46,    trend: 0.02,  volatility: 0.09, seed: S() },
    /* BS */
    { id: 'cash',              base: 3500,  trend: 0.07,  volatility: 0.18, seed: S() },
    { id: 'current_inv',       base: 1100,  trend: 0.05,  volatility: 0.14, seed: S() },
    { id: 'accounts_rec',      base: 2500,  trend: 0.06,  volatility: 0.11, seed: S() },
    { id: 'inventories',       base: 1800,  trend: 0.04,  volatility: 0.09, seed: S() },
    { id: 'net_fixed_assets',  base: 38000, trend: 0.05,  volatility: 0.05, seed: S() },
    { id: 'associates',        base: 2800,  trend: 0.03,  volatility: 0.08, seed: S() },
    { id: 'total_assets',      base: 54000, trend: 0.05,  volatility: 0.04, seed: S() },
    { id: 'st_financing',      base: 3600,  trend: 0.03,  volatility: 0.14, seed: S() },
    { id: 'accounts_pay',      base: 2700,  trend: 0.05,  volatility: 0.11, seed: S() },
    { id: 'lt_financing',      base: 9500,  trend: 0.03,  volatility: 0.08, seed: S() },
    { id: 'total_liab',        base: 21000, trend: 0.04,  volatility: 0.06, seed: S() },
    { id: 'shareholders',      base: 31000, trend: 0.06,  volatility: 0.05, seed: S() },
    { id: 'minority',          base: 1580,  trend: 0.07,  volatility: 0.10, seed: S() },
    { id: 'stated_equity',     base: 33000, trend: 0.06,  volatility: 0.05, seed: S() },
    { id: 'total_liab_sh',     base: 54000, trend: 0.05,  volatility: 0.04, seed: S() },
    { id: 'net_debt',          base: 5800,  trend: 0.04,  volatility: 0.12, seed: S() },
    /* CF */
    { id: 'change_wc',         base: 380,   trend: 0.02,  volatility: 0.48, seed: S() },
    { id: 'net_op_cf',         base: 8200,  trend: 0.10,  volatility: 0.14, seed: S() },
    { id: 'capex',             base: 3800,  trend: 0.06,  volatility: 0.11, seed: S(), negAbs: true },
    { id: 'disposals',         base: 320,   trend: 0.02,  volatility: 0.30, seed: S() },
    { id: 'cf_investing',      base: 3480,  trend: 0.06,  volatility: 0.12, seed: S(), negAbs: true },
    { id: 'div_paid',          base: 3800,  trend: 0.09,  volatility: 0.22, seed: S(), negAbs: true },
    { id: 'debt_issuance',     base: 600,   trend: 0.01,  volatility: 0.55, seed: S(), negAbs: true },
    { id: 'minority_div',      base: 75,    trend: 0.04,  volatility: 0.22, seed: S(), negAbs: true },
    { id: 'cf_financing',      base: 4500,  trend: 0.07,  volatility: 0.16, seed: S(), negAbs: true },
    { id: 'fx_effects',        base: 120,   trend: 0.01,  volatility: 0.75, seed: S(), negAbs: true },
    { id: 'cash_flow',         base: 1100,  trend: 0.04,  volatility: 0.40, seed: S() },
    { id: 'interest_cf',       base: 720,   trend: 0.03,  volatility: 0.16, seed: S(), negAbs: true },
    { id: 'taxes_cf',          base: 1350,  trend: 0.09,  volatility: 0.14, seed: S(), negAbs: true },
    { id: 'maint_capex',       base: 2100,  trend: 0.05,  volatility: 0.11, seed: S(), negAbs: true },
    { id: 'fcf',               base: 4500,  trend: 0.10,  volatility: 0.19, seed: S() },
    { id: 'fcf_firm',          base: 5000,  trend: 0.09,  volatility: 0.18, seed: S() },
    /* Mults & Yields */
    { id: 'ev_ebitda',         base: 3.8,   trend: -0.02, volatility: 0.18, seed: S() },
    { id: 'pe',                base: 4.5,   trend: -0.01, volatility: 0.20, seed: S() },
    { id: 'net_debt_ebitda',   base: 0.75,  trend: -0.01, volatility: 0.25, seed: S() },
    { id: 'div_yield',         base: 20,    trend: 0.04,  volatility: 0.18, seed: S() },
    { id: 'fcf_yield',         base: 22,    trend: 0.05,  volatility: 0.20, seed: S() },
    { id: 'roe',               base: 21,    trend: 0.02,  volatility: 0.12, seed: S() },
  ]; })(),
};

// Map companyId → ticker
const ID_TO_TICKER: Record<string, string> = {
  rosneft: 'ROSN',
  gazprom: 'GAZP',
  lukoil: 'LKOH',
};

// ─── Historical cache (lazy, per company×metric) ──────
const _histCache: Record<string, number[]> = {};

function eulerHistorical(ticker: string, metricId: string): number[] {
  const key = `${ticker}:${metricId}`;
  if (_histCache[key]) return _histCache[key];

  const specs = EULER_SPECS[ticker] || EULER_SPECS.ROSN;
  const spec = specs.find(s => s.id === metricId);
  if (!spec) {
    _histCache[key] = HISTORICAL_YEARS.map(() => 0);
    return _histCache[key];
  }

  let values = generateTrend(spec.base, HISTORICAL_YEARS.length, spec.trend, spec.volatility, spec.seed);
  if (spec.negAbs) values = values.map(v => -Math.abs(v));
  _histCache[key] = values;
  return values;
}

/**
 * getHistoricalData — returns exactly the same 9 data points (2017-2025)
 * as Dashboard.tsx `getCompanyBaseData()` for the Euler source.
 */
export function getHistoricalData(companyId: string, metricId: string): number[] {
  const ticker = ID_TO_TICKER[companyId] || 'ROSN';
  return eulerHistorical(ticker, metricId);
}

// ─── Deterministic pseudo-random helper ───────────────
function seeded(seed: number): number {
  const x = Math.sin(seed * 12.9898 + 78.233) * 43758.5453;
  return x - Math.floor(x);
}

// ─── Source-specific variation coefficients ────────────
const SOURCE_BIAS: Record<string, number> = {
  bcs: 0.03,
  vtb: -0.02,
  sber: 0.01,
  alfa: -0.04,
  aton: 0.05,
  rencap: -0.01,
};

const SOURCE_NOISE: Record<string, number> = {
  bcs: 0.08,
  vtb: 0.10,
  sber: 0.06,
  alfa: 0.12,
  aton: 0.09,
  rencap: 0.11,
};

// ─── Source Forecast Data ─────────────────────────────
export interface SourceForecast {
  sourceId: string;
  value: number;
  date: string;
}

/**
 * Euler forecast = extrapolation of the last historical value
 * along the same trend used in Dashboard.
 */
function eulerForecast(ticker: string, metricId: string, year: number): number {
  const hist = eulerHistorical(ticker, metricId);
  const last = hist[hist.length - 1];
  const specs = EULER_SPECS[ticker] || EULER_SPECS.ROSN;
  const spec = specs.find(s => s.id === metricId);
  if (!spec) return last;

  const yearsAhead = year - HISTORICAL_YEARS[HISTORICAL_YEARS.length - 1];
  const trendFactor = 1 + spec.trend * yearsAhead;
  return last * trendFactor;
}

function genSourceForecast(
  companyId: string,
  metricId: string,
  year: number,
  sourceId: string,
  sourceIdx: number,
): SourceForecast | null {
  const ticker = ID_TO_TICKER[companyId] || 'ROSN';

  // ~12% deterministic gap probability
  const skipSeed = seeded(sourceIdx * 17 + year * 31 + metricId.charCodeAt(0) * 13);
  if (sourceId !== 'euler' && skipSeed < 0.12) return null;

  let value: number;
  if (sourceId === 'euler') {
    value = eulerForecast(ticker, metricId, year);
  } else {
    const base = eulerForecast(ticker, metricId, year);
    const bias = SOURCE_BIAS[sourceId] || 0;
    const noise = SOURCE_NOISE[sourceId] || 0.08;
    const rnd = seeded(sourceIdx * 37 + year * 11 + metricId.charCodeAt(1 % metricId.length));
    value = base * (1 + bias + (rnd - 0.5) * noise);
  }

  // Enforce sign for negAbs metrics
  const specs = EULER_SPECS[ticker] || EULER_SPECS.ROSN;
  const spec = specs.find(s => s.id === metricId);
  if (spec?.negAbs) value = -Math.abs(value);

  value = Math.round(value * 100) / 100;

  // Generate evaluation date
  const month = Math.floor(seeded(sourceIdx * 7 + year) * 6) + 1;
  const day = Math.floor(seeded(sourceIdx * 3 + year * 2) * 28) + 1;
  const date = `${day < 10 ? '0' : ''}${day}.${month < 10 ? '0' : ''}${month}.2025`;

  return { sourceId, value, date };
}

/**
 * Get all source forecasts for a company/metric/year.
 * Optionally filtered by selectedSources.
 */
export function getSourceForecasts(
  companyId: string,
  metricId: string,
  year: number,
  selectedSources?: string[],
): SourceForecast[] {
  const results: SourceForecast[] = [];
  const srcs = selectedSources
    ? SOURCES.filter(s => selectedSources.includes(s.id))
    : SOURCES;

  srcs.forEach((src) => {
    const globalIdx = SOURCES.findIndex(s => s.id === src.id);
    const f = genSourceForecast(companyId, metricId, year, src.id, globalIdx + 1);
    if (f) results.push(f);
  });
  return results;
}

/**
 * Consensus average across selected sources.
 */
export function getConsensusValue(
  companyId: string,
  metricId: string,
  year: number,
  selectedSources?: string[],
): { avg: number; count: number } | null {
  const forecasts = getSourceForecasts(companyId, metricId, year, selectedSources);
  if (forecasts.length === 0) return null;
  const sum = forecasts.reduce((s, f) => s + f.value, 0);
  return {
    avg: Math.round((sum / forecasts.length) * 100) / 100,
    count: forecasts.length,
  };
}

/**
 * Full consensus statistics (for the detail modal).
 */
export function getConsensusStats(
  companyId: string,
  metricId: string,
  year: number,
  selectedSources?: string[],
) {
  const forecasts = getSourceForecasts(companyId, metricId, year, selectedSources);
  if (forecasts.length === 0) return null;
  const values = forecasts.map(f => f.value);
  const sum = values.reduce((s, v) => s + v, 0);
  const avg = sum / values.length;
  const sorted = [...values].sort((a, b) => a - b);
  const median =
    sorted.length % 2 === 0
      ? (sorted[sorted.length / 2 - 1] + sorted[sorted.length / 2]) / 2
      : sorted[Math.floor(sorted.length / 2)];
  const max = Math.max(...values);
  const min = Math.min(...values);
  const variance = values.reduce((s, v) => s + (v - avg) ** 2, 0) / values.length;
  const stdDev = Math.sqrt(variance);

  return { avg, median, max, min, stdDev, count: values.length, forecasts };
}

/* ─── Consensus timeline for chart (step-function) ───── */

export interface ConsensusEvent {
  date: Date;
  dateStr: string;
  sourceId: string;
  sourceName: string;
  analyst: string;
  avatarId?: string;
  value: number;
}

export interface ConsensusTimelinePoint {
  date: Date;
  dateStr: string;
  consensus: number;
}

export function getConsensusTimeline(
  companyId: string,
  metricId: string,
  year: number,
  selectedSources?: string[],
): { events: ConsensusEvent[]; timeline: ConsensusTimelinePoint[] } {
  const ticker = ID_TO_TICKER[companyId] || 'ROSN';
  const srcs = selectedSources
    ? SOURCES.filter(s => selectedSources.includes(s.id))
    : SOURCES;

  const eulerBase = eulerForecast(ticker, metricId, year);
  const events: ConsensusEvent[] = [];

  const windowStart = new Date(year - 1, 6, 1);
  const windowEnd = new Date(year, 5, 30);

  srcs.forEach((src) => {
    const globalIdx = SOURCES.findIndex(s => s.id === src.id);
    const srcSeed = globalIdx + 1;

    const nUpdates = 1 + Math.floor(seeded(srcSeed * 23 + year * 7 + metricId.charCodeAt(0) * 3) * 4);

    const skipSeed2 = seeded(srcSeed * 17 + year * 31 + metricId.charCodeAt(0) * 13);
    if (src.id !== 'euler' && skipSeed2 < 0.12) return;

    for (let u = 0; u < nUpdates; u++) {
      const monthOffset = Math.floor(
        seeded(srcSeed * 11 + u * 37 + year * 3 + metricId.charCodeAt(0)) * 12
      );
      const day = 1 + Math.floor(
        seeded(srcSeed * 7 + u * 19 + year) * 27
      );
      const evDate = new Date(year - 1, 6 + monthOffset, day);

      if (evDate < windowStart) evDate.setTime(windowStart.getTime());
      if (evDate > windowEnd) evDate.setTime(windowEnd.getTime());

      const bias = SOURCE_BIAS[src.id] || 0;
      const noise = SOURCE_NOISE[src.id] || 0.04;
      const updateNoise = (seeded(srcSeed * 41 + u * 13 + year * 7 + metricId.charCodeAt(0) * 11) - 0.5) * noise;
      const convergence = 1 - u * 0.1 * Math.min(nUpdates, 3) / nUpdates;
      let value = eulerBase * (1 + (bias + updateNoise) * convergence);

      // Enforce sign for negAbs metrics
      const specs = EULER_SPECS[ticker] || EULER_SPECS.ROSN;
      const spec = specs.find(s => s.id === metricId);
      if (spec?.negAbs) value = -Math.abs(value);

      value = Math.round(value * 100) / 100;

      const dd = evDate.getDate();
      const mm = evDate.getMonth() + 1;
      const yy = evDate.getFullYear();
      const dateStr = `${dd < 10 ? '0' : ''}${dd}.${mm < 10 ? '0' : ''}${mm}.${yy}`;

      events.push({
        date: new Date(evDate),
        dateStr,
        sourceId: src.id,
        sourceName: src.name,
        analyst: src.analyst,
        avatarId: src.avatarId,
        value,
      });
    }
  });

  events.sort((a, b) => a.date.getTime() - b.date.getTime());

  const latestBySource: Record<string, number> = {};
  const timeline: ConsensusTimelinePoint[] = [];

  events.forEach(ev => {
    latestBySource[ev.sourceId] = ev.value;
    const vals = Object.values(latestBySource);
    const avg = vals.reduce((s, v) => s + v, 0) / vals.length;

    timeline.push({
      date: new Date(ev.date),
      dateStr: ev.dateStr,
      consensus: Math.round(avg * 100) / 100,
    });
  });

  if (timeline.length > 0) {
    const last = timeline[timeline.length - 1];
    if (last.date < windowEnd) {
      const dd = windowEnd.getDate();
      const mm = windowEnd.getMonth() + 1;
      const yy = windowEnd.getFullYear();
      timeline.push({
        date: new Date(windowEnd),
        dateStr: `${dd < 10 ? '0' : ''}${dd}.${mm < 10 ? '0' : ''}${mm}.${yy}`,
        consensus: last.consensus,
      });
    }
  }

  return { events, timeline };
}

// ─── Price time series for chart ──────────────────────
export interface PricePoint {
  date: string;
  price: number;
}

function genPriceSeries(base: number, seed: number): PricePoint[] {
  const points: PricePoint[] = [];
  let price = base;
  const startDate = new Date(2025, 1, 1);
  for (let day = 0; day < 2000; day += 2) {
    const d = new Date(startDate);
    d.setDate(d.getDate() + day);
    const drift = (seeded(seed + day * 0.1) - 0.5) * 0.008;
    const jump = seeded(seed + day * 0.3) > 0.95 ? (seeded(seed + day) - 0.5) * 0.03 : 0;
    price = price * (1 + drift + jump);
    const month = ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'][d.getMonth()];
    points.push({
      date: `${d.getDate()} ${month} ${d.getFullYear()}`,
      price: Math.round(price * 10) / 10,
    });
  }
  return points;
}

const PRICE_BASES: Record<string, number> = { rosneft: 404, gazprom: 168, lukoil: 7200 };

export function getPriceSeries(companyId: string): PricePoint[] {
  return genPriceSeries(PRICE_BASES[companyId] ?? 404, (companyId || 'rosneft').charCodeAt(0) * 7);
}

export function getCompanyName(companyId: string): string {
  const map: Record<string, string> = { rosneft: 'Роснефть ROSN', gazprom: 'Газпром GAZP', lukoil: 'ЛУКОЙЛ LKOH' };
  return map[companyId] || companyId;
}

export function getCompanyTicker(companyId: string): string {
  const map: Record<string, string> = { rosneft: 'ROSN', gazprom: 'GAZP', lukoil: 'LKOH' };
  return map[companyId] || companyId;
}