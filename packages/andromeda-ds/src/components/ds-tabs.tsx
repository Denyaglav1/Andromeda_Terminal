import React, { createContext, useContext, useCallback, type ReactNode } from 'react';

/* ═══════════════════════════════════════════
   DSTabs — Tab Navigation Component (Mantine migration)
   ═══════════════════════════════════════════ */

type TabSize = 'lg' | 'md' | 'sm' | 'xs';

interface TabSizeConfig {
  px: number;
  py: number;
  gap: number;
  iconSize: number;
  fontSize: number;
  lineHeight: string;
  badgeMinW: number;
  badgePx: number;
  badgePy: number;
  badgeHeight: number | undefined;
  badgeFontSize: number;
  badgeLineHeight: string;
  badgeFontWeight: number;
}

const SIZE_MAP: Record<TabSize, TabSizeConfig> = {
  lg: {
    px: 20, py: 14, gap: 12, iconSize: 24,
    fontSize: 18, lineHeight: '24px',
    badgeMinW: 20, badgePx: 12, badgePy: 4, badgeHeight: 24,
    badgeFontSize: 12, badgeLineHeight: '16px', badgeFontWeight: 400,
  },
  md: {
    px: 16, py: 12, gap: 8, iconSize: 20,
    fontSize: 14, lineHeight: '20px',
    badgeMinW: 20, badgePx: 12, badgePy: 4, badgeHeight: 24,
    badgeFontSize: 12, badgeLineHeight: '16px', badgeFontWeight: 400,
  },
  sm: {
    px: 12, py: 10, gap: 8, iconSize: 18,
    fontSize: 14, lineHeight: '20px',
    badgeMinW: 16, badgePx: 8, badgePy: 2, badgeHeight: undefined,
    badgeFontSize: 10, badgeLineHeight: '16px', badgeFontWeight: 500,
  },
  xs: {
    px: 12, py: 8, gap: 8, iconSize: 16,
    fontSize: 12, lineHeight: '16px',
    badgeMinW: 16, badgePx: 6, badgePy: 0, badgeHeight: undefined,
    badgeFontSize: 10, badgeLineHeight: '16px', badgeFontWeight: 500,
  },
};

/* ─── Context ─── */

interface TabsContextValue {
  value: string;
  onChange: (value: string) => void;
  size: TabSize;
}

const TabsContext = createContext<TabsContextValue | null>(null);

function useTabsContext() {
  const ctx = useContext(TabsContext);
  if (!ctx) throw new Error('DSTab must be used within DSTabs');
  return ctx;
}

/* ─── DSTabs (container) ─── */

export interface DSTabsProps {
  value: string;
  onChange: (value: string) => void;
  size?: TabSize;
  children: ReactNode;
  className?: string;
}

export function DSTabs({ value, onChange, size = 'sm', children, className }: DSTabsProps) {
  return (
    <TabsContext.Provider value={{ value, onChange, size }}>
      <div role="tablist" className={className} style={{ display: 'flex', alignItems: 'center' }}>
        {children}
      </div>
    </TabsContext.Provider>
  );
}

/* ─── DSTab (individual tab) ─── */

export interface DSTabProps {
  value: string;
  children: ReactNode;
  icon?: ReactNode;
  badge?: string | number;
  disabled?: boolean;
  className?: string;
}

export function DSTab({ value, children, icon, badge, disabled = false, className }: DSTabProps) {
  const { value: activeValue, onChange, size } = useTabsContext();
  const cfg = SIZE_MAP[size];
  const isActive = activeValue === value;

  const handleClick = useCallback(() => {
    if (!disabled) onChange(value);
  }, [disabled, onChange, value]);

  const borderStyle: React.CSSProperties = disabled
    ? { borderBottom: '1px solid var(--ds-text-primary)', opacity: 0.2 }
    : isActive
      ? { borderBottom: '3px solid #5A8CFF' }
      : { borderBottom: '1px solid transparent' };

  return (
    <button
      role="tab"
      type="button"
      aria-selected={isActive}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      onClick={handleClick}
      className={className}
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'all 150ms ease',
        padding: `${cfg.py}px ${cfg.px}px`,
        gap: cfg.gap,
        background: 'none',
        outline: 'none',
        ...(disabled ? { opacity: 0.2 } : {}),
        ...borderStyle,
      }}
    >
      {/* Icon */}
      {icon && (
        <span style={{ flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', width: cfg.iconSize, height: cfg.iconSize, color: 'var(--ds-text-primary)' }}>
          {icon}
        </span>
      )}

      {/* Label */}
      <span
        style={{
          fontWeight: 600,
          whiteSpace: 'nowrap',
          color: 'var(--ds-text-primary)',
          fontSize: cfg.fontSize,
          lineHeight: cfg.lineHeight,
        }}
      >
        {children}
      </span>

      {/* Badge */}
      {badge !== undefined && badge !== null && !disabled && (
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 9999,
            backgroundColor: 'var(--ds-blue-6)',
            color: 'white',
            textAlign: 'center',
            flexShrink: 0,
            minWidth: cfg.badgeMinW,
            padding: `${cfg.badgePy}px ${cfg.badgePx}px`,
            ...(cfg.badgeHeight ? { height: cfg.badgeHeight } : {}),
            fontSize: cfg.badgeFontSize,
            lineHeight: cfg.badgeLineHeight,
            fontWeight: cfg.badgeFontWeight,
            fontFeatureSettings: "'lnum', 'tnum'",
          }}
        >
          {badge}
        </span>
      )}
    </button>
  );
}