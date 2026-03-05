import React, { useEffect, type ReactNode } from 'react';
import { X } from 'lucide-react';

/* ═══════════════════════════════════════════════════════
   DSModal — Reusable modal dialog component (Mantine migration)
   ═══════════════════════════════════════════════════════ */

export interface DSModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  headerRight?: ReactNode;
  customHeader?: ReactNode;
  width?: number | string;
  height?: number | string;
  maxWidth?: string;
  maxHeight?: string;
  className?: string;
  zIndex?: number;
  closeOnOverlay?: boolean;
  closeOnEscape?: boolean;
  showCloseButton?: boolean;
  children: ReactNode;
}

export function DSModal({
  open,
  onClose,
  title,
  headerRight,
  customHeader,
  width,
  height,
  maxWidth,
  maxHeight,
  className,
  zIndex = 200,
  closeOnOverlay = true,
  closeOnEscape = true,
  showCloseButton = true,
  children,
}: DSModalProps) {
  useEffect(() => {
    if (!open || !closeOnEscape) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [open, closeOnEscape, onClose]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, [open]);

  if (!open) return null;

  const panelStyle: React.CSSProperties = {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    backgroundColor: 'var(--ds-bg-secondary)',
    borderRadius: 12,
    border: '1px solid var(--ds-border-primary)',
    boxShadow: '0 16px 48px rgba(0,0,0,0.6)',
  };

  if (width) panelStyle.width = typeof width === 'number' ? width : width;
  else panelStyle.width = '100%';

  if (height) panelStyle.height = typeof height === 'number' ? height : height;
  else panelStyle.maxHeight = maxHeight || '90vh';

  if (!width) panelStyle.maxWidth = maxWidth || 768;

  const hasDefaultHeader = !!(title || customHeader || showCloseButton);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex,
      }}
    >
      {/* Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0,0,0,0.6)',
          backdropFilter: 'blur(4px)',
        }}
        onClick={closeOnOverlay ? onClose : undefined}
      />

      {/* Panel */}
      <div className={className} style={panelStyle}>
        {/* Header */}
        {hasDefaultHeader && !customHeader && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '14px 20px',
              borderBottom: '1px solid var(--ds-border-primary)',
              flexShrink: 0,
            }}
          >
            {title && (
              <h2 style={{ fontSize: 14, color: 'var(--ds-text-primary)', fontWeight: 600, margin: 0 }}>{title}</h2>
            )}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              {headerRight}
              {showCloseButton && (
                <button
                  onClick={onClose}
                  style={{
                    padding: 4,
                    borderRadius: 8,
                    border: 'none',
                    background: 'none',
                    color: 'var(--ds-text-gray-dark)',
                    cursor: 'pointer',
                    transition: 'all 150ms ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <X size={16} />
                </button>
              )}
            </div>
          </div>
        )}

        {customHeader}
        {children}
      </div>
    </div>
  );
}

/* ─── DSModalBody ─── */

export interface DSModalBodyProps {
  children: ReactNode;
  className?: string;
  scrollable?: boolean;
}

export function DSModalBody({ children, className, scrollable = true }: DSModalBodyProps) {
  return (
    <div
      className={className}
      style={{
        flex: 1,
        padding: '12px 20px',
        overflowY: scrollable ? 'auto' : 'visible',
      }}
    >
      {children}
    </div>
  );
}

/* ─── DSModalFooter ─── */

export interface DSModalFooterProps {
  children: ReactNode;
  className?: string;
}

export function DSModalFooter({ children, className }: DSModalFooterProps) {
  return (
    <div
      className={className}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '12px 20px',
        borderTop: '1px solid var(--ds-border-primary)',
        flexShrink: 0,
        backgroundColor: 'var(--ds-bg-secondary)',
      }}
    >
      {children}
    </div>
  );
}