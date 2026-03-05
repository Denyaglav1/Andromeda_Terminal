import React, { useState } from 'react';
import '@denyaglav1/design-system/styles.css';
import {
    DSButton,
    DSInput,
    DSCheckbox,
    DSSwitch,
    DSSelect,
    DSBadge,
    DSLineChart,
    DSBarChart,
    DSPieChart,
    type DSSelectOption,
} from '@denyaglav1/design-system';

/* ── Mock data ── */

const countryOptions: DSSelectOption[] = [
    { value: 'ru', label: 'Россия' },
    { value: 'us', label: 'США' },
    { value: 'gb', label: 'Великобритания' },
    { value: 'de', label: 'Германия' },
    { value: 'jp', label: 'Япония' },
];

const accountOptions: DSSelectOption[] = [
    { value: 'personal', label: 'Физическое лицо' },
    { value: 'business', label: 'Юридическое лицо' },
    { value: 'broker', label: 'Брокерский счёт' },
];

const experienceOptions: DSSelectOption[] = [
    { value: 'beginner', label: 'Начинающий (< 1 года)' },
    { value: 'intermediate', label: 'Средний (1-3 года)' },
    { value: 'advanced', label: 'Продвинутый (3-5 лет)' },
    { value: 'expert', label: 'Эксперт (5+ лет)' },
];

const portfolioData = [
    { month: 'Янв', value: 120, benchmark: 100 },
    { month: 'Фев', value: 135, benchmark: 105 },
    { month: 'Мар', value: 125, benchmark: 110 },
    { month: 'Апр', value: 160, benchmark: 108 },
    { month: 'Май', value: 180, benchmark: 115 },
    { month: 'Июн', value: 175, benchmark: 120 },
    { month: 'Июл', value: 210, benchmark: 125 },
    { month: 'Авг', value: 225, benchmark: 130 },
];

const sectorData = [
    { month: 'Янв', tech: 40, finance: 25, energy: 15, health: 20 },
    { month: 'Фев', tech: 45, finance: 22, energy: 18, health: 15 },
    { month: 'Мар', tech: 38, finance: 30, energy: 12, health: 20 },
    { month: 'Апр', tech: 52, finance: 28, energy: 10, health: 10 },
    { month: 'Май', tech: 48, finance: 32, energy: 8, health: 12 },
    { month: 'Июн', tech: 55, finance: 25, energy: 10, health: 10 },
];

const allocationData = [
    { name: 'Акции', value: 45 },
    { name: 'Облигации', value: 25 },
    { name: 'Фонды', value: 15 },
    { name: 'Крипто', value: 10 },
    { name: 'Кэш', value: 5 },
];

const holdings = [
    { ticker: 'AAPL', name: 'Apple Inc.', price: 189.84, change: 2.34, pct: 1.25, shares: 50, value: 9492 },
    { ticker: 'GOOGL', name: 'Alphabet', price: 141.80, change: -0.56, pct: -0.39, shares: 30, value: 4254 },
    { ticker: 'TSLA', name: 'Tesla Inc.', price: 248.42, change: 5.67, pct: 2.33, shares: 20, value: 4968 },
    { ticker: 'MSFT', name: 'Microsoft', price: 378.91, change: 1.22, pct: 0.32, shares: 25, value: 9473 },
    { ticker: 'NVDA', name: 'NVIDIA', price: 875.28, change: 12.45, pct: 1.44, shares: 10, value: 8753 },
    { ticker: 'AMZN', name: 'Amazon', price: 178.25, change: -1.30, pct: -0.72, shares: 35, value: 6239 },
];

/* ═══════════ App ═══════════ */

export function App() {
    const [step, setStep] = useState(0);
    return (
        <div style={{
            minHeight: '100vh', backgroundColor: '#131722',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: "'Inter', sans-serif", padding: 20,
        }}>
            {step === 0 && <StepLogin onNext={() => setStep(1)} />}
            {step === 1 && <StepProfile onNext={() => setStep(2)} onBack={() => setStep(0)} />}
            {step === 2 && <StepDashboard onBack={() => setStep(1)} />}
        </div>
    );
}

/* ═══════════ Step 1: Login ═══════════ */

function StepLogin({ onNext }: { onNext: () => void }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

    const validate = () => {
        const e: typeof errors = {};
        if (!email.trim()) e.email = 'Введите email';
        else if (!email.includes('@')) e.email = 'Некорректный email';
        if (!password.trim()) e.password = 'Введите пароль';
        else if (password.length < 4) e.password = 'Минимум 4 символа';
        setErrors(e);
        return Object.keys(e).length === 0;
    };

    const handleLogin = () => {
        if (!validate()) return;
        setLoading(true);
        setTimeout(() => { setLoading(false); onNext(); }, 1000);
    };

    return (
        <Card width={420}>
            <Logo />
            <p style={{ fontSize: 14, color: '#677C9C', margin: '4px 0 24px', textAlign: 'center' }}>
                Войдите в вашу учётную запись
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <DSInput
                    label="Email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={e => { setEmail(e.target.value); setErrors(p => ({ ...p, email: undefined })); }}
                    error={errors.email}
                />
                <DSInput
                    label="Пароль"
                    placeholder="••••••••"
                    type="password"
                    value={password}
                    onChange={e => { setPassword(e.target.value); setErrors(p => ({ ...p, password: undefined })); }}
                    error={errors.password}
                />
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <DSCheckbox checked={remember} onChange={() => setRemember(!remember)} label="Запомнить" />
                    <a href="#" style={{ fontSize: 12, color: '#5A8CFF', textDecoration: 'none' }}>Забыли пароль?</a>
                </div>
                <DSButton variant="primary" size="md" loading={loading} onClick={handleLogin} style={{ width: '100%' }}>
                    Войти
                </DSButton>
            </div>
            <Divider />
            <div style={{ display: 'flex', gap: 8 }}>
                <DSButton variant="outline" onClick={() => alert('Google OAuth')} style={{ flex: 1 }}>Google</DSButton>
                <DSButton variant="outline" onClick={() => alert('GitHub OAuth')} style={{ flex: 1 }}>GitHub</DSButton>
            </div>
            <StepIndicator current={0} total={3} />
        </Card>
    );
}

/* ═══════════ Step 2: Profile ═══════════ */

function StepProfile({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [country, setCountry] = useState('');
    const [accountType, setAccountType] = useState('');
    const [experience, setExperience] = useState('');
    const [newsletter, setNewsletter] = useState(true);
    const [terms, setTerms] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});

    const validate = () => {
        const e: Record<string, string> = {};
        if (!firstName.trim()) e.firstName = 'Обязательное поле';
        if (!lastName.trim()) e.lastName = 'Обязательное поле';
        if (!country) e.country = 'Выберите страну';
        if (!accountType) e.accountType = 'Выберите тип';
        if (!terms) e.terms = 'Необходимо принять';
        setErrors(e);
        return Object.keys(e).length === 0;
    };

    const handleContinue = () => {
        if (!validate()) return;
        onNext();
    };

    return (
        <Card width={520}>
            <Logo />
            <p style={{ fontSize: 14, color: '#677C9C', margin: '4px 0 24px', textAlign: 'center' }}>
                Заполните профиль инвестора
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                    <DSInput label="Имя *" placeholder="Иван" value={firstName}
                        onChange={e => { setFirstName(e.target.value); setErrors(p => ({ ...p, firstName: '' })); }}
                        error={errors.firstName} />
                    <DSInput label="Фамилия *" placeholder="Иванов" value={lastName}
                        onChange={e => { setLastName(e.target.value); setErrors(p => ({ ...p, lastName: '' })); }}
                        error={errors.lastName} />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                    <DSSelect label="Страна *" placeholder="Выберите..." options={countryOptions}
                        value={country} onChange={v => { setCountry(v); setErrors(p => ({ ...p, country: '' })); }}
                        error={errors.country} />
                    <DSSelect label="Тип аккаунта *" placeholder="Выберите..." options={accountOptions}
                        value={accountType} onChange={v => { setAccountType(v); setErrors(p => ({ ...p, accountType: '' })); }}
                        error={errors.accountType} />
                </div>

                <DSSelect label="Опыт инвестирования" placeholder="Выберите уровень..." options={experienceOptions}
                    value={experience} onChange={setExperience} />

                {/* Pricing table */}
                <div>
                    <label style={{ fontSize: 12, color: '#E0E1E2', fontWeight: 400, display: 'block', marginBottom: 8 }}>Доступные тарифы</label>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 12 }}>
                        <thead>
                            <tr style={{ borderBottom: '1px solid #2A2E39' }}>
                                <Th>Тариф</Th><Th>Стоимость</Th><Th>Возможности</Th><Th align="right">Статус</Th>
                            </tr>
                        </thead>
                        <tbody>
                            <TRow>
                                <Td><span style={{ color: '#5A8CFF', fontWeight: 500 }}>Starter</span></Td>
                                <Td>Бесплатно</Td>
                                <Td>5 портфелей, базовая аналитика</Td>
                                <Td align="right"><DSBadge color="green" size="xs">Доступен</DSBadge></Td>
                            </TRow>
                            <TRow>
                                <Td><span style={{ color: '#9A8CFF', fontWeight: 500 }}>Pro</span></Td>
                                <Td>$29/мес</Td>
                                <Td>Безлимит, продвинутая аналитика</Td>
                                <Td align="right"><DSBadge color="blue" size="xs">Популярный</DSBadge></Td>
                            </TRow>
                            <TRow>
                                <Td><span style={{ color: '#F6C825', fontWeight: 500 }}>Enterprise</span></Td>
                                <Td>$99/мес</Td>
                                <Td>API, приоритетная поддержка</Td>
                                <Td align="right"><DSBadge color="purple" size="xs" view="secondary">Премиум</DSBadge></Td>
                            </TRow>
                        </tbody>
                    </table>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 4 }}>
                    <div>
                        <DSCheckbox checked={terms} onChange={() => { setTerms(!terms); setErrors(p => ({ ...p, terms: '' })); }}
                            label="Я принимаю условия использования *" />
                        {errors.terms && <span style={{ fontSize: 10, color: '#EA3943', marginLeft: 28 }}>{errors.terms}</span>}
                    </div>
                    <DSSwitch checked={newsletter} onChange={() => setNewsletter(!newsletter)} label="Получать рыночную аналитику" />
                </div>

                <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
                    <DSButton variant="ghost" onClick={onBack} style={{ flex: 1 }}>Назад</DSButton>
                    <DSButton variant="primary" onClick={handleContinue} style={{ flex: 2 }}>Продолжить</DSButton>
                </div>
            </div>

            <StepIndicator current={1} total={3} />
        </Card>
    );
}

/* ═══════════ Step 3: Dashboard ═══════════ */

function StepDashboard({ onBack }: { onBack: () => void }) {
    return (
        <Card width={800}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
                <div>
                    <h2 style={{ fontSize: 20, fontWeight: 600, color: '#E0E1E2', margin: 0 }}>Добро пожаловать!</h2>
                    <p style={{ fontSize: 13, color: '#677C9C', margin: '4px 0 0' }}>Ваш демо-портфель готов</p>
                </div>
                <div style={{ display: 'flex', gap: 8 }}>
                    <DSBadge color="green" variant="pill">+12.4%</DSBadge>
                    <DSBadge color="blue" variant="pill">$43,178</DSBadge>
                </div>
            </div>

            {/* Charts */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 20 }}>
                <ChartCard title="Динамика портфеля">
                    <DSLineChart data={portfolioData} xKey="month" series={[
                        { dataKey: 'value', name: 'Портфель', color: '#5A8CFF' },
                        { dataKey: 'benchmark', name: 'Бенчмарк', color: '#677C9C', strokeWidth: 1 },
                    ]} height={180} />
                </ChartCard>
                <ChartCard title="Доходность по секторам">
                    <DSBarChart data={sectorData} xKey="month" series={[
                        { dataKey: 'tech', name: 'Технологии', color: '#5A8CFF' },
                        { dataKey: 'finance', name: 'Финансы', color: '#1FC989' },
                        { dataKey: 'energy', name: 'Энергетика', color: '#F87D37' },
                        { dataKey: 'health', name: 'Здравоохр.', color: '#9A8CFF' },
                    ]} height={180} stacked />
                </ChartCard>
            </div>

            {/* Pie + Table */}
            <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: 16, marginBottom: 20 }}>
                <ChartCard title="Аллокация">
                    <DSPieChart data={allocationData} height={160} innerRadius={50} />
                </ChartCard>
                <div style={{ backgroundColor: '#191F2D', borderRadius: 12, border: '1px solid #2A2E39', padding: '12px 0' }}>
                    <div style={{ padding: '0 12px 8px', fontSize: 13, fontWeight: 600, color: '#E0E1E2' }}>Активы</div>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 12 }}>
                        <thead>
                            <tr style={{ borderBottom: '1px solid #2A2E39', borderTop: '1px solid #2A2E39' }}>
                                <Th>Тикер</Th><Th>Название</Th><Th align="right">Цена</Th><Th align="right">Изм.</Th><Th align="right">Кол-во</Th><Th align="right">Стоимость</Th>
                            </tr>
                        </thead>
                        <tbody>
                            {holdings.map(h => (
                                <TRow key={h.ticker}>
                                    <Td><span style={{ color: '#5A8CFF', fontWeight: 500 }}>{h.ticker}</span></Td>
                                    <Td><span style={{ color: '#C4C7C9' }}>{h.name}</span></Td>
                                    <Td align="right">${h.price.toFixed(2)}</Td>
                                    <Td align="right">
                                        <span style={{ color: h.pct >= 0 ? '#1FC989' : '#EA3943' }}>
                                            {h.pct >= 0 ? '+' : ''}{h.pct.toFixed(2)}%
                                        </span>
                                    </Td>
                                    <Td align="right">{h.shares}</Td>
                                    <Td align="right"><span style={{ fontWeight: 500 }}>${h.value.toLocaleString()}</span></Td>
                                </TRow>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Buttons */}
            <div style={{ display: 'flex', gap: 8 }}>
                <DSButton variant="ghost" onClick={onBack}>Назад</DSButton>
                <div style={{ flex: 1 }} />
                <DSButton variant="secondary" onClick={() => alert('Настройки портфеля')}>Настроить портфель</DSButton>
                <DSButton variant="primary" onClick={() => alert('Добро пожаловать в Andromeda!')}>Перейти в платформу</DSButton>
            </div>

            <StepIndicator current={2} total={3} />
        </Card>
    );
}

/* ── Shared ── */

function Card({ children, width }: { children: React.ReactNode; width: number }) {
    return (
        <div style={{
            width, maxWidth: '95vw', padding: 32, borderRadius: 16,
            backgroundColor: '#191F2D', border: '1px solid #2A2E39',
            boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
        }}>
            {children}
        </div>
    );
}

function Logo() {
    return (
        <div style={{ textAlign: 'center', marginBottom: 8 }}>
            <div style={{
                width: 40, height: 40, borderRadius: 10,
                background: 'linear-gradient(135deg, #5A8CFF, #9A8CFF)',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12,
            }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
            <h1 style={{ fontSize: 22, fontWeight: 600, color: '#E0E1E2', margin: 0 }}>Andromeda</h1>
        </div>
    );
}

function ChartCard({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div style={{ backgroundColor: '#191F2D', borderRadius: 12, border: '1px solid #2A2E39', padding: 12 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: '#E0E1E2', marginBottom: 8 }}>{title}</div>
            {children}
        </div>
    );
}

function Divider() {
    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '20px 0' }}>
            <div style={{ flex: 1, height: 1, backgroundColor: '#2A2E39' }} />
            <span style={{ fontSize: 12, color: '#677C9C' }}>или</span>
            <div style={{ flex: 1, height: 1, backgroundColor: '#2A2E39' }} />
        </div>
    );
}

function StepIndicator({ current, total }: { current: number; total: number }) {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6, marginTop: 24 }}>
            {Array.from({ length: total }, (_, i) => (
                <div key={i} style={{
                    width: i === current ? 24 : 8, height: 8, borderRadius: 4,
                    backgroundColor: i === current ? '#5A8CFF' : '#2A2E39',
                    transition: 'all 300ms ease',
                }} />
            ))}
        </div>
    );
}

function Th({ children, align }: { children: React.ReactNode; align?: string }) {
    return (
        <th style={{
            padding: '6px 12px', textAlign: (align || 'left') as any,
            fontSize: 11, fontWeight: 600, color: '#677C9C',
            textTransform: 'uppercase', letterSpacing: '0.03em',
        }}>
            {children}
        </th>
    );
}

function Td({ children, align }: { children: React.ReactNode; align?: string }) {
    return (
        <td style={{
            padding: '8px 12px', textAlign: (align || 'left') as any,
            color: '#E0E1E2', fontFeatureSettings: "'lnum', 'tnum'",
        }}>
            {children}
        </td>
    );
}

function TRow({ children }: { children: React.ReactNode }) {
    return <tr style={{ borderBottom: '1px solid #2A2E39' }}>{children}</tr>;
}
