import React, { useMemo, useState } from 'react';
import { ChartModal } from './ChartModal';
import { DSTabs, DSTab } from './ui/ds-tabs';
import { DSTable, DSTableCellNumber, DSTableCellPctChange, type DSTableColumn, type DSTableRowGroup } from './ui/ds-table';
import type { Scenario } from '../App';
import dbStyles from './Dashboard.module.css';

// Type definitions
interface FinancialRow {
  id: string;
  name: string;
  category: 'PnL' | 'Cash Flow' | 'Balance Sheet';
  tabCategory: 'PnL' | 'BS' | 'CF' | 'Mults & Yields';
  historicalData: number[]; // Base historical data 2017-2025
  forecastData: Record<string, number>; // Forecast data by period (2026+)
  isForecast?: boolean;
}

type PeriodType = 'Year' | 'Half' | 'Quarter';

const HISTORICAL_YEARS = [2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025];

// Company-specific base financial data
const getCompanyBaseData = (companyTicker: string): Omit<FinancialRow, 'forecastData'>[] => {
  // Helper function to generate realistic varying data with deterministic randomness
  const generateTrend = (base: number, count: number, trend: number, volatility: number, seed: number): number[] => {
    return Array(count).fill(0).map((_, i) => {
      const trendFactor = 1 + (trend * i);
      const cyclical = Math.sin(i * 0.7) * volatility;
      // Use deterministic "random" based on seed and index
      const pseudoRandom = Math.sin(seed * 12.9898 + i * 78.233) * 43758.5453;
      const random = (pseudoRandom - Math.floor(pseudoRandom) - 0.5) * volatility * 0.5;
      return base * trendFactor * (1 + cyclical + random);
    });
  };

  const companyDataMap: Record<string, Omit<FinancialRow, 'forecastData'>[]> = {
    'ROSN': [
      // PnL - Роснефть (крупнейшая нефтяная компания, стабильный рост)
      { id: 'revenue', name: 'Revenue', category: 'PnL', tabCategory: 'PnL', historicalData: generateTrend(11500, 9, 0.08, 0.12, 1) },
      { id: 'ebitda', name: 'EBITDA', category: 'PnL', tabCategory: 'PnL', historicalData: generateTrend(6800, 9, 0.09, 0.15, 2) },
      { id: 'ebitda_margin', name: 'EBITDA margin, %', category: 'PnL', tabCategory: 'PnL', historicalData: generateTrend(56, 9, 0.02, 0.08, 3) },
      { id: 'net_income', name: 'Net income', category: 'PnL', tabCategory: 'PnL', historicalData: generateTrend(4600, 9, 0.10, 0.18, 4) },

      // Cash Flow
      { id: 'fcf', name: 'Free cash flow', category: 'Cash Flow', tabCategory: 'CF', historicalData: generateTrend(3800, 9, 0.11, 0.22, 6) },
      { id: 'div_paid', name: 'Dividends paid', category: 'Cash Flow', tabCategory: 'CF', historicalData: generateTrend(-3200, 9, 0.07, 0.25, 5).map(v => -Math.abs(v)) },

      // Mults & Yields
      { id: 'fcf_yield', name: 'Free cash flow yield, %', category: 'Cash Flow', tabCategory: 'Mults & Yields', historicalData: generateTrend(18.2, 9, 0.04, 0.25, 9) },
      { id: 'div_yield', name: 'Dividend yield, %', category: 'Cash Flow', tabCategory: 'Mults & Yields', historicalData: generateTrend(15.5, 9, 0.03, 0.20, 8) },
      { id: 'net_debt_ebitda', name: 'Net debt/EBITDA', category: 'Balance Sheet', tabCategory: 'Mults & Yields', historicalData: generateTrend(0.92, 9, 0.01, 0.30, 11) },

      // Balance Sheet
      { id: 'net_debt', name: 'Net debt', category: 'Balance Sheet', tabCategory: 'BS', historicalData: generateTrend(6500, 9, 0.05, 0.15, 10) },
      { id: 'minority', name: 'Minority interests', category: 'Balance Sheet', tabCategory: 'BS', historicalData: generateTrend(1250, 9, 0.06, 0.12, 12) },
    ],
    'GAZP': [
      // PnL - Газпром (газовый гигант, высокая волатильность из-за экспорта)
      { id: 'revenue', name: 'Revenue', category: 'PnL', tabCategory: 'PnL', historicalData: generateTrend(9800, 9, 0.12, 0.20, 13) },
      { id: 'ebitda', name: 'EBITDA', category: 'PnL', tabCategory: 'PnL', historicalData: generateTrend(5500, 9, 0.14, 0.25, 14) },
      { id: 'ebitda_margin', name: 'EBITDA margin, %', category: 'PnL', tabCategory: 'PnL', historicalData: generateTrend(52, 9, 0.04, 0.12, 15) },
      { id: 'net_income', name: 'Net income', category: 'PnL', tabCategory: 'PnL', historicalData: generateTrend(3800, 9, 0.15, 0.30, 16) },

      // Cash Flow
      { id: 'fcf', name: 'Free cash flow', category: 'Cash Flow', tabCategory: 'CF', historicalData: generateTrend(3200, 9, 0.13, 0.28, 18) },
      { id: 'div_paid', name: 'Dividends paid', category: 'Cash Flow', tabCategory: 'CF', historicalData: generateTrend(-2800, 9, 0.10, 0.35, 17).map(v => -Math.abs(v)) },

      // Mults & Yields
      { id: 'fcf_yield', name: 'Free cash flow yield, %', category: 'Cash Flow', tabCategory: 'Mults & Yields', historicalData: generateTrend(16.5, 9, 0.06, 0.30, 21) },
      { id: 'div_yield', name: 'Dividend yield, %', category: 'Cash Flow', tabCategory: 'Mults & Yields', historicalData: generateTrend(18, 9, 0.05, 0.28, 20) },
      { id: 'net_debt_ebitda', name: 'Net debt/EBITDA', category: 'Balance Sheet', tabCategory: 'Mults & Yields', historicalData: generateTrend(1.15, 9, 0.02, 0.35, 23) },

      // Balance Sheet
      { id: 'net_debt', name: 'Net debt', category: 'Balance Sheet', tabCategory: 'BS', historicalData: generateTrend(7200, 9, 0.08, 0.18, 22) },
      { id: 'minority', name: 'Minority interests', category: 'Balance Sheet', tabCategory: 'BS', historicalData: generateTrend(950, 9, 0.08, 0.15, 24) },
    ],
    'LKOH': [
      // PnL - ЛУКОЙЛ (эффективная нефтяная компания, сбалансированный рост)
      { id: 'revenue', name: 'Revenue', category: 'PnL', tabCategory: 'PnL', historicalData: generateTrend(10800, 9, 0.10, 0.14, 25) },
      { id: 'ebitda', name: 'EBITDA', category: 'PnL', tabCategory: 'PnL', historicalData: generateTrend(7200, 9, 0.11, 0.16, 26) },
      { id: 'ebitda_margin', name: 'EBITDA margin, %', category: 'PnL', tabCategory: 'PnL', historicalData: generateTrend(62, 9, 0.03, 0.09, 27) },
      { id: 'net_income', name: 'Net income', category: 'PnL', tabCategory: 'PnL', historicalData: generateTrend(5200, 9, 0.12, 0.20, 28) },

      // Cash Flow
      { id: 'fcf', name: 'Free cash flow', category: 'Cash Flow', tabCategory: 'CF', historicalData: generateTrend(4500, 9, 0.10, 0.19, 30) },
      { id: 'div_paid', name: 'Dividends paid', category: 'Cash Flow', tabCategory: 'CF', historicalData: generateTrend(-3800, 9, 0.09, 0.22, 29).map(v => -Math.abs(v)) },

      // Mults & Yields
      { id: 'fcf_yield', name: 'Free cash flow yield, %', category: 'Cash Flow', tabCategory: 'Mults & Yields', historicalData: generateTrend(22, 9, 0.05, 0.20, 33) },
      { id: 'div_yield', name: 'Dividend yield, %', category: 'Cash Flow', tabCategory: 'Mults & Yields', historicalData: generateTrend(20, 9, 0.04, 0.18, 32) },
      { id: 'net_debt_ebitda', name: 'Net debt/EBITDA', category: 'Balance Sheet', tabCategory: 'Mults & Yields', historicalData: generateTrend(0.75, 9, -0.01, 0.25, 35) },

      // Balance Sheet
      { id: 'net_debt', name: 'Net debt', category: 'Balance Sheet', tabCategory: 'BS', historicalData: generateTrend(5800, 9, 0.04, 0.12, 34) },
      { id: 'minority', name: 'Minority interests', category: 'Balance Sheet', tabCategory: 'BS', historicalData: generateTrend(1580, 9, 0.07, 0.10, 36) },
    ],
  };

  return companyDataMap[companyTicker] || companyDataMap['ROSN'];
};

// Driver impact coefficients on financial metrics
const DRIVER_IMPACT: Record<string, Record<string, number>> = {
  'brent': {
    'revenue': 0.12,
    'ebitda': 0.15,
    'ebitda_margin': 0.08,
    'net_income': 0.18,
    'fcf': 0.20,
    'fcf_yield': 0.15,
  },
  'usd_rub': {
    'revenue': 0.10,
    'ebitda': 0.08,
    'net_income': 0.12,
    'div_paid': 0.08,
    'fcf': 0.14,
    'net_debt': -0.06,
  },
  'key_rate_pct': {
    'net_income': -0.10,
    'fcf': -0.12,
    'net_debt': 0.05,
    'net_debt_ebitda': 0.08,
    'div_yield': -0.06,
  },
  'urals': {
    'revenue': 0.14,
    'ebitda': 0.16,
    'net_income': 0.15,
    'fcf': 0.18,
  },
  'commodity_basket': {
    'revenue': 0.08,
    'ebitda': 0.10,
    'ebitda_margin': 0.05,
  }
};

// Calculate the impact factor from scenario drivers
const calculateImpactFactor = (scenarioValues: Record<string, Record<string, string>>, metricId: string, period: string): number => {
  let totalImpact = 0;
  
  Object.keys(DRIVER_IMPACT).forEach(driverId => {
    if (scenarioValues[driverId] && DRIVER_IMPACT[driverId][metricId]) {
      const driverValue = parseFloat(scenarioValues[driverId][period]?.replace(',', '.') || '0');
      const baseValue = 70;
      
      if (driverValue > 0) {
        const percentChange = (driverValue - baseValue) / baseValue;
        const impact = percentChange * DRIVER_IMPACT[driverId][metricId];
        totalImpact += impact;
      }
    }
  });
  
  return 1 + totalImpact;
};

// Generate historical periods based on type
const generateHistoricalPeriods = (type: PeriodType): string[] => {
  if (type === 'Year') {
    return HISTORICAL_YEARS.map(String);
  } else if (type === 'Half') {
    return HISTORICAL_YEARS.flatMap(y => [`${y}-H1`, `${y}-H2`]);
  } else {
    return HISTORICAL_YEARS.flatMap(y => [`${y}-Q1`, `${y}-Q2`, `${y}-Q3`, `${y}-Q4`]);
  }
};

// Distribute yearly data to sub-periods (Half/Quarter)
const distributeYearlyData = (yearlyData: number[], type: PeriodType): number[] => {
  if (type === 'Year') return yearlyData;
  
  const multiplier = type === 'Half' ? 2 : 4;
  return yearlyData.flatMap((yearValue, yearIndex) => {
    // Distribute with deterministic variance based on index
    const baseValue = yearValue / multiplier;
    return Array(multiplier).fill(0).map((_, i) => {
      // Use deterministic variance based on year and period index
      const seed = (yearIndex * multiplier + i) % 10;
      const variance = (seed / 10 - 0.5) * 0.1; // ±5% variance
      return baseValue * (1 + variance);
    });
  });
};

// Get all forecast periods from scenario filtered by type
const getForecastPeriodsByType = (scenario: Scenario | undefined, type: PeriodType): string[] => {
  if (!scenario?.selectedPeriods) return [];
  
  return scenario.selectedPeriods
    .filter(p => {
      if (type === 'Year') return !p.includes('-');
      if (type === 'Half') return p.includes('-H');
      if (type === 'Quarter') return p.includes('-Q');
      return false;
    })
    .sort((a, b) => {
      const getYear = (p: string) => parseInt(p.split('-')[0]);
      const getPeriod = (p: string) => {
        if (p.includes('Q')) return parseInt(p.split('-Q')[1]);
        if (p.includes('H')) return parseInt(p.split('-H')[1]) * 2;
        return 0;
      };
      
      const yearDiff = getYear(a) - getYear(b);
      if (yearDiff !== 0) return yearDiff;
      return getPeriod(a) - getPeriod(b);
    });
};

/* ── Sparkline — SVG dual-segment (historical solid blue + forecast dashed turquoise) ── */
const Sparkline = React.memo(({ data, historicalCount, onClick }: { data: number[]; historicalCount: number; onClick: () => void }) => {
  const { histPath, fcstPath } = useMemo(() => {
    if (data.length === 0) return { histPath: '', fcstPath: '' };
    const w = 64;
    const h = 24;
    const pad = 2;
    const plotW = w - pad * 2;
    const plotH = h - pad * 2;
    const min = Math.min(...data);
    const max = Math.max(...data);
    const range = max - min || 1;
    const toX = (i: number) => pad + (i / (data.length - 1)) * plotW;
    const toY = (v: number) => pad + plotH - ((v - min) / range) * plotH;

    const splitIdx = Math.min(historicalCount, data.length);

    // Historical path: indices 0..splitIdx-1
    let hPath = '';
    for (let i = 0; i < splitIdx; i++) {
      hPath += `${i === 0 ? 'M' : 'L'}${toX(i).toFixed(1)},${toY(data[i]).toFixed(1)}`;
    }

    // Forecast path: starts from last historical point, continues with forecast
    let fPath = '';
    if (splitIdx > 0 && splitIdx < data.length) {
      fPath += `M${toX(splitIdx - 1).toFixed(1)},${toY(data[splitIdx - 1]).toFixed(1)}`;
      for (let i = splitIdx; i < data.length; i++) {
        fPath += `L${toX(i).toFixed(1)},${toY(data[i]).toFixed(1)}`;
      }
    } else if (splitIdx === 0) {
      for (let i = 0; i < data.length; i++) {
        fPath += `${i === 0 ? 'M' : 'L'}${toX(i).toFixed(1)},${toY(data[i]).toFixed(1)}`;
      }
    }

    return { histPath: hPath, fcstPath: fPath };
  }, [data, historicalCount]);

  return (
    <div className={dbStyles.sparkBox} onClick={onClick}>
      <svg width="64" height="24" viewBox="0 0 64 24" fill="none">
        {histPath && (
          <path d={histPath} stroke="var(--ds-blue-6)" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
        )}
        {fcstPath && (
          <path d={fcstPath} stroke="var(--ds-table-forecast-text)" strokeWidth="1.5" fill="none" strokeLinejoin="round" strokeDasharray="3 2" />
        )}
      </svg>
    </div>
  );
});

Sparkline.displayName = 'Sparkline';

interface DashboardProps {
  scenarioData?: Scenario;
  periodType: PeriodType;
  allScenarios?: Scenario[];
  companyTicker: string; // Add company ticker to use company-specific data
  displayFormat?: string;
}

export function Dashboard({ scenarioData, periodType, allScenarios = [], companyTicker, displayFormat = 'n' }: DashboardProps) {
  const [dashboardTab, setDashboardTab] = useState('Summary');
  const [periodOffset, setPeriodOffset] = useState(0);
  const [selectedChart, setSelectedChart] = useState<{ 
    metricId: string;
    name: string; 
    historicalData: number[];
    periods: string[];
    baseYearlyData: number[];
  } | null>(null);
  
  // Max visible periods in the table viewport
  const MAX_VISIBLE = periodType === 'Year' ? 9 : periodType === 'Half' ? 10 : 12;

  // Reset pagination when period type changes
  // Also auto-scroll to show at least one forecast period if forecasts exist
  React.useEffect(() => {
    setPeriodOffset(0);
  }, [periodType]);

  // Generate historical periods for current type
  const allHistoricalPeriods = useMemo(() => generateHistoricalPeriods(periodType), [periodType]);

  // Get forecast periods for current type
  const forecastPeriods = useMemo(() => getForecastPeriodsByType(scenarioData, periodType), [scenarioData, periodType]);

  // All periods combined
  const allPeriods = useMemo(() => [...allHistoricalPeriods, ...forecastPeriods], [allHistoricalPeriods, forecastPeriods]);

  // Whether scrolling is needed
  const needsScroll = allPeriods.length > MAX_VISIBLE;
  const maxOffset = Math.max(0, allPeriods.length - MAX_VISIBLE);

  // Auto-scroll so at least one forecast period is always visible when forecasts exist
  React.useEffect(() => {
    if (forecastPeriods.length > 0 && allPeriods.length > MAX_VISIBLE) {
      // First forecast period index in allPeriods
      const firstForecastIdx = allHistoricalPeriods.length;
      // We need offset such that firstForecastIdx is within [offset, offset + MAX_VISIBLE)
      // i.e. offset <= firstForecastIdx < offset + MAX_VISIBLE
      // So offset >= firstForecastIdx - MAX_VISIBLE + 1
      const minOffset = Math.max(0, firstForecastIdx - MAX_VISIBLE + 1);
      setPeriodOffset(prev => {
        // Only adjust if current offset doesn't show any forecast
        if (prev + MAX_VISIBLE <= firstForecastIdx) {
          return Math.min(minOffset, maxOffset);
        }
        return prev;
      });
    }
  }, [forecastPeriods.length, allPeriods.length, allHistoricalPeriods.length, MAX_VISIBLE, maxOffset]);

  // Visible periods window
  const visiblePeriods = useMemo(() => {
    if (!needsScroll) return allPeriods;
    return allPeriods.slice(periodOffset, periodOffset + MAX_VISIBLE);
  }, [allPeriods, periodOffset, MAX_VISIBLE, needsScroll]);

  // Scroll handlers
  const goFirst = () => setPeriodOffset(0);
  const goPrev = () => setPeriodOffset(o => Math.max(0, o - 1));
  const goNext = () => setPeriodOffset(o => Math.min(maxOffset, o + 1));
  const goLast = () => setPeriodOffset(maxOffset);

  const canGoPrev = periodOffset > 0;
  const canGoNext = periodOffset < maxOffset;

  // Get company-specific base data
  const baseData = useMemo(() => getCompanyBaseData(companyTicker), [companyTicker]);

  // Filter metrics by active tab
  const filteredBaseData = useMemo(() => {
    if (dashboardTab === 'Summary') return baseData; // Summary = all 11 metrics
    const tabMap: Record<string, string> = { PnL: 'PnL', BS: 'BS', CF: 'CF', Mults: 'Mults & Yields' };
    const tabCat = tabMap[dashboardTab];
    if (!tabCat) return baseData;
    return baseData.filter(d => d.tabCategory === tabCat);
  }, [dashboardTab, baseData]);

  // Derive visible category groups from filtered data
  const visibleCategories = useMemo(() => {
    const seen = new Set<string>();
    return filteredBaseData.reduce<string[]>((acc, m) => {
      if (!seen.has(m.category)) { seen.add(m.category); acc.push(m.category); }
      return acc;
    }, []);
  }, [filteredBaseData]);

  // Apply scenario data to modify the base data
  const displayData: FinancialRow[] = useMemo(() => {
    return filteredBaseData.map(row => {
      const forecastData: Record<string, number> = {};
      
      if (scenarioData?.values && scenarioData.selectedPeriods) {
        forecastPeriods.forEach(period => {
          const baseValue = row.historicalData[row.historicalData.length - 1];
          const impactFactor = calculateImpactFactor(scenarioData.values, row.id, period);
          
          // For sub-periods, divide by period count
          const periodDivisor = period.includes('-H') ? 2 : period.includes('-Q') ? 4 : 1;
          forecastData[period] = (baseValue / periodDivisor) * impactFactor;
        });
      }
      
      return {
        ...row,
        forecastData
      };
    });
  }, [scenarioData, forecastPeriods, filteredBaseData]);

  // Get value for a specific period
  const getValueForPeriod = (row: FinancialRow, period: string): number => {
    const isHistorical = allHistoricalPeriods.includes(period);
    
    if (isHistorical) {
      const historicalData = distributeYearlyData(row.historicalData, periodType);
      const idx = allHistoricalPeriods.indexOf(period);
      return historicalData[idx] || 0;
    } else {
      return row.forecastData[period] || 0;
    }
  };

  const handleChartClick = (row: FinancialRow) => {
    const historicalData = distributeYearlyData(row.historicalData, periodType);
    
    setSelectedChart({
      metricId: row.id,
      name: row.name,
      historicalData: historicalData,
      periods: allPeriods,
      baseYearlyData: row.historicalData
    });
  };

  /* ─── Scroll button (Figma spec: 20x20 bg-surface-alt rounded-[4px]) ─── */
  const ScrollBtn = ({ onClick, disabled, children }: { onClick: () => void; disabled: boolean; children: React.ReactNode }) => (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center', width: 20, height: 20,
        borderRadius: 4, backgroundColor: 'var(--ds-bg-secondary)', transition: 'all 150ms ease', flexShrink: 0,
        opacity: disabled ? 0.3 : 1, cursor: disabled ? 'not-allowed' : 'pointer',
        border: 'none', outline: 'none',
      }}
    >
      {children}
    </button>
  );

  return (
    <div className={dbStyles.root}>
      {/* Tabs row with scroll controls */}
      <div className={dbStyles.tabsRow}>
        <DSTabs size="sm" value={dashboardTab} onChange={setDashboardTab}>
          <DSTab value="Summary">Summary</DSTab>
          <DSTab value="PnL">PnL</DSTab>
          <DSTab value="BS">BS</DSTab>
          <DSTab value="CF">CF</DSTab>
          <DSTab value="Mults">Mults & Yields</DSTab>
        </DSTabs>

        {/* Period scroll controls — only shown when overflow */}
        {needsScroll && (
          <div className={dbStyles.scrollControls}>
            {/* « Go to first */}
            <ScrollBtn onClick={goFirst} disabled={!canGoPrev}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M5.1 8.6L2.6 6.1L5.1 3.6M8.6 8.6L6.1 6.1L8.6 3.6" stroke="var(--ds-text-secondary)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </ScrollBtn>
            {/* < Go back one */}
            <ScrollBtn onClick={goPrev} disabled={!canGoPrev}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M7.6 8.6L4.6 5.6L7.6 2.6" stroke="var(--ds-text-secondary)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </ScrollBtn>
            {/* > Go forward one */}
            <ScrollBtn onClick={goNext} disabled={!canGoNext}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M4.6 8.6L7.6 5.6L4.6 2.6" stroke="var(--ds-text-secondary)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </ScrollBtn>
            {/* » Go to last */}
            <ScrollBtn onClick={goLast} disabled={!canGoNext}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M3.6 8.6L6.1 6.1L3.6 3.6M7.1 8.6L9.6 6.1L7.1 3.6" stroke="var(--ds-text-secondary)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </ScrollBtn>
          </div>
        )}
      </div>

      {/* Table */}
      <div className={dbStyles.tableWrap}>
        {(() => {
          // Build DSTable columns dynamically
          const tableColumns: DSTableColumn<Record<string, any>>[] = [
            {
              id: '_name',
              header: 'mn/USD',
              align: 'left',
              width: 180,
              sortable: true,
              sortType: 'text',
              sticky: true,
              render: (value: any) => (
                <span className={dbStyles.cellName}>{value}</span>
              ),
            },
            {
              id: '_sparkline',
              header: '',
              align: 'center',
              width: 80,
              render: (_: any, row: Record<string, any>) => (
                <Sparkline data={row._sparkData} historicalCount={row._sparkData.length - forecastPeriods.length} onClick={() => handleChartClick(row._original)} />
              ),
            },
            ...visiblePeriods.map((period, periodIdx): DSTableColumn<Record<string, any>> => {
              const isHistorical = allHistoricalPeriods.includes(period);
              const isForecast = !isHistorical;
              const isFirstForecast = isForecast && (periodIdx === 0 || allHistoricalPeriods.includes(visiblePeriods[periodIdx - 1]));
              return {
                id: period,
                header: period,
                align: 'right' as const,
                flex: true,
                minWidth: '100px',
                sortable: true,
                sortType: 'number',
                forecast: isForecast,
                groupBorderLeft: isFirstForecast,
                render: (value: any, row: Record<string, any>) => {
                  const pct = row[`_pct_${period}`] as number | null | undefined;
                  const showPct = displayFormat === 'pct';
                  return (
                    <div className={dbStyles.cellValCol}>
                      <DSTableCellNumber
                        value={value === 0 ? null : value}
                        forecast={!isHistorical}
                      />
                      {showPct && <DSTableCellPctChange pctChange={pct} />}
                    </div>
                  );
                },
              };
            }),
          ];

          // Build grouped data
          const tableGroups: DSTableRowGroup<Record<string, any>>[] = visibleCategories.map(cat => ({
            id: cat,
            title: cat,
            collapsible: true,
            rows: displayData
              .filter(d => d.category === cat)
              .map(row => {
                const historicalData = distributeYearlyData(row.historicalData, periodType);
                const allRowData = [
                  ...historicalData,
                  ...forecastPeriods.map(p => row.forecastData[p] || 0),
                ];

                const rowObj: Record<string, any> = {
                  id: row.id,
                  _name: row.name,
                  _sparkData: allRowData,
                  _original: row,
                };
                visiblePeriods.forEach((period) => {
                  const val = getValueForPeriod(row, period);
                  rowObj[period] = val;

                  // Compute pct change vs previous period
                  const allIdx = allPeriods.indexOf(period);
                  if (allIdx > 0) {
                    const prevPeriod = allPeriods[allIdx - 1];
                    const prevVal = getValueForPeriod(row, prevPeriod);
                    if (prevVal !== 0) {
                      rowObj[`_pct_${period}`] = ((val - prevVal) / Math.abs(prevVal)) * 100;
                    } else {
                      rowObj[`_pct_${period}`] = null;
                    }
                  } else {
                    rowObj[`_pct_${period}`] = null;
                  }
                });
                return rowObj;
              }),
          }));

          return (
            <DSTable
              columns={tableColumns}
              data={tableGroups}
              grouped
              rowKeyField="id"
              stickyFirstColumn
            />
          );
        })()}
      </div>
      
      {/* Footer */}
      <div className={dbStyles.footer}>
        <div>&copy; Andromeda 2025. Авторские права защищены.</div>
        <div className={dbStyles.footerLinks}>
          <a href="#" className={dbStyles.footerLink}>support@euler.team</a>
          <a href="#" className={dbStyles.footerLink}>Политика конфиденциальности</a>
          <a href="#" className={dbStyles.footerLink}>Условия использования</a>
        </div>
      </div>

      {/* Chart Modal */}
      {selectedChart && (
        <ChartModal
          isOpen={!!selectedChart}
          onClose={() => setSelectedChart(null)}
          title={selectedChart.name}
          metricId={selectedChart.metricId}
          historicalData={selectedChart.historicalData}
          periods={selectedChart.periods}
          allScenarios={allScenarios}
          periodType={periodType}
          baseYearlyData={selectedChart.baseYearlyData} // Add original yearly data for forecast calculations
        />
      )}
    </div>
  );
}