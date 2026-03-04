# @andromeda/design-system

Andromeda-style React Design System — components, CSS tokens, ECharts & Mantine themes.

## Quick Start

### 1. Copy components from main project

```bash
cd packages/andromeda-ds
chmod +x scripts/copy-components.sh
./scripts/copy-components.sh
```

This copies all `ds-*.tsx` files, `ds-table.module.css` from the main project into `src/components/`, and patches `ds-badge.tsx` to remove the `source-icons` dependency (text fallback used instead).

> **Note:** `source-icons.tsx`, `ds-source-badge.tsx`, and SVG path data are excluded from this package — they will be moved to a separate icon database.

### 2. Install & Build

```bash
pnpm install
pnpm build
```

Output in `dist/`:
- `index.js` — ESM bundle
- `index.cjs` — CJS bundle
- `index.d.ts` — TypeScript declarations
- `styles.css` — All CSS tokens (dark + light themes)

### 3. Publish

```bash
# Dry run
pnpm pack --dry-run

# Publish to npm
npm publish --access public

# Or to GitHub Packages
npm publish --registry https://npm.pkg.github.com
```

## Usage in Consumer App

```tsx
// 1. Import CSS tokens (once, in entry point)
import '@andromeda/design-system/styles.css';

// 2. Import components
import {
  DSButton, DSInput, DSTable, DSChart,
  andromedaTheme, andromedaCSSResolver,
  registerAndromedaTheme,
} from '@andromeda/design-system';

// 3. Setup providers (App.tsx)
import { MantineProvider } from '@mantine/core';

registerAndromedaTheme(); // ECharts theme — call once

function App() {
  return (
    <MantineProvider
      theme={andromedaTheme}
      cssVariablesResolver={andromedaCSSResolver}
      defaultColorScheme="dark"
    >
      <DSButton variant="primary" size="md">Save</DSButton>
    </MantineProvider>
  );
}
```

## Components

| Component | Description |
|-----------|-------------|
| `DSButton` | Button with 5 variants (primary, secondary, destructive, outline, ghost) × 4 sizes |
| `DSInput` | Input field with validation states, icons, helper text |
| `DSSelect` | Dropdown select with groups, search, portal rendering |
| `DSCheckbox` | Checkbox with indeterminate state |
| `DSSwitch` | Toggle switch (3 sizes) |
| `DSTooltip` | Hover tooltip with rich content |
| `DSModal` | Modal dialog with header, body, footer |
| `DSConfirmDialog` | Centered confirmation dialog |
| `DSTabs` / `DSTab` | Tab navigation |
| `DSMenu` | Dropdown/context menu |
| `DSBadge` | Badge with 6 variants (text, icon, count, dot, pill, source¹) |
| `DSTag` | Tag/chip with close button |
| `DSSegmentButton` | Segmented control |
| `DSCalendar` | Date picker (dates/months/years views) |
| `DSSectionHeader` | Widget section title (uses Mantine) |
| `DSTable` | Data table with sorting, groups, sticky columns, CSS Grid |
| `DSLegend` | Chart legend (inline, wrap, slider modes) |
| `DSSparkline` | SVG mini-chart |
| `DSChartGrid` | SVG chart axes shell |
| `DSChart` | Universal ECharts wrapper (14 chart types) |
| `DSCustomDropdown` | Composable dropdown system |

> ¹ The `source` variant renders a text fallback in this package. Brand SVG icons are managed separately.

## Hooks

| Hook | Description |
|------|-------------|
| `useChartColors()` | Returns canvas-safe hex colors for current theme (dark/light) |

## Theme

| Export | Description |
|--------|-------------|
| `andromedaTheme` | Mantine theme with DS color scales |
| `andromedaCSSResolver` | Mantine CSS variables resolver |
| `andromedaEChartsTheme` | ECharts theme object |
| `registerAndromedaTheme()` | Register ECharts theme globally |

## CSS Tokens

All `--ds-*` CSS variables with dark/light theme support:
- 8 color scales × 10 shades each
- Alpha variants (a10, a20, a30, a50)
- Semantic tokens (bg, text, border, control, button, tag, switch, checkbox, table)
- Light theme via `[data-mantine-color-scheme="light"]`

## DS Palette (data-viz)

```
#5A8CFF  #1FC989  #F87D37  #9A8CFF
#45D3CE  #F6C825  #ED555E  #A8B4C6
```

## Peer Dependencies

| Package | Required for |
|---------|-------------|
| `react` / `react-dom` | All components |
| `@mantine/core` | `DSSectionHeader`, theme |
| `echarts` / `echarts-for-react` | `DSChart`, `DSSparklineChart`, etc. |
| `lucide-react` | `DSModal` close icon |