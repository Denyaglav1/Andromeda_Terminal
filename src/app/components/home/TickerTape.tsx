import React, { useMemo, useRef, useEffect, useCallback } from 'react';
import type { TickerQuote } from './data/home-types';
import { formatPrice, formatChange } from './data/useRealtimePrices';

/* ═══════════════════════════════════════
   TickerTape — Auto-scrolling marquee bar (Mantine)
   ═══════════════════════════════════════ */

interface TickerTapeProps {
  tickers: TickerQuote[];
}

const chipStyle: React.CSSProperties = {
  backgroundColor: 'var(--ds-bg-secondary)',
  borderRadius: 8,
  padding: '4px 8px',
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  flexShrink: 0,
};

const tickerTextStyle: React.CSSProperties = {
  fontSize: 12,
  lineHeight: '16px',
  fontWeight: 600,
  color: 'var(--ds-text-primary)',
  whiteSpace: 'nowrap',
  fontFeatureSettings: "'lnum', 'tnum'",
};

const priceTextStyle: React.CSSProperties = {
  fontSize: 12,
  lineHeight: '16px',
  fontWeight: 500,
  color: 'var(--ds-text-gray)',
  whiteSpace: 'nowrap',
  fontFeatureSettings: "'lnum', 'tnum'",
};

const TickerChip = React.memo(function TickerChip({ t }: { t: TickerQuote }) {
  return (
    <div style={chipStyle}>
      <span style={tickerTextStyle} data-field="ticker">
        {t.ticker}
      </span>
      <span style={priceTextStyle} data-field="price">
        {formatPrice(t.price)}
      </span>
      <span
        style={{
          fontSize: 12,
          lineHeight: '16px',
          fontWeight: 600,
          whiteSpace: 'nowrap',
          fontFeatureSettings: "'lnum', 'tnum'",
          color: t.changePercent >= 0 ? 'var(--ds-green-6)' : 'var(--ds-red-6)',
        }}
        data-field="change"
      >
        {formatChange(t.changePercent)}
      </span>
    </div>
  );
});

export const TickerTape = React.memo(
  function TickerTape({ tickers }: TickerTapeProps) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const rafRef = useRef<number>(0);
    const offsetRef = useRef(0);
    const pausedRef = useRef(false);

    const speed = 0.17;

    const animate = useCallback(() => {
      const el = scrollRef.current;
      if (!el) { rafRef.current = requestAnimationFrame(animate); return; }
      if (!pausedRef.current) {
        offsetRef.current -= speed;
        const setWidth = el.scrollWidth / 3;
        if (setWidth > 0 && Math.abs(offsetRef.current) >= setWidth) {
          offsetRef.current += setWidth;
        }
        el.style.transform = `translate3d(${offsetRef.current}px,0,0)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    }, []);

    useEffect(() => {
      rafRef.current = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(rafRef.current);
    }, [animate]);

    const handleMouseEnter = useCallback(() => { pausedRef.current = true; }, []);
    const handleMouseLeave = useCallback(() => { pausedRef.current = false; }, []);

    const sets = useMemo(() => [0, 1, 2], []);
    const chips = useMemo(
      () =>
        sets.map(setIdx => (
          <div key={setIdx} style={{ display: 'flex', gap: 6, flexShrink: 0 }}>
            {tickers.map((t, i) => (
              <TickerChip key={`${setIdx}-${t.ticker}-${i}`} t={t} />
            ))}
          </div>
        )),
      [tickers, sets],
    );

    return (
      <div
        style={{
          backgroundColor: 'var(--ds-bg-primary)',
          width: '100%',
          overflow: 'hidden',
          position: 'relative',
          zIndex: 3,
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          ref={scrollRef}
          style={{
            display: 'flex',
            gap: 6,
            padding: '6px 0',
            width: 'max-content',
            willChange: 'transform',
          }}
        >
          {chips}
        </div>
      </div>
    );
  },
  () => true,
);

export default TickerTape;