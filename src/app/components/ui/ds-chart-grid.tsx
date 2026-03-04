import React, { type ReactNode } from 'react';

/* ═══════════════════════════════════════════════════════════
   DSChartGrid — Chart Grid / Axes Shell (Mantine migration)
   ═══════════════════════════════════════════════════════════ */

const GRID_STROKE = 'var(--ds-border-primary, #2A2E39)';
const AXIS_TEXT   = 'var(--ds-text-gray-dark, #677C9C)';
const TICK_DASH   = '1.84 1.84';

export interface DSChartGridProps {
  yValues: (string | number)[];
  yLabel?: string;
  xValues: (string | number)[];
  xLabel?: string;
  solidLineIndex?: number;
  showVerticalLines?: boolean;
  verticalSolidLineIndex?: number;
  secondaryYValues?: (string | number)[];
  secondaryYLabel?: string;
  children?: ReactNode;
  className?: string;
  showXTicks?: boolean;
  showYBorder?: boolean;
}

function HLine({ dashed = true }: { dashed?: boolean }) {
  return (
    <div style={{ height: 16, position: 'relative', flexShrink: 0, width: '100%' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '10px 0', position: 'relative', width: '100%', height: '100%' }}>
          <div style={{ height: 0, position: 'relative', flexShrink: 0, width: '100%' }}>
            <div style={{ position: 'absolute', inset: '-0.5px 0' }}>
              <svg style={{ display: 'block', width: '100%', height: '100%' }} fill="none" preserveAspectRatio="none" viewBox="0 0 100 1">
                <line x1="0" y1="0.5" x2="100" y2="0.5" stroke={GRID_STROKE} {...(dashed ? { strokeDasharray: TICK_DASH } : {})} />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface YAxisColumnProps {
  values: (string | number)[];
  label?: string;
  side: 'left' | 'right';
  showBorder?: boolean;
}

function YAxisColumn({ values, label, side, showBorder = true }: YAxisColumnProps) {
  const isLeft = side === 'left';

  return (
    <div style={{ display: 'flex', height: '100%', alignItems: 'center', position: 'relative', flexShrink: 0 }}>
      <div style={{ display: 'flex', height: '100%', alignItems: 'center', position: 'relative', flexShrink: 0, justifyContent: isLeft ? 'flex-end' : 'flex-start', ...(isLeft ? { paddingRight: 12 } : { paddingLeft: 12 }) }}>
        {showBorder && (
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', borderStyle: 'solid', ...(isLeft ? { borderRight: `1px solid ${GRID_STROKE}` } : { borderLeft: `1px solid ${GRID_STROKE}` }) }} />
        )}

        <div style={{ display: 'flex', gap: 4, height: '100%', alignItems: 'center', position: 'relative', flexShrink: 0, justifyContent: isLeft ? 'flex-end' : 'flex-start', flexDirection: isLeft ? 'row' : 'row-reverse' }}>
          {label && (
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', alignItems: 'flex-end', justifyContent: 'space-between', position: 'relative', flexShrink: 0, width: 16 }}>
              <div style={{ display: 'flex', height: 54, alignItems: 'center', justifyContent: 'center', position: 'relative', flexShrink: 0, width: 16 }}>
                <div style={{ flexShrink: 0, whiteSpace: 'nowrap', transform: isLeft ? 'rotate(-90deg)' : 'rotate(90deg)' }}>
                  <span style={{ fontWeight: 500, lineHeight: '16px', fontSize: 10, color: AXIS_TEXT }}>{label}</span>
                </div>
              </div>
            </div>
          )}

          <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', position: 'relative', flexShrink: 0, alignItems: isLeft ? 'flex-end' : 'flex-start' }}>
            {values.map((val, i) => (
              <div key={`y-${side}-${i}`} style={{ display: 'flex', gap: 5, alignItems: 'center', position: 'relative', flexShrink: 0, justifyContent: isLeft ? 'flex-end' : 'flex-start' }}>
                <span style={{ fontWeight: 500, lineHeight: '16px', fontSize: 10, fontVariantNumeric: 'tabular-nums', textAlign: isLeft ? 'right' : 'left', color: AXIS_TEXT }}>
                  {val}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

interface VGridOverlayProps { count: number; solidIndex: number; }

function VGridOverlay({ count, solidIndex }: VGridOverlayProps) {
  if (count < 2) return null;
  return (
    <svg style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} preserveAspectRatio="none" viewBox={`0 0 ${count - 1} 100`} fill="none">
      {Array.from({ length: count }).map((_, i) => (
        <line key={`vl-${i}`} x1={i} y1={0} x2={i} y2={100} stroke={GRID_STROKE} strokeWidth={0.02} {...(i !== solidIndex ? { strokeDasharray: '0.5 0.5' } : {})} />
      ))}
    </svg>
  );
}

export function DSChartGrid({
  yValues, yLabel, xValues, xLabel, solidLineIndex = -1, showVerticalLines = false,
  verticalSolidLineIndex = -1, secondaryYValues, secondaryYLabel, children, className,
  showXTicks = true, showYBorder = true,
}: DSChartGridProps) {
  const hasSecondary = secondaryYValues && secondaryYValues.length > 0;

  return (
    <div className={className} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'space-between', position: 'relative', width: '100%', height: '100%' }}>
      {/* Body */}
      <div style={{ display: 'flex', flex: '1 0 0', alignItems: 'center', justifyContent: 'space-between', minHeight: 1, minWidth: 1, position: 'relative', width: '100%' }}>
        <YAxisColumn values={yValues} label={yLabel} side="left" showBorder={showYBorder} />

        <div style={{ display: 'flex', flex: '1 0 0', flexDirection: 'column', height: '100%', alignItems: 'flex-start', justifyContent: 'space-between', minHeight: 1, minWidth: 1, overflow: 'clip', position: 'relative' }}>
          {yValues.map((_, i) => <HLine key={`hl-${i}`} dashed={i !== solidLineIndex} />)}
          {showVerticalLines && <VGridOverlay count={xValues.length} solidIndex={verticalSolidLineIndex} />}
          {children && <div style={{ position: 'absolute', inset: 0, pointerEvents: 'auto' }}>{children}</div>}
        </div>

        {hasSecondary && <YAxisColumn values={secondaryYValues} label={secondaryYLabel} side="right" showBorder />}
      </div>

      {/* X-axis */}
      <div style={{ position: 'relative', flexShrink: 0, width: '100%' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', position: 'relative', width: '100%', ...(hasSecondary ? { padding: '0 52px' } : { paddingLeft: 52 }) }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', position: 'relative', flexShrink: 0, width: '100%' }}>
            <div aria-hidden="true" style={{ position: 'absolute', borderTop: `1px solid ${GRID_STROKE}`, inset: 0, pointerEvents: 'none' }} />
            <div style={{ position: 'relative', flexShrink: 0, width: '100%' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', height: '100%' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'center', padding: '0 30px', position: 'relative', width: '100%' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative', flexShrink: 0, width: '100%' }}>
                    {xValues.map((val, i) => (
                      <div key={`x-${i}`} style={{ display: 'flex', flexDirection: 'column', gap: 5, alignItems: 'center', position: 'relative', flexShrink: 0 }}>
                        {showXTicks && <div style={{ height: 7, flexShrink: 0, width: 1, opacity: 0.4, backgroundColor: AXIS_TEXT }} />}
                        <span style={{ fontWeight: 500, lineHeight: '16px', fontSize: 10, textAlign: 'right', fontVariantNumeric: 'tabular-nums', color: AXIS_TEXT }}>{val}</span>
                      </div>
                    ))}
                  </div>
                  {xLabel && (
                    <div style={{ display: 'flex', height: 16, alignItems: 'center', justifyContent: 'center', position: 'relative', flexShrink: 0 }}>
                      <span style={{ fontWeight: 500, lineHeight: '16px', fontSize: 10, color: AXIS_TEXT }}>{xLabel}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════ Helper utilities ═══════ */

export function toPolylinePoints(values: number[], domain?: [number, number]): string {
  if (values.length === 0) return '';
  const min = domain ? domain[0] : Math.min(...values);
  const max = domain ? domain[1] : Math.max(...values);
  const range = max - min || 1;
  return values.map((v, i) => {
    const x = (i / Math.max(values.length - 1, 1)) * 100;
    const y = 100 - ((v - min) / range) * 100;
    return `${x},${y}`;
  }).join(' ');
}

export function toSmoothPath(values: number[], domain?: [number, number]): string {
  if (values.length < 2) return '';
  const min = domain ? domain[0] : Math.min(...values);
  const max = domain ? domain[1] : Math.max(...values);
  const range = max - min || 1;
  const pts = values.map((v, i) => ({ x: (i / Math.max(values.length - 1, 1)) * 100, y: 100 - ((v - min) / range) * 100 }));
  let d = `M ${pts[0].x} ${pts[0].y}`;
  for (let i = 1; i < pts.length; i++) {
    const prev = pts[i - 1], curr = pts[i];
    const cpx = (prev.x + curr.x) / 2;
    d += ` C ${cpx} ${prev.y}, ${cpx} ${curr.y}, ${curr.x} ${curr.y}`;
  }
  return d;
}

export function toAreaPath(values: number[], domain?: [number, number]): string {
  const linePath = toSmoothPath(values, domain);
  if (!linePath) return '';
  const lastX = (values.length - 1) / Math.max(values.length - 1, 1) * 100;
  return `${linePath} L ${lastX} 100 L 0 100 Z`;
}