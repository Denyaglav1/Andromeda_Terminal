import { useState, useCallback, useMemo } from 'react';
import { FileText, Check, Edit2, Trash2, Plus } from 'lucide-react';
import { CompanyLogo } from './chart-builder/CompanyLogo';
import type { Company, PeriodType } from '../App';
import fbStyles from './FilterBar.module.css';
import { DSButton } from './ui/ds-button';
import { DSSegmentButton, DSSegment } from './ui/ds-segment-button';
import {
  DSCustomDropdown,
  DSCustomDropdownTrigger,
  DSCustomDropdownPanel,
  DSCustomDropdownHeader,
  DSCustomDropdownContent,
  DSCustomDropdownItem,
} from './ui/ds-custom-dropdown';
import {
  DSSelectCustom,
  DSSelectTrigger,
  DSSelectDropdown,
  DSSelectGroupHeader,
  DSSelectSeparator,
} from './ui/ds-select';

interface FilterBarProps {
  selectedCompany: Company;
  onCompanyChange: (companyId: string) => void;
  availableCompanies: Company[];
  selectedScenario: string;
  onScenarioChange: (v: string) => void;
  onCreateScenario: () => void;
  onEditScenario: (scenarioName: string) => void;
  onDeleteScenario: (scenarioName: string) => void;
  availableScenarios: string[];
  presetScenarios: string[];
  periodType: PeriodType;
  onPeriodTypeChange: (v: PeriodType) => void;
  availablePeriodTypes: PeriodType[];
  viewMode: string;
  onViewModeChange: (v: string) => void;
  selectedSources?: string[];
  onSourcesChange?: (sources: string[]) => void;
  allSources?: { id: string; name: string }[];
  displayFormat: string;
  onDisplayFormatChange: (v: string) => void;
}

export function FilterBar({
  selectedCompany,
  onCompanyChange,
  availableCompanies,
  selectedScenario,
  onScenarioChange,
  onCreateScenario,
  onEditScenario,
  onDeleteScenario,
  availableScenarios,
  presetScenarios,
  periodType,
  onPeriodTypeChange,
  availablePeriodTypes,
  viewMode,
  onViewModeChange,
  selectedSources,
  onSourcesChange,
  allSources,
  displayFormat,
  onDisplayFormatChange,
}: FilterBarProps) {
  const [isScenarioOpen, setIsScenarioOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [isSourceOpen, setIsSourceOpen] = useState(false);
  const [hoveredScenario, setHoveredScenario] = useState<string | null>(null);
  const [sourceSearch, setSourceSearch] = useState('');
  const [companySearch, setCompanySearch] = useState('');

  const handleCompanyOpenChange = useCallback((open: boolean) => {
    setIsCompanyOpen(open);
    if (!open) setCompanySearch('');
  }, []);
  const handleScenarioOpenChange = useCallback((open: boolean) => setIsScenarioOpen(open), []);
  const handleSourceOpenChange = useCallback((open: boolean) => setIsSourceOpen(open), []);

  const toggleSource = useCallback((sourceId: string) => {
    if (!selectedSources || !onSourcesChange) return;
    if (selectedSources.includes(sourceId)) {
      onSourcesChange(selectedSources.filter(s => s !== sourceId));
    } else {
      onSourcesChange([...selectedSources, sourceId]);
    }
  }, [selectedSources, onSourcesChange]);

  const toggleAllSources = useCallback(() => {
    if (!allSources || !onSourcesChange || !selectedSources) return;
    if (selectedSources.length === allSources.length) {
      // All are selected → deselect all (reset)
      onSourcesChange([]);
    } else {
      // Not all selected → select all
      onSourcesChange(allSources.map(s => s.id));
    }
  }, [allSources, onSourcesChange, selectedSources]);

  const filteredCompanies = useMemo(() => {
    if (!companySearch.trim()) return availableCompanies;
    const q = companySearch.toLowerCase();
    return availableCompanies.filter(c =>
      c.name.toLowerCase().includes(q) ||
      c.ticker.toLowerCase().includes(q) ||
      c.id.toLowerCase().includes(q)
    );
  }, [availableCompanies, companySearch]);

  return (
    <div className={fbStyles.root}>
      {/* Top Bar with Tabs */}
      <div className={fbStyles.topBar}>
        <DSSegmentButton
          variant="stroke"
          size="sm"
          activeStyle="solid"
          value={viewMode}
          onChange={onViewModeChange}
        >
          <DSSegment value="consensus">Консенсус</DSSegment>
          <DSSegment value="euler">Euler Live models</DSSegment>
        </DSSegmentButton>

        <div className={fbStyles.rightGroup}>
          <div className={fbStyles.updateText}>Обновлено: 3 Апр 2024, 18:19</div>
          <DSButton variant="outline" size="sm" iconOnly>
            <FileText size={16} />
          </DSButton>
        </div>
      </div>

      {/* Filter Row */}
      <div className={fbStyles.filterRow}>
        {/* Company Select — DSCustomDropdown with search + SVG logos */}
        <div className={fbStyles.minW160}>
          <DSCustomDropdown isOpen={isCompanyOpen} onOpenChange={handleCompanyOpenChange}>
            <DSCustomDropdownTrigger>
              <span className={fbStyles.triggerContent}>
                <CompanyLogo ticker={selectedCompany.ticker} size={16} />
                {selectedCompany.ticker}
              </span>
            </DSCustomDropdownTrigger>
            <DSCustomDropdownPanel minWidth={280}>
              <DSCustomDropdownHeader
                title="Выберите компанию"
                showSearch
                searchValue={companySearch}
                onSearchChange={setCompanySearch}
                searchPlaceholder="Поиск по тикеру или названию…"
              />
              <DSCustomDropdownContent maxHeight={320}>
                <div className={fbStyles.dropdownList}>
                  {filteredCompanies.length === 0 && (
                    <div className={fbStyles.emptyText}>
                      Ничего не найдено
                    </div>
                  )}
                  {filteredCompanies.map(company => (
                    <DSCustomDropdownItem
                      key={company.id}
                      selected={selectedCompany.id === company.id}
                      rightContent={selectedCompany.id === company.id ? <Check size={12} className={fbStyles.iconBlue} /> : undefined}
                      onClick={() => {
                        onCompanyChange(company.id);
                        setIsCompanyOpen(false);
                        setCompanySearch('');
                      }}
                    >
                      <div className={fbStyles.companyItem}>
                        <CompanyLogo ticker={company.ticker} size={18} />
                        <div className={fbStyles.companyInfo}>
                          <span className={fbStyles.tickerText}>{company.ticker}</span>
                          <span className={fbStyles.companyName}>{company.name}</span>
                        </div>
                      </div>
                    </DSCustomDropdownItem>
                  ))}
                </div>
              </DSCustomDropdownContent>
            </DSCustomDropdownPanel>
          </DSCustomDropdown>
        </div>

        {viewMode === 'consensus' ? (
          <>
            {/* Source selector — DSCustomDropdown with search */}
            <div className={fbStyles.minW180}>
              <DSCustomDropdown isOpen={isSourceOpen} onOpenChange={handleSourceOpenChange}>
                <DSCustomDropdownTrigger placeholder="Источник">
                  {selectedSources && allSources
                    ? selectedSources.length === allSources.length
                      ? 'Источник: Все'
                      : selectedSources.length === 0
                        ? 'Источник: —'
                        : `Источник: ${selectedSources.length}`
                    : 'Источник: Все'}
                </DSCustomDropdownTrigger>
                <DSCustomDropdownPanel minWidth={260}>
                  <DSCustomDropdownHeader
                    title="Выберите источники"
                    showSearch
                    searchValue={sourceSearch}
                    onSearchChange={setSourceSearch}
                  />
                  <DSCustomDropdownContent maxHeight={260}>
                    <div className={fbStyles.dropdownList}>
                      {/* Select All */}
                      <DSCustomDropdownItem
                        checkbox
                        checked={selectedSources?.length === allSources?.length}
                        onClick={toggleAllSources}
                      >
                        Все источники
                      </DSCustomDropdownItem>
                      {/* Individual sources filtered by search */}
                      {allSources
                        ?.filter(s => !sourceSearch.trim() || s.name.toLowerCase().includes(sourceSearch.toLowerCase().trim()))
                        .map(source => (
                          <DSCustomDropdownItem
                            key={source.id}
                            checkbox
                            checked={!!selectedSources?.includes(source.id)}
                            onClick={() => toggleSource(source.id)}
                          >
                            {source.name}
                          </DSCustomDropdownItem>
                        ))}
                    </div>
                  </DSCustomDropdownContent>
                </DSCustomDropdownPanel>
              </DSCustomDropdown>
            </div>
          </>
        ) : (
          <>
            {/* Scenario Select — custom composable with edit/delete */}
            <DSSelectCustom
              size="xs"
              isOpen={isScenarioOpen}
              onOpenChange={handleScenarioOpenChange}
              className={fbStyles.scenarioSelect}
            >
              <DSSelectTrigger>
                Сценарий: {selectedScenario}
              </DSSelectTrigger>
              <DSSelectDropdown className={fbStyles.scenarioDropdown} maxHeight={320}>
                <DSSelectGroupHeader>Выберите сценарий</DSSelectGroupHeader>
                {availableScenarios.map(scenario => {
                  const isPreset = presetScenarios.includes(scenario);
                  return (
                    <div
                      key={scenario}
                      className={fbStyles.scenarioRow}
                      onMouseEnter={() => setHoveredScenario(scenario)}
                      onMouseLeave={() => setHoveredScenario(null)}
                    >
                      <button
                        onClick={() => {
                          onScenarioChange(scenario);
                          setIsScenarioOpen(false);
                        }}
                        style={{
                          display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%',
                          padding: '6px 8px', fontSize: 12, textAlign: 'left', color: 'var(--ds-text-secondary)',
                          borderRadius: 4, transition: 'background-color 150ms', border: 'none', outline: 'none',
                          cursor: 'pointer',
                          backgroundColor: selectedScenario === scenario ? 'var(--ds-blue-6-a10)' : 'transparent',
                        }}
                      >
                        <span>{scenario}</span>
                        <div className={fbStyles.checkGroup}>
                          {selectedScenario === scenario && <Check size={12} className={fbStyles.iconBlue} />}
                        </div>
                      </button>
                      {!isPreset && hoveredScenario === scenario && (
                        <div className={fbStyles.scenarioActions}>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onEditScenario(scenario);
                              setIsScenarioOpen(false);
                            }}
                            className={fbStyles.editBtn}
                            title="Редактировать"
                          >
                            <Edit2 size={12} className={fbStyles.iconBlue5} />
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              if (confirm(`Удалить сценарий "${scenario}"?`)) {
                                onDeleteScenario(scenario);
                              }
                            }}
                            className={fbStyles.deleteBtn}
                            title="Удалить"
                          >
                            <Trash2 size={12} className={fbStyles.iconRed5} />
                          </button>
                        </div>
                      )}
                    </div>
                  );
                })}
                <DSSelectSeparator />
                <button
                  onClick={() => {
                    onCreateScenario();
                    setIsScenarioOpen(false);
                  }}
                  className={fbStyles.createBtn}
                >
                  <Plus size={12} />
                  <span>Создать сценарий</span>
                </button>
              </DSSelectDropdown>
            </DSSelectCustom>

            {/* Period Type Filters */}
            <DSSegmentButton
              variant="stroke"
              size="sm"
              activeStyle="solid"
              value={periodType}
              onChange={(v) => onPeriodTypeChange(v as PeriodType)}
            >
              <DSSegment value="Year" disabled={!availablePeriodTypes.includes('Year')}>Y</DSSegment>
              <DSSegment value="Half" disabled={!availablePeriodTypes.includes('Half')}>H</DSSegment>
              <DSSegment value="Quarter" disabled={!availablePeriodTypes.includes('Quarter')}>Q</DSSegment>
            </DSSegmentButton>

            <DSSegmentButton
              variant="stroke"
              size="sm"
              activeStyle="solid"
              value={displayFormat}
              onChange={onDisplayFormatChange}
              className={fbStyles.formatSegment}
            >
              <DSSegment value="n">n</DSSegment>
              <DSSegment value="pct">%</DSSegment>
            </DSSegmentButton>
          </>
        )}

        {/* Display format — shown for both modes */}
        {viewMode === 'consensus' && (
          <DSSegmentButton
            variant="stroke"
            size="sm"
            activeStyle="solid"
            value={displayFormat}
            onChange={onDisplayFormatChange}
          >
            <DSSegment value="n">n</DSSegment>
            <DSSegment value="pct">%</DSSegment>
          </DSSegmentButton>
        )}
      </div>
    </div>
  );
}