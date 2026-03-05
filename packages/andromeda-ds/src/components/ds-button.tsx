import React, { forwardRef, useState, type ReactNode, type ButtonHTMLAttributes } from 'react';

/* ═══════════════════════════════════════════════════
   DSButton — Button Component (theme-aware)
   Uses CSS variables for automatic light/dark adaptation.
   Hover state managed via onMouseEnter/onMouseLeave.
   ═══════════════════════════════════════════════════ */

type ButtonVariant = 'primary' | 'secondary' | 'destructive' | 'outline' | 'ghost';
type ButtonSize = 'xl' | 'lg' | 'md' | 'sm';

interface SizeConfig {
  height: number;
  px: number;
  gap: number;
  iconSize: number;
  fontSize: number;
  lineHeight: string;
  uppercase: boolean;
}

const SIZES: Record<ButtonSize, SizeConfig> = {
  xl: { height: 56, px: 24, gap: 12, iconSize: 24, fontSize: 18, lineHeight: '24px', uppercase: true },
  lg: { height: 48, px: 20, gap: 12, iconSize: 20, fontSize: 16, lineHeight: '20px', uppercase: false },
  md: { height: 40, px: 16, gap: 8, iconSize: 18, fontSize: 14, lineHeight: '20px', uppercase: false },
  sm: { height: 32, px: 12, gap: 8, iconSize: 16, fontSize: 12, lineHeight: '16px', uppercase: false },
};

interface VariantConfig {
  bg: string;
  color: string;
  border?: string;
  hoverBg: string;
}

/* All bg/hover values use CSS vars → auto light/dark */
const VARIANTS: Record<ButtonVariant, VariantConfig> = {
  primary:     { bg: 'var(--ds-blue-6)',              color: 'white',              hoverBg: 'var(--ds-blue-5)' },
  secondary:   { bg: 'var(--ds-btn-secondary-bg)',    color: 'var(--ds-blue-6)',   hoverBg: 'var(--ds-btn-secondary-hover)' },
  destructive: { bg: 'var(--ds-btn-destructive-bg)',  color: 'var(--ds-red-6)',    hoverBg: 'var(--ds-btn-destructive-hover)' },
  outline:     { bg: 'transparent',                   color: 'var(--ds-blue-6)',   border: '1px solid var(--ds-blue-6)', hoverBg: 'var(--ds-btn-ghost-hover)' },
  ghost:       { bg: 'transparent',                   color: 'var(--ds-blue-6)',   hoverBg: 'var(--ds-btn-ghost-hover)' },
};

export interface DSButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  iconOnly?: boolean;
  loading?: boolean;
  children?: ReactNode;
}

export const DSButton = forwardRef<HTMLButtonElement, DSButtonProps>(
  ({ variant = 'primary', size = 'md', leftIcon, rightIcon, iconOnly = false, loading = false, disabled, className, children, style: styleProp, onMouseEnter, onMouseLeave, ...rest }, ref) => {
    const s = SIZES[size];
    const v = VARIANTS[variant];
    const isDisabled = disabled || loading;
    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!isDisabled) setHovered(true);
      onMouseEnter?.(e);
    };
    const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
      setHovered(false);
      onMouseLeave?.(e);
    };

    const iconWrapStyle: React.CSSProperties = {
      flexShrink: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: s.iconSize,
      height: s.iconSize,
    };

    return (
      <button
        ref={ref}
        type="button"
        disabled={isDisabled}
        className={className}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 8,
          fontWeight: 600,
          whiteSpace: 'nowrap',
          transition: 'background-color 150ms ease, opacity 150ms ease',
          cursor: isDisabled ? 'not-allowed' : 'pointer',
          height: s.height,
          padding: iconOnly ? 0 : `0 ${s.px}px`,
          width: iconOnly ? s.height : undefined,
          gap: s.gap,
          fontSize: s.fontSize,
          lineHeight: s.lineHeight,
          textTransform: s.uppercase ? 'uppercase' : 'none',
          backgroundColor: hovered && !isDisabled ? v.hoverBg : v.bg,
          color: v.color,
          border: v.border || 'none',
          outline: 'none',
          opacity: isDisabled ? 0.3 : 1,
          ...styleProp,
        }}
        {...rest}
      >
        {/* Loading spinner */}
        {loading && (
          <svg
            style={{ flexShrink: 0, width: s.iconSize, height: s.iconSize, animation: 'spin 1s linear infinite' }}
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" opacity={0.25} />
            <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" opacity={0.75} />
          </svg>
        )}

        {!loading && leftIcon && <span style={iconWrapStyle} aria-hidden="true">{leftIcon}</span>}
        {!iconOnly && children && <span>{children}</span>}
        {iconOnly && !loading && children && <span style={iconWrapStyle} aria-hidden="true">{children}</span>}
        {!loading && rightIcon && !iconOnly && <span style={iconWrapStyle} aria-hidden="true">{rightIcon}</span>}
      </button>
    );
  },
);

DSButton.displayName = 'DSButton';
