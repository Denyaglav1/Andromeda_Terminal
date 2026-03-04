import React, { useState, useMemo, useCallback } from 'react';
import { Database, BarChart3, TrendingUp } from 'lucide-react';
import { DSButton } from '../ui/ds-button';
import { SearchableDropdown, DropdownOption } from './SearchableDropdown';
import { CompanyLogo } from './CompanyLogo';
import type { ChartState, Series } from './types';
import { DS } from './types';
import {
  COMPANIES, COMMODITIES, SECTOR_LABELS, COMMODITY_SECTORS,
  FIN_INDICATORS, PERIODS,
  getCompanyTimeSeries, getCommodityTimeSeries,
  type InstrumentType,
} from './market-data';
import ip from './InstrumentPicker.module.css';

/* ═══════════════════════════════════════════════════════
   InstrumentPicker — Select instrument + indicator
   and load data into the chart
   ═══════════════════════════════════════════════════════ */

interface Props {
  state: ChartState;
  onChange: (s: ChartState) => void;
}

export function InstrumentPicker({ state, onChange }: Props) {
  const [instrumentType, setInstrumentType] = useState<InstrumentType>('stock');
  const [selectedId, setSelectedId] = useState<string>('');
  const [selectedIndicators, setSelectedIndicators] = useState<string[]>(['revenue', 'ebitda', 'net_income']);

  // Build instrument options
  const instrumentOptions: DropdownOption[] = useMemo(() => {
    if (instrumentType === 'stock') {
      return COMPANIES.map(c => ({
        id: c.ticker,
        label: `${c.name} (${c.ticker})`,
        sublabel: SECTOR_LABELS[c.sector],
        group: SECTOR_LABELS[c.sector],
        logoBg: c.logoBg,
        logoColor: c.logoColor,
        logoText: c.logoText,
      }));
    }
    return COMMODITIES.map(c => ({
      id: c.id,
      label: c.name,
      sublabel: `${c.unit} · ${COMMODITY_SECTORS[c.sector as keyof typeof COMMODITY_SECTORS] || c.sector}`,
      group: COMMODITY_SECTORS[c.sector as keyof typeof COMMODITY_SECTORS] || c.sector,
      logoBg: c.logoBg,
      logoColor: c.logoColor,
      logoText: c.logoText,
    }));
  }, [instrumentType]);

  // Build indicator options (for stocks)
  const indicatorOptions: DropdownOption[] = useMemo(() => {
    return FIN_INDICATORS.map(fi => ({
      id: fi.id,
      label: fi.label,
      sublabel: fi.unit,
    }));
  }, []);

  const toggleIndicator = useCallback((id: string) => {
    setSelectedIndicators(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  }, []);

  // Load data into chart
  const handleLoadData = useCallback(() => {
    if (!selectedId) return;

    if (instrumentType === 'stock') {
      const company = COMPANIES.find(c => c.ticker === selectedId);
      if (!company) return;

      // Collect data for selected indicators
      const indicators = selectedIndicators
        .map(id => ({ id, ...FIN_INDICATORS.find(f => f.id === id)! }))
        .filter(i => i.label);

      const validIndicators = indicators.filter(ind => {
        const ts = getCompanyTimeSeries(selectedId, ind.id);
        return ts && ts.values.length > 0;
      });

      if (validIndicators.length === 0) return;

      const firstTs = getCompanyTimeSeries(selectedId, validIndicators[0].id)!;
      const periods = firstTs.periods;

      const headers = ['Период', ...validIndicators.map(i => i.label)];
      const rows = periods.map(p => [
        p,
        ...validIndicators.map(ind => {
          const ts = getCompanyTimeSeries(selectedId, ind.id);
          return ts ? String(ts.values[ts.periods.indexOf(p)] ?? '') : '';
        }),
      ]);

      const series: Series[] = validIndicators.map((ind, i) => ({
        id: `s${Date.now()}_${i}`,
        name: ind.label,
        type: i < 2 ? 'bar' : 'line',
        color: DS.palette[i % DS.palette.length],
        yAxis: 'y1' as const,
        visible: true,
        strokeWidth: 2,
        showDataLabels: false,
        dataLabelFontSize: 9,
        dataLabelColor: '',
        dataLabelStyle: 'plain' as const,
      }));

      onChange({
        ...state,
        title: `${company.name} — Финансовые показатели`,
        headers,
        rows,
        xColumnIndex: 0,
        series,
      });
    } else {
      // Commodity
      const commodity = COMMODITIES.find(c => c.id === selectedId);
      if (!commodity) return;
      const ts = getCommodityTimeSeries(selectedId);
      if (!ts) return;

      const headers = ['Период', commodity.name];
      const rows = ts.periods.map((p, i) => [p, String(ts.values[i])]);

      const series: Series[] = [{
        id: `s${Date.now()}`,
        name: commodity.name,
        type: 'line',
        color: DS.palette[0],
        yAxis: 'y1',
        visible: true,
        strokeWidth: 2,
        showDataLabels: false,
        dataLabelFontSize: 9,
        dataLabelColor: '',
        dataLabelStyle: 'plain',
      }];

      onChange({
        ...state,
        title: `${commodity.name} (${commodity.unit})`,
        headers,
        rows,
        xColumnIndex: 0,
        series,
      });
    }
  }, [selectedId, instrumentType, selectedIndicators, state, onChange]);

  const selectedCompany = instrumentType === 'stock' ? COMPANIES.find(c => c.ticker === selectedId) : null;
  const selectedCommodity = instrumentType === 'commodity' ? COMMODITIES.find(c => c.id === selectedId) : null;

  return (
    <div className={ip.bar}>
      {/* Instrument Type toggle */}
      <div className={ip.toggleGroup}>
        <button
          className={instrumentType === 'stock' ? ip.toggleBtnActive : ip.toggleBtn}
          onClick={() => { setInstrumentType('stock'); setSelectedId(''); }}
        >
          <BarChart3 className={ip.iconSm} />
          Акции
        </button>
        <button
          className={instrumentType === 'commodity' ? ip.toggleBtnActive : ip.toggleBtn}
          onClick={() => { setInstrumentType('commodity'); setSelectedId(''); }}
        >
          <TrendingUp className={ip.iconSm} />
          Сырьё
        </button>
      </div>

      {/* Instrument selector */}
      <SearchableDropdown
        options={instrumentOptions}
        value={selectedId || null}
        onChange={(id) => setSelectedId(id)}
        placeholder={instrumentType === 'stock' ? 'Выберите компанию...' : 'Выберите сырьё...'}
        size="xs"
        maxHeight={350}
      />

      {/* Indicator multi-select (stocks only) */}
      {instrumentType === 'stock' && selectedId && (
        <div className={ip.indWrap}>
          {FIN_INDICATORS.slice(0, 8).map(ind => {
            const active = selectedIndicators.includes(ind.id);
            return (
              <button
                key={ind.id}
                onClick={() => toggleIndicator(ind.id)}
                className={active ? ip.indBtnActive : ip.indBtn}
                title={`${ind.label} (${ind.unit})`}
              >
                {ind.label.length > 12 ? ind.label.slice(0, 10) + '…' : ind.label}
              </button>
            );
          })}
        </div>
      )}

      {/* Load button */}
      <DSButton
        variant="primary"
        size="sm"
        leftIcon={<Database className={ip.iconSm} />}
        onClick={handleLoadData}
        disabled={!selectedId}
        style={{ flexShrink: 0 }}
      >
        Загрузить
      </DSButton>

      {/* Selected info */}
      {(selectedCompany || selectedCommodity) && (
        <span style={{ fontSize: 10, color: 'var(--ds-gray-6)', flexShrink: 0, display: 'flex', alignItems: 'center', gap: 4 }}>
          <CompanyLogo
            logoBg={selectedCompany?.logoBg || selectedCommodity?.logoBg}
            logoColor={selectedCompany?.logoColor || selectedCommodity?.logoColor}
            logoText={selectedCompany?.logoText || selectedCommodity?.logoText}
            size={14}
          />
          {selectedCompany ? `${SECTOR_LABELS[selectedCompany.sector]}` : selectedCommodity?.unit}
        </span>
      )}
    </div>
  );
}