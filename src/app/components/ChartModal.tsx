import React, { useMemo, useState, useCallback, useRef, useEffect } from 'react';
import { TrendingUp, TrendingDown, ZoomIn, ZoomOut, Maximize2, X } from 'lucide-react';
import { DSButton } from './ui/ds-button';
import { DSCheckbox } from './ui/ds-checkbox';
import { DSChartTooltip } from './ui/ds-tooltip';
import { DSModal } from './ui/ds-modal';
import type { Scenario } from '../App';
import cmStyles from './ChartModal.module.css';

/* ═══════════════════════════════════════════════════════════
   ChartModal — Full-screen metric chart with zoom/pan
   ═══════════════════════════════════════════════════════════
   Pure-SVG chart styled to match DSChartGrid tokens.
   • Solid horizontal grid lines, no vertical lines
   • Mouse-wheel zoom, drag-to-pan
   • Axes update on zoom/pan
*/

/* ── DS tokens ── */
const GRID_COLOR = 'var(--ds-border-primary)';
const AXIS_COLOR = 'var(--ds-text-gray-dark)';
const FONT_SIZE = 10;

/* ── Layout constants ── */
const Y_AXIS_W = 56;   // px – left margin for Y labels
const X_AXIS_H = 36;   // px – bottom margin for X labels
const PAD_TOP = 12;
const PAD_RIGHT = 16;

/* ── Types ── */
interface ChartModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  metricId: string;
  historicalData: number[];
  periods: string[];
  allScenarios: Scenario[];
  periodType: 'Year' | 'Half' | 'Quarter';
  baseYearlyData: number[];
}

// ── Scenario colors ──
const SCENARIO_COLORS: Record<string, string> = {
  'Estimate': '#5A8CFF',
  'Bull': '#1FC989',
  'Stress': '#EA3943',
  'Spot': '#F87D37',
};

const getScenarioColor = (name: string, idx: number): string => {
  if (SCENARIO_COLORS[name]) return SCENARIO_COLORS[name];
  const extra = ['#9A8CFF', '#45D3CE', '#F6C825', '#F99054', '#6854FF'];
  return extra[idx % extra.length];
};

// ── Driver impact ──
const DRIVER_IMPACT: Record<string, Record<string, number>> = {
  brent:           { revenue: 0.12, ebitda: 0.15, ebitda_margin: 0.08, net_income: 0.18, fcf: 0.20, fcf_yield: 0.15, sustaining_fcf: 0.18 },
  usd_rub:         { revenue: 0.10, ebitda: 0.08, net_income: 0.12, div_paid: 0.08, fcf: 0.14, net_debt: -0.06 },
  key_rate_pct:    { net_income: -0.10, fcf: -0.12, net_debt: 0.05, net_debt_ebitda: 0.08, div_yield: -0.06 },
  urals:           { revenue: 0.14, ebitda: 0.16, net_income: 0.15, fcf: 0.18 },
  commodity_basket:{ revenue: 0.08, ebitda: 0.10, ebitda_margin: 0.05 },
};

const calcImpact = (sv: Record<string, Record<string, string>>, metric: string, period: string): number => {
  let t = 0;
  Object.keys(DRIVER_IMPACT).forEach(d => {
    if (sv[d] && DRIVER_IMPACT[d][metric]) {
      const v = parseFloat(sv[d][period]?.replace(',', '.') || '0');
      if (v > 0) t += ((v - 70) / 70) * DRIVER_IMPACT[d][metric];
    }
  });
  return 1 + t;
};

// ── Nice ticks ──
function niceStep(range: number, count: number): number {
  const raw = range / count;
  const mag = Math.pow(10, Math.floor(Math.log10(raw)));
  const n = raw / mag;
  return (n <= 1.5 ? 1 : n <= 3 ? 2 : n <= 7 ? 5 : 10) * mag;
}

function buildYTicks(min: number, max: number, count = 6): number[] {
  if (max === min) { max = min + 1; }
  const step = niceStep(max - min, count);
  const start = Math.floor(min / step) * step;
  const ticks: number[] = [];
  for (let v = start; v <= max + step * 0.01; v += step) ticks.push(Math.round(v * 1e6) / 1e6);
  return ticks;
}

function fmtTick(v: number): string {
  const a = Math.abs(v);
  if (a >= 1) return Math.round(v).toLocaleString('ru-RU');
  if (Number.isInteger(v)) return String(v);
  return v.toFixed(1);
}

// ── SVG path (monotone cubic) ──
interface Pt { x: number; y: number }

function buildSmoothPath(pts: Pt[]): string {
  if (pts.length < 2) return '';
  let d = `M${pts[0].x},${pts[0].y}`;
  for (let i = 1; i < pts.length; i++) {
    const p = pts[i - 1], c = pts[i];
    const mx = (p.x + c.x) / 2;
    d += `C${mx},${p.y} ${mx},${c.y} ${c.x},${c.y}`;
  }
  return d;
}

// ═══════════════════════ Component ═══════════════════════

export function ChartModal({
  isOpen, onClose, title, metricId,
  historicalData, periods, allScenarios, periodType, baseYearlyData,
}: ChartModalProps) {
  const [selectedScenarios, setSelectedScenarios] = useState<Set<string>>(
    new Set(allScenarios.length > 0 ? [allScenarios[0].name] : []),
  );
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);

  // ── Zoom/pan state: visible range as fraction [0..1] ──
  const [viewStart, setViewStart] = useState(0);
  const [viewEnd, setViewEnd] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const dragRef = useRef<{ startX: number; origStart: number; origEnd: number } | null>(null);
  const [navDrag, setNavDrag] = useState<'left' | 'right' | 'body' | null>(null);
  const navDragRef = useRef<{ startX: number; origStart: number; origEnd: number } | null>(null);

  const plotRef = useRef<HTMLDivElement>(null);
  const [plotSize, setPlotSize] = useState({ w: 800, h: 400 });

  // Measure plot area
  useEffect(() => {
    if (!plotRef.current) return;
    const obs = new ResizeObserver(([e]) => {
      setPlotSize({ w: e.contentRect.width, h: e.contentRect.height });
    });
    obs.observe(plotRef.current);
    return () => obs.disconnect();
  }, [isOpen]);

  const toggleScenario = useCallback((name: string) => {
    setSelectedScenarios(prev => {
      const s = new Set(prev);
      s.has(name) ? s.delete(name) : s.add(name);
      return s;
    });
  }, []);

  // ── Build full data series ──
  const { seriesMap, fullValues } = useMemo(() => {
    const hc = historicalData.length;
    const lastH = historicalData[hc - 1];
    const lastB = baseYearlyData?.[baseYearlyData.length - 1] || lastH;

    const hist: (number | null)[] = periods.map((_, i) => (i < hc ? historicalData[i] : null));

    const scSeries: Record<string, (number | null)[]> = {};
    selectedScenarios.forEach(name => {
      const sc = allScenarios.find(s => s.name === name);
      if (!sc) return;
      scSeries[name] = periods.map((p, i) => {
        if (i === hc - 1) return lastH;
        if (i < hc) return null;
        if (sc.selectedPeriods?.includes(p)) {
          const div = p.includes('-H') ? 2 : p.includes('-Q') ? 4 : 1;
          return (lastB / div) * calcImpact(sc.values, metricId, p);
        }
        return null;
      });
    });

    const all: number[] = [];
    hist.forEach(v => { if (v != null) all.push(v); });
    Object.values(scSeries).forEach(a => a.forEach(v => { if (v != null) all.push(v); }));

    return { seriesMap: { Historical: hist, ...scSeries }, fullValues: all };
  }, [historicalData, periods, selectedScenarios, allScenarios, metricId, baseYearlyData]);

  // ── Visible indices ──
  const n = periods.length;
  const visStartIdx = Math.floor(viewStart * (n - 1));
  const visEndIdx = Math.ceil(viewEnd * (n - 1));
  const visCount = visEndIdx - visStartIdx + 1;

  // ── Visible data values (for Y domain) ──
  const visValues = useMemo(() => {
    const vals: number[] = [];
    Object.values(seriesMap).forEach(arr => {
      for (let i = visStartIdx; i <= visEndIdx; i++) {
        const v = arr[i];
        if (v != null) vals.push(v);
      }
    });
    return vals.length > 0 ? vals : [0];
  }, [seriesMap, visStartIdx, visEndIdx]);

  // ── Y ticks (recomputed on zoom) ──
  const { yTicks, yMin, yMax } = useMemo(() => {
    const mn = Math.min(...visValues);
    const mx = Math.max(...visValues);
    const pad = (mx - mn) * 0.1 || 1;
    const ticks = buildYTicks(mn - pad, mx + pad, 6);
    return { yTicks: ticks, yMin: ticks[0], yMax: ticks[ticks.length - 1] };
  }, [visValues]);

  // ── Coordinate mapping ──
  const plotW = plotSize.w - Y_AXIS_W - PAD_RIGHT;
  const plotH = plotSize.h - X_AXIS_H - PAD_TOP;

  const valToY = useCallback((v: number) => {
    return PAD_TOP + plotH - ((v - yMin) / (yMax - yMin || 1)) * plotH;
  }, [plotH, yMin, yMax]);

  const idxToX = useCallback((i: number) => {
    const frac = (i - visStartIdx) / Math.max(visCount - 1, 1);
    return Y_AXIS_W + frac * plotW;
  }, [visStartIdx, visCount, plotW]);

  // ── Stats ──
  const stats = useMemo(() => {
    const vals = fullValues.length > 0 ? fullValues : [0];
    const min = Math.min(...vals);
    const max = Math.max(...vals);
    const avg = vals.reduce((a, b) => a + b, 0) / vals.length;
    const latest = vals[vals.length - 1];
    const prev = vals.length >= 2 ? vals[vals.length - 2] : latest;
    const change = latest - prev;
    const pct = prev !== 0 ? (change / prev) * 100 : 0;
    return { min, max, avg, latest, change, changePercent: pct };
  }, [fullValues]);

  // ── Build SVG paths for visible range ──
  const paths = useMemo(() => {
    const result: { name: string; color: string; d: string; pts: Pt[] }[] = [];

    Object.entries(seriesMap).forEach(([name, vals]) => {
      const pts: Pt[] = [];
      for (let i = visStartIdx; i <= visEndIdx; i++) {
        const v = vals[i];
        if (v == null) continue;
        pts.push({ x: idxToX(i), y: valToY(v) });
      }
      if (pts.length < 2) {
        if (pts.length === 1) result.push({ name, color: '', d: '', pts });
        return;
      }
      const isHist = name === 'Historical';
      const idx = allScenarios.findIndex(s => s.name === name);
      const color = isHist ? 'var(--ds-gray-7)' : getScenarioColor(name, idx);
      result.push({ name, color, d: buildSmoothPath(pts), pts });
    });

    return result;
  }, [seriesMap, visStartIdx, visEndIdx, idxToX, valToY, allScenarios]);

  // Historical area path
  const histEntry = paths.find(p => p.name === 'Historical');
  const histArea = useMemo(() => {
    if (!histEntry?.d || histEntry.pts.length < 2) return '';
    const first = histEntry.pts[0];
    const last = histEntry.pts[histEntry.pts.length - 1];
    const bottomY = PAD_TOP + plotH;
    return `${histEntry.d}L${last.x},${bottomY}L${first.x},${bottomY}Z`;
  }, [histEntry, plotH]);

  // ── X labels for visible range ──
  const xLabels = useMemo(() => {
    const maxLabels = Math.floor(plotW / 50);
    const step = Math.max(1, Math.ceil(visCount / maxLabels));
    const labels: { text: string; x: number }[] = [];
    for (let i = visStartIdx; i <= visEndIdx; i++) {
      const rel = i - visStartIdx;
      if (rel % step === 0 || i === visEndIdx) {
        labels.push({ text: periods[i], x: idxToX(i) });
      }
    }
    return labels;
  }, [visStartIdx, visEndIdx, periods, idxToX, plotW, visCount]);

  // ── Mouse: hover ──
  const getIdxFromMouse = useCallback((clientX: number) => {
    const el = plotRef.current;
    if (!el) return null;
    const rect = el.getBoundingClientRect();
    const relX = clientX - rect.left - Y_AXIS_W;
    if (relX < 0 || relX > plotW) return null;
    const frac = relX / plotW;
    const idx = Math.round(visStartIdx + frac * (visCount - 1));
    return Math.max(visStartIdx, Math.min(visEndIdx, idx));
  }, [plotW, visStartIdx, visCount, visEndIdx]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (isDragging) return;
    setHoverIdx(getIdxFromMouse(e.clientX));
  }, [getIdxFromMouse, isDragging]);

  const handleMouseLeave = useCallback(() => {
    if (!isDragging) setHoverIdx(null);
  }, [isDragging]);

  // ── Mouse: wheel zoom ──
  const wheelHandler = useCallback((e: WheelEvent) => {
    e.preventDefault();
    const el = plotRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = (e.clientX - rect.left - Y_AXIS_W) / plotW;
    const anchor = viewStart + relX * (viewEnd - viewStart);

    const zoomFactor = e.deltaY > 0 ? 1.15 : 0.87;
    const range = viewEnd - viewStart;
    const newRange = Math.max(2 / n, Math.min(1, range * zoomFactor));

    let ns = anchor - (anchor - viewStart) * (newRange / range);
    let ne = ns + newRange;
    if (ns < 0) { ne -= ns; ns = 0; }
    if (ne > 1) { ns -= (ne - 1); ne = 1; }
    ns = Math.max(0, ns);

    setViewStart(ns);
    setViewEnd(ne);
  }, [viewStart, viewEnd, plotW, n]);

  // Attach wheel as non-passive so preventDefault works
  useEffect(() => {
    const el = plotRef.current;
    if (!el) return;
    el.addEventListener('wheel', wheelHandler, { passive: false });
    return () => el.removeEventListener('wheel', wheelHandler);
  }, [wheelHandler]);

  // ── Mouse: drag pan ──
  const handleDragStart = useCallback((e: React.MouseEvent) => {
    if (e.button !== 0) return;
    setIsDragging(true);
    dragRef.current = { startX: e.clientX, origStart: viewStart, origEnd: viewEnd };
    e.preventDefault();
  }, [viewStart, viewEnd]);

  useEffect(() => {
    if (!isDragging) return;
    const handleMove = (e: MouseEvent) => {
      const d = dragRef.current;
      if (!d) return;
      const dx = e.clientX - d.startX;
      const range = d.origEnd - d.origStart;
      const pxToFrac = range / plotW;
      let ns = d.origStart - dx * pxToFrac;
      let ne = ns + range;
      if (ns < 0) { ne -= ns; ns = 0; }
      if (ne > 1) { ns -= (ne - 1); ne = 1; }
      ns = Math.max(0, ns);
      ne = Math.min(1, ne);
      setViewStart(ns);
      setViewEnd(ne);
      setHoverIdx(null);
    };
    const handleUp = () => {
      setIsDragging(false);
      dragRef.current = null;
    };
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseup', handleUp);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseup', handleUp);
    };
  }, [isDragging, plotW]);

  // ── Navigation bar drag (handles + body) ──
  useEffect(() => {
    if (!navDrag) return;
    const handleMove = (e: MouseEvent) => {
      const d = navDragRef.current;
      const bar = document.getElementById('chart-nav-bar');
      if (!d || !bar) return;
      const rect = bar.getBoundingClientRect();
      const frac = (e.clientX - rect.left) / rect.width;
      const clamped = Math.max(0, Math.min(1, frac));

      if (navDrag === 'body') {
        const range = d.origEnd - d.origStart;
        const dx = clamped - (d.startX - rect.left) / rect.width;
        let ns = d.origStart + dx;
        let ne = ns + range;
        if (ns < 0) { ne -= ns; ns = 0; }
        if (ne > 1) { ns -= (ne - 1); ne = 1; }
        setViewStart(Math.max(0, ns));
        setViewEnd(Math.min(1, ne));
      } else if (navDrag === 'left') {
        setViewStart(Math.min(clamped, viewEnd - 2 / n));
      } else {
        setViewEnd(Math.max(clamped, viewStart + 2 / n));
      }
    };
    const handleUp = () => {
      setNavDrag(null);
      navDragRef.current = null;
    };
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseup', handleUp);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseup', handleUp);
    };
  }, [navDrag, viewStart, viewEnd, n]);

  // ── Tooltip at hover ──
  const tooltipData = useMemo(() => {
    if (hoverIdx === null) return null;
    const period = periods[hoverIdx];
    const entries: { name: string; color: string; value: number }[] = [];
    Object.entries(seriesMap).forEach(([name, vals]) => {
      const v = vals[hoverIdx];
      if (v == null) return;
      const isH = name === 'Historical';
      const idx = allScenarios.findIndex(s => s.name === name);
      entries.push({
        name: isH ? 'Исторические' : name,
        color: isH ? 'var(--ds-gray-7)' : getScenarioColor(name, idx),
        value: v,
      });
    });
    return { period, entries, isForecast: hoverIdx >= historicalData.length };
  }, [hoverIdx, seriesMap, periods, allScenarios, historicalData.length]);

  // ── Zoom controls ──
  const zoomIn = useCallback(() => {
    const mid = (viewStart + viewEnd) / 2;
    const range = (viewEnd - viewStart) * 0.7;
    const nr = Math.max(2 / n, range);
    setViewStart(Math.max(0, mid - nr / 2));
    setViewEnd(Math.min(1, mid + nr / 2));
  }, [viewStart, viewEnd, n]);

  const zoomOut = useCallback(() => {
    const mid = (viewStart + viewEnd) / 2;
    const range = Math.min(1, (viewEnd - viewStart) * 1.4);
    let ns = mid - range / 2;
    let ne = mid + range / 2;
    if (ns < 0) { ne -= ns; ns = 0; }
    if (ne > 1) { ns -= (ne - 1); ne = 1; }
    setViewStart(Math.max(0, ns));
    setViewEnd(Math.min(1, ne));
  }, [viewStart, viewEnd]);

  const resetZoom = useCallback(() => {
    setViewStart(0);
    setViewEnd(1);
  }, []);

  if (!isOpen) return null;

  const crossX = hoverIdx !== null ? idxToX(hoverIdx) : -1;
  const isZoomed = viewStart > 0.001 || viewEnd < 0.999;

  return (
    <DSModal open={isOpen} onClose={onClose} maxWidth="1152px" showCloseButton={false}
      customHeader={
        <div className={cmStyles.headerBar}>
          <div className={cmStyles.headerLeft}>
            <h2 className={cmStyles.headerTitle}>{title}</h2>
            <span className={cmStyles.headerPeriod}>
              {periods[0]} – {periods[periods.length - 1]}
            </span>
            <span className={cmStyles.headerChange}>
              {stats.change >= 0
                ? <TrendingUp size={12} className={cmStyles.iconGreen} />
                : <TrendingDown size={12} className={cmStyles.iconRed} />}
              <span className={stats.change >= 0 ? cmStyles.iconGreen : cmStyles.iconRed}>
                {stats.changePercent.toFixed(2)}%
              </span>
            </span>
          </div>
          <div className={cmStyles.headerActions}>
            <DSButton variant="ghost" size="sm" iconOnly onClick={zoomIn} title="Приблизить">
              <ZoomIn size={14} className={cmStyles.iconGray} />
            </DSButton>
            <DSButton variant="ghost" size="sm" iconOnly onClick={zoomOut} title="Отдалить">
              <ZoomOut size={14} className={cmStyles.iconGray} />
            </DSButton>
            {isZoomed && (
              <DSButton variant="ghost" size="sm" iconOnly onClick={resetZoom} title="Сбросить масштаб">
                <Maximize2 size={14} className={cmStyles.iconGray} />
              </DSButton>
            )}
            <div className={cmStyles.divider} />
            <DSButton variant="ghost" size="sm" iconOnly onClick={onClose}>
              <X size={14} className={cmStyles.iconGray} />
            </DSButton>
          </div>
        </div>
      }
    >
      {/* ── Body ── */}
      <div className={cmStyles.body}>

        {/* Sidebar */}
        <div className={cmStyles.sidebar}>
          <h3 className={cmStyles.sidebarTitle}>Сценарии</h3>
          <div className={cmStyles.sidebarList}>
            {allScenarios.map((sc, idx) => {
              const color = getScenarioColor(sc.name, idx);
              const sel = selectedScenarios.has(sc.name);
              return (
                <div
                  key={sc.id}
                  className={`${cmStyles.scenarioRow} ${sel ? cmStyles.scenarioRowSelected : ''}`}
                >
                  <DSCheckbox checked={sel} onChange={() => toggleScenario(sc.name)} />
                  <div className={cmStyles.scenarioInner}>
                    <span className={cmStyles.colorSwatch} style={{ backgroundColor: color }} />
                    <span className={cmStyles.scenarioLabel}>{sc.name}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Chart area */}
        <div className={cmStyles.chartCol}>
          <div
            ref={plotRef}
            className={`${cmStyles.plotArea} ${isDragging ? cmStyles.plotGrabbing : cmStyles.plotCrosshair}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseDown={handleDragStart}
          >
            <svg
              className={cmStyles.svgAbsolute}
              width={plotSize.w}
              height={plotSize.h}
              style={{ overflow: 'hidden' }}
            >
              {/* ── Horizontal grid lines (solid) ── */}
              {yTicks.map((tick, i) => {
                const y = valToY(tick);
                return (
                  <line
                    key={`gl-${i}`}
                    x1={Y_AXIS_W}
                    y1={y}
                    x2={plotSize.w - PAD_RIGHT}
                    y2={y}
                    stroke={GRID_COLOR}
                    strokeWidth={1}
                  />
                );
              })}

              {/* ── Y-axis labels ── */}
              {yTicks.map((tick, i) => (
                <text
                  key={`yl-${i}`}
                  x={Y_AXIS_W - 8}
                  y={valToY(tick)}
                  textAnchor="end"
                  dominantBaseline="middle"
                  fill={AXIS_COLOR}
                  fontSize={FONT_SIZE}
                  fontWeight={500}
                  fontFamily="Inter, sans-serif"
                >
                  {fmtTick(tick)}
                </text>
              ))}

              {/* ── Y-axis border ── */}
              <line
                x1={Y_AXIS_W}
                y1={PAD_TOP}
                x2={Y_AXIS_W}
                y2={PAD_TOP + plotH}
                stroke={GRID_COLOR}
                strokeWidth={1}
              />

              {/* ── X-axis labels ── */}
              {xLabels.map((lbl, i) => (
                <text
                  key={`xl-${i}`}
                  x={lbl.x}
                  y={PAD_TOP + plotH + 20}
                  textAnchor="middle"
                  fill={AXIS_COLOR}
                  fontSize={FONT_SIZE}
                  fontWeight={500}
                  fontFamily="Inter, sans-serif"
                >
                  {lbl.text}
                </text>
              ))}

              {/* ── Clip region for plot data ── */}
              <defs>
                <clipPath id="cm-plot-clip">
                  <rect x={Y_AXIS_W} y={PAD_TOP} width={plotW} height={plotH} />
                </clipPath>
                <linearGradient id="cm-hist-area" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--ds-gray-7)" stopOpacity={0.18} />
                  <stop offset="100%" stopColor="var(--ds-gray-7)" stopOpacity={0.02} />
                </linearGradient>
              </defs>

              <g clipPath="url(#cm-plot-clip)">
                {/* Historical area fill */}
                {histArea && (
                  <path d={histArea} fill="url(#cm-hist-area)" />
                )}

                {/* Data lines */}
                {paths.map(entry => {
                  if (!entry.d) return null;
                  const isH = entry.name === 'Historical';
                  return (
                    <path
                      key={entry.name}
                      d={entry.d}
                      stroke={isH ? 'var(--ds-gray-7)' : entry.color}
                      strokeWidth={isH ? 2 : 2.5}
                      fill="none"
                    />
                  );
                })}

                {/* Dots */}
                {paths.map(entry =>
                  entry.pts.map((pt, i) => {
                    const isH = entry.name === 'Historical';
                    return (
                      <circle
                        key={`${entry.name}-d-${i}`}
                        cx={pt.x}
                        cy={pt.y}
                        r={isH ? 3 : 4}
                        fill={isH ? 'var(--ds-gray-7)' : entry.color}
                        stroke="var(--ds-bg-secondary)"
                        strokeWidth={isH ? 0 : 2}
                      />
                    );
                  }),
                )}

                {/* Crosshair */}
                {crossX > 0 && (
                  <line
                    x1={crossX}
                    y1={PAD_TOP}
                    x2={crossX}
                    y2={PAD_TOP + plotH}
                    stroke={AXIS_COLOR}
                    strokeWidth={1}
                    strokeDasharray="4 3"
                    opacity={0.6}
                  />
                )}
              </g>
            </svg>

            {/* ── Tooltip (DSChartTooltip) ── */}
            <DSChartTooltip
              visible={!!tooltipData && hoverIdx !== null && crossX > 0}
              x={crossX}
              y={PAD_TOP}
              containerWidth={plotSize.w}
              title={tooltipData?.period}
              items={tooltipData?.entries.map(e => ({
                color: e.color,
                name: e.name,
                value: e.value.toLocaleString('ru-RU', { maximumFractionDigits: 2 }),
              }))}
            />
          </div>

          {/* ── Navigation / minimap bar ── */}
          <div className={cmStyles.navBar}>
            <span className={cmStyles.navLabelLeft}>
              {periods[visStartIdx]}
            </span>

            <div
              id="chart-nav-bar"
              className={cmStyles.navTrack}
            >
              {/* Full sparkline minimap */}
              {histEntry && histEntry.pts.length > 1 && (
                <svg className={cmStyles.svgAbsolute} viewBox={`0 0 ${n - 1} 100`} preserveAspectRatio="none">
                  {(() => {
                    const hist = seriesMap.Historical;
                    const all = hist.filter(v => v != null) as number[];
                    if (all.length < 2) return null;
                    const mn = Math.min(...all);
                    const mx = Math.max(...all);
                    const rng = mx - mn || 1;
                    const pts = hist.map((v, i) => (v != null ? `${i},${100 - ((v - mn) / rng) * 100}` : null)).filter(Boolean).join(' ');
                    return <polyline points={pts} fill="none" stroke="var(--ds-bg-secondary)" strokeWidth="1" vectorEffect="non-scaling-stroke" opacity={0.5} />;
                  })()}
                </svg>
              )}

              {/* Visible window */}
              <div
                className={cmStyles.navWindow}
                style={{ left: `${viewStart * 100}%`, right: `${(1 - viewEnd) * 100}%` }}
                onMouseDown={(e) => {
                  e.stopPropagation();
                  setNavDrag('body');
                  navDragRef.current = { startX: e.clientX, origStart: viewStart, origEnd: viewEnd };
                }}
              >
                {/* Left handle */}
                <div
                  className={cmStyles.navHandleLeft}
                  onMouseDown={(e) => {
                    e.stopPropagation();
                    setNavDrag('left');
                    navDragRef.current = { startX: e.clientX, origStart: viewStart, origEnd: viewEnd };
                  }}
                />
                {/* Right handle */}
                <div
                  className={cmStyles.navHandleRight}
                  onMouseDown={(e) => {
                    e.stopPropagation();
                    setNavDrag('right');
                    navDragRef.current = { startX: e.clientX, origStart: viewStart, origEnd: viewEnd };
                  }}
                />
              </div>
            </div>

            <span className={cmStyles.navLabel}>
              {periods[visEndIdx]}
            </span>
          </div>

          {/* ── Legend ── */}
          <div className={cmStyles.legendBar}>
            <div className={cmStyles.legendItem}>
              <span className={cmStyles.colorSwatch} style={{ backgroundColor: 'var(--ds-gray-7)' }} />
              <span className={cmStyles.legendText}>Исторические</span>
            </div>
            {Array.from(selectedScenarios).map((name, idx) => {
              const color = getScenarioColor(name, idx);
              return (
                <div key={name} className={cmStyles.legendItem}>
                  <span className={cmStyles.colorSwatch} style={{ backgroundColor: color }} />
                  <span className={cmStyles.legendText}>{name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </DSModal>
  );
}