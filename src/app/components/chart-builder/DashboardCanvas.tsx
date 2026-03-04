import React, { useState, useCallback, useRef, useEffect, useMemo } from 'react';
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';
import { Plus, ZoomIn, ZoomOut, Maximize2, Undo2, Redo2, Download, Copy } from 'lucide-react';
import { DSButton } from '../ui/ds-button';
import { DSSegmentButton, DSSegment } from '../ui/ds-segment-button';
import { ChartCard } from './ChartCard';
import { DashboardSettingsPanel } from './DashboardSettingsPanel';
import { ChartSettingsPanel } from './ChartSettingsPanel';
import { DashboardBar } from './DashboardBar';
import { DataTable } from './DataTable';
import { AddSeriesModal } from './AddSeriesModal';
import type { DashboardState, DashboardChart, ChartState, ChartTemplate, SavedDashboard, DashboardTemplate, DataSource } from './types';
import { createDefaultChartState, createDefaultDashboardState, applyTemplate, DS } from './types';
import { rectsIntersect, snapToGrid } from './helpers';
import { useUndoRedo } from './useUndoRedo';
import dc from './DashboardCanvas.module.css';

/* ═══════════════════════════════════════════════════════
   DashboardCanvas — Multi-chart workspace
   Layout: DashboardBar (top) | Left=chart settings | Center=canvas | Right=dashboard settings | Bottom=data
   ═══════════════════════════════════════════════════════ */

const ZOOM_LEVELS = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 2];

/* ── Resize handles for PanelGroup ── */
function ResizeHandleH() {
  return (
    <PanelResizeHandle className={dc.resizeH}>
      <div className={dc.resizeHBar} />
    </PanelResizeHandle>
  );
}
function ResizeHandleV() {
  return (
    <PanelResizeHandle className={dc.resizeV}>
      <div className={dc.resizeVBar} />
    </PanelResizeHandle>
  );
}

/* ═══════════════════════════════════════════════════════
   Main Component
   ═══════════════════════════════════════════════════════ */

interface Props { initial: DashboardState; }

export function DashboardCanvas({ initial }: Props) {
  const { state, setState, undo, redo, canUndo, canRedo } = useUndoRedo<DashboardState>(initial, 50, 300);
  const [zoom, setZoom] = useState(1);
  const canvasRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const exportCanvasRef = useRef<HTMLDivElement>(null);
  const [marquee, setMarquee] = useState<{ sx: number; sy: number; ex: number; ey: number } | null>(null);
  const marqueeDragging = useRef(false);
  const [bottomPanelVisible, setBottomPanelVisible] = useState(false);

  // Add Series Modal state (for dashboard data editing)
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [editingDS, setEditingDS] = useState<DataSource | null>(null);

  const { settings, charts, selectedChartIds, userTemplates } = state;
  const selectedSet = useMemo(() => new Set(selectedChartIds), [selectedChartIds]);
  const selectedCharts = useMemo(() => charts.filter(c => selectedSet.has(c.id)), [charts, selectedSet]);
  const isSingle = selectedChartIds.length === 1;
  const singleChart = isSingle ? charts.find(c => c.id === selectedChartIds[0]) : null;

  // Sync bottom panel visibility with selection (deferred to avoid PanelGroup re-mount issues)
  useEffect(() => {
    setBottomPanelVisible(!!singleChart);
  }, [singleChart]);

  /* ── State helpers ── */
  const patch = useCallback((p: Partial<DashboardState>, label: string) => {
    setState(prev => ({ ...prev, ...p }), label);
  }, [setState]);

  const updateCharts = useCallback((fn: (c: DashboardChart[]) => DashboardChart[], label: string) => {
    setState(prev => ({ ...prev, charts: fn(prev.charts) }), label);
  }, [setState]);

  const updateChart = useCallback((id: string, fn: (c: DashboardChart) => DashboardChart, label: string) => {
    setState(prev => ({
      ...prev,
      charts: prev.charts.map(c => c.id === id ? fn(c) : c),
    }), label);
  }, [setState]);

  /* ── Selection (single atomic state update) ── */
  const selectChart = useCallback((id: string, e: React.PointerEvent) => {
    const additive = e.shiftKey || e.ctrlKey || e.metaKey;
    setState(prev => {
      const prevSet = new Set(prev.selectedChartIds);
      let newSelectedIds: string[];
      if (additive) {
        newSelectedIds = prevSet.has(id)
          ? prev.selectedChartIds.filter(i => i !== id)
          : [...prev.selectedChartIds, id];
      } else {
        newSelectedIds = prevSet.has(id) ? prev.selectedChartIds : [id];
      }
      const maxZ = Math.max(0, ...prev.charts.map(c => c.zIndex));
      return {
        ...prev,
        selectedChartIds: newSelectedIds,
        charts: prev.charts.map(c => c.id === id ? { ...c, zIndex: maxZ + 1 } : c),
      };
    }, 'Выделение');
  }, [setState]);

  const clearSelection = useCallback(() => {
    setState(prev => {
      if (prev.selectedChartIds.length === 0) return prev;
      return { ...prev, selectedChartIds: [] };
    }, 'Снять выделение');
  }, [setState]);

  const selectAll = useCallback(() => {
    setState(prev => ({ ...prev, selectedChartIds: prev.charts.map(c => c.id) }), 'Выделить все');
  }, [setState]);

  /* ── Chart CRUD ── */
  const addChart = useCallback((chartState?: ChartState) => {
    const cs = chartState || createDefaultChartState();
    setState(prev => {
      const maxZ = Math.max(0, ...prev.charts.map(c => c.zIndex));
      const cols = prev.settings.columns || 2;
      const chartW = Math.floor((prev.settings.canvasW - prev.settings.paddingX * 2 - (cols - 1) * prev.settings.gap) / cols);
      const chartH = 300;
      const idx = prev.charts.length;
      const col = idx % cols;
      const row = Math.floor(idx / cols);
      const x = snapToGrid(prev.settings.paddingX + col * (chartW + prev.settings.gap), prev.settings.gridSize, prev.settings.snapToGrid);
      const y = snapToGrid(prev.settings.paddingY + row * (chartH + prev.settings.gap), prev.settings.gridSize, prev.settings.snapToGrid);
      const newChart: DashboardChart = { id: `dc-${Date.now()}`, x, y, w: chartW, h: chartH, chartState: cs, zIndex: maxZ + 1, locked: false };
      return { ...prev, charts: [...prev.charts, newChart], selectedChartIds: [newChart.id] };
    }, 'Добавление графика');
  }, [setState]);

  const deleteSelected = useCallback(() => {
    setState(prev => {
      if (prev.selectedChartIds.length === 0) return prev;
      const delSet = new Set(prev.selectedChartIds);
      return { ...prev, charts: prev.charts.filter(c => !delSet.has(c.id)), selectedChartIds: [] };
    }, 'Удаление');
  }, [setState]);

  const duplicateSelected = useCallback(() => {
    setState(prev => {
      if (prev.selectedChartIds.length === 0) return prev;
      const selSet = new Set(prev.selectedChartIds);
      const sel = prev.charts.filter(c => selSet.has(c.id));
      const maxZ = Math.max(0, ...prev.charts.map(c => c.zIndex));
      const nc = sel.map((c, i) => ({
        ...c, id: `dc-${Date.now()}-${i}`, x: c.x + 20, y: c.y + 20,
        zIndex: maxZ + 1 + i, chartState: { ...c.chartState },
      }));
      return { ...prev, charts: [...prev.charts, ...nc], selectedChartIds: nc.map(c => c.id) };
    }, 'Дублирование');
  }, [setState]);

  const toggleLockSelected = useCallback(() => {
    setState(prev => {
      const selSet = new Set(prev.selectedChartIds);
      const sel = prev.charts.filter(c => selSet.has(c.id));
      const anyUnlocked = sel.some(c => !c.locked);
      return { ...prev, charts: prev.charts.map(c => selSet.has(c.id) ? { ...c, locked: anyUnlocked } : c) };
    }, 'Блокировка');
  }, [setState]);

  /* ── Move / Resize ── */
  const moveChart = useCallback((id: string, x: number, y: number) => {
    setState(prev => {
      const selSet = new Set(prev.selectedChartIds);
      if (selSet.has(id) && prev.selectedChartIds.length > 1) {
        const ch = prev.charts.find(c => c.id === id);
        if (!ch) return prev;
        const dx = x - ch.x, dy = y - ch.y;
        return { ...prev, charts: prev.charts.map(c => selSet.has(c.id) && !c.locked ? { ...c, x: Math.max(0, c.x + dx), y: Math.max(0, c.y + dy) } : c) };
      }
      return { ...prev, charts: prev.charts.map(c => c.id === id ? { ...c, x, y } : c) };
    }, 'Перемещение');
  }, [setState]);

  const resizeChart = useCallback((id: string, x: number, y: number, w: number, h: number) => {
    updateChart(id, c => ({ ...c, x, y, w, h }), 'Масштабирование');
  }, [updateChart]);

  /* ── Chart settings update ── */
  const updateSelectedChartState = useCallback((csOrFn: ChartState | ((prev: ChartState) => ChartState)) => {
    setState(prev => {
      if (prev.selectedChartIds.length !== 1) return prev;
      const selId = prev.selectedChartIds[0];
      return {
        ...prev,
        charts: prev.charts.map(c => {
          if (c.id !== selId) return c;
          const newCs = typeof csOrFn === 'function' ? csOrFn(c.chartState) : csOrFn;
          return { ...c, chartState: newCs };
        }),
      };
    }, 'Изменение настроек');
  }, [setState]);

  /* ── Template apply ── */
  const handleApplyTemplate = useCallback((tpl: ChartTemplate) => {
    setState(prev => {
      if (prev.selectedChartIds.length === 0) return prev;
      const selSet = new Set(prev.selectedChartIds);
      return { ...prev, charts: prev.charts.map(c => selSet.has(c.id) ? { ...c, chartState: applyTemplate(c.chartState, tpl), templateId: tpl.id } : c) };
    }, 'Применение шаблона');
  }, [setState]);

  /* ── Apply dashboard template ── */
  const handleApplyDashboardTemplate = useCallback((tpl: DashboardTemplate) => {
    setState(prev => ({
      ...prev,
      settings: { ...tpl.settings },
      charts: tpl.charts.map((c, i) => ({
        ...c,
        id: `dc-${Date.now()}-${i}`,
        chartState: { ...c.chartState },
      })),
      selectedChartIds: [],
    }), 'Применение шаблона дашборда');
  }, [setState]);

  /* ── Dashboard operations ── */
  const handleLoadDashboard = useCallback((db: SavedDashboard) => {
    setState(prev => ({ ...prev, settings: db.settings, charts: db.charts, selectedChartIds: [] }), 'Загрузка дашборда');
  }, [setState]);

  const handleNewDashboard = useCallback(() => {
    setState(prev => ({ ...createDefaultDashboardState(), userTemplates: prev.userTemplates }), 'Новый дашборд');
  }, [setState]);

  /* ── Export dashboard SVG ── */
  const handleExportDashboardSVG = useCallback(() => {
    const svgNS = 'http://www.w3.org/2000/svg';
    const rootSvg = document.createElementNS(svgNS, 'svg');
    rootSvg.setAttribute('xmlns', svgNS);
    rootSvg.setAttribute('width', String(settings.canvasW));
    rootSvg.setAttribute('height', String(settings.canvasH));
    rootSvg.setAttribute('viewBox', `0 0 ${settings.canvasW} ${settings.canvasH}`);
    const bg = document.createElementNS(svgNS, 'rect');
    bg.setAttribute('width', String(settings.canvasW));
    bg.setAttribute('height', String(settings.canvasH));
    bg.setAttribute('fill', DS.bg);
    rootSvg.appendChild(bg);
    const container = exportCanvasRef.current;
    if (container) {
      const chartSvgs = container.querySelectorAll('[data-export-chart]');
      chartSvgs.forEach(el => {
        const svgEl = el.querySelector('svg');
        if (!svgEl) return;
        const cx = el.getAttribute('data-cx') || '0';
        const cy = el.getAttribute('data-cy') || '0';
        const clone = svgEl.cloneNode(true) as SVGSVGElement;
        const g = document.createElementNS(svgNS, 'g');
        g.setAttribute('transform', `translate(${cx}, ${cy})`);
        while (clone.firstChild) g.appendChild(clone.firstChild);
        rootSvg.appendChild(g);
      });
    }
    const svgString = new XMLSerializer().serializeToString(rootSvg);
    const blob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = `${settings.title || 'dashboard'}.svg`; a.click();
    URL.revokeObjectURL(url);
  }, [settings]);

  /* ── Zoom ── */
  const zoomIn = () => setZoom(z => { const i = ZOOM_LEVELS.findIndex(l => l >= z); return ZOOM_LEVELS[Math.min(i + 1, ZOOM_LEVELS.length - 1)]; });
  const zoomOut = () => setZoom(z => { const i = ZOOM_LEVELS.findIndex(l => l >= z); return ZOOM_LEVELS[Math.max(i - 1, 0)]; });
  const fitToView = () => { if (!containerRef.current) return; const { clientWidth, clientHeight } = containerRef.current; setZoom(Math.min(clientWidth / settings.canvasW, clientHeight / settings.canvasH, 1) * 0.95); };

  /* ── Keyboard shortcuts ── */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA') return;
      const ctrl = e.ctrlKey || e.metaKey;
      const key = e.key.toLowerCase();
      if (ctrl && !e.shiftKey && key === 'z') { e.preventDefault(); undo(); return; }
      if ((ctrl && e.shiftKey && key === 'z') || (ctrl && key === 'y')) { e.preventDefault(); redo(); return; }
      if ((key === 'delete' || key === 'backspace') && selectedChartIds.length > 0) { e.preventDefault(); deleteSelected(); return; }
      if (ctrl && key === 'd' && selectedChartIds.length > 0) { e.preventDefault(); duplicateSelected(); return; }
      if (ctrl && key === 'a') { e.preventDefault(); selectAll(); return; }
      if (key === 'escape') { clearSelection(); return; }
      if (ctrl && key === 'l' && selectedChartIds.length > 0) { e.preventDefault(); toggleLockSelected(); return; }
      if (ctrl && key === 'n') { e.preventDefault(); addChart(); return; }
      if (ctrl && key === 'e') { e.preventDefault(); handleExportDashboardSVG(); return; }
      const step = e.shiftKey ? (settings.snapToGrid ? settings.gridSize * 5 : 10) : (settings.snapToGrid ? settings.gridSize : 1);
      if (['arrowup', 'arrowdown', 'arrowleft', 'arrowright'].includes(key) && selectedChartIds.length > 0) {
        e.preventDefault();
        setState(prev => {
          const selSet = new Set(prev.selectedChartIds);
          return { ...prev, charts: prev.charts.map(c => {
            if (!selSet.has(c.id) || c.locked) return c;
            if (key === 'arrowup') return { ...c, y: Math.max(0, c.y - step) };
            if (key === 'arrowdown') return { ...c, y: c.y + step };
            if (key === 'arrowleft') return { ...c, x: Math.max(0, c.x - step) };
            if (key === 'arrowright') return { ...c, x: c.x + step };
            return c;
          })};
        }, 'Nudge');
      }
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [undo, redo, deleteSelected, duplicateSelected, selectAll, clearSelection, toggleLockSelected,
    addChart, handleExportDashboardSVG, selectedChartIds, settings, setState]);

  /* ── Marquee ── */
  const handleCanvasPointerDown = useCallback((e: React.PointerEvent) => {
    if ((e.target as HTMLElement).closest('[data-chart-card]')) return;
    if (!e.shiftKey && !e.ctrlKey && !e.metaKey) clearSelection();
    if (!canvasRef.current) return;
    const rect = canvasRef.current.getBoundingClientRect();
    marqueeDragging.current = true;
    const sx = (e.clientX - rect.left) / zoom, sy = (e.clientY - rect.top) / zoom;
    setMarquee({ sx, sy, ex: sx, ey: sy });
  }, [zoom, clearSelection]);

  const handleCanvasPointerMove = useCallback((e: React.PointerEvent) => {
    if (!marqueeDragging.current || !canvasRef.current) return;
    const rect = canvasRef.current.getBoundingClientRect();
    setMarquee(prev => prev ? { ...prev, ex: (e.clientX - rect.left) / zoom, ey: (e.clientY - rect.top) / zoom } : null);
  }, [zoom]);

  const handleCanvasPointerUp = useCallback((e: React.PointerEvent) => {
    if (!marqueeDragging.current || !marquee) { marqueeDragging.current = false; return; }
    marqueeDragging.current = false;
    const mx = Math.min(marquee.sx, marquee.ex), my = Math.min(marquee.sy, marquee.ey);
    const mw = Math.abs(marquee.ex - marquee.sx), mh = Math.abs(marquee.ey - marquee.sy);
    if (mw > 5 || mh > 5) {
      const additive = e.shiftKey || e.ctrlKey || e.metaKey;
      setState(prev => {
        const hitIds = prev.charts.filter(c => rectsIntersect({ x: mx, y: my, w: mw, h: mh }, { x: c.x, y: c.y, w: c.w, h: c.h })).map(c => c.id);
        const newIds = additive ? [...new Set([...prev.selectedChartIds, ...hitIds])] : hitIds;
        return { ...prev, selectedChartIds: newIds };
      }, 'Marquee выделение');
    }
    setMarquee(null);
  }, [marquee, setState]);

  /* ── Ctrl+Wheel zoom ── */
  useEffect(() => {
    const el = containerRef.current; if (!el) return;
    const handler = (e: WheelEvent) => {
      if (!e.ctrlKey && !e.metaKey) return;
      e.preventDefault();
      setZoom(z => Math.max(0.25, Math.min(2, Math.round((z + (e.deltaY > 0 ? -0.1 : 0.1)) * 100) / 100)));
    };
    el.addEventListener('wheel', handler, { passive: false });
    return () => el.removeEventListener('wheel', handler);
  }, []);

  const gridPatternId = 'dash-grid-pattern';

  return (
    <div className={dc.root}>
      {/* ── Dashboard Bar (page management) ── */}
      <DashboardBar
        settings={settings}
        charts={charts}
        onLoadDashboard={handleLoadDashboard}
        onNewDashboard={handleNewDashboard}
        onApplyDashboardTemplate={handleApplyDashboardTemplate}
        onTitleChange={title => patch({ settings: { ...settings, title } }, 'Заголовок')}
      />

      <PanelGroup direction="horizontal" style={{ flex: 1, minHeight: 0 }}>
        {/* ── LEFT PANEL: Chart Settings ── */}
        <Panel defaultSize={18} minSize={12} maxSize={30} className={dc.sidePanel}>
          {singleChart ? (
            <>
              <div className={dc.sidePanelHeader}>
                <span className={dc.sidePanelTitle}>
                  {singleChart.chartState.title || 'Настройки графика'}
                </span>
              </div>
              <ChartSettingsPanel state={singleChart.chartState} onChange={updateSelectedChartState} />
            </>
          ) : (
            <div className={dc.sidePanelEmpty}>
              <p>Выберите один график для редактирования</p>
              <DSButton variant="outline" size="sm" leftIcon={<Plus style={{ width: 14, height: 14 }} />} onClick={() => addChart()}>
                Добавить
              </DSButton>
            </div>
          )}
        </Panel>

        <ResizeHandleH />

        {/* ── CENTER: Canvas + bottom data ── */}
        <Panel defaultSize={58} minSize={30}>
          <PanelGroup direction="vertical" style={{ height: '100%' }}>
            {/* Canvas area */}
            <Panel defaultSize={bottomPanelVisible ? 65 : 100} minSize={30}>
              <div className={dc.canvasWrapper}>
                {/* Toolbar */}
                <div className={dc.canvasToolbar}>
                  <DSButton variant="ghost" size="sm" leftIcon={<Undo2 style={{ width: 14, height: 14 }} />} onClick={undo} disabled={!canUndo} title="Ctrl+Z" />
                  <DSButton variant="ghost" size="sm" leftIcon={<Redo2 style={{ width: 14, height: 14 }} />} onClick={redo} disabled={!canRedo} title="Ctrl+Shift+Z" />
                  <div className={dc.divider} />
                  <DSButton variant="primary" size="sm" leftIcon={<Plus style={{ width: 14, height: 14 }} />} onClick={() => addChart()}>+</DSButton>
                  {selectedChartIds.length > 0 && (
                    <DSButton variant="ghost" size="sm" leftIcon={<Copy style={{ width: 14, height: 14 }} />} onClick={duplicateSelected} />
                  )}
                  <div className={dc.spacer} />
                  <DSSegmentButton variant="stroke" size="xs"
                    value={String(settings.columns || 2)}
                    onChange={v => patch({ settings: { ...settings, columns: Number(v) } }, 'Колонки')}>
                    <DSSegment value="2">2</DSSegment>
                    <DSSegment value="3">3</DSSegment>
                    <DSSegment value="4">4</DSSegment>
                  </DSSegmentButton>
                  <div className={dc.divider} />
                  <DSButton variant="ghost" size="sm" leftIcon={<ZoomOut style={{ width: 14, height: 14 }} />} onClick={zoomOut} />
                  <span className={dc.zoomLabel}>
                    {Math.round(zoom * 100)}%
                  </span>
                  <DSButton variant="ghost" size="sm" leftIcon={<ZoomIn style={{ width: 14, height: 14 }} />} onClick={zoomIn} />
                  <DSButton variant="ghost" size="sm" leftIcon={<Maximize2 style={{ width: 14, height: 14 }} />} onClick={fitToView} />
                  <div className={dc.divider} />
                  <DSButton variant="ghost" size="sm" leftIcon={<Download style={{ width: 14, height: 14 }} />} onClick={handleExportDashboardSVG} title="Экспорт SVG (Ctrl+E)" />
                </div>

                {/* Canvas scroll container */}
                <div ref={containerRef} className={dc.canvasScroll}>
                  <div
                    ref={canvasRef}
                    className={dc.canvasInner}
                    style={{
                      width: settings.canvasW * zoom,
                      height: settings.canvasH * zoom + 80, // extra space for floating toolbars
                      margin: '12px auto',
                      paddingTop: 40, // room for toolbar above first row
                    }}
                    onPointerDown={handleCanvasPointerDown}
                    onPointerMove={handleCanvasPointerMove}
                    onPointerUp={handleCanvasPointerUp}
                  >
                    <div
                      ref={exportCanvasRef}
                      style={{
                        width: settings.canvasW,
                        height: settings.canvasH,
                        transform: `scale(${zoom})`,
                        transformOrigin: '0 0',
                        position: 'relative',
                        border: settings.showBorder ? '1px solid var(--ds-border-primary)' : undefined,
                        borderRadius: 4,
                        // NO overflow:hidden — so hover toolbars + resize handles work
                      }}
                    >
                      {/* Grid */}
                      {settings.showGrid && (
                        <svg className={dc.gridSvg} width={settings.canvasW} height={settings.canvasH}>
                          <defs>
                            <pattern id={gridPatternId} width={settings.gridSize} height={settings.gridSize} patternUnits="userSpaceOnUse">
                              <circle cx="1" cy="1" r="0.5" fill={DS.border} opacity="0.4" />
                            </pattern>
                          </defs>
                          <rect width="100%" height="100%" fill={`url(#${gridPatternId})`} />
                        </svg>
                      )}

                      {/* Charts */}
                      {charts.map(chart => (
                        <div key={chart.id} data-export-chart data-cx={chart.x} data-cy={chart.y}>
                          <ChartCard
                            chart={chart}
                            selected={selectedSet.has(chart.id)}
                            multiSelected={selectedChartIds.length > 1}
                            settings={settings}
                            zoom={zoom}
                            onSelect={(e) => selectChart(chart.id, e)}
                            onMove={(x, y) => moveChart(chart.id, x, y)}
                            onResize={(x, y, w, h) => resizeChart(chart.id, x, y, w, h)}
                            onDelete={() => setState(prev => ({
                              ...prev,
                              charts: prev.charts.filter(c => c.id !== chart.id),
                              selectedChartIds: prev.selectedChartIds.filter(i => i !== chart.id),
                            }), 'Удаление')}
                            onDuplicate={() => setState(prev => {
                              const maxZ = Math.max(0, ...prev.charts.map(c => c.zIndex));
                              const nc = { ...chart, id: `dc-${Date.now()}`, x: chart.x + 20, y: chart.y + 20, zIndex: maxZ + 1, chartState: { ...chart.chartState } };
                              return { ...prev, charts: [...prev.charts, nc], selectedChartIds: [nc.id] };
                            }, 'Дублирование')}
                            onToggleLock={() => updateChart(chart.id, c => ({ ...c, locked: !c.locked }), 'Toggle lock')}
                          />
                        </div>
                      ))}

                      {/* Marquee rectangle */}
                      {marquee && (() => {
                        const mx = Math.min(marquee.sx, marquee.ex), my = Math.min(marquee.sy, marquee.ey);
                        const mw = Math.abs(marquee.ex - marquee.sx), mh = Math.abs(marquee.ey - marquee.sy);
                        if (mw < 3 && mh < 3) return null;
                        return (
                          <div className={dc.marquee}
                            style={{ left: mx, top: my, width: mw, height: mh, borderColor: 'var(--ds-blue-6)', backgroundColor: 'var(--ds-blue-6-a10)' }}
                          />
                        );
                      })()}

                      {/* Empty state */}
                      {charts.length === 0 && (
                        <div className={dc.emptyState}>
                          <div className={dc.emptyStateText}>Пустой дашборд</div>
                          <DSButton variant="primary" size="md" leftIcon={<Plus style={{ width: 16, height: 16 }} />} onClick={() => addChart()}>
                            Добавить график
                          </DSButton>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Panel>

            {/* ── BOTTOM: Data Table (for selected chart) ── */}
            {bottomPanelVisible && (
              <>
                <ResizeHandleV />
                <Panel defaultSize={35} minSize={10} maxSize={60} style={{ background: 'var(--ds-bg-primary)' }}>
                  {singleChart ? (
                    <DataTable
                      state={singleChart.chartState}
                      onChange={(cs) => updateSelectedChartState(cs)}
                      onOpenAddModal={() => setAddModalOpen(true)}
                      onEditSeries={(ds) => { setEditingDS(ds); setAddModalOpen(true); }}
                    />
                  ) : (
                    <div className={dc.bottomEmpty}>
                      Выберите один график
                    </div>
                  )}
                </Panel>
              </>
            )}
          </PanelGroup>
        </Panel>

        <ResizeHandleH />

        {/* ── RIGHT PANEL: Canvas settings + chart templates ── */}
        <Panel defaultSize={24} minSize={14} maxSize={35} className={dc.sidePanel}>
          <DashboardSettingsPanel
            settings={settings}
            charts={charts}
            userTemplates={userTemplates}
            onSettingsChange={s => patch({ settings: s }, 'Настройки дашборда')}
            onApplyTemplate={handleApplyTemplate}
            onUserTemplatesChange={t => patch({ userTemplates: t }, 'Шаблоны')}
            onExportSVG={handleExportDashboardSVG}
            currentChartState={singleChart?.chartState}
          />
        </Panel>
      </PanelGroup>

      {/* Add Series Modal for dashboard chart data editing */}
      {singleChart && (
        <AddSeriesModal
          open={addModalOpen}
          onClose={() => { setAddModalOpen(false); setEditingDS(null); }}
          state={singleChart.chartState}
          onChange={(cs) => updateSelectedChartState(cs)}
          editDataSource={editingDS}
        />
      )}
    </div>
  );
}