import * as React from 'react';
import { useState, useEffect, useMemo } from 'react';
import { Box, Group, Stack, Text, Grid, GridCol, Paper, Loader, Popover, Anchor } from '@mantine/core';
import { Link } from 'react-router';
import { Header } from '../Header';
import { useIndicesList, useIndexData, useIndexComposition, useIndexDocuments, useIndexCalculated, IndexDocument, IndexTicker } from './api';
import { FileText, Download, ExternalLink, Calendar, ChevronRight } from 'lucide-react';
import {
    DSAreaChart,
    DSBadge,
    DSTabs,
    DSTab,
    DSSectionHeader,
    DSSegmentButton,
    DSSegment,
    DSCalendar,
    DSTable,
    DSCustomDropdown,
    DSCustomDropdownTrigger,
    DSCustomDropdownPanel,
    DSCustomDropdownHeader,
    DSCustomDropdownContent,
    DSCustomDropdownItem
} from '@denyaglav1/design-system';

// ── Описания методологий расчётных индексов ──────────────────────────────────

const METHODOLOGY: Record<string, { title: string; formula: string; components: string; rate: string; params: string; source: string }> = {
    SPBICAR: {
        title: 'SPBICAR — European Automakers Index',
        formula: 'I_t = I_{t-1} × [1 + Exp_{t-1} × (PP_t/PP_{t-1} − 1) − Exp_{t-1} × (R_{t-1} × DC/360)]',
        components: 'Mercedes-Benz (MBG.DE) · BMW (BMW.DE) · Volkswagen (VOW3.DE) · Porsche (PAH3.DE) — равные веса 25%',
        rate: '3М EURIBOR (ECB Data Portal)',
        params: 'Целевая волатильность: 10% / Макс. экспозиция: 150% / Окно волатильности: 20 дней',
        source: 'Методика СПБ Биржи, приказ №1376 от 21.09.2022',
    },
    SPBIDGT: {
        title: 'SPBIDGT — Digital Economy Index',
        formula: 'I_t = I_{t-1} × [1 + Exp_{t-1} × (PP_t/PP_{t-1} − 1) − Exp_{t-1} × ((R_{t-1} + 0.61%) × DC/365)]',
        components: 'Астра · Делимобиль · HeadHunter · МТС · Ozon · Positive Technologies · ТКС Холдинг · VK · Whoosh · Яндекс — равные веса 10%',
        rate: 'RUONIA (ЦБ РФ SOAP API) + 61 bps',
        params: 'Целевая волатильность: 15% / Макс. экспозиция: 100% / Окно волатильности: 20 дней',
        source: 'Методика СПБ Биржи, приказ №338/2 от 04.12.2025',
    },
};

function MethodologyPopover({ ticker }: { ticker: string }) {
    const m = METHODOLOGY[ticker];
    if (!m) return null;
    return (
        <Popover position="bottom-end" shadow="md" width={420}>
            <Popover.Target>
                <Group style={{
                    gap: 6, cursor: 'pointer', padding: '6px 12px', borderRadius: 6,
                    border: '1px solid var(--ds-border-primary)', backgroundColor: 'var(--ds-bg-primary)',
                    userSelect: 'none',
                }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--ds-text-gray-dark)" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="8" x2="12" y2="12" />
                        <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                    <Text style={{ fontSize: 13, color: 'var(--ds-text-primary)' }}>Методика</Text>
                </Group>
            </Popover.Target>
            <Popover.Dropdown style={{ backgroundColor: 'var(--ds-bg-secondary)', border: '1px solid var(--ds-border-primary)', borderRadius: 10, padding: 20 }}>
                <Stack gap={14}>
                    <Text style={{ fontSize: 14, fontWeight: 700, color: 'var(--ds-text-primary)' }}>{m.title}</Text>

                    <Stack gap={6}>
                        <Text style={{ fontSize: 11, fontWeight: 600, color: 'var(--ds-text-gray-dark)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Формула</Text>
                        <Box style={{ background: 'var(--ds-bg-primary)', borderRadius: 6, padding: '8px 12px', fontFamily: 'monospace', fontSize: 11, color: 'var(--ds-text-primary)', lineHeight: 1.6, wordBreak: 'break-word' }}>
                            {m.formula}
                        </Box>
                        <Text style={{ fontSize: 11, color: 'var(--ds-text-gray-dark)' }}>
                            PP — портфельная цена · Exp — экспозиция · R — ставка финансирования · DC — кол-во дней
                        </Text>
                    </Stack>

                    <Stack gap={4}>
                        <Text style={{ fontSize: 11, fontWeight: 600, color: 'var(--ds-text-gray-dark)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Состав</Text>
                        <Text style={{ fontSize: 12, color: 'var(--ds-text-primary)', lineHeight: 1.6 }}>{m.components}</Text>
                    </Stack>

                    <Stack gap={4}>
                        <Text style={{ fontSize: 11, fontWeight: 600, color: 'var(--ds-text-gray-dark)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Параметры</Text>
                        <Text style={{ fontSize: 12, color: 'var(--ds-text-primary)', lineHeight: 1.7 }}>
                            {m.params}<br />
                            Ставка финансирования: {m.rate}
                        </Text>
                    </Stack>

                    <Text style={{ fontSize: 11, color: 'var(--ds-text-gray-dark)', borderTop: '1px solid var(--ds-border-primary)', paddingTop: 10 }}>
                        {m.source}
                    </Text>
                </Stack>
            </Popover.Dropdown>
        </Popover>
    );
}

export function IndicesPage() {
    const { indices, loading: listLoading } = useIndicesList();
    const [selectedTicker, setSelectedTicker] = useState<string | null>(null);
    const [activeTab, setActiveTab] = useState<string>('composition');
    const [timeframe, setTimeframe] = useState<string>('1Y');
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const { data: indexData, loading: dataLoading } = useIndexData(selectedTicker, timeframe);
    const { composition, loading: compLoading } = useIndexComposition(selectedTicker);
    const { documents, loading: docsLoading } = useIndexDocuments(selectedTicker);

    // Dual-line chart: per-line visibility toggles
    const [showOfficial, setShowOfficial]     = useState(true);
    const [showCalculated, setShowCalculated] = useState(true);
    // Индексы с двойным графиком (биржа + расчёт)
    const CALC_INDICES = ['SPBICAR', 'SPBIDGT'];
    const isCalcIndex = selectedTicker !== null && CALC_INDICES.includes(selectedTicker);

    // Always fetch calculated data for indices with calc support
    const { data: calcData, loading: calcLoading } = useIndexCalculated(
        isCalcIndex ? selectedTicker : null,
        timeframe
    );

    const [countryOpen, setCountryOpen] = useState(false);
    const [indexOpen, setIndexOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const formatDate = (timestamp: string, tf: string) => {
        const date = new Date(timestamp);
        if (tf === '1D') {
            return date.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });
        }
        return date.toLocaleDateString('ru-RU', {
            day: '2-digit',
            month: '2-digit',
            ...(tf === '1Y' || tf === 'ALL' ? { year: '2-digit' } : {})
        });
    };

    // Auto-select first index
    useEffect(() => {
        if (!selectedTicker && indices.length > 0) {
            setSelectedTicker(indices[0].ticker);
        }
    }, [indices, selectedTicker]);

    // Merge official + calculated histories into one dataset keyed by date
    const mergedChartData = useMemo(() => {
        if (!isCalcIndex) return null;

        const map = new Map<string, { officialValue: number | null; calcValue: number | null }>();

        for (const h of indexData?.history ?? []) {
            const d = h.timestamp.split('T')[0];
            map.set(d, { officialValue: h.value ?? null, calcValue: null });
        }
        for (const c of calcData?.calculated ?? []) {
            const d = c.date.split('T')[0];
            const existing = map.get(d);
            if (existing) {
                existing.calcValue = c.value;
            } else {
                map.set(d, { officialValue: null, calcValue: c.value });
            }
        }

        return Array.from(map.entries())
            .sort(([a], [b]) => a.localeCompare(b))
            .map(([date, vals]) => ({ date, ...vals }));
    }, [isCalcIndex, indexData?.history, calcData?.calculated]);

    const stats = indexData ? [
        { label: 'Значение открытия', val: indexData.current?.open },
        { label: 'Предыдущее закрытие', val: indexData.current?.prev_close },
        { label: 'Макс значение за день', val: indexData.current?.day_max },
        { label: 'Мин значение за день', val: indexData.current?.day_min },
        { label: 'Макс значение за год', val: indexData.current?.year_max },
        { label: 'Мин значение за год', val: indexData.current?.year_min },
    ] : [];

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

            {/* Main Content Area */}
            <Box
                component="main"
                style={{
                    flex: 1,
                    padding: '24px',
                    overflow: 'hidden',
                    backgroundColor: 'var(--mantine-color-body)',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                {dataLoading && !indexData ? (
                    <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                        <Loader color="var(--ds-blue-6)" />
                    </Box>
                ) : indexData ? (
                    <Paper radius="md" style={{
                        border: '1px solid var(--ds-border-primary)',
                        backgroundColor: 'var(--ds-bg-secondary)',
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'row',
                        overflow: 'hidden'
                    }}>
                        {/* LEFT COLUMN: Header, Stats, Tabs */}
                        <Box style={{ padding: '24px', width: 450, flexShrink: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            {/* Header Controls (Dropdowns) */}
                            <Group style={{ gap: '16px', flexWrap: 'nowrap' }}>
                                <Box style={{ flex: 1 }}>
                                    <DSCustomDropdown isOpen={countryOpen} onOpenChange={setCountryOpen}>
                                        <DSCustomDropdownTrigger label="Страна:" disabled>Россия</DSCustomDropdownTrigger>
                                        <DSCustomDropdownPanel minWidth={200}>
                                            <DSCustomDropdownContent>
                                                <div style={{ padding: 4, display: 'flex', flexDirection: 'column' }}>
                                                    <DSCustomDropdownItem selected>Россия</DSCustomDropdownItem>
                                                </div>
                                            </DSCustomDropdownContent>
                                        </DSCustomDropdownPanel>
                                    </DSCustomDropdown>
                                </Box>

                                <Box style={{ flex: 1 }}>
                                    <DSCustomDropdown isOpen={indexOpen} onOpenChange={setIndexOpen}>
                                        <DSCustomDropdownTrigger label="Индекс:">
                                            {listLoading ? 'Загрузка...' : (selectedTicker || 'Выберите индекс')}
                                        </DSCustomDropdownTrigger>
                                        <DSCustomDropdownPanel minWidth={250}>
                                            <DSCustomDropdownHeader showSearch searchValue={searchQuery} onSearchChange={setSearchQuery} searchPlaceholder="Поиск индекса..." />
                                            <DSCustomDropdownContent>
                                                <div style={{ padding: 4, display: 'flex', flexDirection: 'column' }}>
                                                    {indices.filter((i: any) => i.ticker.toLowerCase().includes(searchQuery.toLowerCase())).map((idx: any) => (
                                                        <DSCustomDropdownItem
                                                            key={idx.ticker}
                                                            subtitle={idx.name.replace(idx.ticker, '').trim()}
                                                            selected={idx.ticker === selectedTicker}
                                                            onClick={() => { setSelectedTicker(idx.ticker); setIndexOpen(false); setSearchQuery(''); }}
                                                        >
                                                            {idx.ticker}
                                                        </DSCustomDropdownItem>
                                                    ))}
                                                </div>
                                            </DSCustomDropdownContent>
                                        </DSCustomDropdownPanel>
                                    </DSCustomDropdown>
                                </Box>
                            </Group>

                            {/* Title & Values */}
                            <Stack style={{ gap: '8px', flexShrink: 0 }}>
                                <DSSectionHeader>
                                    {indexData.ticker} {indexData.name}
                                </DSSectionHeader>

                                <Group align="baseline" style={{ gap: '8px' }}>
                                    <Text style={{ fontSize: 32, fontWeight: 700, fontFeatureSettings: "'lnum', 'tnum'", color: 'var(--ds-text-primary)' }}>
                                        {indexData.current?.value !== undefined && indexData.current?.value !== null
                                            ? indexData.current.value.toLocaleString('ru-RU', { minimumFractionDigits: 2 })
                                            : '—'}
                                    </Text>

                                    {indexData.current && indexData.current.absolute_change !== null ? (
                                        <Group gap={8} align="center">
                                            <Box style={{ color: indexData.current.absolute_change >= 0 ? 'var(--ds-green-6)' : 'var(--ds-red-6)' }}>
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                                                    {indexData.current.absolute_change >= 0
                                                        ? <path d="M12 4L4 20H20L12 4Z" fill="currentColor" />
                                                        : <path d="M12 20L20 4H4L12 20Z" fill="currentColor" />
                                                    }
                                                </svg>
                                            </Box>
                                            <Text style={{
                                                fontSize: 18,
                                                fontWeight: 600,
                                                color: indexData.current.absolute_change >= 0 ? 'var(--ds-green-6)' : 'var(--ds-red-6)',
                                                fontFeatureSettings: "'lnum', 'tnum'",
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: 8,
                                            }}>
                                                {Math.abs(indexData.current.absolute_change).toLocaleString('ru-RU', { minimumFractionDigits: 2 })}
                                                <DSBadge
                                                    view="secondary"
                                                    color={indexData.current.absolute_change >= 0 ? 'green' : 'red'}
                                                    size="m"
                                                >
                                                    {indexData.current.absolute_change >= 0 ? '+' : ''}
                                                    {indexData.current.percent_change !== null
                                                        ? indexData.current.percent_change.toLocaleString('ru-RU', { minimumFractionDigits: 2 })
                                                        : '0.00'} %
                                                </DSBadge>
                                            </Text>
                                        </Group>
                                    ) : null}
                                </Group>
                            </Stack>

                            {/* Stats Grid */}
                            <Paper radius="md" style={{ border: '1px solid var(--ds-border-primary)', backgroundColor: 'transparent', overflow: 'hidden', flexShrink: 0 }}>
                                <Grid gutter={0}>
                                    {stats.map((item, idx) => (
                                        <GridCol span={6} key={item.label} style={{
                                            borderRight: idx % 2 === 0 ? '1px solid var(--ds-border-primary)' : 'none',
                                            borderBottom: idx < 4 ? '1px solid var(--ds-border-primary)' : 'none',
                                            padding: '16px'
                                        }}>
                                            <Stack style={{ gap: '8px' }}>
                                                <Text style={{ fontSize: 13, color: 'var(--ds-text-gray-dark)', minHeight: 18 }}>{item.label}</Text>
                                                <Text style={{ fontSize: 16, fontWeight: 500, fontFeatureSettings: "'lnum', 'tnum'", color: 'var(--ds-text-primary)' }}>
                                                    {item.val !== undefined && item.val !== null
                                                        ? item.val.toLocaleString('ru-RU', { minimumFractionDigits: 2 })
                                                        : '—'}
                                                </Text>
                                            </Stack>
                                        </GridCol>
                                    ))}
                                </Grid>
                            </Paper>

                            {/* Tabs Area */}
                            <Box style={{ display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0 }}>
                                <Box style={{ flexShrink: 0, marginBottom: '16px' }}>
                                    <DSTabs value={activeTab} onChange={setActiveTab}>
                                        <DSTab value="composition">Состав индекса</DSTab>
                                        <DSTab value="docs">Документы</DSTab>
                                    </DSTabs>
                                </Box>

                                {activeTab === 'composition' && (
                                    <Box style={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column' }}>
                                        {compLoading ? (
                                            <Box style={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                                <Loader color="var(--ds-blue-6)" />
                                            </Box>
                                        ) : composition && composition.length > 0 ? (
                                            <Box style={{ flex: 1, overflowY: 'auto' }}>
                                                <DSTable
                                                    data={composition}
                                                    compact={true}
                                                    columns={[
                                                        {
                                                            id: 'ticker',
                                                            header: 'Тикер',
                                                            width: '80px',
                                                            render: (val: string) => (
                                                                <Anchor component={Link} to={`/companies/${val}`} style={{ color: 'var(--ds-blue-6)', fontWeight: 600 }}>
                                                                    {val}
                                                                </Anchor>
                                                            )
                                                        },
                                                        { id: 'asset_name', header: 'Название актива', flex: true, render: (val: string) => <Text truncate style={{ maxWidth: '100%', color: 'var(--ds-text-primary)' }}>{val}</Text> },
                                                        {
                                                            id: 'weight',
                                                            header: 'Вес (%)',
                                                            width: '100px',
                                                            align: 'right',
                                                            render: (val: number) => (
                                                                <Text style={{ fontFeatureSettings: "'lnum', 'tnum'", fontWeight: 500, color: 'var(--ds-text-primary)' }}>
                                                                    {(val * 100).toLocaleString('ru-RU', { minimumFractionDigits: 2 })}%
                                                                </Text>
                                                            )
                                                        }
                                                    ]}
                                                />
                                            </Box>
                                        ) : (
                                            <Box style={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                                <Text style={{ color: 'var(--ds-text-gray-dark)' }}>Состав индекса временно недоступен</Text>
                                            </Box>
                                        )}
                                    </Box>
                                )}

                                {activeTab === 'docs' && (
                                    <Box style={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column' }}>
                                        {docsLoading ? (
                                            <Box style={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                                <Loader color="var(--ds-blue-6)" />
                                            </Box>
                                        ) : documents && documents.length > 0 ? (
                                            <Box style={{ flex: 1, overflowY: 'auto', paddingRight: '8px' }}>
                                                <Grid gutter="md">
                                                    {documents.map((doc: IndexDocument) => (
                                                        <GridCol span={12} key={doc.id}>
                                                            <Paper
                                                                component="a"
                                                                href={doc.url}
                                                                target="_blank"
                                                                radius="md"
                                                                style={{
                                                                    border: '1px solid var(--ds-border-primary)',
                                                                    backgroundColor: 'var(--ds-bg-secondary)',
                                                                    padding: '16px',
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    gap: '16px',
                                                                    cursor: 'pointer',
                                                                    transition: 'all 0.2s ease',
                                                                    textDecoration: 'none',
                                                                    width: '100%',
                                                                }}
                                                                onMouseEnter={(e: any) => {
                                                                    e.currentTarget.style.borderColor = 'var(--ds-blue-6)';
                                                                    e.currentTarget.style.backgroundColor = 'rgba(0, 102, 255, 0.05)';
                                                                }}
                                                                onMouseLeave={(e: any) => {
                                                                    e.currentTarget.style.borderColor = 'var(--ds-border-primary)';
                                                                    e.currentTarget.style.backgroundColor = 'var(--ds-bg-secondary)';
                                                                }}
                                                            >
                                                                <Box style={{
                                                                    width: '40px',
                                                                    height: '40px',
                                                                    borderRadius: '8px',
                                                                    backgroundColor: 'rgba(0, 102, 255, 0.1)',
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    justifyContent: 'center',
                                                                    color: 'var(--ds-blue-6)',
                                                                    flexShrink: 0
                                                                }}>
                                                                    <FileText size={20} />
                                                                </Box>

                                                                <Stack style={{ gap: '4px', flex: 1 }}>
                                                                    <Text style={{
                                                                        fontSize: '14px',
                                                                        fontWeight: 600,
                                                                        color: 'var(--ds-text-primary)',
                                                                        lineHeight: 1.4
                                                                    }}>
                                                                        {doc.title}
                                                                    </Text>
                                                                    <Group style={{ gap: '12px' }}>
                                                                        <Group style={{ gap: '4px' }}>
                                                                            <Calendar size={12} style={{ color: 'var(--ds-text-gray-dark)' }} />
                                                                            <Text style={{ fontSize: '12px', color: 'var(--ds-text-gray-dark)' }}>
                                                                                {doc.publish_date ? new Date(doc.publish_date).toLocaleDateString('ru-RU') : '—'}
                                                                            </Text>
                                                                        </Group>
                                                                        <Text style={{ fontSize: '10px', color: 'var(--ds-blue-6)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                                                                            PDF
                                                                        </Text>
                                                                    </Group>
                                                                </Stack>

                                                                <Box style={{ color: 'var(--ds-text-gray-dim)', flexShrink: 0 }}>
                                                                    <Download size={18} />
                                                                </Box>
                                                            </Paper>
                                                        </GridCol>
                                                    ))}
                                                </Grid>
                                            </Box>
                                        ) : (
                                            <Box style={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                                <Text style={{ color: 'var(--ds-text-gray-dark)' }}>Нет доступных документов</Text>
                                            </Box>
                                        )}
                                    </Box>
                                )}
                            </Box>
                        </Box>

                        {/* Vertical Divider */}
                        <Box style={{ width: 1, backgroundColor: 'var(--ds-border-primary)' }} />

                        {/* RIGHT COLUMN: Chart */}
                        <Box style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0, height: '100%', gap: '16px' }}>
                            <Group justify="space-between" align="center" style={{ flexShrink: 0 }}>
                                <Group gap={12} align="center">
                                    <DSSegmentButton
                                        value={timeframe}
                                        onChange={setTimeframe}
                                        size="sm"
                                        variant="stroke"
                                        activeStyle="outline"
                                    >
                                        <DSSegment value="1D">День</DSSegment>
                                        <DSSegment value="1W">Неделя</DSSegment>
                                        <DSSegment value="1M">Месяц</DSSegment>
                                        <DSSegment value="1Y">Год</DSSegment>
                                        <DSSegment value="ALL">Все</DSSegment>
                                    </DSSegmentButton>

                                    {/* Выбрать диапазон — перенесён рядом с таймфреймами */}
                                    <Popover position="bottom-start" shadow="md">
                                        <Popover.Target>
                                            <Group style={{
                                                gap: '8px',
                                                cursor: 'pointer',
                                                padding: '6px 12px',
                                                borderRadius: 6,
                                                border: '1px solid var(--ds-border-primary)',
                                                backgroundColor: 'var(--ds-bg-primary)'
                                            }}>
                                                <Box style={{ color: 'var(--ds-text-gray-dark)' }}>
                                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                                        <line x1="16" y1="2" x2="16" y2="6" />
                                                        <line x1="8" y1="2" x2="8" y2="6" />
                                                        <line x1="3" y1="10" x2="21" y2="10" />
                                                    </svg>
                                                </Box>
                                                <Text style={{ fontSize: 13 }}>
                                                    {selectedDate ? selectedDate.toLocaleDateString('ru-RU') : 'Диапазон'}
                                                </Text>
                                            </Group>
                                        </Popover.Target>
                                        <Popover.Dropdown p={0} style={{ border: 'none', backgroundColor: 'transparent' }}>
                                            <DSCalendar
                                                value={selectedDate}
                                                onChange={(d) => { setSelectedDate(d); }}
                                            />
                                        </Popover.Dropdown>
                                    </Popover>

                                    {/* Line visibility toggles — only for calc indices */}
                                    {isCalcIndex && (
                                        <Group gap={2} style={{ border: '1px solid var(--ds-border-primary)', borderRadius: 8, padding: '2px', display: 'flex' }}>
                                            <Box
                                                onClick={() => setShowOfficial(v => !v)}
                                                style={{
                                                    cursor: 'pointer',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: 6,
                                                    padding: '4px 10px',
                                                    borderRadius: 6,
                                                    backgroundColor: showOfficial ? 'rgba(234,57,67,0.12)' : 'transparent',
                                                    opacity: showOfficial ? 1 : 0.45,
                                                    transition: 'all 150ms',
                                                    userSelect: 'none',
                                                }}
                                            >
                                                <Box style={{ width: 14, height: 3, borderRadius: 2, backgroundColor: '#EA3943' }} />
                                                <Text size="xs" style={{ color: 'var(--ds-text-primary)', fontWeight: 600, fontSize: 12 }}>Биржа</Text>
                                            </Box>
                                            <Box
                                                onClick={() => setShowCalculated(v => !v)}
                                                style={{
                                                    cursor: 'pointer',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: 6,
                                                    padding: '4px 10px',
                                                    borderRadius: 6,
                                                    backgroundColor: showCalculated ? 'rgba(41,112,255,0.12)' : 'transparent',
                                                    opacity: showCalculated ? 1 : 0.45,
                                                    transition: 'all 150ms',
                                                    userSelect: 'none',
                                                }}
                                            >
                                                <Box style={{ width: 14, height: 3, borderRadius: 2, backgroundColor: '#2970FF' }} />
                                                <Text size="xs" style={{ color: 'var(--ds-text-primary)', fontWeight: 600, fontSize: 12 }}>Расчёт</Text>
                                            </Box>
                                        </Group>
                                    )}
                                </Group>

                                {/* Методика расчёта — только для расчётных индексов */}
                                {isCalcIndex && <MethodologyPopover ticker={selectedTicker!} />}
                            </Group>

                            <Box style={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column' }}>
                                {(dataLoading || (isCalcIndex && calcLoading)) && !indexData ? (
                                    <Box style={{ display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                                        <Loader color="var(--ds-blue-6)" />
                                    </Box>
                                ) : isCalcIndex && mergedChartData && mergedChartData.length > 1 ? (
                                    // ── DUAL-LINE CHART (SPBICAR) ──
                                    (() => {
                                        const activeSeries: { dataKey: string; name: string; color: string; strokeWidth: number }[] = [];
                                        if (showOfficial)    activeSeries.push({ dataKey: 'officialValue', name: 'Биржа',   color: '#EA3943', strokeWidth: 2 });
                                        if (showCalculated)  activeSeries.push({ dataKey: 'calcValue',     name: 'Расчёт',  color: '#2970FF', strokeWidth: 2 });

                                        if (activeSeries.length === 0) return (
                                            <Box style={{ display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                                                <Text style={{ color: 'var(--ds-text-gray-dark)' }}>Выберите хотя бы одну линию</Text>
                                            </Box>
                                        );

                                        return (
                                            <DSAreaChart
                                                key={`dual-${selectedTicker}-${timeframe}-${mergedChartData.length}-${showOfficial}-${showCalculated}`}
                                                data={mergedChartData.map(d => ({
                                                    ...d,
                                                    formattedDate: formatDate(d.date, timeframe),
                                                }))}
                                                xKey="formattedDate"
                                                series={activeSeries}
                                                height="100%"
                                                yAxisPosition="right"
                                                yAxisLabelFormatter={(val: number) => Math.round(val).toString()}
                                            />
                                        );
                                    })()
                                ) : !isCalcIndex && indexData && indexData.history && indexData.history.length > 1 ? (
                                    // ── SINGLE-LINE CHART (other indices) ──
                                    <DSAreaChart
                                        key={`${selectedTicker}-${timeframe}-${indexData.history.length}`}
                                        data={indexData.history.map(h => ({
                                            ...h,
                                            value: h.value || 0,
                                            formattedDate: formatDate(h.timestamp, timeframe)
                                        }))}
                                        xKey="formattedDate"
                                        series={[
                                            { dataKey: 'value', name: indexData.ticker, color: '#EA3943', strokeWidth: 3 }
                                        ]}
                                        height="100%"
                                        yAxisPosition="right"
                                        yAxisMin={indexData.current?.year_min ? indexData.current.year_min * 0.998 : 'auto'}
                                        yAxisMax={indexData.current?.year_max ? indexData.current.year_max * 1.002 : 'auto'}
                                        referenceValue={indexData.current?.prev_close || undefined}
                                        yAxisLabelFormatter={(val: number) => Math.round(val).toString()}
                                    />
                                ) : (
                                    <Box style={{ display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '16px' }}>
                                        {dataLoading ? (
                                            <Loader color="var(--ds-blue-6)" />
                                        ) : (
                                            <>
                                                <Text style={{ color: 'var(--ds-text-gray-dark)' }}>
                                                    {indexData?.history?.length === 1 ? 'Недостаточно точек для построения тренда' : 'Нет данных для выбранного периода'}
                                                </Text>
                                                <Text size="xs" style={{ color: 'var(--ds-text-gray-dim)' }}>
                                                    Попробуйте выбрать другой таймфрейм
                                                </Text>
                                            </>
                                        )}
                                    </Box>
                                )}
                            </Box>
                        </Box>
                    </Paper>
                ) : (
                    <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', flex: 1 }}>
                        <Text style={{ color: 'var(--ds-text-gray-dark)' }}>Выберите индекс</Text>
                    </Box>
                )}
            </Box>
        </Box >
    );
}
