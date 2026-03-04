# SPEC: Image Editor / Редактор изображений

## Overview / Обзор

Canvas-based image editor integrated into the Andromeda dashboard. Provides tools for image manipulation including drawing, text overlays, cropping, transformations, color adjustments, and preset filters. Uses the project's design system (DS components, `--ds-*` tokens).

Редактор изображений на основе Canvas, интегрированный в дашборд Andromeda. Инструменты: рисование, текстовые наложения, обрезка, трансформации, цветокоррекция и пресеты фильтров. Использует дизайн-систему проекта (DS-компоненты, `--ds-*` токены).

## User Flow / Пользовательский путь

1. Navigate to `/image-editor`
2. Upload image via drag & drop or file picker
3. Use left toolbar to select tools (Select, Crop, Draw, Eraser, Text, Shapes)
4. Adjust image parameters in right panel (Brightness, Contrast, Saturation, Hue, Blur)
5. Apply preset filters (Grayscale, Sepia, Vintage, Cold, Warm, etc.)
6. Transform: rotate 90° CW/CCW, flip H/V
7. Undo/Redo with Ctrl+Z / Ctrl+Shift+Z
8. Export as PNG/JPEG/WebP via export modal

## Components / Компоненты

| Component | File | Purpose |
|---|---|---|
| `ImageEditorPage` | `/src/app/components/image-editor/ImageEditorPage.tsx` | Main editor page with all state management |
| `SectionLabel` | (internal) | Section header in right panel |
| `SliderRow` | (internal) | Range slider with label and value display |
| `ToolOptionsSection` | (internal) | Brush/shape tool settings |
| `TextOptionsSection` | (internal) | Text tool settings |

## State Management / Управление состоянием

- All state managed via React hooks in `ImageEditorPage`
- History stack (max 30 entries) with undo/redo via `ImageData` snapshots
- Canvas coordinates calculated with zoom and pan offsets
- Adjustments applied as CSS `filter` string on canvas element, then baked via temp canvas on "Apply"

## Routes / Роуты

| Path | Component | Purpose |
|---|---|---|
| `/image-editor` | `ImageEditorPageWrapper` (lazy) | Image editor page |

## Data / Данные

No external data dependencies. All state is local to the editor session.

## Design Tokens / Дизайн-токены

- `--ds-bg-primary`, `--ds-bg-secondary` — backgrounds
- `--ds-text-primary`, `--ds-text-secondary`, `--ds-text-gray-dark` — text
- `--ds-border-primary` — borders
- `--ds-blue-6` — accent (active tool, active filter, sliders)
- `--ds-red-6`, `--ds-green-6` — brush color palette
- DS components: `DSButton`, `DSTooltip`, `DSSegmentButton`, `DSSegment`, `DSSelect`, `DSInput`

## Edge Cases / Крайние случаи

- Empty state: upload area with drag & drop hint
- Very large images: zoom-to-fit on load
- Crop with zero dimensions: ignored
- History overflow: oldest entries trimmed (max 30)
- Keyboard shortcuts: Ctrl+Z, Ctrl+Shift+Z, Ctrl+S, Ctrl+0, Escape
