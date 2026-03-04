import React from 'react';
import { getInstrumentLogo } from './market-data';
import { CompanyLogoSVG, hasRealLogo } from './company-logos';
import cl from './CompanyLogo.module.css';

/* ═══════════════════════════════════════════════════════
   CompanyLogo — Renders real SVG logo when available,
   falls back to colored circle with initials.
   Usage: <CompanyLogo ticker="SBER" size={18} />
   ═══════════════════════════════════════════════════════ */

interface Props {
  ticker?: string;
  logoBg?: string;
  logoColor?: string;
  logoText?: string;
  size?: number;
  className?: string;
}

export function CompanyLogo({
  ticker, logoBg, logoColor, logoText, size = 18, className = '',
}: Props) {
  // Try real SVG logo first
  if (ticker && hasRealLogo(ticker)) {
    return <CompanyLogoSVG ticker={ticker} size={size} className={className} />;
  }

  // Fallback: colored circle with initials
  const logo = ticker ? getInstrumentLogo(ticker) : null;
  const bg = logoBg || logo?.logoBg || '#444';
  const color = logoColor || logo?.logoColor || '#fff';
  const text = logoText || logo?.logoText || (ticker ? ticker.slice(0, 2) : '??');
  const isEmoji = /\p{Emoji}/u.test(text) && text.length <= 3;
  const fontSize = isEmoji ? size * 0.5 : Math.max(6, size * 0.38);

  return (
    <span
      className={`${cl.circle} ${className}`}
      style={{
        width: size,
        height: size,
        backgroundColor: bg,
        color,
        fontSize,
      }}
      title={ticker || text}
    >
      {text}
    </span>
  );
}