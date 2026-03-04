import React, { useCallback, useEffect, useId, useState } from 'react';
import { DSButton } from './ds-button';
import svgPaths from '../../../imports/svg-br61pw6u5a';

/* ═══════════════════════════════════════════
   Notification — DS component (Mantine migration)
   ═══════════════════════════════════════════ */

export type NotificationVariant = 'error' | 'warning' | 'success' | 'info';

export interface NotificationAction {
  label: string;
  onClick: () => void;
}

export interface NotificationProps {
  variant?: NotificationVariant;
  title: string;
  description?: string;
  showIcon?: boolean;
  loading?: boolean;
  closable?: boolean;
  onClose?: () => void;
  primaryAction?: NotificationAction;
  secondaryAction?: NotificationAction;
  className?: string;
}

/* ── variant config ── */

interface VariantCfg {
  bgColor: string;
  iconColor: string;
  iconPath: string;
  iconViewBox: string;
  iconStrokeWidth: string;
  iconSize: number;
  border?: string;
}

const VARIANT_CONFIG: Record<NotificationVariant, VariantCfg> = {
  error: {
    bgColor: 'var(--ds-notification-error-bg, #2E2230)',
    iconColor: '#EA3943', iconPath: svgPaths.pf9d4b80,
    iconViewBox: '0 0 14.3 14.3', iconStrokeWidth: '1.3', iconSize: 18,
  },
  warning: {
    bgColor: 'var(--ds-notification-warning-bg, #2E2A20)',
    iconColor: '#F7620D', iconPath: svgPaths.p953ce00,
    iconViewBox: '0 0 15.3 14.3', iconStrokeWidth: '1.3', iconSize: 18,
  },
  success: {
    bgColor: 'var(--ds-notification-success-bg, #1A2E28)',
    iconColor: '#1BAC75', iconPath: svgPaths.p3b34b180,
    iconViewBox: '0 0 16.5 16.5', iconStrokeWidth: '1.5', iconSize: 20,
  },
  info: {
    bgColor: 'var(--ds-bg-secondary)',
    iconColor: '#5A8CFF', iconPath: svgPaths.p2074d000,
    iconViewBox: '0 0 16.5 16.5', iconStrokeWidth: '1.5', iconSize: 20,
    border: '1px solid var(--ds-border-primary)',
  },
};

/* ── sub-components ── */

function VariantIcon({ variant }: { variant: NotificationVariant }) {
  const cfg = VARIANT_CONFIG[variant];
  return (
    <div style={{ flexShrink: 0, width: cfg.iconSize, height: cfg.iconSize }}>
      <svg style={{ display: 'block', width: '100%', height: '100%' }} fill="none" viewBox={cfg.iconViewBox}>
        <path d={cfg.iconPath} stroke={cfg.iconColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth={cfg.iconStrokeWidth} />
      </svg>
    </div>
  );
}

function LoadingSpinner() {
  const gradId = useId();
  return (
    <div style={{ flexShrink: 0, width: 20, height: 20, animation: 'spin 1s linear infinite' }}>
      <svg style={{ display: 'block', width: '100%', height: '100%' }} fill="none" viewBox="0 0 20 20">
        <path clipRule="evenodd" d={svgPaths.p3bc08900} fill="var(--ds-gray-6, #677C9C)" fillOpacity="0.1" fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.p38db5100} fill={`url(#${gradId})`} fillRule="evenodd" />
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id={gradId} x1="10" x2="6.51516" y1="0.303" y2="18.182">
            <stop stopColor="#5A8CFF" />
            <stop offset="1" stopColor="#5A8CFF" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function CloseButton({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      style={{
        position: 'absolute', right: 0, top: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
        width: 32, height: 32, opacity: 0.6, transition: 'opacity 150ms ease',
        background: 'none', border: 'none', cursor: 'pointer',
      }}
      aria-label="Close"
    >
      <svg style={{ width: 11, height: 11 }} fill="none" viewBox="0 0 12.3 12.3">
        <path d={svgPaths.p6528718} stroke="var(--ds-text-primary, #E0E1E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
      </svg>
    </button>
  );
}

/* ── main component ── */

export function Notification({
  variant = 'info', title, description, showIcon = true, loading = false,
  closable = true, onClose, primaryAction, secondaryAction, className,
}: NotificationProps) {
  const cfg = VARIANT_CONFIG[variant];
  const hasActions = primaryAction || secondaryAction;

  return (
    <div
      className={className}
      style={{
        position: 'relative', display: 'flex', gap: 12, alignItems: 'flex-start',
        padding: '16px 32px 16px 16px', borderRadius: 12, width: 320,
        boxShadow: '0 4px 16px 0 rgba(0,0,0,0.08)',
        backgroundColor: cfg.bgColor,
        border: cfg.border || 'none',
      }}
    >
      {(showIcon || loading) && (
        <div style={{ flexShrink: 0, marginTop: 1 }}>
          {loading ? <LoadingSpinner /> : <VariantIcon variant={variant} />}
        </div>
      )}

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 18, minWidth: 0, overflow: 'clip' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <p style={{ fontSize: 16, lineHeight: '20px', fontWeight: 600, color: 'var(--ds-text-primary)', margin: 0 }}>{title}</p>
          {description && (
            <p style={{ fontSize: 12, lineHeight: '16px', fontWeight: 400, color: variant === 'info' ? 'var(--ds-text-gray-dark)' : 'var(--ds-text-primary)', margin: 0, fontFeatureSettings: "'lnum', 'tnum'" }}>
              {description}
            </p>
          )}
        </div>

        {hasActions && (
          <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
            {primaryAction && <DSButton variant="primary" size="sm" onClick={primaryAction.onClick}>{primaryAction.label}</DSButton>}
            {secondaryAction && <DSButton variant="outline" size="sm" onClick={secondaryAction.onClick}>{secondaryAction.label}</DSButton>}
          </div>
        )}
      </div>

      {closable && <CloseButton onClick={onClose} />}
    </div>
  );
}

/* ═══════════════════════════════════════════
   Toast system — imperative API
   ═══════════════════════════════════════════ */

export interface ToastItem extends Omit<NotificationProps, 'onClose'> {
  id: string;
  duration?: number;
}

type ToastListener = (toasts: ToastItem[]) => void;

let toasts: ToastItem[] = [];
let listeners: ToastListener[] = [];
let counter = 0;

function emit() { listeners.forEach(fn => fn([...toasts])); }

function addToast(props: Omit<ToastItem, 'id'>) {
  const id = `toast-${++counter}-${Date.now()}`;
  const item: ToastItem = { id, duration: 5000, ...props };
  toasts = [...toasts, item];
  emit();
  if (item.duration && item.duration > 0) setTimeout(() => removeToast(id), item.duration);
  return id;
}

function removeToast(id: string) { toasts = toasts.filter(t => t.id !== id); emit(); }

export const notify = {
  success: (title: string, opts?: Partial<Omit<ToastItem, 'id' | 'variant' | 'title'>>) => addToast({ variant: 'success', title, ...opts }),
  error: (title: string, opts?: Partial<Omit<ToastItem, 'id' | 'variant' | 'title'>>) => addToast({ variant: 'error', title, ...opts }),
  warning: (title: string, opts?: Partial<Omit<ToastItem, 'id' | 'variant' | 'title'>>) => addToast({ variant: 'warning', title, ...opts }),
  info: (title: string, opts?: Partial<Omit<ToastItem, 'id' | 'variant' | 'title'>>) => addToast({ variant: 'info', title, ...opts }),
  loading: (title: string, opts?: Partial<Omit<ToastItem, 'id' | 'variant' | 'title'>>) => addToast({ variant: 'info', title, loading: true, closable: false, duration: 0, ...opts }),
  dismiss: (id: string) => removeToast(id),
};

function ToastItemWrapper({ item, isExiting, onClose }: { item: ToastItem; isExiting: boolean; onClose: () => void }) {
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    // Trigger enter animation on next frame
    const raf = requestAnimationFrame(() => setEntered(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  const isVisible = entered && !isExiting;

  return (
    <div
      style={{
        pointerEvents: 'auto',
        transition: 'all 400ms cubic-bezier(0.32, 0.72, 0, 1)',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(-16px)',
      }}
    >
      <Notification
        variant={item.variant}
        title={item.title}
        description={item.description}
        showIcon={item.showIcon}
        loading={item.loading}
        closable={item.closable}
        primaryAction={item.primaryAction}
        secondaryAction={item.secondaryAction}
        onClose={onClose}
      />
    </div>
  );
}

export function ToastContainer() {
  const [items, setItems] = useState<ToastItem[]>([]);
  const [exiting, setExiting] = useState<Set<string>>(new Set());

  useEffect(() => {
    listeners.push(setItems);
    return () => { listeners = listeners.filter(l => l !== setItems); };
  }, []);

  const handleClose = useCallback((id: string) => {
    setExiting(prev => new Set(prev).add(id));
    setTimeout(() => {
      removeToast(id);
      setExiting(prev => { const next = new Set(prev); next.delete(id); return next; });
    }, 400);
  }, []);

  if (items.length === 0) return null;

  return (
    <div style={{ position: 'fixed', top: 24, right: 24, zIndex: 9999, display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-end', pointerEvents: 'none' }}>
      {items.map(item => (
        <ToastItemWrapper
          key={item.id}
          item={item}
          isExiting={exiting.has(item.id)}
          onClose={() => handleClose(item.id)}
        />
      ))}
    </div>
  );
}