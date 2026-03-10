import React, { useEffect, useState, useMemo } from 'react';
import { useParams, useNavigate, Link } from 'react-router';
import {
    Box,
    Grid,
    Text,
    Title,
    Group,
    Stack,
    Divider,
    Anchor,
    Skeleton,
    Avatar,
    TextInput,
    ActionIcon,
    Tooltip
} from '@mantine/core';
import {
    Search,
    ChevronDown,
    ExternalLink,
    TrendingUp,
    ArrowUpRight,
    ArrowDownRight,
    MapPin,
    Share2,
    Bookmark
} from 'lucide-react';
import ReactECharts from 'echarts-for-react';

import { getCompanyData, type CompanyData, type Financial, type Bond } from '../indices/api';
import { DSTable, type DSTableColumn } from '@denyaglav1/design-system/components/ds-table';
import { DSButton } from '@denyaglav1/design-system/components/ds-button';
import { DSBadge } from '@denyaglav1/design-system/components/ds-badge';

import cl from './CompanyPage.module.css';

/** ═══════════════════════════════════════════════
 *  MOCK DATA FOR MISSING FIELDS
 *  ═══════════════════════════════════════════════ */

const MOCK_NEWS = [
    { time: '15:45', title: 'Мировое производство первичного алюминия в феврале выросло на 3,9% по сравнению с аналогич...', icon: <Share2 size={12} /> },
    { time: '21:03', title: 'Обзор рынка акций на 21.03.24', icon: <Share2 size={12} /> },
    { time: '21:03', title: 'Цена нефти Brent (+0,8%) закрепилась выше 82,50 долл./барр', icon: <ChevronDown size={12} /> }
];

const MOCK_OWNERSHIP = [
    { label: 'Free Float (78%)', value: 78, color: '#5A8CFF' },
    { label: 'ПИФы (1%)', value: 1, color: '#10B981' },
    { label: 'Прочие инвесторы (21%)', value: 21, color: '#F87D37' }
];

const MOCK_IMOEX_DEVIATION = [
    { val: 1.2, color: '#10B981' }, { val: -1.0, color: '#EF4444' }, { val: -1.1, color: '#EF4444' },
    { val: 0.6, color: '#10B981' }, { val: 2, color: '#10B981' }, { val: 5, color: '#10B981' },
    { val: 12, color: '#10B981' }, { val: -1.2, color: '#EF4444' }, { val: 10, color: '#10B981' },
    { val: 0.6, color: '#10B981' }, { val: 1, color: '#10B981' }, { val: 0.4, color: '#10B981' }
];

/** ═══════════════════════════════════════════════
 *  SUB-COMPONENTS
 *  ═══════════════════════════════════════════════ */

const SubHeader = ({ companyName }: { companyName: string }) => (
    <div className={cl.pageHeader}>
        <Stack gap={0}>
            <Group gap="xs">
                <Text size="xs" className={cl.muted} style={{ cursor: 'pointer' }}>{"< К индексам"}</Text>
            </Group>
            <Group gap="md">
                <Title order={1} className={cl.companyTitle}>{companyName}</Title>
                <div className={cl.badge}>Financials</div>
            </Group>
        </Stack>
        <Text className={cl.updateTime}>Обновлено: 08.03.2024, 02:46</Text>
    </div>
);

const GlobalHeader = () => (
    <div className={cl.globalNav}>
        <div className={cl.logoArea}>ANDROMEDA</div>
        <Group gap="xl" visibleFrom="md">
            <Group gap={4} className={`${cl.navItem} ${cl.navItemActive}`}>
                <Box w={12} h={12} style={{ border: '1px solid currentColor' }} />
                Сервисы
            </Group>
            <div className={cl.tickerBadge}>
                <Text size="xs" fw={700}>Ticker</Text>
                <Text size="xs" fw={700} c="#10b981">3 123,43 ₽ +0,65%</Text>
                <TrendingUp size={12} color="#10b981" />
            </div>
        </Group>
        <TextInput
            className={cl.searchBar}
            placeholder="Искать по инструментам, функциям, новостям..."
            size="xs"
            leftSection={<Search size={14} />}
        />
        <Group gap="md">
            <Group gap={4}>
                <ActionIcon variant="transparent" color="blue"><TrendingUp size={16} /></ActionIcon>
                <Text size="xs" fw={600} c="blue">ЭЙЛЕР</Text>
            </Group>
            <Group gap={4}>
                <ActionIcon variant="transparent" color="#5A8CFF"><ArrowUpRight size={16} /></ActionIcon>
                <Text size="xs" fw={600} style={{ color: '#5A8CFF' }}>GALA VIEW</Text>
            </Group>
            <Avatar size="sm" radius="xl" />
        </Group>
    </div>
);

/** ═══════════════════════════════════════════════
 *  MAIN PAGE COMPONENT
 *  ═══════════════════════════════════════════════ */

export function CompanyPage() {
    const { ticker } = useParams<{ ticker: string }>();
    const navigate = useNavigate();
    const [data, setData] = useState<CompanyData | null>(null);
    const [loading, setLoading] = useState(true);

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

    // Financials normalization
    const financialRows = useMemo(() => {
        if (!data?.financials) return [];
        const metrics = [
            { id: 'revenue', label: 'Выручка' },
            { id: 'ebitda', label: 'EBITDA' },
            { id: 'net_profit', label: 'Чистая прибыль скорр.' },
            { id: 'fcf', label: 'FCF' },
            { id: 'net_debt', label: 'Чистый долг' }
        ];
        return metrics.map(m => {
            const row: any = { id: m.id, metric: m.label };
            data.financials.forEach(f => row[f.period] = f[m.id as keyof Financial]);
            return row;
        });
    }, [data?.financials]);

    const financialColumns = useMemo(() => {
        if (!data?.financials) return [];
        const columns: DSTableColumn[] = [{ id: 'metric', header: 'Показатель', sticky: true, width: 220, flex: true }];
        data.financials.forEach(f => {
            columns.push({
                id: f.period, header: f.period, align: 'right', width: 100,
                render: (val, row) => (
                    <Text size="xs" fw={f.period.includes('Q') ? 700 : 400} c={f.period.includes('Q') ? '#10b981' : undefined}>
                        {val != null ? val.toLocaleString('ru-RU') : '-'}
                    </Text>
                )
            });
        });
        return columns;
    }, [data?.financials]);

    const bondColumns: DSTableColumn<Bond>[] = [
        { id: 'ticker', header: 'Тикер', sticky: true, width: 120, render: (val) => <Text size="xs" className={cl.linkStyle} fw={600}>{val}</Text> },
        { id: 'currency', header: 'Валюта', width: 80, align: 'center' },
        { id: 'volume', header: 'Объем', align: 'right', render: (val) => val.toLocaleString('ru-RU') },
        { id: 'yield_val', header: 'Дох-ть, %', align: 'right', render: (val) => <Text size="xs" c="#10b981">{val.toFixed(2).replace('.', ',')}</Text> },
        { id: 'current_yield', header: 'Текущая дох-ть, %', align: 'right', render: () => '97,15' },
        { id: 'duration', header: 'Дюрация', align: 'right', render: (val) => val.toFixed(2) },
        { id: 'coupon', header: 'Купон, %', align: 'right', render: (val) => val.toFixed(2) },
        { id: 'option', header: 'Опцион', align: 'center', render: (val) => val ? <DSBadge size="s" color="red" view="fill">{val}</DSBadge> : '-' },
        { id: 'maturity_date', header: 'Погашение', align: 'right', render: (val) => new Date(val).toLocaleDateString('ru-RU') },
        { id: 'placement_date', header: 'Размещение', align: 'right', render: (val) => val ? new Date(val).toLocaleDateString('ru-RU') : '-' }
    ];

    if (loading) return <Box p="xl"><Skeleton height={40} mb="md" /><Grid><Grid.Col span={8}><Skeleton height={400} /></Grid.Col><Grid.Col span={4}><Skeleton height={400} /></Grid.Col></Grid></Box>;
    if (!data) return <Box p="xl"><Title order={1}>404 - Company not found</Title></Box>;

    return (
        <Box className={cl.pageRoot}>
            <GlobalHeader />

            <div className={cl.contentArea}>
                <SubHeader companyName={data.full_name || data.name} />

                {/* Top Section: About */}
                <Box mb="md">
                    <Text className={cl.sectionSubTitle}>О компании</Text>
                    <Text size="xs" style={{ whiteSpace: 'pre-line', position: 'relative', overflow: 'hidden', maxHeight: 64 }}>
                        {data.description}
                        <Anchor className={cl.linkStyle} ml="xs">Читать полностью</Anchor>
                    </Text>
                    <Group gap="md" mt="xs">
                        <Group gap={4} className={cl.small}>
                            <MapPin size={12} color="#5A8CFF" />
                            <Anchor className={cl.linkStyle}>Россия</Anchor>
                        </Group>
                        <Group gap={4} className={cl.small}>
                            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#5A8CFF' }} />
                            <Anchor href={`https://${data.website}`} target="_blank" className={cl.linkStyle}>{data.website}</Anchor>
                        </Group>
                    </Group>
                </Box>

                <Grid gutter="md">
                    {/* Main Chart Column */}
                    <Grid.Col span={{ base: 12, lg: 9 }}>
                        <Stack gap="md">
                            {/* Chart Card */}
                            <div className={cl.card}>
                                <div className={cl.cardHeader}>
                                    <Group gap="xl">
                                        <Group gap={8}>
                                            <Text size="xs" fw={700}>SBER</Text>
                                            <div style={{ width: 24, height: 2, background: '#5A8CFF' }} />
                                            <Text size="xs" c="#8a94a6">747,5</Text>
                                            <Text size="xs" c="#5A8CFF">305,4</Text>
                                        </Group>
                                        <Group gap={8}>
                                            <Text size="xs" fw={700}>SBERP</Text>
                                            <div style={{ width: 24, height: 2, background: '#ef4444' }} />
                                            <Text size="xs" c="#8a94a6">305,1</Text>
                                        </Group>
                                    </Group>
                                    <ActionIcon variant="subtle" size="sm"><ChevronDown size={14} /></ActionIcon>
                                </div>
                                <div style={{ height: 400, position: 'relative' }}>
                                    <ReactECharts
                                        style={{ height: '100%' }}
                                        option={{
                                            backgroundColor: 'transparent',
                                            grid: { top: 20, left: 30, right: 60, bottom: 40 },
                                            xAxis: {
                                                type: 'category',
                                                data: ['15', '15', 'Сен', '15', 'Окт', '15', 'Ноя', '15', 'Дек', '15', '15', 'Янв', '15', 'Фев', '15', 'Мар', '15', '15', 'Апр', '15', 'Май', '15', 'Июн', '15', 'Июл', '15', 'Авг', '15', 'Сен', '15', 'Окт', '15', 'Ноя', '15', 'Дек', '15', '15'],
                                                axisLabel: { color: '#4b5563', fontSize: 10 },
                                                axisLine: { show: false }, axisTick: { show: false }
                                            },
                                            yAxis: [
                                                { type: 'value', position: 'right', axisLabel: { color: '#8a94a6', fontSize: 10 }, splitLine: { lineStyle: { color: '#1a1f2b' } } },
                                                { type: 'value', position: 'left', show: false }
                                            ],
                                            series: [
                                                { type: 'line', data: [80, 85, 82, 90, 88, 75, 78, 85, 95, 92, 88, 82, 80, 75, 70, 72, 68, 65, 62, 58, 60, 55, 50, 48, 52, 55, 58, 60, 55, 52, 50, 48, 45, 42, 40, 38], smooth: true, lineStyle: { color: '#5A8CFF', width: 1.5 }, symbol: 'none' },
                                                { type: 'line', data: [70, 72, 68, 75, 72, 60, 62, 70, 78, 75, 72, 65, 62, 58, 55, 57, 52, 50, 48, 45, 47, 42, 38, 35, 40, 42, 45, 47, 42, 40, 38, 35, 32, 30, 28, 25], smooth: true, lineStyle: { color: '#ef4444', width: 1.5 }, symbol: 'none' },
                                                { type: 'bar', data: [10, 15, 12, 18, 14, 25, 20, 18, 15, 12, 10, 12, 15, 20, 25, 22, 18, 20, 22, 25, 20, 18, 22, 25, 20, 15, 12, 10, 12, 15, 18, 20, 25, 22, 20, 18], barWidth: 4, itemStyle: { color: 'rgba(16, 185, 129, 0.4)' } }
                                            ]
                                        }}
                                    />
                                    {/* Overlay side table */}
                                    <div style={{ position: 'absolute', top: 20, right: 10, width: 140, background: 'rgba(12,16,23,0.8)', padding: 8, borderRadius: 4, border: '1px solid #1a1f2b' }}>
                                        <table className={cl.indicatorsTable}>
                                            <thead><tr><td className={cl.muted}>Показатели</td><td className={cl.muted}>SBER</td><td className={cl.muted}>SBERP</td></tr></thead>
                                            <tbody>
                                                <tr><td>Px/Chg 1D</td><td className={cl.indicatorChangeNeg}>-0,13%</td><td className={cl.indicatorChangeNeg}>-0,25%</td></tr>
                                                <tr><td>52 Wk H</td><td>392,77</td><td>326,78</td></tr>
                                                <tr><td>52 Wk L</td><td>275,76</td><td>273,97</td></tr>
                                                <tr><td>YTD Chg</td><td className={cl.indicatorChangeNeg}>-0,13%</td><td className={cl.indicatorChangeNeg}>-0,25%</td></tr>
                                                <tr><td>Mkt Cap</td><td>6,6Т</td><td>335,8М</td></tr>
                                            </tbody>
                                        </table>
                                        <div className={cl.sectionSubTitle}>Мультипликаторы</div>
                                        <table className={cl.indicatorsTable}>
                                            <tbody>
                                                <tr><td>P/E</td><td>23,76</td><td>23,76</td></tr>
                                                <tr><td>EV/EBITDA</td><td>23,76</td><td>23,76</td></tr>
                                                <tr><td>ROE</td><td>23,76</td><td>23,76</td></tr>
                                            </tbody>
                                        </table>
                                        <div className={cl.sectionSubTitle}>Дивиденды</div>
                                        <table className={cl.indicatorsTable}>
                                            <tbody>
                                                <tr><td>Yield, %</td><td>23,76</td><td>23,76</td></tr>
                                                <tr><td>Next Date</td><td>28.08.26</td><td>28.08.26</td></tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            {/* News and Publications */}
                            <div className={cl.card}>
                                <div className={cl.tabsList}>
                                    <div className={`${cl.tabItem} ${cl.tabItemActive}`}>Последние публикации</div>
                                    <div className={cl.tabItem}>Последние новости</div>
                                    <div className={cl.tabItem}>Ближайшие события</div>
                                    <Box style={{ flex: 1 }} />
                                    <div className={cl.tabItem} style={{ color: '#5A8CFF' }}>Показать все</div>
                                </div>
                                <div className={cl.cardBody}>
                                    {MOCK_NEWS.map((n, i) => (
                                        <Group key={i} justify="space-between" className={cl.newsItem}>
                                            <Text size="xs" fw={600} style={{ flex: 1 }}>{n.title}</Text>
                                            <Group gap="xs">
                                                <Text size="xs" className={cl.muted}>{n.time}</Text>
                                                {n.icon}
                                            </Group>
                                        </Group>
                                    ))}
                                </div>
                            </div>

                            {/* Bonds Table */}
                            <div className={cl.card}>
                                <div className={cl.cardHeader}>
                                    <Text className={cl.cardTitle}>Облигации</Text>
                                    <Anchor className={cl.linkStyle} size="xs">Подробнее (BS)</Anchor>
                                </div>
                                <DSTable columns={bondColumns} data={data.bonds} compact />
                                <div style={{ padding: '8px 16px', borderTop: '1px solid #1a1f2b' }}>
                                    <Anchor className={cl.linkStyle} size="xs">Показать все (10)</Anchor>
                                </div>
                            </div>

                            {/* Financials Table */}
                            <div className={cl.card}>
                                <div className={cl.cardHeader}>
                                    <Text className={cl.cardTitle}>Финансы <span className={cl.muted}>$ млн</span></Text>
                                    <Anchor className={cl.linkStyle} size="xs">Подробнее (FA)</Anchor>
                                </div>
                                <DSTable columns={financialColumns} data={financialRows} compact stickyFirstColumn />
                            </div>
                        </Stack>
                    </Grid.Col>

                    {/* Sidebar Column */}
                    <Grid.Col span={{ base: 12, lg: 3 }}>
                        <Stack gap="md">
                            {/* Ownership Structure */}
                            <div className={cl.card}>
                                <div className={cl.cardHeader}>
                                    <Text className={cl.cardTitle}>Структура владения</Text>
                                    <Text size="xs" className={cl.linkStyle}>Параметры</Text>
                                </div>
                                <div className={cl.cardBody}>
                                    <div className={cl.ownershipBar}>
                                        {MOCK_OWNERSHIP.map((o, i) => (
                                            <div key={i} className={cl.ownershipPart} style={{ width: `${o.value}%`, background: o.color }}>
                                                {o.value}%
                                            </div>
                                        ))}
                                    </div>
                                    <Stack gap={4}>
                                        {MOCK_OWNERSHIP.map((o, i) => (
                                            <Group key={i} gap={8}>
                                                <div style={{ width: 8, height: 8, background: o.color, borderRadius: 2 }} />
                                                <Text size="xs" className={cl.muted}>{o.label}</Text>
                                            </Group>
                                        ))}
                                    </Stack>
                                </div>
                            </div>

                            {/* ПИФы (funds) share */}
                            <div className={cl.card}>
                                <div className={cl.cardHeader}>
                                    <Text className={cl.cardTitle}>Доля владения ПИФов</Text>
                                </div>
                                <div className={cl.cardBody} style={{ height: 160 }}>
                                    <ReactECharts
                                        style={{ height: '100%' }}
                                        option={{
                                            backgroundColor: 'transparent',
                                            grid: { top: 10, left: 10, right: 10, bottom: 20 },
                                            xAxis: { show: false },
                                            yAxis: { show: false },
                                            series: [{
                                                type: 'bar',
                                                data: [120, 200, 150, 80, 70, 110, 130, 180, 220, 140, 160, 210],
                                                itemStyle: { color: '#10B981', borderRadius: [2, 2, 0, 0] }
                                            }]
                                        }}
                                    />
                                </div>
                            </div>

                            {/* IMOEX Deviation */}
                            <div className={cl.card}>
                                <div className={cl.cardHeader}>
                                    <Text className={cl.cardTitle}>Отклонение от индекса IMOEX</Text>
                                    <Text size="xs" className={cl.linkStyle}>Подробнее</Text>
                                </div>
                                <div className={cl.cardBody}>
                                    <Group gap={4} mb="md" wrap="nowrap">
                                        {MOCK_IMOEX_DEVIATION.map((d, i) => (
                                            <div key={i} style={{ flex: 1, height: 18, background: d.color, borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 8, fontWeight: 700 }}>
                                                {d.val > 0 ? `+${d.val}` : d.val}
                                            </div>
                                        ))}
                                    </Group>
                                    <div style={{ height: 80 }}>
                                        <ReactECharts
                                            style={{ height: '100%' }}
                                            option={{
                                                backgroundColor: 'transparent',
                                                grid: { top: 0, left: 0, right: 0, bottom: 0 },
                                                xAxis: { show: false },
                                                yAxis: { show: false },
                                                series: [{
                                                    type: 'bar',
                                                    data: [5, -4, -3, 6, 8, 4, 1, -2, 4, 3, 2, 5],
                                                    itemStyle: { color: '#5A8CFF' }
                                                }]
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Dashboards */}
                            <div className={cl.card}>
                                <div className={cl.cardHeader}><Text className={cl.cardTitle}>Дашборды</Text></div>
                                <div className={cl.cardBody}>
                                    <Group justify="space-between">
                                        <Text size="xs" className={cl.linkStyle}>SBER</Text>
                                        <Text size="xs" className={cl.muted}>© эйлер</Text>
                                    </Group>
                                </div>
                            </div>
                        </Stack>
                    </Grid.Col>
                </Grid>
            </div>

            {/* Footer */}
            <div className={cl.footer}>
                <Text>© Andromeda 2024. Авторские права защищены.</Text>
                <div className={cl.footerLinks}>
                    <Anchor className={cl.muted}>support@euler.team</Anchor>
                    <Anchor className={cl.muted}>Политика конфиденциальности</Anchor>
                </div>
            </div>
        </Box>
    );
}
