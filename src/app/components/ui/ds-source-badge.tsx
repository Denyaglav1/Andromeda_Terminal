import React from 'react';
import { DSBadge, type SourceId, type BadgeSize, ALL_SOURCES as _ALL } from './ds-badge';

/* ═══════════════════════════════════════════════════════
   DSSourceBadge — Backward-compatible wrapper
   Now delegates to DSBadge variant="source"
   ═══════════════════════════════════════════════════════ */

export type { SourceId } from './ds-badge';
export const ALL_SOURCES = _ALL;

export interface DSSourceBadgeProps {
  source: SourceId;
  showLabel?: boolean;
  disabled?: boolean;
  size?: 'sm' | 'md';
  className?: string;
}

const SIZE_MAP: Record<'sm' | 'md', BadgeSize> = {
  sm: 's',
  md: 'm',
};

export function DSSourceBadge({
  source,
  showLabel = false,
  disabled = false,
  size = 'sm',
  className,
}: DSSourceBadgeProps) {
  return (
    <DSBadge
      variant="source"
      source={source}
      showLabel={showLabel}
      disabled={disabled}
      size={SIZE_MAP[size]}
      className={className}
    />
  );
}
