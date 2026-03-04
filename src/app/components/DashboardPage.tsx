import React, { useState } from 'react';
import { FilterBar } from './FilterBar';
import dpStyles from './DashboardPage.module.css';
import { Dashboard } from './Dashboard';
import { ScenarioModal } from './ScenarioModal';
import { ConsensusTab } from './consensus/ConsensusTab';
import { notify } from './ui/notification';
import type { PeriodType, Scenario } from '../types';
import { COMPANIES, getAllAvailableCompanies } from '../types';
import { SOURCES } from './consensus/ConsensusData';

// Preset scenario names
const PRESET_SCENARIO_NAMES = ['Bull', 'Stress', 'Estimate', 'Spot'];

// Driver IDs that we use
const DRIVER_IDS = ['brent', 'cbr_key_rate', 'urals', 'commodity_basket', 'cbr_key_rate_2', 'usd_rub', 'key_rate_pct'];

// Default scenarios
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

// Growth rates for different scenarios
const GROWTH_RATES: Record<string, number> = {
  'Bull': 0.02,
  'Stress': -0.015,
  'Estimate': 0.01,
  'Spot': 0.005,
};

// Generate scenarios for a company based on its available period types
function generateScenarioForCompany(
  scenarioName: string,
  companyId: string,
  availablePeriodTypes: PeriodType[]
): Scenario {
  const preset = SCENARIO_PRESETS[scenarioName];
  const values: Record<string, Record<string, string>> = {};
  const growthRate = GROWTH_RATES[scenarioName] || 0;
  
  // Generate periods based on available types
  const periods: string[] = [];
  const years = [2026, 2027, 2028, 2029, 2030];
  
  if (availablePeriodTypes.includes('Year')) {
    periods.push(...years.map(y => `${y}`));
  }
  if (availablePeriodTypes.includes('Half')) {
    years.forEach(y => {
      periods.push(`${y}-H1`, `${y}-H2`);
    });
  }
  if (availablePeriodTypes.includes('Quarter')) {
    years.forEach(y => {
      periods.push(`${y}-Q1`, `${y}-Q2`, `${y}-Q3`, `${y}-Q4`);
    });
  }
  
  // Generate values for each driver
  DRIVER_IDS.forEach(driverId => {
    if (!preset[driverId]) return;
    
    values[driverId] = {};
    const baseValue = preset[driverId];
    
    periods.forEach(period => {
      let year: number;
      let subPeriodFactor = 0;
      
      if (period.includes('-H')) {
        const [yearStr, half] = period.split('-');
        year = parseInt(yearStr);
        subPeriodFactor = half === 'H1' ? -0.01 : 0.01;
      } else if (period.includes('-Q')) {
        const [yearStr, quarter] = period.split('-');
        year = parseInt(yearStr);
        const quarterNum = parseInt(quarter.replace('Q', ''));
        subPeriodFactor = (quarterNum - 2.5) * 0.01;
      } else {
        year = parseInt(period);
      }
      
      const yearDiff = year - 2026;
      let adjustedValue = baseValue * (1 + growthRate * yearDiff);
      adjustedValue = adjustedValue * (1 + subPeriodFactor);
      
      values[driverId][period] = adjustedValue.toFixed(2);
    });
  });
  
  return {
    id: `${scenarioName.toLowerCase()}-${companyId}`,
    name: scenarioName,
    companyId,
    values,
    selectedPeriods: periods,
  };
}

// Generate all preset scenarios for all companies
const DEFAULT_SCENARIOS: Scenario[] = [];
COMPANIES.forEach(company => {
  ['Bull', 'Stress', 'Estimate', 'Spot'].forEach(scenarioName => {
    DEFAULT_SCENARIOS.push(
      generateScenarioForCompany(scenarioName, company.id, company.availablePeriodTypes)
    );
  });
});

export function DashboardPage() {
  const [selectedCompanyId, setSelectedCompanyId] = useState<string>('rosneft');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scenarios, setScenarios] = useState<Scenario[]>(DEFAULT_SCENARIOS);
  const [selectedScenario, setSelectedScenario] = useState('Estimate');
  const [periodType, setPeriodType] = useState<PeriodType>('Year');
  const [editingScenario, setEditingScenario] = useState<Scenario | null>(null);
  const [viewMode, setViewMode] = useState<string>('consensus');
  const [selectedSources, setSelectedSources] = useState<string[]>(SOURCES.map(s => s.id));
  const [displayFormat, setDisplayFormat] = useState<string>('n');

  // Get all companies including extended
  const allCompanies = React.useMemo(() => getAllAvailableCompanies(), []);

  // Get current company
  const currentCompany = allCompanies.find(c => c.id === selectedCompanyId) || COMPANIES[0];

  // Filter scenarios for current company only
  const companyScenarios = scenarios.filter(s => s.companyId === selectedCompanyId);

  // Check if selected scenario belongs to current company
  React.useEffect(() => {
    if (!companyScenarios.find(s => s.name === selectedScenario)) {
      if (companyScenarios.length > 0) {
        setSelectedScenario(companyScenarios[0].name);
      }
    }
  }, [selectedCompanyId, companyScenarios, selectedScenario]);

  // Reset period type if not available for current company
  React.useEffect(() => {
    if (!currentCompany.availablePeriodTypes.includes(periodType)) {
      setPeriodType(currentCompany.availablePeriodTypes[0]);
    }
  }, [selectedCompanyId, currentCompany, periodType]);

  const handleCreateScenario = () => {
    setEditingScenario(null);
    setIsModalOpen(true);
  };

  const handleEditScenario = (scenarioName: string) => {
    const scenario = companyScenarios.find(s => s.name === scenarioName);
    if (scenario) {
      setEditingScenario(scenario);
      setIsModalOpen(true);
    }
  };

  const handleDeleteScenario = (scenarioName: string) => {
    setScenarios(prev => prev.filter(s => !(s.name === scenarioName && s.companyId === selectedCompanyId)));
    
    if (selectedScenario === scenarioName) {
      const remaining = companyScenarios.filter(s => s.name !== scenarioName);
      if (remaining.length > 0) {
        setSelectedScenario(remaining[0].name);
      }
    }
    
    notify.success(`Сценарий "${scenarioName}" удален`);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingScenario(null);
  };

  const handleSaveScenario = (data: { 
    name: string; 
    values: Record<string, Record<string, string>>; 
    selectedPeriods: string[];
    manuallyEditedDrivers: Set<string>;
    driverScenarios: Record<string, string>;
  }) => {
    if (editingScenario) {
      setScenarios(prev => prev.map(s => 
        s.id === editingScenario.id 
          ? { 
              ...s, 
              name: data.name, 
              values: data.values, 
              selectedPeriods: data.selectedPeriods,
              manuallyEditedDrivers: data.manuallyEditedDrivers,
              driverScenarios: data.driverScenarios
            }
          : s
      ));
      setSelectedScenario(data.name);
      notify.success(`Сценарий "${data.name}" обновлен`);
    } else {
      const newScenario: Scenario = {
        id: `scenario-${Date.now()}`,
        name: data.name,
        companyId: selectedCompanyId,
        values: data.values,
        selectedPeriods: data.selectedPeriods,
        manuallyEditedDrivers: data.manuallyEditedDrivers,
        driverScenarios: data.driverScenarios
      };
      
      setScenarios(prev => [...prev, newScenario]);
      setSelectedScenario(data.name);
      notify.success(`Сценарий "${data.name}" успешно создан`);
    }
    
    setIsModalOpen(false);
    setEditingScenario(null);
  };

  const currentScenario = companyScenarios.find(s => s.name === selectedScenario);

  return (
    <>
      <main className={dpStyles.main}>
        <FilterBar 
          selectedCompany={currentCompany}
          onCompanyChange={setSelectedCompanyId}
          availableCompanies={allCompanies}
          selectedScenario={selectedScenario} 
          onScenarioChange={setSelectedScenario}
          onCreateScenario={handleCreateScenario}
          onEditScenario={handleEditScenario}
          onDeleteScenario={handleDeleteScenario}
          availableScenarios={companyScenarios.map(s => s.name)}
          presetScenarios={PRESET_SCENARIO_NAMES}
          periodType={periodType}
          onPeriodTypeChange={setPeriodType}
          availablePeriodTypes={currentCompany.availablePeriodTypes}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
          selectedSources={selectedSources}
          onSourcesChange={setSelectedSources}
          allSources={SOURCES}
          displayFormat={displayFormat}
          onDisplayFormatChange={setDisplayFormat}
        />
        {viewMode === 'consensus' ? (
          <ConsensusTab
            companyId={currentCompany.id}
            companyTicker={currentCompany.ticker}
            selectedSources={selectedSources}
            onSourcesChange={setSelectedSources}
            displayFormat={displayFormat}
          />
        ) : (
          <Dashboard 
            scenarioData={currentScenario} 
            periodType={periodType} 
            allScenarios={companyScenarios} 
            companyTicker={currentCompany.ticker}
            displayFormat={displayFormat}
          />
        )}
      </main>
      
      {isModalOpen && (
        <ScenarioModal 
          isOpen={isModalOpen} 
          onClose={handleCloseModal}
          onSave={handleSaveScenario}
          company={currentCompany}
          editingScenario={editingScenario}
          allScenarios={companyScenarios}
        />
      )}
    </>
  );
}