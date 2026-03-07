import React, { useEffect, useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router';
import {
    Box,
    Container,
    Grid,
    Text,
    Title,
    Group,
    Stack,
    Paper,
    Divider,
    Anchor,
    SimpleGrid,
    Skeleton
} from '@mantine/core';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import ReactECharts from 'echarts-for-react';

import { getCompanyData, type CompanyData, type Financial, type Bond } from '../indices/api';
import { DSTable, type DSTableColumn } from '@denyaglav1/design-system/components/ds-table';
import { DSButton } from '@denyaglav1/design-system/components/ds-button';
import { DSBadge } from '@denyaglav1/design-system/components/ds-badge';
import { DSTabs, DSTab } from '@denyaglav1/design-system/components/ds-tabs';

import cl from './CompanyPage.module.css';

export function CompanyPage() {
    const { ticker } = useParams<{ ticker: string }>();
    const navigate = useNavigate();
    const [data, setData] = useState<CompanyData | null>(null);
    const [loading, setLoading] = useState(true);
    const [chartTimeframe, setChartTimeframe] = useState('1Y');

    useEffect(() => {
        if (ticker) {
            setLoading(true);
            getCompanyData(ticker).then(res => {
                setData(res);
                setLoading(false);
            }).catch(err => {
                console.error('Failed to fetch company data:', err);
                setLoading(false);
            });
        }
    }, [ticker]);

    // Pivot financials for DSTable: rows = metrics, columns = periods
    const financialRows = useMemo(() => {
        if (!data?.financials || data.financials.length === 0) return [];

        const metrics = [
            { id: 'revenue', label: 'Выручка' },
            { id: 'ebitda', label: 'EBITDA' },
            { id: 'net_profit', label: 'Чистая прибыль' },
            { id: 'fcf', label: 'FCF' },
            { id: 'net_debt', label: 'Чистый долг' }
        ];

        return metrics.map(m => {
            const row: any = { id: m.id, metric: m.label };
            data.financials.forEach(f => {
                row[f.period] = f[m.id as keyof Financial];
            });
            return row;
        });
    }, [data?.financials]);

    const financialColumns = useMemo(() => {
        if (!data?.financials || data.financials.length === 0) return [];

        const columns: DSTableColumn[] = [
            { id: 'metric', header: 'Показатель', sticky: true, width: 200, flex: true }
        ];

        // Add periods as columns
        data.financials.forEach(f => {
            columns.push({
                id: f.period,
                header: f.period,
                align: 'right',
                width: 120,
                render: (val) => val != null ? val.toLocaleString('ru-RU') : '-'
            });
        });

        return columns;
    }, [data?.financials]);

    const bondColumns: DSTableColumn<Bond>[] = [
        {
            id: 'ticker',
            header: 'Тикер',
            sticky: true,
            width: 150,
            render: (val) => <Text fw={600} style={{ color: 'var(--ds-blue-6)' }}>{val}</Text>
        },
        {
            id: 'volume',
            header: 'Объем',
            align: 'right',
            render: (val, row) => `${val.toLocaleString('ru-RU')} ${row.currency}`
        },
        {
            id: 'yield_val',
            header: 'Доходность',
            align: 'right',
            render: (val) => <Text style={{ color: 'var(--ds-green-5)' }}>{val}%</Text>
        },
        { id: 'coupon', header: 'Купон, %', align: 'right' },
        {
            id: 'maturity_date',
            header: 'Погашение',
            align: 'right',
            render: (val) => new Date(val).toLocaleDateString('ru-RU')
        }
    ];

    if (loading) {
        return (
            <Box className={cl.pageRoot}>
                <Container size="xl">
                    <Skeleton height={40} width={200} mb="xl" />
                    <Skeleton height={100} mb="xl" />
                    <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
                        <Skeleton height={400} />
                        <Skeleton height={400} />
                    </SimpleGrid>
                </Container>
            </Box>
        );
    }

    if (!data) {
        return (
            <Box className={cl.pageRoot}>
                <Container size="xl">
                    <DSButton onClick={() => navigate('/indices')} variant="secondary" leftIcon={<ArrowLeft size={16} />}>
                        Назад к индексам
                    </DSButton>
                    <Text color="red" mt="xl">Компания {ticker} не найдена или произошла ошибка загрузки.</Text>
                </Container>
            </Box>
        );
    }

    const currentPrice = 278.45; // TODO: Real-time price from API
    const priceChange = 1.45;

    return (
        <Box className={cl.pageRoot}>
            <Container size="xl">
                {/* Header Section */}
                <Group justify="space-between" className={cl.headerSection} align="flex-start">
                    <Stack gap={4}>
                        <Group gap="xs">
                            <DSButton
                                onClick={() => navigate('/indices')}
                                variant="ghost"
                                size="sm"
                                className={cl.backButton}
                                style={{ padding: 0, height: 'auto' }}
                                leftIcon={<ArrowLeft size={14} />}
                            >
                                <Text size="xs">К индексам</Text>
                            </DSButton>
                        </Group>
                        <Title order={1} style={{ fontSize: '32px', fontWeight: 700 }}>
                            {data.full_name || data.name} <span className={cl.tickerLabel}>{data.ticker}</span>
                        </Title>
                        <Group gap="xs">
                            <Text size="sm" style={{ color: 'var(--ds-text-secondary)' }}>{data.sector || 'Сектор не указан'}</Text>
                            <Text size="sm" style={{ color: 'var(--ds-text-secondary)' }}>•</Text>
                            <Anchor href={data.website || '#'} target="_blank" size="sm" style={{ color: 'var(--ds-blue-6)' }}>
                                {data.website?.replace('https://', '').replace('http://', '').replace(/\/$/, '')} <ExternalLink size={12} style={{ verticalAlign: 'middle', marginLeft: 4 }} />
                            </Anchor>
                        </Group>
                    </Stack>

                    <Paper p="md" className={cl.pricePaper}>
                        <Group gap="xl">
                            <Stack gap={0}>
                                <Text className={cl.labelUpper}>Текущая цена</Text>
                                <Group gap="xs">
                                    <Text size="xl" fw={700}>{currentPrice.toLocaleString('ru-RU')} ₽</Text>
                                    <DSBadge color="green" size="s" variant="pill">+{priceChange}%</DSBadge>
                                </Group>
                            </Stack>
                            <Divider orientation="vertical" className={cl.divider} />
                            <Stack gap={0}>
                                <Text className={cl.labelUpper}>Капитализация</Text>
                                <Text size="lg" fw={600}>
                                    {data.indicators?.mkt_cap ? (data.indicators.mkt_cap / 1000000).toLocaleString('ru-RU', { maximumFractionDigits: 1 }) + ' Трлн ₽' : '-'}
                                </Text>
                            </Stack>
                        </Group>
                    </Paper>
                </Group>

                <Grid gutter="xl">
                    {/* Main Content Area */}
                    <Grid.Col span={{ base: 12, md: 8, lg: 9 }}>
                        <Stack gap="xl">
                            {/* About Section */}
                            <Box className={cl.card} p="xl">
                                <Text className={cl.sectionTitle}>О компании</Text>
                                <Text className={cl.infoText}>
                                    {data.description || 'Описание отсутствует.'}
                                </Text>
                            </Box>

                            {/* Chart Section */}
                            <Box className={cl.card} p="xl">
                                <Group justify="space-between" mb="lg">
                                    <Text className={cl.sectionTitle} mb={0}>График котировок</Text>
                                    <DSTabs
                                        value={chartTimeframe}
                                        onChange={setChartTimeframe}
                                        size="xs"
                                    >
                                        <DSTab value="1M">1M</DSTab>
                                        <DSTab value="3M">3M</DSTab>
                                        <DSTab value="6M">6M</DSTab>
                                        <DSTab value="1Y">1Y</DSTab>
                                        <DSTab value="ALL">MAX</DSTab>
                                    </DSTabs>
                                </Group>
                                <ReactECharts
                                    option={{
                                        backgroundColor: 'transparent',
                                        tooltip: {
                                            trigger: 'axis',
                                            backgroundColor: '#1a1d26',
                                            borderColor: '#333',
                                            textStyle: { color: '#fff' }
                                        },
                                        grid: { top: 20, left: 40, right: 20, bottom: 40 },
                                        xAxis: {
                                            type: 'category',
                                            data: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
                                            axisLine: { lineStyle: { color: '#333' } },
                                            axisLabel: { color: '#aaa', fontSize: 10 }
                                        },
                                        yAxis: {
                                            type: 'value',
                                            axisLine: { show: false },
                                            splitLine: { lineStyle: { color: '#222' } },
                                            axisLabel: { color: '#aaa', fontSize: 10 }
                                        },
                                        series: [{
                                            data: [240, 255, 248, 265, 270, 262, 280, 275, 285, 278, 282, 278],
                                            type: 'line',
                                            smooth: true,
                                            symbol: 'none',
                                            lineStyle: { width: 3, color: 'var(--ds-blue-6)' },
                                            areaStyle: {
                                                color: {
                                                    type: 'linear', x: 0, y: 0, x2: 0, y2: 1,
                                                    colorStops: [{ offset: 0, color: 'rgba(90, 140, 255, 0.2)' }, { offset: 1, color: 'transparent' }]
                                                }
                                            }
                                        }]
                                    }}
                                    style={{ height: '350px' }}
                                />
                            </Box>

                            {/* Financials Section */}
                            <Box className={cl.card} p="xl">
                                <Group justify="space-between" mb="lg">
                                    <Text className={cl.sectionTitle} mb={0}>
                                        Финансы <Text component="span" size="sm" fw={400} style={{ color: 'var(--ds-text-secondary)' }}>(₽ млн)</Text>
                                    </Text>
                                    <Anchor href="#" size="sm" style={{ color: 'var(--ds-blue-6)' }}>Подробнее (FA)</Anchor>
                                </Group>
                                <Box className={cl.tableContainer}>
                                    <DSTable
                                        columns={financialColumns}
                                        data={financialRows}
                                        compact
                                        stickyFirstColumn
                                    />
                                </Box>
                            </Box>

                            {/* Bonds Section */}
                            <Box className={cl.card} p="xl">
                                <Text className={cl.sectionTitle}>Облигации</Text>
                                <Box className={cl.tableContainer}>
                                    <DSTable
                                        columns={bondColumns}
                                        data={data.bonds || []}
                                        compact
                                    />
                                </Box>
                            </Box>
                        </Stack>
                    </Grid.Col>

                    {/* Sidebar Section */}
                    <Grid.Col span={{ base: 12, md: 4, lg: 3 }}>
                        <Stack gap="xl">
                            {/* Key Indicators */}
                            <Box className={cl.card} p="xl">
                                <Text className={cl.sectionTitle}>Показатели</Text>
                                <Stack gap={0}>
                                    {[
                                        { label: 'P/E', value: data.indicators?.pe, unit: 'x' },
                                        { label: 'EV/EBITDA', value: data.indicators?.ev_ebitda, unit: 'x' },
                                        { label: 'ROE', value: data.indicators?.roe, unit: '%' },
                                        { label: 'Чистый долг/EBITDA', value: data.indicators?.net_debt_ebitda, unit: 'x' },
                                        { label: 'Див. доходность', value: data.indicators?.div_yield, unit: '%' },
                                        { label: 'Free Float', value: data.indicators?.free_float, unit: '%' },
                                    ].map((ind, i) => (
                                        <Box key={i} className={cl.indicatorRow}>
                                            <Text className={cl.indicatorName}>{ind.label}</Text>
                                            <Text className={cl.indicatorValue}>
                                                {ind.value != null ? ind.value.toLocaleString('ru-RU', { maximumFractionDigits: 2 }) : '-'}
                                                {ind.unit && ` ${ind.unit}`}
                                            </Text>
                                        </Box>
                                    ))}
                                </Stack>
                            </Box>

                            {/* Forecast Card */}
                            <Box className={cx(cl.card, cl.forecastCard)} p="xl">
                                <Text className={cl.sectionTitle} mb="xs" style={{ fontSize: '16px' }}>Аналитический прогноз</Text>
                                <Text style={{ fontSize: '10px', color: 'var(--ds-text-secondary)' }} mb="lg">Консенсус на основе 12 оценок</Text>

                                <Stack gap="md">
                                    <Group justify="space-between">
                                        <Text size="sm">Рекомендация</Text>
                                        <DSBadge color="green" size="m" variant="pill" view="fill">ПОКУПАТЬ</DSBadge>
                                    </Group>
                                    <Group justify="space-between">
                                        <Text size="sm">Целевая цена</Text>
                                        <Text size="lg" fw={700}>315.00 ₽</Text>
                                    </Group>
                                    <Text size="xs" style={{ color: 'var(--ds-green-5)', fontWeight: 600 }}>+13.12% к текущей цене</Text>
                                </Stack>
                            </Box>
                        </Stack>
                    </Grid.Col>
                </Grid>
            </Container>
        </Box>
    );
}

const cx = (...args: any[]) => args.filter(Boolean).join(' ');
