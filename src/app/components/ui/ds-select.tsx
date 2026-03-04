import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import { createPortal } from 'react-dom';

/* ═══════════════════════════════════════════
   DSSelect — Design System Select (Mantine migration)
   ═══════════════════════════════════════════ */

function ChevronIcon({ size = 12, style }: { size?: number; style?: React.CSSProperties }) {
  return (
    <svg fill="none" viewBox="0 0 9 5" style={{ flexShrink: 0, width: size, height: size, ...style }}>
      <path d="M0.5 0.5L4.5 4.5L8.5 0.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

type SelectSize = 'xs' | 'sm' | 'md' | 'lg';

interface SizeCfg {
  height: number;
  padLeft: number;
  fontSize: number;
  lineHeight: string;
  labelFontSize: number;
  chevronBox: number;
  chevronIcon: number;
  itemPadX: number;
  itemPadY: number;
  itemFontSize: number;
  itemLineHeight: string;
}

const SC: Record<SelectSize, SizeCfg> = {
  xs: { height: 32, padLeft: 10, fontSize: 12, lineHeight: '16px', labelFontSize: 10, chevronBox: 32, chevronIcon: 10, itemPadX: 8, itemPadY: 4, itemFontSize: 12, itemLineHeight: '16px' },
  sm: { height: 40, padLeft: 12, fontSize: 14, lineHeight: '20px', labelFontSize: 12, chevronBox: 42, chevronIcon: 12, itemPadX: 8, itemPadY: 4, itemFontSize: 14, itemLineHeight: '20px' },
  md: { height: 48, padLeft: 12, fontSize: 16, lineHeight: '24px', labelFontSize: 14, chevronBox: 48, chevronIcon: 13, itemPadX: 8, itemPadY: 8, itemFontSize: 14, itemLineHeight: '20px' },
  lg: { height: 56, padLeft: 12, fontSize: 18, lineHeight: '28px', labelFontSize: 16, chevronBox: 56, chevronIcon: 15, itemPadX: 8, itemPadY: 8, itemFontSize: 14, itemLineHeight: '20px' },
};

export interface DSSelectOption {
  value: string;
  label: string;
  description?: string;
  icon?: ReactNode;
  disabled?: boolean;
  group?: string;
}

export interface DSSelectProps {
  size?: SelectSize;
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  options: DSSelectOption[];
  disabled?: boolean;
  error?: string;
  success?: string;
  className?: string;
  triggerClassName?: string;
  dropdownClassName?: string;
  dropdownMinWidth?: number | string;
  renderValue?: (option: DSSelectOption | undefined) => ReactNode;
  maxVisibleItems?: number;
}

interface SelectCtx {
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
  value?: string;
  onChange?: (v: string) => void;
  size: SelectSize;
  openUp: boolean;
  rootRef: React.RefObject<HTMLDivElement | null>;
  dropdownRef: React.RefObject<HTMLDivElement | null>;
}

const SelectContext = createContext<SelectCtx>({
  isOpen: false, setIsOpen: () => {}, size: 'sm', openUp: false,
  rootRef: { current: null }, dropdownRef: { current: null },
});

function useDropdownPosition(triggerRef: React.RefObject<HTMLElement | null>, isOpen: boolean, maxH: number) {
  const [pos, setPos] = useState<{ top: number; left: number; width: number; openUp: boolean } | null>(null);
  useLayoutEffect(() => {
    if (!isOpen || !triggerRef.current) { setPos(null); return; }
    const update = () => {
      const rect = triggerRef.current!.getBoundingClientRect();
      const below = window.innerHeight - rect.bottom;
      const above = rect.top;
      const up = below < maxH + 8 && above > below;
      setPos({ top: up ? rect.top - 2 : rect.bottom + 2, left: rect.left, width: rect.width, openUp: up });
    };
    update();
    window.addEventListener('scroll', update, true);
    window.addEventListener('resize', update);
    return () => { window.removeEventListener('scroll', update, true); window.removeEventListener('resize', update); };
  }, [isOpen, maxH, triggerRef]);
  return pos;
}

const tnum: React.CSSProperties = { fontFeatureSettings: "'lnum', 'tnum'" };

export function DSSelect({
  size = 'sm', label, placeholder = 'Выберите...', value, onChange, options,
  disabled = false, error, success, className, triggerClassName, dropdownClassName,
  dropdownMinWidth, renderValue, maxVisibleItems = 8,
}: DSSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerBtnRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const cfg = SC[size];
  const id = useId();
  const selectedOption = options.find(o => o.value === value);

  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: MouseEvent) => {
      const t = e.target as Node;
      if (rootRef.current && !rootRef.current.contains(t) && (!dropdownRef.current || !dropdownRef.current.contains(t))) setIsOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const h = (e: KeyboardEvent) => { if (e.key === 'Escape') setIsOpen(false); };
    document.addEventListener('keydown', h);
    return () => document.removeEventListener('keydown', h);
  }, [isOpen]);

  const handleSelect = useCallback((v: string) => { onChange?.(v); setIsOpen(false); }, [onChange]);
  const grouped = groupOptions(options);
  const itemH = size === 'xs' || size === 'sm' ? 28 : 36;
  const maxDH = itemH * maxVisibleItems + 8;
  const portalPos = useDropdownPosition(triggerBtnRef, isOpen, maxDH);

  const borderColor = disabled ? 'var(--ds-border-primary)' : error ? 'var(--ds-red-6)' : success ? 'var(--ds-green-6)' : isOpen ? 'var(--ds-blue-6)' : 'var(--ds-border-primary)';

  return (
    <div className={className} ref={rootRef} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      {label && (
        <label htmlFor={id} style={{ fontSize: cfg.labelFontSize, lineHeight: '16px', fontWeight: 400, color: 'var(--ds-text-primary)', ...tnum }}>
          {label}
        </label>
      )}

      <button
        ref={triggerBtnRef}
        id={id}
        type="button"
        disabled={disabled}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        className={triggerClassName}
        style={{
          position: 'relative', display: 'flex', alignItems: 'center', width: '100%',
          borderRadius: 8, border: `1px solid ${borderColor}`, height: cfg.height,
          transition: 'border-color 150ms ease', background: 'none', outline: 'none',
          opacity: disabled ? 0.5 : 1, cursor: disabled ? 'not-allowed' : 'pointer',
        }}
      >
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', overflow: 'hidden', paddingLeft: cfg.padLeft }}>
          <span style={{ fontSize: cfg.fontSize, lineHeight: cfg.lineHeight, fontWeight: 400, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', color: selectedOption ? 'var(--ds-text-primary)' : 'rgba(103,124,156,0.3)', ...tnum }}>
            {renderValue ? renderValue(selectedOption) : selectedOption ? selectedOption.label : placeholder}
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: 'var(--ds-blue-6)', width: cfg.chevronBox, height: cfg.chevronBox }}>
          <ChevronIcon size={cfg.chevronIcon} style={{ transition: 'transform 200ms ease', transform: isOpen ? 'rotate(180deg)' : 'none' }} />
        </div>
      </button>

      {isOpen && !disabled && portalPos && createPortal(
        <div
          ref={dropdownRef}
          className={dropdownClassName}
          style={{
            position: 'fixed', zIndex: 9999, backgroundColor: 'var(--ds-bg-primary)', border: '1px solid var(--ds-border-primary)',
            borderRadius: 8, boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
            top: portalPos.openUp ? undefined : portalPos.top,
            bottom: portalPos.openUp ? window.innerHeight - portalPos.top : undefined,
            left: portalPos.left, width: dropdownMinWidth || portalPos.width,
          }}
        >
          <div style={{ padding: 4, overflow: 'auto', maxHeight: maxDH }}>
            {grouped.map(group => (
              <div key={group.key}>
                {group.label && (
                  <div style={{ padding: '4px 8px', fontSize: 10, lineHeight: '16px', fontWeight: 600, color: 'var(--ds-turquoise-6)', textTransform: 'uppercase', letterSpacing: '0.05em', userSelect: 'none' }}>
                    {group.label}
                  </div>
                )}
                {group.items.map(option => (
                  <button
                    key={option.value}
                    type="button"
                    disabled={option.disabled}
                    onClick={() => !option.disabled && handleSelect(option.value)}
                    style={{
                      display: 'flex', alignItems: 'center', width: '100%', borderRadius: 4, overflow: 'hidden',
                      transition: 'background-color 150ms ease', padding: `${cfg.itemPadY}px ${cfg.itemPadX}px`,
                      background: option.value === value ? 'rgba(90,140,255,0.3)' : 'none',
                      border: 'none', outline: 'none', cursor: option.disabled ? 'not-allowed' : 'pointer',
                      opacity: option.disabled ? 0.4 : 1, textAlign: 'left',
                    }}
                  >
                    {option.icon && <span style={{ flexShrink: 0, marginRight: 8, display: 'flex', alignItems: 'center' }}>{option.icon}</span>}
                    <span style={{ fontSize: cfg.itemFontSize, lineHeight: cfg.itemLineHeight, fontWeight: 400, color: 'var(--ds-text-primary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', ...tnum }}>
                      {option.label}
                    </span>
                    {option.description && (
                      <span style={{ marginLeft: 'auto', fontSize: 10, color: 'var(--ds-text-gray-dark)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', paddingLeft: 8 }}>
                        {option.description}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>,
        document.body,
      )}

      {error && <span style={{ fontSize: 10, lineHeight: '16px', color: 'var(--ds-red-6)' }}>{error}</span>}
      {success && <span style={{ fontSize: 10, lineHeight: '16px', color: 'var(--ds-green-6)' }}>{success}</span>}
    </div>
  );
}

interface OptionGroup { key: string; label?: string; items: DSSelectOption[]; }

function groupOptions(options: DSSelectOption[]): OptionGroup[] {
  const groups: OptionGroup[] = [];
  let cur: OptionGroup | null = null;
  for (const o of options) {
    const k = o.group || '__default__';
    if (!cur || cur.key !== k) { cur = { key: k, label: o.group, items: [] }; groups.push(cur); }
    cur.items.push(o);
  }
  if (groups.length === 1 && groups[0].key === '__default__') groups[0].label = undefined;
  return groups;
}

/* ── Composable variants ── */

export interface DSSelectCustomProps {
  size?: SelectSize;
  label?: string;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  disabled?: boolean;
  error?: string;
  className?: string;
  children: ReactNode;
}

export function DSSelectCustom({ size = 'sm', label, isOpen, onOpenChange, disabled = false, error, className, children }: DSSelectCustomProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const cfg = SC[size];
  const id = useId();
  const [openUp, setOpenUp] = useState(false);

  useLayoutEffect(() => {
    if (!isOpen || !rootRef.current) { setOpenUp(false); return; }
    const rect = rootRef.current.getBoundingClientRect();
    setOpenUp(window.innerHeight - rect.bottom < 200 && rect.top > window.innerHeight - rect.bottom);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const h = (e: MouseEvent) => {
      const t = e.target as Node;
      if (rootRef.current && !rootRef.current.contains(t) && (!dropdownRef.current || !dropdownRef.current.contains(t))) onOpenChange(false);
    };
    document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, [isOpen, onOpenChange]);

  useEffect(() => {
    if (!isOpen) return;
    const h = (e: KeyboardEvent) => { if (e.key === 'Escape') onOpenChange(false); };
    document.addEventListener('keydown', h);
    return () => document.removeEventListener('keydown', h);
  }, [isOpen, onOpenChange]);

  return (
    <SelectContext.Provider value={{ isOpen, setIsOpen: onOpenChange, size, openUp, rootRef, dropdownRef }}>
      <div className={className} ref={rootRef} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        {label && <label htmlFor={id} style={{ fontSize: cfg.labelFontSize, lineHeight: '16px', fontWeight: 400, color: 'var(--ds-text-primary)' }}>{label}</label>}
        {children}
        {error && <span style={{ fontSize: 10, lineHeight: '16px', color: 'var(--ds-red-6)' }}>{error}</span>}
      </div>
    </SelectContext.Provider>
  );
}

export interface DSSelectTriggerProps { children: ReactNode; className?: string; focused?: boolean; }

export function DSSelectTrigger({ children, className, focused }: DSSelectTriggerProps) {
  const { isOpen, setIsOpen, size } = useContext(SelectContext);
  const cfg = SC[size];

  return (
    <button
      type="button"
      onClick={() => setIsOpen(!isOpen)}
      className={className}
      style={{
        position: 'relative', display: 'flex', alignItems: 'center', width: '100%',
        borderRadius: 8, border: `1px solid ${focused || isOpen ? 'var(--ds-blue-6)' : 'var(--ds-border-primary)'}`,
        height: cfg.height, transition: 'border-color 150ms ease', background: 'none', outline: 'none', cursor: 'pointer',
      }}
    >
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', overflow: 'hidden', paddingLeft: cfg.padLeft }}>
        <span style={{ fontSize: cfg.fontSize, lineHeight: cfg.lineHeight, fontWeight: 400, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', color: 'var(--ds-text-primary)', ...tnum }}>
          {children}
        </span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: 'var(--ds-blue-6)', width: cfg.chevronBox, height: cfg.chevronBox }}>
        <ChevronIcon size={cfg.chevronIcon} style={{ transition: 'transform 200ms ease', transform: isOpen ? 'rotate(180deg)' : 'none' }} />
      </div>
    </button>
  );
}

export interface DSSelectDropdownProps { children: ReactNode; className?: string; maxHeight?: number; }

export function DSSelectDropdown({ children, className, maxHeight = 280 }: DSSelectDropdownProps) {
  const { isOpen, openUp, rootRef, dropdownRef } = useContext(SelectContext);
  const [pos, setPos] = useState<{ top: number; left: number; width: number } | null>(null);

  useLayoutEffect(() => {
    if (!isOpen || !rootRef.current) { setPos(null); return; }
    const update = () => {
      const r = rootRef.current!.getBoundingClientRect();
      setPos({ top: r.bottom + 2, left: r.left, width: r.width });
    };
    update();
    window.addEventListener('scroll', update, true);
    window.addEventListener('resize', update);
    return () => { window.removeEventListener('scroll', update, true); window.removeEventListener('resize', update); };
  }, [isOpen, rootRef]);

  if (!isOpen || !pos) return null;

  return createPortal(
    <div
      ref={dropdownRef}
      className={className}
      style={{
        position: 'fixed', zIndex: 9999, backgroundColor: 'var(--ds-bg-primary)', border: '1px solid var(--ds-border-primary)',
        borderRadius: 8, boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
        top: openUp ? undefined : pos.top,
        bottom: openUp ? window.innerHeight - pos.top + 4 : undefined,
        left: pos.left, width: pos.width,
      }}
    >
      <div style={{ padding: 4, overflow: 'auto', maxHeight }}>{children}</div>
    </div>,
    document.body,
  );
}

export interface DSSelectItemProps { children: ReactNode; selected?: boolean; onClick?: () => void; className?: string; disabled?: boolean; }

export function DSSelectItem({ children, selected = false, onClick, className, disabled = false }: DSSelectItemProps) {
  const { size } = useContext(SelectContext);
  const cfg = SC[size];
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={className}
      style={{
        display: 'flex', alignItems: 'center', width: '100%', borderRadius: 4, overflow: 'hidden',
        transition: 'background-color 150ms ease', textAlign: 'left',
        padding: `${cfg.itemPadY}px ${cfg.itemPadX}px`,
        background: selected ? 'rgba(90,140,255,0.3)' : 'none',
        border: 'none', outline: 'none', cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.4 : 1,
      }}
    >
      <span style={{ fontSize: cfg.itemFontSize, lineHeight: cfg.itemLineHeight, fontWeight: 400, color: 'var(--ds-text-primary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', ...tnum }}>
        {children}
      </span>
    </button>
  );
}

export function DSSelectSeparator() {
  return <div style={{ height: 1, backgroundColor: 'var(--ds-border-primary)', margin: '4px 0' }} />;
}

export function DSSelectGroupHeader({ children }: { children: ReactNode }) {
  return (
    <div style={{ padding: '4px 8px', fontSize: 10, lineHeight: '16px', fontWeight: 600, color: 'var(--ds-text-gray-dark)', textTransform: 'uppercase', letterSpacing: '0.05em', userSelect: 'none' }}>
      {children}
    </div>
  );
}