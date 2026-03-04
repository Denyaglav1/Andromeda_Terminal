# ТЗ: Dashboard Canvas — Мультиграфиковая рабочая область

> **Версия:** 1.1  
> **Дата:** 2026-02-22  
> **Стек:** React 18, TypeScript, Tailwind CSS v4, Recharts 2.15, react-router 7, react-dnd 16, motion 12  
> **Маршрут:** `/chart-builder` (расширение существующей страницы `ChartBuilderPage.tsx`)

---

## 0. Контекст и существующая архитектура

### 0.1. Что уже есть

| Файл | Содержимое |
|---|---|
| `chart-builder/types.ts` | Типы `ChartState`, `Series`, `AxisConfig`, `ReferenceLine`, а также **заготовки**: `DashboardChart` (id, x, y, w, h, chartState), `DashboardSettings` (canvasW/H, padding, gap, bgColor, showGrid, gridSize, snapToGrid), `ChartTemplate` (id, name, description, icon, config, builtIn) |
| `chart-builder/helpers.ts` | Утилиты `fmtNum`, `parseNum`, `niceScale`, `computeStat`, `resolveVerticalX`, `estimateTextWidth`, `isDateColumn`, **`snapToGrid`** |
| `chart-builder/svg-chart-renderer.tsx` | SVG-рендерер одного графика (`SVGChartRenderer`) + `exportSVG` — чистый SVG без Recharts |
| `chart-builder/chart-templates.ts` | 8 built-in шаблонов (`BUILT_IN_TEMPLATES`) |
| `chart-builder/ChartBuilderPage.tsx` | Текущая страница: однографиковый конструктор с `SettingsPanel` (5 табов: График/Ряды/Оси/Отсечки/Стиль), `DataTable`, `SVGChartRenderer` (дублирует `svg-chart-renderer.tsx`) |
| `ui/ds-chart.tsx` | DS-обёртки над Recharts: `DSLineChart`, `DSBarChart`, `DSAreaChart`, `DSPieChart`, `DSDonutChart`, `DSScatterChart`, универсальный `DSChart` |
| `ui/ds-chart-grid.tsx` | Каркас графика с осями/сеткой |
| `ComponentLibrary.tsx` | Каталог DS-компонентов (Chart Grid есть, но **DS Chart компоненты не зарегистрированы**) |
| `docs/ComponentDetailPage.tsx` | Детальная документация DS-компонентов |

### 0.2. Ключевые ограничения / правила

- **Figma Make** — нет `react-router-dom`, только `react-router` (v7, Data mode, `createBrowserRouter`)
- **CSS переменные** в `theme.css` (`[data-theme="light"]` + `:root`); палитра графиков — `DS.palette[]` (hardcoded hex), **не** семантические токены (намеренно)
- **pnpm** как пакетный менеджер
- Пакет `react-dnd` + `react-dnd-html5-backend` уже установлен
- Пакет `motion` уже установлен; импорт: `import { motion } from 'motion/react'`
- `SVGChartRenderer` в `ChartBuilderPage.tsx` — это **дубликат** вынесенного `svg-chart-renderer.tsx`. При рефакторинге убрать дубликат — использовать импорт из `svg-chart-renderer.tsx`
- Аналогично: типы `ChartType`, `Series`, `AxisConfig`, `ChartState` и утилиты (`fmtNum`, `parseNum`, `niceScale` и др.) продублированы в `ChartBuilderPage.tsx` — при рефакторинге импортировать из `types.ts` / `helpers.ts`
- `DS` (цвета/палитра) продублирован в `ChartBuilderPage.tsx` — импортировать из `types.ts`

### 0.3. Файлы, которые правятся вручную между сессиями

Перед любыми правками **обязательно перечитать** их текущее состояние:
- `DashboardPage.tsx`, `FilterBar.tsx`, `Header.tsx`
- `ConsensusDetailModal.tsx`, `ChartModal.tsx`
- `ds-tooltip.tsx`, `ds-table.tsx`
- `ds-chart.tsx`, `types.ts`, `helpers.ts`, `svg-chart-renderer.tsx`, `chart-templates.ts`

---

## 1. Общая архитектура решения

### 1.1. Режимы работы Chart Builder

Текущий `/chart-builder` трансформируется в два режима, переключаемых через `DSSegmentButton` в хедере:

| Режим | Описание |
|---|---|
| **Single Chart** (по умолчанию) | Текущее поведение: один график, панель настроек слева, таблица данных снизу |
| **Dashboard Canvas** | Мультиграфиковая рабочая область: свободное размещение, перетаскивание, масштабирование графиков |

### 1.2. Файловая структура (итоговая)

```
src/app/components/chart-builder/
  types.ts                    # Расширить существующие типы
  helpers.ts                  # Добавить утилиты для дашборда
  svg-chart-renderer.tsx      # Без изменений (уже вынесен)
  chart-templates.ts          # Расширить: добавить user templates CRUD
  ChartBuilderPage.tsx        # Рефакторинг: режим Single + интеграция Dashboard
  DashboardCanvas.tsx          # НОВЫЙ: рабочая область дашборда
  DashboardSettingsPanel.tsx   # НОВЫЙ: панель настроек дашборда
  ChartSettingsPanel.tsx       # НОВЫЙ: панель настроек выбранного графика (выделить из ChartBuilderPage)
  ChartCard.tsx                # НОВЫЙ: обёртка одного графика на канвасе (drag + resize handles)
  TemplateManager.tsx          # НОВЫЙ: менеджер шаблонов (создание, список, применение)

src/app/components/ui/
  ds-chart.tsx                # Расширить: добавить недостающие типы графиков
```

---

## 2. Расширение типов (`types.ts`)

### 2.1. Расширение `ChartType`

Дополнить тип новыми видами графиков:

```typescript
export type ChartType =
  | 'line' | 'bar' | 'area' | 'scatter' | 'pie' | 'donut'
  | 'candlestick' | 'bar-h' | 'stacked-bar' | 'stacked-bar-h'
  | 'area-norm' | 'stacked-bar-norm'
  // Новые:
  | 'radar' | 'funnel' | 'waterfall' | 'treemap'
  | 'heatmap' | 'gauge' | 'combo' | 'sparkline';
```

### 2.2. Расширение `DashboardChart`

```typescript
export interface DashboardChart {
  id: string;
  x: number;          // px от левого края канваса
  y: number;          // px от верхнего края канваса
  w: number;          // ширина в px
  h: number;          // высота в px
  chartState: ChartState;
  zIndex: number;     // порядок наложения
  locked: boolean;    // запрет перемещения/масштабирования
  templateId?: string; // ID применённого шаблона (для визуальной индикации)
}
```

### 2.3. Расширение `DashboardSettings`

```typescript
export interface DashboardSettings {
  canvasW: number;     // ширина рабочей области в px (default: 1600)
  canvasH: number;     // высота рабочей области в px (default: 900)
  paddingX: number;    // горизонтальный отступ от краёв (default: 24)
  paddingY: number;    // вертикальный отступ от краёв (default: 24)
  gap: number;         // минимальный зазор между графиками (default: 16)
  bgColor: string;     // цвет фона (default: 'var(--ds-background, #0C0F1A)')
  showGrid: boolean;   // отображать сетку (default: true)
  gridSize: number;    // шаг сетки в px (default: 20)
  snapToGrid: boolean; // привязка к сетке (default: true)
  title: string;       // заголовок дашборда (default: '')
  showBorder: boolean; // рамка вокруг канваса (default: true)
}
```

### 2.4. Расширение `ChartTemplate`

```typescript
export interface ChartTemplate {
  id: string;
  name: string;
  description: string;
  icon: string;        // emoji или lucide icon name
  config: Partial<Omit<ChartState, 'headers' | 'rows' | 'xColumnIndex'>>;
  builtIn?: boolean;   // true = встроенный, нельзя удалить/редактировать
  createdAt?: number;  // timestamp создания (для пользовательских)
  updatedAt?: number;  // timestamp последнего обновления
  tags?: string[];     // теги для фильтрации
}
```

### 2.5. Полное состояние дашборда

```typescript
export interface DashboardState {
  settings: DashboardSettings;
  charts: DashboardChart[];
  selectedChartId: string | null;
  userTemplates: ChartTemplate[];  // пользовательские шаблоны (localStorage)
}
```

### 2.6. Обновить `CHART_TYPE_OPTIONS`

```typescript
export const CHART_TYPE_OPTIONS = [
  { value: 'line',           label: 'Линейный' },
  { value: 'bar',            label: 'Столбчатый' },
  { value: 'bar-h',          label: 'Горизонтальный' },
  { value: 'area',           label: 'Область' },
  { value: 'scatter',        label: 'Точечный' },
  { value: 'pie',            label: 'Круговая' },
  { value: 'donut',          label: 'Кольцевая' },
  { value: 'stacked-bar',    label: 'Stacked (верт.)' },
  { value: 'stacked-bar-h',  label: 'Stacked (гориз.)' },
  { value: 'area-norm',      label: 'Область 100%' },
  { value: 'stacked-bar-norm', label: 'Stacked 100%' },
  { value: 'candlestick',    label: 'Свечной' },
  { value: 'radar',          label: 'Радар' },
  { value: 'funnel',         label: 'Воронка' },
  { value: 'waterfall',      label: 'Водопад' },
  { value: 'treemap',        label: 'Древовидная' },
  { value: 'heatmap',        label: 'Тепловая' },
  { value: 'gauge',          label: 'Спидометр' },
  { value: 'combo',          label: 'Комбо' },
  { value: 'sparkline',      label: 'Спарклайн' },
];
```

---

## 3. DS Chart Components (`ds-chart.tsx`)

### 3.1. Задача

Добавить все типы графиков как отдельные DS-компоненты на базе Recharts, аналогично существующим `DSLineChart`, `DSBarChart` и т.д. Каждый компонент:

- Принимает `data`, опциональные настройки (showGrid, showLegend, showTooltip, height, className)
- Использует DS_PALETTE и DS_TOKENS (уже определены)
- Использует общий `tooltipStyle` (уже определён)
- Экспортируется по имени + регистрируется в универсальном `DSChart`

### 3.2. Новые компоненты для добавления

#### `DSStackedBarChart`
- Recharts `BarChart` с `stackId` на всех `<Bar>`
- Props: `series: DSChartSeries[]`, `stacked?: boolean` (уже есть в `DSBarChart`, выделить отдельным)
- Вертикальная и горизонтальная ориентация через `layout="vertical"` prop

```typescript
export interface DSStackedBarChartProps extends BaseChartProps {
  series: DSChartSeries[];
  horizontal?: boolean;  // layout="vertical" если true
  normalized?: boolean;  // нормализация до 100%
}
```

#### `DSHorizontalBarChart`
- Recharts `BarChart` с `layout="vertical"`
- Инвертировать XAxis/YAxis

#### `DSRadarChart`
```typescript
export interface DSRadarChartProps {
  data: Record<string, any>[];
  series: DSChartSeries[];
  dataKey?: string;       // ключ для меток осей
  height?: number;
  showGrid?: boolean;
  showLegend?: boolean;
  showTooltip?: boolean;
  fillOpacity?: number;
  className?: string;
}
```
- Recharts: `RadarChart`, `PolarGrid`, `PolarAngleAxis`, `PolarRadiusAxis`, `Radar`

#### `DSFunnelChart`
```typescript
export interface DSFunnelChartProps {
  data: { name: string; value: number; fill?: string }[];
  height?: number;
  showTooltip?: boolean;
  showLabels?: boolean;
  showLegend?: boolean;
  className?: string;
}
```
- Recharts: `FunnelChart`, `Funnel`, `LabelList`

#### `DSWaterfallChart`
```typescript
export interface DSWaterfallChartProps extends BaseChartProps {
  dataKey?: string;
  positiveColor?: string;   // default: DS_PALETTE green
  negativeColor?: string;   // default: DS_PALETTE red
  totalColor?: string;      // default: DS_PALETTE blue
  showLabels?: boolean;
}
```
- Реализовать через `BarChart` с вычисленными `base` значениями (floating bars)
- Каждый бар: `[cumulative_start, cumulative_end]`

#### `DSTreemapChart`
```typescript
export interface DSTreemapChartProps {
  data: { name: string; value: number; children?: any[] }[];
  height?: number;
  colors?: string[];
  showLabels?: boolean;
  showTooltip?: boolean;
  className?: string;
}
```
- Recharts: `Treemap`

#### `DSHeatmapChart`
```typescript
export interface DSHeatmapChartProps {
  data: { x: string; y: string; value: number }[];
  xCategories: string[];
  yCategories: string[];
  height?: number;
  colorRange?: [string, string]; // [min color, max color]
  showTooltip?: boolean;
  showValues?: boolean;
  className?: string;
}
```
- Рендерить через SVG `<rect>` (Recharts не имеет нативного Heatmap)
- Цветовая интерполяция между `colorRange[0]` и `colorRange[1]`

#### `DSGaugeChart`
```typescript
export interface DSGaugeChartProps {
  value: number;           // текущее значение
  min?: number;            // default: 0
  max?: number;            // default: 100
  height?: number;
  color?: string;
  trackColor?: string;     // цвет неактивной дуги
  showValue?: boolean;     // отображать числовое значение в центре
  label?: string;          // подпись под значением
  className?: string;
}
```
- Реализовать через SVG `<path>` (дуга 270 градусов)
- Использовать `PieChart` с двумя секторами (value + remainder) и `startAngle/endAngle`

#### `DSSparklineChart`
```typescript
export interface DSSparklineChartProps {
  data: number[];
  width?: number;          // default: 120
  height?: number;         // default: 32
  color?: string;
  showArea?: boolean;
  showDots?: boolean;
  showMinMax?: boolean;    // точки min/max
  className?: string;
}
```
- Минималистичная линия без осей/сетки/легенды
- Recharts `LineChart` с отключённым всем, кроме `Line`

#### `DSComboChart`
```typescript
export interface DSComboChartProps extends BaseChartProps {
  series: (DSChartSeries & { chartType: 'line' | 'bar' | 'area' })[];
}
```
- `ComposedChart` из Recharts с `Line`, `Bar`, `Area` в одном графике

### 3.3. Обновить универсальный `DSChart`

Расширить `switch` в `DSChart` для всех новых типов:

```typescript
export type DSChartType = 
  | 'line' | 'bar' | 'area' | 'pie' | 'donut' | 'scatter'
  | 'stacked-bar' | 'bar-h' | 'radar' | 'funnel' | 'waterfall'
  | 'treemap' | 'heatmap' | 'gauge' | 'sparkline' | 'combo';
```

### 3.4. Регистрация в дизайн-системе

#### `ComponentLibrary.tsx` — добавить запись:

```typescript
{
  id: 'ds-chart',
  name: 'Chart',
  description: 'Набор из 16 типов графиков на базе Recharts с DS-стилизацией: линейный, столбчатый, area, pie, donut, scatter, stacked, горизонтальный, radar, funnel, waterfall, treemap, heatmap, gauge, sparkline, combo',
  category: 'data-display',
  props: ['type', 'data', 'series', 'xKey', 'height', 'showGrid', 'showLegend', 'showTooltip'],
}
```

#### `docs/ComponentDetailPage.tsx` — добавить detail-рендерер `'ds-chart'`:

- Заголовок: **Chart**
- Описание компонента
- Живые превью всех 16 типов (сгруппировать по категориям: Базовые, Составные, Специальные)
- Таблица пропсов
- Примеры кода
- Для каждого типа — свой демо-блок с mock-данными

---

## 4. Dashboard Canvas (`DashboardCanvas.tsx`)

### 4.1. Компонент рабочей области

```
┌──────────────────────────────────────────────────────┐
│ Toolbar: Zoom (50-200%), Fit, Add Chart, Настройки   │
├──────────────────────────────────────────────────────┤
│                                                      │
│  ┌─────────────┐  gap  ┌─────────────┐              │
│  │  Chart #1    │       │  Chart #2    │              │
│  │  (selected)  │       │              │              │
│  │  [drag here] │       │              │              │
│  │  ◿ resize    │       │              │              │
│  └─────────────┘       └─────────────┘              │
│          padding                                     │
│                    ┌─────────────┐                   │
│                    │  Chart #3    │                   │
│                    │              │                   │
│                    └─────────────┘                   │
│                                                      │
└──────────────────────────────────────────────────────┘
```

### 4.2. Функциональность канваса

#### Масштабирование (Zoom)
- Уровни: 25%, 50%, 75%, 100%, 125%, 150%, 200%
- Ctrl + колёсико мыши
- Кнопки +/- в тулбаре
- Кнопка "Fit" — подогнать под видимую область
- Отображать текущий zoom в тулбаре

#### Навигация
- Перемещение канваса: зажатый Shift + перетаскивание мышью (или средняя кнопка мыши)
- Скроллбары (горизонтальный + вертикальный) при необходимости

#### Сетка
- Отображается если `settings.showGrid === true`
- Шаг = `settings.gridSize` px
- Визуально: точки или тонкие линии цвета `DS.border` с opacity 0.3
- `snapToGrid` — привязка при перетаскивании/масштабировании

#### Выделение графика
- Клик по графику = выделить (синяя рамка `--ds-blue-6`)
- Клик по пустому месту = снять выделение
- При выделении в правой панели появляются настройки этого графика

#### Перемещение графиков (Drag)
- Перетаскивание за область заголовка графика или за любое место, если нет взаимодействия с содержимым
- Использовать `react-dnd` (уже установлен) ИЛИ нативные pointer events (более лёгковесно)
- **Рекомендуется:** нативные pointer events (onPointerDown/Move/Up) — проще и не требует DnD Provider
- При перетаскивании: показать полупрозрачный ghost + направляющие (snap lines) к соседним графикам
- При `snapToGrid` — привязка к ближайшей точке сетки (использовать `snapToGrid()` из `helpers.ts`)
- Не выходить за пределы канваса (ограничить x: [0, canvasW - w], y: [0, canvasH - h])

#### Масштабирование графиков (Resize)
- 8 ручек масштабирования (4 угловых + 4 серединных) — появляются при наведении/выделении
- Визуально: квадратики 6x6 px, цвет `--ds-blue-6`, при ховере — увеличение до 8x8
- Минимальный размер: 200 x 150 px
- При `snapToGrid` — размеры кратны gridSize
- Проп `locked: true` — скрыть ручки, запретить drag

#### Z-Index / Порядок наложения
- Клик по графику поднимает его на верх (`zIndex = max + 1`)
- Контекстное меню (правый клик): "На передний план", "На задний план"

### 4.3. Тулбар канваса

Горизонтальная полоска над рабочей областью:

```
[+ Добавить график ▾] [Zoom: - 100% +] [Fit] [Сетка ▢] [Настройки дашборда ⚙]
```

- **Добавить график**: dropdown с вариантами:
  - "Пустой график" — `createDefaultChartState()` с размером 400x300
  - "Из шаблона..." — открывает `TemplateManager` в режиме выбора
  - "Дублировать выделенный" — если есть выделенный
- **Zoom**: `DSSegmentButton` или кнопки +/-
- **Fit**: подогнать canvasW/canvasH под видимую область
- **Сетка**: `DSCheckbox` (toggle `showGrid`)
- **Настройки**: открывает `DashboardSettingsPanel`

### 4.4. Реализация рендеринга

```tsx
<div className="relative overflow-auto bg-background" 
     style={{ /* container fills available space */ }}>
  <div style={{ 
    width: settings.canvasW * zoom, 
    height: settings.canvasH * zoom,
    transform: `scale(${zoom})`,
    transformOrigin: '0 0',
    background: settings.bgColor,
    padding: `${settings.paddingY}px ${settings.paddingX}px`,
    position: 'relative',
  }}>
    {/* Grid dots/lines */}
    {settings.showGrid && <GridOverlay ... />}
    
    {/* Charts */}
    {charts.map(chart => (
      <ChartCard 
        key={chart.id}
        chart={chart}
        selected={chart.id === selectedChartId}
        onSelect={() => selectChart(chart.id)}
        onMove={(x, y) => moveChart(chart.id, x, y)}
        onResize={(w, h) => resizeChart(chart.id, w, h)}
        zoom={zoom}
      />
    ))}
  </div>
</div>
```

---

## 5. ChartCard (`ChartCard.tsx`)

### 5.1. Структура

```
┌─ drag handle ──────────────────────────────────┐
│ [drag] Chart Title              [⚙] [🔒] [✕]  │  ← Шапка (16-20px)
├────────────────────────────────────────────────┤
│                                                │
│         SVGChartRenderer                       │  ← Контент
│         (width=chart.w, height=chart.h-header) │
│                                                │
├────────────────────────────────────────────────┤
│ ◿                                          ◿  │  ← Resize handles (на selected)
└────────────────────────────────────────────────┘
```

### 5.2. Поведение

- **Шапка**: drag handle + заголовок (из `chartState.title`) + кнопки (настройки, lock, удалить)
- **Контент**: `<SVGChartRenderer>` из `svg-chart-renderer.tsx` (interactive={selected})
- **Рамка**: при selected — `2px solid var(--ds-blue-6)`, иначе — `1px solid var(--ds-edge)`
- **Тень**: при hover — `shadow-lg`
- **Ручки resize**: 8 штук, только при `selected && !locked`
- **Контекстное меню** (правый клик):
  - Дублировать
  - Применить шаблон...
  - Сохранить как шаблон...
  - Блокировать / Разблокировать
  - На передний план
  - На задний план
  - Удалить

### 5.3. Обработка Drag

```typescript
const handlePointerDown = (e: React.PointerEvent) => {
  if (chart.locked) return;
  e.currentTarget.setPointerCapture(e.pointerId);
  const startX = e.clientX, startY = e.clientY;
  const origX = chart.x, origY = chart.y;
  
  const onMove = (me: PointerEvent) => {
    const dx = (me.clientX - startX) / zoom;
    const dy = (me.clientY - startY) / zoom;
    const newX = snapToGrid(origX + dx, settings.gridSize, settings.snapToGrid);
    const newY = snapToGrid(origY + dy, settings.gridSize, settings.snapToGrid);
    onMove(
      Math.max(0, Math.min(newX, settings.canvasW - chart.w)),
      Math.max(0, Math.min(newY, settings.canvasH - chart.h)),
    );
  };
  // ... onPointerUp: removeEventListener
};
```

### 5.4. Обработка Resize

- Аналогичная логика на pointer events
- Каждая ручка определяет какие из [x, y, w, h] меняются:
  - `top-left`: x+dx, y+dy, w-dx, h-dy
  - `top-right`: w+dx, h-dy, y+dy
  - `bottom-right`: w+dx, h+dy
  - ... и т.д.
- Clamp: min 200x150, max canvasW/canvasH

---

## 6. Настройки дашборда (`DashboardSettingsPanel.tsx`)

### 6.1. UI

Выдвижная панель справа (или модалка) с настройками:

```
┌─────────────────────────────────┐
│ Настройки дашборда       [✕]    │
├─────────────────────────────────┤
│ Заголовок: [_______________]    │
│                                 │
│ ─── Размеры ───                 │
│ Ширина:  [1600] px              │
│ Высота:  [900]  px              │
│ Пресеты: [1920x1080 ▾]         │
│                                 │
│ ─── Отступы ───                 │
│ От краёв (X): [24] px           │
│ От краёв (Y): [24] px           │
│ Зазор между:  [16] px           │
│                                 │
│ ─── Сетка ───                   │
│ [✓] Показать сетку              │
│ Размер ячейки: [20] px          │
│ [✓] Привязка к сетке            │
│                                 │
│ ─── Внешний вид ───             │
│ Цвет фона: [picker / preset]   │
│ [✓] Рамка канваса               │
│                                 │
│ ─── Экспорт ───                 │
│ [Экспорт всех графиков SVG]    │
│ [Экспорт дашборда PNG]         │
└─────────────────────────────────┘
```

### 6.2. Пресеты размеров

```typescript
const SIZE_PRESETS = [
  { value: '1920x1080', label: 'Full HD (1920 x 1080)' },
  { value: '1600x900',  label: 'HD+ (1600 x 900)' },
  { value: '1280x720',  label: 'HD (1280 x 720)' },
  { value: '1200x800',  label: 'Презентация (1200 x 800)' },
  { value: '800x600',   label: 'Компактный (800 x 600)' },
  { value: 'a4-l',      label: 'A4 ландшафт (1123 x 794)' },
  { value: 'a4-p',      label: 'A4 портрет (794 x 1123)' },
];
```

---

## 7. Настройки выбранного графика (`ChartSettingsPanel.tsx`)

### 7.1. Архитектура

Выделить существующий `SettingsPanel` из `ChartBuilderPage.tsx` в отдельный компонент. В режиме Dashboard Canvas он появляется в правой панели при выделении графика.

### 7.2. Табы настроек графика

```
[График] [Данные] [Ряды] [Оси] [Отсечки] [Стиль] [Шаблон]
```

| Таб | Содержимое |
|---|---|
| **График** | Заголовок, шрифт заголовка, выравнивание, размер (W x H), фон, легенда |
| **Данные** | Inline-таблица данных (мини-версия DataTable) или кнопка "Редактировать данные" |
| **Ряды** | Список серий, тип/цвет/ось/толщина, data labels, добавить/удалить |
| **Оси** | X axis (подпись, шрифт, ротация, сетка), Y1, Y2 |
| **Отсечки** | Reference lines — горизонтальные/вертикальные, custom/mean/edian/mode |
| **Стиль** | Размер холста, экспорт SVG |
| **Шаблон** | Текущий шаблон, применить другой, сохранить текущий как шаблон |

### 7.3. Таб "Шаблон"

```
┌─────────────────────────────────┐
│ Текущий: Комбо: Bar + Line      │
│                                 │
│ [Применить шаблон...]           │
│ [Сохранить как шаблон...]       │
│ [Сбросить к шаблону]            │
│                                 │
│ ─── Быстрый выбор ───           │
│ 📊 Столбчатый базовый           │
│ 📈 Линейный мульти              │
│ 📉 Область с заливкой           │
│ 🥧 Круговая                     │
│ 🍩 Кольцевая                    │
│ 📊 Комбо: Bar + Line            │
│ 🔵 Точечный                     │
│ 🏷️ Столбцы с подписями          │
│                                 │
│ ─── Пользовательские ───        │
│ ⭐ Мой шаблон 1         [✕]     │
│ ⭐ KPI Dashboard        [✕]     │
└─────────────────────────────────┘
```

---

## 8. Система шаблонов (`TemplateManager.tsx`)

### 8.1. Функциональность

#### Встроенные шаблоны (builtIn: true)
- Нельзя удалять и редактировать
- Список: использовать `BUILT_IN_TEMPLATES` из `chart-templates.ts`
- Расширить набор (добавить шаблоны для новых типов графиков)

#### Пользовательские шаблоны
- **Создание**: из текущего состояния графика (кнопка "Сохранить как шаблон" → модалка с именем/описанием/иконкой)
- **Применение**: выбор шаблона → `applyTemplate(chart, template)`:
  - Мержит `template.config` в `chart.chartState`, **сохраняя данные** (headers, rows, xColumnIndex)
  - Серии из шаблона: переименовывает `s.name` из template в реальные column names
- **Удаление**: кнопка ✕, подтверждение
- **Редактирование**: имя, описание, теги
- **Хранение**: `localStorage` (ключ `chart-builder-user-templates`)

### 8.2. Применение шаблона к графику

```typescript
function applyTemplate(chartState: ChartState, template: ChartTemplate): ChartState {
  const config = template.config;
  const newState = { ...chartState };
  
  // Merge scalar fields
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
  
  // Map series: keep count of data columns, apply template types/colors
  if (config.series) {
    const dataColumns = newState.headers.filter((_, i) => i !== newState.xColumnIndex);
    newState.series = config.series.map((ts, i) => ({
      ...ts,
      id: `s${Date.now()}_${i}`,
      name: dataColumns[i] || ts.name || `Ряд ${i + 1}`,
    }));
    // If fewer template series than data columns, keep extra as default
    if (dataColumns.length > config.series.length) {
      for (let j = config.series.length; j < dataColumns.length; j++) {
        newState.series.push({
          id: `s${Date.now()}_${j}`,
          name: dataColumns[j],
          type: 'line',
          color: DS.palette[j % DS.palette.length],
          yAxis: 'y1', visible: true, strokeWidth: 2,
          showDataLabels: false, dataLabelFontSize: 9,
          dataLabelColor: '', dataLabelStyle: 'plain',
        });
      }
    }
  }
  
  return newState;
}
```

### 8.3. Расширить `chart-templates.ts`

Добавить шаблоны для новых типов:

```typescript
// Radar
{ id: 'tpl-radar', name: 'Радарная диаграмма', icon: '🕸️', ... },
// Funnel
{ id: 'tpl-funnel', name: 'Воронка продаж', icon: '📐', ... },
// Waterfall
{ id: 'tpl-waterfall', name: 'Водопад P&L', icon: '🌊', ... },
// Heatmap
{ id: 'tpl-heatmap', name: 'Тепловая карта', icon: '🔥', ... },
// Gauge
{ id: 'tpl-gauge', name: 'Спидометр KPI', icon: '🎯', ... },
// Sparkline
{ id: 'tpl-sparkline', name: 'Спарклайн', icon: '✨', ... },
// Treemap
{ id: 'tpl-treemap', name: 'Древовидная', icon: '🌳', ... },
```

---

## 9. Рефакторинг `ChartBuilderPage.tsx`

### 9.1. Убрать дубликаты

1. Удалить все дублированные определения типов (ChartType, Series, AxisConfig, ChartState, ReferenceLine) — импортировать из `types.ts`
2. Удалить дублированные утилиты (fmtNum, parseNum, niceScale, computeStat, resolveVerticalX, estimateTextWidth, isDateColumn, tryParseDate) — импортировать из `helpers.ts`
3. Удалить дублированный `DS` — импортировать из `types.ts`
4. Удалить дублированный `SVGChartRenderer` — импортировать из `svg-chart-renderer.tsx`
5. Удалить дублированный `exportSVG` — импортировать из `svg-chart-renderer.tsx`
6. Удалить дублированные `CHART_TYPE_OPTIONS`, `COLOR_OPTIONS`, `FONT_SIZE_OPTIONS` — импортировать из `types.ts`

### 9.2. Выделить компоненты

1. `SettingsPanel` → `ChartSettingsPanel.tsx` (+ добавить таб "Шаблон")
2. `DataTable` → оставить в `ChartBuilderPage.tsx` или вынести в `DataTable.tsx`

### 9.3. Добавить переключатель режимов

```tsx
export function ChartBuilderPage() {
  const [mode, setMode] = useState<'single' | 'dashboard'>('single');
  const [chartState, setChartState] = useState<ChartState>(createDefaultChartState);
  const [dashboardState, setDashboardState] = useState<DashboardState>(createDefaultDashboardState);
  
  return (
    <div className="min-h-screen flex flex-col bg-background text-on-surface">
      <Header />
      
      {/* Mode switcher in toolbar */}
      <div className="flex items-center gap-2 px-4 py-1.5 border-b border-edge bg-surface-alt">
        <Link to="/" className="...">← </Link>
        <span className="text-[12px] font-semibold">Конструктор графиков</span>
        <DSSegmentButton variant="fill" size="xs" value={mode} onChange={v => setMode(v as any)}>
          <DSSegment value="single">Один график</DSSegment>
          <DSSegment value="dashboard">Дашборд</DSSegment>
        </DSSegmentButton>
        {/* ... export button */}
      </div>
      
      {mode === 'single' ? (
        <SingleChartLayout state={chartState} onChange={setChartState} />
      ) : (
        <DashboardLayout state={dashboardState} onChange={setDashboardState} />
      )}
    </div>
  );
}
```

---

## 10. Адаптивность

### 10.1. Канвас дашборда

- Рабочая область канваса **не адаптивна** — размер фиксирован в `settings.canvasW x canvasH`
- **Контейнер** канваса — адаптивный: `overflow-auto`, заполняет доступное пространство
- Zoom автоматически подстраивается при первом рендере (`fit-to-view`)

### 10.2. Панели настроек

- Панели настроек (слева/справа) скрываются при `<1024px` — заменяются на `Sheet` (выдвижная панель) или bottom drawer
- Тулбар канваса: при узком экране иконки без текста

---

## 11. Сохранение состояния

### 11.1. localStorage

| Ключ | Данные |
|---|---|
| `chart-builder-user-templates` | `ChartTemplate[]` — пользовательские шаблоны |
| `chart-builder-dashboard-state` | `DashboardState` — последнее состояние дашборда |
| `chart-builder-single-state` | `ChartState` — последнее состояние одиночного графика |

### 11.2. Автосохранение

- Debounced автосохранение (500ms) при любом изменении состояния
- Восстановление при загрузке страницы
- Кнопка "Сбросить" — очистить сохранённое состояние

---

## 12. Экспорт

### 12.1. Экспорт одного графика

Уже реализован в `exportSVG()` — без изменений.

### 12.2. Экспорт дашборда

- **SVG**: генерировать один большой SVG `canvasW x canvasH`, внутри — embedded SVG для каждого графика с `<g transform="translate(x, y)">`
- **PNG**: использовать `canvas.toBlob()` — рендерить SVG на canvas, скачивать как PNG

---

## 13. Порядок реализации (приоритеты)

### Фаза 1: Рефакторинг + DS Chart Components
1. Рефакторинг `ChartBuilderPage.tsx` — убрать дубликаты, импортировать из модулей
2. Расширить `ds-chart.tsx` — добавить все новые типы графиков
3. Зарегистрировать `ds-chart` в `ComponentLibrary.tsx` и `ComponentDetailPage.tsx`

### Фаза 2: Dashboard Canvas
4. Расширить `types.ts` — `DashboardChart.zIndex/locked`, `DashboardState`
5. Создать `ChartCard.tsx` — обёртка графика с drag + resize
6. Создать `DashboardCanvas.tsx` — рабочая область с сеткой и zoom
7. Создать `DashboardSettingsPanel.tsx`
8. Выделить `ChartSettingsPanel.tsx` из SettingsPanel
9. Интегрировать в `ChartBuilderPage.tsx` — переключатель single/dashboard

### Фаза 3: Шаблоны
10. Расширить `chart-templates.ts` — новые built-in шаблоны
11. Создать `TemplateManager.tsx` — CRUD пользовательских шаблонов
12. Добавить таб "Шаблон" в `ChartSettingsPanel.tsx`
13. localStorage persistence

### Фаза 4: Полировка
14. Адаптивность (responsive panels)
15. Экспорт дашборда (SVG + PNG)
16. Автосохранение состояния
17. Undo/Redo (секция 15)
18. Keyboard shortcuts (секция 16)
19. Групповое выделение и групповые операции (секция 17)

---

## 14. Важные замечания для реализации

1. **Не использовать `react-router-dom`** — только `react-router` (v7)
2. **Импорт Motion**: `import { motion } from 'motion/react'` — для анимаций UI (не для графиков)
3. **`react-dnd`** — уже установлен, но для drag графиков по канвасу рекомендуется **нативные pointer events** (проще, без Provider, лучше контроль)
4. **Файлы правятся вручную** — перед каждой правкой перечитывать (см. секцию 0.3)
5. **Палитра графиков** (`DS.palette`) — хардкод hex, **не** мигрировать в CSS-переменные (намеренно, для SVG-экспорта)
6. **`SVGChartRenderer`** — основной рендерер для Dashboard Canvas (чистый SVG, работает без Recharts)
7. **`DSChart` компоненты** (Recharts) — для DS-каталога и будущего использования в других частях приложения, но **не** для Dashboard Canvas
8. **`ChartBuilderPage.tsx`** содержит **полный дубликат** svg-chart-renderer, типов и утилит — при рефакторинге осторожно проверить, что нет расхождений между дубликатами (в ChartBuilderPage clipId использует `"plot-clip"` hardcoded, а в svg-chart-renderer.tsx — random unique ID; использовать версию из svg-chart-renderer.tsx)

---

## 15. Undo / Redo — Система истории операций

### 15.1. Архитектура

Реализовать как отдельный хук `useUndoRedo<T>`, пригодный как для Single Chart режима, так и для Dashboard Canvas.

#### Тип `UndoableAction`

```typescript
/** Описание операции для отображения в UI */
type ActionLabel =
  | 'Перемещение графика'
  | 'Масштабирование графика'
  | 'Изменение настроек'
  | 'Добавление графика'
  | 'Удаление графика'
  | 'Дублирование графика'
  | 'Применение шаблона'
  | 'Изменение данных'
  | 'Изменение серии'
  | 'Добавление отсечки'
  | 'Удаление отсечки'
  | 'Групповое перемещение'
  | 'Групповое удаление'
  | 'Изменение настроек дашборда'
  | string;

interface HistoryEntry<T> {
  state: T;
  label: ActionLabel;
  timestamp: number;
}
```

#### Хук `useUndoRedo`

```typescript
interface UseUndoRedoOptions {
  maxHistory?: number;      // максимальная глубина истории (default: 50)
  debounceMs?: number;      // debounce для объединения быстрых последовательных изменений (default: 300)
}

interface UseUndoRedoReturn<T> {
  state: T;
  setState: (newState: T, label: ActionLabel) => void;
  undo: () => void;
  redo: () => void;
  canUndo: boolean;
  canRedo: boolean;
  undoLabel: string | null;    // "Отменить: Перемещение графика"
  redoLabel: string | null;    // "Повторить: Удаление графика"
  historyLength: number;
  clear: () => void;           // очистить историю
}

function useUndoRedo<T>(initialState: T, options?: UseUndoRedoOptions): UseUndoRedoReturn<T>
```

### 15.2. Реализация

```typescript
function useUndoRedo<T>(initialState: T, options: UseUndoRedoOptions = {}): UseUndoRedoReturn<T> {
  const { maxHistory = 50, debounceMs = 300 } = options;
  
  const [past, setPast] = useState<HistoryEntry<T>[]>([]);
  const [present, setPresent] = useState<HistoryEntry<T>>({
    state: initialState,
    label: 'Начальное состояние',
    timestamp: Date.now(),
  });
  const [future, setFuture] = useState<HistoryEntry<T>[]>([]);
  const lastActionTime = useRef(0);
  const lastLabel = useRef('');
  
  const setState = useCallback((newState: T, label: ActionLabel) => {
    const now = Date.now();
    
    // Debounce: если та же операция в пределах debounceMs — заменяем present вместо push
    if (now - lastActionTime.current < debounceMs && label === lastLabel.current) {
      setPresent({ state: newState, label, timestamp: now });
    } else {
      setPast(prev => {
        const newPast = [...prev, present];
        // Ограничить глубину
        return newPast.length > maxHistory ? newPast.slice(-maxHistory) : newPast;
      });
      setPresent({ state: newState, label, timestamp: now });
      setFuture([]); // очистить redo-стек
    }
    
    lastActionTime.current = now;
    lastLabel.current = label;
  }, [present, maxHistory, debounceMs]);
  
  const undo = useCallback(() => {
    if (past.length === 0) return;
    const prev = past[past.length - 1];
    setPast(p => p.slice(0, -1));
    setFuture(f => [present, ...f]);
    setPresent(prev);
  }, [past, present]);
  
  const redo = useCallback(() => {
    if (future.length === 0) return;
    const next = future[0];
    setFuture(f => f.slice(1));
    setPast(p => [...p, present]);
    setPresent(next);
  }, [future, present]);
  
  return {
    state: present.state,
    setState,
    undo,
    redo,
    canUndo: past.length > 0,
    canRedo: future.length > 0,
    undoLabel: past.length > 0 ? past[past.length - 1].label : null,
    redoLabel: future.length > 0 ? future[0].label : null,
    historyLength: past.length,
    clear: () => { setPast([]); setFuture([]); },
  };
}
```

### 15.3. Интеграция

#### В `ChartBuilderPage.tsx`:

```typescript
// Single Chart mode
const {
  state: chartState,
  setState: setChartState,
  undo, redo, canUndo, canRedo, undoLabel, redoLabel,
} = useUndoRedo<ChartState>(createDefaultChartState(), { maxHistory: 50 });

// Dashboard mode
const {
  state: dashState,
  setState: setDashState,
  undo: dashUndo, redo: dashRedo, ...
} = useUndoRedo<DashboardState>(createDefaultDashboardState(), { maxHistory: 50 });
```

#### Debounce-стратегия по типам операций:

| Операция | Debounce | Обоснование |
|---|---|---|
| Drag (перемещение) | 300ms | Много промежуточных позиций, нужна только финальная |
| Resize | 300ms | Аналогично |
| Nudge (стрелки) | 500ms | Серия нажатий = одна операция |
| Изменение input | 500ms | Набор текста = одна операция |
| Добавление/удаление | 0ms (немедленно) | Атомарная операция |
| Применение шаблона | 0ms | Атомарная операция |

### 15.4. UI в тулбаре

```
[↩ Undo] [↪ Redo]     — кнопки в тулбаре канваса / хедере single-режима
```

- Кнопки `DSButton variant="ghost" size="sm"` с иконками `Undo2` / `Redo2` из lucide-react
- Disabled если `!canUndo` / `!canRedo`
- Тултип: `undoLabel` / `redoLabel` (например "Отменить: Перемещение графика")
- Между кнопками разделитель `|`

---

## 16. Keyboard Shortcuts — Горячие клавиши

### 16.1. Общий подход

- Реализовать через единый `useEffect` с `keydown` listener на `document`
- Модификаторы: `e.ctrlKey` (или `e.metaKey` для macOS), `e.shiftKey`, `e.altKey`
- **Не перехватывать** если фокус в `<input>`, `<textarea>`, `[contenteditable]` — проверять `e.target`
- Предотвращать стандартное поведение браузера (`e.preventDefault()`) только для используемых комбинаций

### 16.2. Таблица шорткатов

#### Общие (оба режима)

| Комбинация | Действие | Условие |
|---|---|---|
| `Ctrl+Z` | Undo | `canUndo` |
| `Ctrl+Shift+Z` / `Ctrl+Y` | Redo | `canRedo` |
| `Ctrl+S` | Сохранить (force persist to localStorage) | Всегда |
| `Ctrl+E` | Экспорт SVG | Всегда |

#### Dashboard Canvas

| Комбинация | Действие | Условие |
|---|---|---|
| `Delete` / `Backspace` | Удалить выделенные графики | Есть выделение |
| `Ctrl+D` | Дублировать выделенные (offset +20px, +20px) | Есть выделение |
| `Ctrl+A` | Выделить все графики | Всегда |
| `Escape` | Снять выделение | Есть выделение |
| `Ctrl+L` | Lock/Unlock выделенных | Есть выделение |
| `Arrow Up` | Nudge вверх на 1px (или `gridSize` при `snapToGrid`) | Есть выделение, не locked |
| `Arrow Down` | Nudge вниз | — |
| `Arrow Left` | Nudge влево | — |
| `Arrow Right` | Nudge вправо | — |
| `Shift+Arrow *` | Nudge на 10px (или `gridSize * 5`) | Есть выделение, не locked |
| `Ctrl+]` / `Ctrl+Shift+]` | На передний план (один шаг / в самый верх) | Есть выделение |
| `Ctrl+[` / `Ctrl+Shift+[` | На задний план (один шаг / в самый низ) | Есть выделение |
| `Ctrl+0` | Zoom 100% | Всегда |
| `Ctrl+=` / `Ctrl++` | Zoom In | Zoom < 200% |
| `Ctrl+-` | Zoom Out | Zoom > 25% |
| `Ctrl+Shift+F` | Fit to view | Всегда |
| `Ctrl+G` | Toggle grid visibility | Всегда |
| `Ctrl+N` | Добавить пустой график | Всегда |

#### Single Chart

| Комбинация | Действие |
|---|---|
| `Ctrl+Z` | Undo |
| `Ctrl+Shift+Z` | Redo |
| `Ctrl+E` | Экспорт SVG |

### 16.3. Реализация хука

```typescript
function useKeyboardShortcuts(
  mode: 'single' | 'dashboard',
  actions: {
    undo?: () => void;
    redo?: () => void;
    canUndo?: boolean;
    canRedo?: boolean;
    deleteSelected?: () => void;
    duplicateSelected?: () => void;
    selectAll?: () => void;
    clearSelection?: () => void;
    toggleLock?: () => void;
    nudge?: (dx: number, dy: number) => void;
    bringForward?: () => void;
    bringToFront?: () => void;
    sendBackward?: () => void;
    sendToBack?: () => void;
    zoomIn?: () => void;
    zoomOut?: () => void;
    zoomReset?: () => void;
    fitToView?: () => void;
    toggleGrid?: () => void;
    addChart?: () => void;
    exportSVG?: () => void;
    save?: () => void;
    hasSelection?: boolean;
    snapToGrid?: boolean;
    gridSize?: number;
  },
) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      // Ignore if focus is in an input
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || (e.target as HTMLElement)?.isContentEditable) return;

      const ctrl = e.ctrlKey || e.metaKey;
      const shift = e.shiftKey;
      const key = e.key.toLowerCase();

      // --- Undo / Redo ---
      if (ctrl && !shift && key === 'z' && actions.canUndo) {
        e.preventDefault(); actions.undo?.(); return;
      }
      if ((ctrl && shift && key === 'z') || (ctrl && key === 'y')) {
        if (actions.canRedo) { e.preventDefault(); actions.redo?.(); }
        return;
      }

      // --- Dashboard-specific ---
      if (mode === 'dashboard') {
        if ((key === 'delete' || key === 'backspace') && actions.hasSelection) {
          e.preventDefault(); actions.deleteSelected?.(); return;
        }
        if (ctrl && key === 'd' && actions.hasSelection) {
          e.preventDefault(); actions.duplicateSelected?.(); return;
        }
        if (ctrl && key === 'a') {
          e.preventDefault(); actions.selectAll?.(); return;
        }
        if (key === 'escape' && actions.hasSelection) {
          actions.clearSelection?.(); return;
        }
        // Nudge
        const nudgeStep = shift
          ? (actions.snapToGrid ? (actions.gridSize || 20) * 5 : 10)
          : (actions.snapToGrid ? (actions.gridSize || 20) : 1);
        if (key === 'arrowup' && actions.hasSelection) {
          e.preventDefault(); actions.nudge?.(0, -nudgeStep); return;
        }
        if (key === 'arrowdown' && actions.hasSelection) {
          e.preventDefault(); actions.nudge?.(0, nudgeStep); return;
        }
        if (key === 'arrowleft' && actions.hasSelection) {
          e.preventDefault(); actions.nudge?.(-nudgeStep, 0); return;
        }
        if (key === 'arrowright' && actions.hasSelection) {
          e.preventDefault(); actions.nudge?.(nudgeStep, 0); return;
        }
        // Z-order
        if (ctrl && key === ']') {
          e.preventDefault();
          shift ? actions.bringToFront?.() : actions.bringForward?.();
          return;
        }
        if (ctrl && key === '[') {
          e.preventDefault();
          shift ? actions.sendToBack?.() : actions.sendBackward?.();
          return;
        }
        // Zoom
        if (ctrl && key === '0') { e.preventDefault(); actions.zoomReset?.(); return; }
        if (ctrl && (key === '=' || key === '+')) { e.preventDefault(); actions.zoomIn?.(); return; }
        if (ctrl && key === '-') { e.preventDefault(); actions.zoomOut?.(); return; }
        if (ctrl && shift && key === 'f') { e.preventDefault(); actions.fitToView?.(); return; }
        // Grid
        if (ctrl && key === 'g') { e.preventDefault(); actions.toggleGrid?.(); return; }
        // Lock
        if (ctrl && key === 'l' && actions.hasSelection) {
          e.preventDefault(); actions.toggleLock?.(); return;
        }
        // Add chart
        if (ctrl && key === 'n') { e.preventDefault(); actions.addChart?.(); return; }
      }

      // --- Shared ---
      if (ctrl && key === 'e') { e.preventDefault(); actions.exportSVG?.(); return; }
      if (ctrl && key === 's') { e.preventDefault(); actions.save?.(); return; }
    };

    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [mode, actions]);
}
```

### 16.4. Отображение шорткатов в UI

- **Тултипы кнопок**: включить shortcut hint (например, кнопка "Удалить" -> tooltip "Удалить (Del)")
- **Контекстное меню**: справа от каждого пункта показать shortcut серым текстом
- **Модалка "Горячие клавиши"** (`?` или `Ctrl+/`): полная таблица шорткатов, сгруппированная по категориям

```
+------------------------------------------+
| Горячие клавиши                   [x]    |
|------------------------------------------|
| --- Правка ---                           |
| Ctrl+Z           Отменить                |
| Ctrl+Shift+Z     Повторить               |
| Delete            Удалить выделенное      |
| Ctrl+D            Дублировать             |
| Ctrl+A            Выделить все            |
| Escape            Снять выделение         |
|                                          |
| --- Навигация ---                        |
| Up/Down/Left/Right   Nudge (1px / grid)  |
| Shift+Arrows      Nudge (10px / grid*5)  |
| Ctrl+0            Zoom 100%              |
| Ctrl + / -        Zoom In / Out          |
| Ctrl+Shift+F      Fit to view            |
|                                          |
| --- Порядок ---                          |
| Ctrl+]            На шаг вперёд          |
| Ctrl+Shift+]      На передний план       |
| Ctrl+[            На шаг назад           |
| Ctrl+Shift+[      На задний план         |
|                                          |
| --- Остальное ---                        |
| Ctrl+G            Toggle сетки           |
| Ctrl+L            Lock / Unlock          |
| Ctrl+N            Новый график           |
| Ctrl+E            Экспорт SVG            |
| Ctrl+S            Сохранить              |
+------------------------------------------+
```

---

## 17. Групповое выделение и групповые операции

### 17.1. Механизмы выделения

#### Клик-выделение
- **Клик** по графику: выделить только его (снять выделение с остальных)
- **Shift+клик**: добавить/убрать график из выделения (toggle)
- **Ctrl+клик**: аналогично Shift+клик (для привычного поведения Windows)
- **Клик по пустому месту**: снять выделение со всех
- **Ctrl+A**: выделить все графики

#### Marquee selection (рамка выделения)
- **Клик + drag по пустому месту канваса** (без Shift) -> прямоугольная рамка выделения
- Рамка: полупрозрачная заливка `rgba(90, 140, 255, 0.1)` + пунктирная обводка `var(--ds-blue-6)`
- При отпускании кнопки: выделить все графики, которые **пересекаются** с рамкой (не только полностью внутри)
- **Shift + drag по пустому месту**: добавить к текущему выделению (не сбрасывать существующее)

### 17.2. Визуальная индикация

```
+- - - - - - - - - - - - - - - - - - - - - +
|                                            |
|  +===============+   +===============+    |  <- Синяя рамка у каждого
|  |  Chart #1  v  |   |  Chart #2  v  |    |     выделенного графика
|  |               |   |               |    |
|  +===============+   +===============+    |
|                                            |
|  +---------------+                        |  <- Невыделённый — обычная рамка
|  |  Chart #3      |                        |
|  +---------------+                        |
|                                            |
|- - - - - - - - - - - - - - - - - - - - - -|
|  Выбрано: 2 графика  [Выровнять v] [Lock] |  <- Мульти-селекшн тулбар
+--------------------------------------------+
```

- **Выделенные**: рамка `2px solid var(--ds-blue-6)`, лёгкое свечение (box-shadow `0 0 0 2px rgba(90,140,255,0.2)`)
- **Невыделённые**: обычная рамка `1px solid var(--ds-edge)`, слегка затемнены (opacity 0.7) когда есть мульти-выделение
- **Resize handles**: отображаются **только** при выделении **одного** графика; при мульти-выделении — скрыты

### 17.3. Расширение стейта

```typescript
export interface DashboardState {
  settings: DashboardSettings;
  charts: DashboardChart[];
  selectedChartIds: Set<string>;   // ИЗМЕНЕНИЕ: Set вместо одного ID
  userTemplates: ChartTemplate[];
}

// Вспомогательные геттеры:
const selectedCharts = charts.filter(c => selectedChartIds.has(c.id));
const isSingleSelection = selectedChartIds.size === 1;
const isMultiSelection = selectedChartIds.size > 1;
const singleSelectedChart = isSingleSelection 
  ? charts.find(c => selectedChartIds.has(c.id)) 
  : null;
```

> **Примечание:** В секции 2.5 `DashboardState` описан с `selectedChartId: string | null` — при реализации заменить на `selectedChartIds: Set<string>` (или `string[]` для JSON-сериализации в localStorage, с runtime-конвертацией в Set).

### 17.4. Групповые операции

#### Групповое перемещение (Drag)
- При перетаскивании одного графика из группы — перемещаются **все** выделенные
- Сохраняются относительные позиции между графиками
- Boundary check: ни один из группы не должен выйти за canvas

```typescript
function moveGroup(
  chartIds: string[], dx: number, dy: number, state: DashboardState
): DashboardChart[] {
  const selected = state.charts.filter(c => chartIds.includes(c.id));
  
  // Вычислить bounding box группы
  const minX = Math.min(...selected.map(c => c.x));
  const minY = Math.min(...selected.map(c => c.y));
  const maxR = Math.max(...selected.map(c => c.x + c.w));
  const maxB = Math.max(...selected.map(c => c.y + c.h));
  
  // Ограничить delta чтобы группа не выходила за canvas
  const clampedDx = Math.max(-minX, Math.min(dx, state.settings.canvasW - maxR));
  const clampedDy = Math.max(-minY, Math.min(dy, state.settings.canvasH - maxB));
  
  // Snap (по первому графику группы)
  const snappedDx = snapToGrid(clampedDx, state.settings.gridSize, state.settings.snapToGrid);
  const snappedDy = snapToGrid(clampedDy, state.settings.gridSize, state.settings.snapToGrid);
  
  return state.charts.map(c => 
    chartIds.includes(c.id) && !c.locked
      ? { ...c, x: c.x + snappedDx, y: c.y + snappedDy }
      : c
  );
}
```

#### Групповое удаление
- `Delete` / `Backspace` — удалить все выделенные (с подтверждением если > 1)
- Undo-label: "Групповое удаление (N графиков)"

#### Групповое дублирование
- `Ctrl+D` — дублировать все выделенные
- Новые графики смещены на `(+20, +20)` от оригиналов
- Новые графики становятся новым выделением
- Undo-label: "Групповое дублирование"

#### Групповая блокировка
- `Ctrl+L` — toggle lock на всех выделенных
- Логика: если хоть один НЕ locked -> lock all; если все locked -> unlock all

#### Групповое выравнивание
При мульти-выделении в тулбаре / контекстном меню появляется меню **"Выровнять"**:

| Опция | Действие |
|---|---|
| Выровнять по левому краю | `x = min(selected.x)` для всех |
| Выровнять по правому краю | `x + w = max(selected.x + selected.w)` для всех |
| Выровнять по верхнему краю | `y = min(selected.y)` для всех |
| Выровнять по нижнему краю | `y + h = max(selected.y + selected.h)` для всех |
| Выровнять по центру (гориз.) | `x + w/2 = avg(selected.centerX)` для всех |
| Выровнять по центру (верт.) | `y + h/2 = avg(selected.centerY)` для всех |
| Распределить по горизонтали | Равные промежутки между графиками по X |
| Распределить по вертикали | Равные промежутки между графиками по Y |
| Сделать одинаковой ширины | `w = avg(selected.w)` или `w = first.w` |
| Сделать одинаковой высоты | `h = avg(selected.h)` или `h = first.h` |
| Сделать одного размера | `w, h = avg(selected.w), avg(selected.h)` |

#### Групповое применение шаблона
- "Применить шаблон ко всем выделенным" — один шаблон -> batch apply
- Каждый график получает template config, но **сохраняет свои данные**

### 17.5. Multi-selection toolbar

При выделении нескольких графиков внизу канваса (или поверх) появляется floating тулбар:

```
+------------------------------------------------------------+
|  Выбрано: 3 графика  | [Выровнять v] [Lock] [Дубл.] [Удал.] |
+------------------------------------------------------------+
```

- Анимация появления: slide-up + fade-in (Motion)
- Позиционирование: fixed, снизу канваса по центру, `z-50`
- Фон: `bg-surface border border-edge rounded-xl shadow-2xl px-4 py-2`

### 17.6. Правая панель при мульти-выделении

Если выделено > 1 графика, правая панель показывает:

```
+-------------------------------------+
| 3 графика выбрано                    |
|-------------------------------------|
| --- Массовые операции ---            |
| [Применить шаблон ко всем...]        |
|                                     |
| --- Выравнивание ---                 |
| [<-] [<->] [->]  [^] [^v] [v]      |
| [Распределить по X]                  |
| [Распределить по Y]                  |
|                                     |
| --- Размер ---                       |
| [Одинаковая ширина]                  |
| [Одинаковая высота]                  |
| [Одинаковый размер]                  |
|                                     |
| --- Z-порядок ---                    |
| [Все на передний план]               |
| [Все на задний план]                 |
|                                     |
| --- Действия ---                     |
| [Lock  Заблокировать все]            |
| [Copy  Дублировать все]              |
| [Del   Удалить все]                  |
+-------------------------------------+
```

### 17.7. Реализация Marquee Selection

```typescript
function MarqueeOverlay({ 
  canvasRef, zoom, onSelect,
}: { 
  canvasRef: React.RefObject<HTMLDivElement>;
  zoom: number;
  onSelect: (rect: { x: number; y: number; w: number; h: number }, additive: boolean) => void;
}) {
  const [marquee, setMarquee] = useState<{ 
    startX: number; startY: number; 
    endX: number; endY: number;
  } | null>(null);
  const dragging = useRef(false);
  
  const handlePointerDown = (e: React.PointerEvent) => {
    // Только если клик по пустому месту канваса (не по графику)
    if ((e.target as HTMLElement).closest('[data-chart-card]')) return;
    
    const rect = canvasRef.current!.getBoundingClientRect();
    const x = (e.clientX - rect.left) / zoom;
    const y = (e.clientY - rect.top) / zoom;
    
    dragging.current = true;
    setMarquee({ startX: x, startY: y, endX: x, endY: y });
    e.currentTarget.setPointerCapture(e.pointerId);
  };
  
  const handlePointerMove = (e: React.PointerEvent) => {
    if (!dragging.current || !marquee) return;
    const rect = canvasRef.current!.getBoundingClientRect();
    setMarquee(prev => prev ? {
      ...prev,
      endX: (e.clientX - rect.left) / zoom,
      endY: (e.clientY - rect.top) / zoom,
    } : null);
  };
  
  const handlePointerUp = (e: React.PointerEvent) => {
    if (!dragging.current || !marquee) return;
    dragging.current = false;
    
    const x = Math.min(marquee.startX, marquee.endX);
    const y = Math.min(marquee.startY, marquee.endY);
    const w = Math.abs(marquee.endX - marquee.startX);
    const h = Math.abs(marquee.endY - marquee.startY);
    
    if (w > 5 || h > 5) { // Минимальный порог чтобы отличить от клика
      onSelect({ x, y, w, h }, e.shiftKey);
    }
    
    setMarquee(null);
  };
  
  // Определить какие графики пересекаются с marquee rect:
  // intersects = !(chart.x > rect.x + rect.w || chart.x + chart.w < rect.x ||
  //                chart.y > rect.y + rect.h || chart.y + chart.h < rect.y)
  
  return (
    <div 
      className="absolute inset-0 z-40"
      style={{ cursor: 'crosshair' }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
    >
      {marquee && (() => {
        const x = Math.min(marquee.startX, marquee.endX);
        const y = Math.min(marquee.startY, marquee.endY);
        const w = Math.abs(marquee.endX - marquee.startX);
        const h = Math.abs(marquee.endY - marquee.startY);
        return (
          <div 
            className="absolute border-2 border-dashed pointer-events-none"
            style={{
              left: x * zoom, top: y * zoom,
              width: w * zoom, height: h * zoom,
              borderColor: 'var(--ds-blue-6)',
              backgroundColor: 'rgba(90, 140, 255, 0.08)',
            }}
          />
        );
      })()}
    </div>
  );
}
```

### 17.8. Вспомогательные утилиты (`helpers.ts`)

```typescript
/** Check if two rectangles intersect */
export function rectsIntersect(
  a: { x: number; y: number; w: number; h: number },
  b: { x: number; y: number; w: number; h: number },
): boolean {
  return !(a.x > b.x + b.w || a.x + a.w < b.x || a.y > b.y + b.h || a.y + a.h < b.y);
}

/** Compute bounding box of multiple charts */
export function getGroupBounds(
  charts: DashboardChart[]
): { x: number; y: number; w: number; h: number } {
  if (charts.length === 0) return { x: 0, y: 0, w: 0, h: 0 };
  const x = Math.min(...charts.map(c => c.x));
  const y = Math.min(...charts.map(c => c.y));
  const maxR = Math.max(...charts.map(c => c.x + c.w));
  const maxB = Math.max(...charts.map(c => c.y + c.h));
  return { x, y, w: maxR - x, h: maxB - y };
}

/** Distribute charts evenly along an axis */
export function distributeEvenly(
  charts: DashboardChart[],
  axis: 'x' | 'y',
  canvasSize: number,
): DashboardChart[] {
  if (charts.length < 3) return charts;
  const sorted = [...charts].sort((a, b) => 
    axis === 'x' ? a.x - b.x : a.y - b.y
  );
  const first = sorted[0];
  const last = sorted[sorted.length - 1];
  const totalSize = axis === 'x'
    ? sorted.reduce((s, c) => s + c.w, 0)
    : sorted.reduce((s, c) => s + c.h, 0);
  const start = axis === 'x' ? first.x : first.y;
  const end = axis === 'x' ? last.x + last.w : last.y + last.h;
  const totalGap = (end - start) - totalSize;
  const gap = totalGap / (sorted.length - 1);
  
  let pos = start;
  return sorted.map(c => {
    const newC = { ...c, [axis]: pos };
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
    case 'left': {
      const minX = Math.min(...charts.map(c => c.x));
      return charts.map(c => ({ ...c, x: minX }));
    }
    case 'right': {
      const maxR = Math.max(...charts.map(c => c.x + c.w));
      return charts.map(c => ({ ...c, x: maxR - c.w }));
    }
    case 'top': {
      const minY = Math.min(...charts.map(c => c.y));
      return charts.map(c => ({ ...c, y: minY }));
    }
    case 'bottom': {
      const maxB = Math.max(...charts.map(c => c.y + c.h));
      return charts.map(c => ({ ...c, y: maxB - c.h }));
    }
    case 'center-h': {
      const avgCx = charts.reduce((s, c) => s + c.x + c.w / 2, 0) / charts.length;
      return charts.map(c => ({ ...c, x: avgCx - c.w / 2 }));
    }
    case 'center-v': {
      const avgCy = charts.reduce((s, c) => s + c.y + c.h / 2, 0) / charts.length;
      return charts.map(c => ({ ...c, y: avgCy - c.h / 2 }));
    }
    default: return charts;
  }
}
```