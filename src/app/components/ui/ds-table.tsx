import React, {
  useState,
  useCallback,
  useMemo,
  useRef,
  type ReactNode,
  type CSSProperties,
} from 'react';
import tblStyles from './ds-table.module.css';

/* Simple className joiner — replaces cn() from lib/utils (no tailwind-merge needed) */
const cx = (...args: (string | false | null | undefined)[]) => args.filter(Boolean).join(' ');

/* ═══════════════════════════════════════════════════════════
   DSTable — Design System Table Component (Figma spec)
   ═══════════════════════════════════════════════════════════

   CSS Grid layout — header & body columns always aligned.
   Forecast cells coloured #45D3CE. Sorted column highlighted.
   Sort direction arrows (▲/▼) shown in header.
*/

/* ── Constants ── */
const FORECAST_COLOR = 'var(--ds-table-forecast-text, #45D3CE)';
const FORECAST_HEADER_BG = 'var(--ds-table-forecast-header-bg, #2a2e39)';
const FORECAST_CELL_BG = 'var(--ds-table-forecast-cell-bg, #151b27)';
const SORT_BG       = 'rgba(90, 140, 255, 0.06)';
const SORT_HEADER_BG = 'rgba(90, 140, 255, 0.12)';
const TABLE_HEADER_BG = 'var(--ds-table-header-bg, #2f3441)';
const TABLE_STICKY_BG = 'var(--ds-bg-primary, #131722)';
const TABLE_SORTED_STICKY_BG = 'var(--ds-table-sorted-sticky-bg, #343a52)';
const ZEBRA_ODD_BG = 'var(--ds-table-zebra-odd)';
const ZEBRA_ODD_STICKY_BG = 'var(--ds-table-zebra-odd-sticky)';

/* ── Sort direction arrows ── */

function SortArrows({ direction, className }: { direction?: 'asc' | 'desc' | null; className?: string }) {
  const activeColor = 'var(--ds-blue-6, #5A8CFF)';
  const idleColor   = 'var(--ds-gray-8, #313B4F)';
  return (
    <div className={cx(tblStyles.sortArrows, className)} style={{ width: 10, height: 14 }}>
      {/* ▲ up arrow */}
      <svg width="8" height="5" viewBox="0 0 8 5" fill="none">
        <path d="M4 0L7.5 5H0.5L4 0Z" fill={direction === 'asc' ? activeColor : idleColor} />
      </svg>
      {/* ▼ down arrow */}
      <svg width="8" height="5" viewBox="0 0 8 5" fill="none">
        <path d="M4 5L0.5 0H7.5L4 5Z" fill={direction === 'desc' ? activeColor : idleColor} />
      </svg>
    </div>
  );
}

/* ── Chevron for collapsible groups ── */

function GroupChevron({ expanded }: { expanded: boolean }) {
  return (
    <svg
      className={cx(tblStyles.chevronIcon, expanded ? tblStyles.chevronExpanded : tblStyles.chevronCollapsed)}
      fill="none" viewBox="0 0 12 12"
    >
      <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ─────────── Types ─────────── */

export type SortDirection = 'asc' | 'desc';
export type SortType = 'text' | 'number';
export type CellAlign = 'left' | 'center' | 'right';

export interface DSTableColumn<T = any> {
  id: string;
  header: string;
  group?: string;
  align?: CellAlign;
  /** Fixed width — e.g. 145 or '10%'. Default '145px'. */
  width?: number | string;
  /** CSS min-width (default '80px') */
  minWidth?: string;
  /** Stretch to fill (1fr). Overrides width. */
  flex?: boolean;
  sortable?: boolean;
  sortType?: SortType;
  /** Highlighted-column background */
  marked?: boolean;
  /** Custom cell renderer */
  render?: (value: any, row: T, rowIndex: number) => ReactNode;
  /** Column shows forecast data → turquoise header label */
  forecast?: boolean;
  cellClassName?: string;
  headerClassName?: string;
  groupBorderLeft?: boolean;
  /** Sticky to left edge */
  sticky?: boolean;
  stickyOffset?: number;
  /** Sticky to right edge */
  stickyEnd?: boolean;
  stickyEndOffset?: number;
  /** Per-cell dynamic className callback */
  getCellClassName?: (value: any, row: T, rowIndex: number) => string;
  /** Per-cell dynamic style callback */
  getCellStyle?: (value: any, row: T, rowIndex: number) => CSSProperties;
}

export interface DSTableRowGroup<T = any> {
  id: string;
  title: string;
  collapsible?: boolean;
  defaultExpanded?: boolean;
  rows: T[];
}

export interface DSTableProps<T = any> {
  columns: DSTableColumn<T>[];
  data: T[] | DSTableRowGroup<T>[];
  grouped?: boolean;
  rowKeyField?: string;
  className?: string;
  sortColumn?: string;
  sortDirection?: SortDirection;
  onSortChange?: (columnId: string, direction: SortDirection) => void;
  onRowClick?: (row: T, index: number) => void;
  onRowHover?: (row: T | null, index: number) => void;
  emptyContent?: ReactNode;
  stickyFirstColumn?: boolean;
  showLastBorder?: boolean;
  compact?: boolean;
  hoverHighlight?: boolean;
  zebra?: boolean;
  /** Override row height in px. Overrides compact. */
  rowHeight?: number;
}

/* ═══════════ Helpers ═══════════ */

function isNumericValue(v: any): boolean {
  if (typeof v === 'number') return true;
  if (typeof v === 'string') { const n = v.replace(/[\s,\u00a0]/g, ''); return !isNaN(Number(n)) && n.length > 0; }
  return false;
}
function toNumber(v: any): number {
  if (typeof v === 'number') return v;
  if (typeof v === 'string') { const p = parseFloat(v.replace(/[\s,\u00a0]/g, '').replace(',', '.')); return isNaN(p) ? 0 : p; }
  return 0;
}
function compareValues(a: any, b: any, type: SortType): number {
  if (type === 'number') return toNumber(a) - toNumber(b);
  return String(a ?? '').toLowerCase().localeCompare(String(b ?? '').toLowerCase(), 'ru');
}

function buildHeaderGroups<T>(columns: DSTableColumn<T>[]) {
  const groups: { key: string; label: string; colSpan: number; startIdx: number }[] = [];
  let hasGroups = false;
  let i = 0;
  while (i < columns.length) {
    const col = columns[i];
    if (col.group) {
      hasGroups = true;
      const gn = col.group;
      let span = 1;
      while (i + span < columns.length && columns[i + span].group === gn) span++;
      groups.push({ key: `grp-${gn}-${i}`, label: gn, colSpan: span, startIdx: i });
      i += span;
    } else {
      groups.push({ key: `col-${col.id}`, label: '', colSpan: 1, startIdx: i });
      i++;
    }
  }
  return { hasGroups, groups };
}

/* ═══════════ Component ═══════════ */

export function DSTable<T extends Record<string, any> = Record<string, any>>({
  columns,
  data,
  grouped = false,
  rowKeyField = 'id',
  className,
  sortColumn: sortColumnProp,
  sortDirection: sortDirectionProp,
  onSortChange,
  onRowClick,
  onRowHover,
  emptyContent,
  stickyFirstColumn = false,
  showLastBorder = false,
  compact = false,
  hoverHighlight = true,
  zebra = false,
  rowHeight: rowHeightProp,
}: DSTableProps<T>) {
  /* Scroll tracking for sticky column shadow */
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const handleScroll = useCallback(() => {
    if (scrollRef.current) setIsScrolled(scrollRef.current.scrollLeft > 0);
  }, []);

  /* Sort */
  const [intSortCol, setIntSortCol] = useState<string | null>(null);
  const [intSortDir, setIntSortDir] = useState<SortDirection>('asc');
  const sortCol = sortColumnProp ?? intSortCol;
  const sortDir = sortDirectionProp ?? intSortDir;

  const handleSort = useCallback((colId: string) => {
    if (onSortChange) {
      onSortChange(colId, sortCol === colId && sortDir === 'asc' ? 'desc' : 'asc');
    } else {
      setIntSortCol(prev => {
        if (prev === colId) { setIntSortDir(d => d === 'asc' ? 'desc' : 'asc'); return colId; }
        setIntSortDir('asc'); return colId;
      });
    }
  }, [sortCol, sortDir, onSortChange]);

  /* Collapsible groups */
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>(() => {
    if (!grouped) return {};
    const init: Record<string, boolean> = {};
    (data as DSTableRowGroup<T>[]).forEach(g => { init[g.id] = g.defaultExpanded !== false; });
    return init;
  });
  const toggleGroup = useCallback((gid: string) => setExpandedGroups(p => ({ ...p, [gid]: !p[gid] })), []);

  /* Header groups */
  const { hasGroups, groups } = useMemo(() => buildHeaderGroups(columns), [columns]);

  /* Sort rows */
  const sortRows = useCallback((rows: T[]): T[] => {
    if (!sortCol) return rows;
    const col = columns.find(c => c.id === sortCol);
    if (!col) return rows;
    const sType: SortType = col.sortType ?? (rows.length > 0 && isNumericValue(rows[0]?.[col.id]) ? 'number' : 'text');
    const sorted = [...rows].sort((a, b) => compareValues(a[col.id], b[col.id], sType));
    return sortDir === 'desc' ? sorted.reverse() : sorted;
  }, [sortCol, sortDir, columns]);

  /* CSS Grid template */
  const gridTemplate = useMemo(() => {
    return columns.map(col => {
      if (col.flex) {
        const min = col.minWidth ?? '80px';
        return `minmax(${min}, 1fr)`;
      }
      const w = col.width != null ? (typeof col.width === 'number' ? `${col.width}px` : col.width) : '145px';
      return w;
    }).join(' ');
  }, [columns]);

  const gridStyle: CSSProperties = useMemo(() => ({ display: 'grid', gridTemplateColumns: gridTemplate }), [gridTemplate]);

  /* Row height */
  const rowH = rowHeightProp ?? (compact ? 28 : 48);

  /* Sticky helper */
  const stickyProps = useCallback((colIdx: number, isHeader: boolean): CSSProperties | undefined => {
    const col = columns[colIdx];
    if (col.sticky || (stickyFirstColumn && colIdx === 0)) {
      return { position: 'sticky', left: col.stickyOffset ?? 0, zIndex: isHeader ? 30 : 20 };
    }
    if (col.stickyEnd) {
      return { position: 'sticky', right: col.stickyEndOffset ?? 0, zIndex: isHeader ? 30 : 20 };
    }
    return undefined;
  }, [columns, stickyFirstColumn]);

  /* ════════════ Render ════════════ */

  /* Group header row */
  const renderGroupHeaderRow = () => {
    if (!hasGroups) return null;
    const cells: ReactNode[] = [];
    groups.forEach(g => {
      const s = g.startIdx + 1;
      const e = s + g.colSpan;
      cells.push(
        <div key={g.key}
          className={cx(tblStyles.headerGroupCell,
            g.label ? tblStyles.justifyCenter + ' ' + tblStyles.groupCellCenterBg : '',
            !g.label && columns[g.startIdx].marked ? tblStyles.groupCellSurfaceBg : '',
            !g.label && !columns[g.startIdx].marked ? tblStyles.groupCellCenterBg : '',
          )}
          style={{ gridColumn: `${s} / ${e}` }}
        >
          <div aria-hidden="true" className={cx(tblStyles.headerGroupBorder, g.label && tblStyles.headerGroupBorderLabeled)} />
          {g.label && <span className={tblStyles.groupHeaderLabel}>{g.label}</span>}
        </div>,
      );
    });
    return <div style={gridStyle}>{cells}</div>;
  };

  /* Header cells row */
  const renderHeaderRow = () => (
    <div style={gridStyle}>
      {columns.map((col, ci) => {
        const isSorted = sortCol === col.id;
        const dir = isSorted ? sortDir : null;
        const isMarked = col.marked;
        const isForecast = col.forecast;
        const hasBorderLeft = col.groupBorderLeft || (col.group && ci > 0 && columns[ci - 1].group !== col.group);
        const isHeaderSticky = col.sticky || (stickyFirstColumn && ci === 0) || col.stickyEnd;
        const isHeaderStickyLeft = col.sticky || (stickyFirstColumn && ci === 0);
        /* Always opaque bg for header cells; use pre-computed opaque value for sorted */
        const bg = isSorted
          ? (isHeaderSticky ? TABLE_SORTED_STICKY_BG : SORT_HEADER_BG)
          : isMarked ? 'var(--ds-bg-primary, #131722)'
          : isForecast ? FORECAST_HEADER_BG : TABLE_HEADER_BG;
        const headerRightShadow = isScrolled && isHeaderStickyLeft
          ? 'inset -1px 0 0 var(--ds-border-primary, #2A2E39)'
          : undefined;

        const alignCls = col.align === 'right' ? tblStyles.justifyEnd
          : col.align === 'center' ? tblStyles.justifyCenter : tblStyles.justifyStart;

        return (
          <div key={col.id}
            className={cx(tblStyles.headerCell, alignCls,
              col.sortable && tblStyles.headerCellSortable,
              !isHeaderSticky && col.headerClassName)}
            style={{ backgroundColor: bg, ...(headerRightShadow ? { boxShadow: headerRightShadow } : {}), ...stickyProps(ci, true) }}
            onClick={col.sortable ? () => handleSort(col.id) : undefined}
            role={col.sortable ? 'button' : undefined}
            tabIndex={col.sortable ? 0 : undefined}
            onKeyDown={col.sortable ? (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleSort(col.id); } } : undefined}
          >
            {/* Semi-transparent overlay from headerClassName on sticky cells */}
            {isHeaderSticky && col.headerClassName && (
              <div className={cx(tblStyles.stickyOverlay, col.headerClassName)} />
            )}
            <div aria-hidden="true" className={cx(tblStyles.headerBorder, hasBorderLeft && tblStyles.headerBorderLeft)} />
            <div className={tblStyles.headerContent}>
              {/* For right-aligned columns put arrow before text so text stays flush-right */}
              {col.sortable && col.align === 'right' && (
                <SortArrows direction={dir} className={isSorted ? tblStyles.sortArrowsVisible : tblStyles.sortArrowsHidden} />
              )}
              <span className={tblStyles.headerText}
                style={{ color: col.forecast ? FORECAST_COLOR : 'var(--ds-text-primary, #E0E1E2)' }}
              >{col.header}</span>
              {col.sortable && col.align !== 'right' && (
                <SortArrows direction={dir} className={isSorted ? tblStyles.sortArrowsVisible : tblStyles.sortArrowsHidden} />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );

  /* Header wrapper */
  const renderHeader = () => (
    <div className={tblStyles.headerWrapper}>
      {hasGroups && renderGroupHeaderRow()}
      {renderHeaderRow()}
    </div>
  );

  /* Data cell */
  const renderCell = (col: DSTableColumn<T>, row: T, rowIdx: number, colIdx: number) => {
    const value = row[col.id];
    const isMarked = col.marked;
    const isSorted = sortCol === col.id;
    const isForecast = col.forecast;
    const hasBorderLeft = col.groupBorderLeft || (col.group && colIdx > 0 && columns[colIdx - 1].group !== col.group);

    let content: ReactNode;
    if (col.render) {
      content = col.render(value, row, rowIdx);
    } else if (value == null || value === '' || value === '-') {
      content = <span className={tblStyles.cellDash}>-</span>;
    } else if (isForecast) {
      content = <span className={tblStyles.cellForecast} style={{ color: FORECAST_COLOR }}>{typeof value === 'number' ? value.toLocaleString('ru-RU', { maximumFractionDigits: 2 }) : value}</span>;
    } else {
      content = <span className={tblStyles.cellValue}>{typeof value === 'number' ? value.toLocaleString('ru-RU', { maximumFractionDigits: 2 }) : value}</span>;
    }

    let bg: string | undefined;
    if (isSorted) bg = SORT_BG;
    else if (isMarked) bg = 'var(--ds-bg-primary, #131722)';
    else if (isForecast) bg = FORECAST_CELL_BG;
    const isStickyLeft = col.sticky || (stickyFirstColumn && colIdx === 0);
    const isStickyRight = col.stickyEnd;
    const isSticky = isStickyLeft || isStickyRight;
    const isOddZebra = zebra && rowIdx % 2 === 1;

    // Right sticky always needs opaque bg (content scrolls under from the left at any scroll position)
    // Left sticky only needs opaque bg when scrolled (content arrives from right)
    const needsOpaqueBg = isStickyRight || isScrolled;
    const stickyFallback = needsOpaqueBg
      ? (isOddZebra ? ZEBRA_ODD_STICKY_BG : TABLE_STICKY_BG)
      : undefined;
    const stickyBaseBg = isSticky ? (bg || stickyFallback) : bg;

    // Right border on sticky-left cells when scrolled
    const stickyRightShadow = isScrolled && isStickyLeft
      ? 'inset -1px 0 0 var(--ds-border-primary, #2A2E39)'
      : undefined;

    // Dynamic per-cell className / style
    const dynCls = col.getCellClassName ? col.getCellClassName(value, row, rowIdx) : '';
    const dynStyle = col.getCellStyle ? col.getCellStyle(value, row, rowIdx) : undefined;

    // Separate overlay bg from dynStyle so it doesn't replace opaque sticky bg
    let dynOverlayBg: string | undefined;
    let dynRestStyle: CSSProperties | undefined;
    if (dynStyle && isSticky && dynStyle.backgroundColor) {
      const { backgroundColor: overlayBg, ...rest } = dynStyle;
      dynOverlayBg = overlayBg as string;
      dynRestStyle = Object.keys(rest).length > 0 ? rest : undefined;
    } else {
      dynRestStyle = dynStyle;
    }

    const alignCls = col.align === 'right' ? tblStyles.justifyEnd
      : col.align === 'center' ? tblStyles.justifyCenter : tblStyles.justifyStart;

    return (
      <div key={col.id}
        className={cx(tblStyles.bodyCell, alignCls, col.cellClassName, dynCls, isOddZebra && !bg && (!isSticky || (!isScrolled && !isStickyRight)) && tblStyles.zebraOdd)}
        style={{ height: rowH, ...(stickyBaseBg ? { backgroundColor: stickyBaseBg } : {}), ...(stickyRightShadow ? { boxShadow: stickyRightShadow } : {}), ...stickyProps(colIdx, false), ...dynRestStyle }}
      >
        {/* Overlay for semi-transparent backgrounds on sticky cells */}
        {dynOverlayBg && <div className={tblStyles.dynOverlay} style={{ backgroundColor: dynOverlayBg }} />}
        <div aria-hidden="true" className={cx(tblStyles.cellBorder, tblStyles.cellBorderWithHover, hasBorderLeft && tblStyles.cellBorderLeft)} />
        {content}
      </div>
    );
  };

  /* Data row */
  const renderRow = (row: T, rowIdx: number, _isLast: boolean) => (
    <div key={row[rowKeyField] ?? rowIdx}
      className={cx(tblStyles.row, onRowClick && tblStyles.rowClickable)}
      style={gridStyle}
      onClick={onRowClick ? () => onRowClick(row, rowIdx) : undefined}
      onMouseEnter={onRowHover ? () => onRowHover(row, rowIdx) : undefined}
      onMouseLeave={onRowHover ? () => onRowHover(null, rowIdx) : undefined}
    >
      {columns.map((col, ci) => renderCell(col, row, rowIdx, ci))}
    </div>
  );

  /* Group title */
  const renderGroupTitle = (group: DSTableRowGroup<T>) => {
    const isExpanded = expandedGroups[group.id] !== false;
    return (
      <div key={`gtitle-${group.id}`}
        className={cx(tblStyles.groupTitle, group.collapsible && tblStyles.groupTitleCollapsible)}
        style={{ height: 32 }}
        onClick={group.collapsible ? () => toggleGroup(group.id) : undefined}
      >
        <div className={tblStyles.groupTitleInner} style={{ position: 'sticky', left: 0, zIndex: 15 }}>
          {group.collapsible && <GroupChevron expanded={isExpanded} />}
          <span className={cx(tblStyles.groupTitleText, group.collapsible && tblStyles.groupTitleTextCollapsible)}>{group.title}</span>
        </div>
      </div>
    );
  };

  /* Body */
  const renderBody = () => {
    if (grouped) {
      const gd = data as DSTableRowGroup<T>[];
      if (gd.length === 0) return emptyContent ?? <div className={tblStyles.emptyState}>Нет данных</div>;
      return <>{gd.map((g, gi) => { const exp = expandedGroups[g.id] !== false; const s = sortRows(g.rows); return (<div key={g.id} style={{ minWidth: 'fit-content' }}>{renderGroupTitle(g)}{exp && s.map((r, ri) => renderRow(r, ri, ri === s.length - 1))}</div>); })}</>;
    }
    const rows = data as T[];
    if (rows.length === 0) return emptyContent ?? <div className={tblStyles.emptyState}>Нет данных</div>;
    const s = sortRows(rows);
    return <>{s.map((r, ri) => renderRow(r, ri, ri === s.length - 1))}</>;
  };

  return (
    <div ref={scrollRef} onScroll={handleScroll} className={cx(tblStyles.tableRoot, className)}>
      {renderHeader()}
      {renderBody()}
    </div>
  );
}

/* ═══════════════════════════════════════
   Cell helper sub-components
   ═══════════════════════════════════════ */

export function DSTableCellTicker({ children, icon, onClick, className }: { children: ReactNode; icon?: ReactNode; onClick?: () => void; className?: string }) {
  return (
    <div className={cx(tblStyles.tickerRow, className)}>
      {icon && <span className={tblStyles.tickerIcon}>{icon}</span>}
      <span className={cx(tblStyles.tickerText, onClick && tblStyles.tickerLink)}
        onClick={onClick}>{children}</span>
    </div>
  );
}

export function DSTableCellPrice({ value, trend, className }: { value: string | number; trend?: 'up' | 'down' | null; className?: string }) {
  return (
    <div className={cx(tblStyles.priceRow, className)}>
      {trend && (
        <svg className={tblStyles.priceTrendIcon} viewBox="0 0 12 12" fill="none">
          {trend === 'up' ? <path d="M6 2L10 8H2L6 2Z" fill="var(--ds-green-5, #089981)" /> : <path d="M6 10L2 4H10L6 10Z" fill="var(--ds-red-5, #EA3943)" />}
        </svg>
      )}
      <span className={tblStyles.priceText}>
        {typeof value === 'number' ? value.toLocaleString('ru-RU', { maximumFractionDigits: 2 }) : value}
      </span>
    </div>
  );
}

export function DSTableCellNumber({ value, forecast = false, className }: { value: number | string | null; forecast?: boolean; className?: string }) {
  if (value == null || value === '' || value === '-') {
    return <span className={cx(tblStyles.numberDash, className)}>-</span>;
  }
  const formatted = typeof value === 'number' ? value.toLocaleString('ru-RU', { maximumFractionDigits: 2 }) : value;
  return (
    <span className={cx(tblStyles.numberValue, !forecast && tblStyles.numberValueRegular, className)}
      style={forecast ? { color: FORECAST_COLOR } : undefined}>{formatted}</span>
  );
}

/** Period-over-period percentage change indicator */
export function DSTableCellPctChange({ pctChange, className }: { pctChange: number | null | undefined; className?: string }) {
  if (pctChange == null || !isFinite(pctChange)) return null;
  const isPositive = pctChange >= 0;
  return (
    <div className={cx(tblStyles.pctRow, className)}>
      <svg className={tblStyles.pctIcon} width="8" height="6" viewBox="0 0 8 6" fill="none">
        {isPositive
          ? <path d="M4 0L7.5 6H0.5L4 0Z" fill="var(--ds-green-5, #089981)" />
          : <path d="M4 6L0.5 0H7.5L4 6Z" fill="var(--ds-red-5, #EA3943)" />
        }
      </svg>
      <span className={tblStyles.pctText}>
        {Math.abs(pctChange).toFixed(1)}%
      </span>
    </div>
  );
}

/** Editable inline input cell for data-entry tables */
export function DSTableCellEditable({
  value,
  onChange,
  placeholder = '',
  className,
  inputClassName,
  highlighted = false,
  readOnly = false,
}: {
  value: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
  inputClassName?: string;
  /** Orange highlight for manually edited cells */
  highlighted?: boolean;
  readOnly?: boolean;
}) {
  return (
    <div className={cx(tblStyles.editableRoot, className)}>
      <input
        type="text"
        value={value}
        onChange={onChange ? (e) => onChange(e.target.value) : undefined}
        readOnly={readOnly}
        placeholder={placeholder}
        className={cx(
          tblStyles.editableInput,
          highlighted && tblStyles.editableInputHighlighted,
          readOnly && tblStyles.editableInputReadOnly,
          inputClassName,
        )}
      />
    </div>
  );
}