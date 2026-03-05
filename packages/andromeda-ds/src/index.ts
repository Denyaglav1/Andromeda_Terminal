/* ═══════════════════════════════════════════════════
   @andromeda/design-system — Barrel Export
   Andromeda-style React Design System
   ═══════════════════════════════════════════════════ */

// ═══ Tokens (CSS) ═══
// CSS vars (colors, typography, semantic tokens) — bundled into styles.css
import './tokens.css';

// ═══ Button ═══
export { DSButton } from './components/ds-button';
export type { DSButtonProps } from './components/ds-button';

// ═══ Input ═══
export { DSInput } from './components/ds-input';
export type { DSInputProps } from './components/ds-input';

// ═══ Select ═══
export {
  DSSelect,
  DSSelectCustom,
  DSSelectTrigger,
  DSSelectDropdown,
  DSSelectItem,
  DSSelectSeparator,
  DSSelectGroupHeader,
} from './components/ds-select';
export type { DSSelectProps, DSSelectOption, DSSelectCustomProps, DSSelectTriggerProps, DSSelectDropdownProps, DSSelectItemProps } from './components/ds-select';

// ═══ Checkbox ═══
export { DSCheckbox } from './components/ds-checkbox';
export type { DSCheckboxProps } from './components/ds-checkbox';

// ═══ Switch ═══
export { DSSwitch } from './components/ds-switch';
export type { DSSwitchProps } from './components/ds-switch';

// ═══ Tooltip ═══
export { DSTooltip, DSTooltipContent, DSChartTooltip } from './components/ds-tooltip';
export type { DSTooltipProps, DSTooltipContentProps, DSChartTooltipProps, DSTooltipItem } from './components/ds-tooltip';

// ═══ Modal ═══
export { DSModal, DSModalBody, DSModalFooter } from './components/ds-modal';
export type { DSModalProps, DSModalBodyProps, DSModalFooterProps } from './components/ds-modal';

// ═══ Confirm Dialog ═══
export { DSConfirmDialog } from './components/ds-confirm-dialog';
export type { DSConfirmDialogProps } from './components/ds-confirm-dialog';

// ═══ Tabs ═══
export { DSTabs, DSTab } from './components/ds-tabs';
export type { DSTabsProps, DSTabProps } from './components/ds-tabs';

// ═══ Menu ═══
export { DSMenu, DSMenuGroup, DSMenuItem, DSMenuSeparator } from './components/ds-menu';
export type { DSMenuProps, DSMenuGroupProps, DSMenuItemProps, MenuItemVariant } from './components/ds-menu';

// ═══ Badge ═══
export { DSBadge, ALL_SOURCES } from './components/ds-badge';
export type { DSBadgeProps, BadgeVariant, BadgeColor, BadgeView, BadgeSize, SourceId } from './components/ds-badge';

// ═══ Source Badge ═══
// Excluded — depends on source-icons (will be moved to a separate icon database).
// Use DSBadge variant="source" with custom renderIcon prop when icons are available.

// ═══ Tag ═══
export { DSTag } from './components/ds-tag';
export type { DSTagProps, TagColor, TagSize } from './components/ds-tag';

// ═══ Segment Button ═══
export { DSSegmentButton, DSSegment } from './components/ds-segment-button';
export type { DSSegmentButtonProps, DSSegmentProps } from './components/ds-segment-button';

// ═══ Calendar ═══
export { DSCalendar } from './components/ds-calendar';
export type { DSCalendarProps } from './components/ds-calendar';

// ═══ Section Header ═══
export { DSSectionHeader } from './components/ds-section-header';
export type { DSSectionHeaderProps } from './components/ds-section-header';

// ═══ Table ═══
export {
  DSTable,
  DSTableCellTicker,
  DSTableCellPrice,
  DSTableCellNumber,
  DSTableCellPctChange,
  DSTableCellEditable,
} from './components/ds-table';
export type { DSTableColumn, DSTableRowGroup, DSTableProps, SortDirection, SortType, CellAlign } from './components/ds-table';

// ═══ Legend ═══
export { DSLegend } from './components/ds-legend';
export type { DSLegendProps, DSLegendItem, LegendMode } from './components/ds-legend';

// ═══ Sparkline (SVG) ═══
export { DSSparkline } from './components/ds-sparkline';
export type { DSSparklineProps } from './components/ds-sparkline';

// ═══ Chart Grid (SVG axes shell) ═══
export { DSChartGrid, toPolylinePoints, toSmoothPath, toAreaPath } from './components/ds-chart-grid';
export type { DSChartGridProps } from './components/ds-chart-grid';

// ═══ Charts (ECharts-based) ═══
export {
  DSChart,
  DSLineChart,
  DSBarChart,
  DSAreaChart,
  DSPieChart,
  DSDonutChart,
  DSScatterChart,
  DSHorizontalBarChart,
  DSStackedBarChart,
  DSWaterfallChart,
  DSRadarChart,
  DSGaugeChart,
  DSSparklineChart,
  DSComboChart,
  DSTreemapChart,
  DS_PALETTE,
} from './components/ds-chart';
export type {
  DSChartProps,
  DSChartType,
  DSChartSeries,
  DSLineChartProps,
  DSBarChartProps,
  DSAreaChartProps,
  DSPieChartProps,
  DSScatterChartProps,
  DSHorizontalBarChartProps,
  DSStackedBarChartProps,
  DSWaterfallChartProps,
  DSRadarChartProps,
  DSGaugeChartProps,
  DSSparklineChartProps,
  DSComboChartProps,
  DSComboChartSeries,
  DSTreemapChartProps,
} from './components/ds-chart';

// ═══ Custom Dropdown ═══
export {
  DSCustomDropdown,
  DSCustomDropdownTrigger,
  DSCustomDropdownPanel,
  DSCustomDropdownHeader,
  DSCustomDropdownContent,
  DSCustomDropdownGroup,
  DSCustomDropdownItem,
  DSCustomDropdownNested,
  DSCustomDropdownCheckbox,
  DSCustomDropdownBadge,
  DSCustomDropdownSeparator,
  DSCustomDropdownFooter,
  DSCustomDropdownFooterButton,
} from './components/ds-custom-dropdown';
export type {
  DSCustomDropdownProps,
  DSCustomDropdownTriggerProps,
  DSCustomDropdownPanelProps,
  DSCustomDropdownHeaderProps,
  DSCustomDropdownSegment,
  DSCustomDropdownContentProps,
  DSCustomDropdownGroupProps,
  DSCustomDropdownItemProps,
  DSCustomDropdownNestedProps,
  DSCustomDropdownCheckboxProps,
  DSCustomDropdownBadgeProps,
  DSCustomDropdownFooterProps,
  DSCustomDropdownFooterButtonProps,
} from './components/ds-custom-dropdown';

// ═══ Hooks ═══
export { useChartColors } from './hooks/useChartColors';

// ═══ Theme: Mantine ═══
export { andromedaTheme, andromedaCSSResolver } from './theme/mantine-theme';

// ═══ Theme: ECharts ═══
export { andromedaEChartsTheme, registerAndromedaTheme } from './theme/echarts-theme';

// ═══ Source Icons ═══
// Excluded from this package — will be moved to a separate icon database.
// In the main app, source-icons are imported from /src/app/components/ui/source-icons.tsx