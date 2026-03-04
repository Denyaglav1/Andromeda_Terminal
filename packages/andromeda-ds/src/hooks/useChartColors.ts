import { useSyncExternalStore } from 'react';

/* ═══════════════════════════════════════════════════
   useChartColors — Canvas-safe theme-aware colors
   ECharts renders on <canvas> and can't use CSS vars.
   This hook reactively returns hex values for the
   current color scheme (dark / light).
   ═══════════════════════════════════════════════════ */

const BORDER_DARK = '#2A2E39';
const BORDER_LIGHT = '#E9F1F6';
const AXIS_LABEL_DARK = '#677C9C';
const AXIS_LABEL_LIGHT = '#92A1B8';

function subscribeScheme(cb: () => void) {
  const target = document.documentElement;
  const mo = new MutationObserver(cb);
  mo.observe(target, { attributes: true, attributeFilter: ['data-mantine-color-scheme'] });
  return () => mo.disconnect();
}

function getSchemeSnapshot(): 'light' | 'dark' {
  return (document.documentElement.getAttribute('data-mantine-color-scheme') as 'light' | 'dark') || 'dark';
}

export function useChartColors() {
  const scheme = useSyncExternalStore(subscribeScheme, getSchemeSnapshot, () => 'dark' as const);
  return {
    scheme,
    borderColor: scheme === 'light' ? BORDER_LIGHT : BORDER_DARK,
    axisLabelColor: scheme === 'light' ? AXIS_LABEL_LIGHT : AXIS_LABEL_DARK,
  };
}
