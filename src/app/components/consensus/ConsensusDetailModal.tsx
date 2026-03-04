import React, { useState, useMemo, useRef, useCallback } from 'react';
import { DSSelect } from '../ui/ds-select';
import { DSChartTooltip } from '../ui/ds-tooltip';
import { DSModal } from '../ui/ds-modal';
import { DSButton } from '../ui/ds-button';
import { X } from 'lucide-react';
import {
  DSCustomDropdown,
  DSCustomDropdownTrigger,
  DSCustomDropdownPanel,
  DSCustomDropdownHeader,
  DSCustomDropdownContent,
  DSCustomDropdownItem,
} from '../ui/ds-custom-dropdown';
import cdStyles from './ConsensusDetailModal.module.css';
import {
  METRICS,
  FORECAST_YEARS,
  getConsensusStats,
  getConsensusTimeline,
  getPriceSeries,
  getCompanyName,
} from './ConsensusData';
import { getAnalystAvatar } from '../home/data/analyst-avatars';

/* ═══════════════════════════════════════════════════════
   ConsensusDetailModal — Detailed view with dual-axis
   chart: stock price (left, blue) + consensus step
   function (right, turquoise/orange).
   ═══════════════════════════════════════════════════════ */

const METRIC_FILTER_TABS = [
  { value: 'Все', label: 'Все' },
  { value: 'PnL', label: 'PnL' },
  { value: 'BS', label: 'BS' },
  { value: 'CF', label: 'CF' },
  { value: 'Mults & Yields', label: 'Mults & Yields' },
];

/* ─── Helpers ─── */
function formatStat(v: number, unit?: string): string {
  const abs = Math.abs(v);
  let formatted: string;
  if (abs >= 1000) formatted = Math.round(abs).toLocaleString('ru-RU');
  else if (abs >= 10) formatted = abs.toFixed(1).replace('.', ',');
  else formatted = abs.toFixed(2).replace('.', ',');
  const sign = v < 0 ? '-' : '';
  const suffix = unit ? ` ${unit}` : '';
  return `${sign}${formatted}${suffix}`;
}

function formatAxisValue(v: number): string {
  const abs = Math.abs(v);
  if (abs >= 1) return Math.round(v).toLocaleString('ru-RU');
  return v.toFixed(2).replace('.', ',');
}

function niceStep(range: number, targetSteps: number): number {
  const rough = range / targetSteps;
  const mag = Math.pow(10, Math.floor(Math.log10(rough)));
  const nice = rough / mag;
  let step: number;
  if (nice <= 1.5) step = 1;
  else if (nice <= 3) step = 2;
  else if (nice <= 7) step = 5;
  else step = 10;
  return step * mag;
}

const RU_MONTHS = ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'];

/* ─── Chart color tokens (DS) ─── */
const COLOR_PRICE    = 'var(--ds-blue-6)';      // #5A8CFF — Primary
const COLOR_FORECAST = 'var(--ds-turquoise-6)';  // #45D3CE — Consensus forecast
const COLOR_ACTUAL   = 'var(--ds-orange-6)';     // #F87D37 — Actual (fact) values

/* ─── Mock actual report data (LKOH Revenue) ─── */
interface ActualReport { date: Date; discountPct: number }
const ACTUAL_DATA: Record<string, Record<string, Record<number, ActualReport>>> = {
  lukoil: {
    revenue: {
      2026: { date: new Date(2025, 10, 15), discountPct: 0.04 }, // 15 Nov 2025, 4% ниже прогноза
    },
  },
};

function parsePriceDate(dateStr: string): Date | null {
  const parts = dateStr.split(' ');
  if (parts.length !== 3) return null;
  const d = parseInt(parts[0]);
  const mIdx = RU_MONTHS.indexOf(parts[1]);
  const y = parseInt(parts[2]);
  if (isNaN(d) || mIdx < 0 || isNaN(y)) return null;
  return new Date(y, mIdx, d);
}

/* ═══════════════════════════════════════════════════════
   Props
   ═══════════════════════════════════════════════════════ */
interface ConsensusDetailModalProps {
  companyId: string;
  companyTicker: string;
  metricId: string;
  year: number;
  onClose: () => void;
  onNavigate: (metricId: string, year: number) => void;
}

export function ConsensusDetailModal({
  companyId,
  companyTicker,
  metricId,
  year,
  onClose,
  onNavigate,
}: ConsensusDetailModalProps) {
  const [selectedMetric, setSelectedMetric] = useState(metricId);
  const [selectedYear, setSelectedYear] = useState(year);
  const [metricFilterTab, setMetricFilterTab] = useState('Все');
  const [isMetricDropdownOpen, setIsMetricDropdownOpen] = useState(false);
  const [metricSearch, setMetricSearch] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const [hoverX, setHoverX] = useState<number | null>(null); // viewBox X
  const [hoverPixelX, setHoverPixelX] = useState(0); // pixel X relative to chart container

  const currentMetric = useMemo(
    () => METRICS.find(m => m.id === selectedMetric) || METRICS[0],
    [selectedMetric],
  );

  /* ── Data ── */
  const stats = useMemo(
    () => getConsensusStats(companyId, selectedMetric, selectedYear),
    [companyId, selectedMetric, selectedYear],
  );
  const { events, timeline } = useMemo(
    () => getConsensusTimeline(companyId, selectedMetric, selectedYear),
    [companyId, selectedMetric, selectedYear],
  );
  const priceSeries = useMemo(() => getPriceSeries(companyId), [companyId]);

  /* ── Metric selector filter ── */
  const filteredMetrics = useMemo(() => {
    let list = METRICS;
    if (metricFilterTab !== 'Все') {
      list = list.filter(m => m.tabCategory === metricFilterTab || m.category === metricFilterTab);
    }
    if (metricSearch.trim()) {
      const q = metricSearch.toLowerCase().trim();
      list = list.filter(m => m.name.toLowerCase().includes(q));
    }
    return list;
  }, [metricFilterTab, metricSearch]);

  const handleMetricChange = useCallback((id: string) => {
    setSelectedMetric(id);
    setIsMetricDropdownOpen(false);
    onNavigate(id, selectedYear);
  }, [selectedYear, onNavigate]);

  const handleYearChange = useCallback((y: string) => {
    const yr = parseInt(y);
    setSelectedYear(yr);
    onNavigate(selectedMetric, yr);
  }, [selectedMetric, onNavigate]);

  /* ═════════ SVG Chart ═══════════ */
  const chartW = 680;
  const chartH = 260;
  const padL = 65;
  const padR = 65;
  const padT = 20;
  const padB = 35;
  const plotW = chartW - padL - padR;
  const plotH = chartH - padT - padB;

  /* Window: 13 months anchored to today's month — 1st of this month last year → last day of next month */
  const today = new Date();
  const windowStart = new Date(today.getFullYear() - 1, today.getMonth(), 1);
  const windowEndYear = today.getFullYear();
  const windowEndMonth = today.getMonth();
  const windowEnd = new Date(windowEndYear, windowEndMonth + 2, 0); // last day of next month (+1)
  const wStartMs = windowStart.getTime();
  const wEndMs = windowEnd.getTime();
  const wRange = wEndMs - wStartMs;

  /* Price data in window */
  const priceInWindow = useMemo(() => {
    return priceSeries
      .map(p => ({ date: parsePriceDate(p.date), price: p.price }))
      .filter(p => p.date && p.date >= windowStart && p.date <= windowEnd) as { date: Date; price: number }[];
  }, [priceSeries, wStartMs, wEndMs]);

  /* Axes */
  const priceMin = priceInWindow.length ? Math.min(...priceInWindow.map(p => p.price)) : 0;
  const priceMax = priceInWindow.length ? Math.max(...priceInWindow.map(p => p.price)) : 100;
  const pricePad = (priceMax - priceMin) * 0.1 || 1;
  const yPriceMin = priceMin - pricePad;
  const yPriceMax = priceMax + pricePad;

  const consValues = timeline.map(t => t.consensus);
  const consMin = consValues.length ? Math.min(...consValues) : 0;
  const consMax = consValues.length ? Math.max(...consValues) : 100;
  const consPad = (consMax - consMin) * 0.15 || 1;
  const yConsMin = consMin - consPad;
  const yConsMax = consMax + consPad;

  const toX = (d: Date) => padL + ((d.getTime() - wStartMs) / wRange) * plotW;
  const toYPrice = (v: number) => padT + plotH - ((v - yPriceMin) / (yPriceMax - yPriceMin)) * plotH;
  const toYCons = (v: number) => padT + plotH - ((v - yConsMin) / (yConsMax - yConsMin)) * plotH;

  /* Price polyline */
  const pricePath = priceInWindow.map((p, i) => {
    const x = toX(p.date);
    const y = toYPrice(p.price);
    return `${i === 0 ? 'M' : 'L'}${x},${y}`;
  }).join(' ');

  /* Consensus step-function path — clamped to chart window */
  const consPath = useMemo(() => {
    if (timeline.length === 0) return '';
    // Filter timeline to only points within the visible window,
    // but carry forward the last consensus value before windowStart
    let carryValue: number | null = null;
    const inWindow: { date: Date; consensus: number }[] = [];
    for (const pt of timeline) {
      if (pt.date < windowStart) {
        carryValue = pt.consensus;
      } else if (pt.date <= windowEnd) {
        inWindow.push(pt);
      }
      // points after windowEnd are skipped
    }
    // If there's a carry value, start from windowStart with that value
    if (carryValue !== null && (inWindow.length === 0 || inWindow[0].date > windowStart)) {
      inWindow.unshift({ date: windowStart, consensus: carryValue });
    }
    if (inWindow.length === 0) return '';

    const parts: string[] = [];
    inWindow.forEach((pt, i) => {
      const x = Math.max(padL, Math.min(chartW - padR, toX(pt.date)));
      const y = toYCons(pt.consensus);
      if (i === 0) {
        parts.push(`M${x},${y}`);
      } else {
        parts.push(`H${x}`);
        parts.push(`V${y}`);
      }
    });
    // Extend to the end of the window
    const lastPt = inWindow[inWindow.length - 1];
    const endX = Math.min(chartW - padR, toX(windowEnd));
    if (toX(lastPt.date) < endX) {
      parts.push(`H${endX}`);
    }
    return parts.join(' ');
  }, [timeline, wStartMs, wRange, yConsMin, yConsMax, padL, padR, chartW]);

  /* Y-axis ticks (left = price, right = consensus) */
  const priceStep = niceStep(yPriceMax - yPriceMin, 5);
  const priceTicks: number[] = [];
  for (let v = Math.ceil(yPriceMin / priceStep) * priceStep; v <= yPriceMax; v += priceStep) {
    priceTicks.push(v);
  }

  const consStep = niceStep(yConsMax - yConsMin, 5);
  const consTicks: number[] = [];
  for (let v = Math.ceil(yConsMin / consStep) * consStep; v <= yConsMax; v += consStep) {
    consTicks.push(v);
  }

  /* X-axis month labels */
  const xLabels: { x: number; label: string }[] = [];
  for (let m = 0; m <= 13; m++) {
    const d = new Date(windowStart.getFullYear(), windowStart.getMonth() + m, 1);
    if (d >= windowStart && d <= windowEnd) {
      xLabels.push({ x: toX(d), label: RU_MONTHS[d.getMonth()] });
    }
  }

  /* ─── Actual data detection ─── */
  const actualReport = ACTUAL_DATA[companyId]?.[selectedMetric]?.[selectedYear] ?? null;
  const hasActual = !!actualReport;
  const actualDateMs = actualReport ? actualReport.date.getTime() : 0;
  const actualInWindow = actualReport
    ? actualReport.date >= windowStart && actualReport.date <= windowEnd
    : false;

  /* Split consensus path into pre-actual (turquoise) and post-actual (orange straight line) */
  const { consPathForecast, consPathActual, actualX: actualMarkerX, actualY: actualMarkerY, actualValue } = useMemo(() => {
    if (timeline.length === 0 || !hasActual || !actualInWindow) {
      return { consPathForecast: consPath, consPathActual: '', actualX: 0, actualY: 0, actualValue: 0 };
    }

    const splitMs = actualDateMs;
    const aX = toX(actualReport!.date);

    // Find split index: first timeline point at or after the actual date
    let splitIdx = timeline.findIndex(pt => pt.date.getTime() >= splitMs);
    if (splitIdx < 0) splitIdx = timeline.length;

    // Derive actual value from consensus at split point — slightly below (discountPct)
    const consAtSplit = splitIdx > 0
      ? timeline[splitIdx - 1].consensus
      : timeline[0].consensus;
    const computedActual = consAtSplit * (1 - actualReport!.discountPct);
    const aY = toYCons(computedActual);

    // Pre-actual path (turquoise step-function): filter to window, up to the actual date
    const preParts: string[] = [];
    let carryValue: number | null = null;
    let started = false;
    for (let i = 0; i < splitIdx; i++) {
      const ptDate = timeline[i].date;
      if (ptDate < windowStart) {
        carryValue = timeline[i].consensus;
        continue;
      }
      if (ptDate > windowEnd) break;
      if (!started) {
        // Insert carry-forward from before window if needed
        if (carryValue !== null) {
          preParts.push(`M${padL},${toYCons(carryValue)}`);
          preParts.push(`H${toX(ptDate)}`);
          preParts.push(`V${toYCons(timeline[i].consensus)}`);
        } else {
          preParts.push(`M${toX(ptDate)},${toYCons(timeline[i].consensus)}`);
        }
        started = true;
      } else {
        preParts.push(`H${toX(ptDate)}`);
        preParts.push(`V${toYCons(timeline[i].consensus)}`);
      }
    }
    // If no timeline points were in window but we have a carry value
    if (!started && carryValue !== null) {
      preParts.push(`M${padL},${toYCons(carryValue)}`);
    }
    // Extend horizontal to the actual date X
    if (preParts.length > 0) {
      preParts.push(`H${aX}`);
    }

    // Post-actual path (orange straight line): from actual point to end of window
    const postParts: string[] = [];
    postParts.push(`M${aX},${aY}`);
    const endX = Math.min(chartW - padR, toX(windowEnd));
    postParts.push(`L${endX},${aY}`);

    return {
      consPathForecast: preParts.join(' '),
      consPathActual: postParts.join(' '),
      actualX: aX,
      actualY: aY,
      actualValue: computedActual,
    };
  }, [timeline, hasActual, actualInWindow, actualDateMs, consPath, wStartMs, wRange, yConsMin, yConsMax]);

  /* ─── Hover tooltip data ─── */
  const hoverTooltipData = useMemo(() => {
    if (hoverX === null || hoverX < padL || hoverX > chartW - padR) return null;
    // Convert viewBox X to date
    const frac = (hoverX - padL) / plotW;
    const dateMs = wStartMs + frac * wRange;
    const hoverDate = new Date(dateMs);
    const dateLabel = `${hoverDate.getDate()} ${RU_MONTHS[hoverDate.getMonth()]} ${hoverDate.getFullYear()}`;

    // Find closest price
    let closestPrice: number | null = null;
    let closestPriceDist = Infinity;
    for (const p of priceInWindow) {
      const dist = Math.abs(p.date.getTime() - dateMs);
      if (dist < closestPriceDist) {
        closestPriceDist = dist;
        closestPrice = p.price;
      }
    }

    // Find consensus value (step function — last value before hoverDate)
    let consValue: number | null = null;
    for (let i = timeline.length - 1; i >= 0; i--) {
      if (timeline[i].date.getTime() <= dateMs) {
        consValue = timeline[i].consensus;
        break;
      }
    }

    // Check if after actual report (show fact value instead)
    let factValue: number | null = null;
    if (hasActual && actualInWindow && dateMs >= actualDateMs) {
      factValue = actualValue;
    }

    return { dateLabel, closestPrice, consValue, factValue, viewBoxX: hoverX };
  }, [hoverX, padL, chartW, padR, plotW, wStartMs, wRange, priceInWindow, timeline, hasActual, actualInWindow, actualDateMs, actualValue]);

  return (
    <DSModal
      open
      onClose={onClose}
      maxWidth="780px"
      showCloseButton={false}
      customHeader={
        <div className={cdStyles.headerBar}>
          <div className={cdStyles.headerLeft}>
            <h2 className={cdStyles.headerTitle}>
              {getCompanyName(companyId)}
            </h2>
            <span className={cdStyles.headerSubtitle}>Консенсус-прогноз</span>
          </div>
          <DSButton variant="ghost" size="sm" iconOnly onClick={onClose}>
            <X size={14} className={cdStyles.iconGray6} />
          </DSButton>
        </div>
      }
    >
      {/* ── Controls bar ── */}
      <div className={cdStyles.controlsBar}>
        {/* Metric select with segment filter — uses DSCustomDropdown */}
        <div className={cdStyles.metricSelect}>
          <DSCustomDropdown isOpen={isMetricDropdownOpen} onOpenChange={setIsMetricDropdownOpen}>
            <DSCustomDropdownTrigger placeholder="Выберите показатель">
              {currentMetric.name}
            </DSCustomDropdownTrigger>
            <DSCustomDropdownPanel minWidth={340}>
              <DSCustomDropdownHeader
                title="Выберите показатель"
                showSearch
                searchValue={metricSearch}
                onSearchChange={setMetricSearch}
                segments={METRIC_FILTER_TABS}
                segmentValue={metricFilterTab}
                onSegmentChange={setMetricFilterTab}
              />
              <DSCustomDropdownContent maxHeight={240}>
                <div className={cdStyles.dropdownList}>
                  {filteredMetrics.map(m => (
                    <DSCustomDropdownItem
                      key={m.id}
                      selected={m.id === selectedMetric}
                      onClick={() => handleMetricChange(m.id)}
                    >
                      {m.name}
                    </DSCustomDropdownItem>
                  ))}
                  {filteredMetrics.length === 0 && (
                    <div className={cdStyles.emptyText}>Ничего не найдено</div>
                  )}
                </div>
              </DSCustomDropdownContent>
            </DSCustomDropdownPanel>
          </DSCustomDropdown>
        </div>

        {/* Year selector */}
        <div className={cdStyles.yearSelect}>
          <DSSelect
            size="xs"
            value={String(selectedYear)}
            onChange={handleYearChange}
            options={FORECAST_YEARS.map(y => ({ value: String(y), label: String(y) }))}
          />
        </div>

        {/* Stats bar */}
        {stats && (
          <div className={cdStyles.statsBar}>
            <div className={cdStyles.statItem}>
              <span className={cdStyles.statLabel}>Среднее</span>
              <span className={cdStyles.statValuePrimary} style={{ color: 'var(--ds-table-forecast-text, #45D3CE)' }}>
                {formatStat(stats.avg, currentMetric.unit)}
              </span>
            </div>
            <div className={cdStyles.statItem}>
              <span className={cdStyles.statLabel}>Медиана</span>
              <span className={cdStyles.statValuePrimary}>{formatStat(stats.median, currentMetric.unit)}</span>
            </div>
            <div className={cdStyles.statItem}>
              <span className={cdStyles.statLabel}>Max</span>
              <span className={cdStyles.statValueGreen}>{formatStat(stats.max, currentMetric.unit)}</span>
            </div>
            <div className={cdStyles.statItem}>
              <span className={cdStyles.statLabel}>Min</span>
              <span className={cdStyles.statValueRed}>{formatStat(stats.min, currentMetric.unit)}</span>
            </div>
          </div>
        )}
      </div>

      {/* ── Dual-axis chart ── */}
      <div className={cdStyles.chartArea} ref={chartContainerRef}>
        <svg
          ref={svgRef}
          viewBox={`0 0 ${chartW} ${chartH}`}
          className={cdStyles.svgFull}
          style={{ minHeight: 200 }}
          onMouseMove={e => {
            const rect = svgRef.current?.getBoundingClientRect();
            const containerRect = chartContainerRef.current?.getBoundingClientRect();
            if (rect) {
              const x = e.clientX - rect.left;
              const viewBoxX = (x / rect.width) * chartW;
              setHoverX(viewBoxX);
              // pixel X relative to the chart container (for tooltip positioning)
              setHoverPixelX(containerRect ? e.clientX - containerRect.left : x);
            }
          }}
          onMouseLeave={() => setHoverX(null)}
        >
          {/* Clip definitions */}
          {(() => {
            const todayMs = today.getTime();
            const todayInWindow = todayMs >= wStartMs && todayMs <= wEndMs;
            const todayX = todayInWindow ? toX(today) : null;
            return (
              <>
                <defs>
                  <clipPath id="clip-plot-area">
                    <rect x={padL} y={padT} width={plotW} height={plotH} />
                  </clipPath>
                  {todayX !== null && (
                    <clipPath id="clip-before-today">
                      <rect x={padL} y={0} width={todayX - padL} height={chartH} />
                    </clipPath>
                  )}
                </defs>

                {/* Future zone shading (after today) */}
                {todayX !== null && (
                  <rect
                    x={todayX} y={padT} width={chartW - padR - todayX} height={plotH}
                    fill="var(--ds-bg-secondary)" opacity="0.45"
                  />
                )}

                {/* Grid lines */}
                {priceTicks.map(v => {
                  const y = toYPrice(v);
                  return (
                    <line key={`pg-${v}`} x1={padL} x2={chartW - padR} y1={y} y2={y}
                      stroke="var(--ds-border-primary)" strokeWidth="0.5" strokeDasharray="3 3" />
                  );
                })}

                {/* Price line (blue) — clipped to today */}
                {pricePath && (
                  <g clipPath={todayX !== null ? "url(#clip-before-today)" : undefined}>
                    <path d={pricePath} fill="none" stroke={COLOR_PRICE} strokeWidth="1.5" strokeLinejoin="round" />
                  </g>
                )}

                {/* Consensus step-function (turquoise) */}
                {consPathForecast && (
                  <path d={consPathForecast} fill="none" stroke={COLOR_FORECAST} strokeWidth="2" strokeLinejoin="round" />
                )}

                {/* Consensus step-function (orange) */}
                {consPathActual && (
                  <path d={consPathActual} fill="none" stroke={COLOR_ACTUAL} strokeWidth="2" strokeLinejoin="round" />
                )}

                {/* Actual data marker dot */}
                {hasActual && actualInWindow && actualMarkerX > 0 && (
                  <>
                    <circle cx={actualMarkerX} cy={actualMarkerY} r="4" fill={COLOR_ACTUAL} />
                    <circle cx={actualMarkerX} cy={actualMarkerY} r="6" fill="none" stroke={COLOR_ACTUAL} strokeWidth="1" opacity="0.4" />
                    <line
                      x1={actualMarkerX} x2={actualMarkerX} y1={padT} y2={padT + plotH}
                      stroke={COLOR_ACTUAL} strokeWidth="0.7" strokeDasharray="3 3" opacity="0.5"
                    />
                    <text
                      x={actualMarkerX + 6} y={actualMarkerY - 8} textAnchor="start"
                      fill={COLOR_ACTUAL} fontSize="9" fontFamily="Inter, sans-serif"
                    >
                      Факт: {formatAxisValue(actualValue)}
                    </text>
                  </>
                )}

                {/* Today vertical line */}
                {todayX !== null && (
                  <>
                    <line
                      x1={todayX} x2={todayX} y1={padT} y2={padT + plotH}
                      stroke="var(--ds-text-gray-dark)" strokeWidth="1" strokeDasharray="4 3"
                    />
                    <text
                      x={todayX} y={padT - 2} textAnchor="middle"
                      fill="var(--ds-text-gray-dark)" fontSize="9" fontFamily="Inter, sans-serif"
                    >
                      Сегодня
                    </text>
                  </>
                )}

                {/* Left Y-axis labels (price) */}
                {priceTicks.map(v => (
                  <text key={`pl-${v}`} x={padL - 6} y={toYPrice(v)} textAnchor="end"
                    dominantBaseline="middle" fill={COLOR_PRICE} fontSize="10"
                    fontFamily="Inter, sans-serif">
                    {formatAxisValue(v)}
                  </text>
                ))}

                {/* Right Y-axis labels (consensus) */}
                {consTicks.map(v => (
                  <text key={`cl-${v}`} x={chartW - padR + 6} y={toYCons(v)} textAnchor="start"
                    dominantBaseline="middle" fill={COLOR_FORECAST} fontSize="10"
                    fontFamily="Inter, sans-serif">
                    {formatAxisValue(v)}
                  </text>
                ))}

                {/* X-axis labels */}
                {xLabels.map((l, i) => (
                  <text key={i} x={l.x} y={chartH - 8} textAnchor="middle"
                    fill="var(--ds-text-gray-dark)" fontSize="10" fontFamily="Inter, sans-serif">
                    {l.label}
                  </text>
                ))}

                {/* Axis labels */}
                <text x={4} y={padT - 6} fill={COLOR_PRICE} fontSize="9" fontFamily="Inter, sans-serif">
                  Цена
                </text>
                <text x={chartW - 4} y={padT - 6} textAnchor="end" fill={COLOR_FORECAST} fontSize="9"
                  fontFamily="Inter, sans-serif">
                  Консенсус
                </text>

                {/* Hover crosshair */}
                {hoverX !== null && hoverX >= padL && hoverX <= chartW - padR && (
                  <line
                    x1={hoverX} x2={hoverX} y1={padT} y2={padT + plotH}
                    stroke="var(--ds-text-gray-dark)" strokeWidth="0.7" strokeDasharray="3 2" opacity="0.6"
                  />
                )}
              </>
            );
          })()}
        </svg>

        {/* ── Hover tooltip (DSChartTooltip) ── */}
        <DSChartTooltip
          visible={!!hoverTooltipData}
          x={hoverPixelX}
          y={8}
          containerWidth={chartContainerRef.current?.clientWidth || 700}
          title={hoverTooltipData?.dateLabel}
          items={hoverTooltipData ? [
            ...(hoverTooltipData.closestPrice != null ? [{
              color: 'var(--ds-blue-6)',
              shape: 'line' as const,
              name: 'Цена',
              value: formatAxisValue(hoverTooltipData.closestPrice),
            }] : []),
            ...(hoverTooltipData.consValue != null ? [{
              color: 'var(--ds-table-forecast-text, #45D3CE)',
              shape: 'line' as const,
              name: 'Прогноз',
              value: formatAxisValue(hoverTooltipData.consValue),
            }] : []),
            ...(hoverTooltipData.factValue != null ? [{
              color: 'var(--ds-orange-6)',
              shape: 'line' as const,
              name: 'Факт',
              value: formatAxisValue(hoverTooltipData.factValue),
            }] : []),
          ] : undefined}
        />

        {/* ── Chart legend ── */}
        <div className={cdStyles.legend}>
          <div className={cdStyles.legendItem}>
            <span className={cdStyles.legendSwatch} style={{ backgroundColor: 'var(--ds-blue-6)' }} />
            <span className={cdStyles.legendLabel}>Цена</span>
          </div>
          <div className={cdStyles.legendItem}>
            <span className={cdStyles.legendSwatch} style={{ backgroundColor: 'var(--ds-turquoise-6)' }} />
            <span className={cdStyles.legendLabel}>Прогноз</span>
          </div>
          <div className={cdStyles.legendItem}>
            <span className={cdStyles.legendSwatch} style={{ backgroundColor: 'var(--ds-orange-6)' }} />
            <span className={cdStyles.legendLabel}>Факт</span>
          </div>
        </div>
      </div>

      {/* ── Events table ── */}
      <div className={cdStyles.eventsSection}>
        <h3 className={cdStyles.eventsTitle}>Ревизии аналитиков ({events.length})</h3>
        <div className={cdStyles.eventsWrapper}>
          <table className={cdStyles.eventsTable}>
            <thead className={cdStyles.eventsHead}>
              <tr className={cdStyles.eventsHeadRow}>
                <th className={cdStyles.thLeft}>Дата</th>
                <th className={cdStyles.thLeft}>Источник</th>
                <th className={cdStyles.thLeft}>Аналитик</th>
                <th className={cdStyles.thRight}>Значение</th>
              </tr>
            </thead>
            <tbody>
              {events.map((ev, i) => (
                <tr key={`${ev.sourceId}-${i}`} className={cdStyles.eventRow}>
                  <td className={cdStyles.tdSubtle}>{ev.dateStr}</td>
                  <td className={cdStyles.tdPrimary}>{ev.sourceName}</td>
                  <td className={cdStyles.tdSubtle}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                      {ev.avatarId && getAnalystAvatar(ev.avatarId) ? (
                        <img
                          src={getAnalystAvatar(ev.avatarId)!.src}
                          alt={ev.analyst}
                          style={{ width: 20, height: 20, borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }}
                        />
                      ) : null}
                      {ev.analyst}
                    </span>
                  </td>
                  <td className={cdStyles.tdValue} style={{ color: 'var(--ds-table-forecast-text, #45D3CE)' }}>
                    {formatStat(ev.value, currentMetric.unit)}
                  </td>
                </tr>
              ))}
              {events.length === 0 && (
                <tr>
                  <td colSpan={4} className={cdStyles.tdEmpty}>Нет данных</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </DSModal>
  );
}