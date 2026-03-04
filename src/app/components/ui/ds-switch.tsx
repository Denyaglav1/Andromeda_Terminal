import React, { forwardRef, type ReactNode } from 'react';

/* ═══════════════════════════════════════════════════════
   DSSwitch — Toggle Switch Component (theme-aware)
   Uses CSS variables for automatic light/dark adaptation.
   ═══════════════════════════════════════════════════════ */

type SwitchSize = 'lg' | 'md' | 'sm';

interface SizeConfig {
  trackW: number;
  trackH: number;
  thumbSize: number;
  padding: number;
  travel: number;
  labelFontSize: number;
  labelLineHeight: string;
}

const SIZES: Record<SwitchSize, SizeConfig> = {
  lg: { trackW: 36, trackH: 20, thumbSize: 16, padding: 2, travel: 16, labelFontSize: 14, labelLineHeight: '20px' },
  md: { trackW: 27, trackH: 16, thumbSize: 12, padding: 2, travel: 11, labelFontSize: 12, labelLineHeight: '16px' },
  sm: { trackW: 20, trackH: 12, thumbSize: 9, padding: 1.5, travel: 8, labelFontSize: 12, labelLineHeight: '16px' },
};

export interface DSSwitchProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  size?: SwitchSize;
  label?: ReactNode;
  disabled?: boolean;
  className?: string;
}

export const DSSwitch = forwardRef<HTMLButtonElement, DSSwitchProps>(
  ({ checked = false, onChange, size = 'lg', label, disabled = false, className }, ref) => {
    const s = SIZES[size];

    const handleClick = () => {
      if (disabled) return;
      onChange?.(!checked);
    };

    return (
      <label
        className={className}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: label ? 8 : 0,
          cursor: disabled ? 'not-allowed' : 'pointer',
          userSelect: 'none',
        }}
      >
        <button
          ref={ref}
          type="button"
          role="switch"
          aria-checked={checked}
          disabled={disabled}
          onClick={handleClick}
          style={{
            position: 'relative',
            display: 'inline-flex',
            alignItems: 'center',
            flexShrink: 0,
            borderRadius: 9999,
            transition: 'all 150ms ease',
            width: s.trackW,
            height: s.trackH,
            padding: s.padding,
            backgroundColor: checked ? 'var(--ds-blue-6)' : 'transparent',
            border: checked ? '1px solid transparent' : '1px solid var(--ds-switch-off-border)',
            opacity: disabled ? 0.5 : 1,
            cursor: disabled ? 'not-allowed' : 'pointer',
            outline: 'none',
          }}
        >
          <span
            style={{
              display: 'block',
              borderRadius: 9999,
              width: s.thumbSize,
              height: s.thumbSize,
              transition: 'transform 150ms ease',
              backgroundColor: checked ? 'white' : disabled ? 'var(--ds-switch-disabled-thumb)' : 'var(--ds-switch-off-thumb)',
              transform: checked ? `translateX(${s.travel}px)` : 'translateX(0)',
            }}
          />
        </button>

        {label && (
          <span
            style={{
              color: 'var(--ds-text-primary)',
              fontSize: s.labelFontSize,
              lineHeight: s.labelLineHeight,
              opacity: disabled ? 0.5 : 1,
            }}
          >
            {label}
          </span>
        )}
      </label>
    );
  },
);

DSSwitch.displayName = 'DSSwitch';
