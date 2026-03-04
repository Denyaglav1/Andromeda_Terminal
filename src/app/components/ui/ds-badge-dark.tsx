import React from 'react';
import { DSBadge, type BadgeColor } from './ds-badge';

/* ═══════════════════════════════════════
   DSBadgeDark — Backward-compatible wrapper
   Now delegates to DSBadge variant="pill"
   ═══════════════════════════════════════ */

export interface DSBadgeDarkProps {
  children?: React.ReactNode;
  variant?: 'default' | 'purple' | 'orange' | 'blue' | 'green';
  count?: number;
  className?: string;
}

const DARK_TO_COLOR: Record<string, BadgeColor> = {
  default: 'gray',
  purple: 'purple',
  orange: 'orange',
  blue: 'blue',
  green: 'green',
};

export function DSBadgeDark({
  children,
  variant = 'default',
  count,
  className,
}: DSBadgeDarkProps) {
  return (
    <DSBadge
      variant="pill"
      color={DARK_TO_COLOR[variant] || 'gray'}
      size="s"
      count={count}
      className={className}
    >
      {children}
    </DSBadge>
  );
}
