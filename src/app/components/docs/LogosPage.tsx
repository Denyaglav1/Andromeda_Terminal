import React, { useCallback, useMemo, useState } from 'react';
import { DocShell, DocSection, DocPreview } from './DocShell';
import { DocSidebar } from './DocSidebar';
import {
  EulerIcon, NfgroupIcon, VelesIcon, IbcRealEstateIcon, AstraIcon,
  InterfaxIcon, TelegramIcon, RiaIcon, RbcIcon, YahooIcon,
  MarketScreenerIcon, ReutersIcon, CnbcIcon, AniNewsIcon,
  BusinessStandardIcon, PtiIcon, ScmpIcon, TipranksIcon,
  FutunnIcon, BseIndiaIcon, EconomicTimesIcon,
  AndromedaIcon, MoexIcon,
  TassIcon, KommersantIcon,
} from '../ui/source-icons';
import { CompanyLogo } from '../chart-builder/CompanyLogo';
import { COMPANIES as MARKET_COMPANIES, SECTOR_LABELS, type Sector } from '../chart-builder/market-data';
import { getAllCompanies } from '../chart-builder/extended-companies';
import styles from './LogosPage.module.css';

/* ═══════════════════════════════════════════════════════
   LogosPage — Foundation page: Source & Company logos
   Migrated to CSS Modules (no Tailwind)
   ═══════════════════════════════════════════════════════ */

interface LogoEntry {
  id: string;
  nameRu: string;
  nameEn: string;
  Icon: React.FC<{ className?: string; color?: string }>;
}

const LOGOS: LogoEntry[] = [
  { id: 'euler',            nameRu: 'Эйлер',              nameEn: 'Euler',              Icon: EulerIcon },
  { id: 'nfgroup',          nameRu: 'НФ Груп',            nameEn: 'NFGroup',            Icon: NfgroupIcon },
  { id: 'veleskapital',     nameRu: 'Велес Капитал',      nameEn: 'Veles Kapital',      Icon: VelesIcon },
  { id: 'ibcrealestate',    nameRu: 'АйБиСи Риал Эстейт',nameEn: 'IBC Real Estate',    Icon: IbcRealEstateIcon },
  { id: 'astra',            nameRu: 'Астра',              nameEn: 'Astra',              Icon: AstraIcon },
  { id: 'interfax',         nameRu: 'Интерфакс',          nameEn: 'Interfax',           Icon: InterfaxIcon },
  { id: 'telegram',         nameRu: 'Телеграм',           nameEn: 'Telegram',           Icon: TelegramIcon },
  { id: 'ria',              nameRu: 'РИА Новости',        nameEn: 'RIA Novosti',        Icon: RiaIcon },
  { id: 'rbc',              nameRu: 'РБК',                nameEn: 'RBC',                Icon: RbcIcon },
  { id: 'yahoo',            nameRu: 'Яху Файнэнс',       nameEn: 'Yahoo Finance',      Icon: YahooIcon },
  { id: 'marketscreener',   nameRu: 'МаркетСкринер',      nameEn: 'MarketScreener',     Icon: MarketScreenerIcon },
  { id: 'reuters',          nameRu: 'Рейтер',             nameEn: 'Reuters',            Icon: ReutersIcon },
  { id: 'cnbc',             nameRu: 'Си-Эн-Би-Си',       nameEn: 'CNBC',               Icon: CnbcIcon },
  { id: 'aninews',          nameRu: 'Эй-Эн-Ай Ньюс',    nameEn: 'ANI News',           Icon: AniNewsIcon },
  { id: 'businessstandard', nameRu: 'Бизнес Стандарт',    nameEn: 'Business Standard',  Icon: BusinessStandardIcon },
  { id: 'pti',              nameRu: 'Пи-Ти-Ай',          nameEn: 'PTI',                Icon: PtiIcon },
  { id: 'scmp',             nameRu: 'Эс-Си-Эм-Пи',      nameEn: 'SCMP',               Icon: ScmpIcon },
  { id: 'tipranks',         nameRu: 'ТипРэнкс',          nameEn: 'TipRanks',           Icon: TipranksIcon },
  { id: 'futunn',           nameRu: 'Футунн',             nameEn: 'Futunn',             Icon: FutunnIcon },
  { id: 'bseindia',         nameRu: 'БСЕ Индия',          nameEn: 'BSE India',          Icon: BseIndiaIcon },
  { id: 'economictimes',    nameRu: 'Экономик Таймс',     nameEn: 'Economic Times',     Icon: EconomicTimesIcon },
  { id: 'andromeda',        nameRu: 'Андромеда АИ',       nameEn: 'Andromeda AI',       Icon: AndromedaIcon },
  { id: 'moex',             nameRu: 'МОЕХ / Мосбиржа',    nameEn: 'MOEX',               Icon: MoexIcon },
  { id: 'tass',             nameRu: 'ТАСС',               nameEn: 'TASS',               Icon: TassIcon },
  { id: 'kommersant',       nameRu: 'Коммерсантъ',        nameEn: 'Kommersant',         Icon: KommersantIcon },
];

/* ─── SVG download helper ─── */

function downloadSvg(id: string, svgEl: SVGSVGElement | null) {
  if (!svgEl) return;
  const clone = svgEl.cloneNode(true) as SVGSVGElement;
  clone.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  const serializer = new XMLSerializer();
  const svgString = serializer.serializeToString(clone);
  const blob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${id}.svg`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/* ─── Source logo card ─── */

function LogoCard({ entry }: { entry: LogoEntry }) {
  const { id, nameRu, nameEn, Icon } = entry;

  const handleDownload = useCallback(() => {
    const wrapper = document.getElementById(`logo-svg-${id}`);
    const svg = wrapper?.querySelector('svg');
    downloadSvg(id, svg as SVGSVGElement | null);
  }, [id]);

  return (
    <div className={styles.logoCard}>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 16, padding: '12px 0' }}>
        <div id={`logo-svg-${id}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 40, height: 40, borderRadius: 6, backgroundColor: 'rgba(103,124,156,0.1)' }}>
          <span style={{ display: 'inline-flex', width: 28, height: 28 }}><Icon color="#677C9C" /></span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 28, height: 28, borderRadius: 4, backgroundColor: 'rgba(103,124,156,0.1)' }}>
          <span style={{ display: 'inline-flex', width: 18, height: 18 }}><Icon color="#677C9C" /></span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 20, height: 20, borderRadius: 3, backgroundColor: 'rgba(103,124,156,0.1)' }}>
          <span style={{ display: 'inline-flex', width: 14, height: 14 }}><Icon color="#677C9C" /></span>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, textAlign: 'center', minHeight: 36 }}>
        <span style={{ fontSize: 12, lineHeight: '16px', color: 'var(--ds-text-primary)' }}>{nameRu}</span>
        <span style={{ fontSize: 10, lineHeight: '14px', color: 'var(--ds-text-gray-dark)', fontFamily: 'monospace' }}>{nameEn}</span>
      </div>

      <div className={styles.logoCardActions}>
        <button onClick={handleDownload} className={`${styles.actionBtn} ${styles.actionBtnBlue}`}>
          <svg viewBox="0 0 12 12" fill="none" width={10} height={10}>
            <path d="M6 2v6M3.5 6L6 8.5 8.5 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2.5 10h7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
          SVG
        </button>
        <CopyIdButton id={id} />
      </div>
    </div>
  );
}

/* ─── Copy button ─── */

function CopyIdButton({ id }: { id: string }) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(id).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  }, [id]);

  return (
    <button onClick={handleCopy} className={`${styles.actionBtn} ${styles.actionBtnGray}`} title={`Copy: "${id}"`}>
      {copied ? (
        <>
          <svg viewBox="0 0 12 12" fill="none" width={10} height={10}>
            <path d="M3 6.5l2 2 4-4.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          copied
        </>
      ) : (
        <>
          <svg viewBox="0 0 12 12" fill="none" width={10} height={10}>
            <rect x="4" y="4" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1" />
            <path d="M8 4V3a1 1 0 00-1-1H3a1 1 0 00-1 1v4a1 1 0 001 1h1" stroke="currentColor" strokeWidth="1" />
          </svg>
          {id}
        </>
      )}
    </button>
  );
}

/* ─── Company logo card ─── */

function CompanyLogoCard({ ticker, name, nameEn }: { ticker: string; name: string; nameEn: string }) {
  const handleDownload = useCallback(() => {
    const wrapper = document.getElementById(`clogo-${ticker}`);
    const svg = wrapper?.querySelector('svg');
    if (svg) downloadSvg(ticker, svg as SVGSVGElement);
  }, [ticker]);

  const [copiedTicker, setCopiedTicker] = useState(false);

  const handleCopyTicker = useCallback(() => {
    navigator.clipboard.writeText(ticker).then(() => {
      setCopiedTicker(true);
      setTimeout(() => setCopiedTicker(false), 1500);
    });
  }, [ticker]);

  return (
    <div className={styles.companyCard}>
      <div id={`clogo-${ticker}`} style={{ flexShrink: 0 }}>
        <CompanyLogo ticker={ticker} size={24} />
      </div>

      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <span style={{ fontSize: 11, lineHeight: '14px', color: 'var(--ds-text-primary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{name}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <span style={{ fontSize: 10, lineHeight: '14px', color: 'var(--ds-blue-6)', fontFamily: 'monospace' }}>{ticker}</span>
          <span style={{ fontSize: 9, lineHeight: '12px', color: 'var(--ds-text-gray-dark)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{nameEn}</span>
        </div>
      </div>

      <div className={styles.companyCardActions}>
        <button onClick={handleDownload} className={`${styles.iconBtn} ${styles.iconBtnBlue}`} title="Скачать SVG">
          <svg viewBox="0 0 12 12" fill="none" width={10} height={10}>
            <path d="M6 2v6M3.5 6L6 8.5 8.5 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2.5 10h7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
        </button>
        <button onClick={handleCopyTicker} className={`${styles.iconBtn} ${styles.iconBtnGray}`} title={`Скопировать тикер ${ticker}`}>
          {copiedTicker ? (
            <svg viewBox="0 0 12 12" fill="none" width={10} height={10}>
              <path d="M3 6.5l2 2 4-4.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ) : (
            <svg viewBox="0 0 12 12" fill="none" width={10} height={10}>
              <rect x="4" y="4" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1" />
              <path d="M8 4V3a1 1 0 00-1-1H3a1 1 0 00-1 1v4a1 1 0 001 1h1" stroke="currentColor" strokeWidth="1" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}

/* ─── Sector order ─── */

const SECTOR_ORDER: Sector[] = [
  'oil_gas', 'metals', 'banks', 'telecom_it',
  'energy', 'consumer', 'construction', 'transport',
  'chemicals', 'holding',
];

/* ─── Main page ─── */

export function LogosPage() {
  const [companyFilter, setCompanyFilter] = useState('');
  const [activeSector, setActiveSector] = useState<Sector | 'all'>('all');

  const allCompanies = useMemo(() => {
    const all = getAllCompanies();
    const seen = new Set<string>();
    return all.filter(c => {
      if (seen.has(c.ticker)) return false;
      seen.add(c.ticker);
      return true;
    });
  }, []);

  const filteredCompanies = useMemo(() => {
    let list = allCompanies;
    if (activeSector !== 'all') list = list.filter(c => c.sector === activeSector);
    if (companyFilter.trim()) {
      const q = companyFilter.trim().toLowerCase();
      list = list.filter(c => c.name.toLowerCase().includes(q) || c.nameEn.toLowerCase().includes(q) || c.ticker.toLowerCase().includes(q));
    }
    return list;
  }, [allCompanies, activeSector, companyFilter]);

  const grouped = useMemo(() => {
    const map = new Map<string, typeof filteredCompanies>();
    for (const c of filteredCompanies) {
      const arr = map.get(c.sector) || [];
      arr.push(c);
      map.set(c.sector, arr);
    }
    return SECTOR_ORDER.filter(s => map.has(s)).map(s => ({ sector: s, label: SECTOR_LABELS[s], companies: map.get(s)! }));
  }, [filteredCompanies]);

  const sectorCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const c of allCompanies) counts[c.sector] = (counts[c.sector] || 0) + 1;
    return counts;
  }, [allCompanies]);

  const thStyle: React.CSSProperties = { textAlign: 'left', padding: '8px 12px', color: 'var(--ds-text-secondary)', fontWeight: 500 };
  const tdBase: React.CSSProperties = { padding: '8px 12px' };

  return (
    <DocShell
      breadcrumbs={[
        { label: 'Components', to: '/components' },
        { label: 'Foundation' },
        { label: 'Logos' },
      ]}
      sidebar={<DocSidebar activeId="logos" />}
    >
      {/* ═══ Title ═══ */}
      <div style={{ marginBottom: 32 }}>
        <h1 style={{ fontSize: 24, lineHeight: '32px', color: 'var(--ds-text-primary)', marginBottom: 8 }}>Logos</h1>
        <p style={{ fontSize: 13, lineHeight: '20px', color: 'var(--ds-text-gray-dark)', maxWidth: 640 }}>
          Логотипы источников новостей и компаний, доступные в дизайн-системе.
          Наведите на карточку, чтобы скачать SVG или скопировать id.
        </p>
      </div>

      {/* ═══ PART 1: Source logos ═══ */}
      <DocSection title="Источники новостей" description={`${LOGOS.length} логотипов источников. Цвет: gray-6 (#677C9C)`}>
        <div className={styles.sourceGrid}>
          {LOGOS.map(entry => (
            <LogoCard key={entry.id} entry={entry} />
          ))}
        </div>
      </DocSection>

      {/* Source usage */}
      <DocSection title="Использование источников" description="Импорт и применение в коде">
        <DocPreview>
          <pre style={{ fontSize: 12, lineHeight: '18px', fontFamily: 'monospace', color: 'var(--ds-text-primary)', whiteSpace: 'pre', overflowX: 'auto' }}>
{`// Через DSBadge (рекомендуется)
import { DSBadge } from '@/components/ui/ds-badge';
<DSBadge variant="source" source="reuters" />

// Прямой импорт иконки
import { ReutersIcon } from '@/components/ui/source-icons';
<ReutersIcon className="size-[16px]" color="var(--ds-gray-6)" />`}
          </pre>
        </DocPreview>
      </DocSection>

      {/* Source reference table */}
      <DocSection title="Справочник источников" description="Полный список source id, русских названий и транскрипций">
        <div style={{ borderRadius: 8, border: '1px solid var(--ds-border-primary)', overflow: 'hidden' }}>
          <table style={{ width: '100%', fontSize: 12, lineHeight: '16px', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: 'var(--ds-bg-table-mark-header)' }}>
                <th style={{ ...thStyle, width: 40 }}>Icon</th>
                <th style={thStyle}>source id</th>
                <th style={thStyle}>Русское название</th>
                <th style={thStyle}>Транскрипция / EN</th>
              </tr>
            </thead>
            <tbody>
              {LOGOS.map(entry => (
                <tr key={entry.id} className={styles.tableRow} style={{ borderTop: '1px solid var(--ds-border-primary)' }}>
                  <td style={tdBase}>
                    <span style={{ display: 'inline-flex', width: 16, height: 16 }}><entry.Icon color="#677C9C" /></span>
                  </td>
                  <td style={{ ...tdBase, color: 'var(--ds-blue-6)', fontFamily: 'monospace' }}>{entry.id}</td>
                  <td style={{ ...tdBase, color: 'var(--ds-text-primary)' }}>{entry.nameRu}</td>
                  <td style={{ ...tdBase, color: 'var(--ds-text-gray-dark)' }}>{entry.nameEn}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </DocSection>

      {/* ═══ PART 2: Company logos ═══ */}
      <div style={{ marginTop: 48, marginBottom: 24, paddingTop: 32, borderTop: '1px solid var(--ds-border-primary)' }}>
        <h2 style={{ fontSize: 20, lineHeight: '28px', color: 'var(--ds-text-primary)', marginBottom: 8 }}>Компании MOEX</h2>
        <p style={{ fontSize: 13, lineHeight: '20px', color: 'var(--ds-text-gray-dark)', maxWidth: 640 }}>
          {allCompanies.length} компаний из базы. Для ключевых эмитентов доступны SVG-логотипы из Figma,
          для остальных — автогенерированные инициалы на брендовом фоне.
        </p>
      </div>

      {/* Filters */}
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 12, marginBottom: 16 }}>
        <div style={{ position: 'relative' }}>
          <svg viewBox="0 0 14 14" fill="none" width={12} height={12} style={{ position: 'absolute', left: 8, top: '50%', transform: 'translateY(-50%)', color: 'var(--ds-text-gray-dark)' }}>
            <circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeWidth="1.2" />
            <path d="M9.5 9.5L12.5 12.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
          <input
            type="text"
            value={companyFilter}
            onChange={e => setCompanyFilter(e.target.value)}
            placeholder="Поиск по названию или тикеру..."
            style={{
              height: 28, paddingLeft: 28, paddingRight: 12, borderRadius: 6,
              border: '1px solid var(--ds-border-primary)', backgroundColor: 'var(--ds-bg-primary)',
              fontSize: 11, lineHeight: '14px', color: 'var(--ds-text-primary)',
              width: 220, outline: 'none',
            }}
          />
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
          <button
            onClick={() => setActiveSector('all')}
            className={`${styles.pill} ${activeSector === 'all' ? styles.pillActive : styles.pillInactive}`}
          >
            Все ({allCompanies.length})
          </button>
          {SECTOR_ORDER.map(s => (
            <button
              key={s}
              onClick={() => setActiveSector(activeSector === s ? 'all' : s)}
              className={`${styles.pill} ${activeSector === s ? styles.pillActive : styles.pillInactive}`}
            >
              {SECTOR_LABELS[s]} ({sectorCounts[s] || 0})
            </button>
          ))}
        </div>
      </div>

      {/* Company grid by sector */}
      {grouped.map(group => (
        <DocSection key={group.sector} title={group.label} description={`${group.companies.length} компаний`}>
          <div className={styles.companyGrid}>
            {group.companies.map(c => (
              <CompanyLogoCard key={c.ticker} ticker={c.ticker} name={c.name} nameEn={c.nameEn} />
            ))}
          </div>
        </DocSection>
      ))}

      {filteredCompanies.length === 0 && (
        <div style={{ padding: '48px 0', textAlign: 'center', fontSize: 13, color: 'var(--ds-text-gray-dark)' }}>
          Компании не найдены. Попробуйте изменить фильтр.
        </div>
      )}

      {/* Company usage */}
      <DocSection title="Использование логотипов компаний" description="Импорт и применение в коде">
        <DocPreview>
          <pre style={{ fontSize: 12, lineHeight: '18px', fontFamily: 'monospace', color: 'var(--ds-text-primary)', whiteSpace: 'pre', overflowX: 'auto' }}>
{`// Универсальный компонент (SVG → fallback initials)
import { CompanyLogo } from '@/components/chart-builder/CompanyLogo';
<CompanyLogo ticker="SBER" size={24} />

// Только SVG (для ключевых эмитентов)
import { CompanyLogoSVG, hasRealLogo } from '@/components/chart-builder/company-logos';
if (hasRealLogo('SBER')) {
  <CompanyLogoSVG ticker="SBER" size={18} />
}`}
          </pre>
        </DocPreview>
      </DocSection>
    </DocShell>
  );
}