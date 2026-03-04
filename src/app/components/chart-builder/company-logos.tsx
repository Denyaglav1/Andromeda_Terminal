import React from 'react';
import svgPaths from '../../../imports/svg-tuax51r536';

/* ═══════════════════════════════════════════════════════
   Company SVG Logo Registry
   Real SVG logos from Figma import for key MOEX companies.
   Uses shared svgPaths data for actual brand logos.
   ═══════════════════════════════════════════════════════ */

interface PathDef {
  k: string;       // svgPaths key
  f: string;       // fill color
  cr?: boolean;    // clipRule=evenodd
}

interface GradientStop {
  offset: string;
  color: string;
  opacity?: number;
}

interface GradientDef {
  id: string;
  x1: string; y1: string; x2: string; y2: string;
  stops: GradientStop[];
}

interface LogoDef {
  /** Background: solid color or 'gradient' (uses first gradient) */
  bg: string;
  /** Additional bg gradient */
  bgGrad?: GradientDef[];
  paths: PathDef[];
}

/* ── Logo definitions for key MOEX companies ── */
const LOGO_DEFS: Record<string, LogoDef> = {
  // Яндекс
  YDEX: { bg: '#FC3F1D', paths: [{ k: 'p3997fe70', f: '#fff' }] },
  // Газпром
  GAZP: { bg: '#0079C2', paths: [{ k: 'pb54ce00', f: '#fff' }, { k: 'p2a3ece00', f: '#fff' }] },
  // Лукойл
  LKOH: { bg: '#ED1B34', paths: [{ k: 'p30541900', f: '#fff', cr: true }] },
  // Роснефть
  ROSN: { bg: '#FFCA30', paths: [{ k: 'p2eac1670', f: '#000' }, { k: 'p1ad9a780', f: '#fff' }] },
  // МТС
  MTSS: { bg: '#F0F3FA', paths: [{ k: 'p32ad0a00', f: '#FF0032', cr: true }] },
  // ВТБ
  VTBR: { bg: '#0C328C', paths: [{ k: 'pafed6c0', f: '#009FDF' }] },
  // Аэрофлот
  AFLT: { bg: '#255398', paths: [{ k: 'p1b336300', f: '#fff' }] },
  // Акрон
  AKRN: { bg: '#F0F3FA', paths: [{ k: 'p2a2de880', f: '#00423A' }] },
  // АЛРОСА (gradient bg simplified)
  ALRS: {
    bg: '#1A1E21',
    bgGrad: [{ id: 'alrs_bg', x1: '3.35', y1: '3.12', x2: '21.9', y2: '24.43', stops: [{ offset: '0', color: '#1A1E21' }, { offset: '1', color: '#06060A' }] }],
    paths: [{ k: 'p2e96a000', f: '#ED2224' }, { k: 'p29d84200', f: '#3A85C6' }],
  },
  // Сбербанк (gradient bg)
  SBER: {
    bg: '#21A038',
    bgGrad: [
      { id: 'sber_bg1', x1: '9', y1: '0', x2: '9', y2: '18', stops: [{ offset: '0', color: '#0E8FE2' }, { offset: '1', color: '#2EAE4C' }] },
      { id: 'sber_bg2', x1: '3.55', y1: '16.7', x2: '14.9', y2: '7.69', stops: [{ offset: '0', color: '#EFE436' }, { offset: '1', color: '#fff', opacity: 0 }] },
    ],
    paths: [{ k: 'p408d700', f: '#fff' }, { k: 'p46a5580', f: '#fff' }],
  },
  // Норникель (gradient bg)
  GMKN: {
    bg: '#1A1E21',
    bgGrad: [{ id: 'gmkn_bg', x1: '3.35', y1: '3.12', x2: '21.9', y2: '24.43', stops: [{ offset: '0', color: '#1A1E21' }, { offset: '1', color: '#06060A' }] }],
    paths: [{ k: 'p3cfce000', f: '#00589C' }, { k: 'p164edc00', f: '#0080C8' }],
  },
  // T-Банк (ТКС) (gradient bg)
  TCSG: {
    bg: '#FEDD2C',
    bgGrad: [{ id: 'tcs_bg', x1: '2.57', y1: '2.57', x2: '15.59', y2: '15.59', stops: [{ offset: '0', color: '#FDE76D' }, { offset: '1', color: '#FEDD2C' }] }],
    paths: [{ k: 'p36253f00', f: '#fff' }, { k: 'p16ea4770', f: '#333' }],
  },
  // НОВАТЭК (gradient bg, multi-color paths)
  NVTK: {
    bg: '#1A1E21',
    bgGrad: [{ id: 'nvtk_bg', x1: '3.35', y1: '3.12', x2: '21.9', y2: '24.43', stops: [{ offset: '0', color: '#1A1E21' }, { offset: '1', color: '#06060A' }] }],
    paths: [
      { k: 'p1f79aa80', f: '#FF144B' }, { k: 'p1f569b00', f: '#FF144B' },
      { k: 'p2f818200', f: '#0041FF' }, { k: 'p28043800', f: '#0041FF' },
      { k: 'p1067d400', f: '#00C8FF' }, { k: 'p33bf2f00', f: '#00C8FF' },
      { k: 'p3b642a00', f: '#FF144B' }, { k: 'p2572ea00', f: '#0041FF' }, { k: 'p2bac1cc0', f: '#00C8FF' },
    ],
  },
  // Россети
  FEES: { bg: '#F0F3FA', paths: [{ k: 'p102ed900', f: '#0071BC' }] },
  // Ростелеком
  RTKM: { bg: '#F0F3FA', paths: [{ k: 'p107d8000', f: '#7B2D8E' }] },
  // Магнит
  MGNT: { bg: '#E6000E', paths: [{ k: 'p1ff39f00', f: '#fff' }] },
  // X5 Group
  FIVE: { bg: '#F0F3FA', paths: [{ k: 'p2edc8900', f: '#60AD31' }, { k: 'p2cd0be00', f: '#000' }] },
  // Мосбиржа
  MOEX: { bg: '#F0F3FA', paths: [{ k: 'p1094aef0', f: '#003882', cr: true }] },
  // РусГидро
  HYDR: { bg: '#F0F3FA', paths: [{ k: 'p1073f9c0', f: '#0071BC' }] },
  // КАМАЗ
  KMAZ: { bg: '#F0F3FA', paths: [{ k: 'p1010fb00', f: '#003DA5' }] },
  // ФосАгро
  PHOR: { bg: '#F0F3FA', paths: [{ k: 'p10153bf0', f: '#00843D' }] },
  // Полюс (actual color from Figma)
  PLZL: { bg: '#FFC920', paths: [{ k: 'p8b33c80', f: '#4C4F50' }] },
  // Звезда
  ZVEZ: { bg: '#F0F3FA', paths: [{ k: 'pa661180', f: '#374B90' }] },
  // Интер РАО
  IRAO: { bg: '#F0F3FA', paths: [{ k: 'p6282f00', f: '#003087' }] },
  // Татнефть
  TATN: { bg: '#00B274', paths: [{ k: 'p24b72e00', f: '#EF3D42' }, { k: 'p13864b00', f: '#fff' }] },
  // Сургутнефтегаз
  SNGS: { bg: '#108CBB', paths: [{ k: 'p2110a900', f: '#CAA870', cr: true }, { k: 'p4221500', f: '#fff' }, { k: 'pcf6a980', f: '#1B75A2' }, { k: 'p1b23e400', f: '#B39265' }] },
  // НЛМК
  NLMK: { bg: '#0055AD', paths: [{ k: 'p283a5580', f: '#fff' }] },
  // ММК
  MAGN: { bg: '#2C499A', paths: [{ k: 'p26679000', f: '#fff' }] },
  // VK (Mail.ru)
  VKCO: { bg: '#0077FF', paths: [{ k: 'p2f5c4d00', f: '#fff', cr: true }] },
  // HeadHunter
  HHRU: { bg: '#D20A11', paths: [{ k: 'p33b89c00', f: '#fff', cr: true }] },
  // Positive Technologies
  POSI: { bg: '#FE0000', paths: [{ k: 'p29b44700', f: '#fff' }] },
};

/* ── Public API ── */

/** Check if a ticker has a real SVG logo in the registry */
export function hasRealLogo(ticker: string): boolean {
  return ticker in LOGO_DEFS;
}

/** Render the real SVG logo for a given ticker */
export function CompanyLogoSVG({
  ticker,
  size = 18,
  className,
}: {
  ticker: string;
  size?: number;
  className?: string;
}) {
  const def = LOGO_DEFS[ticker];
  if (!def) return null;

  const uid = `logo_${ticker}_${size}`;
  const hasGrad = def.bgGrad && def.bgGrad.length > 0;

  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 18 18"
      fill="none"
      style={{ borderRadius: '50%', flexShrink: 0 }}
    >
      <defs>
        <clipPath id={`${uid}_clip`}>
          <rect width="18" height="18" rx="9" fill="white" />
        </clipPath>
        {hasGrad &&
          def.bgGrad!.map((g, i) => (
            <linearGradient
              key={i}
              id={`${uid}_grad${i}`}
              gradientUnits="userSpaceOnUse"
              x1={g.x1}
              y1={g.y1}
              x2={g.x2}
              y2={g.y2}
            >
              {g.stops.map((s, si) => (
                <stop
                  key={si}
                  offset={s.offset}
                  stopColor={s.color}
                  {...(s.opacity !== undefined ? { stopOpacity: s.opacity } : {})}
                />
              ))}
            </linearGradient>
          ))}
      </defs>
      <g clipPath={`url(#${uid}_clip)`}>
        {/* Background */}
        <rect
          width="18"
          height="18"
          fill={hasGrad ? `url(#${uid}_grad0)` : def.bg}
        />
        {/* Extra gradient overlays (e.g. Sber has two) */}
        {hasGrad &&
          def.bgGrad!.slice(1).map((_, i) => (
            <rect
              key={`ov${i}`}
              width="18"
              height="18"
              fill={`url(#${uid}_grad${i + 1})`}
            />
          ))}
        {/* Logo paths */}
        {def.paths.map((p, i) => {
          const d = (svgPaths as Record<string, string>)[p.k];
          if (!d) return null;
          return (
            <path
              key={i}
              d={d}
              fill={p.f}
              {...(p.cr ? { clipRule: 'evenodd', fillRule: 'evenodd' } : {})}
            />
          );
        })}
      </g>
    </svg>
  );
}