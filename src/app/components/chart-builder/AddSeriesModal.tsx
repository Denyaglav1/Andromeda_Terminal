import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { X, BarChart3, TrendingUp, PenLine, Search, Check, Plus, ChevronDown, Trash2 } from 'lucide-react';
import { DSButton } from '../ui/ds-button';
import { DSSegmentButton, DSSegment } from '../ui/ds-segment-button';
import { DSSelect } from '../ui/ds-select';
import { DSInput } from '../ui/ds-input';
import { DSModal, DSModalBody, DSModalFooter } from '../ui/ds-modal';
import { CompanyLogo } from './CompanyLogo';
import type { ChartState, Series, DataSource, DataGroup, Frequency } from './types';
import { DS, FREQUENCY_LABELS } from './types';
import {
  COMMODITIES,
  FIN_INDICATORS,
  getTimeSeries,
  getAvailableYears,
  generatePeriodKeys,
  periodLabel,
  getAllInstruments,
  normalizePeriodKey,
  comparePeriodKeys,
} from './market-data';
import am from './AddSeriesModal.module.css';

/* ═══════════════════════════════════════════════════════
   AddSeriesModal — Popup for adding / editing data series
   Supports: Stock indicators, Commodities, Manual input
   4 frequencies: yearly, half, quarterly, monthly
   ═══════════════════════════════════════════════════════ */

type SourceTab = 'stock' | 'commodity' | 'manual';

interface Props {
  open: boolean;
  onClose: () => void;
  state: ChartState;
  onChange: (s: ChartState) => void;
  editDataSource?: DataSource | null;
}

const FREQUENCY_OPTIONS: { value: Frequency; label: string }[] = [
  { value: 'yearly', label: 'Год' },
  { value: 'half', label: 'Полугодие' },
  { value: 'quarterly', label: 'Квартал' },
  { value: 'monthly', label: 'Месяц' },
];

/* ═══════════════════════════════════════════════════════
   InlineDropdown — reusable dropdown with search
   ═══════════════════════════════════════════════════════ */

function InlineDropdown({
  label,
  placeholder,
  displayValue,
  displayIcon,
  isOpen,
  onToggle,
  children,
}: {
  label: string;
  placeholder: string;
  displayValue?: string;
  displayIcon?: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  const ref = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onToggle();
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [isOpen, onToggle]);

  return (
    <div ref={ref} className={am.ddRoot}>
      <label className={am.ddLabel}>{label}</label>
      <button
        type="button"
        onClick={onToggle}
        className={`${am.ddTrigger} ${isOpen ? am.ddTriggerOpen : ''}`}
      >
        {displayIcon}
        <span className={displayValue ? am.ddTriggerValue : am.ddTriggerPlaceholder}>
          {displayValue || placeholder}
        </span>
        <ChevronDown className={`${am.ddChevron} ${isOpen ? am.ddChevronOpen : ''}`} />
      </button>
      {isOpen && (
        <div className={am.ddPanel}>
          {children}
        </div>
      )}
    </div>
  );
}

export function AddSeriesModal({ open, onClose, state, onChange, editDataSource }: Props) {
  const isEditMode = !!editDataSource;

  const [sourceTab, setSourceTab] = useState<SourceTab>('manual');
  const [selectedTicker, setSelectedTicker] = useState<string>('');
  const [selectedCommodity, setSelectedCommodity] = useState<string>('');
  const [selectedIndicators, setSelectedIndicators] = useState<string[]>(['revenue']);
  const [frequency, setFrequency] = useState<Frequency>('yearly');
  const availableYears = useMemo(() => getAvailableYears(), []);
  const [periodFrom, setPeriodFrom] = useState('2019');
  const [periodTo, setPeriodTo] = useState('2025');
  const [manualName, setManualName] = useState('');

  // Manual mode: multiple columns & custom X axis
  const [manualColumns, setManualColumns] = useState<string[]>(['']);
  const [manualXMode, setManualXMode] = useState<'periods' | 'custom'>('periods');
  const [manualXValues, setManualXValues] = useState('');
  const [groupName, setGroupName] = useState('');

  // Dropdown open states
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);
  const [indicatorDropdownOpen, setIndicatorDropdownOpen] = useState(false);
  const [companySearch, setCompanySearch] = useState('');
  const [indicatorSearch, setIndicatorSearch] = useState('');
  const [commoditySearch, setCommoditySearch] = useState('');

  // Populate form when editing
  useEffect(() => {
    if (!open) return;
    if (editDataSource) {
      setSourceTab(editDataSource.type);
      setFrequency(editDataSource.frequency || 'yearly');
      setPeriodFrom(editDataSource.periodFrom || '2019');
      setPeriodTo(editDataSource.periodTo || '2025');
      if (editDataSource.type === 'stock') {
        setSelectedTicker(editDataSource.instrumentId || '');
        setSelectedIndicators(editDataSource.indicatorId ? [editDataSource.indicatorId] : ['revenue']);
        setSelectedCommodity('');
      } else if (editDataSource.type === 'commodity') {
        setSelectedCommodity(editDataSource.instrumentId || '');
        setSelectedTicker('');
        setSelectedIndicators([]);
      } else {
        setManualName(editDataSource.label || '');
        setSelectedTicker('');
        setSelectedCommodity('');
        setSelectedIndicators([]);
      }
    } else {
      setSourceTab('manual');
      setSelectedTicker('');
      setSelectedCommodity('');
      setSelectedIndicators(['revenue']);
      setFrequency('yearly');
      setPeriodFrom('2019');
      setPeriodTo('2025');
      setManualName('');
      setManualColumns(['']);
      setManualXMode('periods');
      setManualXValues('');
      setGroupName('');
    }
    setCompanyDropdownOpen(false);
    setIndicatorDropdownOpen(false);
    setCompanySearch('');
    setIndicatorSearch('');
    setCommoditySearch('');
  }, [open, editDataSource]);

  // All instruments
  const allInstruments = useMemo(() => getAllInstruments(), []);
  const companies = useMemo(() => allInstruments.filter(i => i.type === 'stock'), [allInstruments]);
  const commodities = useMemo(() => allInstruments.filter(i => i.type === 'commodity'), [allInstruments]);

  // Filter companies
  const filteredCompanies = useMemo(() => {
    if (!companySearch.trim()) return companies.slice(0, 100);
    const q = companySearch.toLowerCase();
    return companies.filter(c =>
      c.name.toLowerCase().includes(q) ||
      c.id.toLowerCase().includes(q) ||
      c.sectorLabel.toLowerCase().includes(q)
    ).slice(0, 60);
  }, [companies, companySearch]);

  // Filter indicators
  const filteredIndicators = useMemo(() => {
    if (!indicatorSearch.trim()) return FIN_INDICATORS;
    const q = indicatorSearch.toLowerCase();
    return FIN_INDICATORS.filter(ind =>
      ind.label.toLowerCase().includes(q) || ind.id.toLowerCase().includes(q)
    );
  }, [indicatorSearch]);

  // Filter commodities
  const filteredCommodities = useMemo(() => {
    if (!commoditySearch.trim()) return commodities;
    const q = commoditySearch.toLowerCase();
    return commodities.filter(c =>
      c.name.toLowerCase().includes(q) ||
      c.id.toLowerCase().includes(q) ||
      c.sectorLabel.toLowerCase().includes(q)
    );
  }, [commodities, commoditySearch]);

  const toggleIndicator = useCallback((id: string) => {
    if (isEditMode) {
      setSelectedIndicators([id]);
    } else {
      setSelectedIndicators(prev =>
        prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
      );
    }
  }, [isEditMode]);

  // Preview data
  const previewData = useMemo(() => {
    if (sourceTab === 'stock' && selectedTicker && selectedIndicators.length > 0) {
      const filter = { from: periodFrom, to: periodTo };
      const results: { indicatorId: string; name: string; periods: string[]; values: number[] }[] = [];
      for (const ind of selectedIndicators) {
        const fi = FIN_INDICATORS.find(f => f.id === ind);
        if (!fi) continue;
        const ts = getTimeSeries('stock', selectedTicker, ind, frequency, filter);
        if (ts && ts.values.length > 0) {
          results.push({ indicatorId: ind, name: `${fi.label} (${fi.unit})`, ...ts });
        }
      }
      return results;
    }
    if (sourceTab === 'commodity' && selectedCommodity) {
      const filter = { from: periodFrom, to: periodTo };
      const comm = COMMODITIES.find(c => c.id === selectedCommodity);
      if (!comm) return [];
      const ts = getTimeSeries('commodity', selectedCommodity, undefined, frequency, filter);
      if (!ts) return [];
      return [{ indicatorId: '', name: `${comm.name} (${comm.unit})`, ...ts }];
    }
    return [];
  }, [sourceTab, selectedTicker, selectedCommodity, selectedIndicators, frequency, periodFrom, periodTo]);

  // Handle add/save
  const handleAdd = useCallback(() => {
    if (sourceTab === 'manual') {
      // ── Edit mode (single column) ──
      if (isEditMode && editDataSource) {
        const name = manualName.trim() || `Ряд ${state.series.length + 1}`;
        const periods = generatePeriodKeys(frequency, periodFrom, periodTo);
        if (periods.length === 0) return;
        const colIdx = editDataSource.columnIndex;
        let newRows = state.rows.map(r => { const row = [...r]; row[colIdx] = ''; row[state.xColumnIndex] = normalizePeriodKey(row[state.xColumnIndex]); return row; });
        const oldPeriods = newRows.map(r => r[state.xColumnIndex]);
        for (const p of periods) {
          if (!oldPeriods.includes(p)) {
            const newRow = state.headers.map(() => '');
            newRow[state.xColumnIndex] = p;
            newRows.push(newRow);
          }
        }
        newRows.sort((a, b) => comparePeriodKeys(a[state.xColumnIndex], b[state.xColumnIndex]));
        const newHeaders = [...state.headers]; newHeaders[colIdx] = name;
        const newSeries = state.series.map(s => s.id === editDataSource.seriesId ? { ...s, name } : s);
        const newDS = (state.dataSources || []).map(ds =>
          ds.id === editDataSource.id ? { ...ds, label: name, frequency, periodFrom, periodTo } : ds
        );
        // Update group if it exists
        const newGroups = (state.dataGroups || []).map(g =>
          g.id === editDataSource.groupId ? { ...g, frequency, periodFrom, periodTo } : g
        );
        onChange({ ...state, headers: newHeaders, rows: newRows, series: newSeries, dataSources: newDS, dataGroups: newGroups });
        onClose();
        return;
      }

      // ── New add: multiple columns + custom/period X ──
      const cols = manualColumns
        .map((c, i) => c.trim() || `Ряд ${state.series.length + i + 1}`);
      const columnNames = cols.length > 0 ? cols : [`Ряд ${state.series.length + 1}`];

      let xLabels: string[];
      const isCustomX = manualXMode === 'custom';
      if (isCustomX) {
        xLabels = manualXValues.split('\n').map(v => v.trim()).filter(v => v.length > 0);
        if (xLabels.length === 0) return;
      } else {
        xLabels = generatePeriodKeys(frequency, periodFrom, periodTo);
        if (xLabels.length === 0) return;
      }

      let currentHeaders = [...state.headers];
      let currentRows = state.rows.map(r => {
        const row = [...r];
        if (!isCustomX) row[state.xColumnIndex] = normalizePeriodKey(row[state.xColumnIndex]);
        return row;
      });
      const xColIdx = state.xColumnIndex;

      if (isCustomX && currentRows.length === 0 && currentHeaders[xColIdx] === 'Период') {
        currentHeaders = [...currentHeaders];
        currentHeaders[xColIdx] = 'Категория';
      }

      // Create DataGroup
      const existingGroupCount = (state.dataGroups || []).length;
      const gName = groupName.trim() || `Источник ${existingGroupCount + 1}`;
      const newGroup: DataGroup = {
        id: `grp_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
        type: 'manual',
        label: gName,
        frequency,
        periodFrom,
        periodTo,
      };

      const addedSeries: Series[] = [];
      const addedDS: DataSource[] = [];

      for (let ci = 0; ci < columnNames.length; ci++) {
        const colName = columnNames[ci];
        const seriesId = `s${Date.now()}_${ci}_${Math.random().toString(36).slice(2, 6)}`;
        const colIdx = currentHeaders.length;
        currentHeaders = [...currentHeaders, colName];
        currentRows = currentRows.map(r => { const ext = [...r]; while (ext.length < currentHeaders.length) ext.push(''); return ext; });

        const existingX = new Map<string, number>();
        currentRows.forEach((row, i) => existingX.set(row[xColIdx], i));
        for (const xVal of xLabels) {
          if (!existingX.has(xVal)) {
            const newRow = currentHeaders.map(() => '');
            newRow[xColIdx] = xVal;
            currentRows.push(newRow);
            existingX.set(xVal, currentRows.length - 1);
          }
        }

        addedSeries.push({
          id: seriesId, name: colName,
          type: cols.length <= 3 && ci === 0 ? 'bar' : 'line',
          color: DS.palette[(state.series.length + ci) % DS.palette.length],
          yAxis: 'y1', visible: true, strokeWidth: 2,
          showDataLabels: false, dataLabelFontSize: 9, dataLabelColor: '', dataLabelStyle: 'plain',
        });
        addedDS.push({
          id: `ds_${Date.now()}_${ci}_${Math.random().toString(36).slice(2, 6)}`,
          groupId: newGroup.id,
          type: 'manual', label: colName,
          frequency, periodFrom, periodTo, seriesId, columnIndex: colIdx,
        });
      }

      if (!isCustomX) {
        currentRows.sort((a, b) => comparePeriodKeys(a[xColIdx], b[xColIdx]));
      }

      onChange({
        ...state,
        headers: currentHeaders,
        rows: currentRows,
        series: [...state.series, ...addedSeries],
        dataGroups: [...(state.dataGroups || []), newGroup],
        dataSources: [...(state.dataSources || []), ...addedDS],
      });
      onClose();
      return;
    }

    if (previewData.length === 0) return;

    if (isEditMode && editDataSource) {
      const colIdx = editDataSource.columnIndex;
      const data = previewData[0];
      const shortName = sourceTab === 'stock'
        ? `${selectedTicker} ${data.name.split(' (')[0]}`
        : data.name.split(' (')[0];

      const newHeaders = [...state.headers]; newHeaders[colIdx] = shortName;
      let newRows = state.rows.map(r => { const row = [...r]; row[colIdx] = ''; row[state.xColumnIndex] = normalizePeriodKey(row[state.xColumnIndex]); return row; });
      const existingPeriods = new Map<string, number>();
      newRows.forEach((row, i) => existingPeriods.set(row[state.xColumnIndex], i));
      for (let pi = 0; pi < data.periods.length; pi++) {
        const period = data.periods[pi];
        const value = String(data.values[pi]);
        const existIdx = existingPeriods.get(period);
        if (existIdx !== undefined) { newRows[existIdx][colIdx] = value; }
        else {
          const newRow = newHeaders.map(() => '');
          newRow[state.xColumnIndex] = period; newRow[colIdx] = value;
          newRows.push(newRow); existingPeriods.set(period, newRows.length - 1);
        }
      }
      newRows.sort((a, b) => comparePeriodKeys(a[state.xColumnIndex], b[state.xColumnIndex]));
      const newSeries = state.series.map(s => s.id === editDataSource.seriesId ? { ...s, name: shortName } : s);
      const newDS = (state.dataSources || []).map(ds =>
        ds.id === editDataSource.id
          ? { ...ds, label: shortName, instrumentId: sourceTab === 'stock' ? selectedTicker : selectedCommodity, indicatorId: sourceTab === 'stock' ? selectedIndicators[0] : undefined, frequency, periodFrom, periodTo }
          : ds
      );
      const newGroups = (state.dataGroups || []).map(g =>
        g.id === editDataSource.groupId ? { ...g, frequency, periodFrom, periodTo, instrumentId: sourceTab === 'stock' ? selectedTicker : selectedCommodity } : g
      );
      onChange({ ...state, headers: newHeaders, rows: newRows, series: newSeries, dataSources: newDS, dataGroups: newGroups });
      onClose();
      return;
    }

    // New add (stock / commodity) — create group + data sources
    const existingGroupCount = (state.dataGroups || []).length;
    const instrumentName = sourceTab === 'stock'
      ? (companies.find(c => c.id === selectedTicker)?.name || selectedTicker)
      : (COMMODITIES.find(c => c.id === selectedCommodity)?.name || selectedCommodity);
    const gName = groupName.trim() || instrumentName || `Источник ${existingGroupCount + 1}`;
    const newGroup: DataGroup = {
      id: `grp_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
      type: sourceTab === 'stock' ? 'stock' : 'commodity',
      label: gName,
      instrumentId: sourceTab === 'stock' ? selectedTicker : selectedCommodity,
      frequency,
      periodFrom,
      periodTo,
    };

    const newDataSources: DataSource[] = [];
    const newSeries: Series[] = [];
    let currentHeaders = [...state.headers];
    let currentRows = state.rows.map(r => { const row = [...r]; row[state.xColumnIndex] = normalizePeriodKey(row[state.xColumnIndex]); return row; });

    for (const data of previewData) {
      const seriesId = `s${Date.now()}_${Math.random().toString(36).slice(2, 6)}`;
      const colIdx = currentHeaders.length;
      const shortName = sourceTab === 'stock'
        ? `${selectedTicker} ${data.name.split(' (')[0]}`
        : data.name.split(' (')[0];
      currentHeaders = [...currentHeaders, shortName];
      const existingPeriods = new Map<string, number>();
      currentRows.forEach((row, i) => existingPeriods.set(row[state.xColumnIndex], i));
      currentRows = currentRows.map(r => { const ext = [...r]; while (ext.length < currentHeaders.length) ext.push(''); return ext; });
      for (let pi = 0; pi < data.periods.length; pi++) {
        const period = data.periods[pi];
        const value = String(data.values[pi]);
        const existIdx = existingPeriods.get(period);
        if (existIdx !== undefined) { currentRows[existIdx][colIdx] = value; }
        else {
          const newRow = currentHeaders.map(() => '');
          newRow[state.xColumnIndex] = period; newRow[colIdx] = value;
          currentRows.push(newRow); existingPeriods.set(period, currentRows.length - 1);
        }
      }
      newSeries.push({
        id: seriesId, name: shortName,
        type: sourceTab === 'commodity' ? 'line' : (previewData.indexOf(data) < 2 ? 'bar' : 'line'),
        color: DS.palette[(state.series.length + newSeries.length) % DS.palette.length],
        yAxis: 'y1', visible: true, strokeWidth: 2,
        showDataLabels: false, dataLabelFontSize: 9, dataLabelColor: '', dataLabelStyle: 'plain',
      });
      newDataSources.push({
        id: `ds_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
        groupId: newGroup.id,
        type: sourceTab === 'stock' ? 'stock' : 'commodity',
        label: shortName,
        instrumentId: sourceTab === 'stock' ? selectedTicker : selectedCommodity,
        indicatorId: data.indicatorId || undefined,
        frequency, periodFrom, periodTo, seriesId, columnIndex: colIdx,
      });
    }
    currentRows.sort((a, b) => comparePeriodKeys(a[state.xColumnIndex], b[state.xColumnIndex]));
    onChange({
      ...state, headers: currentHeaders, rows: currentRows,
      series: [...state.series, ...newSeries],
      dataGroups: [...(state.dataGroups || []), newGroup],
      dataSources: [...(state.dataSources || []), ...newDataSources],
    });
    onClose();
  }, [sourceTab, previewData, state, onChange, onClose, selectedTicker, selectedCommodity, selectedIndicators, frequency, periodFrom, periodTo, manualName, manualColumns, manualXMode, manualXValues, allInstruments, isEditMode, editDataSource, groupName, companies]);

  if (!open) return null;

  const selectedCompanyInfo = companies.find(c => c.id === selectedTicker);
  const selectedCommodityInfo = commodities.find(c => c.id === selectedCommodity);
  const selectedIndLabels = selectedIndicators
    .map(id => FIN_INDICATORS.find(f => f.id === id)?.label)
    .filter(Boolean);

  const canAdd = () => {
    if (sourceTab === 'stock') return selectedTicker && selectedIndicators.length > 0;
    if (sourceTab === 'commodity') return !!selectedCommodity;
    if (sourceTab === 'manual') {
      if (manualXMode === 'custom' && !isEditMode) {
        return manualXValues.split('\n').some(v => v.trim().length > 0);
      }
      return true;
    }
    return false;
  };

  return (
    <DSModal
      open={open}
      onClose={onClose}
      title={isEditMode ? 'Редактировать ряд' : 'Добавить данные'}
      width={720}
      height={600}
    >
      {/* Source tabs */}
      {!isEditMode && (
        <div className={am.sourceTabs}>
          <DSSegmentButton
            variant="stroke"
            size="xs"
            value={sourceTab}
            onChange={v => { setSourceTab(v as SourceTab); setCompanySearch(''); setCommoditySearch(''); setIndicatorSearch(''); }}
          >
            <DSSegment value="manual" icon={<PenLine className={am.iconSm} />}>Ручной ввод</DSSegment>
            <DSSegment value="stock" icon={<BarChart3 className={am.iconSm} />}>Акции</DSSegment>
            <DSSegment value="commodity" icon={<TrendingUp className={am.iconSm} />}>Сырьё</DSSegment>
          </DSSegmentButton>
        </div>
      )}

      {/* Content */}
      <DSModalBody>
        {/* ── Stock selection — TWO DROPDOWNS ── */}
        {sourceTab === 'stock' && (
          <>
            {/* Company dropdown */}
            <InlineDropdown
              label="Компания"
              placeholder="Выберите компанию..."
              displayValue={selectedCompanyInfo?.name}
              displayIcon={selectedCompanyInfo ? (
                <CompanyLogo ticker={selectedTicker} logoBg={selectedCompanyInfo.logoBg} logoColor={selectedCompanyInfo.logoColor} logoText={selectedCompanyInfo.logoText} size={16} />
              ) : undefined}
              isOpen={companyDropdownOpen}
              onToggle={() => { setCompanyDropdownOpen(p => !p); setIndicatorDropdownOpen(false); }}
            >
              {/* Search */}
              <div className={am.ddSearch}>
                <div className={am.ddSearchWrap}>
                  <Search className={am.ddSearchIcon} />
                  <input
                    type="text"
                    className={am.ddSearchInput}
                    placeholder="Название или тикер..."
                    value={companySearch}
                    onChange={e => setCompanySearch(e.target.value)}
                    autoFocus
                  />
                </div>
              </div>
              {/* List */}
              <div className={am.ddList}>
                {filteredCompanies.length === 0 ? (
                  <div className={am.ddEmpty}>Ничего не найдено</div>
                ) : (
                  (() => {
                    const groups: Record<string, typeof filteredCompanies> = {};
                    filteredCompanies.forEach(c => {
                      const g = c.sectorLabel;
                      if (!groups[g]) groups[g] = [];
                      groups[g].push(c);
                    });
                    return Object.entries(groups).map(([group, items]) => (
                      <div key={group}>
                        <div className={am.ddGroupLabel}>{group}</div>
                        {items.map(c => (
                          <button
                            key={c.id}
                            onClick={() => { setSelectedTicker(c.id); setCompanyDropdownOpen(false); setCompanySearch(''); }}
                            className={selectedTicker === c.id ? am.ddItemActive : am.ddItem}
                          >
                            <CompanyLogo ticker={c.id} logoBg={c.logoBg} logoColor={c.logoColor} logoText={c.logoText} size={16} />
                            <span className={am.ddItemName}>{c.name}</span>
                            <span className={am.ddItemMeta}>{c.id}</span>
                            {selectedTicker === c.id && <Check className={am.ddItemCheck} />}
                          </button>
                        ))}
                      </div>
                    ));
                  })()
                )}
              </div>
            </InlineDropdown>

            {/* Indicators dropdown (multi-select with checkboxes) */}
            {selectedTicker && (
              <InlineDropdown
                label={isEditMode ? 'Показатель' : 'Показатели'}
                placeholder="Выберите показатели..."
                displayValue={
                  selectedIndLabels.length === 0
                    ? undefined
                    : selectedIndLabels.length <= 2
                      ? selectedIndLabels.join(', ')
                      : `${selectedIndLabels.slice(0, 2).join(', ')} +${selectedIndLabels.length - 2}`
                }
                isOpen={indicatorDropdownOpen}
                onToggle={() => { setIndicatorDropdownOpen(p => !p); setCompanyDropdownOpen(false); }}
              >
                {/* Search */}
                <div className={am.ddSearch}>
                  <div className={am.ddSearchWrap}>
                    <Search className={am.ddSearchIcon} />
                    <input
                      type="text"
                      className={am.ddSearchInput}
                      placeholder="Поиск показателя..."
                      value={indicatorSearch}
                      onChange={e => setIndicatorSearch(e.target.value)}
                      autoFocus
                    />
                  </div>
                </div>
                {/* List with checkboxes */}
                <div className={`${am.ddList} ${am.ddListTall}`}>
                  {filteredIndicators.map(ind => {
                    const active = selectedIndicators.includes(ind.id);
                    return (
                      <button
                        key={ind.id}
                        onClick={() => toggleIndicator(ind.id)}
                        className={active ? am.ddItemActive : am.ddItem}
                      >
                        <div className={active ? am.checkboxActive : am.checkbox}>
                          {active && <Check className={am.checkIcon} />}
                        </div>
                        <span className={am.indName}>{ind.label}</span>
                        <span className={am.indUnit}>{ind.unit}</span>
                      </button>
                    );
                  })}
                </div>
                {/* Footer */}
                {!isEditMode && (
                  <div className={am.indFooter}>
                    <span className={am.indFooterCount}>{selectedIndicators.length} выбрано</span>
                    <div className={am.indFooterActions}>
                      <button onClick={() => setSelectedIndicators(FIN_INDICATORS.map(i => i.id))} className={am.indFooterLink}>Все</button>
                      <span className={am.indFooterSep}>|</span>
                      <button onClick={() => setSelectedIndicators([])} className={am.indFooterLink}>Очистить</button>
                    </div>
                  </div>
                )}
              </InlineDropdown>
            )}
          </>
        )}

        {/* ── Commodity selection ── */}
        {sourceTab === 'commodity' && (
          <InlineDropdown
            label="Сырьё"
            placeholder="Выберите товар..."
            displayValue={selectedCommodityInfo?.name}
            displayIcon={selectedCommodityInfo ? (
              <CompanyLogo logoBg={selectedCommodityInfo.logoBg} logoColor={selectedCommodityInfo.logoColor} logoText={selectedCommodityInfo.logoText} size={16} />
            ) : undefined}
            isOpen={companyDropdownOpen}
            onToggle={() => setCompanyDropdownOpen(p => !p)}
          >
            <div className={am.ddSearch}>
              <div className={am.ddSearchWrap}>
                <Search className={am.ddSearchIcon} />
                <input
                  type="text"
                  className={am.ddSearchInput}
                  placeholder="Поиск..."
                  value={commoditySearch}
                  onChange={e => setCommoditySearch(e.target.value)}
                  autoFocus
                />
              </div>
            </div>
            <div className={am.ddList}>
              {filteredCommodities.length === 0 ? (
                <div className={am.ddEmpty}>Ничего не найдено</div>
              ) : (
                (() => {
                  const groups: Record<string, typeof filteredCommodities> = {};
                  filteredCommodities.forEach(c => {
                    const g = c.sectorLabel;
                    if (!groups[g]) groups[g] = [];
                    groups[g].push(c);
                  });
                  return Object.entries(groups).map(([group, items]) => (
                    <div key={group}>
                      <div className={am.ddGroupLabel}>{group}</div>
                      {items.map(c => (
                        <button
                          key={c.id}
                          onClick={() => { setSelectedCommodity(c.id); setCompanyDropdownOpen(false); setCommoditySearch(''); }}
                          className={selectedCommodity === c.id ? am.ddItemActive : am.ddItem}
                        >
                          <CompanyLogo logoBg={c.logoBg} logoColor={c.logoColor} logoText={c.logoText} size={16} />
                          <span className={am.ddItemName}>{c.name}</span>
                          <span className={am.ddItemMeta}>{c.sectorLabel}</span>
                          {selectedCommodity === c.id && <Check className={am.ddItemCheck} />}
                        </button>
                      ))}
                    </div>
                  ));
                })()
              )}
            </div>
          </InlineDropdown>
        )}

        {/* ── Manual input ── */}
        {sourceTab === 'manual' && (
          <div className={am.manualGroup}>
            {!isEditMode && (
              <div>
                <label className={am.fieldLabel}>Тип оси X</label>
                <DSSegmentButton variant="stroke" size="xs" value={manualXMode} onChange={v => setManualXMode(v as 'periods' | 'custom')}>
                  <DSSegment value="periods">Периоды (даты)</DSSegment>
                  <DSSegment value="custom">Произвольные значения</DSSegment>
                </DSSegmentButton>
              </div>
            )}

            {/* Custom X values textarea */}
            {manualXMode === 'custom' && !isEditMode && (
              <div>
                <label className={am.fieldLabel}>
                  Значения оси X <span className={am.fieldHint}>(по одному на строку)</span>
                </label>
                <textarea
                  className={am.textarea}
                  value={manualXValues}
                  onChange={e => setManualXValues(e.target.value)}
                  placeholder={"Россия\nСША\nКитай\nИндия\nБразилия"}
                />
                <div className={am.textareaCount}>
                  {manualXValues.split('\n').filter(v => v.trim()).length} значений
                </div>
              </div>
            )}

            {/* Column names — multiple columns */}
            {!isEditMode ? (
              <div>
                <label className={am.fieldLabel}>
                  Столбцы данных <span className={am.fieldHint}>(серии)</span>
                </label>
                <div className={am.colList}>
                  {manualColumns.map((col, idx) => (
                    <div key={idx} className={am.colRow}>
                      <div className={am.colDot} style={{ backgroundColor: DS.palette[(state.series.length + idx) % DS.palette.length] }} />
                      <input
                        type="text"
                        className={am.colInput}
                        value={col}
                        onChange={e => {
                          const next = [...manualColumns];
                          next[idx] = e.target.value;
                          setManualColumns(next);
                        }}
                        placeholder={`Ряд ${idx + 1}, например: Выручка`}
                      />
                      {manualColumns.length > 1 && (
                        <button
                          onClick={() => setManualColumns(manualColumns.filter((_, i) => i !== idx))}
                          className={am.colDeleteBtn}
                        >
                          <Trash2 className={am.iconSm} />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => setManualColumns([...manualColumns, ''])}
                  className={am.addColBtn}
                >
                  <Plus className={am.iconSm} />
                  <span>Ещё столбец</span>
                </button>
              </div>
            ) : (
              <div>
                <label className={am.fieldLabel}>Название ряда</label>
                <input
                  type="text"
                  className={am.fullInput}
                  value={manualName}
                  onChange={e => setManualName(e.target.value)}
                  placeholder="Например: Мой прогноз"
                />
              </div>
            )}

            <div className={am.hint}>
              {manualXMode === 'custom' && !isEditMode
                ? 'Создайте пустые ряды с произвольными значениями по оси X. Данные заполните в таблице.'
                : 'Создайте пустые ряды с выбранной периодичностью и периодом. Значения можно заполнить вручную в таблице данных.'}
            </div>
          </div>
        )}

        {/* ── Frequency & Period settings ── */}
        {((sourceTab === 'manual' && manualXMode === 'periods') || (sourceTab === 'stock' && selectedTicker) || (sourceTab === 'commodity' && selectedCommodity)) && (
          <div className={am.periodSection}>
            <div className={am.divider} />

            {/* Group (Source) name — only for new add */}
            {!isEditMode && (
              <div>
                <label className={am.fieldLabel}>
                  Название источника <span className={am.fieldHint}>(группа рядов)</span>
                </label>
                <input
                  type="text"
                  className={am.sourceInput}
                  value={groupName}
                  onChange={e => setGroupName(e.target.value)}
                  placeholder={
                    sourceTab === 'stock'
                      ? (selectedCompanyInfo?.name || 'Например: Газпром')
                      : sourceTab === 'commodity'
                        ? (selectedCommodityInfo?.name || 'Например: Нефть Brent')
                        : `Источник ${(state.dataGroups || []).length + 1}`
                  }
                />
              </div>
            )}

            <div className={am.periodRow}>
              <div className={am.periodLeft}>
                <label className={am.fieldLabel}>Периодичность</label>
                <DSSegmentButton variant="stroke" size="xs" value={frequency} onChange={v => setFrequency(v as Frequency)}>
                  {FREQUENCY_OPTIONS.map(opt => (
                    <DSSegment key={opt.value} value={opt.value}>{opt.label}</DSSegment>
                  ))}
                </DSSegmentButton>
              </div>
              <div className={am.periodRight}>
                <DSSelect
                  size="xs"
                  label="От"
                  value={periodFrom}
                  onChange={v => setPeriodFrom(v)}
                  options={availableYears.map(p => ({ value: p, label: p }))}
                  style={{ minWidth: 72 }}
                />
                <span className={am.periodSep}>—</span>
                <DSSelect
                  size="xs"
                  label="До"
                  value={periodTo}
                  onChange={v => setPeriodTo(v)}
                  options={availableYears.map(p => ({ value: p, label: p }))}
                  style={{ minWidth: 72 }}
                />
              </div>
            </div>
            <div className={am.periodInfo}>
              {generatePeriodKeys(frequency, periodFrom, periodTo).length} периодов
              {frequency !== 'yearly' && ` (${FREQUENCY_LABELS[frequency].toLowerCase()})`}
            </div>
          </div>
        )}

        {/* ── Preview ── */}
        {previewData.length > 0 && (
          <div className={am.previewSection}>
            <div className={am.divider} />
            <label className={am.previewLabel}>
              Предпросмотр ({previewData.reduce((s, d) => Math.max(s, d.periods.length), 0)} периодов, {previewData.length} {previewData.length === 1 ? 'ряд' : 'рядов'})
            </label>
            <div className={am.previewWrap}>
              <table className={am.previewTable} style={{ fontFeatureSettings: "'lnum','tnum'" }}>
                <thead>
                  <tr className={am.previewThead}>
                    <th className={am.previewTh}>Период</th>
                    {previewData.map((d, i) => (
                      <th key={i} className={am.previewTh}>
                        {d.name.length > 20 ? d.name.slice(0, 18) + '...' : d.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {previewData[0]?.periods.map((p, pi) => (
                    <tr key={p} className={am.previewTr}>
                      <td className={am.previewTdX}>{periodLabel(p)}</td>
                      {previewData.map((d, di) => (
                        <td key={di} className={am.previewTd}>
                          {d.values[pi] !== undefined ? d.values[pi].toLocaleString('ru-RU') : '—'}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </DSModalBody>

      {/* Footer */}
      <DSModalFooter className={am.footer}>
        <div className={am.footerInfo}>
          {sourceTab === 'stock' && selectedCompanyInfo && (
            <span className={am.footerInfoRow}>
              <CompanyLogo ticker={selectedTicker} logoBg={selectedCompanyInfo.logoBg} logoColor={selectedCompanyInfo.logoColor} logoText={selectedCompanyInfo.logoText} size={16} />
              {selectedCompanyInfo.name} · {selectedIndicators.length} показ. · {FREQUENCY_LABELS[frequency]}
            </span>
          )}
          {sourceTab === 'commodity' && selectedCommodityInfo && (
            <span className={am.footerInfoRow}>
              <CompanyLogo logoBg={selectedCommodityInfo.logoBg} logoColor={selectedCommodityInfo.logoColor} logoText={selectedCommodityInfo.logoText} size={16} />
              {selectedCommodityInfo.name} · {FREQUENCY_LABELS[frequency]}
            </span>
          )}
          {sourceTab === 'manual' && (
            <span>
              {isEditMode
                ? `${manualName || 'Пустой ряд'} · ${FREQUENCY_LABELS[frequency]} · ${generatePeriodKeys(frequency, periodFrom, periodTo).length} периодов`
                : manualXMode === 'custom'
                  ? `${manualColumns.filter(c => c.trim()).length || 1} столб. · ${manualXValues.split('\n').filter(v => v.trim()).length} знач. X`
                  : `${manualColumns.filter(c => c.trim()).length || 1} столб. · ${FREQUENCY_LABELS[frequency]} · ${generatePeriodKeys(frequency, periodFrom, periodTo).length} периодов`
              }
            </span>
          )}
        </div>
        <div className={am.footerActions}>
          <DSButton variant="ghost" size="sm" onClick={onClose}>Отмена</DSButton>
          <DSButton
            variant="primary"
            size="sm"
            onClick={handleAdd}
            disabled={!canAdd()}
          >
            {isEditMode ? 'Сохранить' : 'Добавить'}
          </DSButton>
        </div>
      </DSModalFooter>
    </DSModal>
  );
}