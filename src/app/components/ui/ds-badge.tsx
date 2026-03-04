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

const FG_A10: Record<BadgeColor, string> = {
  blue: 'var(--ds-blue-6-a10)', red: 'var(--ds-red-6-a10)', orange: 'var(--ds-orange-6-a10)',
  green: 'var(--ds-green-6-a10)', gray: 'var(--ds-gray-6-a10)', purple: 'var(--ds-purple-6-a10)', turquoise: 'var(--ds-turquoise-6-a10)',
};

const FILL_STYLES = (c: BadgeColor): React.CSSProperties => ({
  backgroundColor: FG[c], color: 'white',
});

const STROKE_STYLES = (c: BadgeColor): React.CSSProperties => ({
  backgroundColor: 'transparent', color: FG[c], border: `1px solid ${FG[c]}`,
});

const SECONDARY_STYLES = (c: BadgeColor): React.CSSProperties => ({
  backgroundColor: FG_A10[c], color: FG[c],
});

const PILL_STYLES = (c: BadgeColor): React.CSSProperties => {
  if (c === 'gray') return { backgroundColor: 'var(--ds-pill-gray-bg)', color: 'var(--ds-pill-text)' };
  if (c === 'purple') return { backgroundColor: 'var(--ds-purple-7)', color: 'white' };
  return { backgroundColor: FG_A10[c], color: 'var(--ds-text-primary)' };
};

/* ── Size configs ── */

interface SizeConfig {
  height: number;
  fontSize: number;
  lineHeight: string;
  px: number;
  gap: number;
  iconSize: number;
  dotSize: number;
}

const SC: Record<BadgeSize, SizeConfig> = {
  l:  { height: 32, fontSize: 14, lineHeight: '20px', px: 10, gap: 6, iconSize: 16, dotSize: 10 },
  m:  { height: 24, fontSize: 12, lineHeight: '16px', px: 8,  gap: 4, iconSize: 14, dotSize: 8 },
  s:  { height: 20, fontSize: 10, lineHeight: '16px', px: 6,  gap: 4, iconSize: 12, dotSize: 6 },
  xs: { height: 16, fontSize: 10, lineHeight: '14px', px: 4,  gap: 2, iconSize: 10, dotSize: 4 },
};

/* ── Default icon ── */
function DefaultIcon({ size }: { size: number }) {
  return (
    <svg viewBox="0 0 14 14" fill="none" style={{ width: size, height: size }}>
      <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.3" />
      <path d="M7 6.5V10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="7" cy="4.5" r="0.75" fill="currentColor" />
    </svg>
  );
}

/* ── Source metadata ── */

interface SourceMeta {
  label: string;
  icon: React.FC<{ className?: string; color?: string; style?: React.CSSProperties }>;
}

const SOURCES: Record<SourceId, SourceMeta> = {
  euler:            { label: 'Euler',              icon: EulerIcon },
  nfgroup:          { label: 'NFGroup',            icon: NfgroupIcon },
  veleskapital:     { label: 'Велес Капитал',      icon: VelesIcon },
  ibcrealestate:    { label: 'IBC Real Estate',    icon: IbcRealEstateIcon },
  astra:            { label: 'Astra',              icon: AstraIcon },
  interfax:         { label: 'Interfax',           icon: InterfaxIcon },
  telegram:         { label: 'Telegram',           icon: TelegramIcon },
  ria:              { label: 'RIA',                icon: RiaIcon },
  rbc:              { label: 'RBC',                icon: RbcIcon },
  yahoo:            { label: 'Yahoo Finance',      icon: YahooIcon },
  marketscreener:   { label: 'MarketScreener',     icon: MarketScreenerIcon },
  reuters:          { label: 'Reuters',            icon: ReutersIcon },
  cnbc:             { label: 'CNBC',               icon: CnbcIcon },
  aninews:          { label: 'ANI News',           icon: AniNewsIcon },
  businessstandard: { label: 'Business Standard',  icon: BusinessStandardIcon },
  pti:              { label: 'PTI',                icon: PtiIcon },
  scmp:             { label: 'SCMP',               icon: ScmpIcon },
  tipranks:         { label: 'TipRanks',           icon: TipranksIcon },
  futunn:           { label: 'Futunn',             icon: FutunnIcon },
  bseindia:         { label: 'BSE India',          icon: BseIndiaIcon },
  economictimes:    { label: 'Economic Times',     icon: EconomicTimesIcon },
  andromeda:        { label: 'Andromeda AI',       icon: AndromedaIcon },
  moex:             { label: 'MOEX',               icon: MoexIcon },
  tass:             { label: 'ТАСС',               icon: TassIcon },
  kommersant:       { label: 'Коммерсантъ',        icon: KommersantIcon },
};

export const ALL_SOURCES = Object.keys(SOURCES) as SourceId[];

/* ════════════════════════════
   Main component
   ════════════════════════════ */

export function DSBadge({
  variant = 'text',
  color = 'blue',
  view = 'fill',
  size = 'm',
  count,
  icon,
  source,
  showLabel = false,
  disabled = false,
  children,
  className,
}: DSBadgeProps) {
  const sc = SC[size];
  const tnum: React.CSSProperties = { fontFeatureSettings: "'lnum', 'tnum'" };

  const baseInline: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    whiteSpace: 'nowrap',
    fontWeight: 500,
  };

  /* ── Source variant ── */
  if (variant === 'source' && source) {
    const meta = SOURCES[source];
    if (!meta) return null;
    const IconComp = meta.icon;

    return (
      <span
        className={className}
        title={meta.label}
        style={{
          ...baseInline,
          borderRadius: 4,
          transition: 'all 150ms ease',
          height: sc.height,
          padding: `0 ${sc.px}px`,
          gap: sc.gap,
          opacity: disabled ? 0.6 : 1,
        }}
      >
        <span style={{ width: sc.iconSize, height: sc.iconSize, flexShrink: 0, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
          <IconComp color="var(--ds-text-gray-dark)" />
        </span>
        {showLabel && (
          <span
            style={{
              fontSize: sc.fontSize,
              lineHeight: sc.lineHeight,
              fontWeight: 500,
              color: disabled ? 'var(--ds-text-gray-dark)' : 'var(--ds-text-primary)',
              ...tnum,
            }}
          >
            {meta.label}
          </span>
        )}
      </span>
    );
  }

  /* ── Pill variant ── */
  if (variant === 'pill') {
    return (
      <span
        className={className}
        style={{
          ...baseInline,
          borderRadius: 32,
          height: sc.height,
          padding: `0 ${sc.px}px`,
          gap: sc.gap,
          fontSize: sc.fontSize,
          lineHeight: sc.lineHeight,
          ...PILL_STYLES(color),
          ...tnum,
        }}
      >
        {icon && <span style={{ width: sc.iconSize, height: sc.iconSize, flexShrink: 0 }}>{icon}</span>}
        {count !== undefined ? count : children}
      </span>
    );
  }

  /* ── Dot variant ── */
  if (variant === 'dot') {
    return (
      <span
        className={className}
        style={{
          display: 'inline-block',
          borderRadius: '50%',
          width: sc.dotSize,
          height: sc.dotSize,
          backgroundColor: FG[color],
        }}
      />
    );
  }

  /* ── View-based styles ── */
  const viewStyles = view === 'fill'
    ? FILL_STYLES(color)
    : view === 'stroke'
      ? STROKE_STYLES(color)
      : SECONDARY_STYLES(color);

  /* ── Count variant ── */
  if (variant === 'count') {
    return (
      <span
        className={className}
        style={{
          ...baseInline,
          borderRadius: 9999,
          height: sc.height,
          aspectRatio: '1',
          fontSize: sc.fontSize,
          lineHeight: sc.lineHeight,
          ...viewStyles,
          ...tnum,
        }}
      >
        {count ?? 0}
      </span>
    );
  }

  /* ── Icon variant ── */
  if (variant === 'icon') {
    return (
      <span
        className={className}
        style={{
          ...baseInline,
          borderRadius: 9999,
          height: sc.height,
          aspectRatio: '1',
          ...viewStyles,
        }}
      >
        <span style={{ width: sc.iconSize, height: sc.iconSize }}>
          {icon || <DefaultIcon size={sc.iconSize} />}
        </span>
      </span>
    );
  }

  /* ── Text variant (default) ── */
  return (
    <span
      className={className}
      style={{
        ...baseInline,
        borderRadius: 9999,
        height: sc.height,
        padding: `0 ${sc.px}px`,
        gap: sc.gap,
        fontSize: sc.fontSize,
        lineHeight: sc.lineHeight,
        ...viewStyles,
        ...tnum,
      }}
    >
      {icon && <span style={{ width: sc.iconSize, height: sc.iconSize, flexShrink: 0 }}>{icon}</span>}
      {children}
    </span>
  );
}