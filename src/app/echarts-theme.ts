import * as echarts from 'echarts/core';

/* ═══════════════════════════════════════════════
   Andromeda-style ECharts Theme
   Registered globally — use via <ReactECharts theme="andromeda" />
   ═══════════════════════════════════════════════ */

const COLORS = {
  blue6: '#5A8CFF',
  green6: '#1FC989',
  red6: '#EA3943',
  orange6: '#F87D37',
  yellow6: '#F6C825',
  purple6: '#9A8CFF',
  turquoise6: '#45D3CE',
  gray6: '#677C9C',
  gray8: '#313B4F',
  dark4: '#2A2E39',
  dark5: '#191F2D',
  dark6: '#131722',
  dark7: '#10141D',
  textPrimary: '#E0E1E2',
  textSecondary: '#C4C7C9',
  textSubtle: '#677C9C',
};

export const andromedaEChartsTheme = {
  backgroundColor: 'transparent',

  color: [
    COLORS.blue6,
    COLORS.green6,
    COLORS.red6,
    COLORS.orange6,
    COLORS.yellow6,
    COLORS.purple6,
    COLORS.turquoise6,
  ],

  textStyle: {
    color: COLORS.textSubtle,
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    fontSize: 12,
  },

  title: {
    textStyle: {
      color: COLORS.textPrimary,
      fontSize: 14,
      fontWeight: 500,
    },
    subtextStyle: {
      color: COLORS.textSubtle,
      fontSize: 12,
    },
  },

  line: {
    itemStyle: { borderWidth: 0 },
    lineStyle: { width: 1.5 },
    symbolSize: 0,
    symbol: 'circle',
    smooth: false,
  },

  bar: {
    itemStyle: {
      borderRadius: [2, 2, 0, 0],
    },
  },

  categoryAxis: {
    axisLine: { show: true, lineStyle: { color: COLORS.dark4 } },
    axisTick: { show: false },
    axisLabel: {
      color: COLORS.textSubtle,
      fontSize: 11,
    },
    splitLine: { show: false },
  },

  valueAxis: {
    axisLine: { show: false },
    axisTick: { show: false },
    axisLabel: {
      color: COLORS.textSubtle,
      fontSize: 11,
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: COLORS.dark4,
        type: 'dashed',
        opacity: 0.5,
      },
    },
  },

  legend: {
    textStyle: {
      color: COLORS.textSecondary,
      fontSize: 12,
    },
    icon: 'roundRect',
    itemWidth: 12,
    itemHeight: 8,
    itemGap: 16,
  },

  tooltip: {
    backgroundColor: COLORS.dark7,
    borderColor: COLORS.dark4,
    borderWidth: 1,
    textStyle: {
      color: COLORS.textPrimary,
      fontSize: 12,
    },
    extraCssText: 'border-radius: 6px; box-shadow: 0 4px 12px rgba(0,0,0,0.4);',
  },

  grid: {
    left: 12,
    right: 12,
    top: 32,
    bottom: 12,
    containLabel: true,
  },

  dataZoom: {
    backgroundColor: COLORS.dark6,
    borderColor: COLORS.dark4,
    fillerColor: 'rgba(90, 140, 255, 0.1)',
    handleColor: COLORS.blue6,
    handleSize: '60%',
    textStyle: { color: COLORS.textSubtle },
    dataBackground: {
      lineStyle: { color: COLORS.gray8, width: 1 },
      areaStyle: { color: 'rgba(90, 140, 255, 0.05)' },
    },
  },
};

/** Register the theme once at app startup */
export function registerAndromedaTheme() {
  echarts.registerTheme('andromeda', andromedaEChartsTheme);
}