import React, { type ReactNode } from 'react';
import { Link } from 'react-router';
import { Header } from '../Header';
import { ToastContainer } from '../ui/notification';
import { useMantineColorScheme } from '@mantine/core';

/* ═══════════════════════════════════════════════════════
   DocShell — shared layout for DS documentation pages
   Theme-aware: all colors via CSS variables.
   ═══════════════════════════════════════════════════════ */

interface DocShellProps {
  breadcrumbs: { label: string; to?: string }[];
  children: ReactNode;
  sidebar?: ReactNode;
}

export function DocShell({ breadcrumbs, children, sidebar }: DocShellProps) {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  const breadcrumbRow = (_px: number) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, lineHeight: '16px', color: 'var(--ds-text-gray-dark)' }}>
      {breadcrumbs.map((bc, i) => (
        <span key={i} style={{ display: 'contents' }}>
          {i > 0 && <span>/</span>}
          {bc.to ? (
            <Link to={bc.to} style={{ color: 'inherit', textDecoration: 'none', transition: 'color 150ms' }}>{bc.label}</Link>
          ) : (
            <span style={{ color: 'var(--ds-text-primary)' }}>{bc.label}</span>
          )}
        </span>
      ))}
    </div>
  );

  const footer = (px: number) => (
    <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', fontSize: 10, color: 'var(--ds-text-gray-dark)', borderTop: '1px solid var(--ds-border-primary)', padding: `16px ${px}px` }}>
      <div>Andromeda Design System v1.0</div>
      <div style={{ display: 'flex', gap: 24 }}>
        <span>React + Mantine v8</span>
        <span>Figma Tokens (W3C DTCG)</span>
      </div>
    </div>
  );

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--ds-bg-primary)', color: 'var(--ds-text-primary)', fontFamily: "'Inter', sans-serif" }}>
      <Header />

      {sidebar ? (
        <div style={{ flex: 1, display: 'flex', width: '100%', maxWidth: 1400, margin: '0 auto' }}>
          <aside style={{ flexShrink: 0, width: 220, borderRight: '1px solid var(--ds-border-primary)', overflowY: 'auto', position: 'sticky', top: 0, height: '100vh', scrollbarWidth: 'thin' as any }}>
            {sidebar}
          </aside>

          <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 32px', borderBottom: '1px solid var(--ds-border-primary)', backgroundColor: 'var(--ds-bg-primary)', backdropFilter: 'blur(8px)', zIndex: 10, position: 'sticky', top: 0 }}>
              {breadcrumbRow(32)}
              <ThemeToggleInline theme={colorScheme} onToggle={toggleColorScheme} />
            </div>

            <main style={{ flex: 1, padding: '24px' }}>
              {children}
            </main>

            {footer(32)}
          </div>
        </div>
      ) : (
        <>
          <main style={{ flex: 1, width: '100%', maxWidth: 1200, margin: '0 auto', padding: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24, paddingBottom: 12, margin: '0 -24px', padding: '0 24px 12px', backgroundColor: 'var(--ds-bg-primary)', backdropFilter: 'blur(8px)', zIndex: 10, position: 'sticky', top: 0 }}>
              {breadcrumbRow(24)}
              <ThemeToggleInline theme={colorScheme} onToggle={toggleColorScheme} />
            </div>
            {children}
          </main>
          {footer(24)}
        </>
      )}

      <ToastContainer />
    </div>
  );
}

/* ── Inline theme toggle ── */

function ThemeToggleInline({ theme, onToggle }: { theme: string; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      style={{
        display: 'flex', alignItems: 'center', gap: 8, height: 28, padding: '0 12px',
        borderRadius: 8, border: '1px solid var(--ds-border-primary)', transition: 'border-color 150ms',
        cursor: 'pointer', backgroundColor: 'var(--ds-bg-secondary)', color: 'inherit', outline: 'none',
      }}
      title={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: theme === 'dark' ? 'var(--ds-blue-6)' : 'var(--ds-text-gray-dark)' }} />
        <span style={{ fontSize: 10, lineHeight: '14px', color: theme === 'dark' ? 'var(--ds-text-primary)' : 'var(--ds-text-gray-dark)' }}>Dark</span>
      </div>
      <div style={{ height: 12, width: 1, backgroundColor: 'var(--ds-border-primary)' }} />
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: theme === 'light' ? 'var(--ds-blue-6)' : 'var(--ds-text-gray-dark)' }} />
        <span style={{ fontSize: 10, lineHeight: '14px', color: theme === 'light' ? 'var(--ds-text-primary)' : 'var(--ds-text-gray-dark)' }}>Light</span>
      </div>
    </button>
  );
}

/* ── Reusable doc helpers ── */

export function DocSection({ title, description, children }: { title: string; description?: string; children: ReactNode }) {
  return (
    <section style={{ marginBottom: 40 }}>
      <h2 style={{ fontSize: 18, lineHeight: '24px', color: 'var(--ds-text-primary)', marginBottom: 4 }}>{title}</h2>
      {description && <p style={{ fontSize: 12, lineHeight: '16px', color: 'var(--ds-text-gray-dark)', marginBottom: 16 }}>{description}</p>}
      {!description && <div style={{ marginBottom: 16 }} />}
      {children}
    </section>
  );
}

export function DocPreview({ children, className, style }: { children: ReactNode; className?: string; style?: React.CSSProperties }) {
  return (
    <div className={className} style={{ borderRadius: 8, border: '1px solid var(--ds-border-primary)', backgroundColor: 'var(--ds-bg-secondary)', padding: 24, ...style }}>
      {children}
    </div>
  );
}

export function DocPreviewDual({ children }: { children: ReactNode }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, borderRadius: 8, border: '1px solid var(--ds-border-primary)', overflow: 'hidden' }}>
      <div style={{ padding: 24, backgroundColor: '#191F2D', position: 'relative' }} data-theme="dark">
        <span style={{ position: 'absolute', top: 8, left: 12, fontSize: 9, fontFamily: 'monospace', color: 'var(--ds-text-gray-dark)' }}>dark</span>
        {children}
      </div>
      <div style={{ padding: 24, backgroundColor: 'var(--ds-bg-secondary)', position: 'relative' }} data-theme="dark">
        <span style={{ position: 'absolute', top: 8, left: 12, fontSize: 9, fontFamily: 'monospace', color: 'var(--ds-text-gray-dark)' }}>light</span>
        {children}
      </div>
    </div>
  );
}

export function DocSpecTable({ rows }: { rows: { prop: string; value: string; token?: string }[] }) {
  const thStyle: React.CSSProperties = { textAlign: 'left', padding: '8px 12px', color: 'var(--ds-text-gray)', fontWeight: 500 };
  const tdBase: React.CSSProperties = { padding: '8px 12px' };
  return (
    <div style={{ borderRadius: 8, border: '1px solid var(--ds-border-primary)', overflow: 'hidden' }}>
      <table style={{ width: '100%', fontSize: 12, lineHeight: '16px', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: 'var(--ds-bg-secondary)' }}>
            <th style={thStyle}>Property</th>
            <th style={thStyle}>Value</th>
            <th style={thStyle}>Token / Class</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} style={{ borderTop: '1px solid var(--ds-border-primary)' }}>
              <td style={{ ...tdBase, color: 'var(--ds-text-primary)', fontFamily: 'monospace' }}>{r.prop}</td>
              <td style={{ ...tdBase, color: 'var(--ds-text-gray-dark)' }}>{r.value}</td>
              <td style={{ ...tdBase, color: 'var(--ds-blue-6)', fontFamily: 'monospace' }}>{r.token ?? '—'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function DocCode({ children }: { children: string }) {
  return (
    <pre style={{ borderRadius: 8, backgroundColor: 'var(--ds-bg-primary)', border: '1px solid var(--ds-border-primary)', padding: 16, fontSize: 12, lineHeight: '18px', fontFamily: 'monospace', color: 'var(--ds-text-gray-dark)', overflowX: 'auto', whiteSpace: 'pre' }}>
      {children}
    </pre>
  );
}

export function DocPropsTable({ rows }: { rows: { name: string; type: string; default: string; description: string }[] }) {
  const thStyle: React.CSSProperties = { textAlign: 'left', padding: '8px 12px', color: 'var(--ds-text-gray)', fontWeight: 500 };
  const tdBase: React.CSSProperties = { padding: '8px 12px' };
  return (
    <div style={{ borderRadius: 8, border: '1px solid var(--ds-border-primary)', overflow: 'hidden' }}>
      <table style={{ width: '100%', fontSize: 12, lineHeight: '16px', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: 'var(--ds-bg-secondary)' }}>
            <th style={thStyle}>Prop</th>
            <th style={thStyle}>Type</th>
            <th style={thStyle}>Default</th>
            <th style={thStyle}>Description</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} style={{ borderTop: '1px solid var(--ds-border-primary)' }}>
              <td style={{ ...tdBase, color: 'var(--ds-blue-6)', fontFamily: 'monospace' }}>{r.name}</td>
              <td style={{ ...tdBase, color: 'var(--ds-orange-6)', fontFamily: 'monospace' }}>{r.type}</td>
              <td style={{ ...tdBase, color: 'var(--ds-text-gray-dark)', fontFamily: 'monospace' }}>{r.default}</td>
              <td style={{ ...tdBase, color: 'var(--ds-text-primary)' }}>{r.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}