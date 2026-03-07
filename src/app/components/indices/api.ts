import { useState, useEffect } from 'react';

export interface IndexData {
    ticker: string;
    name: string;
    current: {
        value: number;
        percent_change: number;
        absolute_change: number;
        open: number;
        prev_close: number;
        day_max: number;
        day_min: number;
        year_max: number | null;
        year_min: number | null;
        timestamp: string;
    } | null;
    history: {
        value: number;
        timestamp: string;
    }[];
}

export interface IndexConstituent {
    ticker: string;
    asset_name: string;
    isin: string;
    weight: number;
}

export interface IndexDocument {
    id: number;
    title: string;
    category: string | null;
    url: string;
    publish_date: string;
    start_date: string;
}


export interface IndexTicker {
    id: number;
    ticker: string;
    name: string;
}

export interface Bond {
    ticker: string;
    name: string;
    currency: string;
    volume: number;
    yield_val: number;
    duration: number;
    coupon: number;
    option?: string;
    maturity_date: string;
    placement_date?: string;
}

export interface Financial {
    period: string;
    revenue: number | null;
    ebitda: number | null;
    net_profit: number | null;
    fcf: number | null;
    net_debt: number | null;
}

export interface CompanyIndicators {
    pe: number | null;
    ev_ebitda: number | null;
    roe: number | null;
    net_debt_ebitda: number | null;
    div_yield: number | null;
    next_record_date: string | null;
    next_div_per_share: number | null;
    mkt_cap: number | null;
    free_float: number | null;
}

export interface CompanyData {
    ticker: string;
    name: string;
    full_name: string | null;
    description: string | null;
    sector: string | null;
    region: string | null;
    website: string | null;
    logo_bg: string | null;
    logo_color: string | null;
    logo_text: string | null;
    financials: Financial[];
    bonds: Bond[];
    indicators: CompanyIndicators | null;
}

const VITE_API_URL = import.meta.env.VITE_API_URL as string;
// Default to port 8000 for backend
let API_BASE = VITE_API_URL || 'http://localhost:8000/api';
if (VITE_API_URL && !VITE_API_URL.endsWith('/api')) {
    API_BASE = VITE_API_URL.endsWith('/') ? `${VITE_API_URL}api` : `${VITE_API_URL}/api`;
}

console.log('--- API CONFIG DEBUG ---');
console.log('VITE_API_URL from env:', VITE_API_URL);
console.log('Final API_BASE used:', API_BASE);
console.log('Build Mode:', import.meta.env.MODE);
console.log('------------------------');

export function useIndicesList() {
    const [indices, setIndices] = useState<IndexTicker[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${API_BASE}/indices`, { cache: 'no-store' })
            .then(res => res.json())
            .then(data => {
                setIndices(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Failed to fetch indices", err);
                setLoading(false);
            });
    }, []);

    return { indices, loading };
}

export function useIndexData(ticker: string | null, timeframe: string = '1D') {
    const [data, setData] = useState<IndexData | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!ticker) return;
        setLoading(true);
        fetch(`${API_BASE}/indices/${ticker}?timeframe=${timeframe}&limit=200`, { cache: 'no-store' })
            .then(res => res.json())
            .then(result => {
                if (!result.error) {
                    setData(result);
                }
                setLoading(false);
            })
            .catch(err => {
                console.error(`Failed to fetch data for ${ticker}`, err);
                setLoading(false);
            });
    }, [ticker, timeframe]);

    return { data, loading };
}

export function useIndexComposition(ticker: string | null) {
    const [composition, setComposition] = useState<IndexConstituent[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!ticker) return;
        setLoading(true);
        fetch(`${API_BASE}/indices/${ticker}/composition`, { cache: 'no-store' })
            .then(res => res.json())
            .then(data => {
                setComposition(data);
                setLoading(false);
            })
            .catch(err => {
                console.error(`Failed to fetch composition for ${ticker}`, err);
                setLoading(false);
            });
    }, [ticker]);

    return { composition, loading };
}

export function useIndexDocuments(ticker: string | null) {
    const [documents, setDocuments] = useState<IndexDocument[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!ticker) return;
        setLoading(true);
        fetch(`${API_BASE}/indices/${ticker}/documents`, { cache: 'no-store' })
            .then(res => res.json())
            .then(data => {
                setDocuments(data);
                setLoading(false);
            })
            .catch(err => {
                console.error(`Failed to fetch documents for ${ticker}`, err);
                setLoading(false);
            });
    }, [ticker]);

    return { documents, loading };
}

export async function getCompanyData(ticker: string): Promise<CompanyData | null> {
    try {
        const res = await fetch(`${API_BASE}/companies/${ticker}`, { cache: 'no-store' });
        if (res.ok) {
            return await res.json();
        }
    } catch (err) {
        console.error(`Failed to fetch company data for ${ticker}`, err);
    }
    return null;
}
