import React from 'react';
import { Box } from '@mantine/core';
import { Header } from './Header';

/* Home page components */
import { TickerTape } from './home/TickerTape';
import { UpcomingEvents } from './home/UpcomingEvents';
import { MarketTrends } from './home/MarketTrends';
import { GainersLosers } from './home/GainersLosers';
import { EventCardsCarousel } from './home/EventCards';
import { NewsFeed } from './home/NewsFeed';
import { VideoMaterials } from './home/VideoMaterials';
import { MarketReviews } from './home/MarketReviews';

/* Data hooks */
import { useRealtimeTickers } from './home/data/useRealtimePrices';

/* ═══════════════════════════════════════════════════════
   HomePage — Andromeda-style financial dashboard (Mantine)
   3-column layout with real-time data
   ═══════════════════════════════════════════════════════ */

export function HomePage() {
  const tickers = useRealtimeTickers();

  return (
    <Box
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'var(--mantine-color-body)',
        color: 'var(--mantine-color-text)',
        overflow: 'hidden',
      }}
    >
      <Header />
      <TickerTape tickers={tickers} />

      {/* 3-column body */}
      <Box style={{ display: 'flex', flex: 1, overflow: 'hidden', minHeight: 0 }}>
        {/* Left sidebar */}
        <Box
          component="aside"
          style={{
            width: 359,
            flexShrink: 0,
            overflowY: 'auto',
            padding: '16px 16px 24px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: 24,
          }}
        >
          <UpcomingEvents />
          <MarketTrends />
          <GainersLosers />
        </Box>

        {/* Center column */}
        <Box
          component="main"
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
            minWidth: 0,
            overflow: 'hidden',
          }}
        >
          <EventCardsCarousel />
          <NewsFeed />
        </Box>

        {/* Right sidebar */}
        <Box
          component="aside"
          style={{
            width: 359,
            flexShrink: 0,
            overflowY: 'auto',
            padding: '16px 24px 24px 16px',
            display: 'flex',
            flexDirection: 'column',
            gap: 24,
          }}
        >
          <VideoMaterials />
          <MarketReviews />
        </Box>
      </Box>
    </Box>
  );
}