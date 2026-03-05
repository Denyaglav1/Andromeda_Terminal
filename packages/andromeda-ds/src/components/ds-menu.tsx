import React, { useState, useRef, useEffect, type ReactNode } from 'react';

/* ═══════════════════════════════════════════════════════
   DSMenu — Context/Dropdown Menu Component (Mantine migration)
   ═══════════════════════════════════════════════════════ */

const MenuContext = React.createContext<{ onClose?: () => void }>({});

export interface DSMenuProps {
  children: ReactNode;
  open?: boolean;
  onClose?: () => void;
  width?: number;
  className?: string;
  anchorRef?: React.RefObject<HTMLElement | null>;
}

export function DSMenu({ children, open = true, onClose, width = 230, className }: DSMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const h = (e: MouseEvent) => { if (menuRef.current && !menuRef.current.contains(e.target as Node)) onClose?.(); };
    document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, [open, onClose]);

  useEffect(() => {
    if (!open) return;
    const h = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose?.(); };
    document.addEventListener('keydown', h);
    return () => document.removeEventListener('keydown', h);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <MenuContext.Provider value={{ onClose }}>
      <div
        ref={menuRef}
        role="menu"
        className={className}
        style={{
          display: 'flex',
          flexDirection: 'column',
          borderRadius: 8,
          padding: '0 8px',
          backgroundColor: 'var(--ds-bg-secondary)',
          border: '1px solid var(--ds-border-primary)',
          boxShadow: '0 4px 16px rgba(0,0,0,0.24)',
          width,
        }}
      >
        {children}
      </div>
    </MenuContext.Provider>
  );
}

export interface DSMenuGroupProps { children: ReactNode; className?: string; }

export function DSMenuGroup({ children, className }: DSMenuGroupProps) {
  return (
    <div className={className} role="group" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '8px 0', position: 'relative' }}>
      {children}
    </div>
  );
}

export type MenuItemVariant = 'default' | 'accent' | 'danger';

const ICON_COLORS: Record<MenuItemVariant, string> = { default: 'var(--ds-text-gray-dark)', accent: 'var(--ds-blue-6)', danger: 'var(--ds-red-6)' };

export interface DSMenuItemProps {
  children: ReactNode;
  icon?: ReactNode;
  description?: string;
  variant?: MenuItemVariant;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

export function DSMenuItem({ children, icon, description, variant = 'default', disabled = false, onClick, className }: DSMenuItemProps) {
  const { onClose } = React.useContext(MenuContext);
  const handleClick = () => { if (disabled) return; onClick?.(); onClose?.(); };

  return (
    <button
      type="button"
      role="menuitem"
      disabled={disabled}
      onClick={handleClick}
      className={className}
      style={{
        display: 'flex', alignItems: 'flex-start', gap: 8, padding: 8, borderRadius: 4,
        width: '100%', textAlign: 'left', transition: 'background-color 100ms ease',
        cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.4 : 1,
        background: 'none', border: 'none', outline: 'none',
      }}
    >
      {icon && (
        <span style={{ flexShrink: 0, width: 18, height: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', color: ICON_COLORS[variant] }}>
          {icon}
        </span>
      )}
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1, minWidth: 0 }}>
        <span style={{ fontSize: 12, lineHeight: '16px', color: 'var(--ds-text-primary)', fontFeatureSettings: "'lnum', 'tnum'" }}>
          {children}
        </span>
        {description && (
          <span style={{ fontSize: 10, lineHeight: '16px', color: 'var(--ds-text-gray-dark)' }}>{description}</span>
        )}
      </div>
    </button>
  );
}

export function DSMenuSeparator() {
  return <div role="separator" style={{ height: 1, backgroundColor: 'var(--ds-border-primary)', margin: '4px 0' }} />;
}