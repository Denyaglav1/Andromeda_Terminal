import React, { useState } from 'react';
import { Box, Stack, Text, Group } from '@mantine/core';
import { DSTabs, DSTab } from '../ui/ds-tabs';
import { DSSparkline } from '../ui/ds-sparkline';
import { DSSectionHeader } from '../ui/ds-section-header';
import type { MarketCategory, MarketInstrument } from './data/home-types';
import { useRealtimeMarketTrends, formatPrice, formatChange } from './data/useRealtimePrices';
import { Clock } from 'lucide-react';

/* ═══════════════════════════════════════
   MarketTrends — Commodities/Currencies/Indices (Mantine)
   ═══════════════════════════════════════ */

const CATEGORY_LABELS: Record<MarketCategory, string> = {
  commodities: 'Сырьё',
  currencies: 'Валюты',
  indices: 'Индексы',
};

function InstrumentRow({ instrument, isLast }: { instrument: MarketInstrument; isLast: boolean }) {
  const isUp = instrument.changePercent >= 0;

  return (
    <Box
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '8px 0',
        borderBottom: isLast ? 'none' : '1px dashed var(--ds-border-primary)',
      }}
    >
      {/* Left: ticker + last update */}
      <Box style={{ display: 'flex', flexDirection: 'column', gap: 2, minWidth: 0 }}>
        <Text style={{ fontSize: 14, lineHeight: '20px', fontWeight: 600, color: 'var(--ds-text-primary)' }}>
          {instrument.ticker}
        </Text>
        <Group gap={4} style={{ color: 'var(--ds-text-gray-dark)' }}>
          <Clock size={10} />
          <Text style={{ fontSize: 10, lineHeight: '14px', fontFeatureSettings: "'lnum', 'tnum'" }}>
            {instrument.lastUpdate}
          </Text>
        </Group>
      </Box>

      {/* Right: price + change + sparkline */}
      <Group gap={8}>
        <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 1 }}>
          <Text style={{ fontSize: 14, lineHeight: '20px', fontWeight: 500, color: 'var(--ds-text-gray)', fontFeatureSettings: "'lnum', 'tnum'" }}>
            {formatPrice(instrument.price)}
          </Text>
          <Text style={{ fontSize: 12, lineHeight: '16px', fontWeight: 600, color: isUp ? 'var(--ds-green-6)' : 'var(--ds-red-6)', fontFeatureSettings: "'lnum', 'tnum'" }}>
            {isUp ? '+' : ''}{formatPrice(Math.abs(instrument.change))} ({formatChange(instrument.changePercent)})
          </Text>
        </Box>
        <DSSparkline
          data={instrument.sparkline}
          width={77}
          height={33}
          strokeWidth={1.5}
        />
      </Group>
    </Box>
  );
}

export function MarketTrends() {
  const [category, setCategory] = useState<MarketCategory>('commodities');
  const instruments = useRealtimeMarketTrends(category);

  return (
    <Stack gap={8} style={{ width: '100%' }}>
      <DSSectionHeader>Тенденции рынка</DSSectionHeader>

      <DSTabs value={category} onChange={(v) => setCategory(v as MarketCategory)} size="xs">
        {(Object.entries(CATEGORY_LABELS) as [MarketCategory, string][]).map(([key, label]) => (
          <DSTab key={key} value={key}>{label}</DSTab>
        ))}
      </DSTabs>

      <Box style={{ display: 'flex', flexDirection: 'column' }}>
        {instruments.map((inst, i) => (
          <InstrumentRow key={inst.ticker} instrument={inst} isLast={i === instruments.length - 1} />
        ))}
      </Box>
    </Stack>
  );
}