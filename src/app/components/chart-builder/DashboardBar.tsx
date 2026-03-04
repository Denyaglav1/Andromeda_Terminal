import React, { useState, useEffect, useRef } from 'react';
import { DSButton } from '../ui/ds-button';
import { DSInput } from '../ui/ds-input';
import {
  Plus, Save, FolderOpen, Trash2, Check, X,
  ChevronDown, LayoutTemplate, Copy,
} from 'lucide-react';
import type { DashboardSettings, DashboardChart, SavedDashboard, DashboardTemplate } from './types';
import db from './DashboardBar.module.css';

/* ═══════════════════════════════════════════════════════
   DashboardBar — Top bar for dashboard page management
   Shows: current dashboard title | saved dashboards |
          save / save-as / new / templates
   ═══════════════════════════════════════════════════════ */

const LS_DASHBOARDS = 'chart-builder-saved-dashboards';
const LS_DASH_TEMPLATES = 'chart-builder-dashboard-templates';

/* ── localStorage helpers ── */
function loadSavedDashboards(): SavedDashboard[] {
  try { return JSON.parse(localStorage.getItem(LS_DASHBOARDS) || '[]'); } catch { return []; }
}
function saveDashboardsToLS(dbs: SavedDashboard[]) {
  localStorage.setItem(LS_DASHBOARDS, JSON.stringify(dbs));
}
export function loadDashboardTemplates(): DashboardTemplate[] {
  try { return JSON.parse(localStorage.getItem(LS_DASH_TEMPLATES) || '[]'); } catch { return []; }
}
export function saveDashboardTemplatesToLS(tpls: DashboardTemplate[]) {
  localStorage.setItem(LS_DASH_TEMPLATES, JSON.stringify(tpls));
}

interface Props {
  settings: DashboardSettings;
  charts: DashboardChart[];
  onLoadDashboard: (db: SavedDashboard) => void;
  onNewDashboard: () => void;
  onApplyDashboardTemplate: (tpl: DashboardTemplate) => void;
  onTitleChange: (title: string) => void;
  /** Current dashboard id (if loaded from saved) */
  currentDashboardId?: string | null;
}

/* ── Dropdown wrapper ── */
function Dropdown({ open, onClose, children, className = '' }: {
  open: boolean; onClose: () => void; children: React.ReactNode; className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    };
    const esc = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('mousedown', handler);
    document.addEventListener('keydown', esc);
    return () => { document.removeEventListener('mousedown', handler); document.removeEventListener('keydown', esc); };
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div ref={ref} className={db.dropdown}>
      <div className={db.dropdownPanel}>
        {children}
      </div>
    </div>
  );
}

export function DashboardBar({
  settings, charts, onLoadDashboard, onNewDashboard,
  onApplyDashboardTemplate, onTitleChange, currentDashboardId,
}: Props) {
  const [savedDashboards, setSavedDashboards] = useState<SavedDashboard[]>(loadSavedDashboards);
  const [dashTemplates, setDashTemplates] = useState<DashboardTemplate[]>(loadDashboardTemplates);
  const [showDashList, setShowDashList] = useState(false);
  const [showTemplateList, setShowTemplateList] = useState(false);
  const [showSave, setShowSave] = useState(false);
  const [showSaveTemplate, setShowSaveTemplate] = useState(false);
  const [saveName, setSaveName] = useState('');
  const [tplName, setTplName] = useState('');
  const [tplDesc, setTplDesc] = useState('');

  /* ── Save dashboard ── */
  const handleSaveDashboard = () => {
    if (!saveName.trim()) return;
    const db: SavedDashboard = {
      id: currentDashboardId || `db-${Date.now()}`,
      name: saveName.trim(),
      settings: { ...settings },
      charts: charts.map(c => ({ ...c, chartState: { ...c.chartState } })),
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };
    // Replace if same id, else add
    const exists = savedDashboards.findIndex(d => d.id === db.id);
    const updated = exists >= 0
      ? savedDashboards.map(d => d.id === db.id ? db : d)
      : [...savedDashboards, db];
    setSavedDashboards(updated);
    saveDashboardsToLS(updated);
    setSaveName('');
    setShowSave(false);
  };

  const handleDeleteDashboard = (id: string) => {
    const updated = savedDashboards.filter(d => d.id !== id);
    setSavedDashboards(updated);
    saveDashboardsToLS(updated);
  };

  /* ── Save as dashboard template ── */
  const handleSaveDashTemplate = () => {
    if (!tplName.trim()) return;
    const tpl: DashboardTemplate = {
      id: `dtpl-${Date.now()}`,
      name: tplName.trim(),
      description: tplDesc.trim(),
      settings: { ...settings },
      charts: charts.map(c => ({
        ...c,
        id: `dtc-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
        chartState: { ...c.chartState },
      })),
      createdAt: Date.now(),
    };
    const updated = [...dashTemplates, tpl];
    setDashTemplates(updated);
    saveDashboardTemplatesToLS(updated);
    setTplName('');
    setTplDesc('');
    setShowSaveTemplate(false);
  };

  const handleDeleteTemplate = (id: string) => {
    const updated = dashTemplates.filter(t => t.id !== id);
    setDashTemplates(updated);
    saveDashboardTemplatesToLS(updated);
  };

  return (
    <div className={db.bar}>
      {/* Title */}
      <FolderOpen className={db.barIcon} />
      <input
        className={db.titleInput}
        value={settings.title}
        onChange={e => onTitleChange(e.target.value)}
        placeholder="Без заголовка"
      />

      <div className={db.divider} />

      {/* Dashboards dropdown */}
      <div className={db.relative}>
        <DSButton
          variant="ghost" size="sm"
          leftIcon={<ChevronDown className={db.iconSm} />}
          onClick={() => { setShowDashList(v => !v); setShowTemplateList(false); }}
        >
          Дашборды{savedDashboards.length > 0 && ` (${savedDashboards.length})`}
        </DSButton>
        <Dropdown open={showDashList} onClose={() => setShowDashList(false)}>
          <div className={db.dropdownBody}>
            <DSButton variant="primary" size="sm" leftIcon={<Plus className={db.iconMd} />}
              onClick={() => { onNewDashboard(); setShowDashList(false); }} style={{ width: '100%' }}>
              Новый дашборд
            </DSButton>
            {savedDashboards.length > 0 && (
              <>
                <div className={db.ddDivider} />
                <div className={db.ddSectionLabel}>
                  Сохранённые
                </div>
                {savedDashboards.map(dash => (
                  <div key={dash.id} className={db.listItem}>
                    <button
                      onClick={() => { onLoadDashboard(dash); setShowDashList(false); }}
                      className={db.listItemBtn}
                    >
                      <FolderOpen className={db.listItemIcon} />
                      <div className={db.listItemContent}>
                        <div className={db.listItemName}>{dash.name}</div>
                        <div className={db.listItemMeta}>
                          {dash.charts.length} граф. · {new Date(dash.updatedAt).toLocaleDateString('ru')}
                        </div>
                      </div>
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); handleDeleteDashboard(dash.id); }}
                      className={db.listDeleteBtn}
                    >
                      <Trash2 className={db.iconSm} />
                    </button>
                  </div>
                ))}
              </>
            )}
          </div>
        </Dropdown>
      </div>

      {/* Save */}
      <div className={db.relative}>
        <DSButton variant="ghost" size="sm" leftIcon={<Save className={db.iconSm} />}
          onClick={() => { setShowSave(v => !v); setShowTemplateList(false); setShowDashList(false); }}>
          Сохранить
        </DSButton>
        <Dropdown open={showSave} onClose={() => setShowSave(false)}>
          <div className={db.dropdownBody3}>
            <div className={db.dropdownTitle}>Сохранить дашборд</div>
            <DSInput size="xs" label="Название" value={saveName}
              onChange={e => setSaveName(e.target.value)} placeholder="Мой дашборд" />
            <div className={db.ddActions}>
              <DSButton variant="primary" size="sm" leftIcon={<Check className={db.iconSm} />}
                onClick={handleSaveDashboard} disabled={!saveName.trim()}>Сохранить</DSButton>
              <DSButton variant="ghost" size="sm" onClick={() => setShowSave(false)}>Отмена</DSButton>
            </div>
          </div>
        </Dropdown>
      </div>

      <div className={db.dividerSm} />

      {/* Dashboard templates */}
      <div className={db.relative}>
        <DSButton variant="ghost" size="sm" leftIcon={<LayoutTemplate className={db.iconSm} />}
          onClick={() => { setShowTemplateList(v => !v); setShowDashList(false); setShowSave(false); }}>
          Шаблоны
        </DSButton>
        <Dropdown open={showTemplateList} onClose={() => setShowTemplateList(false)}>
          <div className={db.dropdownBody}>
            {/* Save as template */}
            {!showSaveTemplate ? (
              <DSButton variant="outline" size="sm" leftIcon={<Copy className={db.iconSm} />}
                onClick={() => setShowSaveTemplate(true)} style={{ width: '100%' }}
                disabled={charts.length === 0}>
                Сохранить как шаблон...
              </DSButton>
            ) : (
              <div className={db.saveForm}>
                <DSInput size="xs" label="Название шаблона" value={tplName}
                  onChange={e => setTplName(e.target.value)} placeholder="Шаблон анализа" />
                <DSInput size="xs" label="Описание" value={tplDesc}
                  onChange={e => setTplDesc(e.target.value)} placeholder="(необязательно)" />
                <div className={db.ddActions}>
                  <DSButton variant="primary" size="sm" leftIcon={<Check className={db.iconSm} />}
                    onClick={handleSaveDashTemplate} disabled={!tplName.trim()}>Создать</DSButton>
                  <DSButton variant="ghost" size="sm" onClick={() => { setShowSaveTemplate(false); setTplName(''); setTplDesc(''); }}>
                    Отмена
                  </DSButton>
                </div>
              </div>
            )}

            {dashTemplates.length > 0 && (
              <>
                <div className={db.ddDivider} />
                <div className={db.ddSectionLabel}>
                  Шаблоны дашбордов ({dashTemplates.length})
                </div>
                {dashTemplates.map(tpl => (
                  <div key={tpl.id} className={db.listItem}>
                    <button
                      onClick={() => { onApplyDashboardTemplate(tpl); setShowTemplateList(false); }}
                      className={db.listItemBtn}
                    >
                      <LayoutTemplate className={db.listItemIcon} />
                      <div className={db.listItemContent}>
                        <div className={db.listItemName}>{tpl.name}</div>
                        <div className={db.listItemMeta}>
                          {tpl.charts.length} граф. · {tpl.description || new Date(tpl.createdAt).toLocaleDateString('ru')}
                        </div>
                      </div>
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); handleDeleteTemplate(tpl.id); }}
                      className={db.listDeleteBtn}
                    >
                      <Trash2 className={db.iconSm} />
                    </button>
                  </div>
                ))}
              </>
            )}

            {dashTemplates.length === 0 && !showSaveTemplate && (
              <div className={db.emptyText}>
                Нет сохранённых шаблонов дашбордов.
                <br />Создайте дашборд и сохраните как шаблон.
              </div>
            )}
          </div>
        </Dropdown>
      </div>

      <div className={db.spacer} />

      {/* Info */}
      <span className={db.info}>
        {charts.length} граф. · {settings.canvasW}×{settings.canvasH}
      </span>
    </div>
  );
}