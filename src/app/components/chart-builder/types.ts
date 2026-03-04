/* ═══════════════════════════════════════════════════════
   Chart Builder — Shared Types
   ═══════════════════════════════════════════════════════ */

export type ChartType = 'line' | 'bar' | 'area' | 'scatter' | 'pie' | 'donut' | 'candlestick'
  | 'bar-h' | 'stacked-bar' | 'stacked-bar-h' | 'area-norm' | 'stacked-bar-norm'
  | 'radar' | 'funnel' | 'waterfall' | 'treemap' | 'heatmap' | 'gauge' | 'combo' | 'sparkline';

export interface Series {
  id: string;
  name: string;
  type: ChartType;
  color: string;
  yAxis: 'y1' | 'y2';
  visible: boolean;
  strokeWidth: number;
  showDataLabels: boolean;
  dataLabelFontSize: number;
  dataLabelColor: string;
  dataLabelStyle: 'plain' | 'badge';
}

/** Frequency of data points */
export type Frequency = 'yearly' | 'half' | 'quarterly' | 'monthly';

export const FREQUENCY_LABELS: Record<Frequency, string> = {
  yearly: 'Годовые',
  half: 'Полугодовые',
  quarterly: 'Квартальные',
  monthly: 'Месячные',
};

/** Logical group of data sources sharing common settings */
export interface DataGroup {
  id: string;
  type: 'stock' | 'commodity' | 'manual';
  label: string;              // user-visible name, e.g. "Годовые показатели"
  instrumentId?: string;      // ticker or commodity id (for stock/commodity)
  frequency: Frequency;
  periodFrom: string;         // e.g. "2019"
  periodTo: string;           // e.g. "2025"
}

/** Tracks where a data series came from */
export interface DataSource {
  id: string;
  groupId?: string;           // links to DataGroup.id (optional for backward compat)
  type: 'stock' | 'commodity' | 'manual';
  label: string;
  instrumentId?: string; // ticker or commodity id
  indicatorId?: string; // for stocks
  frequency: Frequency;
  periodFrom: string; // e.g. "2019"
  periodTo: string;   // e.g. "2025"
  seriesId: string; // links to Series.id
  columnIndex: number; // which column in headers/rows
}

export interface AxisConfig {
  label: string;
  fontSize: number;
  labelFontSize: number;
  min: string;
  max: string;
  showGrid: boolean;
  gridStyle: 'dashed' | 'solid';
}

export interface ReferenceLine {
  id: string;
  direction: 'horizontal' | 'vertical';
  axis: 'y1' | 'y2' | 'x';
  value: string;
  valueMode: 'custom' | 'mean' | 'median' | 'mode';
  label: string;
  labelPosition: 'left' | 'right' | 'top' | 'bottom';
  color: string;
  fontSize: number;
  lineStyle: 'solid' | 'dashed';
}

/** X-axis display mode — controls which tick labels are shown */
export type XDisplayMode = 'auto' | 'years' | 'half' | 'quarters' | 'months';

export const X_DISPLAY_MODE_OPTIONS: { value: XDisplayMode; label: string }[] = [
  { value: 'auto', label: 'Авто' },
  { value: 'years', label: 'Годы' },
  { value: 'half', label: 'Полугодия' },
  { value: 'quarters', label: 'Кварталы' },
  { value: 'months', label: 'Месяцы' },
];

export interface ChartState {
  title: string;
  titleFontSize: number;
  titleAlign: 'left' | 'center' | 'right';
  canvasW: number;
  canvasH: number;
  showBackground: boolean;
  headers: string[];
  rows: string[][];
  xColumnIndex: number;
  series: Series[];
  xAxis: { label: string; fontSize: number; labelFontSize: number; rotation: number; showGrid: boolean; displayMode?: XDisplayMode };
  y1: AxisConfig;
  y2: AxisConfig;
  legendPosition: 'top' | 'bottom' | 'hidden';
  legendFontSize: number;
  referenceLines: ReferenceLine[];
  dataGroups?: DataGroup[];
  dataSources?: DataSource[];
}

/* ── Dashboard types ── */

export interface DashboardChart {
  id: string;
  x: number;
  y: number;
  w: number;
  h: number;
  chartState: ChartState;
  zIndex: number;
  locked: boolean;
  templateId?: string;
}

export interface DashboardSettings {
  canvasW: number;
  canvasH: number;
  paddingX: number;
  paddingY: number;
  gap: number;
  bgColor: string;
  showGrid: boolean;
  gridSize: number;
  snapToGrid: boolean;
  title: string;
  showBorder: boolean;
  columns: number;
}

/* ── Template types ── */

export interface ChartTemplate {
  id: string;
  name: string;
  description: string;
  icon: string;
  /** Partial chart config to apply (without data) */
  config: Partial<Omit<ChartState, 'headers' | 'rows' | 'xColumnIndex'>>;
  builtIn?: boolean;
  createdAt?: number;
  updatedAt?: number;
  tags?: string[];
}

/* ── Dashboard state ── */

export interface DashboardState {
  settings: DashboardSettings;
  charts: DashboardChart[];
  selectedChartIds: string[];
  userTemplates: ChartTemplate[];
}

/** A saved dashboard that can be loaded */
export interface SavedDashboard {
  id: string;
  name: string;
  settings: DashboardSettings;
  charts: DashboardChart[];
  createdAt: number;
  updatedAt: number;
}

/** A dashboard template (layout + chart configs, reusable) */
export interface DashboardTemplate {
  id: string;
  name: string;
  description: string;
  settings: DashboardSettings;
  /** Charts with positions/sizes/configs (data included as sample) */
  charts: DashboardChart[];
  createdAt: number;
}

/* ── DS Token values (inline for SVG export) ── */
export const DS = {
  fontFamily: "'Inter', sans-serif",
  bg: '#131722',
  bgAlt: '#191F2D',
  border: '#2A2E39',
  textPrimary: '#E0E1E2',
  textSecondary: '#C4C7C9',
  textSubtle: '#677C9C',
  gridColor: '#2A2E39',
  palette: [
    '#5A8CFF', '#1FC989', '#F87D37', '#9A8CFF',
    '#45D3CE', '#F6C825', '#ED555E', '#A8B4C6',
    '#B8CEFF', '#75EABE', '#FBB58D', '#C5BDFF',
    '#7AE0DC', '#FAE082', '#F38E94', '#BEC7D5',
  ],
  paletteNames: [
    'Синий', 'Зелёный', 'Оранжевый', 'Фиолетовый',
    'Бирюзовый', 'Жёлтый', 'Красный', 'Серый',
    'Голубой', 'Мятный', 'Персиковый', 'Лавандовый',
    'Аквамарин', 'Песочный', 'Розовый', 'Стальной',
  ],
  green: '#1FC989',
  red: '#EA3943',
};

/* ── Chart type options ── */
export const CHART_TYPE_OPTIONS = [
  { value: 'line', label: 'Линейный' },
  { value: 'bar', label: 'Столбчатый' },
  { value: 'bar-h', label: 'Горизонтальный' },
  { value: 'area', label: 'Область' },
  { value: 'scatter', label: 'Точечный' },
  { value: 'pie', label: 'Круговая' },
  { value: 'donut', label: 'Кольцевая' },
  { value: 'stacked-bar', label: 'Stacked (верт.)' },
  { value: 'stacked-bar-h', label: 'Stacked (гориз.)' },
  { value: 'area-norm', label: 'Область 100%' },
  { value: 'stacked-bar-norm', label: 'Stacked 100%' },
  { value: 'candlestick', label: 'Свечной' },
  { value: 'radar', label: 'Радар' },
  { value: 'funnel', label: 'Воронка' },
  { value: 'waterfall', label: 'Водопад' },
  { value: 'treemap', label: 'Древовидная' },
  { value: 'heatmap', label: 'Тепловая' },
  { value: 'gauge', label: 'Спидометр' },
  { value: 'combo', label: 'Комбо' },
  { value: 'sparkline', label: 'Спарклайн' },
];

export const COLOR_OPTIONS = DS.palette.map((c, i) => ({
  value: c,
  label: DS.paletteNames[i] || `Цвет ${i + 1}`,
}));

export const FONT_SIZE_OPTIONS = [6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 18, 20, 24, 28, 32].map(s => ({
  value: String(s),
  label: `${s}px`,
}));

/* ── Default data ── */
export const DEFAULT_HEADERS = ['Период', 'Выручка', 'EBITDA', 'Чистая прибыль'];
export const DEFAULT_ROWS = [
  ['2019', '8200', '3900', '2100'],
  ['2020', '7500', '3400', '1700'],
  ['2021', '9800', '4800', '2900'],
  ['2022', '11200', '5600', '3400'],
  ['2023', '11500', '6100', '3800'],
  ['2024', '12800', '6800', '4200'],
  ['2025F', '13650', '7400', '4600'],
];

export function createDefaultChartState(): ChartState {
  return {
    title: '',
    titleFontSize: 14,
    titleAlign: 'center',
    canvasW: 800,
    canvasH: 480,
    showBackground: true,
    headers: ['Период'],
    rows: [],
    xColumnIndex: 0,
    series: [],
    xAxis: { label: '', fontSize: 10, labelFontSize: 11, rotation: 0, showGrid: false, displayMode: 'auto' },
    y1: { label: '', fontSize: 10, labelFontSize: 11, min: 'auto', max: 'auto', showGrid: true, gridStyle: 'dashed' },
    y2: { label: '', fontSize: 10, labelFontSize: 11, min: 'auto', max: 'auto', showGrid: false, gridStyle: 'dashed' },
    legendPosition: 'top',
    legendFontSize: 10,
    referenceLines: [],
    dataGroups: [],
    dataSources: [],
  };
}

export function createDefaultDashboardSettings(): DashboardSettings {
  return {
    canvasW: 1600,
    canvasH: 900,
    paddingX: 24,
    paddingY: 24,
    gap: 16,
    bgColor: 'var(--ds-background, #0C0F1A)',
    showGrid: true,
    gridSize: 20,
    snapToGrid: true,
    title: '',
    showBorder: true,
    columns: 2,
  };
}

export function createDefaultDashboardState(): DashboardState {
  return {
    settings: createDefaultDashboardSettings(),
    charts: [],
    selectedChartIds: [],
    userTemplates: [],
  };
}

/** Apply a template to a chart state, preserving data */
export function applyTemplate(chartState: ChartState, template: ChartTemplate): ChartState {
  const config = template.config;
  const newState = { ...chartState };
  if (config.title !== undefined) newState.title = config.title;
  if (config.titleFontSize !== undefined) newState.titleFontSize = config.titleFontSize;
  if (config.titleAlign !== undefined) newState.titleAlign = config.titleAlign;
  if (config.canvasW !== undefined) newState.canvasW = config.canvasW;
  if (config.canvasH !== undefined) newState.canvasH = config.canvasH;
  if (config.showBackground !== undefined) newState.showBackground = config.showBackground;
  if (config.legendPosition !== undefined) newState.legendPosition = config.legendPosition;
  if (config.legendFontSize !== undefined) newState.legendFontSize = config.legendFontSize;
  if (config.y1) newState.y1 = { ...newState.y1, ...config.y1 };
  if (config.y2) newState.y2 = { ...newState.y2, ...config.y2 };
  if (config.xAxis) newState.xAxis = { ...newState.xAxis, ...config.xAxis };
  if (config.referenceLines) newState.referenceLines = config.referenceLines;
  if (config.series) {
    const dataColumns = newState.headers.filter((_, i) => i !== newState.xColumnIndex);
    newState.series = config.series.map((ts, i) => ({
      ...ts,
      id: `s${Date.now()}_${i}`,
      name: dataColumns[i] || ts.name || `Ряд ${i + 1}`,
    }));
    for (let j = config.series.length; j < dataColumns.length; j++) {
      newState.series.push({
        id: `s${Date.now()}_${j}`, name: dataColumns[j], type: 'line',
        color: DS.palette[j % DS.palette.length], yAxis: 'y1', visible: true, strokeWidth: 2,
        showDataLabels: false, dataLabelFontSize: 9, dataLabelColor: '', dataLabelStyle: 'plain',
      });
    }
  }
  return newState;
}

/* ── Dashboard size presets ── */
export const SIZE_PRESETS = [
  { value: '1920x1080', label: 'Full HD (1920 x 1080)' },
  { value: '1600x900', label: 'HD+ (1600 x 900)' },
  { value: '1280x720', label: 'HD (1280 x 720)' },
  { value: '1200x800', label: 'Презентация (1200 x 800)' },
  { value: '800x600', label: 'Компактный (800 x 600)' },
  { value: '1123x794', label: 'A4 ландшафт (1123 x 794)' },
  { value: '794x1123', label: 'A4 портрет (794 x 1123)' },
];