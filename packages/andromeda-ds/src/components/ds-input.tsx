import React, { forwardRef, useId, useState, type ReactNode } from 'react';

/* ═══════════════════════════════════════════
   DSInput — Input Field Component (theme-aware)
   Uses CSS variables for automatic light/dark adaptation.
   ═══════════════════════════════════════════ */

type InputSize = 'lg' | 'md' | 'sm' | 'xs' | 'xxs';

interface SizeConfig {
  height: number | undefined;
  px: number;
  iconSize: number;
  iconGap: number;
  fontSize: number;
  lineHeight: string;
  rightPl: number;
  labelFontSize: number;
  labelLineHeight: string;
  infoIconSize: number;
}

const SIZE_MAP: Record<InputSize, SizeConfig> = {
  lg: { height: 56, px: 16, iconSize: 24, iconGap: 12, fontSize: 18, lineHeight: '28px', rightPl: 16, labelFontSize: 16, labelLineHeight: '24px', infoIconSize: 16 },
  md: { height: 48, px: 12, iconSize: 20, iconGap: 8, fontSize: 16, lineHeight: '24px', rightPl: 12, labelFontSize: 14, labelLineHeight: '20px', infoIconSize: 16 },
  sm: { height: 40, px: 12, iconSize: 18, iconGap: 8, fontSize: 14, lineHeight: '20px', rightPl: 12, labelFontSize: 12, labelLineHeight: '16px', infoIconSize: 12 },
  xs: { height: 32, px: 8, iconSize: 16, iconGap: 6, fontSize: 12, lineHeight: '16px', rightPl: 8, labelFontSize: 12, labelLineHeight: '16px', infoIconSize: 12 },
  xxs: { height: undefined, px: 8, iconSize: 12, iconGap: 6, fontSize: 10, lineHeight: '16px', rightPl: 8, labelFontSize: 10, labelLineHeight: '16px', infoIconSize: 12 },
};

function InfoIcon({ size }: { size: number }) {
  return (
    <svg fill="none" viewBox="0 0 12 12" style={{ width: size, height: size, flexShrink: 0 }}>
      <path
        d="M4.6905 4.65C4.7963 4.34925 5.00512 4.09565 5.27998 3.93411C5.55484 3.77257 5.878 3.71352 6.19223 3.76742C6.50646 3.82132 6.79147 3.98469 6.99678 4.22859C7.2021 4.47249 7.31447 4.78118 7.314 5.1C7.314 6 5.964 6.45 5.964 6.45M6 8.25H6.0045M10.5 6C10.5 8.48528 8.48528 10.5 6 10.5C3.51472 10.5 1.5 8.48528 1.5 6C1.5 3.51472 3.51472 1.5 6 1.5C8.48528 1.5 10.5 3.51472 10.5 6Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type ValidationState = 'default' | 'error' | 'success' | 'warning';

export interface DSInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: InputSize;
  label?: string;
  required?: boolean;
  showInfoIcon?: boolean;
  infoTooltip?: string;
  leftIcon?: ReactNode;
  rightElement?: ReactNode;
  helperText?: string;
  errorText?: string;
  successText?: string;
  /** Shorthand for errorText */
  error?: string;
  /** Shorthand for successText */
  success?: string;
  validationState?: ValidationState;
  wrapperClassName?: string;
  inputClassName?: string;
}

/* Accent colors stay constant across themes; default border adapts */
const VALIDATION_COLORS: Record<ValidationState, string> = {
  default: 'var(--ds-text-primary)',
  error: 'var(--ds-red-6)',
  success: 'var(--ds-green-6)',
  warning: 'var(--ds-orange-6)',
};

const BORDER_COLORS: Record<ValidationState, string> = {
  default: 'var(--ds-border-primary)',
  error: 'var(--ds-red-6)',
  success: 'var(--ds-green-6)',
  warning: 'rgba(248,125,55,0.5)',
};

export const DSInput = forwardRef<HTMLInputElement, DSInputProps>(
  ({
    size = 'md', label, required = false, showInfoIcon = false, infoTooltip,
    leftIcon, rightElement, helperText, errorText: errorTextProp, successText: successTextProp,
    error, success,
    validationState: validationStateProp, wrapperClassName, inputClassName,
    className, disabled = false, readOnly = false, id: idProp, ...inputProps
  }, ref) => {
    const autoId = useId();
    const id = idProp || autoId;
    const cfg = SIZE_MAP[size];
    const [hovered, setHovered] = useState(false);

    const errorText = errorTextProp || error;
    const successText = successTextProp || success;
    const validationState: ValidationState = validationStateProp || (errorText ? 'error' : successText ? 'success' : 'default');
    const bottomText = errorText || successText || helperText;
    const fontFeature: React.CSSProperties = { fontFeatureSettings: "'lnum', 'tnum'" };
    const borderColor = validationState !== 'default' ? BORDER_COLORS[validationState] : hovered && !disabled ? 'rgba(90,140,255,0.5)' : BORDER_COLORS.default;

    return (
      <div className={wrapperClassName} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        {/* Label row */}
        {label && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <label
              htmlFor={id}
              style={{
                fontWeight: 400,
                color: 'var(--ds-text-primary)',
                whiteSpace: 'nowrap',
                fontSize: cfg.labelFontSize,
                lineHeight: cfg.labelLineHeight,
                ...fontFeature,
              }}
            >
              {label}
            </label>
            {required && (
              <span style={{ fontWeight: 400, color: 'var(--ds-red-6)', whiteSpace: 'nowrap', fontSize: cfg.labelFontSize, lineHeight: cfg.labelLineHeight }}>
                *
              </span>
            )}
            {showInfoIcon && (
              <span style={{ color: 'var(--ds-text-gray-dark)', cursor: 'help' }} title={infoTooltip}>
                <InfoIcon size={cfg.infoIconSize} />
              </span>
            )}
          </div>
        )}

        {/* Input field */}
        <div
          className={className}
          onMouseEnter={() => !disabled && setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            position: 'relative',
            borderRadius: 8,
            flexShrink: 0,
            width: '100%',
            height: cfg.height,
            opacity: disabled ? 0.5 : 1,
            cursor: disabled ? 'not-allowed' : undefined,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', overflow: 'hidden', borderRadius: 'inherit', width: '100%', height: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center', width: '100%', height: '100%', padding: `0 ${cfg.px}px` }}>
              {leftIcon && (
                <div style={{ display: 'flex', alignItems: 'center', flexShrink: 0, color: 'var(--ds-text-primary)', width: cfg.iconSize, height: cfg.iconSize, marginRight: cfg.iconGap }}>
                  {leftIcon}
                </div>
              )}
              <input
                ref={ref}
                id={id}
                disabled={disabled}
                readOnly={readOnly}
                className={inputClassName}
                style={{
                  flex: 1,
                  minWidth: 0,
                  background: 'transparent',
                  outline: 'none',
                  border: 'none',
                  fontWeight: 400,
                  color: 'var(--ds-text-primary)',
                  fontSize: cfg.fontSize,
                  lineHeight: cfg.lineHeight,
                  cursor: disabled ? 'not-allowed' : undefined,
                  ...fontFeature,
                }}
                {...inputProps}
              />
              {rightElement && (
                <div style={{ display: 'flex', alignItems: 'center', flexShrink: 0, color: 'var(--ds-text-primary)', whiteSpace: 'nowrap', fontSize: cfg.fontSize, lineHeight: cfg.lineHeight, paddingLeft: cfg.rightPl, ...fontFeature }}>
                  {rightElement}
                </div>
              )}
            </div>
          </div>

          {/* Border overlay */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: 8,
              border: `1px solid ${borderColor}`,
              pointerEvents: 'none',
              transition: 'border-color 150ms ease',
            }}
          />
        </div>

        {/* Helper / Error / Success text */}
        {bottomText && (
          <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
            <span style={{ fontWeight: 400, fontSize: 12, lineHeight: '16px', color: VALIDATION_COLORS[validationState], ...fontFeature }}>
              {bottomText}
            </span>
          </div>
        )}
      </div>
    );
  },
);

DSInput.displayName = 'DSInput';