import React, {
  createContext,
  useContext,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import { createPortal } from 'react-dom';
import * as RadixSlider from '@radix-ui/react-slider';
import { DSCalendar } from './ds-calendar';
import { DSTag } from './ds-tag';

/* ═══════════════════════════════════════════
   DSCustomDropdown — Composable Dropdown (Mantine migration)
   ═══════════════════════════════════════════ */

/* ─── Icons (inline SVGs from Figma) ─── */

function ChevronDownIcon({ size = 10, style }: { size?: number; style?: React.CSSProperties }) {
  return (
    <svg fill="none" viewBox="0 0 11.2 6.2" style={{ flexShrink: 0, width: size, height: size * 0.5, ...style }}>
      <path d="M0.6 0.6L5.6 5.6L10.6 0.6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
    </svg>
  );
}

function CloseIcon({ size = 9 }: { size?: number }) {
  return (
    <svg fill="none" viewBox="0 0 10.2 10.2" style={{ flexShrink: 0, width: size, height: size }}>
      <path d="M9.6 0.6L0.6 9.6M0.6 0.6L9.6 9.6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
    </svg>
  );
}

function SmallCloseIcon({ size = 6 }: { size?: number }) {
  return (
    <svg fill="none" viewBox="0 0 7.2 7.2" style={{ flexShrink: 0, width: size, height: size }}>
      <path d="M6.6 0.6L0.6 6.6M0.6 0.6L6.6 6.6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
    </svg>
  );
}

function SearchIcon({ size = 12 }: { size?: number }) {
  return (
    <svg fill="none" viewBox="0 0 10 10" style={{ flexShrink: 0, width: size, height: size }}>
      <path d="M9.5001 9.49998L7.3501 7.34998M8.5 4.5C8.5 6.70914 6.70914 8.5 4.5 8.5C2.29086 8.5 0.5 6.70914 0.5 4.5C0.5 2.29086 2.29086 0.5 4.5 0.5C6.70914 0.5 8.5 2.29086 8.5 4.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckIcon({ size = 10 }: { size?: number }) {
  return (
    <svg fill="none" viewBox="0 0 10 7" style={{ flexShrink: 0, width: size, height: size }}>
      <path d="M0.53 4.03L3.03 6.53L9.03 0.53" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
    </svg>
  );
}

/* ─── Context ─── */

interface DropdownCtx {
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
  triggerRef: React.RefObject<HTMLButtonElement | null> | any;
  panelRef: React.RefObject<HTMLDivElement | null> | any;
}

const DropdownContext = createContext<DropdownCtx>({
  isOpen: false, setIsOpen: () => { }, triggerRef: { current: null }, panelRef: { current: null },
});

/* ─── Portal position hook ─── */

function usePortalPosition(triggerRef: React.RefObject<HTMLElement | null>, isOpen: boolean, panelHeight: number) {
  const [pos, setPos] = useState<{ top: number; left: number; width: number; openUp: boolean } | null>(null);
  useLayoutEffect(() => {
    if (!isOpen || !triggerRef.current) { setPos(null); return; }
    const update = () => {
      const rect = triggerRef.current!.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;
      const spaceAbove = rect.top;
      const shouldOpenUp = spaceBelow < panelHeight + 8 && spaceAbove > spaceBelow;
      setPos({ top: shouldOpenUp ? rect.top - 2 : rect.bottom + 2, left: rect.left, width: rect.width, openUp: shouldOpenUp });
    };
    update();
    window.addEventListener('scroll', update, true);
    window.addEventListener('resize', update);
    return () => { window.removeEventListener('scroll', update, true); window.removeEventListener('resize', update); };
  }, [isOpen, panelHeight, triggerRef]);
  return pos;
}

const tnum: React.CSSProperties = { fontFeatureSettings: "'lnum', 'tnum'" };

/* ═══════ Root ═══════ */

export interface DSCustomDropdownProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  children: ReactNode;
  className?: string;
}

export function DSCustomDropdown({ isOpen, onOpenChange, children, className }: DSCustomDropdownProps) {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: MouseEvent) => {
      const target = e.target as Node;
      if (triggerRef.current && !triggerRef.current.contains(target) && (!panelRef.current || !panelRef.current.contains(target))) onOpenChange(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [isOpen, onOpenChange]);

  useEffect(() => {
    if (!isOpen) return;
    const h = (e: KeyboardEvent) => { if (e.key === 'Escape') onOpenChange(false); };
    document.addEventListener('keydown', h);
    return () => document.removeEventListener('keydown', h);
  }, [isOpen, onOpenChange]);

  return (
    <DropdownContext.Provider value={{ isOpen, setIsOpen: onOpenChange, triggerRef, panelRef }}>
      <div className={className} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>{children}</div>
    </DropdownContext.Provider>
  );
}

/* ═══════ Trigger ═══════ */

export interface DSCustomDropdownTriggerProps {
  children?: ReactNode;
  placeholder?: string;
  count?: number;
  onClear?: () => void;
  label?: string;
  disabled?: boolean;
  className?: string;
}

export function DSCustomDropdownTrigger({ children, placeholder = 'Placeholder', count, onClear, label, disabled = false, className }: DSCustomDropdownTriggerProps) {
  const { isOpen, setIsOpen, triggerRef } = useContext(DropdownContext);
  const id = useId();
  const hasValue = !!children;
  const [trigHovered, setTrigHovered] = useState(false);
  const borderColor = disabled ? 'var(--ds-border-primary)' : isOpen ? 'var(--ds-blue-6)' : trigHovered ? 'rgba(90,140,255,0.5)' : 'var(--ds-border-primary)';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      {label && (
        <label htmlFor={id} style={{ fontSize: 12, lineHeight: '16px', fontWeight: 400, color: 'var(--ds-text-primary)', ...tnum }}>
          {label}
        </label>
      )}
      <button
        ref={triggerRef}
        id={id}
        type="button"
        disabled={disabled}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        onMouseEnter={() => !disabled && setTrigHovered(true)}
        onMouseLeave={() => setTrigHovered(false)}
        className={className}
        style={{
          position: 'relative', display: 'flex', alignItems: 'center', width: '100%',
          height: 32, borderRadius: 8, border: `1px solid ${borderColor}`,
          transition: 'border-color 150ms ease', background: 'none', outline: 'none',
          opacity: disabled ? 0.5 : 1, cursor: disabled ? 'not-allowed' : 'pointer',
        }}
      >
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', overflow: 'hidden', paddingLeft: 8 }}>
          <span style={{ fontSize: 12, lineHeight: '16px', fontWeight: 400, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', color: hasValue ? 'var(--ds-text-primary)' : 'rgba(103,124,156,0.3)', ...tnum }}>
            {hasValue ? children : placeholder}
          </span>
          {count !== undefined && count > 0 && (
            <span style={{ fontSize: 12, lineHeight: '16px', fontWeight: 400, color: 'var(--ds-text-primary)', ...tnum }}>
              : {count}
            </span>
          )}
        </div>

        {onClear && hasValue && (
          <div style={{ display: 'flex', alignItems: 'center', paddingLeft: 4, flexShrink: 0 }} onClick={e => { e.stopPropagation(); onClear(); }} role="button" tabIndex={-1}>
            <div style={{ backgroundColor: 'var(--ds-bg-badge)', borderRadius: 2, width: 12, height: 12, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <SmallCloseIcon size={6} />
            </div>
          </div>
        )}

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: 'var(--ds-blue-6)', width: 32, height: 32 }}>
          <ChevronDownIcon size={10} style={{ transition: 'transform 200ms ease', transform: isOpen ? 'rotate(180deg)' : 'none' }} />
        </div>
      </button>
    </div>
  );
}

/* ═══════ Panel ═══════ */

export interface DSCustomDropdownPanelProps {
  children: ReactNode;
  className?: string;
  minWidth?: number;
  maxHeight?: number;
}

export function DSCustomDropdownPanel({ children, className, minWidth, maxHeight = 380 }: DSCustomDropdownPanelProps) {
  const { isOpen, triggerRef, panelRef } = useContext(DropdownContext);
  const pos = usePortalPosition(triggerRef, isOpen, maxHeight);

  if (!isOpen || !pos) return null;

  return createPortal(
    <div
      ref={panelRef}
      className={className}
      style={{
        position: 'fixed', zIndex: 9999, backgroundColor: 'var(--ds-bg-secondary)',
        borderRadius: 8, overflow: 'hidden',
        border: '1px solid var(--ds-border-primary)', boxShadow: '0 4px 16px 0 rgba(0,0,0,0.08)',
        top: pos.openUp ? undefined : pos.top,
        bottom: pos.openUp ? window.innerHeight - pos.top : undefined,
        left: pos.left, width: minWidth || pos.width,
      }}
    >
      {children}
    </div>,
    document.body,
  );
}

/* ═══════ Header ═══════ */

export interface DSCustomDropdownSegment { value: string; label: string; }

export interface DSCustomDropdownHeaderProps {
  title?: string;
  showSearch?: boolean;
  searchValue?: string;
  onSearchChange?: (value: string) => void;
  searchPlaceholder?: string;
  segments?: DSCustomDropdownSegment[];
  segmentValue?: string;
  onSegmentChange?: (value: string) => void;
  children?: ReactNode;
  className?: string;
}

export function DSCustomDropdownHeader({
  title, showSearch = false, searchValue = '', onSearchChange, searchPlaceholder = 'Начните вводить',
  segments, segmentValue, onSegmentChange, children, className,
}: DSCustomDropdownHeaderProps) {
  const { setIsOpen } = useContext(DropdownContext);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => { setIsDragging(false); };
  const handleMouseUp = () => { setIsDragging(false); };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div
      className={className}
      style={{ backgroundColor: 'var(--ds-bg-secondary)', borderBottom: '1px solid var(--ds-border-primary)', display: 'flex', flexDirection: 'column', padding: '12px', gap: 0, width: '100%', minWidth: 0 }}
    >
      {title && (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 0' }}>
          <span style={{ fontSize: 14, lineHeight: '20px', fontWeight: 600, color: 'var(--ds-text-primary)' }}>{title}</span>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            style={{ width: 16, height: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--ds-text-gray-dark)', background: 'none', border: 'none', cursor: 'pointer', transition: 'color 150ms ease' }}
          >
            <CloseIcon size={9} />
          </button>
        </div>
      )}

      {showSearch && (
        <div style={{ position: 'relative', borderRadius: 8, border: '1px solid var(--ds-border-primary)' }}>
          <div style={{ display: 'flex', alignItems: 'center', padding: '0 8px', height: 32, gap: 8 }}>
            <SearchIcon size={12} />
            <input
              type="text"
              value={searchValue}
              onChange={e => onSearchChange?.(e.target.value)}
              placeholder={searchPlaceholder}
              style={{ flex: 1, background: 'transparent', fontSize: 12, lineHeight: '16px', fontWeight: 400, color: 'var(--ds-text-primary)', outline: 'none', border: 'none', minWidth: 0, ...tnum }}
              autoFocus
            />
            {searchValue && (
              <button type="button" onClick={() => onSearchChange?.('')} style={{ flexShrink: 0, color: 'var(--ds-text-gray-dark)', background: 'none', border: 'none', cursor: 'pointer' }}>
                <SmallCloseIcon size={8} />
              </button>
            )}
          </div>
        </div>
      )}

      {segments && segments.length > 0 && (
        <div
          ref={scrollRef}
          className="ds-hide-scrollbar"
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          style={{
            display: 'flex', alignItems: 'center', gap: 3, paddingTop: 8,
            overflowX: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none' as const,
            width: '100%', minWidth: 0, cursor: isDragging ? 'grabbing' : 'pointer',
            userSelect: isDragging ? 'none' : 'auto'
          }}
          onWheel={(e) => {
            if (e.currentTarget) {
              e.currentTarget.scrollLeft += e.deltaY;
            }
          }}
        >
          <style dangerouslySetInnerHTML={{ __html: '.ds-hide-scrollbar::-webkit-scrollbar { display: none; }' }} />
          {segments.map(seg => {
            const isActive = segmentValue === seg.value;
            return (
              <button
                key={seg.value}
                type="button"
                onClick={() => onSegmentChange?.(seg.value)}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', height: 24, padding: '0 8px',
                  borderRadius: 8, flexShrink: 0, fontSize: 12, lineHeight: '16px', fontWeight: 400,
                  whiteSpace: 'nowrap', transition: 'all 150ms ease', cursor: 'pointer', border: 'none', outline: 'none',
                  backgroundColor: isActive ? 'var(--ds-blue-6)' : 'var(--ds-bg-primary)',
                  color: isActive ? 'white' : 'var(--ds-text-secondary)',
                }}
              >
                {seg.label}
              </button>
            );
          })}
        </div>
      )}

      {children}
    </div>
  );
}

/* ═══════ Content ═══════ */

export interface DSCustomDropdownContentProps { children: ReactNode; maxHeight?: number; className?: string; }

export function DSCustomDropdownContent({ children, maxHeight = 280, className }: DSCustomDropdownContentProps) {
  return <div className={className} style={{ overflowY: 'auto', maxHeight, backgroundColor: 'var(--ds-bg-secondary)' }}>{children}</div>;
}

/* ═══════ Group ═══════ */

export interface DSCustomDropdownGroupProps { title?: string; children: ReactNode; className?: string; }

export function DSCustomDropdownGroup({ title, children, className }: DSCustomDropdownGroupProps) {
  return (
    <div className={className} style={{ backgroundColor: 'var(--ds-bg-secondary)', borderBottom: '1px solid var(--ds-border-primary)' }}>
      <div style={{ display: 'flex', flexDirection: 'column', padding: 4 }}>
        {title && (
          <div style={{ padding: '6px 8px' }}>
            <span style={{ fontSize: 10, lineHeight: '16px', fontWeight: 400, color: 'var(--ds-text-secondary)' }}>{title}</span>
          </div>
        )}
        {children}
      </div>
    </div>
  );
}

/* ═══════ Item ═══════ */

export interface DSCustomDropdownItemProps {
  children: ReactNode;
  subtitle?: string;
  checkbox?: boolean;
  checked?: boolean;
  indeterminate?: boolean;
  expandable?: boolean;
  expanded?: boolean;
  onClick?: () => void;
  onExpand?: () => void;
  badge?: string;
  rightContent?: ReactNode;
  selected?: boolean;
  disabled?: boolean;
  className?: string;
}

export function DSCustomDropdownItem({
  children, subtitle, checkbox = false, checked = false, indeterminate = false,
  expandable = false, expanded = false, onClick, onExpand, badge, rightContent,
  selected = false, disabled = false, className,
}: DSCustomDropdownItemProps) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      role="button"
      tabIndex={disabled ? -1 : 0}
      onClick={() => !disabled && onClick?.()}
      onMouseEnter={() => !disabled && setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={className}
      style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px',
        borderRadius: 4, transition: 'background-color 150ms ease',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.4 : 1,
        backgroundColor: selected ? 'var(--ds-blue-6-a30)' : hovered ? 'var(--ds-blue-6-a10)' : 'transparent',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8, minWidth: 0, width: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0, paddingTop: subtitle ? 2 : 0 }}>
          {checkbox && (
            <DSCustomDropdownCheckbox checked={checked} indeterminate={indeterminate} onClick={e => { e.stopPropagation(); onClick?.(); }} />
          )}
          {expandable && (
            <button
              type="button"
              tabIndex={-1}
              onClick={e => { e.stopPropagation(); onExpand?.(); }}
              style={{ width: 16, height: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--ds-blue-6)', background: 'none', border: 'none', cursor: 'pointer' }}
            >
              <ChevronDownIcon size={10} style={{ transition: 'transform 200ms ease', transform: expanded ? 'rotate(180deg)' : 'none' }} />
            </button>
          )}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0, flex: 1 }}>
          <div style={{ fontSize: 14, lineHeight: '20px', fontWeight: 400, color: 'var(--ds-text-primary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', minWidth: 0, ...tnum }}>
            {children}
          </div>
          {subtitle && (
            <div style={{ fontSize: 12, lineHeight: '16px', fontWeight: 400, color: 'var(--ds-text-gray-dark)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', marginTop: 2, ...tnum }}>
              {subtitle}
            </div>
          )}
        </div>
      </div>
      {(badge || rightContent) && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0, marginLeft: 8 }}>
          {rightContent}
          {badge && <DSCustomDropdownBadge>{badge}</DSCustomDropdownBadge>}
        </div>
      )}
    </div>
  );
}

/* ═══════ Nested ═══════ */

export interface DSCustomDropdownNestedProps { expanded: boolean; children: ReactNode; className?: string; }

export function DSCustomDropdownNested({ expanded, children, className }: DSCustomDropdownNestedProps) {
  if (!expanded) return null;
  return <div className={className} style={{ paddingLeft: 24 }}>{children}</div>;
}

/* ═══════ Checkbox ═══════ */

export interface DSCustomDropdownCheckboxProps { checked?: boolean; indeterminate?: boolean; onClick?: (e: React.MouseEvent) => void; className?: string; }

export function DSCustomDropdownCheckbox({ checked = false, indeterminate = false, onClick, className }: DSCustomDropdownCheckboxProps) {
  return (
    <div
      role="checkbox"
      aria-checked={indeterminate ? 'mixed' : checked}
      tabIndex={-1}
      onClick={onClick}
      className={className}
      style={{
        width: 16, height: 16, borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0, border: `1px solid ${checked || indeterminate ? 'var(--ds-blue-6)' : 'var(--ds-border-primary)'}`,
        backgroundColor: checked || indeterminate ? 'var(--ds-blue-6)' : 'transparent',
        transition: 'all 150ms ease', cursor: 'pointer',
      }}
    >
      {checked && <CheckIcon size={10} />}
      {indeterminate && !checked && (
        <div style={{ width: 8, height: 2, backgroundColor: 'white', borderRadius: 9999 }} />
      )}
    </div>
  );
}

/* ═══════ Badge ═══════ */

export interface DSCustomDropdownBadgeProps { children: ReactNode; className?: string; }

export function DSCustomDropdownBadge({ children, className }: DSCustomDropdownBadgeProps) {
  return (
    <div className={className} style={{ backgroundColor: 'var(--ds-border-primary)', height: 17, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 4px', borderRadius: 4, maxWidth: 173 }}>
      <span style={{ fontSize: 10, lineHeight: '16px', fontWeight: 500, color: 'var(--ds-text-gray-dark)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', ...tnum }}>
        {children}
      </span>
    </div>
  );
}

/* ═══════ Separator ═══════ */

export function DSCustomDropdownSeparator({ className }: { className?: string }) {
  return <div className={className} style={{ height: 1, backgroundColor: 'var(--ds-border-primary)' }} />;
}

/* ═══════ Footer ═══════ */

export interface DSCustomDropdownFooterProps { children: ReactNode; className?: string; }

export function DSCustomDropdownFooter({ children, className }: DSCustomDropdownFooterProps) {
  return (
    <div className={className} style={{ backgroundColor: 'var(--ds-bg-secondary)', borderTop: '1px solid var(--ds-border-primary)', display: 'flex', alignItems: 'flex-start', gap: 8, padding: 12, boxShadow: '0 -4px 4px 0 rgba(0,32,51,0.04), 0 -8px 24px 0 rgba(0,32,51,0.12)' }}>
      {children}
    </div>
  );
}

/* ═══════ Footer buttons ═══════ */

export interface DSCustomDropdownFooterButtonProps {
  children: ReactNode;
  variant?: 'ghost' | 'primary';
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export function DSCustomDropdownFooterButton({ children, variant = 'ghost', onClick, disabled = false, className }: DSCustomDropdownFooterButtonProps) {
  const isPrimary = variant === 'primary';
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={className}
      style={{
        flex: 1, height: 32, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 12, lineHeight: '16px', fontWeight: 600, transition: 'all 150ms ease',
        cursor: disabled ? 'not-allowed' : 'pointer', outline: 'none',
        opacity: disabled ? 0.5 : 1,
        backgroundColor: isPrimary ? 'var(--ds-blue-6)' : 'var(--ds-bg-primary)',
        color: isPrimary ? 'white' : 'var(--ds-blue-6)',
        border: isPrimary ? 'none' : '1px solid var(--ds-border-primary)',
      }}
    >
      {children}
    </button>
  );
}

/* ═══════ Filter Trigger ═══════
   Compact pill-style trigger for filter dropdowns.
   States: default | open | active (has value) | active+open
   ══════════════════════════════ */

export interface DSCustomDropdownFilterTriggerProps {
  label: string;
  activeLabel?: string | null;
  onClear?: () => void;
  disabled?: boolean;
  className?: string;
}

export function DSCustomDropdownFilterTrigger({
  label, activeLabel, onClear, disabled = false, className,
}: DSCustomDropdownFilterTriggerProps) {
  const { isOpen, setIsOpen, triggerRef } = useContext(DropdownContext);
  const [hovered, setHovered] = useState(false);
  const isActive = !!activeLabel;

  return (
    <button
      ref={triggerRef}
      type="button"
      disabled={disabled}
      onClick={() => !disabled && setIsOpen(!isOpen)}
      onMouseEnter={() => !disabled && setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={className}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 4,
        height: 32, padding: '0 10px', borderRadius: 6,
        border: isActive ? '1px solid var(--ds-blue-6-a30)' : '1px solid var(--ds-border-primary)',
        backgroundColor: isActive
          ? 'var(--ds-blue-6-a10)'
          : (isOpen || hovered) ? 'var(--ds-control-hover)' : 'transparent',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.4 : 1,
        transition: 'background-color 100ms ease, border-color 100ms ease',
        outline: 'none', whiteSpace: 'nowrap', flexShrink: 0,
      }}
    >
      <span style={{
        fontSize: 12, lineHeight: '16px',
        color: isActive ? 'var(--ds-blue-6)' : 'var(--ds-text-primary)',
        fontWeight: isActive ? 600 : 400, ...tnum,
      }}>
        {label}{activeLabel ? `: ${activeLabel}` : ''}
      </span>

      {isActive && onClear && (
        <span
          role="button"
          tabIndex={-1}
          onClick={e => { e.stopPropagation(); onClear(); }}
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            width: 14, height: 14, borderRadius: '50%', cursor: 'pointer',
            color: 'var(--ds-blue-6)', marginLeft: 2, flexShrink: 0,
          }}
        >
          <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
            <path d="M1.5 1.5L6.5 6.5M6.5 1.5L1.5 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </span>
      )}

      <span style={{
        display: 'flex', alignItems: 'center',
        color: isActive ? 'var(--ds-blue-6)' : 'var(--ds-text-gray-dark)',
        transition: 'transform 150ms ease', transform: isOpen ? 'rotate(180deg)' : 'none',
        marginLeft: isActive ? 0 : 2, flexShrink: 0,
      }}>
        <ChevronDownIcon size={10} />
      </span>
    </button>
  );
}

/* ═══════ Range Content ═══════
   Slider (two thumbs) + two numeric inputs for range filters.
   Manages its own draft state; calls onApply / onReset.
   ══════════════════════════════ */

export interface DSCustomDropdownRangeContentProps {
  min: number;
  max: number;
  defaultValue?: [number, number] | null;
  step?: number;
  unit?: string;
  formatValue?: (v: number) => string;
  onApply: (value: [number, number]) => void;
  onReset: () => void;
  className?: string;
}

export function DSCustomDropdownRangeContent({
  min, max, defaultValue, step = 1, unit, formatValue, onApply, onReset, className,
}: DSCustomDropdownRangeContentProps) {
  const { setIsOpen } = useContext(DropdownContext);
  const [range, setRange] = useState<[number, number]>(defaultValue ?? [min, max]);
  const fmt = formatValue ?? String;

  const handleFrom = (raw: string) => {
    const n = Number(raw);
    if (!isNaN(n)) setRange([Math.max(min, Math.min(n, range[1])), range[1]]);
  };
  const handleTo = (raw: string) => {
    const n = Number(raw);
    if (!isNaN(n)) setRange([range[0], Math.min(max, Math.max(n, range[0]))]);
  };

  const inputStyle: React.CSSProperties = {
    flex: 1, height: 32, borderRadius: 6,
    border: '1px solid var(--ds-border-primary)',
    backgroundColor: 'var(--ds-bg-primary)', color: 'var(--ds-text-primary)',
    fontSize: 12, padding: '0 8px', outline: 'none', ...tnum,
  };

  return (
    <div className={className} style={{ display: 'flex', flexDirection: 'column', width: 280, padding: '16px 16px 12px', gap: 14 }}>
      <RadixSlider.Root
        min={min} max={max} step={step}
        value={range}
        onValueChange={v => setRange(v as [number, number])}
        style={{ position: 'relative', display: 'flex', alignItems: 'center', width: '100%', height: 20, cursor: 'pointer', userSelect: 'none' }}
      >
        <RadixSlider.Track style={{ position: 'relative', flexGrow: 1, height: 4, borderRadius: 2, backgroundColor: 'var(--ds-border-primary)' }}>
          <RadixSlider.Range style={{ position: 'absolute', height: '100%', borderRadius: 2, backgroundColor: 'var(--ds-blue-6)' }} />
        </RadixSlider.Track>
        {[0, 1].map(i => (
          <RadixSlider.Thumb key={i} style={{
            display: 'block', width: 14, height: 14, borderRadius: '50%',
            backgroundColor: 'var(--ds-blue-6)', border: '2px solid var(--ds-bg-secondary)',
            outline: 'none', cursor: 'grab', boxShadow: '0 1px 4px rgba(0,0,0,0.3)',
          }} />
        ))}
      </RadixSlider.Root>

      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <input type="number" value={range[0]} min={min} max={range[1]} step={step}
          onChange={e => handleFrom(e.target.value)} style={inputStyle} />
        <span style={{ fontSize: 12, color: 'var(--ds-text-gray-dark)', flexShrink: 0 }}>—</span>
        <input type="number" value={range[1]} min={range[0]} max={max} step={step}
          onChange={e => handleTo(e.target.value)} style={inputStyle} />
        {unit && <span style={{ fontSize: 11, color: 'var(--ds-text-gray-dark)', flexShrink: 0 }}>{unit}</span>}
      </div>

      <div style={{ fontSize: 11, color: 'var(--ds-text-gray-dark)', textAlign: 'center', ...tnum }}>
        {fmt(range[0])} — {fmt(range[1])}{unit ? ` ${unit}` : ''}
      </div>

      <DSCustomDropdownFooter>
        <DSCustomDropdownFooterButton variant="ghost" onClick={() => { setRange([min, max]); onReset(); }}>
          Сбросить
        </DSCustomDropdownFooterButton>
        <DSCustomDropdownFooterButton variant="primary" onClick={() => { onApply(range); setIsOpen(false); }}>
          Применить
        </DSCustomDropdownFooterButton>
      </DSCustomDropdownFooter>
    </div>
  );
}

/* ═══════ Date Content ═══════
   Two calendars (from / to) for date range filters.
   Manages its own draft state; calls onApply / onReset.
   ══════════════════════════════ */

export interface DSCustomDropdownDateContentProps {
  defaultValue?: [Date | null, Date | null];
  onApply: (value: [Date | null, Date | null]) => void;
  onReset: () => void;
  className?: string;
}

export function DSCustomDropdownDateContent({
  defaultValue, onApply, onReset, className,
}: DSCustomDropdownDateContentProps) {
  const { setIsOpen } = useContext(DropdownContext);
  const [from, setFrom] = useState<Date | null>(defaultValue?.[0] ?? null);
  const [to, setTo] = useState<Date | null>(defaultValue?.[1] ?? null);

  const labelStyle: React.CSSProperties = {
    fontSize: 10, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase',
    color: 'var(--ds-text-gray-dark)', padding: '8px 8px 4px',
  };

  return (
    <div className={className} style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex' }}>
        <div>
          <div style={labelStyle}>От</div>
          <DSCalendar value={from} onChange={setFrom} max={to ?? undefined} />
        </div>
        <div style={{ width: 1, backgroundColor: 'var(--ds-border-primary)', alignSelf: 'stretch' }} />
        <div>
          <div style={labelStyle}>До</div>
          <DSCalendar value={to} onChange={setTo} min={from ?? undefined} />
        </div>
      </div>
      <DSCustomDropdownFooter>
        <DSCustomDropdownFooterButton variant="ghost" onClick={() => { setFrom(null); setTo(null); onReset(); }}>
          Сбросить
        </DSCustomDropdownFooterButton>
        <DSCustomDropdownFooterButton variant="primary" onClick={() => { onApply([from, to]); setIsOpen(false); }}>
          Применить
        </DSCustomDropdownFooterButton>
      </DSCustomDropdownFooter>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   DSFilterSelect — Unified filter dropdown (checkbox | range | date)
   Built entirely on DSCustomDropdown sub-components.
   Trigger: DSCustomDropdownFilterTrigger (pill, inline-flex, h=32)
   Panel:   DSCustomDropdownPanel (Portal)
   Content: checkbox→DSCustomDropdownItem, range→RangeContent, date→DateContent
   Footer:  DSCustomDropdownFooter + DSCustomDropdownFooterButton
   ═══════════════════════════════════════════════════════════════════ */

export interface FilterOption {
  value: string;
  label: string;
}

export interface CheckboxFilterProps {
  type: 'checkbox';
  label: string;
  options: FilterOption[];
  value: string[];
  onApply: (value: string[]) => void;
  onClear: () => void;
  disabled?: boolean;
}

export interface RangeFilterProps {
  type: 'range';
  label: string;
  min: number;
  max: number;
  value: [number, number] | null;
  onApply: (value: [number, number]) => void;
  onClear: () => void;
  unit?: string;
  step?: number;
  formatValue?: (v: number) => string;
  disabled?: boolean;
}

export interface DateFilterProps {
  type: 'date';
  label: string;
  value: [Date | null, Date | null];
  onApply: (value: [Date | null, Date | null]) => void;
  onClear: () => void;
  disabled?: boolean;
}

export type DSFilterSelectProps = CheckboxFilterProps | RangeFilterProps | DateFilterProps;

/* ── Helpers ── */

function filterFormatDate(d: Date | null): string {
  if (!d) return '—';
  return `${String(d.getDate()).padStart(2, '0')}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getFullYear()).slice(2)}`;
}

function getFilterActiveLabel(props: DSFilterSelectProps): string | null {
  if (props.type === 'checkbox') {
    return props.value.length ? String(props.value.length) : null;
  }
  if (props.type === 'range') {
    if (!props.value) return null;
    const fmt = props.formatValue ?? String;
    const unit = props.unit ? ` ${props.unit}` : '';
    return `${fmt(props.value[0])}–${fmt(props.value[1])}${unit}`;
  }
  if (props.type === 'date') {
    const [from, to] = props.value;
    if (!from && !to) return null;
    return `${filterFormatDate(from)}–${filterFormatDate(to)}`;
  }
  return null;
}

/* ── Checkbox content with draft state ── */

function FilterCheckboxContent({ props, onClose }: { props: CheckboxFilterProps; onClose: () => void }) {
  const [draft, setDraft] = useState<string[]>(props.value);
  const toggle = (v: string) =>
    setDraft(prev => prev.includes(v) ? prev.filter(x => x !== v) : [...prev, v]);

  return (
    <>
      <DSCustomDropdownContent maxHeight={300}>
        <DSCustomDropdownGroup>
          {props.options.map(opt => (
            <DSCustomDropdownItem
              key={opt.value}
              checkbox
              checked={draft.includes(opt.value)}
              onClick={() => toggle(opt.value)}
            >
              {opt.label}
            </DSCustomDropdownItem>
          ))}
        </DSCustomDropdownGroup>
      </DSCustomDropdownContent>
      <DSCustomDropdownFooter>
        <DSCustomDropdownFooterButton variant="ghost" onClick={() => setDraft([])}>
          Сбросить
        </DSCustomDropdownFooterButton>
        <DSCustomDropdownFooterButton variant="primary" onClick={() => { props.onApply(draft); onClose(); }}>
          Применить
        </DSCustomDropdownFooterButton>
      </DSCustomDropdownFooter>
    </>
  );
}

/* ── Main component ── */

export function DSFilterSelect(props: DSFilterSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const activeLabel = getFilterActiveLabel(props);

  // For checkbox: show label as value + count; for range/date: show formatted range as value
  const isActive = activeLabel !== null;
  const triggerChildren = props.type === 'checkbox'
    ? (props.value.length > 0 ? props.label : undefined)
    : (activeLabel ?? undefined);
  const triggerCount = props.type === 'checkbox' && props.value.length > 0
    ? props.value.length
    : undefined;

  return (
    <DSCustomDropdown isOpen={isOpen} onOpenChange={setIsOpen}>
      <DSCustomDropdownTrigger
        placeholder={props.label}
        count={triggerCount}
        onClear={isActive ? () => { props.onClear(); setIsOpen(false); } : undefined}
        disabled={props.disabled}
      >
        {triggerChildren}
      </DSCustomDropdownTrigger>
      <DSCustomDropdownPanel minWidth={props.type === 'date' ? undefined : 220}>
        {props.type === 'checkbox' && (
          <FilterCheckboxContent props={props} onClose={() => setIsOpen(false)} />
        )}
        {props.type === 'range' && (
          <DSCustomDropdownRangeContent
            min={props.min} max={props.max}
            defaultValue={props.value ?? undefined}
            step={props.step} unit={props.unit} formatValue={props.formatValue}
            onApply={props.onApply} onReset={props.onClear}
          />
        )}
        {props.type === 'date' && (
          <DSCustomDropdownDateContent
            defaultValue={props.value}
            onApply={props.onApply} onReset={props.onClear}
          />
        )}
      </DSCustomDropdownPanel>
    </DSCustomDropdown>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   DSFilterTagBar — Active filter tags row
   Uses DSTag (color="blue", closable) for individual tags.
   "Ещё N" collapses overflow beyond maxVisible.
   Styles unified with DSCustomDropdown tokens (h=24, borderRadius=6, fontSize=12).
   ═══════════════════════════════════════════════════════════════════ */

export interface FilterTag {
  id: string;
  label: string;
  onRemove: () => void;
}

export interface DSFilterTagBarProps {
  tags: FilterTag[];
  onClearAll: () => void;
  maxVisible?: number;
}

export function DSFilterTagBar({ tags, onClearAll, maxVisible = 7 }: DSFilterTagBarProps) {
  const [expanded, setExpanded] = useState(false);
  const [clearHovered, setClearHovered] = useState(false);

  if (!tags.length) return null;

  const visibleTags = expanded ? tags : tags.slice(0, maxVisible);
  const hiddenCount = tags.length - maxVisible;

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap', padding: '4px 0' }}>
      {/* Clear all button */}
      <button
        type="button"
        onClick={onClearAll}
        onMouseEnter={() => setClearHovered(true)}
        onMouseLeave={() => setClearHovered(false)}
        style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          height: 24, padding: '0 10px', borderRadius: 6,
          border: '1px solid var(--ds-border-primary)',
          backgroundColor: clearHovered ? 'var(--ds-control-hover)' : 'transparent',
          color: 'var(--ds-text-gray-dark)',
          fontSize: 12, fontWeight: 500, cursor: 'pointer', outline: 'none',
          transition: 'background-color 100ms ease', flexShrink: 0,
        }}
      >
        <SmallCloseIcon size={7} />
        Очистить
      </button>

      {/* Active filter tags */}
      {visibleTags.map(tag => (
        <DSTag key={tag.id} color="blue" size="md" closable onClose={tag.onRemove}>
          {tag.label}
        </DSTag>
      ))}

      {/* Show more button */}
      {!expanded && hiddenCount > 0 && (
        <button
          type="button"
          onClick={() => setExpanded(true)}
          style={{
            display: 'inline-flex', alignItems: 'center',
            height: 24, padding: '0 10px', borderRadius: 6,
            backgroundColor: 'var(--ds-bg-primary)',
            border: '1px solid var(--ds-border-primary)',
            color: 'var(--ds-text-gray-dark)',
            fontSize: 12, fontWeight: 500, cursor: 'pointer', outline: 'none',
            transition: 'background-color 100ms ease', flexShrink: 0,
          }}
        >
          Ещё {hiddenCount}
        </button>
      )}
    </div>
  );
}