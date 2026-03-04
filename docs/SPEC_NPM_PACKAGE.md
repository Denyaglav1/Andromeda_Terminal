# SPEC: @andromeda/design-system NPM Package

## Overview

Отдельный npm-пакет для публикации дизайн-системы Andromeda. Содержит все DS-компоненты (`ds-*.tsx`), CSS-токены, Mantine-тему, ECharts-тему и хуки.

## Package Structure

```
/packages/andromeda-ds/
├── package.json            # npm package config, peer deps, exports
├── vite.config.ts          # Vite Library Mode (ESM + CJS)
├── tsconfig.json           # TypeScript config
├── README.md               # Documentation & usage guide
├── scripts/
│   └── copy-components.sh  # Script to copy components from main project
├── src/
│   ├── index.ts            # Barrel export (~22 component groups, hooks, themes)
│   ├── tokens.css          # All --ds-* CSS variables (dark + light)
│   ├── components/         # ← copied from /src/app/components/ui/
│   │   ├── ds-button.tsx
│   │   ├── ds-input.tsx
│   │   ├── ds-select.tsx
│   │   ├── ds-checkbox.tsx
│   │   ├── ds-switch.tsx
│   │   ├── ds-tooltip.tsx
│   │   ├── ds-modal.tsx
│   │   ├── ds-confirm-dialog.tsx
│   │   ├── ds-tabs.tsx
│   │   ├── ds-menu.tsx
│   │   ├── ds-badge.tsx         # patched: source-icons import removed, text fallback
│   │   ├── ds-badge-dark.tsx
│   │   ├── ds-tag.tsx
│   │   ├── ds-segment-button.tsx
│   │   ├── ds-calendar.tsx
│   │   ├── ds-section-header.tsx
│   │   ├── ds-table.tsx
│   │   ├── ds-table.module.css
│   │   ├── ds-legend.tsx
│   │   ├── ds-sparkline.tsx
│   │   ├── ds-chart-grid.tsx
│   │   ├── ds-chart.tsx
│   │   └── ds-custom-dropdown.tsx
│   │   # EXCLUDED: source-icons.tsx, ds-source-badge.tsx (→ separate icon DB)
│   ├── hooks/
│   │   └── useChartColors.ts  # Canvas-safe theme-aware colors hook
│   └── theme/
│       ├── mantine-theme.ts   # andromedaTheme + andromedaCSSResolver
│       └── echarts-theme.ts   # andromedaEChartsTheme + registerAndromedaTheme
└── dist/                      # Build output
    ├── index.js               # ESM
    ├── index.cjs              # CJS
    ├── index.d.ts             # TypeScript declarations
    └── styles.css             # Combined CSS tokens
```

## Build Process

1. **Copy**: `scripts/copy-components.sh` copies all DS files from main project (except source-icons and ds-source-badge)
2. **Patch**: Script patches `ds-badge.tsx` to remove `source-icons` import (icon references → `undefined`, text fallback renders instead)
3. **Build**: `vite build` produces ESM + CJS bundles with types and CSS
4. **Publish**: `npm publish` or `pnpm pack`

## Key Decisions

### Peer Dependencies (not bundled)
- `react`, `react-dom` — UI framework
- `@mantine/core`, `@mantine/hooks` — used by `DSSectionHeader`, theme
- `echarts`, `echarts-for-react` — chart components
- `lucide-react` — `DSModal` close icon

### What IS Bundled
- All DS component code (except source-icons)
- CSS tokens
- Internal hooks (useChartColors)

### What is NOT Included
- **Source icons** (`source-icons.tsx`, `ds-source-badge.tsx`, SVG path data) — will be moved to a separate icon database
- Shadcn/Radix components (dead code in main project)
- Page-level components (DashboardPage, etc.)
- Mock data files
- Router-dependent code
- Figma-specific imports (`figma:asset`)

## Import Path Changes

| Original (main project) | Package |
|---|---|
| `./source-icons` (in ds-badge) | Removed — icon map entries set to `undefined`, text fallback used |
| `./ds-badge` | `./ds-badge` (same) |
| `./ds-segment-button` | `./ds-segment-button` (same) |
| `./ds-legend` | `./ds-legend` (same) |
| `./ds-table.module.css` | `./ds-table.module.css` (same) |

## Consumer Integration

```tsx
// Entry point
import '@andromeda/design-system/styles.css';
import { MantineProvider } from '@mantine/core';
import {
  andromedaTheme, andromedaCSSResolver,
  registerAndromedaTheme,
  DSButton, DSTable, DSChart,
} from '@andromeda/design-system';

// Register ECharts theme once
registerAndromedaTheme();

function App() {
  return (
    <MantineProvider
      theme={andromedaTheme}
      cssVariablesResolver={andromedaCSSResolver}
      defaultColorScheme="dark"
    >
      {/* DS components work here */}
    </MantineProvider>
  );
}
```

## Exported API Surface

### Components (20 groups)
DSButton, DSInput, DSSelect (+Custom, Trigger, Dropdown, Item, Separator, GroupHeader), DSCheckbox, DSSwitch, DSTooltip (+Content, ChartTooltip), DSModal (+Body, Footer), DSConfirmDialog, DSTabs/DSTab, DSMenu (+Group, Item, Separator), DSBadge, DSBadgeDark, DSTag, DSSegmentButton/DSSegment, DSCalendar, DSSectionHeader, DSTable (+CellTicker, CellPrice, CellNumber, CellPctChange, CellEditable), DSLegend, DSSparkline, DSChartGrid (+utils), DSChart (14 chart types), DSCustomDropdown (13 sub-components)

### Hooks (1)
useChartColors

### Theme Exports (4)
andromedaTheme, andromedaCSSResolver, andromedaEChartsTheme, registerAndromedaTheme

### Constants (1)
DS_PALETTE

### Excluded from package (→ separate icon DB)
Source icon components (25): EulerIcon, NfgroupIcon, VelesIcon, etc.
DSSourceBadge wrapper component

## Versioning

Follow SemVer:
- **Patch** (0.1.x): Bug fixes, typo fixes in tokens
- **Minor** (0.x.0): New components, new token values, new chart types
- **Major** (x.0.0): Breaking API changes, renamed props, removed components