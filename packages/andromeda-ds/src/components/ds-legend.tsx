import React, { useState, useRef, useEffect } from 'react';

/* ═══════════════════════════════════════════════════════
   DSLegend — Chart Legend Component (Mantine migration)
   ═══════════════════════════════════════════════════════ */

export type LegendMode = 'inline' | 'wrap' | 'slider';

export interface DSLegendItem {
  color: string;
  label: string;
}

export interface DSLegendProps {
  items: DSLegendItem[];
  mode?: LegendMode;
  maxWidth?: number;
  className?: string;
}

function ChevronIcon({ direction, size = 12 }: { direction: 'left' | 'right'; size?: number }) {
  return (
    <svg viewBox="0 0 8 8" fill="none" style={{ width: size, height: size }}>
      <path
        d={direction === 'left' ? 'M5.5 1.5L2.5 4L5.5 6.5' : 'M2.5 1.5L5.5 4L2.5 6.5'}
        stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  );
}

function LegendPart({ item }: { item: DSLegendItem }) {
  return (
    <span
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 8, flexShrink: 0,
        backgroundColor: 'var(--ds-bg-table-mark)', padding: '2px 8px', borderRadius: 2, maxWidth: 156,
      }}
    >
      <span style={{ flexShrink: 0, width: 8, height: 8, borderRadius: 1, backgroundColor: item.color }} />
      <span style={{ fontSize: 10, lineHeight: '16px', fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', color: 'var(--ds-text-primary)' }}>
        {item.label}
      </span>
    </span>
  );
}

export function DSLegend({ items, mode = 'inline', maxWidth, className }: DSLegendProps) {
  if (mode === 'inline') {
    return (
      <div className={className} style={{ display: 'flex', alignItems: 'center', gap: 8, overflow: 'hidden', ...(maxWidth ? { maxWidth } : {}) }}>
        {items.map((item, i) => <LegendPart key={i} item={item} />)}
      </div>
    );
  }

  if (mode === 'wrap') {
    return (
      <div className={className} style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 8, ...(maxWidth ? { maxWidth } : {}) }}>
        {items.map((item, i) => <LegendPart key={i} item={item} />)}
      </div>
    );
  }

  return <SliderLegend items={items} maxWidth={maxWidth} className={className} />;
}

function SliderLegend({ items, maxWidth, className }: { items: DSLegendItem[]; maxWidth?: number; className?: string }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 1);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 1);
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener('scroll', checkScroll, { passive: true });
    const ro = new ResizeObserver(checkScroll);
    ro.observe(el);
    return () => { el.removeEventListener('scroll', checkScroll); ro.disconnect(); };
  }, [items]);

  const scroll = (dir: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === 'left' ? -120 : 120, behavior: 'smooth' });
  };

  const arrowStyle = (enabled: boolean): React.CSSProperties => ({
    flexShrink: 0, width: 24, height: 24, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center',
    backgroundColor: 'var(--ds-bg-table-mark)', color: 'var(--ds-blue-6)', transition: 'opacity 150ms ease',
    cursor: enabled ? 'pointer' : 'default', opacity: enabled ? 1 : 0.3,
    border: 'none', outline: 'none',
  });

  return (
    <div className={className} style={{ display: 'flex', alignItems: 'center', gap: 4, ...(maxWidth ? { maxWidth } : {}) }}>
      <button type="button" onClick={() => scroll('left')} disabled={!canScrollLeft} style={arrowStyle(canScrollLeft)} aria-label="Scroll left">
        <ChevronIcon direction="left" />
      </button>
      <div ref={scrollRef} style={{ display: 'flex', alignItems: 'center', gap: 8, overflowX: 'auto', flex: 1, minWidth: 0, scrollbarWidth: 'none' }}>
        {items.map((item, i) => <LegendPart key={i} item={item} />)}
      </div>
      <button type="button" onClick={() => scroll('right')} disabled={!canScrollRight} style={arrowStyle(canScrollRight)} aria-label="Scroll right">
        <ChevronIcon direction="right" />
      </button>
    </div>
  );
}