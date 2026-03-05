import React, {
  useState,
  useRef,
  useCallback,
  useEffect,
  type ReactNode,
  type CSSProperties,
} from 'react';

/* ═══════════════════════════════════════════════════════
   DSTooltip — Composable tooltip system (Mantine migration)
   ═══════════════════════════════════════════════════════ */

const TT_BG       = 'var(--ds-bg-secondary)';
const TT_BORDER   = 'var(--ds-border-primary)';
const TT_TEXT     = 'var(--ds-text-primary)';
const TT_LABEL    = 'var(--ds-text-gray-dark)';
const TT_RADIUS   = 8;
const TT_MAX_W    = 286;
const TT_FONT     = "'Inter', sans-serif";

export interface DSTooltipItem {
  color?: string;
  shape?: 'square' | 'circle' | 'line';
  name: string;
  value?: string;
  extra?: string;
  extraColor?: string;
  isDetail?: boolean;
}

/* ═══════ 1. DSTooltipContent ═══════ */

export interface DSTooltipContentProps {
  title?: string;
  subtitle?: string;
  text?: string;
  items?: DSTooltipItem[];
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  maxWidth?: number;
}

export function DSTooltipContent({ title, subtitle, text, items, children, className, style, maxWidth = TT_MAX_W }: DSTooltipContentProps) {
  return (
    <div
      className={className}
      style={{
        pointerEvents: 'none',
        userSelect: 'none',
        background: TT_BG,
        border: `1px solid ${TT_BORDER}`,
        borderRadius: TT_RADIUS,
        maxWidth,
        fontFamily: TT_FONT,
        fontFeatureSettings: "'lnum', 'tnum'",
        boxShadow: '0 8px 24px rgba(0,0,0,0.45)',
        ...style,
      }}
    >
      {(title || subtitle) && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 10px 4px', color: TT_LABEL, fontSize: 10, lineHeight: '16px', fontWeight: 500 }}>
          {title && <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{title}</span>}
          {subtitle && <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{subtitle}</span>}
        </div>
      )}

      {text && (
        <div style={{ padding: '8px 10px', color: TT_TEXT, fontSize: 12, lineHeight: '16px' }}>
          {text}
        </div>
      )}

      {items && items.length > 0 && (
        <div style={{ display: 'flex', flexDirection: 'column', padding: (title || subtitle) ? '0 10px 8px' : '8px 10px' }}>
          {items.map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, minHeight: 18 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 4, minWidth: 0, flexShrink: 1 }}>
                {item.color && <LegendMark color={item.color} shape={item.shape} />}
                <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', color: item.isDetail ? TT_LABEL : TT_TEXT, fontSize: 10, lineHeight: '16px', fontWeight: item.isDetail ? 300 : 500 }}>
                  {item.name}
                </span>
              </div>
              {(item.value || item.extra) && (
                <div style={{ display: 'flex', alignItems: 'center', gap: 4, flexShrink: 0 }}>
                  {item.extra && (
                    <span style={{ color: item.extraColor || 'var(--ds-gray-4)', fontSize: 10, lineHeight: '16px', fontWeight: 500 }}>
                      {item.extra}
                    </span>
                  )}
                  {item.value && (
                    <span style={{ textAlign: 'right', fontVariantNumeric: 'tabular-nums', color: TT_TEXT, fontSize: 10, lineHeight: '16px', fontWeight: 500 }}>
                      {item.value}
                    </span>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {children}
    </div>
  );
}

function LegendMark({ color, shape = 'square' }: { color: string; shape?: 'square' | 'circle' | 'line' }) {
  if (shape === 'line') {
    return <span style={{ display: 'inline-block', width: 10, height: 2, borderRadius: 1, backgroundColor: color, flexShrink: 0 }} />;
  }
  return (
    <span style={{ display: 'inline-block', width: 8, height: 8, borderRadius: shape === 'circle' ? 4 : 2, backgroundColor: color, flexShrink: 0 }} />
  );
}

/* ═══════ 2. DSTooltip — Hover wrapper ═══════ */

export interface DSTooltipProps {
  content: string | DSTooltipContentProps;
  side?: 'top' | 'bottom' | 'left' | 'right';
  offset?: number;
  delay?: number;
  children: ReactNode;
  disabled?: boolean;
  triggerClassName?: string;
}

export function DSTooltip({ content, side = 'top', offset = 6, delay = 120, children, disabled = false, triggerClassName }: DSTooltipProps) {
  const [visible, setVisible] = useState(false);
  const [pos, setPos] = useState<{ top: number; left: number }>({ top: 0, left: 0 });
  const triggerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const reposition = useCallback(() => {
    const trigger = triggerRef.current;
    const tooltip = tooltipRef.current;
    if (!trigger || !tooltip) return;
    const tRect = trigger.getBoundingClientRect();
    const ttRect = tooltip.getBoundingClientRect();
    let top = 0, left = 0;
    switch (side) {
      case 'top':    top = tRect.top - ttRect.height - offset; left = tRect.left + tRect.width / 2 - ttRect.width / 2; break;
      case 'bottom': top = tRect.bottom + offset; left = tRect.left + tRect.width / 2 - ttRect.width / 2; break;
      case 'left':   top = tRect.top + tRect.height / 2 - ttRect.height / 2; left = tRect.left - ttRect.width - offset; break;
      case 'right':  top = tRect.top + tRect.height / 2 - ttRect.height / 2; left = tRect.right + offset; break;
    }
    const vw = window.innerWidth, vh = window.innerHeight;
    if (left < 4) left = 4;
    if (left + ttRect.width > vw - 4) left = vw - ttRect.width - 4;
    if (top < 4) top = tRect.bottom + offset;
    if (top + ttRect.height > vh - 4) top = tRect.top - ttRect.height - offset;
    setPos({ top, left });
  }, [side, offset]);

  const show = useCallback(() => {
    if (disabled) return;
    timerRef.current = setTimeout(() => { setVisible(true); requestAnimationFrame(reposition); }, delay);
  }, [disabled, delay, reposition]);

  const hide = useCallback(() => { clearTimeout(timerRef.current); setVisible(false); }, []);

  useEffect(() => () => clearTimeout(timerRef.current), []);
  useEffect(() => { if (visible) requestAnimationFrame(reposition); }, [visible, reposition]);

  const tooltipContent = typeof content === 'string' ? <DSTooltipContent text={content} /> : <DSTooltipContent {...content} />;

  return (
    <>
      <div ref={triggerRef} className={triggerClassName} style={{ display: 'inline-flex' }} onMouseEnter={show} onMouseLeave={hide} onFocus={show} onBlur={hide}>
        {children}
      </div>
      {visible && (
        <div
          ref={tooltipRef}
          style={{
            position: 'fixed', zIndex: 10000, pointerEvents: 'none',
            top: pos.top, left: pos.left,
            opacity: pos.top === 0 && pos.left === 0 ? 0 : 1,
            transition: 'opacity 120ms ease-out',
          }}
        >
          {tooltipContent}
        </div>
      )}
    </>
  );
}

/* ═══════ 3. DSChartTooltip ═══════ */

export interface DSChartTooltipProps {
  visible: boolean;
  x: number;
  y: number;
  containerWidth?: number;
  offsetX?: number;
  title?: string;
  subtitle?: string;
  items?: DSTooltipItem[];
  children?: ReactNode;
  className?: string;
}

export function DSChartTooltip({ visible, x, y, containerWidth = 800, offsetX = 12, title, subtitle, items, children, className }: DSChartTooltipProps) {
  if (!visible) return null;
  const flipThreshold = containerWidth * 0.65;
  const isFlipped = x > flipThreshold;

  return (
    <div
      className={className}
      style={{
        position: 'absolute', zIndex: 10, pointerEvents: 'none',
        top: y,
        ...(isFlipped ? { right: containerWidth - x + offsetX } : { left: x + offsetX }),
      }}
    >
      <DSTooltipContent title={title} subtitle={subtitle} items={items} style={{ minWidth: 120 }}>
        {children}
      </DSTooltipContent>
    </div>
  );
}