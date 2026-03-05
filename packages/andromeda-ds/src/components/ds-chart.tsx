import React, { useMemo, useSyncExternalStore } from 'react';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';
import type { EChartsOption, SeriesOption } from 'echarts';
import { DSLegend, type DSLegendItem } from './ds-legend';

/* ═══════════════════════════════════════════════════════
   DSChart — Design System Chart Components (ECharts)
   ═══════════════════════════════════════════════════════

   Migrated from Recharts → Apache ECharts.
   All chart components use the registered "andromeda" theme.
   API surface preserved for backward compatibility.

   <DSLineChart data={data} series={[...]} />
   <DSBarChart data={data} series={[...]} />
   <DSAreaChart data={data} series={[...]} />
   <DSPieChart data={data} dataKey="value" nameKey="name" />
   <DSScatterChart data={data} xKey="x" yKey="y" />
*/

/* ─── DS Palette ─── */
export const DS_PALETTE = [
  '#5A8CFF', '#1FC989', '#F87D37', '#9A8CFF',
  '#45D3CE', '#F6C825', '#ED555E', '#A8B4C6',
];

/** Border / axis / splitLine colour — matches --ds-border-primary */
const BORDER_DARK = '#2A2E39';
const BORDER_LIGHT = '#E9F1F6';
const AXIS_LABEL_DARK = '#677C9C';
const AXIS_LABEL_LIGHT = '#92A1B8';

/** Subscribe to color-scheme changes on <html> via MutationObserver */
function subscribeScheme(cb: () => void) {
  const target = document.documentElement;
  const mo = new MutationObserver(cb);
  mo.observe(target, { attributes: true, attributeFilter: ['data-mantine-color-scheme'] });
  return () => mo.disconnect();
}
function getSchemeSnapshot(): 'light' | 'dark' {
  return (document.documentElement.getAttribute('data-mantine-color-scheme') as 'light' | 'dark') || 'dark';
}

function useChartColors() {
  const scheme = useSyncExternalStore(subscribeScheme, getSchemeSnapshot, () => 'dark' as const);
  return {
    borderColor: scheme === 'light' ? BORDER_LIGHT : BORDER_DARK,
    axisLabelColor: scheme === 'light' ? AXIS_LABEL_LIGHT : AXIS_LABEL_DARK,
  };
}

/* ─── Legend helpers ─── */

/** Build DSLegendItem[] from chart series array */
function legendFromSeries(series: DSChartSeries[]): DSLegendItem[] {
  return series.map((s, i) => ({
    color: s.color || DS_PALETTE[i % DS_PALETTE.length],
    label: s.name || s.dataKey,
  }));
}

/** Build DSLegendItem[] from pie/donut data */
function legendFromData(
  data: Record<string, any>[],
  nameKey: string,
  colors: string[],
): DSLegendItem[] {
  return data.map((d, i) => ({
    color: colors[i % colors.length],
    label: String(d[nameKey]),
  }));
}

/** Wrapper: chart area with DSLegend below */
function ChartWithLegend({
  showLegend = true,
  legendItems,
  className,
  style,
  children,
}: {
  showLegend?: boolean;
  legendItems: DSLegendItem[];
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}) {
  return (
    <div className={className} style={{ display: 'flex', flexDirection: 'column', gap: 6, width: '100%', ...style }}>
      {children}
      {showLegend && legendItems.length > 1 && (
        <div style={{ display: 'flex', justifyContent: 'center', flexShrink: 0 }}>
          <DSLegend items={legendItems} mode="inline" />
        </div>
      )}
    </div>
  );
}

/* ─── Common Types ─── */

export interface DSChartSeries {
  dataKey: string;
  name?: string;
  color?: string;
  strokeWidth?: number;
}

interface BaseChartProps {
  data: Record<string, any>[];
  xKey?: string;
  height?: number | string;
  showGrid?: boolean;
  gridDash?: string;
  showLegend?: boolean;
  showTooltip?: boolean;
  className?: string;
  xLabel?: string;
  yLabel?: string;
  yAxisPosition?: 'left' | 'right';
  yAxisMin?: number | 'auto';
  yAxisMax?: number | 'auto';
  referenceValue?: number;
  yAxisLabelFormatter?: string | ((value: number, index: number) => string);
}

/* ─── Shared option builder ─── */

function baseCartesianOption(
  props: BaseChartProps,
  colors: { borderColor: string; axisLabelColor: string },
  extraGrid?: Partial<EChartsOption['grid']>,
): Partial<EChartsOption> {
  const { data, xKey = 'name', showGrid = true, showLegend = true, showTooltip = true, xLabel, yLabel } = props;
  const { borderColor, axisLabelColor } = colors;
  return {
    grid: { left: 12, right: 16, top: 16, bottom: xLabel ? 40 : 12, containLabel: true, ...extraGrid },
    xAxis: {
      type: 'category',
      data: data.map(d => d[xKey]),
      name: xLabel,
      nameLocation: 'middle',
      nameGap: 28,
      axisLine: { show: true, lineStyle: { color: borderColor } },
      axisTick: { show: false },
      axisLabel: { color: axisLabelColor },
      splitLine: { show: false },
    },
    yAxis: {
      type: 'value',
      position: props.yAxisPosition || 'left',
      min: props.yAxisMin === 'auto' ? (val: any) => (val.min * 0.999).toFixed(2) : props.yAxisMin,
      max: props.yAxisMax === 'auto' ? (val: any) => (val.max * 1.001).toFixed(2) : props.yAxisMax,
      scale: true,
      name: yLabel,
      nameLocation: 'middle',
      nameGap: 50,
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: { color: axisLabelColor, margin: 8, formatter: props.yAxisLabelFormatter },
      splitLine: showGrid ? { show: true, lineStyle: { color: borderColor, type: 'dashed', opacity: 0.5 } } : { show: false },
    },
    tooltip: showTooltip ? { trigger: 'axis' } : undefined,
    legend: { show: false },
  };
}

/* ═════════════════ DSLineChart ═════════════════ */

export interface DSLineChartProps extends BaseChartProps {
  series: DSChartSeries[];
}

export function DSLineChart({
  data, series, height = 300, className, ...rest
}: DSLineChartProps) {
  const chartColors = useChartColors();
  const option = useMemo((): EChartsOption => ({
    ...baseCartesianOption({ data, ...rest }, chartColors),
    series: series.map((s, i): SeriesOption => ({
      type: 'line',
      name: s.name || s.dataKey,
      data: data.map(d => d[s.dataKey]),
      itemStyle: { color: s.color || DS_PALETTE[i % DS_PALETTE.length] },
      lineStyle: { width: s.strokeWidth || 2 },
      symbol: 'circle',
      symbolSize: 6,
      showSymbol: data.length <= 30,
      smooth: false,
    })),
  }), [data, series, chartColors, rest.xKey, rest.showGrid, rest.showLegend, rest.showTooltip, rest.xLabel, rest.yLabel]);

  return (
    <ChartWithLegend
      showLegend={rest.showLegend}
      legendItems={legendFromSeries(series)}
      className={className}
    >
      <ReactECharts option={option} style={{ height }} theme="andromeda" notMerge />
    </ChartWithLegend>
  );
}

/* ═════════════════ DSBarChart ═════════════════ */

export interface DSBarChartProps extends BaseChartProps {
  series: DSChartSeries[];
  stacked?: boolean;
}

export function DSBarChart({
  data, series, height = 300, stacked = false, className, ...rest
}: DSBarChartProps) {
  const chartColors = useChartColors();
  const option = useMemo((): EChartsOption => ({
    ...baseCartesianOption({ data, ...rest }, chartColors),
    series: series.map((s, i): SeriesOption => ({
      type: 'bar',
      name: s.name || s.dataKey,
      data: data.map(d => d[s.dataKey]),
      itemStyle: { color: s.color || DS_PALETTE[i % DS_PALETTE.length], borderRadius: [3, 3, 0, 0] },
      stack: stacked ? 'stack' : undefined,
    })),
  }), [data, series, stacked, chartColors, rest.xKey, rest.showGrid, rest.showLegend, rest.showTooltip, rest.xLabel, rest.yLabel]);

  return (
    <ChartWithLegend
      showLegend={rest.showLegend}
      legendItems={legendFromSeries(series)}
      className={className}
    >
      <ReactECharts option={option} style={{ height }} theme="andromeda" notMerge />
    </ChartWithLegend>
  );
}

/* ═════════════════ DSAreaChart ═════════════════ */

export interface DSAreaChartProps extends BaseChartProps {
  series: DSChartSeries[];
  stacked?: boolean;
}

export function DSAreaChart({
  data, series, height = 300, stacked = false, className, ...rest
}: DSAreaChartProps) {
  const chartColors = useChartColors();
  const option = useMemo((): EChartsOption => ({
    ...baseCartesianOption({ data, ...rest }, chartColors),
    series: series.map((s, i): SeriesOption => {
      const color = s.color || DS_PALETTE[i % DS_PALETTE.length];
      return {
        type: 'line',
        name: s.name || s.dataKey,
        data: data.map(d => d[s.dataKey]),
        itemStyle: { color },
        lineStyle: { width: s.strokeWidth || 2 },
        areaStyle: {
          opacity: 0.2,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: color },
            { offset: 1, color: 'rgba(0,0,0,0)' }
          ])
        },
        stack: stacked ? 'stack' : undefined,
        symbol: data.length < 20 ? 'circle' : 'none',
        symbolSize: 4,
        markLine: rest.referenceValue !== undefined ? {
          symbol: 'none',
          label: { show: false },
          data: [{ yAxis: rest.referenceValue, lineStyle: { type: 'dashed', color: '#F87D37', opacity: 0.6 } }]
        } : undefined,
        smooth: false,
      };
    }),
  }), [data, series, stacked, chartColors, rest.xKey, rest.showGrid, rest.showLegend, rest.showTooltip, rest.xLabel, rest.yLabel, rest.yAxisPosition, rest.yAxisMin, rest.yAxisMax, rest.referenceValue]);

  return (
    <ChartWithLegend
      showLegend={rest.showLegend}
      legendItems={legendFromSeries(series)}
      className={className}
      style={height === '100%' ? { height: '100%', flex: 1, minHeight: 0 } : undefined}
    >
      {height === '100%' ? (
        <div style={{ flex: 1, position: 'relative', width: '100%', minHeight: 0 }}>
          <ReactECharts option={option} style={{ height: '100%', width: '100%', position: 'absolute', inset: 0 }} theme="andromeda" notMerge />
        </div>
      ) : (
        <ReactECharts option={option} style={{ height, width: '100%' }} theme="andromeda" notMerge />
      )}
    </ChartWithLegend>
  );
}

/* ═════════════════ DSPieChart ═════════════════ */

export interface DSPieChartProps {
  data: Record<string, any>[];
  dataKey?: string;
  nameKey?: string;
  height?: number;
  colors?: string[];
  innerRadius?: number;
  showTooltip?: boolean;
  showLegend?: boolean;
  showLabels?: boolean;
  className?: string;
}

export function DSPieChart({
  data, dataKey = 'value', nameKey = 'name',
  height = 300, colors = DS_PALETTE,
  innerRadius = 0, showTooltip = true, showLegend = true,
  showLabels = false, className,
}: DSPieChartProps) {
  const option = useMemo((): EChartsOption => ({
    tooltip: showTooltip ? { trigger: 'item' } : undefined,
    legend: { show: false },
    series: [{
      type: 'pie',
      radius: innerRadius ? [`${innerRadius}%`, '80%'] : ['0%', '80%'],
      center: ['50%', '50%'],
      data: data.map((d, i) => ({
        value: d[dataKey],
        name: d[nameKey],
        itemStyle: { color: colors[i % colors.length] },
      })),
      label: showLabels ? { show: true, color: '#C4C7C9', fontSize: 10 } : { show: false },
      emphasis: { itemStyle: { shadowBlur: 10, shadowOffsetX: 0, shadowColor: 'rgba(0, 0, 0, 0.5)' } },
    }],
  }), [data, dataKey, nameKey, colors, innerRadius, showTooltip, showLegend, showLabels]);

  return (
    <ChartWithLegend
      showLegend={showLegend}
      legendItems={legendFromData(data, nameKey, colors)}
      className={className}
    >
      <ReactECharts option={option} style={{ height }} theme="andromeda" notMerge />
    </ChartWithLegend>
  );
}

/* ═════════════════ DSDonutChart ═════════════════ */

export function DSDonutChart(props: DSPieChartProps) {
  return <DSPieChart {...props} innerRadius={55} />;
}

/* ═════════════════ DSScatterChart ═════════════════ */

export interface DSScatterChartProps extends BaseChartProps {
  xDataKey?: string;
  yDataKey?: string;
  color?: string;
  dotSize?: number;
}

export function DSScatterChart({
  data, height = 300, showGrid = true, showTooltip = true,
  xDataKey = 'x', yDataKey = 'y', color = DS_PALETTE[0],
  dotSize = 10, className, xLabel, yLabel,
}: DSScatterChartProps) {
  const { borderColor, axisLabelColor } = useChartColors();
  const option = useMemo((): EChartsOption => ({
    grid: { left: 12, right: 16, top: 16, bottom: xLabel ? 40 : 12, containLabel: true },
    xAxis: {
      type: 'value', name: xLabel, nameLocation: 'middle', nameGap: 28,
      axisLine: { show: true, lineStyle: { color: borderColor } },
      axisTick: { show: false },
      axisLabel: { color: axisLabelColor },
      splitLine: showGrid ? { show: true, lineStyle: { color: borderColor, type: 'dashed', opacity: 0.5 } } : { show: false },
    },
    yAxis: {
      type: 'value', name: yLabel, nameLocation: 'middle', nameGap: 50,
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: { color: axisLabelColor },
      splitLine: showGrid ? { show: true, lineStyle: { color: borderColor, type: 'dashed', opacity: 0.5 } } : { show: false },
    },
    tooltip: showTooltip ? { trigger: 'item' } : undefined,
    series: [{
      type: 'scatter',
      data: data.map(d => [d[xDataKey], d[yDataKey]]),
      itemStyle: { color },
      symbolSize: dotSize,
    }],
  }), [data, xDataKey, yDataKey, color, dotSize, showGrid, showTooltip, xLabel, yLabel, borderColor, axisLabelColor]);

  return (
    <div className={className} style={{ width: '100%' }}>
      <ReactECharts option={option} style={{ height }} theme="andromeda" notMerge />
    </div>
  );
}

/* ═════════════════ DSHorizontalBarChart ═════════════════ */

export interface DSHorizontalBarChartProps extends BaseChartProps {
  series: DSChartSeries[];
}

export function DSHorizontalBarChart({
  data, xKey = 'name', series, height = 300,
  showGrid = true, showLegend = true, showTooltip = true,
  className,
}: DSHorizontalBarChartProps) {
  const { borderColor, axisLabelColor } = useChartColors();
  const option = useMemo((): EChartsOption => ({
    grid: { left: 12, right: 16, top: 16, bottom: 12, containLabel: true },
    yAxis: {
      type: 'category', data: data.map(d => d[xKey]), inverse: true,
      axisLine: { show: true, lineStyle: { color: borderColor } },
      axisTick: { show: false },
      axisLabel: { color: axisLabelColor },
      splitLine: { show: false },
    },
    xAxis: {
      type: 'value',
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: { color: axisLabelColor },
      splitLine: showGrid ? { show: true, lineStyle: { color: borderColor, type: 'dashed', opacity: 0.5 } } : { show: false },
    },
    tooltip: showTooltip ? { trigger: 'axis' } : undefined,
    legend: { show: false },
    series: series.map((s, i): SeriesOption => ({
      type: 'bar',
      name: s.name || s.dataKey,
      data: data.map(d => d[s.dataKey]),
      itemStyle: { color: s.color || DS_PALETTE[i % DS_PALETTE.length], borderRadius: [0, 3, 3, 0] },
    })),
  }), [data, xKey, series, showGrid, showLegend, showTooltip, borderColor, axisLabelColor]);

  return (
    <ChartWithLegend
      showLegend={showLegend}
      legendItems={legendFromSeries(series)}
      className={className}
    >
      <ReactECharts option={option} style={{ height }} theme="andromeda" notMerge />
    </ChartWithLegend>
  );
}

/* ═════════════════ DSStackedBarChart ═════════════════ */

export interface DSStackedBarChartProps extends BaseChartProps {
  series: DSChartSeries[];
  horizontal?: boolean;
  normalized?: boolean;
}

export function DSStackedBarChart({
  data, xKey = 'name', series, height = 300,
  showGrid = true, showLegend = true, showTooltip = true,
  horizontal = false, normalized = false, className,
}: DSStackedBarChartProps) {
  const { borderColor, axisLabelColor } = useChartColors();
  const chartData = useMemo(() => {
    if (!normalized) return data;
    return data.map(row => {
      const total = series.reduce((sum, s) => sum + (Number(row[s.dataKey]) || 0), 0);
      if (total === 0) return row;
      const normed: any = { ...row };
      series.forEach(s => { normed[s.dataKey] = ((Number(row[s.dataKey]) || 0) / total) * 100; });
      return normed;
    });
  }, [data, series, normalized]);

  const option = useMemo((): EChartsOption => {
    const categories = chartData.map(d => d[xKey]);
    const baseAxis = {
      type: 'category' as const, data: categories,
      axisLine: { show: true, lineStyle: { color: borderColor } },
      axisTick: { show: false },
      axisLabel: { color: axisLabelColor },
      splitLine: { show: false },
    };
    const valAxis = {
      type: 'value' as const,
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: { color: axisLabelColor },
      splitLine: { show: true, lineStyle: { color: borderColor, type: 'dashed' as const, opacity: 0.5 } },
    };

    return {
      grid: { left: 12, right: 16, top: 16, bottom: 12, containLabel: true },
      xAxis: horizontal ? valAxis : baseAxis,
      yAxis: horizontal ? { ...baseAxis, inverse: true } : valAxis,
      tooltip: showTooltip ? { trigger: 'axis' } : undefined,
      legend: { show: false },
      series: series.map((s, i): SeriesOption => ({
        type: 'bar',
        name: s.name || s.dataKey,
        data: chartData.map(d => d[s.dataKey]),
        stack: 'stack',
        itemStyle: {
          color: s.color || DS_PALETTE[i % DS_PALETTE.length],
          borderRadius: i === series.length - 1 ? (horizontal ? [0, 3, 3, 0] : [3, 3, 0, 0]) : undefined,
        },
      })),
    };
  }, [chartData, xKey, series, horizontal, showGrid, showLegend, showTooltip, borderColor, axisLabelColor]);

  return (
    <ChartWithLegend
      showLegend={showLegend}
      legendItems={legendFromSeries(series)}
      className={className}
    >
      <ReactECharts option={option} style={{ height }} theme="andromeda" notMerge />
    </ChartWithLegend>
  );
}

/* ═════════════════ DSWaterfallChart ═════════════════ */

export interface DSWaterfallChartProps extends BaseChartProps {
  dataKey?: string;
  positiveColor?: string;
  negativeColor?: string;
  totalColor?: string;
}

export function DSWaterfallChart({
  data, xKey = 'name', dataKey = 'value', height = 300,
  showGrid = true, showTooltip = true,
  positiveColor = '#1FC989', negativeColor = '#EA3943', totalColor = '#5A8CFF',
  className,
}: DSWaterfallChartProps) {
  const { borderColor, axisLabelColor } = useChartColors();
  const { bases, deltas, colors } = useMemo(() => {
    let cumulative = 0;
    const b: number[] = [];
    const d: number[] = [];
    const c: string[] = [];

    data.forEach(item => {
      const val = Number(item[dataKey]) || 0;
      if (item.isTotal) {
        b.push(0);
        d.push(cumulative);
        c.push(totalColor);
      } else {
        b.push(val >= 0 ? cumulative : cumulative + val);
        d.push(Math.abs(val));
        c.push(val >= 0 ? positiveColor : negativeColor);
        cumulative += val;
      }
    });

    return { bases: b, deltas: d, colors: c };
  }, [data, dataKey, positiveColor, negativeColor, totalColor]);

  const option = useMemo((): EChartsOption => ({
    grid: { left: 12, right: 16, top: 16, bottom: 12, containLabel: true },
    xAxis: {
      type: 'category', data: data.map(d => d[xKey]),
      axisLine: { show: true, lineStyle: { color: borderColor } },
      axisTick: { show: false },
      axisLabel: { color: axisLabelColor },
      splitLine: { show: false },
    },
    yAxis: {
      type: 'value',
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: { color: axisLabelColor },
      splitLine: showGrid ? { show: true, lineStyle: { color: borderColor, type: 'dashed', opacity: 0.5 } } : { show: false },
    },
    tooltip: showTooltip ? { trigger: 'axis' } : undefined,
    series: [
      {
        type: 'bar',
        stack: 'waterfall',
        data: bases,
        itemStyle: { color: 'transparent' },
        emphasis: { itemStyle: { color: 'transparent' } },
        tooltip: { show: false },
      },
      {
        type: 'bar',
        stack: 'waterfall',
        data: deltas.map((v, i) => ({ value: v, itemStyle: { color: colors[i], borderRadius: [3, 3, 0, 0] } })),
      },
    ],
  }), [data, xKey, bases, deltas, colors, showGrid, showTooltip, borderColor, axisLabelColor]);

  return (
    <div className={className} style={{ width: '100%' }}>
      <ReactECharts option={option} style={{ height }} theme="andromeda" notMerge />
    </div>
  );
}

/* ═══════════════ DSRadarChart ═════════════════ */

export interface DSRadarChartProps {
  data: Record<string, any>[];
  series: DSChartSeries[];
  dataKey?: string;
  height?: number;
  showLegend?: boolean;
  showTooltip?: boolean;
  fillOpacity?: number;
  className?: string;
}

export function DSRadarChart({
  data, series, dataKey = 'name', height = 300,
  showLegend = true, showTooltip = true, fillOpacity = 0.15, className,
}: DSRadarChartProps) {
  const { borderColor, axisLabelColor } = useChartColors();
  const option = useMemo((): EChartsOption => {
    const indicators = data.map(d => {
      const rawMax = Math.max(...series.map(s => Number(d[s.dataKey]) || 0)) * 1.25;
      const exp = Math.pow(10, Math.floor(Math.log10(rawMax || 1)));
      const fraction = rawMax / exp;
      const nice = fraction <= 1 ? 1 : fraction <= 2.5 ? 2.5 : fraction <= 5 ? 5 : 10;
      return {
        name: String(d[dataKey]),
        max: nice * exp || 100,
      };
    });

    return {
      tooltip: showTooltip ? { trigger: 'item' } : undefined,
      legend: { show: false },
      radar: {
        indicator: indicators, shape: 'polygon' as any, splitNumber: 5,
        axisLine: { lineStyle: { color: borderColor } },
        splitLine: { lineStyle: { color: borderColor, opacity: 0.5 } },
        splitArea: { show: false },
        axisName: { color: axisLabelColor },
      },
      series: [{
        type: 'radar',
        data: series.map((s, i) => {
          const color = s.color || DS_PALETTE[i % DS_PALETTE.length];
          return {
            name: s.name || s.dataKey,
            value: data.map(d => d[s.dataKey]),
            lineStyle: { width: s.strokeWidth || 2, color },
            itemStyle: { color },
            areaStyle: { opacity: fillOpacity, color },
          };
        }),
      }],
    };
  }, [data, series, dataKey, showLegend, showTooltip, fillOpacity, borderColor, axisLabelColor]);

  return (
    <ChartWithLegend
      showLegend={showLegend}
      legendItems={legendFromSeries(series)}
      className={className}
    >
      <ReactECharts option={option} style={{ height }} theme="andromeda" notMerge />
    </ChartWithLegend>
  );
}

/* ═════════════════ DSGaugeChart ═════════════════ */

export interface DSGaugeChartProps {
  value: number;
  min?: number;
  max?: number;
  height?: number;
  color?: string;
  trackColor?: string;
  showValue?: boolean;
  label?: string;
  className?: string;
}

export function DSGaugeChart({
  value, min = 0, max = 100, height = 200,
  color = DS_PALETTE[0], trackColor = '#2A2E39',
  showValue = true, label, className,
}: DSGaugeChartProps) {
  const { borderColor, axisLabelColor } = useChartColors();
  const option = useMemo((): EChartsOption => ({
    series: [{
      type: 'gauge',
      min, max,
      startAngle: 225,
      endAngle: -45,
      progress: { show: true, width: 14, itemStyle: { color } },
      axisLine: { lineStyle: { width: 14, color: [[1, borderColor]] } },
      axisTick: { show: false },
      splitLine: { show: false },
      axisLabel: { show: false },
      pointer: { show: false },
      title: label ? { show: true, offsetCenter: [0, '70%'], fontSize: 11, color: axisLabelColor } : { show: false },
      detail: showValue ? {
        valueAnimation: true,
        fontSize: 24,
        fontWeight: 600,
        fontFamily: "'Inter', sans-serif",
        color: '#E0E1E2',
        offsetCenter: [0, '0%'],
        formatter: '{value}',
      } : { show: false },
      data: [{ value, name: label || '' }],
    }],
  }), [value, min, max, color, borderColor, axisLabelColor, showValue, label]);

  return (
    <div className={className} style={{ width: '100%' }}>
      <ReactECharts option={option} style={{ height }} theme="andromeda" notMerge />
    </div>
  );
}

/* ═════════════════ DSSparklineChart ═════════════════ */

export interface DSSparklineChartProps {
  data: number[];
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}

export function DSSparklineChart({
  data, width = 120, height = 32,
  color = DS_PALETTE[0], className,
}: DSSparklineChartProps) {
  const option = useMemo((): EChartsOption => ({
    grid: { left: 0, right: 0, top: 2, bottom: 2 },
    xAxis: { type: 'category', show: false, data: data.map((_, i) => i) },
    yAxis: { type: 'value', show: false },
    tooltip: { show: false },
    series: [{
      type: 'line',
      data,
      symbol: 'none',
      lineStyle: { width: 1.5, color },
      itemStyle: { color },
      smooth: false,
    }],
  }), [data, color]);

  return (
    <div className={className} style={{ display: 'inline-block', width, height, minWidth: width, minHeight: height }}>
      <ReactECharts option={option} style={{ width, height }} theme="andromeda" notMerge />
    </div>
  );
}

/* ═════════════════ DSComboChart ═════════════════ */

export interface DSComboChartSeries extends DSChartSeries {
  chartType: 'line' | 'bar' | 'area';
}

export interface DSComboChartProps extends BaseChartProps {
  series: DSComboChartSeries[];
}

export function DSComboChart({
  data, series, height = 300, className, ...rest
}: DSComboChartProps) {
  const chartColors = useChartColors();
  const option = useMemo((): EChartsOption => ({
    ...baseCartesianOption({ data, ...rest }, chartColors),
    series: series.map((s, i): SeriesOption => {
      const color = s.color || DS_PALETTE[i % DS_PALETTE.length];
      if (s.chartType === 'bar') {
        return { type: 'bar', name: s.name || s.dataKey, data: data.map(d => d[s.dataKey]), itemStyle: { color, borderRadius: [3, 3, 0, 0] } };
      }
      if (s.chartType === 'area') {
        return { type: 'line', name: s.name || s.dataKey, data: data.map(d => d[s.dataKey]), itemStyle: { color }, lineStyle: { width: s.strokeWidth || 2 }, areaStyle: { opacity: 0.15 }, symbol: 'none' };
      }
      return { type: 'line', name: s.name || s.dataKey, data: data.map(d => d[s.dataKey]), itemStyle: { color }, lineStyle: { width: s.strokeWidth || 2 }, symbol: 'circle', symbolSize: 6 };
    }),
  }), [data, series, chartColors, rest.xKey, rest.showGrid, rest.showLegend, rest.showTooltip, rest.xLabel, rest.yLabel]);

  return (
    <ChartWithLegend
      showLegend={rest.showLegend}
      legendItems={legendFromSeries(series)}
      className={className}
    >
      <ReactECharts option={option} style={{ height }} theme="andromeda" notMerge />
    </ChartWithLegend>
  );
}

/* ═════════════════ DSTreemapChart ═════════════════ */

export interface DSTreemapChartProps {
  data: { name: string; value: number }[];
  height?: number;
  colors?: string[];
  showTooltip?: boolean;
  className?: string;
}

export function DSTreemapChart({
  data, height = 300, colors = DS_PALETTE,
  showTooltip = true, className,
}: DSTreemapChartProps) {
  const option = useMemo((): EChartsOption => ({
    tooltip: showTooltip ? { trigger: 'item', formatter: '{b}: {c}' } : undefined,
    series: [{
      type: 'treemap',
      data: data.map((d, i) => ({ name: d.name, value: d.value, itemStyle: { color: colors[i % colors.length], borderColor: '#131722', borderWidth: 2 } })),
      label: { show: true, color: '#fff', fontSize: 12, fontFamily: "'Inter', sans-serif", fontWeight: 500 },
      breadcrumb: { show: false },
      roam: false,
    }],
  }), [data, colors, showTooltip]);

  return (
    <div className={className} style={{ width: '100%' }}>
      <ReactECharts option={option} style={{ height }} theme="andromeda" notMerge />
    </div>
  );
}

/* ═════════════════ Universal DSChart ═════════════════ */

export type DSChartType = 'line' | 'bar' | 'area' | 'pie' | 'donut' | 'scatter'
  | 'stacked-bar' | 'bar-h' | 'radar' | 'waterfall' | 'treemap' | 'gauge' | 'sparkline' | 'combo';

export interface DSChartProps {
  type: DSChartType;
  data: Record<string, any>[];
  series?: DSChartSeries[];
  xKey?: string;
  height?: number;
  showGrid?: boolean;
  showLegend?: boolean;
  showTooltip?: boolean;
  className?: string;
  dataKey?: string;
  nameKey?: string;
  xDataKey?: string;
  yDataKey?: string;
  color?: string;
  value?: number;
  label?: string;
}

export function DSChart({ type, ...props }: DSChartProps) {
  switch (type) {
    case 'line':
      return <DSLineChart {...props} series={props.series || []} />;
    case 'bar':
      return <DSBarChart {...props} series={props.series || []} />;
    case 'area':
      return <DSAreaChart {...props} series={props.series || []} />;
    case 'pie':
      return <DSPieChart {...props} />;
    case 'donut':
      return <DSDonutChart {...props} />;
    case 'scatter':
      return <DSScatterChart {...props} />;
    case 'stacked-bar':
      return <DSStackedBarChart {...props} series={props.series || []} />;
    case 'bar-h':
      return <DSHorizontalBarChart {...props} series={props.series || []} />;
    case 'radar':
      return <DSRadarChart {...props} series={props.series || []} />;
    case 'waterfall':
      return <DSWaterfallChart {...props} />;
    case 'treemap':
      return <DSTreemapChart {...props} data={props.data as any} />;
    case 'gauge':
      return <DSGaugeChart value={props.value || 0} label={props.label} height={props.height} color={props.color} className={props.className} />;
    case 'sparkline':
      return <DSSparklineChart data={props.data.map(d => Number(d[props.dataKey || 'value']) || 0)} color={props.color} className={props.className} />;
    case 'combo':
      return <DSComboChart {...props} series={(props.series || []).map(s => ({ ...s, chartType: 'line' as const }))} />;
    default:
      return <DSLineChart {...props} series={props.series || []} />;
  }
}