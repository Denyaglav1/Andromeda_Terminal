/* ═══════════════════════════════════════════════════════
   Chart Builder — Helper Functions
   ═══════════════════════════════════════════════════════ */

export function fmtNum(n: number): string {
  if (Math.abs(n) >= 1000) return n.toLocaleString('ru-RU', { maximumFractionDigits: 0 });
  if (Math.abs(n) >= 1) return n.toLocaleString('ru-RU', { maximumFractionDigits: 1 });
  return n.toLocaleString('ru-RU', { maximumFractionDigits: 2 });
}

export function parseNum(s: string): number | null {
  if (!s || s.trim() === '' || s === '-' || s === 'н/д') return null;
  const cleaned = s.replace(/[\s\u00a0]/g, '').replace(',', '.');
  const n = Number(cleaned);
  return isNaN(n) ? null : n;
}

export function niceScale(min: number, max: number, tickCount = 5): number[] {
  if (min === max) { min -= 1; max += 1; }
  const range = max - min;
  const rough = range / tickCount;
  const mag = Math.pow(10, Math.floor(Math.log10(rough)));
  let nice = mag;
  if (rough / mag > 5) nice = mag * 10;
  else if (rough / mag > 2) nice = mag * 5;
  else if (rough / mag > 1) nice = mag * 2;
  const nMin = Math.floor(min / nice) * nice;
  const nMax = Math.ceil(max / nice) * nice;
  const ticks: number[] = [];
  for (let v = nMin; v <= nMax + nice * 0.01; v += nice) ticks.push(Math.round(v * 1e6) / 1e6);
  return ticks;
}

export function computeStat(values: number[], mode: 'mean' | 'median' | 'mode'): number | null {
  const valid = values.filter(v => v !== null && !isNaN(v));
  if (valid.length === 0) return null;
  if (mode === 'mean') return valid.reduce((a, b) => a + b, 0) / valid.length;
  if (mode === 'median') {
    const sorted = [...valid].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    return sorted.length % 2 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
  }
  const freq = new Map<number, number>();
  valid.forEach(v => freq.set(v, (freq.get(v) || 0) + 1));
  let maxFreq = 0, modeVal = valid[0];
  freq.forEach((f, v) => { if (f > maxFreq) { maxFreq = f; modeVal = v; } });
  return modeVal;
}

export function tryParseDate(s: string): number | null {
  if (!s || s.trim() === '') return null;
  const t = s.trim();
  if (/^\d{4}-\d{1,2}-\d{1,2}$/.test(t)) { const d = new Date(t); return isNaN(d.getTime()) ? null : d.getTime(); }
  const dmy = t.match(/^(\d{1,2})[./](\d{1,2})[./](\d{4})$/);
  if (dmy) { const d = new Date(+dmy[3], +dmy[2] - 1, +dmy[1]); return isNaN(d.getTime()) ? null : d.getTime(); }
  if (/^\d{4}$/.test(t)) return new Date(+t, 0, 1).getTime();
  const ys = t.match(/^(\d{4})[A-Za-zА-Яа-я]+$/);
  if (ys) return new Date(+ys[1], 0, 1).getTime();
  return null;
}

export function isDateColumn(values: string[]): boolean {
  if (values.length === 0) return false;
  const dateCount = values.filter(v => tryParseDate(v) !== null).length;
  return dateCount / values.length >= 0.6;
}

export function resolveVerticalX(value: string, xLabels: string[]): number | null {
  if (!value || xLabels.length === 0) return null;
  const exactIdx = xLabels.indexOf(value.trim());
  if (exactIdx >= 0) return exactIdx;

  const numVal = parseNum(value);
  const xNums = xLabels.map(l => parseNum(l));
  const validNumPairs = xNums.map((n, i) => n !== null ? { n, i } : null)
    .filter((p): p is { n: number; i: number } => p !== null);

  if (numVal !== null && validNumPairs.length >= 2) {
    validNumPairs.sort((a, b) => a.n - b.n);
    if (numVal <= validNumPairs[0].n) return validNumPairs[0].i;
    if (numVal >= validNumPairs[validNumPairs.length - 1].n) return validNumPairs[validNumPairs.length - 1].i;
    for (let j = 0; j < validNumPairs.length - 1; j++) {
      if (numVal >= validNumPairs[j].n && numVal <= validNumPairs[j + 1].n) {
        const t = (numVal - validNumPairs[j].n) / (validNumPairs[j + 1].n - validNumPairs[j].n || 1);
        return validNumPairs[j].i + t * (validNumPairs[j + 1].i - validNumPairs[j].i);
      }
    }
  }

  const dateVal = tryParseDate(value);
  const xDates = xLabels.map(l => tryParseDate(l));
  const validDatePairs = xDates.map((d, i) => d !== null ? { d, i } : null)
    .filter((p): p is { d: number; i: number } => p !== null);

  if (dateVal !== null && validDatePairs.length >= 2) {
    validDatePairs.sort((a, b) => a.d - b.d);
    if (dateVal <= validDatePairs[0].d) return validDatePairs[0].i;
    if (dateVal >= validDatePairs[validDatePairs.length - 1].d) return validDatePairs[validDatePairs.length - 1].i;
    for (let j = 0; j < validDatePairs.length - 1; j++) {
      if (dateVal >= validDatePairs[j].d && dateVal <= validDatePairs[j + 1].d) {
        const t = (dateVal - validDatePairs[j].d) / (validDatePairs[j + 1].d - validDatePairs[j].d || 1);
        return validDatePairs[j].i + t * (validDatePairs[j + 1].i - validDatePairs[j].i);
      }
    }
  }

  return null;
}

export function estimateTextWidth(text: string, fontSize: number): number {
  return text.length * fontSize * 0.58;
}

/** Snap a value to the nearest grid point */
export function snapToGrid(value: number, gridSize: number, enabled: boolean): number {
  if (!enabled || gridSize <= 0) return value;
  return Math.round(value / gridSize) * gridSize;
}

/* ── Dashboard helpers ── */

import type { DashboardChart } from './types';

/** Check if two rectangles intersect */
export function rectsIntersect(
  a: { x: number; y: number; w: number; h: number },
  b: { x: number; y: number; w: number; h: number },
): boolean {
  return !(a.x > b.x + b.w || a.x + a.w < b.x || a.y > b.y + b.h || a.y + a.h < b.y);
}

/** Compute bounding box of multiple charts */
export function getGroupBounds(charts: DashboardChart[]): { x: number; y: number; w: number; h: number } {
  if (charts.length === 0) return { x: 0, y: 0, w: 0, h: 0 };
  const x = Math.min(...charts.map(c => c.x));
  const y = Math.min(...charts.map(c => c.y));
  const maxR = Math.max(...charts.map(c => c.x + c.w));
  const maxB = Math.max(...charts.map(c => c.y + c.h));
  return { x, y, w: maxR - x, h: maxB - y };
}

/** Distribute charts evenly along an axis */
export function distributeEvenly(charts: DashboardChart[], axis: 'x' | 'y'): DashboardChart[] {
  if (charts.length < 3) return charts;
  const sorted = [...charts].sort((a, b) => axis === 'x' ? a.x - b.x : a.y - b.y);
  const first = sorted[0];
  const last = sorted[sorted.length - 1];
  const totalSize = sorted.reduce((s, c) => s + (axis === 'x' ? c.w : c.h), 0);
  const start = axis === 'x' ? first.x : first.y;
  const end = axis === 'x' ? last.x + last.w : last.y + last.h;
  const totalGap = (end - start) - totalSize;
  const gap = totalGap / (sorted.length - 1);
  let pos = start;
  return sorted.map(c => {
    const newC = { ...c, [axis]: Math.round(pos) };
    pos += (axis === 'x' ? c.w : c.h) + gap;
    return newC;
  });
}

/** Align charts to a specific edge */
export function alignCharts(
  charts: DashboardChart[],
  alignment: 'left' | 'right' | 'top' | 'bottom' | 'center-h' | 'center-v',
): DashboardChart[] {
  if (charts.length < 2) return charts;
  switch (alignment) {
    case 'left': { const v = Math.min(...charts.map(c => c.x)); return charts.map(c => ({ ...c, x: v })); }
    case 'right': { const v = Math.max(...charts.map(c => c.x + c.w)); return charts.map(c => ({ ...c, x: v - c.w })); }
    case 'top': { const v = Math.min(...charts.map(c => c.y)); return charts.map(c => ({ ...c, y: v })); }
    case 'bottom': { const v = Math.max(...charts.map(c => c.y + c.h)); return charts.map(c => ({ ...c, y: v - c.h })); }
    case 'center-h': { const avg = charts.reduce((s, c) => s + c.x + c.w / 2, 0) / charts.length; return charts.map(c => ({ ...c, x: Math.round(avg - c.w / 2) })); }
    case 'center-v': { const avg = charts.reduce((s, c) => s + c.y + c.h / 2, 0) / charts.length; return charts.map(c => ({ ...c, y: Math.round(avg - c.h / 2) })); }
    default: return charts;
  }
}