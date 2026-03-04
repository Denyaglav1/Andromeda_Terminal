import React, { type ReactNode } from 'react';

/* ═══════════════════════════════════════════════════════
   DSTag — Tag / Chip Component (theme-aware)
   Uses CSS variables for automatic light/dark adaptation.
   ═══════════════════════════════════════════════════════ */

export type TagColor = 'default' | 'blue' | 'green' | 'red' | 'orange' | 'purple';
export type TagSize = 'lg' | 'md' | 'sm';

export interface DSTagProps {
  children: ReactNode;
  color?: TagColor;
  size?: TagSize;
  icon?: ReactNode;
  closable?: boolean;
  onClose?: () => void;
  onClick?: () => void;
  active?: boolean;
  disabled?: boolean;
  className?: string;
}

interface SizeConfig {
  height: number;
  fontSize: number;
  lineHeight: string;
  px: number;
  gap: number;
  iconSize: number;
  closeSize: number;
}

const SIZES: Record<TagSize, SizeConfig> = {
  lg: { height: 32, fontSize: 14, lineHeight: '20px', px: 10, gap: 6, iconSize: 16, closeSize: 14 },
  md: { height: 24, fontSize: 12, lineHeight: '16px', px: 8,  gap: 4, iconSize: 14, closeSize: 12 },
  sm: { height: 20, fontSize: 10, lineHeight: '14px', px: 6,  gap: 4, iconSize: 12, closeSize: 10 },
};

interface ColorConfig {
  bg: string;
  fg: string;
  activeBg: string;
  borderColor: string;
}

/* Default uses CSS variables for theme-awareness; accent colors use rgba for both themes */
const COLORS: Record<TagColor, ColorConfig> = {
  default: { bg: 'var(--ds-tag-default-bg)', fg: 'var(--ds-tag-default-fg)', activeBg: 'var(--ds-blue-6-a10)', borderColor: 'var(--ds-tag-default-border)' },
  blue:    { bg: 'var(--ds-blue-6-a10)',      fg: 'var(--ds-blue-6)',      activeBg: 'var(--ds-blue-6-a30)',      borderColor: 'var(--ds-blue-6-a20)' },
  green:   { bg: 'var(--ds-green-6-a10)',     fg: 'var(--ds-green-6)',     activeBg: 'var(--ds-green-6-a30)',     borderColor: 'var(--ds-green-6-a20)' },
  red:     { bg: 'var(--ds-red-6-a10)',       fg: 'var(--ds-red-6)',       activeBg: 'var(--ds-red-6-a30)',       borderColor: 'var(--ds-red-6-a20)' },
  orange:  { bg: 'var(--ds-orange-6-a10)',    fg: 'var(--ds-orange-6)',    activeBg: 'var(--ds-orange-6-a30)',    borderColor: 'var(--ds-orange-6-a20)' },
  purple:  { bg: 'var(--ds-purple-6-a10)',    fg: 'var(--ds-purple-6)',    activeBg: 'var(--ds-purple-6-a30)',    borderColor: 'var(--ds-purple-6-a20)' },
};

function CloseIcon({ size }: { size: number }) {
  return (
    <svg viewBox="0 0 10 10" fill="none" style={{ width: size, height: size }}>
      <path d="M2 2L8 8M8 2L2 8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

export function DSTag({
  children,
  color = 'default',
  size = 'md',
  icon,
  closable = false,
  onClose,
  onClick,
  active = false,
  disabled = false,
  className,
}: DSTagProps) {
  const sc = SIZES[size];
  const cc = COLORS[color];
  const isClickable = !!onClick && !disabled;
  const Tag = onClick ? 'button' : 'span';

  return (
    <Tag
      onClick={disabled ? undefined : onClick}
      disabled={disabled && onClick ? true : undefined}
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        borderRadius: 4,
        border: `1px solid ${cc.borderColor}`,
        fontWeight: 500,
        whiteSpace: 'nowrap',
        transition: 'all 150ms ease',
        userSelect: 'none',
        height: sc.height,
        padding: `0 ${sc.px}px`,
        gap: sc.gap,
        fontSize: sc.fontSize,
        lineHeight: sc.lineHeight,
        backgroundColor: active ? cc.activeBg : cc.bg,
        color: active && color === 'default' ? 'var(--ds-blue-6)' : cc.fg,
        cursor: isClickable ? 'pointer' : disabled ? 'not-allowed' : 'default',
        opacity: disabled ? 0.4 : 1,
        fontFeatureSettings: "'lnum', 'tnum'",
        outline: 'none',
        ...(Tag === 'button' ? { background: active ? cc.activeBg : cc.bg } : {}),
      }}
    >
      {icon && <span style={{ width: sc.iconSize, height: sc.iconSize, flexShrink: 0 }}>{icon}</span>}
      <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>{children}</span>
      {closable && (
        <button
          type="button"
          onClick={e => { e.stopPropagation(); onClose?.(); }}
          disabled={disabled}
          style={{
            flexShrink: 0,
            borderRadius: 2,
            transition: 'opacity 150ms ease',
            opacity: 0.6,
            width: sc.closeSize,
            height: sc.closeSize,
            background: 'none',
            border: 'none',
            padding: 0,
            cursor: disabled ? 'not-allowed' : 'pointer',
            color: 'inherit',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          aria-label="Remove"
        >
          <CloseIcon size={sc.closeSize} />
        </button>
      )}
    </Tag>
  );
}