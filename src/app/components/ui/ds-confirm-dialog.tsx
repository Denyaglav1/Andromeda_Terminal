import React, { useEffect, type ReactNode } from 'react';

/* ═══════════════════════════════════════════════════════
   DSConfirmDialog — Centered confirmation dialog
   Matches Figma "Удаление виджета" pattern:
   - Centered title + subtitle
   - Two equal-width action buttons
   - No close (X) button
   - Light overlay with subtle shadow
   ═══════════════════════════════════════════════════════ */

export interface DSConfirmDialogProps {
  /** Whether the dialog is visible */
  open: boolean;
  /** Dialog title (centered, 18px semibold) */
  title: string;
  /** Dialog subtitle/description (centered, 14px, muted color) */
  message: string | ReactNode;
  /** Label for the cancel button */
  cancelLabel?: string;
  /** Label for the confirm button */
  confirmLabel: string;
  /** Background color for the confirm button (default: --ds-blue-6) */
  confirmColor?: string;
  /** Text color for the confirm button (default: white) */
  confirmTextColor?: string;
  /** Called when the user clicks Cancel or the overlay */
  onCancel: () => void;
  /** Called when the user clicks the confirm button */
  onConfirm: () => void;
  /** Close on overlay click (default: true) */
  closeOnOverlay?: boolean;
  /** Close on Escape key (default: true) */
  closeOnEscape?: boolean;
  /** z-index (default: 1100) */
  zIndex?: number;
  /** Width of the dialog panel (default: 320) */
  width?: number;
}

export function DSConfirmDialog({
  open,
  title,
  message,
  cancelLabel = 'Отмена',
  confirmLabel,
  confirmColor,
  confirmTextColor = 'white',
  onCancel,
  onConfirm,
  closeOnOverlay = true,
  closeOnEscape = true,
  zIndex = 1100,
  width = 320,
}: DSConfirmDialogProps) {
  useEffect(() => {
    if (!open || !closeOnEscape) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onCancel();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [open, closeOnEscape, onCancel]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, [open]);

  if (!open) return null;

  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}
    >
      {/* Overlay */}
      <div
        style={{
          position: 'absolute', inset: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
        }}
        onClick={closeOnOverlay ? onCancel : undefined}
      />

      {/* Panel */}
      <div
        style={{
          position: 'relative',
          width,
          backgroundColor: 'var(--ds-bg-secondary)',
          borderRadius: 8,
          boxShadow: '0px 4px 16px rgba(0,0,0,0.08)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Header / content */}
        <div style={{
          padding: 16,
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10,
          borderBottom: '1px solid var(--ds-border-primary)',
        }}>
          <div style={{
            fontFamily: "'Inter', sans-serif", fontWeight: 600,
            fontSize: 18, lineHeight: '24px',
            color: 'var(--ds-text-primary)',
            textAlign: 'center',
          }}>
            {title}
          </div>
          <div style={{
            fontFamily: "'Inter', sans-serif", fontWeight: 400,
            fontSize: 14, lineHeight: '20px',
            color: 'var(--ds-text-gray-dark)',
            textAlign: 'center',
            fontFeatureSettings: "'lnum', 'tnum'",
          }}>
            {message}
          </div>
        </div>

        {/* Footer / buttons */}
        <div style={{
          padding: 16,
          display: 'flex', gap: 8,
        }}>
          <button
            onClick={onCancel}
            style={{
              flex: 1, height: 32, borderRadius: 8,
              border: 'none', cursor: 'pointer',
              backgroundColor: 'var(--ds-bg-primary)',
              fontFamily: "'Inter', sans-serif", fontWeight: 600,
              fontSize: 12, lineHeight: '16px',
              color: 'var(--ds-blue-6)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            {cancelLabel}
          </button>
          <button
            onClick={onConfirm}
            style={{
              flex: 1, height: 32, borderRadius: 8,
              border: 'none', cursor: 'pointer',
              backgroundColor: confirmColor || 'var(--ds-blue-6)',
              fontFamily: "'Inter', sans-serif", fontWeight: 600,
              fontSize: 12, lineHeight: '16px',
              color: confirmTextColor,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
