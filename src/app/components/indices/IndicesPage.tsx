import * as React from 'react';
import { useState, useEffect, useMemo } from 'react';
import { Box, Group, Stack, Text, Grid, GridCol, Paper, Loader, Popover } from '@mantine/core';
import { Header } from '../Header';
import { useIndicesList, useIndexData, useIndexComposition, useIndexDocuments, IndexDocument, IndexTicker } from './api';
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

export function IndicesPage() {
    const { indices, loading: listLoading } = useIndicesList();
    const [selectedTicker, setSelectedTicker] = useState<string | null>(null);
    const [activeTab, setActiveTab] = useState<string>('composition');
    const [timeframe, setTimeframe] = useState<string>('1Y');
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const { data: indexData, loading: dataLoading } = useIndexData(selectedTicker, timeframe);
    const { composition, loading: compLoading } = useIndexComposition(selectedTicker);
    const { documents, loading: docsLoading } = useIndexDocuments(selectedTicker);

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

                                    {indexData.current && indexData.current.absolute_change !== null && (
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
                                    )}
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
                                                    {item.val !== undefined && item.val !== null ? item.val.toLocaleString('ru-RU', { minimumFractionDigits: 2 }) : '—'}
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
                                                        { id: 'ticker', header: 'Тикер', width: '80px', render: (val: string) => <Text style={{ color: 'var(--ds-blue-5)' }}>{val}</Text> },
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

                                <Popover position="bottom-end" shadow="md">
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
                                                {selectedDate ? selectedDate.toLocaleDateString('ru-RU') : 'Выбрать диапазон'}
                                            </Text>
                                        </Group>
                                    </Popover.Target>
                                    <Popover.Dropdown p={0} style={{ border: 'none', backgroundColor: 'transparent' }}>
                                        <DSCalendar
                                            value={selectedDate}
                                            onChange={(d) => {
                                                setSelectedDate(d);
                                            }}
                                        />
                                    </Popover.Dropdown>
                                </Popover>
                            </Group>

                            <Box style={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column' }}>
                                {!dataLoading && indexData && indexData.history && indexData.history.length > 1 ? (
                                    <DSAreaChart
                                        key={`${selectedTicker} -${timeframe} -${indexData.history.length} `}
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
