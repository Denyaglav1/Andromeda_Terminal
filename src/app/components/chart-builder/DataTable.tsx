import React, { useState, useMemo, useRef, useEffect, useCallback } from 'react';
import { Plus, Trash2, ClipboardPaste, X, BarChart3, TrendingUp, PenLine, Pencil } from 'lucide-react';
import { DSButton } from '../ui/ds-button';
import type { ChartState, Series, DataSource, DataGroup, Frequency } from './types';
import { DS } from './types';
import { parseNum, tryParseDate, isDateColumn } from './helpers';
import { CompanyLogo } from './CompanyLogo';
import { periodLabel, normalizePeriodKey, comparePeriodKeys } from './market-data';
import dt from './DataTable.module.css';

/* ═══════════════════════════════════════════════════════
   DataTable — Data editor with group-level tabs
   Shows data grouped by DataGroup (source);
   Each tab represents a DataGroup containing one or more columns
   ═══════════════════════════════════════════════════════ */

interface DataTableProps {
  state: ChartState;
  onChange: (s: ChartState) => void;
  onOpenAddModal?: () => void;
  onEditSeries?: (ds: DataSource) => void;
}

const SOURCE_ICONS: Record<string, React.ElementType> = {
  stock: BarChart3,
  commodity: TrendingUp,
  manual: PenLine,
};

const FREQ_SHORT: Record<string, string> = {
  yearly: 'Год',
  half: 'П/Г',
  quarterly: 'Кв',
  monthly: 'Мес',
};

export function DataTable({ state, onChange, onOpenAddModal, onEditSeries }: DataTableProps) {
  const [editCell, setEditCell] = useState<{ row: number; col: number } | null>(null);
  const [editValue, setEditValue] = useState('');
  const [activeTabId, setActiveTabId] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => { if (editCell && inputRef.current) inputRef.current.focus(); }, [editCell]);

  // Build tab items: group by DataGroup, then orphan columns
  const tabItems = useMemo(() => {
    const dataSources = state.dataSources || [];
    const dataGroups = state.dataGroups || [];
    const items: {
      id: string;
      label: string;
      type: string;
      colIndexes: number[];
      colors: string[];
      group?: DataGroup;
      dataSources: DataSource[];
      instrumentId?: string;
      frequency?: Frequency;
      dsCount: number;
    }[] = [];

    // Group dataSources by groupId
    const groupedDS = new Map<string, DataSource[]>();
    const ungroupedDS: DataSource[] = [];
    for (const ds of dataSources) {
      if (ds.groupId) {
        const list = groupedDS.get(ds.groupId) || [];
        list.push(ds);
        groupedDS.set(ds.groupId, list);
      } else {
        ungroupedDS.push(ds);
      }
    }

    // Tabs for each DataGroup
    for (const group of dataGroups) {
      const groupDSList = groupedDS.get(group.id) || [];
      if (groupDSList.length === 0) continue;
      const colIdxs = groupDSList.map(ds => ds.columnIndex);
      const colors = groupDSList.map(ds => {
        const s = state.series.find(s => s.id === ds.seriesId);
        return s?.color || DS.palette[0];
      });
      items.push({
        id: group.id,
        label: group.label,
        type: group.type,
        colIndexes: colIdxs,
        colors,
        group,
        dataSources: groupDSList,
        instrumentId: group.instrumentId,
        frequency: group.frequency,
        dsCount: groupDSList.length,
      });
    }

    // Ungrouped dataSources (legacy, no groupId) — each becomes its own tab
    for (const ds of ungroupedDS) {
      const s = state.series.find(s => s.id === ds.seriesId);
      items.push({
        id: ds.id,
        label: ds.label,
        type: ds.type,
        colIndexes: [ds.columnIndex],
        colors: [s?.color || DS.palette[0]],
        dataSources: [ds],
        instrumentId: ds.instrumentId,
        frequency: ds.frequency,
        dsCount: 1,
      });
    }

    // Orphan columns (not in dataSources)
    const allDSCols = new Set(dataSources.map(ds => ds.columnIndex));
    const orphanCols: number[] = [];
    state.headers.forEach((h, ci) => {
      if (ci === state.xColumnIndex) return;
      if (allDSCols.has(ci)) return;
      orphanCols.push(ci);
    });
    if (orphanCols.length > 0) {
      const colors = orphanCols.map(ci => {
        const series = state.series.find(s => s.name === state.headers[ci]);
        return series?.color || DS.palette[ci % DS.palette.length];
      });
      items.push({
        id: 'orphans',
        label: 'Прочие',
        type: 'orphan',
        colIndexes: orphanCols,
        colors,
        dataSources: [],
        dsCount: orphanCols.length,
      });
    }

    return items;
  }, [state.dataSources, state.dataGroups, state.headers, state.series, state.xColumnIndex]);

  // Auto-select first tab if needed
  useEffect(() => {
    if (tabItems.length > 0 && (!activeTabId || !tabItems.find(t => t.id === activeTabId))) {
      setActiveTabId(tabItems[0].id);
    } else if (tabItems.length === 0) {
      setActiveTabId(null);
    }
  }, [tabItems, activeTabId]);

  const activeTab = useMemo(() => tabItems.find(t => t.id === activeTabId), [tabItems, activeTabId]);

  // Column types for validation
  const colTypes = useMemo(() => {
    return state.headers.map((_, ci) => {
      const vals = state.rows.map(r => r[ci] || '').filter(v => v.trim() !== '');
      if (vals.length === 0) return 'any' as const;
      if (ci === state.xColumnIndex) return isDateColumn(vals) ? 'date' as const : 'any' as const;
      const numCount = vals.filter(v => parseNum(v) !== null).length;
      return numCount / vals.length >= 0.5 ? 'number' as const : 'any' as const;
    });
  }, [state.headers, state.rows, state.xColumnIndex]);

  const isCellInvalid = (ci: number, value: string): boolean => {
    if (!value || value.trim() === '') return false;
    const ct = colTypes[ci];
    if (ct === 'any') return false;
    if (ct === 'number') return parseNum(value) === null;
    if (ct === 'date') return tryParseDate(value) === null && parseNum(value) === null;
    return false;
  };

  const startEdit = (row: number, col: number) => {
    setEditCell({ row, col });
    setEditValue(state.rows[row]?.[col] ?? '');
  };

  const commitEdit = () => {
    if (!editCell) return;
    const newRows = state.rows.map(r => [...r]);
    if (newRows[editCell.row]) newRows[editCell.row][editCell.col] = editValue;
    onChange({ ...state, rows: newRows });
    setEditCell(null);
  };

  const addRow = () => onChange({ ...state, rows: [...state.rows, state.headers.map(() => '')] });

  const removeRow = (idx: number) => onChange({ ...state, rows: state.rows.filter((_, i) => i !== idx) });

  /** Add a new empty column (manual series) inline from the table */
  const addColumn = useCallback(() => {
    const colName = `Ряд ${state.series.length + 1}`;
    const seriesId = `s${Date.now()}_mc`;
    const colIdx = state.headers.length;
    const newHeaders = [...state.headers, colName];
    const newRows = state.rows.map(r => { const ext = [...r]; while (ext.length < newHeaders.length) ext.push(''); return ext; });
    const newSeries: Series = {
      id: seriesId, name: colName, type: 'line',
      color: DS.palette[(state.series.length) % DS.palette.length],
      yAxis: 'y1', visible: true, strokeWidth: 2,
      showDataLabels: false, dataLabelFontSize: 9, dataLabelColor: '', dataLabelStyle: 'plain',
    };

    // If active tab is a manual group, attach the new column to it
    const targetGroupId = activeTab?.group?.type === 'manual' ? activeTab.group.id : undefined;

    const ds: DataSource = {
      id: `ds_${Date.now()}_mc`, type: 'manual', label: colName,
      groupId: targetGroupId,
      frequency: 'yearly', periodFrom: '2019', periodTo: '2025',
      seriesId, columnIndex: colIdx,
    };
    onChange({
      ...state,
      headers: newHeaders,
      rows: newRows,
      series: [...state.series, newSeries],
      dataSources: [...(state.dataSources || []), ds],
    });
    setTimeout(() => setActiveTabId(targetGroupId || ds.id), 0);
  }, [state, onChange, activeTab]);

  const removeColumn = useCallback((idx: number) => {
    if (idx === state.xColumnIndex) return;
    const removedHeader = state.headers[idx];
    const newHeaders = state.headers.filter((_, i) => i !== idx);
    const newRows = state.rows.map(r => r.filter((_, i) => i !== idx));
    const newSeries = state.series.filter(s => s.name !== removedHeader);
    const newXCol = idx < state.xColumnIndex ? state.xColumnIndex - 1 : state.xColumnIndex;
    const newDS = [...(state.dataSources || [])]
      .filter(ds => ds.columnIndex !== idx)
      .map(ds => ({ ...ds, columnIndex: ds.columnIndex > idx ? ds.columnIndex - 1 : ds.columnIndex }));
    onChange({ ...state, headers: newHeaders, rows: newRows, series: newSeries, xColumnIndex: newXCol, dataSources: newDS });
  }, [state, onChange]);

  const removeDataSource = useCallback((dsId: string) => {
    const ds = (state.dataSources || []).find(d => d.id === dsId);
    if (!ds) return;
    removeColumn(ds.columnIndex);
  }, [state, removeColumn]);

  /** Remove an entire group and all its columns */
  const removeGroup = useCallback((groupId: string) => {
    const groupDS = (state.dataSources || []).filter(ds => ds.groupId === groupId);
    if (groupDS.length === 0) return;
    // Sort descending by columnIndex so removals don't shift earlier indexes
    const sortedCols = groupDS.map(ds => ds.columnIndex).sort((a, b) => b - a);
    let newHeaders = [...state.headers];
    let newRows = state.rows.map(r => [...r]);
    let newSeries = [...state.series];
    let newXCol = state.xColumnIndex;
    let newDS = [...(state.dataSources || [])];
    for (const ci of sortedCols) {
      const removedHeader = newHeaders[ci];
      newHeaders = newHeaders.filter((_, i) => i !== ci);
      newRows = newRows.map(r => r.filter((_, i) => i !== ci));
      newSeries = newSeries.filter(s => s.name !== removedHeader);
      if (ci < newXCol) newXCol--;
      newDS = newDS.filter(ds => ds.columnIndex !== ci).map(ds => ({
        ...ds,
        columnIndex: ds.columnIndex > ci ? ds.columnIndex - 1 : ds.columnIndex,
      }));
    }
    const newGroups = (state.dataGroups || []).filter(g => g.id !== groupId);
    onChange({ ...state, headers: newHeaders, rows: newRows, series: newSeries, xColumnIndex: newXCol, dataSources: newDS, dataGroups: newGroups });
  }, [state, onChange]);

  const updateHeader = (idx: number, val: string) => {
    const oldName = state.headers[idx];
    const newHeaders = [...state.headers]; newHeaders[idx] = val;
    const newSeries = state.series.map(s => s.name === oldName ? { ...s, name: val } : s);
    const newDS = (state.dataSources || []).map(ds => ds.columnIndex === idx ? { ...ds, label: val } : ds);
    onChange({ ...state, headers: newHeaders, series: newSeries, dataSources: newDS });
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const text = e.clipboardData.getData('text/plain');
    if (!text.trim()) return;
    const lines = text.split(/\r?\n/).filter(l => l.trim());
    if (!lines.length) return;
    const parsed = lines.map(l => l.split('\t'));
    const maxCols = Math.max(...parsed.map(r => r.length));
    const firstRow = parsed[0];
    const isHeader = firstRow.some(v => isNaN(Number(v.replace(/[\s,\u00a0]/g, '').replace(',', '.'))) && v.trim() !== '');
    let headers: string[];
    let rows: string[][];
    if (isHeader) {
      headers = firstRow.map((h, i) => h.trim() || `Col ${i + 1}`);
      rows = parsed.slice(1).map(r => { while (r.length < maxCols) r.push(''); return r.map(v => v.trim()); });
    } else {
      headers = Array.from({ length: maxCols }, (_, i) => i === 0 ? 'X' : `Y${i}`);
      rows = parsed.map(r => { while (r.length < maxCols) r.push(''); return r.map(v => v.trim()); });
    }
    // Normalize period keys in the first column (X axis) so that
    // Excel formats like "1П 2020", "Q1'22", "Янв 2020" become canonical
    rows.forEach(r => { if (r[0]) r[0] = normalizePeriodKey(r[0]); });
    // Sort by time position instead of lexicographic order
    rows.sort((a, b) => comparePeriodKeys(a[0], b[0]));
    const newSeries: Series[] = headers.slice(1).map((h, i) => ({
      id: `sp${Date.now()}_${i}`, name: h, type: i === 0 ? 'bar' : 'line',
      color: DS.palette[i % DS.palette.length], yAxis: 'y1', visible: true, strokeWidth: 2, showDataLabels: false,
      dataLabelFontSize: 9, dataLabelColor: '', dataLabelStyle: 'plain' as const,
    }));
    onChange({ ...state, headers, rows, xColumnIndex: 0, series: newSeries, dataSources: [] });
  };

  // Columns to display for the active tab
  const displayCols = useMemo(() => {
    if (!activeTab) return state.headers.map((_, i) => i);
    return [state.xColumnIndex, ...activeTab.colIndexes];
  }, [activeTab, state.headers, state.xColumnIndex]);

  // Filter rows: show only rows where at least one column in the group has a value
  const displayRows = useMemo(() => {
    if (!activeTab) return state.rows.map((_, i) => i);

    if (activeTab.type === 'manual' || activeTab.type === 'orphan') {
      return state.rows
        .map((r, i) => ({ row: r, i }))
        .filter(({ row }) => {
          const xVal = row[state.xColumnIndex] || '';
          if (!xVal) return false;
          const yr = xVal.split('-')[0].replace('F', '');
          if (!/^\d{4}$/.test(yr)) return true;
          // Show if the group's period range covers this year
          if (activeTab.group) {
            return yr >= activeTab.group.periodFrom && yr <= activeTab.group.periodTo;
          }
          return true;
        })
        .map(({ i }) => i);
    }

    // For stock/commodity: show only rows with non-empty values in any group column
    return state.rows
      .map((r, i) => ({ row: r, i }))
      .filter(({ row }) => {
        return activeTab.colIndexes.some(ci => {
          const val = row[ci];
          return val !== undefined && val !== null && val.trim() !== '';
        });
      })
      .map(({ i }) => i);
  }, [activeTab, state.rows, state.xColumnIndex]);

  const noSeries = tabItems.length === 0;

  return (
    <div className={dt.root}>
      {/* ── Source group tabs bar ── */}
      <div className={dt.tabBar}>
        <span className={dt.tabBarLabel}>Источники:</span>

        {/* + button */}
        {onOpenAddModal && (
          <button
            onClick={onOpenAddModal}
            className={dt.addBtn}
            title="Добавить данные"
          >
            <Plus className={dt.iconSm} />
          </button>
        )}

        {tabItems.map(tab => {
          const Icon = SOURCE_ICONS[tab.type] || BarChart3;
          const isActive = activeTabId === tab.id;
          return (
            <div
              key={tab.id}
              onClick={() => setActiveTabId(tab.id)}
              className={isActive ? dt.tabActive : dt.tab}
            >
              {/* Color dots for group columns */}
              <div className={dt.tabDots}>
                {tab.colors.slice(0, 3).map((c, i) => (
                  <div key={i} className={dt.tabDot} style={{ backgroundColor: c }} />
                ))}
                {tab.colors.length > 3 && (
                  <span className={dt.tabDotsMore}>+{tab.colors.length - 3}</span>
                )}
              </div>
              {tab.instrumentId && (
                <CompanyLogo ticker={tab.instrumentId} logoBg="" logoColor="" logoText="" size={12} />
              )}
              <Icon className={dt.tabIcon} />
              <span className={dt.tabLabel}>{tab.label}</span>
              {tab.dsCount > 1 && (
                <span className={dt.tabBadge}>{tab.dsCount}</span>
              )}
              {tab.frequency && (
                <span className={dt.tabFreq}>{FREQ_SHORT[tab.frequency]}</span>
              )}
              {/* Edit button — opens AddSeriesModal in edit mode */}
              {tab.dataSources.length > 0 && onEditSeries && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onEditSeries(tab.dataSources[0]);
                  }}
                  className={dt.tabEditBtn}
                  title="Редактировать источник"
                >
                  <Pencil className={dt.iconXs} />
                </button>
              )}
              {/* Delete button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  if (tab.group) {
                    removeGroup(tab.group.id);
                  } else if (tab.type === 'orphan') {
                    tab.colIndexes.sort((a, b) => b - a).forEach(ci => removeColumn(ci));
                  } else {
                    removeColumn(tab.colIndexes[0]);
                  }
                }}
                className={dt.tabDeleteBtn}
                title="Удалить источник"
              >
                <X className={dt.iconXs} />
              </button>
            </div>
          );
        })}
      </div>

      {/* ── Table info bar ── */}
      <div className={dt.infoBar}>
        <div className={dt.infoLeft}>
          <span className={dt.infoText}>
            {activeTab
              ? `${displayRows.length} строк · ${displayCols.length - 1} столб.`
              : `${state.rows.length} строк x ${state.headers.length} столбцов`
            }
          </span>
        </div>
        <div className={dt.infoRight}>
          {(activeTab?.type === 'manual' || activeTab?.type === 'orphan' || !activeTab) && (
            <>
              <DSButton variant="ghost" size="sm" leftIcon={<Plus className={dt.iconSm} />} onClick={addRow}>Строка</DSButton>
              <DSButton variant="ghost" size="sm" leftIcon={<Plus className={dt.iconSm} />} onClick={addColumn}>Столбец</DSButton>
            </>
          )}
        </div>
      </div>

      {/* ── Data table ── */}
      <div className={dt.tableScroll} onPaste={handlePaste}>
        {noSeries ? (
          <div className={dt.emptyState}>
            <ClipboardPaste className={dt.emptyIcon} />
            <span className={dt.emptyText}>Нет данных. Добавьте ряд или вставьте данные из Excel (Ctrl+V)</span>
            {onOpenAddModal && (
              <DSButton variant="primary" size="sm" leftIcon={<Plus className={dt.iconMd} />} onClick={onOpenAddModal}>
                Добавить данные
              </DSButton>
            )}
          </div>
        ) : (
          <table className={dt.table} style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
            <thead>
              <tr className={dt.thead}>
                <th className={dt.thIndex}>#</th>
                {displayCols.map(ci => (
                  <th key={ci} className={dt.th}>
                    <div className={dt.thRow}>
                      <input className={dt.thInput}
                        value={state.headers[ci]} onChange={e => updateHeader(ci, e.target.value)} />
                      {ci === state.xColumnIndex && <span className={dt.thBadgeX}>X</span>}
                      {colTypes[ci] === 'number' && ci !== state.xColumnIndex && <span className={dt.thBadgeNum}>#</span>}
                      {ci !== state.xColumnIndex && displayCols.length > 2 && (
                        <button
                          onClick={() => removeColumn(ci)}
                          className={dt.thDeleteBtn}
                          title="Удалить столбец"
                        >
                          <X className={dt.iconSm} />
                        </button>
                      )}
                    </div>
                  </th>
                ))}
                <th className={dt.thEmpty} />
              </tr>
            </thead>
            <tbody>
              {displayRows.map((ri) => {
                const row = state.rows[ri];
                if (!row) return null;
                return (
                  <tr key={ri} className={dt.tr}>
                    <td className={dt.tdIndex}>{ri + 1}</td>
                    {displayCols.map(ci => {
                      const cell = row[ci] || '';
                      const invalid = isCellInvalid(ci, cell);
                      const isXCol = ci === state.xColumnIndex;
                      return (
                        <td key={ci} className={invalid ? dt.tdInvalid : dt.td} onClick={() => startEdit(ri, ci)}>
                          {editCell?.row === ri && editCell?.col === ci ? (
                            <input ref={inputRef} className={dt.cellInput}
                              value={editValue} onChange={e => setEditValue(e.target.value)} onBlur={commitEdit}
                              onKeyDown={e => {
                                if (e.key === 'Enter') commitEdit();
                                if (e.key === 'Escape') setEditCell(null);
                                if (e.key === 'Tab') {
                                  e.preventDefault();
                                  commitEdit();
                                  const curIdx = displayCols.indexOf(ci);
                                  const nextColIdx = curIdx + 1 < displayCols.length ? curIdx + 1 : 0;
                                  const nextRi = nextColIdx === 0 ? ri + 1 : ri;
                                  if (nextRi < state.rows.length) startEdit(nextRi, displayCols[nextColIdx]);
                                }
                              }}
                              style={{ fontFeatureSettings: "'lnum', 'tnum'" }} />
                          ) : (
                            <span className={invalid ? dt.cellTextInvalid : isXCol ? dt.cellTextX : dt.cellText}
                              style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
                              {isXCol ? periodLabel(cell) : (cell || <span className={dt.cellDash}>&mdash;</span>)}
                            </span>
                          )}
                        </td>
                      );
                    })}
                    <td className={dt.tdAction}>
                      <button onClick={() => removeRow(ri)} className={dt.rowDeleteBtn}>
                        <Trash2 className={dt.iconSm} />
                      </button>
                    </td>
                  </tr>
                );
              })}
              {displayRows.length === 0 && (
                <tr><td colSpan={displayCols.length + 2} className={dt.emptyRow}>
                  Нет данных для этого ряда
                </td></tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}