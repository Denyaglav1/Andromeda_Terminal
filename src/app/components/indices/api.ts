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

const API_BASE = 'http://127.0.0.1:8000/api';

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
        // Map timeframe to request params if needed
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

