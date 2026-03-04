import React from 'react';
import { Link } from 'react-router';

/* ═══════════════════════════════════════════════════════
   DocSidebar — Sticky navigation sidebar (theme-aware)
   ═══════════════════════════════════════════════════════ */

interface NavItem { id: string; name: string; category: string; }

const NAV_ITEMS: NavItem[] = [
  { id: 'ds-button', name: 'Button', category: 'inputs' },
  { id: 'ds-input', name: 'Input', category: 'inputs' },
  { id: 'ds-checkbox', name: 'Checkbox', category: 'inputs' },
  { id: 'ds-select', name: 'Select', category: 'inputs' },
  { id: 'ds-switch', name: 'Switch', category: 'inputs' },
  { id: 'ds-custom-dropdown', name: 'Custom Dropdown', category: 'inputs' },
  { id: 'ds-calendar', name: 'Calendar', category: 'inputs' },
  { id: 'ds-tabs', name: 'Tabs', category: 'navigation' },
  { id: 'ds-segment-button', name: 'Segment Button', category: 'navigation' },
  { id: 'ds-section-header', name: 'Section Header', category: 'navigation' },
  { id: 'ds-table', name: 'Table', category: 'data-display' },
  { id: 'ds-chart-grid', name: 'Chart Grid', category: 'data-display' },
  { id: 'ds-chart', name: 'Chart', category: 'data-display' },
  { id: 'ds-badge', name: 'Badge', category: 'data-display' },
  { id: 'ds-tag', name: 'Tag', category: 'data-display' },
  { id: 'ds-legend', name: 'Legend', category: 'data-display' },
  { id: 'ds-sparkline', name: 'Sparkline', category: 'data-display' },
  { id: 'notification', name: 'Notification', category: 'feedback' },
  { id: 'ds-tooltip', name: 'Tooltip', category: 'overlay' },
  { id: 'ds-modal', name: 'Modal', category: 'overlay' },
  { id: 'ds-menu', name: 'Menu', category: 'overlay' },
  { id: 'ds-confirm-dialog', name: 'Confirm Dialog', category: 'overlay' },
];

const CATEGORY_LABELS: Record<string, string> = {
  inputs: 'Inputs', navigation: 'Navigation', 'data-display': 'Data Display', feedback: 'Feedback', overlay: 'Overlays',
};

const CATEGORY_ORDER = ['inputs', 'navigation', 'data-display', 'feedback', 'overlay'];

const linkBase: React.CSSProperties = {
  display: 'flex', alignItems: 'center', gap: 8, padding: '6px 8px',
  borderRadius: 6, fontSize: 12, lineHeight: '16px',
  transition: 'all 150ms ease', textDecoration: 'none',
};

interface DocSidebarProps { activeId?: string; }

export function DocSidebar({ activeId }: DocSidebarProps) {
  const grouped = CATEGORY_ORDER.map(cat => ({
    category: cat,
    label: CATEGORY_LABELS[cat],
    items: NAV_ITEMS.filter(item => item.category === cat),
  }));

  return (
    <nav style={{ display: 'flex', flexDirection: 'column', padding: '16px 12px', gap: 20 }} aria-label="Components navigation">
      <Link
        to="/components"
        style={{ ...linkBase, color: 'var(--ds-text-gray-dark)' }}
      >
        <svg viewBox="0 0 10 10" fill="none" style={{ width: 10, height: 10, flexShrink: 0 }}>
          <path d="M6.5 2L3.5 5L6.5 8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Библиотека
      </Link>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <div style={{ padding: '0 8px 4px', fontSize: 10, lineHeight: '14px', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--ds-text-gray-dark)' }}>
          Foundation
        </div>
        <Link
          to="/components/tokens"
          style={{
            ...linkBase,
            backgroundColor: activeId === 'tokens' ? 'var(--ds-blue-6-a10)' : 'transparent',
            color: activeId === 'tokens' ? 'var(--ds-blue-6)' : 'var(--ds-text-primary)',
          }}
        >
          <span style={{ width: 6, height: 6, borderRadius: 1, flexShrink: 0, backgroundColor: 'var(--ds-yellow-6)' }} />
          Design Tokens
        </Link>
        <Link
          to="/components/logos"
          style={{
            ...linkBase,
            backgroundColor: activeId === 'logos' ? 'var(--ds-blue-6-a10)' : 'transparent',
            color: activeId === 'logos' ? 'var(--ds-blue-6)' : 'var(--ds-text-primary)',
          }}
        >
          <span style={{ width: 6, height: 6, borderRadius: 1, flexShrink: 0, backgroundColor: 'var(--ds-yellow-6)' }} />
          Source Logos
        </Link>
      </div>

      {grouped.map(group => (
        <div key={group.category} style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <div style={{ padding: '0 8px 4px', fontSize: 10, lineHeight: '14px', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--ds-text-gray-dark)' }}>
            {group.label}
            <span style={{ marginLeft: 6, color: 'var(--ds-gray-8)' }}>{group.items.length}</span>
          </div>
          {group.items.map(item => {
            const isActive = activeId === item.id;
            return (
              <Link
                key={item.id}
                to={`/components/${item.id}`}
                style={{
                  ...linkBase,
                  backgroundColor: isActive ? 'var(--ds-blue-6-a10)' : 'transparent',
                  color: isActive ? 'var(--ds-blue-6)' : 'var(--ds-text-primary)',
                  fontWeight: isActive ? 500 : 400,
                }}
              >
                <span style={{ width: 6, height: 6, borderRadius: '50%', flexShrink: 0, transition: 'background-color 150ms ease', backgroundColor: isActive ? 'var(--ds-blue-6)' : 'var(--ds-gray-8)' }} />
                {item.name}
              </Link>
            );
          })}
        </div>
      ))}
    </nav>
  );
}