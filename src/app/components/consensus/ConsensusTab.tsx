import React, { useState, useMemo, useCallback } from 'react';
import { DSTabs, DSTab } from '../ui/ds-tabs';
import { DSTable, DSTableCellNumber, DSTableCellPctChange, type DSTableColumn, type DSTableRowGroup } from '../ui/ds-table';
import { DSTooltip } from '../ui/ds-tooltip';
import { ConsensusDetailModal } from './ConsensusDetailModal';
import {
  METRICS,
  SOURCES,
  HISTORICAL_YEARS,
  FORECAST_YEARS,
  ALL_YEARS,
  getHistoricalData,
  getConsensusValue,
  getConsensusStats,
  type TabCategory,
  type Metric,
} from './ConsensusData';

/* ═══════════════════════════════════════════════════════
   ConsensusTab — Consensus data table (Mantine migration)
   ═══════════════════════════════════════════════════════ */

const TAB_CATEGORIES: { value: string; label: string }[] = [
  { value: 'All', label: 'Summary' },
  { value: 'PnL', label: 'PnL' },
  { value: 'BS', label: 'BS' },
  { value: 'CF', label: 'CF' },
  { value: 'Mults & Yields', label: 'Mults & Yields' },
];

const SUMMARY_METRIC_IDS = [
  'revenue', 'ebitda', 'ebitda_margin', 'net_income',
  'fcf', 'fcf_yield', 'div_paid', 'div_yield',
  'net_debt', 'net_debt_ebitda', 'minority',
];

const tnum: React.CSSProperties = { fontFeatureSettings: "'lnum', 'tnum'" };

/* ── Sparkline ── */
const Sparkline = React.memo(({ data, historicalCount, onClick }: { data: number[]; historicalCount: number; onClick?: () => void }) => {
  const { histPath, fcstPath } = useMemo(() => {
    if (data.length === 0) return { histPath: '', fcstPath: '' };
    const w = 64, h = 24, pad = 2;
    const plotW = w - pad * 2, plotH = h - pad * 2;
    const min = Math.min(...data), max = Math.max(...data);
    const range = max - min || 1;
    const toX = (i: number) => pad + (i / (data.length - 1)) * plotW;
    const toY = (v: number) => pad + plotH - ((v - min) / range) * plotH;
    const splitIdx = Math.min(historicalCount, data.length);

    let hPath = '';
    for (let i = 0; i < splitIdx; i++) hPath += `${i === 0 ? 'M' : 'L'}${toX(i).toFixed(1)},${toY(data[i]).toFixed(1)}`;

    let fPath = '';
    if (splitIdx > 0 && splitIdx < data.length) {
      fPath += `M${toX(splitIdx - 1).toFixed(1)},${toY(data[splitIdx - 1]).toFixed(1)}`;
      for (let i = splitIdx; i < data.length; i++) fPath += `L${toX(i).toFixed(1)},${toY(data[i]).toFixed(1)}`;
    } else if (splitIdx === 0) {
      for (let i = 0; i < data.length; i++) fPath += `${i === 0 ? 'M' : 'L'}${toX(i).toFixed(1)},${toY(data[i]).toFixed(1)}`;
    }

    return { histPath: hPath, fcstPath: fPath };
  }, [data, historicalCount]);

  return (
    <div style={{ height: 24, width: 64, cursor: 'pointer', transition: 'opacity 150ms ease' }} onClick={onClick}>
      <svg width="64" height="24" viewBox="0 0 64 24" fill="none">
        {histPath && <path d={histPath} stroke="var(--ds-blue-6)" strokeWidth="1.5" fill="none" strokeLinejoin="round" />}
        {fcstPath && <path d={fcstPath} stroke="var(--ds-table-forecast-text)" strokeWidth="1.5" fill="none" strokeLinejoin="round" strokeDasharray="3 2" />}
      </svg>
    </div>
  );
});
Sparkline.displayName = 'Sparkline';

/* ── Scroll button ── */
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

function fmtTooltipVal(val: number, unit?: string, isPercent?: boolean): string {
  const formatted = val.toLocaleString('ru-RU', { maximumFractionDigits: 1 });
  if (isPercent) return `${formatted}%`;
  if (unit === 'mn USD') return `${formatted} млн.`;
  return formatted;
}

interface ConsensusTabProps {
  companyId: string;
  companyTicker: string;
  selectedSources: string[];
  onSourcesChange: (sources: string[]) => void;
  displayFormat?: string;
}

export function ConsensusTab({ companyId, companyTicker, selectedSources, onSourcesChange, displayFormat = 'n' }: ConsensusTabProps) {
  const [activeTab, setActiveTab] = useState<string>('All');
  const [selectedCell, setSelectedCell] = useState<{ metricId: string; year: number } | null>(null);

  const MAX_VISIBLE = 9;
  const [periodOffset, setPeriodOffset] = useState(0);
  const needsScroll = ALL_YEARS.length > MAX_VISIBLE;
  const maxOffset = Math.max(0, ALL_YEARS.length - MAX_VISIBLE);
  const canGoPrev = periodOffset > 0;
  const canGoNext = periodOffset < maxOffset;
  const goFirst = () => setPeriodOffset(0);
  const goPrev = () => setPeriodOffset(o => Math.max(0, o - 1));
  const goNext = () => setPeriodOffset(o => Math.min(maxOffset, o + 1));
  const goLast = () => setPeriodOffset(maxOffset);

  const visibleYears = useMemo(
    () => (needsScroll ? ALL_YEARS.slice(periodOffset, periodOffset + MAX_VISIBLE) : ALL_YEARS),
    [periodOffset, needsScroll],
  );

  React.useEffect(() => {
    if (ALL_YEARS.length > MAX_VISIBLE && FORECAST_YEARS.length > 0) {
      const firstForecastIdx = HISTORICAL_YEARS.length;
      const minOffset = Math.max(0, firstForecastIdx - MAX_VISIBLE + 1);
      setPeriodOffset(prev => {
        if (prev + MAX_VISIBLE <= firstForecastIdx) return Math.min(minOffset, maxOffset);
        return prev;
      });
    }
  }, [maxOffset]);

  const filteredMetrics = useMemo(() => {
    if (activeTab === 'All') return METRICS.filter(m => SUMMARY_METRIC_IDS.includes(m.id));
    return METRICS.filter(m => m.tabCategory === activeTab);
  }, [activeTab]);

  const historicalCache = useMemo(() => {
    const c: Record<string, number[]> = {};
    METRICS.forEach(m => { c[m.id] = getHistoricalData(companyId, m.id); });
    return c;
  }, [companyId]);

  const consensusCache = useMemo(() => {
    const c: Record<string, { avg: number; count: number } | null> = {};
    METRICS.forEach(m => {
      FORECAST_YEARS.forEach(y => { c[`${m.id}-${y}`] = getConsensusValue(companyId, m.id, y, selectedSources); });
    });
    return c;
  }, [companyId, selectedSources]);

  const statsCache = useMemo(() => {
    const c: Record<string, { min: number; max: number; count: number; avg: number } | null> = {};
    METRICS.forEach(m => {
      FORECAST_YEARS.forEach(y => {
        const stats = getConsensusStats(companyId, m.id, y, selectedSources);
        c[`${m.id}-${y}`] = stats ? { min: stats.min, max: stats.max, count: stats.count, avg: stats.avg } : null;
      });
    });
    return c;
  }, [companyId, selectedSources]);

  const handleCellClick = useCallback((metricId: string, year: number) => {
    if (FORECAST_YEARS.includes(year)) setSelectedCell({ metricId, year });
  }, []);

  const categories = useMemo(() => {
    const seen = new Set<string>();
    return filteredMetrics.reduce<string[]>((acc, m) => {
      if (!seen.has(m.category)) { seen.add(m.category); acc.push(m.category); }
      return acc;
    }, []);
  }, [filteredMetrics]);

  /* ── Build DSTable columns ── */
  const tableColumns: DSTableColumn<Record<string, any>>[] = useMemo(() => [
    {
      id: '_name',
      header: 'mn/USD',
      align: 'left' as const,
      width: 180,
      sortable: true,
      sortType: 'text' as const,
      sticky: true,
      render: (value: any) => (
        <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 14, lineHeight: '20px', color: 'var(--ds-text-primary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', ...tnum }}>
          {value}
        </span>
      ),
    },
    {
      id: '_sparkline',
      header: '',
      align: 'center' as const,
      width: 80,
      render: (_: any, row: Record<string, any>) => (
        <Sparkline data={row._sparkData} historicalCount={HISTORICAL_YEARS.length} />
      ),
    },
    ...visibleYears.map((year, yearIdx): DSTableColumn<Record<string, any>> => {
      const isForecast = FORECAST_YEARS.includes(year);
      const isFirstForecast = isForecast && (yearIdx === 0 || !FORECAST_YEARS.includes(visibleYears[yearIdx - 1]));
      return {
        id: String(year),
        header: String(year),
        align: 'right' as const,
        flex: true,
        minWidth: '100px',
        sortable: true,
        sortType: 'number' as const,
        forecast: isForecast,
        groupBorderLeft: isFirstForecast,
        render: (value: any, row: Record<string, any>) => {
          const pct = row[`_pct_${year}`] as number | null | undefined;
          const showPct = displayFormat === 'pct';

          if (isForecast) {
            const consensus = row[`_consensus_${year}`] as { avg: number; count: number } | null;
            if (!consensus) return <DSTableCellNumber value={null} forecast />;

            const stats = row[`_stats_${year}`] as { min: number; max: number; count: number; avg: number } | null;
            const metricName = row._name as string;
            const unit = row._unit as string | undefined;
            const isPct = row._isPercent as boolean | undefined;

            const cellContent = (
              <div
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', width: '100%', cursor: 'pointer' }}
                onClick={() => handleCellClick(row._metricId, year)}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 6, width: '100%' }}>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 14, lineHeight: '20px', color: 'var(--ds-turquoise-6)', ...tnum }}>
                    {typeof consensus.avg === 'number' ? consensus.avg.toLocaleString('ru-RU', { maximumFractionDigits: 2 }) : consensus.avg}
                  </span>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 10, lineHeight: '14px', color: 'var(--ds-text-gray-dark)', fontVariantNumeric: 'tabular-nums' }}>
                    {consensus.count}
                  </span>
                </div>
                {showPct && <DSTableCellPctChange pctChange={pct} />}
              </div>
            );

            if (!stats) return cellContent;

            return (
              <DSTooltip
                side="top"
                delay={200}
                triggerClassName=""
                content={{
                  maxWidth: 240,
                  children: (
                    <>
                      <div style={{ padding: '10px 12px 4px' }}>
                        <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: 14, lineHeight: '20px', color: 'var(--ds-text-primary)' }}>
                          {metricName}
                        </span>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 0, padding: '0 12px 8px' }}>
                        {([
                          ['Минимум', fmtTooltipVal(stats.min, unit, isPct)],
                          ['Максимум', fmtTooltipVal(stats.max, unit, isPct)],
                          ['Всего оценок', String(stats.count)],
                        ] as const).map(([label, val]) => (
                          <div key={label} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, minHeight: 22 }}>
                            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, lineHeight: '16px', color: 'var(--ds-text-gray-dark)', ...tnum }}>{label}</span>
                            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, lineHeight: '16px', fontVariantNumeric: 'tabular-nums', textAlign: 'right', color: 'var(--ds-text-primary)', ...tnum }}>{val}</span>
                          </div>
                        ))}
                      </div>
                      <div style={{ padding: '4px 12px 8px', borderTop: '1px solid var(--ds-border-primary)' }}>
                        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, lineHeight: '16px', color: 'var(--ds-blue-6)' }}>Подробнее</span>
                      </div>
                    </>
                  ),
                }}
              >
                {cellContent}
              </DSTooltip>
            );
          }
          return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
              <DSTableCellNumber value={value === 0 ? null : value} />
              {showPct && <DSTableCellPctChange pctChange={pct} />}
            </div>
          );
        },
      };
    }),
  ], [visibleYears, handleCellClick, displayFormat]);

  /* ── Build grouped rows ── */
  const tableGroups: DSTableRowGroup<Record<string, any>>[] = useMemo(() =>
    categories.map(cat => ({
      id: cat,
      title: cat,
      collapsible: true,
      rows: filteredMetrics
        .filter(m => m.category === cat)
        .map(metric => {
          const hist = historicalCache[metric.id] || [];
          const allRowData = [
            ...hist.map(v => Math.abs(v)),
            ...FORECAST_YEARS.map(y => {
              const c = consensusCache[`${metric.id}-${y}`];
              return c ? Math.abs(c.avg) : 0;
            }),
          ];

          const row: Record<string, any> = {
            id: metric.id,
            _name: metric.name,
            _sparkData: allRowData,
            _metricId: metric.id,
            _unit: metric.unit,
            _isPercent: metric.isPercent,
          };

          visibleYears.forEach(year => {
            const isForecast = FORECAST_YEARS.includes(year);
            let currentVal = 0;
            if (isForecast) {
              const consensus = consensusCache[`${metric.id}-${year}`];
              currentVal = consensus?.avg ?? 0;
              row[String(year)] = currentVal;
              row[`_consensus_${year}`] = consensus;
              row[`_stats_${year}`] = statsCache[`${metric.id}-${year}`];
            } else {
              const histIdx = HISTORICAL_YEARS.indexOf(year);
              currentVal = histIdx >= 0 ? (hist[histIdx] ?? 0) : 0;
              row[String(year)] = currentVal;
            }

            const allIdx = ALL_YEARS.indexOf(year);
            if (allIdx > 0) {
              const prevYear = ALL_YEARS[allIdx - 1];
              const prevIsForecast = FORECAST_YEARS.includes(prevYear);
              let prevVal = 0;
              if (prevIsForecast) {
                const prevConsensus = consensusCache[`${metric.id}-${prevYear}`];
                prevVal = prevConsensus?.avg ?? 0;
              } else {
                const prevHistIdx = HISTORICAL_YEARS.indexOf(prevYear);
                prevVal = prevHistIdx >= 0 ? (hist[prevHistIdx] ?? 0) : 0;
              }
              row[`_pct_${year}`] = prevVal !== 0 ? ((currentVal - prevVal) / Math.abs(prevVal)) * 100 : null;
            } else {
              row[`_pct_${year}`] = null;
            }
          });

          return row;
        }),
    })),
  [categories, filteredMetrics, visibleYears, historicalCache, consensusCache, statsCache]);

  /* ═══════ Render ═══════ */
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 0, flex: 1 }}>
      {/* Tabs row with scroll controls */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--ds-border-primary)', marginBottom: 16 }}>
        <DSTabs size="sm" value={activeTab} onChange={setActiveTab}>
          {TAB_CATEGORIES.map(t => (
            <DSTab key={t.value} value={t.value}>{t.label}</DSTab>
          ))}
        </DSTabs>

        {needsScroll && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 2, paddingRight: 4 }}>
            <ScrollBtn onClick={goFirst} disabled={!canGoPrev}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M5.1 8.6L2.6 6.1L5.1 3.6M8.6 8.6L6.1 6.1L8.6 3.6" stroke="var(--ds-text-secondary)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </ScrollBtn>
            <ScrollBtn onClick={goPrev} disabled={!canGoPrev}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M7.6 8.6L4.6 5.6L7.6 2.6" stroke="var(--ds-text-secondary)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </ScrollBtn>
            <ScrollBtn onClick={goNext} disabled={!canGoNext}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M4.6 8.6L7.6 5.6L4.6 2.6" stroke="var(--ds-text-secondary)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </ScrollBtn>
            <ScrollBtn onClick={goLast} disabled={!canGoNext}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3.6 8.6L6.1 6.1L3.6 3.6M7.1 8.6L9.6 6.1L7.1 3.6" stroke="var(--ds-text-secondary)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </ScrollBtn>
          </div>
        )}
      </div>

      {/* DSTable */}
      <div style={{ paddingBottom: 16 }}>
        <DSTable columns={tableColumns} data={tableGroups} grouped rowKeyField="id" stickyFirstColumn />
      </div>

      {/* Footer */}
      <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', fontSize: 10, color: 'var(--ds-text-gray-dark)', borderTop: '1px solid var(--ds-border-primary)', paddingTop: 16 }}>
        <div>© Andromeda 2025. Авторские права защищены.</div>
        <div style={{ display: 'flex', gap: 24 }}>
          <a href="#" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 150ms ease' }}>support@euler.team</a>
          <a href="#" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 150ms ease' }}>Политика конфиденциальности</a>
          <a href="#" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 150ms ease' }}>Условия использования</a>
        </div>
      </div>

      {/* Detail modal */}
      {selectedCell && (
        <ConsensusDetailModal
          companyId={companyId}
          companyTicker={companyTicker}
          metricId={selectedCell.metricId}
          year={selectedCell.year}
          onClose={() => setSelectedCell(null)}
          onNavigate={(metricId, year) => setSelectedCell({ metricId, year })}
        />
      )}
    </div>
  );
}