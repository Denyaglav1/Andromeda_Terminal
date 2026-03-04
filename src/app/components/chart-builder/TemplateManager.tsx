import React, { useState } from 'react';
import { DSButton } from '../ui/ds-button';
import { DSInput } from '../ui/ds-input';
import { Trash2, Check } from 'lucide-react';
import type { ChartTemplate, ChartState } from './types';
import { BUILT_IN_TEMPLATES } from './chart-templates';
import tm from './TemplateManager.module.css';

/* ═══════════════════════════════════════════════════════
   TemplateManager — Built-in + user template list
   ═══════════════════════════════════════════════════════ */

const LS_KEY = 'chart-builder-user-templates';

export function loadUserTemplates(): ChartTemplate[] {
  try {
    const raw = localStorage.getItem(LS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch { return []; }
}

export function saveUserTemplates(templates: ChartTemplate[]) {
  localStorage.setItem(LS_KEY, JSON.stringify(templates));
}

interface Props {
  userTemplates: ChartTemplate[];
  onUserTemplatesChange: (t: ChartTemplate[]) => void;
  onApply: (template: ChartTemplate) => void;
  /** Pass current chart state to enable "Save as template" */
  currentChartState?: ChartState;
}

export function TemplateManager({ userTemplates, onUserTemplatesChange, onApply, currentChartState }: Props) {
  const [saving, setSaving] = useState(false);
  const [newName, setNewName] = useState('');
  const [newDesc, setNewDesc] = useState('');

  const allTemplates = [...BUILT_IN_TEMPLATES, ...userTemplates];

  const handleSave = () => {
    if (!currentChartState || !newName.trim()) return;
    const { headers, rows, xColumnIndex, ...configFields } = currentChartState;
    const tpl: ChartTemplate = {
      id: `user-${Date.now()}`,
      name: newName.trim(),
      description: newDesc.trim(),
      icon: '*',
      config: configFields,
      builtIn: false,
      createdAt: Date.now(),
    };
    const updated = [...userTemplates, tpl];
    onUserTemplatesChange(updated);
    saveUserTemplates(updated);
    setSaving(false);
    setNewName('');
    setNewDesc('');
  };

  const handleDelete = (id: string) => {
    const updated = userTemplates.filter(t => t.id !== id);
    onUserTemplatesChange(updated);
    saveUserTemplates(updated);
  };

  return (
    <div className={tm.root}>
      {/* Built-in */}
      <div className={tm.sectionTitle}>Встроенные</div>
      <div className={tm.list}>
        {BUILT_IN_TEMPLATES.map(tpl => (
          <button key={tpl.id} onClick={() => onApply(tpl)}
            className={tm.tplBtn}>
            <span className={tm.tplIcon}>{tpl.icon}</span>
            <div className={tm.tplContent}>
              <div className={tm.tplName}>{tpl.name}</div>
              <div className={tm.tplDesc}>{tpl.description}</div>
            </div>
          </button>
        ))}
      </div>

      {/* User */}
      {userTemplates.length > 0 && (
        <>
          <div className={tm.divider} />
          <div className={tm.sectionTitle}>Пользовательские</div>
          <div className={tm.list}>
            {userTemplates.map(tpl => (
              <div key={tpl.id} className={tm.userRow}>
                <button onClick={() => onApply(tpl)}
                  className={tm.userBtn}>
                  <span className={tm.tplIcon}>{tpl.icon}</span>
                  <span className={tm.tplName}>{tpl.name}</span>
                </button>
                <button onClick={() => handleDelete(tpl.id)}
                  className={tm.deleteBtn}>
                  <Trash2 className={tm.deleteIcon} />
                </button>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Save as template */}
      {currentChartState && (
        <>
          <div className={tm.divider} />
          {saving ? (
            <div className={tm.saveForm}>
              <DSInput size="xs" label="Название" value={newName} onChange={e => setNewName(e.target.value)} placeholder="Мой шаблон" />
              <DSInput size="xs" label="Описание" value={newDesc} onChange={e => setNewDesc(e.target.value)} placeholder="Описание (необязательно)" />
              <div className={tm.saveActions}>
                <DSButton variant="primary" size="sm" leftIcon={<Check style={{ width: 12, height: 12 }} />}
                  onClick={handleSave} disabled={!newName.trim()}>Сохранить</DSButton>
                <DSButton variant="ghost" size="sm" onClick={() => setSaving(false)}>Отмена</DSButton>
              </div>
            </div>
          ) : (
            <DSButton variant="outline" size="sm" style={{ width: '100%' }} onClick={() => setSaving(true)}>
              Сохранить как шаблон...
            </DSButton>
          )}
        </>
      )}
    </div>
  );
}