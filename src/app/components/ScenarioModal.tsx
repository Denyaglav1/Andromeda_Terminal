import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { X, Info, AlertCircle } from 'lucide-react';
import { DSSelect } from './ui/ds-select';
import { DSInput } from './ui/ds-input';
import { DSSegmentButton, DSSegment } from './ui/ds-segment-button';
import { DSButton } from './ui/ds-button';
import { DSModal, DSModalBody, DSModalFooter } from './ui/ds-modal';
import { DSTable, DSTableCellEditable, type DSTableColumn, type DSTableRowGroup } from './ui/ds-table';
import type { Company, PeriodType } from '../App';
import type { Scenario } from '../App';
import smStyles from './ScenarioModal.module.css';

interface ScenarioModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: { 
    name: string; 
    values: Record<string, Record<string, string>>; 
    selectedPeriods: string[];
    manuallyEditedDrivers: Set<string>;
    driverScenarios: Record<string, string>;
  }) => void;
  company: Company;
  editingScenario?: Scenario | null;
  onEditScenario?: (scenarioName: string) => void;
  onDeleteScenario?: (scenarioName: string) => void;
  allScenarios?: Scenario[]; // Add list of all scenarios for copying
}

const DRIVERS = [
  { id: 'brent', name: 'Brent', unit: 'USD/бар.' },
  { id: 'cbr_key_rate', name: 'CBR Key Rate', unit: 'доллар/тон.' },
  { id: 'urals', name: 'Urals', unit: 'доллар/бар.' },
  { id: 'commodity_basket', name: 'Commodity Basket', unit: 'доллар/тон.' },
  { id: 'cbr_key_rate_2', name: 'CBR Key Rate 2', unit: 'доллар/тон.' },
  { id: 'macro_header', name: 'Macro', isHeader: true },
  { id: 'usd_rub', name: 'USD/RUB, avg', unit: 'руб.' },
  { id: 'key_rate_pct', name: 'Ключевая ставка', unit: '%' },
];

// Current date and period (February 18, 2026)
const CURRENT_YEAR = 2026;
const CURRENT_QUARTER = 1; // Q1 (February is in Q1)
const CURRENT_HALF = 1; // H1 (February is in H1)

// Determine the smallest available period type for a company
const getSmallestPeriodType = (availablePeriodTypes: PeriodType[]): PeriodType => {
  if (availablePeriodTypes.includes('Quarter')) return 'Quarter';
  if (availablePeriodTypes.includes('Half')) return 'Half';
  return 'Year';
};

// Generate period IDs based on type
const generatePeriods = (type: PeriodType): string[] => {
  const years = [2024, 2025, 2026, 2027, 2028, 2029, 2030];
  
  if (type === 'Year') {
    return years.map(y => `${y}`);
  } else if (type === 'Half') {
    return years.flatMap(y => [`${y}-H1`, `${y}-H2`]);
  } else {
    return years.flatMap(y => [`${y}-Q1`, `${y}-Q2`, `${y}-Q3`, `${y}-Q4`]);
  }
};

// Generate periods with transition year breakdown
const generatePeriodsWithTransition = (
  viewType: PeriodType,
  availablePeriodTypes: PeriodType[]
): { historical: string[], forecast: string[] } => {
  const smallestType = getSmallestPeriodType(availablePeriodTypes);
  const historical: string[] = [];
  const forecast: string[] = [];

  // Historical years before current year
  if (viewType === 'Year') {
    historical.push('2024', '2025');
  } else if (viewType === 'Half') {
    historical.push('2024-H1', '2024-H2', '2025-H1', '2025-H2');
  } else if (viewType === 'Quarter') {
    historical.push(
      '2024-Q1', '2024-Q2', '2024-Q3', '2024-Q4',
      '2025-Q1', '2025-Q2', '2025-Q3', '2025-Q4'
    );
  }

  // Current year (2026) - split based on smallest available period
  if (viewType === 'Year') {
    // Year view - add transition periods from current year
    if (smallestType === 'Quarter') {
      // Add current quarter as historical
      historical.push('2026-Q1');
      // Add remaining quarters as forecast
      forecast.push('2026-Q2', '2026-Q3', '2026-Q4');
    } else if (smallestType === 'Half') {
      // Add current half as historical
      historical.push('2026-H1');
      // Add second half as forecast
      forecast.push('2026-H2');
    } else {
      // Only year available - whole year is historical
      historical.push('2026');
    }
    // Future years
    forecast.push('2027', '2028', '2029', '2030');
  } else if (viewType === 'Half') {
    // Half view - add transition periods
    if (smallestType === 'Quarter') {
      // Add current quarter as historical
      historical.push('2026-Q1');
      // Add remaining quarters of first half and all of second half as forecast
      forecast.push('2026-Q2', '2026-Q3', '2026-Q4');
    } else {
      // Half or Year only - add current half as historical
      historical.push('2026-H1');
      // Add second half as forecast
      forecast.push('2026-H2');
    }
    // Future years in half periods
    for (let year = 2027; year <= 2030; year++) {
      forecast.push(`${year}-H1`, `${year}-H2`);
    }
  } else if (viewType === 'Quarter') {
    // Quarter view - add current quarter as historical
    historical.push('2026-Q1');
    // Add remaining quarters as forecast
    forecast.push('2026-Q2', '2026-Q3', '2026-Q4');
    // Future years in quarter periods
    for (let year = 2027; year <= 2030; year++) {
      forecast.push(`${year}-Q1`, `${year}-Q2`, `${year}-Q3`, `${year}-Q4`);
    }
  }

  return { historical, forecast };
};

// All available periods for selection
const ALL_SELECTABLE_PERIODS = [
  ...generatePeriods('Year').filter(p => parseInt(p) >= 2026),
  ...generatePeriods('Half').filter(p => parseInt(p.split('-')[0]) >= 2026),
  ...generatePeriods('Quarter').filter(p => parseInt(p.split('-')[0]) >= 2026)
];

// Format period for display
const formatPeriod = (period: string): string => {
  if (period.includes('-H')) {
    const [year, half] = period.split('-');
    return `${half.replace('H', '')}п${year.slice(-2)}`;
  } else if (period.includes('-Q')) {
    const [year, quarter] = period.split('-');
    return `${quarter.replace('Q', '')}к${year.slice(-2)}`;
  }
  return period;
};

// Split DRIVERS into groups by isHeader markers
function buildDriverGroups(): DSTableRowGroup<typeof DRIVERS[0]>[] {
  const groups: DSTableRowGroup<typeof DRIVERS[0]>[] = [];
  let currentGroup: DSTableRowGroup<typeof DRIVERS[0]> = { id: '_default', title: '', rows: [] };
  
  DRIVERS.forEach(d => {
    if (d.isHeader) {
      if (currentGroup.rows.length > 0 || groups.length === 0) {
        groups.push(currentGroup);
      }
      currentGroup = { id: d.id, title: d.name, rows: [] };
    } else {
      currentGroup.rows.push(d);
    }
  });
  if (currentGroup.rows.length > 0) {
    groups.push(currentGroup);
  }
  // Remove empty default group if first driver was a header
  return groups.filter(g => g.rows.length > 0);
}

const DRIVER_GROUPS = buildDriverGroups();

export function ScenarioModal({ isOpen, onClose, onSave, company, editingScenario, onEditScenario, onDeleteScenario, allScenarios }: ScenarioModalProps) {
  // Start with first available period type for the company
  const [activeTab, setActiveTab] = useState<PeriodType>(company.availablePeriodTypes[0]);
  const [scenarioName, setScenarioName] = useState('');
  const [prefillScenario, setPrefillScenario] = useState('Estimate');
  const [validationError, setValidationError] = useState('');
  
  // Track manually edited cells (not rows, but specific cells)
  const [manuallyEditedCells, setManuallyEditedCells] = useState<Set<string>>(new Set());
  
  // Track which scenario each driver was filled from
  const [driverScenarios, setDriverScenarios] = useState<Record<string, string>>({});
  
  // Pagination state
  const [historicalOffset, setHistoricalOffset] = useState(0);
  
  const HISTORICAL_PAGE_SIZE = 2;

  const PRESET_SCENARIOS = ['Bull', 'Stress', 'Estimate', 'Spot'];

  // Preset values for different scenarios
  const SCENARIO_PRESETS: Record<string, Record<string, number>> = {
    'Bull': {
      'brent': 95,
      'cbr_key_rate': 85,
      'urals': 88,
      'commodity_basket': 920,
      'cbr_key_rate_2': 85,
      'usd_rub': 88,
      'key_rate_pct': 18,
    },
    'Stress': {
      'brent': 55,
      'cbr_key_rate': 48,
      'urals': 52,
      'commodity_basket': 580,
      'cbr_key_rate_2': 48,
      'usd_rub': 105,
      'key_rate_pct': 24,
    },
    'Estimate': {
      'brent': 75,
      'cbr_key_rate': 68,
      'urals': 71,
      'commodity_basket': 750,
      'cbr_key_rate_2': 68,
      'usd_rub': 95,
      'key_rate_pct': 20,
    },
    'Spot': {
      'brent': 82,
      'cbr_key_rate': 74,
      'urals': 78,
      'commodity_basket': 810,
      'cbr_key_rate_2': 74,
      'usd_rub': 92,
      'key_rate_pct': 21,
    },
  };

  // Get available scenarios (presets + saved scenarios)
  const availableScenarioNames = useMemo(() => {
    const scenarioNames = [...PRESET_SCENARIOS];
    if (allScenarios) {
      // Add all saved scenarios from the company
      allScenarios.forEach(scenario => {
        if (!scenarioNames.includes(scenario.name)) {
          scenarioNames.push(scenario.name);
        }
      });
    }
    return scenarioNames;
  }, [allScenarios]);

  // Get available periods based on company configuration
  const availableSelectablePeriods = useMemo(() => {
    const periods: string[] = [];
    
    if (company.availablePeriodTypes.includes('Year')) {
      periods.push(...generatePeriods('Year').filter(p => parseInt(p) >= 2026 && parseInt(p) <= 2030));
    }
    if (company.availablePeriodTypes.includes('Half')) {
      periods.push(...generatePeriods('Half').filter(p => {
        const year = parseInt(p.split('-')[0]);
        return year >= 2026 && year <= 2030;
      }));
    }
    if (company.availablePeriodTypes.includes('Quarter')) {
      periods.push(...generatePeriods('Quarter').filter(p => {
        const year = parseInt(p.split('-')[0]);
        return year >= 2026 && year <= 2030;
      }));
    }
    
    return periods;
  }, [company.availablePeriodTypes]);

  // Initialize values for all tabs
  const [values, setValues] = useState<Record<string, Record<string, string>>>(() => {
    const initial: Record<string, Record<string, string>> = {};
    DRIVERS.forEach(driver => {
      if (!driver.isHeader) {
        initial[driver.id] = {};
        // Initialize historical data with realistic values for all possible historical periods
        ['2024', '2025', '2026', '2026-Q1',
         '2024-H1', '2024-H2', '2025-H1', '2025-H2', '2026-H1',
         '2024-Q1', '2024-Q2', '2024-Q3', '2024-Q4', 
         '2025-Q1', '2025-Q2', '2025-Q3', '2025-Q4'].forEach(period => {
          initial[driver.id][period] = (Math.random() * 30 + 60).toFixed(2);
        });
      }
    });
    return initial;
  });

  // Handler for copying scenario data to a driver row
  const handleDriverScenarioChange = useCallback((driverId: string, scenarioName: string) => {
    if (scenarioName === '—') {
      // Clear the scenario label
      setDriverScenarios(prev => {
        const newScenarios = { ...prev };
        delete newScenarios[driverId];
        return newScenarios;
      });
      return;
    }

    // Check if it's a preset scenario
    const scenarioPreset = SCENARIO_PRESETS[scenarioName];
    if (scenarioPreset) {
      // Fill from preset
      setValues(prev => {
        const newValues = { ...prev };
        
        availableSelectablePeriods.forEach(period => {
          // Get base value from preset
          const baseValue = scenarioPreset[driverId];
          if (!baseValue) return;
          
          // Parse period to get year and sub-period
          let year: number;
          let subPeriodFactor = 0;
          
          if (period.includes('-H')) {
            const [yearStr, half] = period.split('-');
            year = parseInt(yearStr);
            subPeriodFactor = half === 'H1' ? -0.03 : 0.03;
          } else if (period.includes('-Q')) {
            const [yearStr, quarter] = period.split('-');
            year = parseInt(yearStr);
            const quarterNum = parseInt(quarter.replace('Q', ''));
            subPeriodFactor = (quarterNum - 2.5) * 0.03;
          } else {
            year = parseInt(period);
          }
          
          // Calculate year-based growth from 2026
          const yearDiff = year - 2026;
          
          // Different growth rates for different scenarios
          let growthRate = 0;
          if (scenarioName === 'Bull') {
            growthRate = 0.05;
          } else if (scenarioName === 'Stress') {
            growthRate = -0.04;
          } else if (scenarioName === 'Estimate') {
            growthRate = 0.025;
          } else if (scenarioName === 'Spot') {
            growthRate = 0.015;
          }
          
          // Apply year-based growth
          let adjustedValue = baseValue * (1 + growthRate * yearDiff);
          
          // Apply sub-period factor
          adjustedValue = adjustedValue * (1 + subPeriodFactor);
          
          // Add random variation
          const variation = 1 + (Math.random() - 0.5) * 0.08;
          const finalValue = adjustedValue * variation;
          
          newValues[driverId][period] = finalValue.toFixed(2);
        });
        
        return newValues;
      });
      
      // Clear manual edit markers for this driver
      setManuallyEditedCells(prev => {
        const newSet = new Set(prev);
        availableSelectablePeriods.forEach(period => {
          newSet.delete(`${driverId}-${period}`);
        });
        return newSet;
      });
    } else {
      // Find the scenario in allScenarios
      const scenario = allScenarios?.find(s => s.name === scenarioName);
      if (scenario && scenario.values[driverId]) {
        // Copy values from the scenario
        setValues(prev => {
          const newValues = { ...prev };
          availableSelectablePeriods.forEach(period => {
            if (scenario.values[driverId][period]) {
              newValues[driverId][period] = scenario.values[driverId][period];
            }
          });
          return newValues;
        });
        
        // Clear manual edit markers for this driver
        setManuallyEditedCells(prev => {
          const newSet = new Set(prev);
          availableSelectablePeriods.forEach(period => {
            newSet.delete(`${driverId}-${period}`);
          });
          return newSet;
        });
      }
    }
    
    // Update the scenario label
    setDriverScenarios(prev => ({ ...prev, [driverId]: scenarioName }));
  }, [availableSelectablePeriods, allScenarios]);

  const { historicalPeriods, forecastPeriods } = useMemo(() => {
    const { historical, forecast } = generatePeriodsWithTransition(activeTab, company.availablePeriodTypes);
    
    // Filter forecast to only include available periods for the company
    const filteredForecast = forecast.filter(p => availableSelectablePeriods.includes(p));
    
    return { historicalPeriods: historical, forecastPeriods: filteredForecast };
  }, [activeTab, company.availablePeriodTypes, availableSelectablePeriods]);

  // Reset offsets when tab changes — default to showing last historical periods
  React.useEffect(() => {
    setHistoricalOffset(Math.max(0, historicalPeriods.length - HISTORICAL_PAGE_SIZE));
  }, [activeTab, historicalPeriods.length]);

  // Initialize from editing scenario if present
  useEffect(() => {
    if (editingScenario) {
      setScenarioName(editingScenario.name);
      setValues(editingScenario.values);
      
      // Load manually edited drivers and scenario labels if they exist
      if (editingScenario.manuallyEditedDrivers) {
        // Convert to Set if it's not already (handles both Set and array)
        setManuallyEditedCells(
          editingScenario.manuallyEditedDrivers instanceof Set 
            ? editingScenario.manuallyEditedDrivers 
            : new Set(editingScenario.manuallyEditedDrivers)
        );
      } else {
        setManuallyEditedCells(new Set());
      }
      
      if (editingScenario.driverScenarios) {
        setDriverScenarios(editingScenario.driverScenarios);
      } else {
        setDriverScenarios({});
      }
    } else {
      // Reset when not editing
      setScenarioName('');
      setManuallyEditedCells(new Set());
      setDriverScenarios({});
    }
  }, [editingScenario]);

  // Get paginated periods
  const paginatedHistorical = useMemo(() => {
    return historicalPeriods.slice(historicalOffset, historicalOffset + HISTORICAL_PAGE_SIZE);
  }, [historicalPeriods, historicalOffset]);

  const currentPeriods = [...paginatedHistorical, ...forecastPeriods];

  const canGoBackHistorical = historicalOffset > 0;
  const canGoForwardHistorical = historicalOffset + HISTORICAL_PAGE_SIZE < historicalPeriods.length;

  const isHistorical = useCallback((period: string) => {
    // Check if period is before 2026
    const year = parseInt(period.split('-')[0]);
    if (year < 2026) return true;
    if (year > 2026) return false;
    
    // For 2026, check if it's a current or past period
    if (period === '2026') {
      // Whole year 2026 - only historical if company only has Year periods
      return !company.availablePeriodTypes.includes('Half') && !company.availablePeriodTypes.includes('Quarter');
    }
    
    if (period === '2026-H1') {
      // First half of 2026 - historical (current period)
      return true;
    }
    
    if (period === '2026-Q1') {
      // First quarter of 2026 - historical (current period)
      return true;
    }
    
    // All other 2026 periods are forecast
    return false;
  }, [company.availablePeriodTypes]);

  const handleValueChange = useCallback((driverId: string, period: string, val: string) => {
    setValues(prev => ({
      ...prev,
      [driverId]: {
        ...prev[driverId],
        [period]: val
      }
    }));
    // Mark as manually edited
    setManuallyEditedCells(prev => new Set(prev).add(`${driverId}-${period}`));
    // Set scenario label to "Manual"
    setDriverScenarios(prev => ({ ...prev, [driverId]: 'Manual' }));
    // Clear validation error when user starts filling fields
    if (validationError) setValidationError('');
  }, [validationError]);

  const handlePrefill = useCallback(() => {
    const newValues = { ...values };
    const scenarioPreset = SCENARIO_PRESETS[prefillScenario];
    
    DRIVERS.forEach(driver => {
      if (!driver.isHeader && scenarioPreset[driver.id]) {
        // Skip this driver entirely if it has manual edits
        if (driverScenarios[driver.id] === 'Manual') {
          return;
        }
        
        // Fill ALL available forecast periods for the company, not just current tab
        availableSelectablePeriods.forEach(period => {
          // Skip if this specific cell was manually edited by user
          if (manuallyEditedCells.has(`${driver.id}-${period}`)) {
            return; // Don't overwrite manually edited cells
          }
          
          // Get base value from preset
          const baseValue = scenarioPreset[driver.id];
          
          // Parse period to get year and sub-period
          let year: number;
          let subPeriodFactor = 0;
          
          if (period.includes('-H')) {
            // Half-year period
            const [yearStr, half] = period.split('-');
            year = parseInt(yearStr);
            // H1 lower (-3%), H2 higher (+3%)
            subPeriodFactor = half === 'H1' ? -0.03 : 0.03;
          } else if (period.includes('-Q')) {
            // Quarter period
            const [yearStr, quarter] = period.split('-');
            year = parseInt(yearStr);
            // Q1: -4%, Q2: -1.5%, Q3: +1.5%, Q4: +4%
            const quarterNum = parseInt(quarter.replace('Q', ''));
            subPeriodFactor = (quarterNum - 2.5) * 0.03;
          } else {
            // Year period
            year = parseInt(period);
          }
          
          // Calculate year-based growth from 2026
          const yearDiff = year - 2026;
          
          // Different growth rates for different scenarios (increased for more visible changes)
          let growthRate = 0;
          if (prefillScenario === 'Bull') {
            growthRate = 0.05; // 5% annual growth (was 2%)
          } else if (prefillScenario === 'Stress') {
            growthRate = -0.04; // -4% annual decline (was -1.5%)
          } else if (prefillScenario === 'Estimate') {
            growthRate = 0.025; // 2.5% annual growth (was 1%)
          } else if (prefillScenario === 'Spot') {
            growthRate = 0.015; // 1.5% annual growth (was 0.5%)
          }
          
          // Apply year-based growth
          let adjustedValue = baseValue * (1 + growthRate * yearDiff);
          
          // Apply sub-period factor (for H1/H2 or Q1/Q2/Q3/Q4)
          adjustedValue = adjustedValue * (1 + subPeriodFactor);
          
          // Add larger random variation (+/- 4%) for more visible changes
          const variation = 1 + (Math.random() - 0.5) * 0.08;
          const finalValue = adjustedValue * variation;
          
          newValues[driver.id][period] = finalValue.toFixed(2);
        });
        
        // Check if all forecast cells for this driver are from the same scenario (not manually edited)
        const allCellsFromScenario = availableSelectablePeriods.every(period => 
          !manuallyEditedCells.has(`${driver.id}-${period}`)
        );
        
        // Only update scenario label if no forecast cells were manually edited
        if (allCellsFromScenario) {
          setDriverScenarios(prev => ({ ...prev, [driver.id]: prefillScenario }));
        }
      }
    });
    setValues(newValues);
  }, [values, availableSelectablePeriods, prefillScenario, manuallyEditedCells, driverScenarios]);

  const handleSave = () => {
    if (!scenarioName.trim()) {
      setValidationError('Пожалуйста, введите название сценария');
      return;
    }
    
    // Validate that all forecast periods have values for all drivers
    const allForecastPeriods = availableSelectablePeriods;
    const dataDrivers = DRIVERS.filter(d => !d.isHeader);
    
    for (const driver of dataDrivers) {
      for (const period of allForecastPeriods) {
        const value = values[driver.id]?.[period];
        if (!value || value.trim() === '') {
          const actionText = editingScenario ? 'сохранить' : 'создать';
          setValidationError(`Чтобы ${actionText} сценарий, необходимо заполнить все значения по всем периодам`);
          return;
        }
      }
    }
    
    // Clear error and save
    setValidationError('');
    onSave({ name: scenarioName, values, selectedPeriods: availableSelectablePeriods, manuallyEditedDrivers: manuallyEditedCells, driverScenarios });
  };

  if (!isOpen) return null;

  return (
    <DSModal open={isOpen} onClose={onClose} showCloseButton={false} maxWidth="1152px">
      <DSModalBody scrollable={false} className={smStyles.modalBody}>
        {/* Header */}
        <div className={smStyles.header}>
          <div>
            <h2 className={smStyles.title}>
              {editingScenario ? 'Редактирование сценария' : 'Создание сценария'}
            </h2>
            <div className={smStyles.subtitle}>
              Компания: <span className={smStyles.companyHighlight}>{company.ticker}</span> ({company.name})
            </div>
          </div>
          <DSButton variant="ghost" size="sm" iconOnly onClick={onClose}>
            <X size={20} className={smStyles.iconFaint} />
          </DSButton>
        </div>

        {/* Body */}
        <div className={smStyles.body}>
          
          {/* Form Row 1 */}
          <div className={smStyles.formGrid}>
            <div>
              <DSInput
                size="xs"
                label="Название"
                value={scenarioName}
                onChange={(e) => {
                  setScenarioName(e.target.value);
                  if (validationError) setValidationError('');
                }}
                placeholder="Введите название сценария"
                errorText={validationError || undefined}
                className={smStyles.inputSurface}
              />
            </div>
          </div>

          {/* Info Box */}
          <div className={smStyles.infoBox}>
            <div className={smStyles.infoContent}>
              <Info size={16} className={smStyles.infoIcon} />
              <div className={smStyles.infoText}>
                Для удобства формирования своего сценария вы можете предзаполнить пустые ячейки на основе существующих сценариев и изменить только те драйверы которые вам необходимы
              </div>
            </div>
            <div className={smStyles.infoActions}>
              <DSSelect
                size="xs"
                value={prefillScenario}
                onChange={(v) => setPrefillScenario(v)}
                options={PRESET_SCENARIOS.map(s => ({ value: s, label: s }))}
                renderValue={(opt) => `Сценарий: ${opt?.label || ''}`}
                className={smStyles.minW160}
                triggerClassName={smStyles.inputSurface}
              />
              <DSButton variant="primary" size="sm" onClick={handlePrefill}>
                Предзаполнить
              </DSButton>
            </div>
          </div>

          {/* Tabs */}
          <DSSegmentButton
            variant="stroke"
            size="sm"
            activeStyle="solid"
            value={activeTab}
            onChange={(v) => setActiveTab(v as PeriodType)}
          >
            {company.availablePeriodTypes.includes('Year') && (
              <DSSegment value="Year">Год</DSSegment>
            )}
            {company.availablePeriodTypes.includes('Half') && (
              <DSSegment value="Half">Полугодие</DSSegment>
            )}
            {company.availablePeriodTypes.includes('Quarter') && (
              <DSSegment value="Quarter">Квартал</DSSegment>
            )}
          </DSSegmentButton>

          {/* Table with Navigation */}
          <div className={smStyles.tableSection}>
            {/* Navigation Controls — Dashboard-style scroll buttons */}
            <div className={smStyles.navRow}>
              <div className={smStyles.navGroup}>
                <span className={smStyles.histLabel}>Исторические:</span>
                <div className={smStyles.navBtnGroup}>
                  {/* « Go to first */}
                  <button
                    type="button"
                    onClick={() => setHistoricalOffset(0)}
                    disabled={!canGoBackHistorical}
                    className={`${smStyles.navBtn} ${!canGoBackHistorical ? smStyles.navBtnDisabled : ''}`}
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M5.1 8.6L2.6 6.1L5.1 3.6M8.6 8.6L6.1 6.1L8.6 3.6" stroke="var(--ds-text-secondary)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  {/* ‹ Go back one */}
                  <button
                    type="button"
                    onClick={() => setHistoricalOffset(Math.max(0, historicalOffset - 1))}
                    disabled={!canGoBackHistorical}
                    className={`${smStyles.navBtn} ${!canGoBackHistorical ? smStyles.navBtnDisabled : ''}`}
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M7.6 8.6L4.6 5.6L7.6 2.6" stroke="var(--ds-text-secondary)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  {/* Range label */}
                  <span className={smStyles.rangeLabel}>
                    {paginatedHistorical[0] || '—'} – {paginatedHistorical[paginatedHistorical.length - 1] || '—'}
                  </span>
                  {/* › Go forward one */}
                  <button
                    type="button"
                    onClick={() => setHistoricalOffset(Math.min(Math.max(0, historicalPeriods.length - HISTORICAL_PAGE_SIZE), historicalOffset + 1))}
                    disabled={!canGoForwardHistorical}
                    className={`${smStyles.navBtn} ${!canGoForwardHistorical ? smStyles.navBtnDisabled : ''}`}
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M4.6 8.6L7.6 5.6L4.6 2.6" stroke="var(--ds-text-secondary)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  {/* » Go to last */}
                  <button
                    type="button"
                    onClick={() => setHistoricalOffset(Math.max(0, historicalPeriods.length - HISTORICAL_PAGE_SIZE))}
                    disabled={!canGoForwardHistorical}
                    className={`${smStyles.navBtn} ${!canGoForwardHistorical ? smStyles.navBtnDisabled : ''}`}
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M3.6 8.6L6.1 6.1L3.6 3.6M7.1 8.6L9.6 6.1L7.1 3.6" stroke="var(--ds-text-secondary)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* DSTable */}
            <div className={smStyles.tableWrapper}>
              <DSTable
                columns={(() => {
                  /* Pad historical slots to always 2 for fixed-width block */
                  const histSlots: (string | null)[] = [...paginatedHistorical];
                  while (histSlots.length < HISTORICAL_PAGE_SIZE) histSlots.push(null);

                  const cols: DSTableColumn<Record<string, any>>[] = [
                    /* ── Driver name ── */
                    {
                      id: '_name',
                      header: 'Драйвер',
                      align: 'left',
                      width: 160,
                      sticky: true,
                      stickyOffset: 0,
                      render: (_: any, row: Record<string, any>) => (
                        <div className={smStyles.driverCell}>
                          <span className={smStyles.driverName}>{row._driverName}</span>
                          <span className={smStyles.driverUnit}>{row._unit}</span>
                        </div>
                      ),
                    },
                    /* ── Historical slots (always 2, fixed 90px each) ── */
                    ...histSlots.map((period, slotIdx): DSTableColumn<Record<string, any>> => {
                      const isSplitPeriod = period ? (
                        (activeTab === 'Year' && (period.includes('-H') || period.includes('-Q'))) ||
                        (activeTab === 'Half' && period.includes('-Q'))
                      ) : false;
                      return {
                        id: period || `_hist_empty_${slotIdx}`,
                        header: period || '',
                        align: 'right' as const,
                        width: 90,
                        sticky: true,
                        stickyOffset: 160 + slotIdx * 90,
                        headerClassName: isSplitPeriod ? smStyles.splitPeriodHeader : '',
                        getCellStyle: period && isSplitPeriod
                          ? () => ({ backgroundColor: 'rgba(217,119,6,0.10)' })
                          : undefined,
                        render: period
                          ? (_: any, row: Record<string, any>) => (
                              <span className={smStyles.histValue}>
                                {row[period] || '—'}
                              </span>
                            )
                          : () => null,
                      };
                    }),
                    /* ── Forecast columns ── */
                    ...forecastPeriods.map((period, idx): DSTableColumn<Record<string, any>> => ({
                      id: period,
                      header: period,
                      align: 'right' as const,
                      flex: true,
                      minWidth: '80px',
                      forecast: true,
                      groupBorderLeft: idx === 0,
                      render: (_: any, row: Record<string, any>) => {
                        const cellKey = `${row._driverId}-${period}`;
                        const isCellManual = manuallyEditedCells.has(cellKey);
                        return (
                          <DSTableCellEditable
                            value={row[period] || ''}
                            onChange={(v) => {
                              if (v === '' || /^-?\d*[.,]?\d*$/.test(v)) {
                                handleValueChange(row._driverId, period, v);
                              }
                            }}
                            placeholder="0"
                            highlighted={isCellManual}
                          />
                        );
                      },
                    })),
                    /* ── Scenario column ── */
                    {
                      id: '_scenario',
                      header: 'Сценарий',
                      align: 'center' as const,
                      width: 120,
                      stickyEnd: true,
                      stickyEndOffset: 0,
                      render: (_: any, row: Record<string, any>) => {
                        const hasManual = row._hasManualEdits;
                        return (
                          <div className={smStyles.scenarioCell}>
                            <DSSelect
                              size="xs"
                              value={row._scenarioLabel === '—' ? '' : row._scenarioLabel}
                              onChange={(v) => handleDriverScenarioChange(row._driverId, v)}
                              placeholder="—"
                              options={[
                                { value: 'Manual', label: 'Manual' },
                                ...availableScenarioNames.map(s => ({ value: s, label: s })),
                              ]}
                              triggerClassName=""
                              dropdownClassName=""
                              dropdownMinWidth={120}
                              maxVisibleItems={6}
                            />
                          </div>
                        );
                      },
                    },
                  ];
                  return cols;
                })()}
                data={(() => {
                  /* Build grouped data for DSTable */
                  const groups: DSTableRowGroup<Record<string, any>>[] = DRIVER_GROUPS.map(group => ({
                    id: group.id,
                    title: group.title,
                    collapsible: false,
                    rows: group.rows.map(driver => {
                      const driverValues = values[driver.id] || {};
                      const hasManualEdits = forecastPeriods.some(p => manuallyEditedCells.has(`${driver.id}-${p}`));
                      const row: Record<string, any> = {
                        id: driver.id,
                        _name: driver.name,
                        _driverName: driver.name,
                        _driverId: driver.id,
                        _unit: driver.unit || '',
                        _scenarioLabel: driverScenarios[driver.id] || '—',
                        _hasManualEdits: hasManualEdits,
                      };
                      /* Historical period values */
                      paginatedHistorical.forEach(p => { row[p] = driverValues[p] || ''; });
                      /* Forecast period values */
                      forecastPeriods.forEach(p => { row[p] = driverValues[p] || ''; });
                      return row;
                    }),
                  }));
                  return groups;
                })()}
                grouped
                rowKeyField="id"
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <DSModalFooter>
          <div className={smStyles.footerRow}>
            {validationError && (
              <div className={smStyles.errorMsg}>
                <AlertCircle size={16} className={smStyles.iconShrink} />
                <span>{validationError}</span>
              </div>
            )}
            <div style={{ display: 'flex', gap: 12, ...(!validationError ? { marginLeft: 'auto' } : {}) }}>
              <DSButton variant="secondary" size="sm" onClick={onClose}>
                Отменить
              </DSButton>
              <DSButton variant="primary" size="sm" onClick={handleSave}>
                {editingScenario ? 'Сохранить изменения' : 'Создать сценарий'}
              </DSButton>
            </div>
          </div>
        </DSModalFooter>
      </DSModalBody>
    </DSModal>
  );
}