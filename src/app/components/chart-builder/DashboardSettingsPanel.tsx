import React, { useState } from 'react';
import { DSInput } from '../ui/ds-input';
import { DSSelect } from '../ui/ds-select';
import { DSCheckbox } from '../ui/ds-checkbox';
import { DSButton } from '../ui/ds-button';
import { DSSegmentButton, DSSegment } from '../ui/ds-segment-button';
import { DSTabs, DSTab } from '../ui/ds-tabs';
import { Download } from 'lucide-react';
import type { DashboardSettings, DashboardChart } from './types';
import { SIZE_PRESETS } from './types';
import { TemplateManager } from './TemplateManager';
import type { ChartTemplate } from './types';
import dp from './DashboardSettingsPanel.module.css';

/* ═══════════════════════════════════════════════════════
   DashboardSettingsPanel — Right panel: canvas settings + chart templates
   Dashboard management (save/load/templates) moved to DashboardBar
   ═══════════════════════════════════════════════════════ */

interface Props {
  settings: DashboardSettings;
  charts: DashboardChart[];
  userTemplates: ChartTemplate[];
  onSettingsChange: (s: DashboardSettings) => void;
  onApplyTemplate: (tpl: ChartTemplate) => void;
  onUserTemplatesChange: (t: ChartTemplate[]) => void;
  onExportSVG: () => void;
  currentChartState?: any;
}

export function DashboardSettingsPanel({
  settings, charts, userTemplates,
  onSettingsChange, onApplyTemplate, onUserTemplatesChange,
  onExportSVG, currentChartState,
}: Props) {
  const patch = (p: Partial<DashboardSettings>) => onSettingsChange({ ...settings, ...p });
  const [tab, setTab] = useState('settings');

  return (
    <div className={dp.root}>
      <div className={dp.tabsWrap}>
        <DSTabs size="xs" value={tab} onChange={setTab} style={{ borderBottom: '1px solid var(--ds-border-primary)', padding: '0 4px', whiteSpace: 'nowrap' }}>
          <DSTab value="settings">Настройки</DSTab>
          <DSTab value="templates">Шаблоны графиков</DSTab>
        </DSTabs>
      </div>

      <div className={dp.body}>
        {/* ── Settings tab ── */}
        {tab === 'settings' && (<>
          <div className={dp.sectionTitle}>Сетка колонок</div>
          <DSSegmentButton variant="stroke" size="xs" value={String(settings.columns)} onChange={v => patch({ columns: Number(v) })}>
            <DSSegment value="2">2 кол.</DSSegment>
            <DSSegment value="3">3 кол.</DSSegment>
            <DSSegment value="4">4 кол.</DSSegment>
          </DSSegmentButton>

          <div className={dp.divider} />
          <div className={dp.sectionTitle}>Размеры</div>
          <div className={dp.grid2}>
            <DSInput size="xs" label="Ширина" type="number" value={String(settings.canvasW)}
              onChange={e => patch({ canvasW: Number(e.target.value) || 1600 })} />
            <DSInput size="xs" label="Высота" type="number" value={String(settings.canvasH)}
              onChange={e => patch({ canvasH: Number(e.target.value) || 900 })} />
          </div>
          <DSSelect size="xs" label="Пресет"
            value={`${settings.canvasW}x${settings.canvasH}`}
            onChange={v => { const [w, h] = v.split('x').map(Number); if (w && h) patch({ canvasW: w, canvasH: h }); }}
            options={SIZE_PRESETS} />

          <div className={dp.divider} />
          <div className={dp.sectionTitle}>Отступы</div>
          <div className={dp.grid3}>
            <DSInput size="xs" label="Край X" type="number" value={String(settings.paddingX)}
              onChange={e => patch({ paddingX: Number(e.target.value) || 0 })} />
            <DSInput size="xs" label="Край Y" type="number" value={String(settings.paddingY)}
              onChange={e => patch({ paddingY: Number(e.target.value) || 0 })} />
            <DSInput size="xs" label="Зазор" type="number" value={String(settings.gap)}
              onChange={e => patch({ gap: Number(e.target.value) || 0 })} />
          </div>

          <div className={dp.divider} />
          <div className={dp.sectionTitle}>Сетка привязки</div>
          <DSCheckbox size="sm" checked={settings.showGrid} onChange={v => patch({ showGrid: v })} label="Показать сетку" />
          <DSInput size="xs" label="Размер ячейки" type="number" value={String(settings.gridSize)}
            onChange={e => patch({ gridSize: Math.max(5, Number(e.target.value) || 20) })} />
          <DSCheckbox size="sm" checked={settings.snapToGrid} onChange={v => patch({ snapToGrid: v })} label="Привязка к сетке" />

          <div className={dp.divider} />
          <DSCheckbox size="sm" checked={settings.showBorder} onChange={v => patch({ showBorder: v })} label="Рамка канваса" />

          <div className={dp.divider} />
          <div className={dp.sectionTitle}>Экспорт</div>
          <DSButton variant="primary" size="sm" leftIcon={<Download style={{ width: 14, height: 14 }} />} onClick={onExportSVG} style={{ width: '100%' }}>
            Экспорт дашборда SVG
          </DSButton>
        </>)}

        {/* ── Templates tab (chart-level templates) ── */}
        {tab === 'templates' && (
          <TemplateManager
            userTemplates={userTemplates}
            onUserTemplatesChange={onUserTemplatesChange}
            onApply={onApplyTemplate}
            currentChartState={currentChartState}
          />
        )}
      </div>
    </div>
  );
}