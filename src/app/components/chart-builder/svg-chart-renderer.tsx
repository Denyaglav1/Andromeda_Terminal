import React, { useState, useCallback, useMemo } from 'react';
import type { ChartState } from './types';
import { DS } from './types';
import { fmtNum, parseNum, niceScale, computeStat, resolveVerticalX, estimateTextWidth, isDateColumn } from './helpers';
import { formatXLabelForDisplay, periodToTime, periodDuration } from './market-data';
import { DSTooltipContent } from '../ui/ds-tooltip';

const GAP = 16;

interface ChartRenderProps {
  state: ChartState;
  width: number;
  height: number;
  interactive?: boolean;
  className?: string;
}

export function SVGChartRenderer({ state, width, height, interactive = true, className }: ChartRenderProps) {
  const [tooltip, setTooltip] = useState<{ x: number; y: number; items: { color: string; name: string; value: string }[]; label: string } | null>(null);

  const hasTitle = !!state.title;
  const hasLegendTop = state.legendPosition === 'top';
  const hasLegendBottom = state.legendPosition === 'bottom';
  const hasY2 = state.series.some(s => s.visible && s.yAxis === 'y2');

  const y1TickMaxChars = 7;
  const y1TickLabelW = y1TickMaxChars * state.y1.fontSize * 0.58;
  const y1LabelSpace = state.y1.label ? state.y1.labelFontSize + 4 : 0;

  const y2TickMaxChars = 7;
  const y2TickLabelW = hasY2 ? y2TickMaxChars * state.y2.fontSize * 0.58 : 0;
  const y2LabelSpace = hasY2 && state.y2.label ? state.y2.labelFontSize + 4 : 0;

  const xRot = state.xAxis.rotation || 0;
  const xTickMaxChars = Math.max(...state.rows.map(r => (r[state.xColumnIndex] || '').length), 3);
  const xTickLabelH = xRot === 0 ? state.xAxis.fontSize + 4 : xRot === -90 ? xTickMaxChars * state.xAxis.fontSize * 0.58 : xTickMaxChars * state.xAxis.fontSize * 0.42;
  const xLabelSpace = state.xAxis.label ? state.xAxis.labelFontSize + 4 : 0;

  const tfs = state.titleFontSize || 14;
  const lfs = state.legendFontSize || 10;

  const padding = {
    top: GAP + (hasTitle ? tfs + GAP : 0) + (hasLegendTop ? lfs + 2 + GAP : 0),
    right: GAP + y2TickLabelW + 8 + y2LabelSpace,
    bottom: GAP + xTickLabelH + 6 + xLabelSpace + (hasLegendBottom ? lfs + 2 + GAP : 0),
    left: GAP + y1LabelSpace + y1TickLabelW + 8,
  };

  padding.left = Math.max(padding.left, 50);
  padding.right = Math.max(padding.right, 20);
  padding.bottom = Math.max(padding.bottom, 40);

  const plotW = Math.max(width - padding.left - padding.right, 40);
  const plotH = Math.max(height - padding.top - padding.bottom, 40);

  const titleY = GAP;
  const legendTopY = GAP + (hasTitle ? tfs + GAP : 0) + lfs / 2;
  const plotTop = padding.top;
  const xTickY = plotTop + plotH + xTickLabelH;
  const legendBottomY = height - GAP + 4;

  const xLabels = state.rows.map(r => {
    const raw = r[state.xColumnIndex] || '';
    return formatXLabelForDisplay(raw, state.xAxis.displayMode || 'auto');
  });
  const seriesData = useMemo(() => {
    return state.series.filter(s => s.visible).map(s => {
      const colIdx = state.headers.indexOf(s.name);
      const realIdx = colIdx >= 0 ? colIdx : -1;
      const values = state.rows.map(r => realIdx >= 0 ? parseNum(r[realIdx]) : null);
      return { ...s, values, colIdx: realIdx };
    });
  }, [state.series, state.headers, state.rows]);

  const getValues = (axis: 'y1' | 'y2') =>
    seriesData.filter(s => s.yAxis === axis).flatMap(s => s.values.filter((v): v is number => v !== null));

  const y1Vals = getValues('y1');
  const y2Vals = getValues('y2');

  const y1Ticks = niceScale(
    state.y1.min !== 'auto' ? Number(state.y1.min) : (y1Vals.length ? Math.min(0, Math.min(...y1Vals)) : 0),
    state.y1.max !== 'auto' ? Number(state.y1.max) : (y1Vals.length ? Math.max(...y1Vals) * 1.1 : 100),
    5,
  );
  const y1Domain: [number, number] = [y1Ticks[0], y1Ticks[y1Ticks.length - 1]];

  const y2Ticks = niceScale(
    state.y2.min !== 'auto' ? Number(state.y2.min) : (y2Vals.length ? Math.min(0, Math.min(...y2Vals)) : 0),
    state.y2.max !== 'auto' ? Number(state.y2.max) : (y2Vals.length ? Math.max(...y2Vals) * 1.1 : 100),
    5,
  );
  const y2Domain: [number, number] = [y2Ticks[0], y2Ticks[y2Ticks.length - 1]];

  const scaleY = (v: number, axis: 'y1' | 'y2') => {
    const [dMin, dMax] = axis === 'y1' ? y1Domain : y2Domain;
    return plotTop + plotH - ((v - dMin) / (dMax - dMin || 1)) * plotH;
  };

  const n = xLabels.length;

  /* ═══════════════════════════════════════════════════════
     Time-based X-axis positioning
     When all period keys parse as time values, use a
     continuous scale so that years/quarters/months are
     evenly distributed proportional to real time.
     ═══════════════════════════════════════════════════════ */
  const rawKeys = state.rows.map(r => r[state.xColumnIndex] || '');
  const timeValuesRaw = rawKeys.map(k => periodToTime(k));
  const isTimeBased = n > 0 && timeValuesRaw.every((t): t is number => t !== null);

  // Durations per data row (for bar widths)
  const durations = rawKeys.map(k => periodDuration(k));

  // Fallback equal-band positioning
  const fallbackBandW = n > 0 ? plotW / n : plotW;

  // Time-domain range with half-period padding on each end
  const timeValues = isTimeBased ? (timeValuesRaw as number[]) : [];
  const tMin = isTimeBased ? Math.min(...timeValues) : 0;
  const tMax = isTimeBased ? Math.max(...timeValues) : 1;
  const maxDur = isTimeBased ? Math.max(...durations) : 1;
  const tPadL = isTimeBased ? durations[0] * 0.5 : 0;
  const tPadR = isTimeBased ? durations[n - 1] * 0.5 : 0;
  const tMinAdj = tMin - tPadL;
  const tMaxAdj = tMax + tPadR;
  const tRange = tMaxAdj - tMinAdj || 1;

  /** X-center position for data row index */
  const xCenter = (i: number): number => {
    if (isTimeBased) {
      return padding.left + ((timeValues[i] - tMinAdj) / tRange) * plotW;
    }
    return padding.left + fallbackBandW * i + fallbackBandW / 2;
  };

  /** Bar group width for data row index (proportional to period duration) */
  const barGroupWFor = (i: number): number => {
    if (isTimeBased) {
      return (durations[i] / tRange) * plotW * 0.8;
    }
    return fallbackBandW * 0.7;
  };

  // Keep backwards-compatible constants for non-bar usage
  const bandW = fallbackBandW;

  /* ─── Deduplicated X-axis tick labels ───
     When displayMode collapses sub-periods into one label (e.g. "years"
     mode turns Q1..Q4 into "2022"), we must render only ONE label per
     unique text, positioned at the CORRECT center of the full period
     (e.g. mid-year 2022.5), not at the first sub-period position.      */
  const xScaleTime = (t: number) => padding.left + ((t - tMinAdj) / tRange) * plotW;

  /** Convert a rendered display label back to a continuous time value */
  const labelToTime = (label: string): number | null => {
    // "2022" or "2025F"
    if (/^\d{4}F?$/.test(label)) return parseInt(label) + 0.5;
    // "Q1 2022" — quarters display format
    const qm = label.match(/^Q(\d)\s+(\d{4})$/);
    if (qm) return parseInt(qm[2]) + (parseInt(qm[1]) - 0.5) / 4;
    // "H1 2022" — half-year display format
    const hm = label.match(/^H(\d)\s+(\d{4})$/);
    if (hm) return parseInt(hm[2]) + (parseInt(hm[1]) - 0.5) / 2;
    // Russian month abbreviation + year: "Янв 2022", "Фев 2022", ...
    const MONTHS_RU = ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'];
    const mm = label.match(/^(\S+)\s+(\d{4})$/);
    if (mm) {
      const mi = MONTHS_RU.indexOf(mm[1]);
      if (mi >= 0) return parseInt(mm[2]) + (mi + 0.5) / 12;
    }
    return null;
  };

  /** Unique ticks: deduplicated by label text, positioned correctly */
  const uniqueXTicks: { label: string; x: number }[] = (() => {
    const seen = new Set<string>();
    const ticks: { label: string; x: number }[] = [];
    xLabels.forEach((label, i) => {
      if (!label || seen.has(label)) return;
      seen.add(label);
      if (isTimeBased) {
        const t = labelToTime(label);
        if (t !== null) {
          ticks.push({ label, x: xScaleTime(t) });
          return;
        }
      }
      // Fallback: use the data row's own x position
      ticks.push({ label, x: xCenter(i) });
    });
    return ticks;
  })();

  const zeroY1 = scaleY(0, 'y1');

  /* ── Series classification (extended for all chart types) ── */
  const regularBarSeries = seriesData.filter(s => s.type === 'bar');
  const stackedBarSeries = seriesData.filter(s => s.type === 'stacked-bar' || s.type === 'stacked-bar-norm');
  const barSeries = [...regularBarSeries]; // only regular bars get side-by-side layout
  const lineSeries = seriesData.filter(s => s.type === 'line' || s.type === 'combo' || s.type === 'sparkline');
  const areaSeries = seriesData.filter(s => s.type === 'area' || s.type === 'area-norm');
  const scatterSeries = seriesData.filter(s => s.type === 'scatter');
  const isPie = seriesData.length > 0 && (seriesData[0].type === 'pie' || seriesData[0].type === 'donut');

  /* ── Special layout detection ── */
  const isRadar = seriesData.some(s => s.type === 'radar');
  const isWaterfall = seriesData.some(s => s.type === 'waterfall');
  const isFunnel = seriesData.some(s => s.type === 'funnel');
  const isTreemap = seriesData.some(s => s.type === 'treemap');
  const isGauge = seriesData.some(s => s.type === 'gauge');
  const isHeatmap = seriesData.some(s => s.type === 'heatmap');
  const isHorizontal = seriesData.some(s => s.type === 'bar-h' || s.type === 'stacked-bar-h');
  const isCandlestick = seriesData.some(s => s.type === 'candlestick');
  const isSpecialLayout = isRadar || isFunnel || isTreemap || isGauge || isHeatmap;
  const isNormalized = seriesData.some(s => s.type === 'area-norm' || s.type === 'stacked-bar-norm');

  const barCount = barSeries.length + (stackedBarSeries.length > 0 ? 1 : 0);

  const legendItems = seriesData.map(s => ({ color: s.color, name: s.name, type: s.type }));

  // Use unique clip IDs to prevent conflicts when multiple charts are on the same page
  const clipId = useMemo(() => `plot-clip-${Math.random().toString(36).slice(2, 8)}`, []);

  const renderPieDonut = () => {
    const s = seriesData[0];
    if (!s) return null;
    const values = s.values.filter((v): v is number => v !== null && v > 0);
    const labels = xLabels.slice(0, values.length);
    const total = values.reduce((a, b) => a + b, 0);
    if (total === 0) return null;
    const cx = width / 2;
    const cy = plotTop + plotH / 2;
    const r = Math.min(plotW, plotH) / 2 - 30;
    const innerR = s.type === 'donut' ? r * 0.55 : 0;
    let angle = -Math.PI / 2;
    const arcs = values.map((v, i) => {
      const sweep = (v / total) * 2 * Math.PI;
      const startAngle = angle;
      const endAngle = angle + sweep;
      angle = endAngle;
      const x1 = cx + r * Math.cos(startAngle), y1p = cy + r * Math.sin(startAngle);
      const x2 = cx + r * Math.cos(endAngle), y2p = cy + r * Math.sin(endAngle);
      const ix1 = cx + innerR * Math.cos(startAngle), iy1 = cy + innerR * Math.sin(startAngle);
      const ix2 = cx + innerR * Math.cos(endAngle), iy2 = cy + innerR * Math.sin(endAngle);
      const large = sweep > Math.PI ? 1 : 0;
      const d = innerR > 0
        ? `M${ix1},${iy1} L${x1},${y1p} A${r},${r} 0 ${large} 1 ${x2},${y2p} L${ix2},${iy2} A${innerR},${innerR} 0 ${large} 0 ${ix1},${iy1}Z`
        : `M${cx},${cy} L${x1},${y1p} A${r},${r} 0 ${large} 1 ${x2},${y2p}Z`;
      const midAngle = startAngle + sweep / 2;
      const lx = cx + (r + 18) * Math.cos(midAngle);
      const ly = cy + (r + 18) * Math.sin(midAngle);
      return { d, color: DS.palette[i % DS.palette.length], label: labels[i] || '', pct: ((v / total) * 100).toFixed(1), lx, ly, midAngle };
    });
    return (
      <g data-layer="pie">
        {arcs.map((a, i) => (
          <g key={i}>
            <path d={a.d} fill={a.color} stroke={DS.bg} strokeWidth="2" />
            <text x={a.lx} y={a.ly}
              textAnchor={a.midAngle > Math.PI / 2 && a.midAngle < 3 * Math.PI / 2 ? 'end' : 'start'}
              dominantBaseline="central"
              fontFamily={DS.fontFamily} fontSize="10" fontWeight="500" fill={DS.textSecondary}
            >{a.label} ({a.pct}%)</text>
          </g>
        ))}
      </g>
    );
  };

  /* ═══════════════════════════════════════════════════════
     Radar Chart — Polar spider/radar
     ═══════════════════════════════════════════════════════ */
  const renderRadar = () => {
    const cx = padding.left + plotW / 2;
    const cy = plotTop + plotH / 2;
    const r = Math.min(plotW, plotH) / 2 - 30;
    const axes = n;
    if (axes < 3) return null;
    const angleStep = (2 * Math.PI) / axes;
    const allVals = seriesData.flatMap(s => s.values.filter((v): v is number => v !== null));
    const maxVal = allVals.length > 0 ? Math.max(...allVals) : 100;
    const levels = 5;

    return (
      <g data-layer="radar">
        {/* Concentric grid circles */}
        {Array.from({ length: levels }, (_, li) => {
          const lr = r * ((li + 1) / levels);
          const pts = Array.from({ length: axes }, (_, ai) => {
            const a = -Math.PI / 2 + ai * angleStep;
            return `${cx + lr * Math.cos(a)},${cy + lr * Math.sin(a)}`;
          });
          return <polygon key={`grid-${li}`} points={pts.join(' ')} fill="none" stroke={DS.gridColor} strokeWidth="1" strokeDasharray="3 3" />;
        })}
        {/* Axis spokes */}
        {Array.from({ length: axes }, (_, ai) => {
          const a = -Math.PI / 2 + ai * angleStep;
          return <line key={`spoke-${ai}`} x1={cx} y1={cy} x2={cx + r * Math.cos(a)} y2={cy + r * Math.sin(a)} stroke={DS.gridColor} strokeWidth="1" />;
        })}
        {/* Axis labels */}
        {xLabels.map((label, ai) => {
          const a = -Math.PI / 2 + ai * angleStep;
          const lx = cx + (r + 16) * Math.cos(a);
          const ly = cy + (r + 16) * Math.sin(a);
          return <text key={`rl-${ai}`} x={lx} y={ly} textAnchor="middle" dominantBaseline="central"
            fontFamily={DS.fontFamily} fontSize="10" fontWeight="500" fill={DS.textSubtle}>{label}</text>;
        })}
        {/* Data polygons */}
        {seriesData.map(s => {
          const pts = s.values.map((v, i) => {
            const val = v !== null ? v : 0;
            const pct = maxVal > 0 ? val / maxVal : 0;
            const a = -Math.PI / 2 + i * angleStep;
            return `${cx + r * pct * Math.cos(a)},${cy + r * pct * Math.sin(a)}`;
          });
          return (
            <g key={s.id}>
              <polygon points={pts.join(' ')} fill={s.color} fillOpacity="0.15" stroke={s.color} strokeWidth={s.strokeWidth} strokeLinejoin="round" />
              {s.values.map((v, i) => {
                if (v === null) return null;
                const pct = maxVal > 0 ? v / maxVal : 0;
                const a = -Math.PI / 2 + i * angleStep;
                return <circle key={i} cx={cx + r * pct * Math.cos(a)} cy={cy + r * pct * Math.sin(a)} r="3" fill={s.color} stroke={DS.bg} strokeWidth="1.5" />;
              })}
            </g>
          );
        })}
      </g>
    );
  };

  /* ═══════════════════════════════════════════════════════
     Waterfall Chart — Cascading bars
     ═══════════════════════════════════════════════════════ */
  const renderWaterfall = () => {
    const s = seriesData[0];
    if (!s) return null;
    const vals = s.values;
    let cumulative = 0;
    const waterfallBars: { base: number; top: number; color: string; val: number }[] = [];
    vals.forEach((v) => {
      const val = v ?? 0;
      if (val === 0 && cumulative !== 0) {
        // Treat zero value as "total" bar
        waterfallBars.push({ base: 0, top: cumulative, color: DS.palette[0], val: cumulative });
      } else {
        const base = cumulative;
        cumulative += val;
        waterfallBars.push({
          base: val >= 0 ? base : cumulative,
          top: val >= 0 ? cumulative : base,
          color: val >= 0 ? DS.green : DS.red,
          val,
        });
      }
    });
    // Compute Y domain from waterfall data
    const allYs = waterfallBars.flatMap(b => [b.base, b.top]);
    const wfMin = Math.min(0, ...allYs);
    const wfMax = Math.max(...allYs) * 1.1;
    const wfTicks = niceScale(wfMin, wfMax, 5);
    const wfDomain: [number, number] = [wfTicks[0], wfTicks[wfTicks.length - 1]];
    const wfScaleY = (v: number) => plotTop + plotH - ((v - wfDomain[0]) / (wfDomain[1] - wfDomain[0] || 1)) * plotH;

    return (
      <>
        {/* Grid */}
        <g data-layer="wf-grid">
          {wfTicks.map((t, i) => (
            <line key={`wfg-${i}`} x1={padding.left} y1={wfScaleY(t)} x2={padding.left + plotW} y2={wfScaleY(t)}
              stroke={DS.gridColor} strokeWidth="1" strokeDasharray="3 3" />
          ))}
        </g>
        {/* Bars */}
        <g data-layer="wf-bars">
          {waterfallBars.map((b, i) => {
            const bgw = barGroupWFor(i);
            const bx = xCenter(i) - bgw / 2;
            const y1 = wfScaleY(b.top);
            const y2 = wfScaleY(b.base);
            const bH = Math.max(Math.abs(y2 - y1), 1);
            // Connector line from previous bar
            const connector = i > 0 ? (
              <line x1={xCenter(i - 1) + barGroupWFor(i - 1) / 2}
                y1={wfScaleY(waterfallBars[i - 1].top)}
                x2={bx} y2={wfScaleY(waterfallBars[i - 1].top)}
                stroke={DS.textSubtle} strokeWidth="1" strokeDasharray="3 2" />
            ) : null;
            return (
              <g key={`wfb-${i}`}>
                {connector}
                <rect x={bx} y={Math.min(y1, y2)} width={bgw} height={bH} fill={b.color} rx="2" />
              </g>
            );
          })}
        </g>
        {/* Axes */}
        <g data-layer="wf-axes">
          <line x1={padding.left} y1={plotTop} x2={padding.left} y2={plotTop + plotH} stroke={DS.border} strokeWidth="1" />
          <line x1={padding.left} y1={plotTop + plotH} x2={padding.left + plotW} y2={plotTop + plotH} stroke={DS.border} strokeWidth="1" />
          {wfTicks.map((t, i) => (
            <text key={`wft-${i}`} x={padding.left - 8} y={wfScaleY(t)} textAnchor="end" dominantBaseline="central"
              fontFamily={DS.fontFamily} fontSize={state.y1.fontSize} fontWeight="500" fill={DS.textSubtle}>{fmtNum(t)}</text>
          ))}
          {uniqueXTicks.map(({ label, x }, i) => {
            if (!label) return null;
            const y = plotTop + plotH + state.xAxis.fontSize + 6;
            return <text key={`wfxl-${i}`} x={x} y={y} textAnchor="middle" dominantBaseline="central"
              fontFamily={DS.fontFamily} fontSize={state.xAxis.fontSize} fontWeight="500" fill={DS.textSubtle}>{label}</text>;
          })}
        </g>
      </>
    );
  };

  /* ═══════════════════════════════════════════════════════
     Funnel Chart — Trapezoid stages
     ═══════════════════════════════════════════════════════ */
  const renderFunnel = () => {
    const s = seriesData[0];
    if (!s) return null;
    const values = s.values.map((v, i) => ({ val: v ?? 0, label: xLabels[i] || '' }));
    if (values.length === 0) return null;
    const maxVal = Math.max(...values.map(v => Math.abs(v.val)), 1);
    const stageH = plotH / values.length;
    const cx = padding.left + plotW / 2;
    const maxW = plotW * 0.85;

    return (
      <g data-layer="funnel">
        {values.map((item, i) => {
          const topW = (Math.abs(item.val) / maxVal) * maxW;
          const nextW = i < values.length - 1 ? (Math.abs(values[i + 1].val) / maxVal) * maxW : topW * 0.5;
          const y0 = plotTop + i * stageH;
          const y1 = y0 + stageH;
          const color = DS.palette[i % DS.palette.length];
          const d = `M${cx - topW / 2},${y0} L${cx + topW / 2},${y0} L${cx + nextW / 2},${y1} L${cx - nextW / 2},${y1}Z`;
          return (
            <g key={`fn-${i}`}>
              <path d={d} fill={color} stroke={DS.bg} strokeWidth="2" />
              <text x={cx} y={y0 + stageH / 2} textAnchor="middle" dominantBaseline="central"
                fontFamily={DS.fontFamily} fontSize="11" fontWeight="600" fill="#fff">
                {item.label} ({fmtNum(item.val)})
              </text>
            </g>
          );
        })}
      </g>
    );
  };

  /* ═══════════════════════════════════════════════════════
     Treemap Chart — Rectangular partition
     ═══════════════════════════════════════════════════════ */
  const renderTreemap = () => {
    const s = seriesData[0];
    if (!s) return null;
    const items = s.values.map((v, i) => ({ val: Math.abs(v ?? 0), label: xLabels[i] || '', color: DS.palette[i % DS.palette.length] }))
      .filter(it => it.val > 0)
      .sort((a, b) => b.val - a.val);
    if (items.length === 0) return null;
    const total = items.reduce((a, b) => a + b.val, 0);

    // Simple slice layout
    const rects: { x: number; y: number; w: number; h: number; label: string; color: string; val: number }[] = [];
    const layoutSlice = (rx: number, ry: number, rw: number, rh: number, data: typeof items) => {
      if (data.length === 0) return;
      if (data.length === 1) { rects.push({ x: rx, y: ry, w: rw, h: rh, label: data[0].label, color: data[0].color, val: data[0].val }); return; }
      const subTotal = data.reduce((a, b) => a + b.val, 0);
      const horizontal = rw >= rh;
      let cum = 0;
      for (let i = 0; i < data.length; i++) {
        const ratio = data[i].val / subTotal;
        if (horizontal) {
          const w = rw * ratio;
          rects.push({ x: rx + cum, y: ry, w, h: rh, label: data[i].label, color: data[i].color, val: data[i].val });
          cum += w;
        } else {
          const h = rh * ratio;
          rects.push({ x: rx, y: ry + cum, w: rw, h, label: data[i].label, color: data[i].color, val: data[i].val });
          cum += h;
        }
      }
    };
    layoutSlice(padding.left, plotTop, plotW, plotH, items);

    return (
      <g data-layer="treemap">
        {rects.map((r, i) => (
          <g key={`tm-${i}`}>
            <rect x={r.x} y={r.y} width={r.w} height={r.h} fill={r.color} stroke={DS.bg} strokeWidth="2" rx="2" />
            {r.w > 40 && r.h > 20 && (
              <text x={r.x + r.w / 2} y={r.y + r.h / 2} textAnchor="middle" dominantBaseline="central"
                fontFamily={DS.fontFamily} fontSize={Math.min(12, r.w / 6)} fontWeight="500" fill="#fff">
                {r.label}
              </text>
            )}
            {r.w > 50 && r.h > 34 && (
              <text x={r.x + r.w / 2} y={r.y + r.h / 2 + 14} textAnchor="middle" dominantBaseline="central"
                fontFamily={DS.fontFamily} fontSize="9" fontWeight="400" fill="rgba(255,255,255,0.7)">
                {fmtNum(r.val)}
              </text>
            )}
          </g>
        ))}
      </g>
    );
  };

  /* ═══════════════════════════════════════════════════════
     Gauge Chart — Semi-circular dial
     ═══════════════════════════════════════════════════════ */
  const renderGauge = () => {
    const s = seriesData[0];
    if (!s) return null;
    const value = s.values.find((v): v is number => v !== null) ?? 0;
    const allVals = s.values.filter((v): v is number => v !== null);
    const maxVal = allVals.length > 1 ? Math.max(...allVals) : 100;
    const pct = Math.max(0, Math.min(1, value / (maxVal || 1)));
    const cx = padding.left + plotW / 2;
    const cy = plotTop + plotH * 0.65;
    const r = Math.min(plotW / 2, plotH * 0.55) - 10;
    const innerR = r * 0.7;
    const startAngle = Math.PI;
    const endAngle = 0;
    const valueAngle = startAngle + (endAngle - startAngle) * pct;

    const arcPath = (from: number, to: number, outer: number, inner: number) => {
      const x1o = cx + outer * Math.cos(from), y1o = cy - outer * Math.sin(from);
      const x2o = cx + outer * Math.cos(to), y2o = cy - outer * Math.sin(to);
      const x1i = cx + inner * Math.cos(to), y1i = cy - inner * Math.sin(to);
      const x2i = cx + inner * Math.cos(from), y2i = cy - inner * Math.sin(from);
      const large = Math.abs(to - from) > Math.PI ? 1 : 0;
      return `M${x1o},${y1o} A${outer},${outer} 0 ${large} 0 ${x2o},${y2o} L${x1i},${y1i} A${inner},${inner} 0 ${large} 1 ${x2i},${y2i}Z`;
    };

    return (
      <g data-layer="gauge">
        {/* Track */}
        <path d={arcPath(startAngle, endAngle, r, innerR)} fill={DS.border} />
        {/* Value arc */}
        {pct > 0.005 && <path d={arcPath(startAngle, valueAngle, r, innerR)} fill={s.color} />}
        {/* Value text */}
        <text x={cx} y={cy - 8} textAnchor="middle" dominantBaseline="central"
          fontFamily={DS.fontFamily} fontSize="24" fontWeight="600" fill={DS.textPrimary}>{fmtNum(value)}</text>
        {s.name && (
          <text x={cx} y={cy + 16} textAnchor="middle" dominantBaseline="central"
            fontFamily={DS.fontFamily} fontSize="11" fontWeight="500" fill={DS.textSubtle}>{s.name}</text>
        )}
        {/* Min/Max labels */}
        <text x={cx - r} y={cy + 14} textAnchor="middle" dominantBaseline="central"
          fontFamily={DS.fontFamily} fontSize="9" fontWeight="500" fill={DS.textSubtle}>0</text>
        <text x={cx + r} y={cy + 14} textAnchor="middle" dominantBaseline="central"
          fontFamily={DS.fontFamily} fontSize="9" fontWeight="500" fill={DS.textSubtle}>{fmtNum(maxVal)}</text>
      </g>
    );
  };

  /* ═══════════════════════════════════════════════════════
     Heatmap — Color-coded grid
     ═══════════════════════════════════════════════════════ */
  const renderHeatmap = () => {
    const rows = seriesData.length;
    const cols = n;
    if (rows === 0 || cols === 0) return null;
    const allVals = seriesData.flatMap(s => s.values.filter((v): v is number => v !== null));
    const minVal = allVals.length > 0 ? Math.min(...allVals) : 0;
    const maxVal = allVals.length > 0 ? Math.max(...allVals) : 100;
    const range = maxVal - minVal || 1;
    const cellW = plotW / cols;
    const cellH = plotH / rows;

    const heatColor = (v: number | null) => {
      if (v === null) return DS.border;
      const pct = (v - minVal) / range;
      // Blue-to-red gradient via interpolation
      const r = Math.round(pct * 234 + (1 - pct) * 30);
      const g = Math.round(pct * 57 + (1 - pct) * 100);
      const b = Math.round(pct * 67 + (1 - pct) * 200);
      return `rgb(${r},${g},${b})`;
    };

    return (
      <g data-layer="heatmap">
        {seriesData.map((s, ri) => (
          <g key={`hm-row-${ri}`}>
            {s.values.slice(0, cols).map((v, ci) => (
              <g key={`hm-${ri}-${ci}`}>
                <rect x={padding.left + ci * cellW} y={plotTop + ri * cellH} width={cellW - 1} height={cellH - 1}
                  fill={heatColor(v)} rx="2" />
                {cellW > 30 && cellH > 16 && v !== null && (
                  <text x={padding.left + ci * cellW + cellW / 2} y={plotTop + ri * cellH + cellH / 2}
                    textAnchor="middle" dominantBaseline="central"
                    fontFamily={DS.fontFamily} fontSize={Math.min(10, cellH * 0.5)} fontWeight="500" fill="#fff">{fmtNum(v)}</text>
                )}
              </g>
            ))}
            {/* Row label */}
            <text x={padding.left - 6} y={plotTop + ri * cellH + cellH / 2} textAnchor="end" dominantBaseline="central"
              fontFamily={DS.fontFamily} fontSize={state.y1.fontSize} fontWeight="500" fill={DS.textSubtle}>{s.name}</text>
          </g>
        ))}
        {/* Column labels */}
        {xLabels.slice(0, cols).map((label, ci) => (
          <text key={`hml-${ci}`} x={padding.left + ci * cellW + cellW / 2} y={plotTop + rows * cellH + 12}
            textAnchor="middle" dominantBaseline="central"
            fontFamily={DS.fontFamily} fontSize={state.xAxis.fontSize} fontWeight="500" fill={DS.textSubtle}>{label}</text>
        ))}
      </g>
    );
  };

  /* ═══════════════════════════════════════════════════════
     Horizontal Bar Chart (bar-h, stacked-bar-h)
     ═══════════════════════════════════════════════════════ */
  const renderHorizontalBars = () => {
    const isStacked = seriesData.some(s => s.type === 'stacked-bar-h');
    const hAllVals = seriesData.flatMap(s => s.values.filter((v): v is number => v !== null));
    let hMaxVal = hAllVals.length > 0 ? Math.max(...hAllVals) : 100;
    if (isStacked) {
      // For stacked, max = max of row sums
      const rowSums = Array.from({ length: n }, (_, i) => seriesData.reduce((sum, s) => sum + (s.values[i] ?? 0), 0));
      hMaxVal = Math.max(...rowSums, 1);
    }
    const hTicks = niceScale(0, hMaxVal * 1.1, 5);
    const hDomain: [number, number] = [hTicks[0], hTicks[hTicks.length - 1]];
    const hScaleX = (v: number) => padding.left + ((v - hDomain[0]) / (hDomain[1] - hDomain[0] || 1)) * plotW;
    const bandH = n > 0 ? plotH / n : plotH;
    const seriesCount = isStacked ? 1 : seriesData.length;

    return (
      <>
        <g data-layer="h-grid">
          {hTicks.map((t, i) => {
            const x = hScaleX(t);
            return <line key={`hbg-${i}`} x1={x} y1={plotTop} x2={x} y2={plotTop + plotH}
              stroke={DS.gridColor} strokeWidth="1" strokeDasharray="3 3" />;
          })}
        </g>
        <g data-layer="h-bars">
          {seriesData.map((s, si) => (
            <g key={s.id}>{s.values.map((v, i) => {
              if (v === null || v === 0) return null;
              const bh = bandH * 0.7 / seriesCount;
              const gap = bandH * 0.15;
              let by: number, bw: number, bx: number;
              if (isStacked) {
                const cumBefore = seriesData.slice(0, si).reduce((sum, prev) => sum + (prev.values[i] ?? 0), 0);
                bx = hScaleX(cumBefore);
                bw = hScaleX(cumBefore + v) - bx;
                by = plotTop + i * bandH + gap;
              } else {
                by = plotTop + i * bandH + gap + si * bh;
                bx = hScaleX(0);
                bw = hScaleX(v) - bx;
              }
              return <rect key={`${s.id}-${i}`} x={bx} y={by} width={Math.max(bw, 1)} height={bh} fill={s.color} rx="2" />;
            })}</g>
          ))}
        </g>
        <g data-layer="h-axes">
          <line x1={padding.left} y1={plotTop} x2={padding.left} y2={plotTop + plotH} stroke={DS.border} strokeWidth="1" />
          <line x1={padding.left} y1={plotTop + plotH} x2={padding.left + plotW} y2={plotTop + plotH} stroke={DS.border} strokeWidth="1" />
          {hTicks.map((t, i) => (
            <text key={`hbt-${i}`} x={hScaleX(t)} y={plotTop + plotH + state.xAxis.fontSize + 6} textAnchor="middle" dominantBaseline="central"
              fontFamily={DS.fontFamily} fontSize={state.xAxis.fontSize} fontWeight="500" fill={DS.textSubtle}>{fmtNum(t)}</text>
          ))}
          {xLabels.map((label, i) => (
            <text key={`hbl-${i}`} x={padding.left - 8} y={plotTop + i * bandH + bandH / 2} textAnchor="end" dominantBaseline="central"
              fontFamily={DS.fontFamily} fontSize={state.y1.fontSize} fontWeight="500" fill={DS.textSubtle}>{label}</text>
          ))}
        </g>
      </>
    );
  };

  /* ═══════════════════════════════════════════════════════
     Stacked Bars rendering (vertical, proper stacking)
     ═══════════════════════════════════════════════════════ */
  const renderStackedBars = () => {
    if (stackedBarSeries.length === 0) return null;
    return (
      <g data-layer="stacked-bars">
        {Array.from({ length: n }, (_, i) => {
          let cumPos = 0;
          let cumNeg = 0;
          return (
            <g key={`stack-${i}`}>
              {stackedBarSeries.map(s => {
                const v = s.values[i];
                if (v === null || v === 0) return null;
                const bgw = barGroupWFor(i);
                // Stacked bars take the slot after regular bars
                const stackSlot = barSeries.length;
                const totalSlots = barSeries.length + (stackedBarSeries.length > 0 ? 1 : 0);
                const slotW = totalSlots > 0 ? bgw / totalSlots : bgw;
                const gp = Math.max(1, slotW * 0.1);
                const bx = xCenter(i) - bgw / 2 + stackSlot * slotW + gp / 2;
                const bw = slotW - gp;
                let y1: number, y2: number;
                if (v >= 0) {
                  y1 = scaleY(cumPos + v, s.yAxis);
                  y2 = scaleY(cumPos, s.yAxis);
                  cumPos += v;
                } else {
                  y1 = scaleY(cumNeg, s.yAxis);
                  y2 = scaleY(cumNeg + v, s.yAxis);
                  cumNeg += v;
                }
                return <rect key={`${s.id}-${i}`} x={bx} y={Math.min(y1, y2)} width={Math.max(bw, 1)}
                  height={Math.max(Math.abs(y2 - y1), 1)} fill={s.color} rx="2" />;
              })}
            </g>
          );
        })}
      </g>
    );
  };

  /* ═══════════════════════════════════════════════════════
     Candlestick rendering
     Uses first 4 visible series as Open, High, Low, Close
     ═══════════════════════════════════════════════════════ */
  const renderCandlestick = () => {
    if (seriesData.length < 4) return null;
    const [openS, highS, lowS, closeS] = seriesData;
    return (
      <g data-layer="candlestick">
        {Array.from({ length: n }, (_, i) => {
          const o = openS.values[i], h = highS.values[i], l = lowS.values[i], c = closeS.values[i];
          if (o === null || h === null || l === null || c === null) return null;
          const isUp = c >= o;
          const color = isUp ? DS.green : DS.red;
          const bgw = barGroupWFor(i) * 0.6;
          const cx2 = xCenter(i);
          const bodyTop = scaleY(Math.max(o, c), 'y1');
          const bodyBot = scaleY(Math.min(o, c), 'y1');
          const wickTop = scaleY(h, 'y1');
          const wickBot = scaleY(l, 'y1');
          return (
            <g key={`cs-${i}`}>
              <line x1={cx2} y1={wickTop} x2={cx2} y2={wickBot} stroke={color} strokeWidth="1" />
              <rect x={cx2 - bgw / 2} y={bodyTop} width={bgw} height={Math.max(bodyBot - bodyTop, 1)} fill={color} rx="1" />
            </g>
          );
        })}
      </g>
    );
  };

  /* Dispatch special layouts */
  const renderSpecialChart = () => {
    if (isRadar) return renderRadar();
    if (isFunnel) return renderFunnel();
    if (isTreemap) return renderTreemap();
    if (isGauge) return renderGauge();
    if (isHeatmap) return renderHeatmap();
    return null;
  };

  const getAxisValues = (axis: 'y1' | 'y2') =>
    seriesData.filter(s => s.yAxis === axis).flatMap(s => s.values.filter((v): v is number => v !== null));

  const renderReferenceLines = () => {
    if (!state.referenceLines?.length) return null;
    return (
      <g data-layer="reference-lines">
        {state.referenceLines.map(rl => {
          const mode = rl.valueMode || 'custom';

          if (rl.direction === 'horizontal') {
            const axis = (rl.axis === 'x' ? 'y1' : rl.axis) as 'y1' | 'y2';
            let numVal: number | null;
            if (mode === 'custom') {
              numVal = parseNum(rl.value);
            } else {
              numVal = computeStat(getAxisValues(axis), mode);
            }
            if (numVal === null) return null;
            const y = scaleY(numVal, axis);
            if (y < plotTop - 2 || y > plotTop + plotH + 2) return null;

            const pos = rl.labelPosition || 'right';
            let lx: number, ly: number, anchor: string;
            if (pos === 'left') { lx = padding.left + 4; ly = y; anchor = 'start'; }
            else if (pos === 'top') { lx = padding.left + plotW; ly = y - 4; anchor = 'end'; }
            else if (pos === 'bottom') { lx = padding.left + plotW; ly = y + 4; anchor = 'end'; }
            else { lx = padding.left + plotW + 4; ly = y; anchor = 'start'; }

            const displayLabel = mode !== 'custom'
              ? `${rl.label ? rl.label + ' ' : ''}(${mode === 'mean' ? 'μ' : mode === 'median' ? 'Me' : 'Mo'} = ${fmtNum(numVal)})`
              : rl.label;

            return (
              <g key={rl.id}>
                <line x1={padding.left} y1={y} x2={padding.left + plotW} y2={y}
                  stroke={rl.color} strokeWidth="1.5"
                  strokeDasharray={rl.lineStyle === 'dashed' ? '6 4' : undefined} />
                {displayLabel && (
                  <text x={lx} y={ly} textAnchor={anchor} dominantBaseline="central"
                    fontFamily={DS.fontFamily} fontSize={rl.fontSize} fontWeight="500" fill={rl.color}
                  >{displayLabel}</text>
                )}
              </g>
            );
          } else {
            let fi: number | null;
            if (mode === 'custom') {
              fi = resolveVerticalX(rl.value, xLabels);
            } else {
              const xNums = xLabels.map(l => parseNum(l)).filter((v): v is number => v !== null);
              const statVal = computeStat(xNums, mode);
              fi = statVal !== null ? resolveVerticalX(String(statVal), xLabels) : null;
            }
            if (fi === null) return null;
            const x = padding.left + bandW * fi + bandW / 2;
            if (x < padding.left - 2 || x > padding.left + plotW + 2) return null;

            const pos = rl.labelPosition || 'top';
            let lx: number, ly: number, anchor: string;
            if (pos === 'top') { lx = x; ly = plotTop - 4; anchor = 'middle'; }
            else if (pos === 'bottom') { lx = x; ly = plotTop + plotH + 4; anchor = 'middle'; }
            else if (pos === 'left') { lx = x - 4; ly = plotTop + 12; anchor = 'end'; }
            else { lx = x + 4; ly = plotTop + 12; anchor = 'start'; }

            const statNumVal = mode !== 'custom' ? (() => {
              const xNums = xLabels.map(l => parseNum(l)).filter((v): v is number => v !== null);
              return computeStat(xNums, mode);
            })() : null;

            const displayLabel = mode !== 'custom' && statNumVal !== null
              ? `${rl.label ? rl.label + ' ' : ''}(${mode === 'mean' ? 'μ' : mode === 'median' ? 'Me' : 'Mo'} = ${fmtNum(statNumVal)})`
              : rl.label;

            return (
              <g key={rl.id}>
                <line x1={x} y1={plotTop} x2={x} y2={plotTop + plotH}
                  stroke={rl.color} strokeWidth="1.5"
                  strokeDasharray={rl.lineStyle === 'dashed' ? '6 4' : undefined} />
                {displayLabel && (
                  <text x={lx} y={ly} textAnchor={anchor} dominantBaseline="central"
                    fontFamily={DS.fontFamily} fontSize={rl.fontSize} fontWeight="500" fill={rl.color}
                  >{displayLabel}</text>
                )}
              </g>
            );
          }
        })}
      </g>
    );
  };

  const handleMouseMove = useCallback((e: React.MouseEvent<SVGSVGElement>) => {
    if (!interactive || isPie) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const mx = (e.clientX - rect.left) * (width / rect.width);
    // Find nearest data point by pixel distance
    let idx = 0;
    let minDist = Infinity;
    for (let i = 0; i < n; i++) {
      const d = Math.abs(xCenter(i) - mx);
      if (d < minDist) { minDist = d; idx = i; }
    }
    if (idx < 0 || idx >= n || minDist > plotW / 2) { setTooltip(null); return; }
    const items = seriesData.map(s => ({
      color: s.color, name: s.name,
      value: s.values[idx] !== null ? fmtNum(s.values[idx]!) : '—',
    }));
    setTooltip({ x: mx, y: (e.clientY - rect.top) * (height / rect.height), items, label: xLabels[idx] });
  }, [interactive, isPie, n, seriesData, xLabels, padding.left, width, height, plotW, xCenter]);

  const renderLegend = (cy: number) => {
    let cx = padding.left;
    const iconH = Math.max(8, lfs * 0.8);
    return (
      <g data-layer="legend">
        {legendItems.map((item, i) => {
          const x = cx;
          cx += estimateTextWidth(item.name, lfs) + 26;
          return (
            <g key={i}>
              {item.type === 'line' || item.type === 'area' || item.type === 'scatter'
                ? <line x1={x} y1={cy} x2={x + 14} y2={cy} stroke={item.color} strokeWidth="2" />
                : <rect x={x} y={cy - iconH / 2} width={iconH * 1.25} height={iconH} rx="1.5" fill={item.color} />
              }
              <text x={x + 18} y={cy} dominantBaseline="central"
                fontFamily={DS.fontFamily} fontSize={lfs} fontWeight="500" fill={DS.textSecondary}
              >{item.name}</text>
            </g>
          );
        })}
      </g>
    );
  };

  return (
    <div style={{ position: 'relative' }} className={className || undefined}>
      <svg xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 ${width} ${height}`} width={width} height={height}
        style={{ width: '100%', height: 'auto', fontFamily: DS.fontFamily }}
        onMouseMove={handleMouseMove} onMouseLeave={() => setTooltip(null)}
      >
        {state.showBackground && <rect data-layer="background" width={width} height={height} fill="transparent" rx="8" />}

        {hasTitle && (() => {
          const align = state.titleAlign || 'center';
          const tx = align === 'left' ? padding.left : align === 'right' ? width - padding.right : width / 2;
          const anchor = align === 'left' ? 'start' : align === 'right' ? 'end' : 'middle';
          return (
            <text data-layer="title" x={tx} y={titleY} textAnchor={anchor} dominantBaseline="hanging"
              fontFamily={DS.fontFamily} fontSize={tfs} fontWeight="600" fill={DS.textPrimary}
            >{state.title}</text>
          );
        })()}

        {hasLegendTop && !isPie && renderLegend(legendTopY)}

        {isSpecialLayout ? renderSpecialChart() : isPie ? renderPieDonut() : isWaterfall ? renderWaterfall() : isHorizontal ? renderHorizontalBars() : (
          <>
            <g data-layer="grid">
              {state.y1.showGrid && y1Ticks.map((t, i) => {
                const y = scaleY(t, 'y1');
                return <line key={`hg-${i}`} x1={padding.left} y1={y} x2={padding.left + plotW} y2={y}
                  stroke={DS.gridColor} strokeWidth="1"
                  strokeDasharray={state.y1.gridStyle === 'dashed' ? '3 3' : undefined} />;
              })}
              {state.xAxis.showGrid && uniqueXTicks.map((tick, i) => {
                return <line key={`vg-${i}`} x1={tick.x} y1={plotTop} x2={tick.x} y2={plotTop + plotH}
                  stroke={DS.gridColor} strokeWidth="1" strokeDasharray="3 3" />;
              })}
            </g>

            <defs><clipPath id={clipId}><rect x={padding.left} y={plotTop} width={plotW} height={plotH} /></clipPath></defs>

            <g data-layer="areas" clipPath={`url(#${clipId})`}>
              {areaSeries.map(s => {
                const pts = s.values.map((v, i) => v !== null ? { x: xCenter(i), y: scaleY(v, s.yAxis) } : null);
                const valid = pts.filter((p): p is { x: number; y: number } => p !== null);
                if (valid.length < 2) return null;
                const d = `M${valid[0].x},${valid[0].y}` + valid.slice(1).map(p => `L${p.x},${p.y}`).join('');
                const areaD = d + `L${valid[valid.length - 1].x},${scaleY(0, s.yAxis)}L${valid[0].x},${scaleY(0, s.yAxis)}Z`;
                return (<g key={s.id}><path d={areaD} fill={s.color} opacity="0.15" /><path d={d} fill="none" stroke={s.color} strokeWidth={s.strokeWidth} strokeLinejoin="round" strokeLinecap="round" /></g>);
              })}
            </g>

            <g data-layer="bars" clipPath={`url(#${clipId})`}>
              {barSeries.map((s, bi) => (
                <g key={s.id}>{s.values.map((v, i) => {
                  if (v === null) return null;
                  const bgw = barGroupWFor(i);
                  const sbw = barCount > 0 ? bgw / barCount : bgw;
                  const bg = Math.max(1, sbw * 0.1);
                  const barX = xCenter(i) - bgw / 2 + bi * sbw + bg / 2;
                  const barW = sbw - bg;
                  const barY = scaleY(v, s.yAxis);
                  const barH = Math.abs(zeroY1 - barY);
                  return <rect key={`${s.id}-${i}`} x={barX} y={v >= 0 ? barY : zeroY1} width={Math.max(barW, 1)} height={barH} fill={s.color} rx="2" />;
                })}</g>
              ))}
            </g>

            <g data-layer="lines" clipPath={`url(#${clipId})`}>
              {lineSeries.map(s => {
                const pts = s.values.map((v, i) => v !== null ? `${xCenter(i)},${scaleY(v, s.yAxis)}` : null).filter(Boolean);
                if (pts.length < 2) return null;
                return <polyline key={s.id} points={pts.join(' ')} fill="none" stroke={s.color} strokeWidth={s.strokeWidth} strokeLinejoin="round" strokeLinecap="round" />;
              })}
            </g>

            <g data-layer="scatter" clipPath={`url(#${clipId})`}>
              {scatterSeries.map(s => (<g key={s.id}>{s.values.map((v, i) => v === null ? null : <circle key={i} cx={xCenter(i)} cy={scaleY(v, s.yAxis)} r="4" fill={s.color} />)}</g>))}
            </g>

            <g data-layer="markers" clipPath={`url(#${clipId})`}>
              {lineSeries.map(s => (<g key={`m-${s.id}`}>{s.values.map((v, i) => v === null ? null : <circle key={i} cx={xCenter(i)} cy={scaleY(v, s.yAxis)} r="3" fill={s.color} stroke={DS.bg} strokeWidth="1.5" />)}</g>))}
            </g>

            <g data-layer="data-labels">
              {seriesData.filter(s => s.showDataLabels).map(s => {
                const dlFs = s.dataLabelFontSize || 9;
                const dlColor = s.dataLabelColor || DS.textSecondary;
                const dlStyle = s.dataLabelStyle || 'plain';
                return (
                  <g key={`dl-${s.id}`}>{s.values.map((v, i) => {
                    if (v === null) return null;
                    const cx = xCenter(i);
                    const cy = scaleY(v, s.yAxis) - dlFs - 4;
                    const txt = fmtNum(v);
                    if (dlStyle === 'badge') {
                      const tw = estimateTextWidth(txt, dlFs);
                      const padX = 4, padY = 2;
                      return (
                        <g key={i}>
                          <rect x={cx - tw / 2 - padX} y={cy - dlFs * 0.4 - padY}
                            width={tw + padX * 2} height={dlFs + padY * 2}
                            rx="3" fill={s.color} opacity="0.85" />
                          <text x={cx} y={cy + dlFs * 0.35} textAnchor="middle"
                            fontFamily={DS.fontFamily} fontSize={dlFs} fontWeight="600" fill="#fff"
                          >{txt}</text>
                        </g>
                      );
                    }
                    return <text key={i} x={cx} y={cy + dlFs * 0.35} textAnchor="middle"
                      fontFamily={DS.fontFamily} fontSize={dlFs} fontWeight="500" fill={dlColor}>{txt}</text>;
                  })}</g>
                );
              })}
            </g>

            {renderReferenceLines()}

            {/* Stacked bars (proper stacking) */}
            {renderStackedBars()}

            {/* Candlestick */}
            {isCandlestick && renderCandlestick()}

            <g data-layer="axes">
              <line x1={padding.left} y1={plotTop} x2={padding.left} y2={plotTop + plotH} stroke={DS.border} strokeWidth="1" />
              {y1Ticks.map((t, i) => (
                <text key={`y1t-${i}`} x={padding.left - 8} y={scaleY(t, 'y1')} textAnchor="end" dominantBaseline="central"
                  fontFamily={DS.fontFamily} fontSize={state.y1.fontSize} fontWeight="500" fill={DS.textSubtle}>{fmtNum(t)}</text>
              ))}
              {state.y1.label && (() => {
                const lx = GAP + (state.y1.labelFontSize * 0.4);
                const ly = plotTop + plotH / 2;
                return (
                  <text x={lx} y={ly} textAnchor="middle" dominantBaseline="central"
                    fontFamily={DS.fontFamily} fontSize={state.y1.labelFontSize} fontWeight="500" fill={DS.textSubtle}
                    transform={`rotate(-90, ${lx}, ${ly})`}>{state.y1.label}</text>
                );
              })()}

              {hasY2 && (<>
                <line x1={padding.left + plotW} y1={plotTop} x2={padding.left + plotW} y2={plotTop + plotH} stroke={DS.border} strokeWidth="1" />
                {y2Ticks.map((t, i) => (
                  <text key={`y2t-${i}`} x={padding.left + plotW + 8} y={scaleY(t, 'y2')} textAnchor="start" dominantBaseline="central"
                    fontFamily={DS.fontFamily} fontSize={state.y2.fontSize} fontWeight="500" fill={DS.textSubtle}>{fmtNum(t)}</text>
                ))}
                {state.y2.label && (() => {
                  const lx = width - GAP - (state.y2.labelFontSize * 0.4);
                  const ly = plotTop + plotH / 2;
                  return (
                    <text x={lx} y={ly} textAnchor="middle" dominantBaseline="central"
                      fontFamily={DS.fontFamily} fontSize={state.y2.labelFontSize} fontWeight="500" fill={DS.textSubtle}
                      transform={`rotate(90, ${lx}, ${ly})`}>{state.y2.label}</text>
                  );
                })()}
              </>)}

              <line x1={padding.left} y1={plotTop + plotH} x2={padding.left + plotW} y2={plotTop + plotH} stroke={DS.border} strokeWidth="1" />
              {uniqueXTicks.map(({ label, x }, i) => {
                if (!label) return null; // skip empty labels (filtered by displayMode)
                const y = plotTop + plotH + state.xAxis.fontSize + 6;
                const rot = state.xAxis.rotation || 0;
                const anchor = rot === 0 ? 'middle' : 'end';
                return <text key={`xl-${i}`} x={x} y={y} textAnchor={anchor} dominantBaseline="central"
                  fontFamily={DS.fontFamily} fontSize={state.xAxis.fontSize} fontWeight="500" fill={DS.textSubtle}
                  transform={rot ? `rotate(${rot}, ${x}, ${y})` : undefined}>{label}</text>;
              })}
              {state.xAxis.label && (
                <text x={padding.left + plotW / 2} y={plotTop + plotH + xTickLabelH + 6 + state.xAxis.labelFontSize * 0.5}
                  textAnchor="middle" dominantBaseline="central"
                  fontFamily={DS.fontFamily} fontSize={state.xAxis.labelFontSize} fontWeight="500" fill={DS.textSubtle}
                >{state.xAxis.label}</text>
              )}
            </g>

            {tooltip && interactive && (() => {
              // Find nearest data point for crosshair line (same logic as handleMouseMove)
              let idx = 0;
              let minDist = Infinity;
              for (let i = 0; i < n; i++) {
                const d = Math.abs(xCenter(i) - tooltip.x);
                if (d < minDist) { minDist = d; idx = i; }
              }
              return <line x1={xCenter(idx)} y1={plotTop} x2={xCenter(idx)} y2={plotTop + plotH}
                stroke={DS.textSubtle} strokeWidth="1" strokeDasharray="4 3" opacity="0.5" />;
            })()}
          </>
        )}

        {hasLegendBottom && !isPie && renderLegend(legendBottomY)}
      </svg>

      {tooltip && interactive && (
        <div style={{ position: 'absolute', zIndex: 10, pointerEvents: 'none',
                      left: tooltip.x > width * 0.55 ? undefined : `${(tooltip.x / width) * 100 + 2}%`,
                      right: tooltip.x > width * 0.55 ? `${100 - (tooltip.x / width) * 100 + 2}%` : undefined,
                      top: Math.max(8, (tooltip.y / height) * 100 - 5) + '%' }}>
          <DSTooltipContent
            title={tooltip.label}
            items={tooltip.items.map(item => ({
              color: item.color,
              name: item.name,
              value: item.value,
            }))}
            style={{ minWidth: 120 }}
          />
        </div>
      )}
    </div>
  );
}

export function exportSVG(svgEl: SVGSVGElement | null, title: string) {
  if (!svgEl) return;
  const clone = svgEl.cloneNode(true) as SVGSVGElement;
  clone.querySelectorAll('*').forEach(el => { el.removeAttribute('data-reactid'); el.removeAttribute('class'); });
  const styleEl = document.createElementNS('http://www.w3.org/2000/svg', 'style');
  styleEl.textContent = `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap'); text { font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif; }`;
  clone.insertBefore(styleEl, clone.firstChild);
  clone.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  const blob = new Blob([new XMLSerializer().serializeToString(clone)], { type: 'image/svg+xml;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = `${title.replace(/\s+/g, '_') || 'chart'}.svg`; a.click();
  URL.revokeObjectURL(url);
}