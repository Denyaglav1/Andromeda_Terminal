import React, { useCallback, useRef, useState, useEffect } from 'react';
import { Copy, Trash2 } from 'lucide-react';
import type { DashboardChart, DashboardSettings } from './types';
import { SVGChartRenderer } from './svg-chart-renderer';
import { snapToGrid } from './helpers';
import { CompanyLogo } from './CompanyLogo';
import { COMPANIES } from './market-data';
import cc from './ChartCard.module.css';

/* ═══════════════════════════════════════════════════════
   ChartCard — Draggable + resizable chart on canvas
   - Drag by holding left click anywhere on the card
   - Controls appear only on hover (clean export view)
   - Right-click context menu (duplicate, delete)
   - Selected = blue accent border + glow
   ═══════════════════════════════════════════════════════ */

const MIN_W = 200;
const MIN_H = 150;
const DRAG_THRESHOLD = 3;
const TOOLBAR_H = 32; // px reserved above the chart for floating toolbar

type ResizeDir = 'n' | 's' | 'e' | 'w' | 'ne' | 'nw' | 'se' | 'sw';

interface ChartCardProps {
  chart: DashboardChart;
  selected: boolean;
  multiSelected: boolean;
  settings: DashboardSettings;
  zoom: number;
  onSelect: (e: React.PointerEvent) => void;
  onMove: (x: number, y: number) => void;
  onResize: (x: number, y: number, w: number, h: number) => void;
  onDelete: () => void;
  onDuplicate: () => void;
  onToggleLock: () => void;
}

/* ── Context menu (right-click) ── */
function ContextMenu({ x, y, onDuplicate, onDelete, onClose }: {
  x: number; y: number;
  onDuplicate: () => void; onDelete: () => void; onClose: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    };
    const esc = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('mousedown', handler);
    document.addEventListener('keydown', esc);
    return () => { document.removeEventListener('mousedown', handler); document.removeEventListener('keydown', esc); };
  }, [onClose]);

  return (
    <div ref={ref} className={cc.fixed} style={{ left: x, top: y }}>
      <div className={cc.ctxMenu}>
        <button onClick={() => { onDuplicate(); onClose(); }}
          className={cc.ctxBtn}>
          <Copy className={cc.ctxIcon} />Дублировать
        </button>
        <div className={cc.ctxDivider} />
        <button onClick={() => { onDelete(); onClose(); }}
          className={cc.ctxBtnDanger}>
          <Trash2 style={{ width: 14, height: 14 }} />Удалить
        </button>
      </div>
    </div>
  );
}

export function ChartCard({
  chart, selected, multiSelected, settings, zoom,
  onSelect, onMove, onResize, onDelete, onDuplicate, onToggleLock,
}: ChartCardProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [ctxMenu, setCtxMenu] = useState<{ x: number; y: number } | null>(null);

  const showControls = hovered || selected;
  const dimmed = multiSelected && !selected;

  /* ── Drag (whole card body, left button) ── */
  const handleBodyPointerDown = useCallback((e: React.PointerEvent) => {
    if (e.button !== 0) return;
    if (chart.locked) return;
    if ((e.target as HTMLElement).closest('[data-resize-handle]')) return;

    e.stopPropagation();
    onSelect(e);

    const el = bodyRef.current;
    if (!el) return;
    el.setPointerCapture(e.pointerId);

    const startX = e.clientX, startY = e.clientY;
    const origX = chart.x, origY = chart.y;
    let moved = false;

    const onPointerMove = (me: PointerEvent) => {
      const dx = (me.clientX - startX) / zoom;
      const dy = (me.clientY - startY) / zoom;
      if (!moved && Math.abs(dx) < DRAG_THRESHOLD && Math.abs(dy) < DRAG_THRESHOLD) return;
      moved = true;
      const nx = snapToGrid(origX + dx, settings.gridSize, settings.snapToGrid);
      const ny = snapToGrid(origY + dy, settings.gridSize, settings.snapToGrid);
      onMove(
        Math.max(0, Math.min(nx, settings.canvasW - chart.w)),
        Math.max(0, Math.min(ny, settings.canvasH - chart.h)),
      );
    };
    const onPointerUp = () => {
      el.releasePointerCapture(e.pointerId);
      el.removeEventListener('pointermove', onPointerMove);
      el.removeEventListener('pointerup', onPointerUp);
    };
    el.addEventListener('pointermove', onPointerMove);
    el.addEventListener('pointerup', onPointerUp);
  }, [chart, zoom, settings, onMove, onSelect]);

  /* ── Resize ── */
  const handleResizeStart = useCallback((e: React.PointerEvent, dir: ResizeDir) => {
    if (chart.locked) return;
    e.stopPropagation();
    e.preventDefault();
    const el = e.currentTarget as HTMLElement;
    el.setPointerCapture(e.pointerId);
    const startX = e.clientX, startY = e.clientY;
    const orig = { x: chart.x, y: chart.y, w: chart.w, h: chart.h };

    const onPointerMove = (me: PointerEvent) => {
      let dx = (me.clientX - startX) / zoom;
      let dy = (me.clientY - startY) / zoom;
      let { x, y, w, h } = orig;
      if (dir.includes('e')) w = Math.max(MIN_W, orig.w + dx);
      if (dir.includes('w')) { dx = Math.min(dx, orig.w - MIN_W); x = orig.x + dx; w = orig.w - dx; }
      if (dir.includes('s')) h = Math.max(MIN_H, orig.h + dy);
      if (dir.includes('n')) { dy = Math.min(dy, orig.h - MIN_H); y = orig.y + dy; h = orig.h - dy; }
      x = snapToGrid(Math.max(0, x), settings.gridSize, settings.snapToGrid);
      y = snapToGrid(Math.max(0, y), settings.gridSize, settings.snapToGrid);
      w = snapToGrid(Math.max(MIN_W, w), settings.gridSize, settings.snapToGrid);
      h = snapToGrid(Math.max(MIN_H, h), settings.gridSize, settings.snapToGrid);
      onResize(x, y, w, h);
    };
    const onPointerUp = () => {
      el.removeEventListener('pointermove', onPointerMove);
      el.removeEventListener('pointerup', onPointerUp);
    };
    el.addEventListener('pointermove', onPointerMove);
    el.addEventListener('pointerup', onPointerUp);
  }, [chart, zoom, settings, onResize]);

  /* ── Context menu ── */
  const handleContextMenu = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCtxMenu({ x: e.clientX, y: e.clientY });
  }, []);

  const handles: { dir: ResizeDir; style: React.CSSProperties }[] = [
    { dir: 'nw', style: { top: -4, left: -4, cursor: 'nwse-resize' } },
    { dir: 'n', style: { top: -4, left: '50%', marginLeft: -4, cursor: 'ns-resize' } },
    { dir: 'ne', style: { top: -4, right: -4, cursor: 'nesw-resize' } },
    { dir: 'w', style: { top: '50%', left: -4, marginTop: -4, cursor: 'ew-resize' } },
    { dir: 'e', style: { top: '50%', right: -4, marginTop: -4, cursor: 'ew-resize' } },
    { dir: 'sw', style: { bottom: -4, left: -4, cursor: 'nesw-resize' } },
    { dir: 's', style: { bottom: -4, left: '50%', marginLeft: -4, cursor: 'ns-resize' } },
    { dir: 'se', style: { bottom: -4, right: -4, cursor: 'nwse-resize' } },
  ];

  // Try to detect company from chart title for logo
  const titleCompany = COMPANIES.find(c =>
    chart.chartState.title.includes(c.name) || chart.chartState.title.includes(c.ticker)
  );

  return (
    <>
      {/*
        Hover wrapper — positioned to include the toolbar area above the card.
        This ensures you can move the mouse up to the toolbar without losing hover.
      */}
      <div
        ref={wrapperRef}
        data-chart-card
        className={cc.absolute}
        style={{
          left: chart.x,
          top: chart.y - (showControls ? TOOLBAR_H : 0),
          width: chart.w,
          height: chart.h + (showControls ? TOOLBAR_H : 0),
          zIndex: chart.zIndex,
        }}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
      >
        {/* ── Floating toolbar (above chart, within hover zone) ── */}
        {showControls && (
          <div className={cc.toolbar}>
            {titleCompany && (
              <CompanyLogo ticker={titleCompany.ticker} size={14} className={cc.logoMr} />
            )}
            <span className={cc.toolbarTitle}>
              {chart.chartState.title || 'Без заголовка'}
            </span>
            <button onClick={(e) => { e.stopPropagation(); onDuplicate(); }}
              className={cc.toolbarBtn} title="Дублировать (Ctrl+D)">
              <Copy className={cc.toolbarIcon} />
            </button>
            <button onClick={(e) => { e.stopPropagation(); onDelete(); }}
              className={cc.toolbarBtnDanger} title="Удалить (Del)">
              <Trash2 className={cc.toolbarIcon} />
            </button>
          </div>
        )}

        {/* ── Chart body — drag + resize live here ── */}
        <div
          ref={bodyRef}
          className={cc.relative}
          style={{
            width: chart.w,
            height: chart.h,
            border: selected
              ? '2px solid var(--ds-blue-6, #5A8CFF)'
              : '1px solid var(--ds-border-primary)',
            borderRadius: 6,
            overflow: 'hidden',
            boxShadow: selected ? '0 0 0 3px var(--ds-blue-6-a10)' : undefined,
            opacity: dimmed ? 0.6 : 1,
            background: 'var(--ds-bg-primary)',
            cursor: chart.locked ? 'default' : 'grab',
            transition: 'box-shadow 0.15s, opacity 0.15s, border-color 0.15s',
          }}
          onPointerDown={handleBodyPointerDown}
          onContextMenu={handleContextMenu}
        >
          <SVGChartRenderer
            state={chart.chartState}
            width={chart.w}
            height={chart.h}
            interactive={false}
          />

          {/* Resize handles — positioned relative to chart body */}
          {showControls && !chart.locked && handles.map(({ dir, style }) => (
            <div
              key={dir}
              data-resize-handle
              className={cc.resizeHandle}
              style={style}
              onPointerDown={(e) => handleResizeStart(e, dir)}
            />
          ))}
        </div>
      </div>

      {/* ── Context menu portal ── */}
      {ctxMenu && (
        <ContextMenu
          x={ctxMenu.x} y={ctxMenu.y}
          onDuplicate={onDuplicate}
          onDelete={onDelete}
          onClose={() => setCtxMenu(null)}
        />
      )}
    </>
  );
}