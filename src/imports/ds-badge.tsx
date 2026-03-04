user@WIN-NVJDQNHQIIM MINGW64 /g/Andromedadashboard/packages/andromeda-ds (main)
$ head -50 ../../src/app/components/ui/ds-badge.tsx
import React, { type ReactNode } from 'react';
import {
  EulerIcon, NfgroupIcon, VelesIcon, IbcRealEstateIcon, AstraIcon,
  InterfaxIcon, TelegramIcon, RiaIcon, RbcIcon, YahooIcon,
  MarketScreenerIcon, ReutersIcon, CnbcIcon, AniNewsIcon,
  BusinessStandardIcon, PtiIcon, ScmpIcon, TipranksIcon,
  FutunnIcon, BseIndiaIcon, EconomicTimesIcon,
  AndromedaIcon, MoexIcon,
  TassIcon, KommersantIcon,
} from './source-icons';

/* ═══════════════════════════════════════════════════════
   DSBadge — Unified Badge Component (theme-aware)
   Uses CSS vars for automatic light/dark adaptation.
   ═══════════════════════════════════════════════════════ */

export type BadgeVariant = 'text' | 'icon' | 'count' | 'dot' | 'pill' | 'source';
export type BadgeColor = 'blue' | 'red' | 'orange' | 'green' | 'gray' | 'purple' | 'turquoise';
export type BadgeView = 'fill' | 'stroke' | 'secondary';
export type BadgeSize = 'l' | 'm' | 's' | 'xs';

export type SourceId =
  | 'euler' | 'nfgroup' | 'veleskapital' | 'ibcrealestate' | 'astra'
  | 'interfax' | 'telegram' | 'ria' | 'rbc'
  | 'yahoo' | 'marketscreener' | 'reuters' | 'cnbc'
  | 'aninews' | 'businessstandard' | 'pti' | 'scmp' | 'tipranks'
  | 'futunn' | 'bseindia' | 'economictimes' | 'andromeda' | 'moex'
  | 'tass' | 'kommersant';

export interface DSBadgeProps {
  variant?: BadgeVariant;
  color?: BadgeColor;
  view?: BadgeView;
  size?: BadgeSize;
  count?: number;
  icon?: ReactNode;
  source?: SourceId;
  showLabel?: boolean;
  disabled?: boolean;
  children?: ReactNode;
  className?: string;
}

/* ── Color maps ── */

const FG: Record<BadgeColor, string> = {
  blue: 'var(--ds-blue-6)', red: 'var(--ds-red-6)', orange: 'var(--ds-orange-6)',
  green: 'var(--ds-green-6)', gray: 'var(--ds-gray-6)', purple: 'var(--ds-purple-6)', turquoise: 'var(--ds-turquoise-6)',
};


user@WIN-NVJDQNHQIIM MINGW64 /g/Andromedadashboard/packages/andromeda-ds (main)
$ head -50 src/components/ds-badge.tsx
import React, { type ReactNode } from 'react';
