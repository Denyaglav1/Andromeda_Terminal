import React, { useState, useCallback, useRef, useEffect } from 'react';
import { Link } from 'react-router';
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';
import { Header } from '../Header';
import { DSButton } from '../ui/ds-button';
import { DSSegmentButton, DSSegment } from '../ui/ds-segment-button';
import { Download, Undo2, Redo2 } from 'lucide-react';

/* ═══════════════════════════════════════════════════════════
   Chart Builder — Interactive chart constructor service
   ═══════════════════════════════════════════════════════════ */

import type { ChartState } from './types';
import { createDefaultChartState, createDefaultDashboardState } from './types';
import type { DataSource } from './types';
import { SVGChartRenderer, exportSVG } from './svg-chart-renderer';
import { ChartSettingsPanel } from './ChartSettingsPanel';
import { DataTable } from './DataTable';
import { DashboardCanvas } from './DashboardCanvas';
import { useUndoRedo } from './useUndoRedo';
import { AddSeriesModal } from './AddSeriesModal';
import cb from './ChartBuilderPage.module.css';

/* ═══════════════════════════════════════════════════════
   Resize Handles
   ═══════════════════════════════════════════════════════ */

function ResizeHandleH() {
  return (
    <PanelResizeHandle className={cb.resizeH}>
      <div className={cb.resizeHBar} />
    </PanelResizeHandle>
  );
}

function ResizeHandleV() {
  return (
    <PanelResizeHandle className={cb.resizeV}>
      <div className={cb.resizeVBar} />
    </PanelResizeHandle>
  );
}

/* ═══════════════════════════════════════════════════════
   Main Page — Single Chart + Dashboard mode
   ═══════════════════════════════════════════════════════ */

export function ChartBuilderPage() {
  const [mode, setMode] = useState<'single' | 'dashboard'>('single');
  const { state, setState: setChartState, undo, redo, canUndo, canRedo } = useUndoRedo<ChartState>(createDefaultChartState(), 50, 300);
  const svgContainerRef = useRef<HTMLDivElement>(null);
  const [dashboardInitial] = useState(createDefaultDashboardState);
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [editingDS, setEditingDS] = useState<DataSource | null>(null);

  const handleExport = useCallback(() => {
    const svgEl = svgContainerRef.current?.querySelector('svg');
    exportSVG(svgEl as SVGSVGElement | null, state.title);
  }, [state.title]);

  const handleChartChange = useCallback((sOrFn: ChartState | ((prev: ChartState) => ChartState)) => {
    setChartState(sOrFn, 'Изменение');
  }, [setChartState]);

  /* Keyboard shortcuts for single mode */
  useEffect(() => {
    if (mode !== 'single') return;
    const handler = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA') return;
      const ctrl = e.ctrlKey || e.metaKey;
      const key = e.key.toLowerCase();
      if (ctrl && !e.shiftKey && key === 'z') { e.preventDefault(); undo(); return; }
      if ((ctrl && e.shiftKey && key === 'z') || (ctrl && key === 'y')) { e.preventDefault(); redo(); return; }
      if (ctrl && key === 'e') { e.preventDefault(); handleExport(); return; }
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [mode, undo, redo, handleExport]);

  return (
    <div className={cb.root}>
      <Header />

      {/* Mode switcher toolbar */}
      <div className={cb.toolbar}>
        <Link to="/" className={cb.toolbarBackLink}>
          <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M5 7L1 4L5 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </Link>
        <span className={cb.toolbarTitle}>Конструктор графиков</span>
        <DSSegmentButton variant="stroke" size="xs" value={mode} onChange={v => setMode(v as 'single' | 'dashboard')}>
          <DSSegment value="single">Один график</DSSegment>
          <DSSegment value="dashboard">Дашборд</DSSegment>
        </DSSegmentButton>
        <div className={cb.spacer} />
        {mode === 'single' && (
          <div className={cb.toolbarActions}>
            <DSButton variant="ghost" size="sm" leftIcon={<Undo2 style={{ width: 14, height: 14 }} />} onClick={undo} disabled={!canUndo} title="Ctrl+Z" />
            <DSButton variant="ghost" size="sm" leftIcon={<Redo2 style={{ width: 14, height: 14 }} />} onClick={redo} disabled={!canRedo} title="Ctrl+Shift+Z" />
            <div className={cb.divider} />
            <DSButton variant="primary" size="sm" leftIcon={<Download style={{ width: 14, height: 14 }} />} onClick={handleExport}>SVG</DSButton>
          </div>
        )}
      </div>

      {/* Content */}
      {mode === 'single' ? (
        <PanelGroup direction="horizontal" style={{ flex: 1 }}>
          {/* Left Panel: Settings */}
          <Panel defaultSize={20} minSize={14} maxSize={35} style={{ background: 'var(--ds-bg-secondary)', display: 'flex', flexDirection: 'column' }}>
            <ChartSettingsPanel state={state} onChange={handleChartChange} />
          </Panel>

          <ResizeHandleH />

          {/* Right Area: Chart + Data */}
          <Panel defaultSize={80} minSize={50}>
            <PanelGroup direction="vertical" style={{ height: '100%' }}>
              <Panel defaultSize={65} minSize={30}>
                <div className={cb.chartArea} ref={svgContainerRef}>
                  <div className={cb.chartInner}>
                    <SVGChartRenderer state={state} width={state.canvasW} height={state.canvasH} interactive />
                  </div>
                </div>
              </Panel>

              <ResizeHandleV />

              <Panel defaultSize={35} minSize={15} maxSize={70} style={{ background: 'var(--ds-bg-primary)' }}>
                <DataTable
                  state={state}
                  onChange={(s) => setChartState(s, 'Данные')}
                  onOpenAddModal={() => setAddModalOpen(true)}
                  onEditSeries={(ds) => { setEditingDS(ds); setAddModalOpen(true); }}
                />
              </Panel>
            </PanelGroup>
          </Panel>
        </PanelGroup>
      ) : (
        <DashboardCanvas initial={dashboardInitial} />
      )}

      {/* Add Series Modal */}
      <AddSeriesModal
        open={addModalOpen}
        onClose={() => { setAddModalOpen(false); setEditingDS(null); }}
        state={state}
        onChange={(s) => setChartState(s, editingDS ? 'Редактирование данных' : 'Добавление данных')}
        editDataSource={editingDS}
      />
    </div>
  );
}