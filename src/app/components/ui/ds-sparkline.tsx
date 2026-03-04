import React from 'react';

/* ═══════════════════════════════════════
   DSSparkline — Mini chart component (DS)
   ═══════════════════════════════════════
   
   A small SVG sparkline with optional gradient fill.
   Used in TickerTape and MarketTrends widgets.

   <DSSparkline data={[1,2,3,4]} width={77} height={33} />
*/

export interface DSSparklineProps {
  data: number[];
  width?: number;
  height?: number;
  /** Line stroke color (auto: green if up, red if down) */
  color?: string;
  /** Show gradient fill under the line */
  fill?: boolean;
  /** Stroke width */
  strokeWidth?: number;
  className?: string;
}

export function DSSparkline({
  data,
  width = 77,
  height = 33,
  color,
  fill = true,
  strokeWidth = 1.5,
  className,
}: DSSparklineProps) {
  if (data.length < 2) return null;

  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const padding = 2;

  const points = data.map((v, i) => {
    const x = padding + (i / (data.length - 1)) * (width - padding * 2);
    const y = padding + (1 - (v - min) / range) * (height - padding * 2);
    return { x, y };
  });

  const polyline = points.map(p => `${p.x},${p.y}`).join(' ');

  // Determine direction
  const isUp = data[data.length - 1] >= data[0];
  const lineColor = color || (isUp ? 'var(--ds-green-6)' : 'var(--ds-red-6)');
  const gradId = `spark-grad-${Math.random().toString(36).slice(2, 8)}`;

  // Build fill path (close to bottom)
  const fillPath = fill
    ? `M${points[0].x},${points[0].y} ${points.map(p => `L${p.x},${p.y}`).join(' ')} L${points[points.length - 1].x},${height} L${points[0].x},${height} Z`
    : '';

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      preserveAspectRatio="none"
    >
      {fill && (
        <>
          <defs>
            <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={lineColor} stopOpacity={0.3} />
              <stop offset="100%" stopColor={lineColor} stopOpacity={0} />
            </linearGradient>
          </defs>
          <path d={fillPath} fill={`url(#${gradId})`} />
        </>
      )}
      <polyline
        points={polyline}
        fill="none"
        stroke={lineColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* End dot */}
      <circle
        cx={points[points.length - 1].x}
        cy={points[points.length - 1].y}
        r={2}
        fill={lineColor}
      />
    </svg>
  );
}
