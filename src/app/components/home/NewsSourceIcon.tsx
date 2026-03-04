import React from 'react';
import type { NewsSourceType, ContentType } from './data/home-types';

/* ═══════════════════════════════════════
   NewsSourceIcon — SVG icons for news sources (Mantine)
   ═══════════════════════════════════════ */

const ICON_COLOR = 'var(--ds-gray-6)';

export function NewsSourceIcon({ source, size = 18 }: { source: NewsSourceType; size?: number }) {
  switch (source) {
    case 'euler':
      return (
        <svg width={size} height={size} viewBox="0 0 18 18" fill="none">
          <path d="M4 4h5v2H6v2h3v2H6v2h3v2H4V4z" fill={ICON_COLOR} />
          <path d="M10 4h4v2h-4V4z" fill={ICON_COLOR} />
        </svg>
      );
    case 'rbc':
      return (
        <svg width={size} height={size} viewBox="0 0 18 18" fill="none">
          <circle cx="9" cy="9" r="5.5" stroke={ICON_COLOR} strokeWidth="1.2" />
          <circle cx="9" cy="9" r="1.5" fill={ICON_COLOR} />
        </svg>
      );
    case 'interfax':
      return (
        <svg width={size} height={size} viewBox="0 0 18 18" fill="none">
          <path d="M3 3v10.06L13.06 3H3z" fill="#A2AFC2" />
          <path d="M3.93 15H15V3.93L3.93 15z" fill={ICON_COLOR} />
        </svg>
      );
    case 'tass':
      return (
        <svg width={size} height={size} viewBox="0 0 18 18" fill="none">
          <path d="M3 5h12v2H3V5z" fill={ICON_COLOR} />
          <path d="M8 7h2v8H8V7z" fill={ICON_COLOR} />
          <path d="M5 3h8v2H5V3z" fill={ICON_COLOR} />
        </svg>
      );
    case 'kommersant':
      return (
        <svg width={size} height={size} viewBox="0 0 18 18" fill="none">
          <rect x="3" y="3" width="5" height="12" rx="1" fill={ICON_COLOR} />
          <rect x="10" y="7" width="5" height="8" rx="1" fill={ICON_COLOR} />
        </svg>
      );
    default:
      return null;
  }
}

/* ═══════ Content type badge icon ═══════ */

const CONTENT_CONFIGS: Record<ContentType, { bg: string; color: string }> = {
  analytics: { bg: 'var(--ds-purple-6-a30)', color: 'var(--ds-purple-6)' },
  podcast: { bg: 'rgba(69,211,206,0.3)', color: '#8FE5E2' },
  important: { bg: 'rgba(248,125,55,0.3)', color: '#FBB187' },
  article: { bg: 'var(--ds-blue-6-a30)', color: 'var(--ds-blue-6)' },
};

export function ContentTypeIcon({ type }: { type: ContentType }) {
  const config = CONTENT_CONFIGS[type];

  return (
    <div
      style={{
        width: 16,
        height: 16,
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        background: config.bg,
      }}
    >
      <div style={{ width: 6, height: 6, borderRadius: '50%', background: config.color }} />
    </div>
  );
}