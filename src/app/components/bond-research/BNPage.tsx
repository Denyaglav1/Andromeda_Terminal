import React, { useState, useMemo, useRef, useEffect } from 'react';
import ReactECharts from 'echarts-for-react';
import { DSFilterSelect } from '../ui/ds-filter-select';
import { DSFilterTagBar, type FilterTag } from '../ui/ds-filter-tag-bar';
import { DSTable, type DSTableColumn } from '../ui/ds-table';
import {
  BN_CALENDAR_DATA, BN_FIXES_DATA, SCATTER_BASE_POINTS,
  RATING_OPTIONS, FREQUENCY_OPTIONS,
  type BNCalendarItem, type BNFixItem,
} from './bn-data';

/* ═══════════════════════════════════════════════════════
   BNPage — Новые выпуски (Bond New Issues)
   Tab 1: Календарь — таблица с бесконечным скроллом
   Tab 2: Фиксы — карточки + scatter chart
   ═══════════════════════════════════════════════════════ */

const PAGE_SIZE = 10;
const tnum: React.CSSProperties = { fontFeatureSettings: "'lnum', 'tnum'" };

// ── Рейтинг-бейдж ─────────────────────────────────────

function getRatingColor(rating: string): string {
  if (rating === 'AAA') return 'var(--ds-green-6)';
  if (rating.startsWith('AA') || rating.startsWith('A')) return 'var(--ds-blue-6)';
  if (rating.startsWith('BBB') || rating.startsWith('BB')) return 'var(--ds-yellow-6)';
  if (rating.startsWith('B')) return 'var(--ds-orange-6)';
  return 'var(--ds-red-6)';
}
function getRatingBg(rating: string): string {
  if (rating === 'AAA') return 'var(--ds-green-6-a10)';
  if (rating.startsWith('AA') || rating.startsWith('A')) return 'var(--ds-blue-6-a10)';
  if (rating.startsWith('BBB') || rating.startsWith('BB')) return 'var(--ds-yellow-6-a10)';
  if (rating.startsWith('B')) return 'var(--ds-orange-6-a10)';
  return 'var(--ds-red-6-a10)';
}

function RatingBadge({ rating }: { rating: string }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      height: 20, padding: '0 6px', borderRadius: 4,
      backgroundColor: getRatingBg(rating),
      color: getRatingColor(rating),
      fontSize: 11, fontWeight: 700, lineHeight: '14px',
      border: `1px solid ${getRatingColor(rating)}33`,
    }}>
      {rating}
    </span>
  );
}

function FrequencyBadge({ label }: { label: string }) {
  const isMonthly = label.startsWith('Еже');
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      height: 20, padding: '0 7px', borderRadius: 4,
      backgroundColor: isMonthly ? 'var(--ds-blue-6-a10)' : 'var(--ds-gray-6-a10)',
      color: isMonthly ? 'var(--ds-blue-6)' : 'var(--ds-gray-5)',
      fontSize: 11, fontWeight: 600, lineHeight: '14px',
      border: `1px solid ${isMonthly ? 'var(--ds-blue-6-a30)' : 'var(--ds-border-primary)'}`,
      whiteSpace: 'nowrap',
    }}>
      {label}
    </span>
  );
}


// ── Infinite scroll hook ───────────────────────────────

function useInfiniteScroll(totalCount: number) {
  const [visible, setVisible] = useState(PAGE_SIZE);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(v => Math.min(v + PAGE_SIZE, totalCount));
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [totalCount]);

  return { visible, sentinelRef };
}

// ── Фильтры (состояние) ───────────────────────────────

interface CalendarFilters {
  placementDate: [Date | null, Date | null];
  bookDate: [Date | null, Date | null];
  rating: string[];
  tenor: [number, number] | null;
  volume: [number, number] | null;
  frequency: string[];
  coupon: [number, number] | null;
}

interface FixesFilters {
  placementDate: [Date | null, Date | null];
  maturityDate: [Date | null, Date | null];
  rating: string[];
  tenor: [number, number] | null;
  yield: [number, number] | null;
  duration: [number, number] | null;
  volume: [number, number] | null;
  frequency: string[];
  coupon: [number, number] | null;
}

const EMPTY_CAL_FILTERS: CalendarFilters = {
  placementDate: [null, null], bookDate: [null, null],
  rating: [], tenor: null, volume: null, frequency: [], coupon: null,
};

const EMPTY_FIX_FILTERS: FixesFilters = {
  placementDate: [null, null], maturityDate: [null, null],
  rating: [], tenor: null, yield: null, duration: null, volume: null,
  frequency: [], coupon: null,
};

// ── Calendar table columns ─────────────────────────────

const CALENDAR_COLUMNS: DSTableColumn<BNCalendarItem>[] = [
  {
    id: 'placementDate', header: 'Размещение', width: 110, sortable: true,
    render: (v) => <span style={{ fontSize: 13, ...tnum }}>{v}</span>,
  },
  {
    id: 'bookDate', header: 'Дата книги', width: 110, sortable: true,
    render: (v) => <span style={{ fontSize: 13, ...tnum }}>{v}</span>,
  },
  {
    id: 'issuer', header: 'Эмитент', width: 200, sortable: true, flex: true,
    render: (v) => <span style={{ fontSize: 13, fontWeight: 600 }}>{v}</span>,
  },
  {
    id: 'rating', header: 'Рейтинг', width: 90, sortable: true,
    render: (v) => <RatingBadge rating={v} />,
  },
  {
    id: 'tenor', header: 'Срок обращ. / до оферты, лет', width: 160, sortable: true, align: 'right',
    render: (v) => <span style={{ fontSize: 13, ...tnum }}>{v}</span>,
  },
  {
    id: 'volume', header: 'Объём, млн', width: 110, sortable: true, align: 'right',
    render: (_v, row) => <span style={{ fontSize: 13, ...tnum }}>{row.volume >= 5000 ? '>5 000' : row.volume} {row.currency}</span>,
  },
  {
    id: 'frequency', header: 'Частота', width: 130, sortable: true,
    render: (v) => <FrequencyBadge label={v} />,
  },
  {
    id: 'coupon', header: 'Купон', width: 220, sortable: true,
    render: (v) => <span style={{ fontSize: 12 }}>{v}</span>,
  },
  {
    id: 'comment', header: 'Комментарий', width: 300, flex: true,
    render: (v) => <span style={{ fontSize: 11, color: 'var(--ds-text-gray-dark)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', display: 'block' }}>{v}</span>,
  },
];

// ── Таб: Календарь ────────────────────────────────────

function CalendarTab() {
  const [filters, setFilters] = useState<CalendarFilters>(EMPTY_CAL_FILTERS);

  const pf = <K extends keyof CalendarFilters>(key: K) => (v: CalendarFilters[K]) =>
    setFilters(f => ({ ...f, [key]: v }));
  const cf = <K extends keyof CalendarFilters>(key: K, empty: CalendarFilters[K]) =>
    setFilters(f => ({ ...f, [key]: empty }));

  const filtered = useMemo(() => {
    let data = [...BN_CALENDAR_DATA];
    if (filters.rating.length) data = data.filter(r => filters.rating.includes(r.rating));
    if (filters.frequency.length) data = data.filter(r => filters.frequency.includes(r.frequency));
    if (filters.tenor) data = data.filter(r => r.tenor >= filters.tenor![0] && r.tenor <= filters.tenor![1]);
    if (filters.volume) data = data.filter(r => r.volume >= filters.volume![0] && r.volume <= filters.volume![1]);
    if (filters.coupon) data = data.filter(r => r.coupon >= filters.coupon![0] && r.coupon <= filters.coupon![1]);
    return data;
  }, [filters]);

  const { visible, sentinelRef } = useInfiniteScroll(filtered.length);
  const rows = filtered.slice(0, visible);

  const tags = useMemo((): FilterTag[] => {
    const result: FilterTag[] = [];
    filters.rating.forEach(v => result.push({ id: `r_${v}`, label: v, onRemove: () => setFilters(f => ({ ...f, rating: f.rating.filter(x => x !== v) })) }));
    filters.frequency.forEach(v => result.push({ id: `fr_${v}`, label: v, onRemove: () => setFilters(f => ({ ...f, frequency: f.frequency.filter(x => x !== v) })) }));
    if (filters.tenor) result.push({ id: 'tenor', label: `Срок: ${filters.tenor[0]}–${filters.tenor[1]} лет`, onRemove: () => cf('tenor', null) });
    if (filters.volume) result.push({ id: 'volume', label: `Объём: ${filters.volume[0]}–${filters.volume[1]} млн`, onRemove: () => cf('volume', null) });
    if (filters.coupon) result.push({ id: 'coupon', label: `Купон: ${filters.coupon[0]}–${filters.coupon[1]}%`, onRemove: () => cf('coupon', null) });
    if (filters.placementDate[0] || filters.placementDate[1]) result.push({ id: 'pd', label: `Размещение: ${filters.placementDate[0]?.toLocaleDateString('ru') ?? '—'} – ${filters.placementDate[1]?.toLocaleDateString('ru') ?? '—'}`, onRemove: () => cf('placementDate', [null, null]) });
    if (filters.bookDate[0] || filters.bookDate[1]) result.push({ id: 'bd', label: `Дата книги: ${filters.bookDate[0]?.toLocaleDateString('ru') ?? '—'} – ${filters.bookDate[1]?.toLocaleDateString('ru') ?? '—'}`, onRemove: () => cf('bookDate', [null, null]) });
    return result;
  }, [filters]);

  return (
    <>
      {/* Filters */}
      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', padding: '8px 24px', borderBottom: '1px solid var(--ds-border-primary)', alignItems: 'center' }}>
        <DSFilterSelect type="date"     label="Размещение" value={filters.placementDate} onApply={pf('placementDate')} onClear={() => cf('placementDate', [null, null])} />
        <DSFilterSelect type="date"     label="Дата книги"  value={filters.bookDate}     onApply={pf('bookDate')}     onClear={() => cf('bookDate', [null, null])} />
        <DSFilterSelect type="checkbox" label="Рейтинг"    options={RATING_OPTIONS}   value={filters.rating}    onApply={pf('rating')}    onClear={() => cf('rating', [])} />
        <DSFilterSelect type="range"    label="Срок обращения" min={0} max={30} step={0.5} unit="лет" value={filters.tenor}  onApply={pf('tenor')}  onClear={() => cf('tenor', null)} />
        <DSFilterSelect type="range"    label="Купон"      min={0} max={30} step={0.1} unit="%" value={filters.coupon} onApply={pf('coupon')} onClear={() => cf('coupon', null)} />
        <DSFilterSelect type="range"    label="Объём"      min={0} max={10000} step={50} unit="млн" value={filters.volume} onApply={pf('volume')} onClear={() => cf('volume', null)} />
        <DSFilterSelect type="checkbox" label="Частота"    options={FREQUENCY_OPTIONS} value={filters.frequency} onApply={pf('frequency')} onClear={() => cf('frequency', [])} />
      </div>

      {/* Tag bar */}
      {tags.length > 0 && (
        <div style={{ padding: '6px 24px', borderBottom: '1px solid var(--ds-border-primary)' }}>
          <DSFilterTagBar tags={tags} onClearAll={() => setFilters(EMPTY_CAL_FILTERS)} />
        </div>
      )}

      {/* Table */}
      <div style={{ flex: 1, overflowY: 'auto', overflowX: 'auto' }}>
        <DSTable
          columns={CALENDAR_COLUMNS}
          data={rows}
          rowKeyField="id"
          compact
          hoverHighlight
          getRowStyle={(row) => row.highlight ? { backgroundColor: 'var(--ds-green-6-a10)' } : undefined}
          emptyContent={
            <div style={{ textAlign: 'center', padding: '48px', fontSize: 13, color: 'var(--ds-text-gray-dark)' }}>
              Нет данных по заданным фильтрам
            </div>
          }
        />
        <div ref={sentinelRef} style={{ height: 1 }} />
        {visible < filtered.length && (
          <div style={{ textAlign: 'center', padding: '12px', fontSize: 12, color: 'var(--ds-text-gray-dark)' }}>
            Загрузка...
          </div>
        )}
      </div>
    </>
  );
}

// ── Карточка облигации ────────────────────────────────

function BondCard({ item, selected, onClick }: { item: BNFixItem; selected: boolean; onClick: () => void }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: '14px 16px', borderRadius: 8, cursor: 'pointer',
        backgroundColor: selected
          ? 'var(--ds-blue-6-a30)'
          : hovered ? 'var(--ds-control-hover)' : 'transparent',
        border: selected
          ? '1px solid var(--ds-blue-6-a50)'
          : '1px solid var(--ds-border-primary)',
        transition: 'background-color 150ms ease, border-color 150ms ease',
        marginBottom: 8,
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
        <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--ds-text-primary)', ...tnum }}>{item.isin}</span>
        <div style={{ display: 'flex', gap: 6 }}>
          <RatingBadge rating={item.rating} />
          <FrequencyBadge label={item.frequency} />
        </div>
      </div>

      {/* Metrics grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '4px 8px' }}>
        {[
          { label: 'Размещение', value: item.placementDate },
          { label: 'Погашение',  value: item.maturityDate },
          { label: 'Объём, млн', value: `${item.volume >= 5000 ? '>5 000' : item.volume} ${item.currency}` },
          { label: 'Доходность', value: `${item.yield}%` },
          { label: 'Дюрация',    value: item.duration.toFixed(2) },
          { label: 'Купон',      value: `${item.coupon}%` },
        ].map(m => (
          <div key={m.label}>
            <div style={{ fontSize: 10, color: 'var(--ds-text-gray-dark)', marginBottom: 2 }}>{m.label}</div>
            <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--ds-text-primary)', ...tnum }}>{m.value}</div>
          </div>
        ))}
      </div>

      {/* Note */}
      {item.note && (
        <div style={{ marginTop: 8, fontSize: 11, color: 'var(--ds-orange-6)' }}>
          <span style={{ fontWeight: 600 }}>Обратить внимание: </span>{item.note}
        </div>
      )}
    </div>
  );
}

// ── Scatter chart ─────────────────────────────────────

function BNScatterChart({ selectedItem }: { selectedItem: BNFixItem | null }) {
  const [showOFZ, setShowOFZ] = useState(false);
  const [showAll, setShowAll] = useState(true);
  const [showCurrentYield, setShowCurrentYield] = useState(false);

  const option = useMemo(() => {
    const baseSeries = showAll ? [{
      name: 'Размещённые',
      type: 'scatter',
      symbolSize: 10,
      symbol: 'rect',
      data: SCATTER_BASE_POINTS.map(p => [p.duration, p.yield, p.name]),
      itemStyle: { color: 'var(--ds-blue-6)', opacity: 0.8 },
      label: {
        show: true, position: 'right', fontSize: 10,
        color: 'var(--ds-text-gray-dark)',
        formatter: (p: { value: [number, number, string] }) => p.value[2],
      },
    }] : [];

    const selectedSeries = selectedItem ? [{
      name: selectedItem.isin,
      type: 'scatter',
      symbolSize: 14,
      symbol: 'triangle',
      data: [[selectedItem.duration, selectedItem.yield, selectedItem.isin]],
      itemStyle: { color: 'var(--ds-orange-6)' },
      label: {
        show: true, position: 'right', fontSize: 11, fontWeight: 700,
        color: 'var(--ds-orange-6)',
        formatter: (p: { value: [number, number, string] }) => p.value[2],
      },
    }] : [];

    return {
      backgroundColor: 'transparent',
      grid: { left: 50, right: 80, top: 20, bottom: 40 },
      xAxis: {
        type: 'value', name: 'Дюрация', nameLocation: 'middle', nameGap: 28,
        nameTextStyle: { color: 'var(--ds-text-gray-dark)', fontSize: 11 },
        axisLine: { lineStyle: { color: 'var(--ds-border-primary)' } },
        splitLine: { lineStyle: { color: 'var(--ds-border-primary)', opacity: 0.4 } },
        axisLabel: { color: 'var(--ds-text-gray-dark)', fontSize: 10 },
      },
      yAxis: {
        type: 'value', name: 'Доходность, %', nameLocation: 'middle', nameGap: 40,
        nameTextStyle: { color: 'var(--ds-text-gray-dark)', fontSize: 11 },
        axisLine: { lineStyle: { color: 'var(--ds-border-primary)' } },
        splitLine: { lineStyle: { color: 'var(--ds-border-primary)', opacity: 0.4 } },
        axisLabel: { color: 'var(--ds-text-gray-dark)', fontSize: 10 },
      },
      tooltip: {
        trigger: 'item',
        backgroundColor: 'var(--ds-bg-secondary)',
        borderColor: 'var(--ds-border-primary)',
        textStyle: { color: 'var(--ds-text-primary)', fontSize: 12 },
        formatter: (p: { value: [number, number, string] }) =>
          `<b>${p.value[2]}</b><br/>Дюрация: ${p.value[0]}<br/>Доходность: ${p.value[1]}%`,
      },
      series: [...baseSeries, ...selectedSeries],
    };
  }, [selectedItem, showAll, showOFZ, showCurrentYield]);

  const toggleStyle = (active: boolean): React.CSSProperties => ({
    display: 'flex', alignItems: 'center', gap: 6, cursor: 'pointer',
    padding: '4px 0', userSelect: 'none',
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Toggles */}
      <div style={{ display: 'flex', gap: 20, padding: '12px 16px', borderBottom: '1px solid var(--ds-border-primary)' }}>
        {[
          { label: 'Кривая ОФЗ',       value: showOFZ,          set: setShowOFZ },
          { label: 'Все тикеры',        value: showAll,          set: setShowAll },
          { label: 'Текущая доходность',value: showCurrentYield, set: setShowCurrentYield },
        ].map(t => (
          <label key={t.label} style={toggleStyle(t.value)} onClick={() => t.set(!t.value)}>
            <div style={{
              width: 14, height: 14, borderRadius: 3, flexShrink: 0,
              border: `2px solid ${t.value ? 'var(--ds-blue-6)' : 'var(--ds-border-primary)'}`,
              backgroundColor: t.value ? 'var(--ds-blue-6)' : 'transparent',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'all 100ms ease',
            }}>
              {t.value && (
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                  <path d="M1.5 4L3 5.5L6.5 2" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </div>
            <span style={{ fontSize: 12, color: 'var(--ds-text-primary)' }}>{t.label}</span>
          </label>
        ))}
      </div>
      {/* Chart */}
      <div style={{ flex: 1, minHeight: 0 }}>
        <ReactECharts option={option} style={{ height: '100%', width: '100%' }} />
      </div>
    </div>
  );
}

// ── Таб: Фиксы ────────────────────────────────────────

function FixesTab() {
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState<FixesFilters>(EMPTY_FIX_FILTERS);
  const [selectedId, setSelectedId] = useState<string>(BN_FIXES_DATA[0]?.id ?? '');

  const pf = <K extends keyof FixesFilters>(key: K) => (v: FixesFilters[K]) =>
    setFilters(f => ({ ...f, [key]: v }));
  const cf = <K extends keyof FixesFilters>(key: K, empty: FixesFilters[K]) =>
    setFilters(f => ({ ...f, [key]: empty }));

  const filtered = useMemo(() => {
    let data = [...BN_FIXES_DATA];
    if (search) {
      const q = search.toLowerCase();
      data = data.filter(r => r.isin.toLowerCase().includes(q));
    }
    if (filters.rating.length) data = data.filter(r => filters.rating.includes(r.rating));
    if (filters.frequency.length) data = data.filter(r => filters.frequency.some(f => r.frequency.startsWith(f.split('й')[0])));
    if (filters.yield) data = data.filter(r => r.yield >= filters.yield![0] && r.yield <= filters.yield![1]);
    if (filters.duration) data = data.filter(r => r.duration >= filters.duration![0] && r.duration <= filters.duration![1]);
    if (filters.volume) data = data.filter(r => r.volume >= filters.volume![0] && r.volume <= filters.volume![1]);
    if (filters.coupon) data = data.filter(r => r.coupon >= filters.coupon![0] && r.coupon <= filters.coupon![1]);
    return data;
  }, [search, filters]);

  const { visible, sentinelRef } = useInfiniteScroll(filtered.length);
  const cards = filtered.slice(0, visible);

  const selectedItem = BN_FIXES_DATA.find(d => d.id === selectedId) ?? null;

  const tags = useMemo((): FilterTag[] => {
    const result: FilterTag[] = [];
    filters.rating.forEach(v => result.push({ id: `r_${v}`, label: v, onRemove: () => setFilters(f => ({ ...f, rating: f.rating.filter(x => x !== v) })) }));
    filters.frequency.forEach(v => result.push({ id: `fr_${v}`, label: v, onRemove: () => setFilters(f => ({ ...f, frequency: f.frequency.filter(x => x !== v) })) }));
    if (filters.yield) result.push({ id: 'yield', label: `Доходность: ${filters.yield[0]}–${filters.yield[1]}%`, onRemove: () => cf('yield', null) });
    if (filters.duration) result.push({ id: 'dur', label: `Дюрация: ${filters.duration[0]}–${filters.duration[1]}`, onRemove: () => cf('duration', null) });
    if (filters.volume) result.push({ id: 'vol', label: `Объём: ${filters.volume[0]}–${filters.volume[1]} млн`, onRemove: () => cf('volume', null) });
    if (filters.coupon) result.push({ id: 'coupon', label: `Купон: ${filters.coupon[0]}–${filters.coupon[1]}%`, onRemove: () => cf('coupon', null) });
    if (filters.tenor) result.push({ id: 'tenor', label: `Срок: ${filters.tenor[0]}–${filters.tenor[1]} лет`, onRemove: () => cf('tenor', null) });
    if (filters.placementDate[0] || filters.placementDate[1]) result.push({ id: 'pd', label: `Размещение: ${filters.placementDate[0]?.toLocaleDateString('ru') ?? '—'} – ${filters.placementDate[1]?.toLocaleDateString('ru') ?? '—'}`, onRemove: () => cf('placementDate', [null, null]) });
    if (filters.maturityDate[0] || filters.maturityDate[1]) result.push({ id: 'md', label: `Погашение: ${filters.maturityDate[0]?.toLocaleDateString('ru') ?? '—'} – ${filters.maturityDate[1]?.toLocaleDateString('ru') ?? '—'}`, onRemove: () => cf('maturityDate', [null, null]) });
    return result;
  }, [filters]);

  return (
    <>
      {/* Filters */}
      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', padding: '8px 24px', borderBottom: '1px solid var(--ds-border-primary)', alignItems: 'center' }}>
        <DSFilterSelect type="date"     label="Размещение" value={filters.placementDate} onApply={pf('placementDate')} onClear={() => cf('placementDate', [null, null])} />
        <DSFilterSelect type="date"     label="Погашение"  value={filters.maturityDate}  onApply={pf('maturityDate')}  onClear={() => cf('maturityDate', [null, null])} />
        <DSFilterSelect type="checkbox" label="Рейтинг"    options={RATING_OPTIONS}   value={filters.rating}    onApply={pf('rating')}    onClear={() => cf('rating', [])} />
        <DSFilterSelect type="range"    label="Срок обращения" min={0} max={30} step={0.5} unit="лет" value={filters.tenor}    onApply={pf('tenor')}    onClear={() => cf('tenor', null)} />
        <DSFilterSelect type="range"    label="Доходность" min={0} max={40} step={0.1} unit="%" value={filters.yield}    onApply={pf('yield')}    onClear={() => cf('yield', null)} />
        <DSFilterSelect type="range"    label="Дюрация"    min={0} max={1}  step={0.01}     value={filters.duration} onApply={pf('duration')} onClear={() => cf('duration', null)} />
        <DSFilterSelect type="range"    label="Купон"      min={0} max={30} step={0.1} unit="%" value={filters.coupon}   onApply={pf('coupon')}   onClear={() => cf('coupon', null)} />
        <DSFilterSelect type="range"    label="Объём"      min={0} max={10000} step={50} unit="млн" value={filters.volume} onApply={pf('volume')} onClear={() => cf('volume', null)} />
        <DSFilterSelect type="checkbox" label="Частота"    options={FREQUENCY_OPTIONS} value={filters.frequency} onApply={pf('frequency')} onClear={() => cf('frequency', [])} />
      </div>

      {/* Tag bar */}
      {tags.length > 0 && (
        <div style={{ padding: '6px 24px', borderBottom: '1px solid var(--ds-border-primary)' }}>
          <DSFilterTagBar tags={tags} onClearAll={() => setFilters(EMPTY_FIX_FILTERS)} />
        </div>
      )}

      {/* Content: cards + chart */}
      <div style={{ flex: 1, display: 'flex', minHeight: 0, overflow: 'hidden' }}>
        {/* Cards list */}
        <div style={{ width: '55%', overflowY: 'auto', padding: '12px 16px', borderRight: '1px solid var(--ds-border-primary)' }}>
          {cards.map(item => (
            <BondCard key={item.id} item={item} selected={item.id === selectedId} onClick={() => setSelectedId(item.id)} />
          ))}
          <div ref={sentinelRef} style={{ height: 1 }} />
          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '48px', fontSize: 13, color: 'var(--ds-text-gray-dark)' }}>
              Нет данных по заданным фильтрам
            </div>
          )}
        </div>

        {/* Scatter chart */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
          <BNScatterChart selectedItem={selectedItem} />
        </div>
      </div>
    </>
  );
}

// ── Search bar ─────────────────────────────────────────

function SearchBar({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 6,
      height: 32, padding: '0 10px', borderRadius: 6,
      border: '1px solid var(--ds-border-primary)',
      backgroundColor: 'var(--ds-bg-primary)',
      minWidth: 200,
    }}>
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ flexShrink: 0 }}>
        <circle cx="5" cy="5" r="3.5" stroke="var(--ds-text-gray-dark)" strokeWidth="1.2" />
        <path d="M8 8L10.5 10.5" stroke="var(--ds-text-gray-dark)" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
      <input
        type="text" placeholder="Поиск ISIN, Тикер" value={value} onChange={e => onChange(e.target.value)}
        style={{
          flex: 1, border: 'none', outline: 'none', background: 'transparent',
          fontSize: 12, color: 'var(--ds-text-primary)',
        }}
      />
      {value && (
        <button type="button" onClick={() => onChange('')} style={{ display: 'flex', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--ds-text-gray-dark)', padding: 0, outline: 'none' }}>
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M2 2L8 8M8 2L2 8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
          </svg>
        </button>
      )}
    </div>
  );
}

// ── Page ───────────────────────────────────────────────

export function BNPage() {
  const [tab, setTab] = useState<'calendar' | 'fixes'>('calendar');
  const [search, setSearch] = useState('');

  const now = new Date();
  const updated = `${String(now.getDate()).padStart(2, '0')}.${String(now.getMonth() + 1).padStart(2, '0')}.${now.getFullYear()}, ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

  const tabBtnStyle = (active: boolean): React.CSSProperties => ({
    height: 32, padding: '0 16px', borderRadius: 6, border: 'none',
    backgroundColor: active ? 'var(--ds-blue-6)' : 'transparent',
    color: active ? 'white' : 'var(--ds-text-gray-dark)',
    fontSize: 13, fontWeight: 600, cursor: 'pointer', outline: 'none',
    transition: 'background-color 150ms ease, color 150ms ease',
  });

  return (
    <div style={{
      display: 'flex', flexDirection: 'column', height: '100vh',
      backgroundColor: 'var(--ds-bg-primary)', overflow: 'hidden',
    }}>

      {/* Sub-header */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '8px 24px', borderBottom: '1px solid var(--ds-border-primary)',
        backgroundColor: 'var(--ds-bg-secondary)', flexShrink: 0,
      }}>
        {/* Left: tabs + search */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ display: 'flex', gap: 2, backgroundColor: 'var(--ds-bg-primary)', borderRadius: 8, padding: 3 }}>
            <button style={tabBtnStyle(tab === 'calendar')} onClick={() => setTab('calendar')}>Календарь</button>
            <button style={tabBtnStyle(tab === 'fixes')} onClick={() => setTab('fixes')}>Фиксы</button>
          </div>
          <SearchBar value={search} onChange={setSearch} />
        </div>

        {/* Right: updated timestamp + info */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ fontSize: 11, color: 'var(--ds-text-gray-dark)', ...tnum }}>
            Обновлено: {updated}
          </span>
          <button type="button" style={{
            display: 'flex', alignItems: 'center', gap: 4, background: 'none', border: 'none',
            cursor: 'pointer', color: 'var(--ds-blue-6)', fontSize: 11, outline: 'none', padding: 0,
          }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.2" />
              <path d="M7 6.5V10M7 4.5V5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
            </svg>
            Информация
          </button>
          <button type="button" style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            width: 28, height: 28, borderRadius: 6,
            border: '1px solid var(--ds-border-primary)',
            backgroundColor: 'transparent', cursor: 'pointer',
            color: 'var(--ds-text-gray-dark)', outline: 'none',
            transition: 'background-color 100ms ease',
          }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 1v8M4 6l3 3 3-3M2 11h10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* Tab content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0, overflow: 'hidden' }}>
        {tab === 'calendar' ? <CalendarTab /> : <FixesTab />}
      </div>

      {/* Footer */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '8px 24px', borderTop: '1px solid var(--ds-border-primary)',
        backgroundColor: 'var(--ds-bg-secondary)', flexShrink: 0,
      }}>
        <span style={{ fontSize: 11, color: 'var(--ds-text-gray-dark)' }}>© Andromeda 2025. Авторские права защищены.</span>
        <div style={{ display: 'flex', gap: 16 }}>
          <a href="mailto:support@euler.team" style={{ fontSize: 11, color: 'var(--ds-blue-6)', textDecoration: 'none' }}>support@euler.team</a>
          <a href="#" style={{ fontSize: 11, color: 'var(--ds-text-gray-dark)', textDecoration: 'none' }}>Политика конфиденциальности</a>
          <a href="#" style={{ fontSize: 11, color: 'var(--ds-text-gray-dark)', textDecoration: 'none' }}>Условия использования</a>
        </div>
      </div>
    </div>
  );
}
