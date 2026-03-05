import React, { forwardRef, useId, useState, type InputHTMLAttributes, type ReactNode } from 'react';

/* ═══════════════════════════════════════════════════════
   DSCheckbox — Checkbox Component (Mantine migration)
   ═══════════════════════════════════════════════════════ */

type CheckboxSize = 'md' | 'sm';

interface SizeConfig {
  boxSize: number;
  borderRadius: number;
  check: { viewBox: string; d: string; strokeWidth: number };
  dash: { viewBox: string; d: string; strokeWidth: number };
  iconSize: number;
  labelFontSize: number;
  labelLineHeight: string;
}

const SIZES: Record<CheckboxSize, SizeConfig> = {
  md: {
    boxSize: 16,
    borderRadius: 4,
    check: { viewBox: '0 0 10 8', d: 'M1 4.5L3.5 7L9 1', strokeWidth: 1.5 },
    dash: { viewBox: '0 0 10 2', d: 'M1 1L9 1', strokeWidth: 1.5 },
    iconSize: 10,
    labelFontSize: 14,
    labelLineHeight: '20px',
  },
  sm: {
    boxSize: 12,
    borderRadius: 3,
    check: { viewBox: '0 0 8 6', d: 'M0.8 3L2.6 4.8L7.2 0.8', strokeWidth: 1.2 },
    dash: { viewBox: '0 0 8 2', d: 'M1 1L7 1', strokeWidth: 1.2 },
    iconSize: 8,
    labelFontSize: 12,
    labelLineHeight: '16px',
  },
};

export interface DSCheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'checked' | 'onChange' | 'size' | 'type'> {
  checked?: boolean | 'indeterminate';
  onChange?: (checked: boolean) => void;
  size?: CheckboxSize;
  label?: ReactNode;
}

export const DSCheckbox = forwardRef<HTMLInputElement, DSCheckboxProps>(
  ({ checked = false, onChange, size = 'md', disabled = false, label, className, id: idProp, ...rest }, ref) => {
    const autoId = useId();
    const id = idProp ?? autoId;
    const s = SIZES[size];
    const [hovered, setHovered] = useState(false);

    const isChecked = checked === true;
    const isIndeterminate = checked === 'indeterminate';
    const isFilled = isChecked || isIndeterminate;

    const handleChange = () => {
      if (disabled) return;
      onChange?.(!isChecked);
    };

    return (
      <label
        htmlFor={id}
        className={className}
        onMouseEnter={() => !disabled && setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: label ? 8 : 0,
          cursor: disabled ? 'not-allowed' : 'pointer',
          userSelect: 'none',
        }}
      >
        {/* Hidden native input */}
        <input
          ref={ref}
          type="checkbox"
          id={id}
          checked={isChecked}
          disabled={disabled}
          onChange={handleChange}
          style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap', borderWidth: 0 }}
          aria-checked={isIndeterminate ? 'mixed' : isChecked}
          {...rest}
        />

        {/* Custom visual box */}
        <span
          style={{
            position: 'relative',
            flexShrink: 0,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: s.boxSize,
            height: s.boxSize,
            borderRadius: s.borderRadius,
            transition: 'all 150ms ease',
            ...(isFilled
              ? { backgroundColor: 'var(--ds-blue-6)' }
              : { border: `1px solid ${hovered ? '#9CBAFF' : 'var(--ds-checkbox-border)'}` }
            ),
            ...(disabled
              ? { opacity: 0.5, cursor: 'not-allowed', ...(!isFilled ? { backgroundColor: 'var(--ds-border-primary)' } : {}) }
              : {}
            ),
          }}
        >
          {isChecked && (
            <svg viewBox={s.check.viewBox} fill="none" style={{ width: s.iconSize, height: s.iconSize }} aria-hidden="true">
              <path d={s.check.d} stroke="white" strokeWidth={s.check.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
          {isIndeterminate && (
            <svg viewBox={s.dash.viewBox} fill="none" style={{ width: s.iconSize, height: 2 }} aria-hidden="true">
              <path d={s.dash.d} stroke="white" strokeWidth={s.dash.strokeWidth} strokeLinecap="round" />
            </svg>
          )}
        </span>

        {/* Label */}
        {label && (
          <span
            style={{
              color: 'var(--ds-text-primary)',
              fontSize: s.labelFontSize,
              lineHeight: s.labelLineHeight,
              ...(disabled ? { opacity: 0.5 } : {}),
            }}
          >
            {label}
          </span>
        )}
      </label>
    );
  },
);

DSCheckbox.displayName = 'DSCheckbox';