import React, { createContext, useContext, useCallback, type ReactNode } from 'react';

/* ═══════════════════════════════════════════════════════
   DSSegmentButton — Segment Button Component (Mantine migration)
   ═══════════════════════════════════════════════════════ */

type SegmentSize = 'md' | 'sm' | 'xs';
type SegmentVariant = 'fill' | 'stroke' | 'individual';
type SegmentActiveStyle = 'solid' | 'outline';

interface SizeConfig {
  px: number;
  py: number;
  height: number | undefined;
  iconSize: number;
  gap: number;
  fontSize: number;
  lineHeight: string;
  innerRounded: number;
}

const SIZE_MAP: Record<SegmentSize, SizeConfig> = {
  md: { px: 12, py: 8, height: undefined, iconSize: 18, gap: 6, fontSize: 14, lineHeight: '20px', innerRounded: 6 },
  sm: { px: 12, py: 0, height: 28, iconSize: 16, gap: 6, fontSize: 12, lineHeight: '16px', innerRounded: 6 },
  xs: { px: 8, py: 0, height: 24, iconSize: 12, gap: 6, fontSize: 12, lineHeight: '16px', innerRounded: 8 },
};

/* ─── Context ─── */

interface SegmentContextValue {
  value: string;
  onChange: (value: string) => void;
  size: SegmentSize;
  variant: SegmentVariant;
  activeStyle: SegmentActiveStyle;
}

const SegmentContext = createContext<SegmentContextValue | null>(null);

function useSegmentContext() {
  const ctx = useContext(SegmentContext);
  if (!ctx) throw new Error('DSSegment must be used within DSSegmentButton');
  return ctx;
}

/* ─── DSSegmentButton (container) ─── */

export interface DSSegmentButtonProps {
  value: string;
  onChange: (value: string) => void;
  variant?: SegmentVariant;
  size?: SegmentSize;
  activeStyle?: SegmentActiveStyle;
  children: ReactNode;
  className?: string;
}

export function DSSegmentButton({
  value,
  onChange,
  variant = 'fill',
  size = 'sm',
  activeStyle = 'solid',
  children,
  className,
}: DSSegmentButtonProps) {
  const containerStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 2,
    padding: 2,
    borderRadius: 8,
    position: 'relative',
    ...(variant === 'fill' ? { backgroundColor: 'var(--ds-bg-primary)' } : {}),
  };

  return (
    <SegmentContext.Provider value={{ value, onChange, size, variant, activeStyle }}>
      <div role="radiogroup" className={className} style={containerStyle}>
        {variant === 'stroke' && (
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: 8,
              border: '1px solid var(--ds-border-primary)',
              pointerEvents: 'none',
            }}
          />
        )}
        {children}
      </div>
    </SegmentContext.Provider>
  );
}

/* ─── DSSegment (individual segment) ─── */

export interface DSSegmentProps {
  value: string;
  children: ReactNode;
  icon?: ReactNode;
  disabled?: boolean;
  className?: string;
}

export function DSSegment({ value, children, icon, disabled = false, className }: DSSegmentProps) {
  const { value: activeValue, onChange, size, variant, activeStyle } = useSegmentContext();
  const cfg = SIZE_MAP[size];
  const isActive = activeValue === value;

  const handleClick = useCallback(() => {
    if (!disabled) onChange(value);
  }, [disabled, onChange, value]);

  // Determine colors
  let bg = 'transparent';
  let borderColor: string | undefined;
  let textColor = 'var(--ds-text-secondary)';

  if (isActive) {
    if (activeStyle === 'solid') {
      bg = 'var(--ds-blue-6)';
      textColor = 'white';
    } else {
      if (variant === 'individual') {
        bg = 'rgba(90,140,255,0.3)';
      } else {
        bg = 'rgba(90,140,255,0.1)';
        borderColor = 'var(--ds-blue-6)';
      }
      textColor = 'var(--ds-blue-6)';
    }
  } else if (variant === 'individual') {
    bg = 'var(--ds-bg-secondary)';
  }

  return (
    <button
      role="radio"
      type="button"
      aria-checked={isActive}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      onClick={handleClick}
      className={className}
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'all 150ms ease',
        padding: `${cfg.py}px ${cfg.px}px`,
        ...(cfg.height ? { height: cfg.height } : {}),
        gap: cfg.gap,
        borderRadius: cfg.innerRounded,
        backgroundColor: bg,
        border: borderColor ? `1px solid ${borderColor}` : 'none',
        outline: 'none',
        background: bg,
        ...(disabled ? { opacity: 0.3 } : {}),
      }}
    >
      {/* Icon */}
      {icon && (
        <span style={{ flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', width: cfg.iconSize, height: cfg.iconSize, color: textColor }}>
          {icon}
        </span>
      )}

      {/* Label */}
      <span
        style={{
          fontWeight: 600,
          whiteSpace: 'nowrap',
          fontSize: cfg.fontSize,
          lineHeight: cfg.lineHeight,
          color: textColor,
        }}
      >
        {children}
      </span>
    </button>
  );
}