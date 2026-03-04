/* ═══════════════════════════════════════
   useRealtimePrices — Real-time price simulation
   Updates every 1 second with random walk
   ═══════════════════════════════════════ */

import { useState, useEffect, useRef, useCallback } from 'react';
import type { TickerQuote, MarketInstrument, MarketCategory } from './home-types';
import { TICKER_TAPE_DATA, MARKET_TRENDS } from './home-market-db';

/** Gaussian random via Box-Muller */
function gaussianRandom(): number {
  let u = 0, v = 0;
  while (u === 0) u = Math.random();
  while (v === 0) v = Math.random();
  return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
}

/** Apply random walk to a price */
function tickPrice(price: number, volatility: number): number {
  // Annualized vol → per-second vol (assuming ~252 days, ~6.5h, ~3600s per hour)
  const factor = volatility * gaussianRandom() * 0.0005;
  return Math.max(price * (1 + factor), 0.001);
}

/* ─── Ticker Tape Hook ─── */

export function useRealtimeTickers() {
  const [tickers, setTickers] = useState<TickerQuote[]>(() =>
    TICKER_TAPE_DATA.map(t => ({ ...t }))
  );
  const tickersRef = useRef(tickers);
  const basePricesRef = useRef(TICKER_TAPE_DATA.map(t => t.price));

  useEffect(() => {
    const interval = setInterval(() => {
      const updated = tickersRef.current.map((t, i) => {
        const basePrice = basePricesRef.current[i];
        const vol = 0.3; // 30% annualized
        const newPrice = tickPrice(t.price, vol);
        const changePercent = ((newPrice - basePrice) / basePrice) * 100;
        return { ...t, price: newPrice, changePercent };
      });
      tickersRef.current = updated;
      setTickers(updated);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return tickers;
}

/* ─── Market Trends Hook ─── */

export function useRealtimeMarketTrends(category: MarketCategory) {
  const [instruments, setInstruments] = useState<MarketInstrument[]>(() =>
    MARKET_TRENDS[category].map(m => ({
      ...m,
      sparkline: [...m.sparkline],
    }))
  );
  const instrumentsRef = useRef(instruments);
  const basePricesRef = useRef(MARKET_TRENDS[category].map(m => m.price));

  // Reset when category changes
  useEffect(() => {
    const fresh = MARKET_TRENDS[category].map(m => ({
      ...m,
      sparkline: [...m.sparkline],
    }));
    instrumentsRef.current = fresh;
    basePricesRef.current = MARKET_TRENDS[category].map(m => m.price);
    setInstruments(fresh);
  }, [category]);

  useEffect(() => {
    const interval = setInterval(() => {
      const updated = instrumentsRef.current.map((m, i) => {
        const newPrice = tickPrice(m.price, m.volatility);
        const basePrice = basePricesRef.current[i];
        const change = newPrice - basePrice;
        const changePercent = (change / basePrice) * 100;

        // Shift sparkline: drop first, push new
        const sparkline = [...m.sparkline.slice(1), newPrice];

        return {
          ...m,
          price: newPrice,
          change,
          changePercent,
          sparkline,
        };
      });
      instrumentsRef.current = updated;
      setInstruments(updated);
    }, 1000);

    return () => clearInterval(interval);
  }, [category]);

  return instruments;
}

/* ─── Format helpers ─── */

export function formatPrice(price: number): string {
  if (price >= 10000) return price.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  if (price >= 100) return price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  if (price >= 1) return price.toFixed(2);
  return price.toFixed(4);
}

export function formatPriceRub(price: number): string {
  return formatPrice(price) + '\u20BD';
}

export function formatChange(value: number): string {
  const sign = value >= 0 ? '+' : '';
  return `${sign}${value.toFixed(2)}%`;
}
