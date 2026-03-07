import React, { useState, useMemo } from 'react';
import { Link } from 'react-router';
import { Box, Stack, Text, UnstyledButton, Divider, Anchor } from '@mantine/core';
import { DSTabs, DSTab } from '../ui/ds-tabs';
import { DSSegmentButton, DSSegment } from '../ui/ds-segment-button';
import { DSSectionHeader } from '../ui/ds-section-header';
import type { AssetClass, PeriodFilter, GainerLoser } from './data/home-types';
import { getGainersLosers } from './data/home-market-db';

/* ═══════════════════════════════════════
   GainersLosers — Divergent bar chart (Mantine)
   ═══════════════════════════════════════ */

function BarRow({ item, maxPct, isGainer, isLast }: { item: GainerLoser; maxPct: number; isGainer: boolean; isLast: boolean }) {
  const pct = Math.abs(item.changePercent);
  const width = (pct / maxPct) * 100;
  const color = isGainer ? 'var(--ds-green-6)' : 'var(--ds-red-6)';

  return (
    <Box
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        padding: '3px 0',
        borderBottom: isLast ? 'none' : '1px dashed var(--ds-border-primary)',
      }}
    >
      {/* Bar */}
      <Box style={{ width: 80, display: 'flex', justifyContent: 'flex-end' }}>
        <Box
          style={{
            height: 8,
            borderRadius: 2,
            backgroundColor: color,
            width: `${width}%`,
            minWidth: 4,
          }}
        />
      </Box>

      {/* Percentage */}
      <Text
        style={{
          width: 56,
          fontSize: 10,
          lineHeight: '16px',
          fontWeight: 600,
          textAlign: 'right',
          whiteSpace: 'nowrap',
          color,
          fontFeatureSettings: "'lnum', 'tnum'",
        }}
      >
        {isGainer ? '+' : ''}{item.changePercent.toFixed(2)}%
      </Text>

      {/* Company name */}
      <Anchor
        component={Link}
        to={`/companies/${item.ticker}`}
        style={{
          flex: 1,
          fontSize: 10,
          lineHeight: '16px',
          fontWeight: 500,
          color: 'var(--ds-blue-6)',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          cursor: 'pointer',
          textDecoration: 'none',
        }}
      >
        {item.name}
      </Anchor>
    </Box>
  );
}

export function GainersLosers() {
  const [assetClass, setAssetClass] = useState<AssetClass>('stocks');
  const [period, setPeriod] = useState<PeriodFilter>('1D');

  const { gainers, losers } = useMemo(
    () => getGainersLosers(assetClass, period),
    [assetClass, period]
  );

  const maxGainer = Math.max(...gainers.map(g => Math.abs(g.changePercent)));
  const maxLoser = Math.max(...losers.map(l => Math.abs(l.changePercent)));
  const maxPct = Math.max(maxGainer, maxLoser);

  return (
    <Stack gap={8} style={{ width: '100%' }}>
      <DSSectionHeader>Лидеры роста и падения</DSSectionHeader>

      <DSTabs value={assetClass} onChange={(v) => setAssetClass(v as AssetClass)} size="xs">
        <DSTab value="stocks">Акции</DSTab>
        <DSTab value="bonds">Облигации</DSTab>
      </DSTabs>

      <DSSegmentButton variant="stroke" size="xs" value={period} onChange={(v) => setPeriod(v as PeriodFilter)} className="self-start">
        <DSSegment value="1D">1Д</DSSegment>
        <DSSegment value="1M">1М</DSSegment>
        <DSSegment value="1Y">1Г</DSSegment>
        <DSSegment value="YTD">YTD</DSSegment>
      </DSSegmentButton>

      {/* Gainers */}
      <Box style={{ display: 'flex', flexDirection: 'column' }}>
        {gainers.map((g, i) => (
          <BarRow key={g.ticker} item={g} maxPct={maxPct} isGainer isLast={i === gainers.length - 1} />
        ))}
      </Box>

      {/* Divider */}
      <Divider my={2} color="var(--ds-border-primary)" />

      {/* Losers */}
      <Box style={{ display: 'flex', flexDirection: 'column' }}>
        {losers.map((l, i) => (
          <BarRow key={l.ticker} item={l} maxPct={maxPct} isGainer={false} isLast={i === losers.length - 1} />
        ))}
      </Box>

      {/* Screener link */}
      <UnstyledButton
        style={{
          fontSize: 12,
          lineHeight: '16px',
          fontWeight: 600,
          color: 'var(--ds-blue-6)',
          alignSelf: 'flex-start',
          transition: 'color 150ms ease',
        }}
      >
        Скринер {assetClass === 'stocks' ? 'Акций' : 'Облигаций'} (ES)
      </UnstyledButton>
    </Stack>
  );
}