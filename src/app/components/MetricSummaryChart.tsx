import React, { useMemo } from 'react';
import {
  DSChartGrid,
  toSmoothPath,
  toAreaPath,
} from './ui/ds-chart-grid';

/* ═══════════════════════════════════════════════════════════
   MetricSummaryChart — Custom SVG chart panel (Mantine migration)
   Built on DSChartGrid. Area + line for historical data,
   dashed forecast line with boundary marker.
   ═══════════════════════════════════════════════════════════ */

interface Series {
  label: string;
  color: string;
  values: number[];
}

interface MetricSummaryChartProps {
  title: string;
  unit?: string;
  periods: string[];
  historicalValues: number[];
  forecastSeries?: Series[];
  secondaryUnit?: string;
  secondaryValues?: number[];
  className?: string;
}

function niceStep(range: number, ticks: number): number {
  const raw = range / ticks;
  const mag = Math.pow(10, Math.floor(Math.log10(raw)));
  const norm = raw / mag;
  let step: number;
  if (norm <= 1.5) step = 1;
  else if (norm <= 3) step = 2;
  else if (norm <= 7) step = 5;
  else step = 10;
  return step * mag;
}

function buildYTicks(min: number, max: number, count = 6): number[] {
  const range = max - min || 1;
  const step = niceStep(range, count);
  const start = Math.floor(min / step) * step;
  const ticks: number[] = [];
  for (let v = start; v <= max + step * 0.5; v += step) ticks.push(v);
  return ticks.length > count + 2 ? ticks.filter((_, i) => i % 2 === 0) : ticks;
}

function formatNum(v: number): string {
  if (Math.abs(v) >= 1) return Math.round(v).toLocaleString('ru-RU');
  if (Number.isInteger(v)) return String(v);
  return v.toFixed(1);
}

export function MetricSummaryChart({
  title, unit = '', periods, historicalValues,
  forecastSeries = [], secondaryUnit, secondaryValues, className,
}: MetricSummaryChartProps) {
  const { yTicks, domain, xLabels, splitIndex, secTicks, secDomain } = useMemo(() => {
    const allVals = [...historicalValues];
    forecastSeries.forEach(s => allVals.push(...s.values.filter(v => v !== 0)));
    const rawMin = Math.min(...allVals);
    const rawMax = Math.max(...allVals);
    const padding = (rawMax - rawMin) * 0.08;
    const domainMin = rawMin - padding;
    const domainMax = rawMax + padding;

    const ticks = buildYTicks(domainMin, domainMax, 6);
    const domain: [number, number] = [ticks[ticks.length - 1], ticks[0]];

    const step = periods.length > 12 ? 2 : 1;
    const xLabels = periods.map((p, i) => (i % step === 0 ? p : ''));
    const splitIndex = historicalValues.filter(v => v !== 0).length;

    let secTicks: number[] = [];
    let secDomain: [number, number] = [0, 1];
    if (secondaryValues && secondaryValues.length > 0) {
      const sMin = Math.min(...secondaryValues.filter(v => v !== 0));
      const sMax = Math.max(...secondaryValues.filter(v => v !== 0));
      secTicks = buildYTicks(sMin - (sMax - sMin) * 0.05, sMax + (sMax - sMin) * 0.05, 6);
      while (secTicks.length < ticks.length) secTicks.push(secTicks[secTicks.length - 1]);
      secDomain = [secTicks[secTicks.length - 1], secTicks[0]];
    }

    return { yTicks: ticks, domain, xLabels, splitIndex, secTicks, secDomain };
  }, [historicalValues, forecastSeries, periods, secondaryValues]);

  const svgContent = useMemo(() => {
    const drawDomain: [number, number] = [domain[1], domain[0]];
    const histArea = toAreaPath(historicalValues.filter(v => v !== 0), drawDomain);
    const histLine = toSmoothPath(historicalValues.filter(v => v !== 0), drawDomain);

    const totalLen = periods.length;
    const histLen = splitIndex;
    const histXScale = histLen > 1 ? (histLen - 1) / (totalLen - 1) : 1;

    const forecastPaths = forecastSeries.map(series => {
      const fVals: number[] = [];
      const fStartIdx = Math.max(0, splitIndex - 1);
      for (let i = fStartIdx; i < totalLen; i++) {
        const hv = i < histLen ? historicalValues[i] : 0;
        const fv = series.values[i] || 0;
        fVals.push(hv || fv);
      }
      if (fVals.length < 2) return null;

      const pts = fVals.map((v, j) => {
        const globalIdx = fStartIdx + j;
        const x = (globalIdx / Math.max(totalLen - 1, 1)) * 100;
        const y = 100 - ((v - drawDomain[0]) / (drawDomain[1] - drawDomain[0] || 1)) * 100;
        return { x, y };
      });

      let d = `M ${pts[0].x} ${pts[0].y}`;
      for (let k = 1; k < pts.length; k++) {
        const p = pts[k - 1], c = pts[k];
        const cpx = (p.x + c.x) / 2;
        d += ` C ${cpx} ${p.y}, ${cpx} ${c.y}, ${c.x} ${c.y}`;
      }

      return { d, color: series.color, label: series.label };
    }).filter(Boolean) as { d: string; color: string; label: string }[];

    const boundaryX = splitIndex > 0 ? ((splitIndex - 1) / Math.max(totalLen - 1, 1)) * 100 : -1;

    let secPath = '';
    if (secondaryValues && secondaryValues.length > 0) {
      const secDraw: [number, number] = [secDomain[1], secDomain[0]];
      secPath = toSmoothPath(secondaryValues.filter(v => v !== 0), secDraw);
    }

    return { histArea, histLine, histXScale, forecastPaths, boundaryX, secPath };
  }, [historicalValues, forecastSeries, periods, splitIndex, domain, secondaryValues, secDomain]);

  const yLabels = yTicks.map(v => formatNum(v));
  const secLabels = secTicks.length > 0 ? secTicks.map(v => formatNum(v)) : undefined;
  const zeroIdx = yTicks.findIndex(v => v === 0);

  const displayXLabels = periods.map((p, i) => {
    if (periods.length > 16) return i % 3 === 0 ? p : '';
    if (periods.length > 10) return i % 2 === 0 ? p : '';
    return p;
  });

  return (
    <div className={className} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {/* Title */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h3 style={{ fontSize: 12, fontWeight: 500, color: 'var(--ds-text-gray-dark)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          {title}
        </h3>
        {forecastSeries.length > 0 && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <div style={{ width: 16, height: 2, borderRadius: 9999, backgroundColor: 'var(--ds-gray-7)' }} />
              <span style={{ fontSize: 10, color: 'var(--ds-text-gray-dark)' }}>Факт</span>
            </div>
            {forecastSeries.map(s => (
              <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <div style={{ width: 16, height: 2, borderRadius: 9999, backgroundColor: s.color }} />
                <span style={{ fontSize: 10, color: 'var(--ds-text-gray-dark)' }}>{s.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Chart */}
      <div style={{ height: 200, width: '100%' }}>
        <DSChartGrid
          yValues={yLabels}
          yLabel={unit}
          xValues={displayXLabels}
          solidLineIndex={zeroIdx >= 0 ? zeroIdx : -1}
          showVerticalLines
          verticalSolidLineIndex={splitIndex > 0 ? splitIndex - 1 : -1}
          secondaryYValues={secLabels}
          secondaryYLabel={secondaryUnit}
          showXTicks
        >
          <svg
            style={{ position: 'absolute', inset: 0 }}
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            fill="none"
          >
            <defs>
              <linearGradient id="hist-area-grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--ds-gray-6)" stopOpacity={0.25} />
                <stop offset="100%" stopColor="var(--ds-gray-6)" stopOpacity={0.02} />
              </linearGradient>
              {forecastSeries.map((s, i) => (
                <linearGradient key={`fg-${i}`} id={`fc-grad-${i}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={s.color} stopOpacity={0.15} />
                  <stop offset="100%" stopColor={s.color} stopOpacity={0.01} />
                </linearGradient>
              ))}
            </defs>

            {svgContent.histArea && (
              <g transform={`scale(${svgContent.histXScale}, 1)`}>
                <path d={svgContent.histArea} fill="url(#hist-area-grad)" vectorEffect="non-scaling-stroke" />
                <path d={svgContent.histLine} stroke="var(--ds-gray-6)" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
              </g>
            )}

            {svgContent.boundaryX > 0 && (
              <line x1={svgContent.boundaryX} y1={0} x2={svgContent.boundaryX} y2={100} stroke="var(--ds-border-primary)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
            )}

            {svgContent.forecastPaths.map(fp => (
              <path key={fp.label} d={fp.d} stroke={fp.color} strokeWidth="2" strokeDasharray="4 2" vectorEffect="non-scaling-stroke" />
            ))}

            {svgContent.secPath && (
              <path d={svgContent.secPath} stroke="var(--ds-turquoise-6)" strokeWidth="1" strokeDasharray="2 2" vectorEffect="non-scaling-stroke" opacity={0.7} />
            )}
          </svg>
        </DSChartGrid>
      </div>
    </div>
  );
}