import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router';
import { Box, Group, Text, UnstyledButton, Paper, useMantineColorScheme } from '@mantine/core';
import svgPaths from '../../imports/svg-yl7s4hfuce';

/* ═══════════════════════════════════════════════════════
   Header — Global app header (Mantine)
   Logo → home, dropdown «Сервисы» menu, search bar, tools
   ═══════════════════════════════════════════════════════ */

const NAV_ITEMS = [
  {
    id: 'home',
    label: 'Главная',
    description: 'Лента новостей, котировки, обзоры рынков',
    href: '/home',
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <rect x="1" y="2" width="12" height="1.5" rx="0.75" fill="currentColor" opacity="0.4" />
        <rect x="1" y="5" width="5" height="7.5" rx="0.8" fill="currentColor" opacity="0.6" />
        <rect x="8" y="5" width="5" height="3.5" rx="0.8" fill="currentColor" opacity="0.8" />
        <rect x="8" y="9.5" width="5" height="3" rx="0.8" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: 'fa',
    label: 'FA — Financial Analysis',
    description: 'Консенсус, Live Models, мультипликаторы',
    href: '/fa',
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <rect x="1" y="6" width="2.5" height="7" rx="0.8" fill="currentColor" opacity="0.5" />
        <rect x="4.5" y="4" width="2.5" height="9" rx="0.8" fill="currentColor" opacity="0.7" />
        <rect x="8" y="2.5" width="2.5" height="10.5" rx="0.8" fill="currentColor" opacity="0.85" />
        <rect x="11.5" y="1" width="2.5" height="12" rx="0.8" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: 'chart-builder',
    label: 'Конструктор графиков',
    description: '20 типов визуализаций, SVG-экспорт',
    href: '/chart-builder',
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M1 13V5.5L4 3L7 6L10 1L13 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M1 13H13" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'components',
    label: 'Библиотека компонентов',
    description: 'UI-компоненты, токены, документация',
    href: '/components',
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <rect x="1" y="1" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.2" />
        <rect x="8" y="1" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.2" />
        <rect x="1" y="8" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.2" />
        <rect x="8" y="8" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    ),
  },
];

const s = {
  bg: 'var(--ds-bg-primary)',
  bgAlt: 'var(--ds-bg-secondary)',
  border: 'var(--ds-border-primary)',
  textPrimary: 'var(--mantine-color-text)',
  textSubtle: 'var(--ds-text-gray-dark)',
  blue6: 'var(--ds-blue-6)',
  blue5: 'var(--ds-blue-5)',
  blue8: 'var(--ds-blue-8)',
  green6: 'var(--ds-green-6)',
} as const;

const OTHER_SERVICES = [
  { code: 'CS',   label: 'Скринер облигаций' },
  { code: 'ES',   label: 'Скринер акций' },
  { code: 'QB',   label: 'Маркетмейкеры', hasSubmenu: true },
  { code: 'NEWS', label: 'Мировые новости' },
  { code: 'EVT',  label: 'Календарь событий' },
  { code: 'ECON', label: 'Показатели по странам' },
  { code: 'ENRG', label: 'Нефтегазовая статистика' },
];

const BOND_RESEARCH = [
  { code: 'BS',     label: 'Скринер облигаций' },
  { code: 'HS',     label: 'Анализ спреда' },
  { code: 'RBCALC', label: 'RGBI калькулятор' },
  { code: 'BN',     label: 'Новые выпуски' },
  { code: 'BD',     label: 'Динамика облигаций' },
  { code: 'BTOP',   label: 'Лидеры роста и снижения' },
  { code: 'BFR',    label: 'Первичный рынок ОФЗ' },
  { code: 'BINS',   label: 'Кредитные спреды' },
];

function ServiceMenuItem({
  code, label, hasSubmenu = false, onClick,
}: {
  code: string; label: string; hasSubmenu?: boolean; onClick?: () => void;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <UnstyledButton
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      style={{
        width: '100%',
        padding: '7px 10px',
        borderRadius: 6,
        backgroundColor: hovered ? 'var(--ds-control-hover)' : 'transparent',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        textAlign: 'left',
        transition: 'background-color 100ms ease',
        cursor: 'pointer',
      }}
    >
      <Box>
        <Text style={{ fontSize: 13, fontWeight: 600, lineHeight: '17px', color: 'var(--mantine-color-text)' }}>
          {code}
        </Text>
        <Text style={{ fontSize: 11, lineHeight: '14px', color: s.textSubtle, marginTop: 1 }}>
          {label}
        </Text>
      </Box>
      {hasSubmenu && (
        <svg width="5" height="9" viewBox="0 0 5 9" fill="none" style={{ flexShrink: 0, marginLeft: 4 }}>
          <path d="M1 1L4 4.5L1 8" stroke="var(--ds-text-gray-dark)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </UnstyledButton>
  );
}

function NavMenuItem({ item, onClick }: { item: typeof NAV_ITEMS[0]; onClick: () => void }) {
  const [hovered, setHovered] = useState(false);
  return (
    <UnstyledButton
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      style={{
        width: '100%',
        padding: '7px 10px',
        borderRadius: 6,
        backgroundColor: hovered ? 'var(--ds-control-hover)' : 'transparent',
        display: 'flex',
        alignItems: 'flex-start',
        gap: 10,
        textAlign: 'left',
        transition: 'background-color 100ms ease',
        cursor: 'pointer',
      }}
    >
      <Box style={{ marginTop: 2, color: s.blue5, flexShrink: 0 }}>{item.icon}</Box>
      <Box>
        <Text style={{ fontSize: 13, fontWeight: 600, lineHeight: '17px', color: 'var(--mantine-color-text)' }}>
          {item.label}
        </Text>
        <Text style={{ fontSize: 11, lineHeight: '14px', color: s.textSubtle, marginTop: 1 }}>
          {item.description}
        </Text>
      </Box>
    </UnstyledButton>
  );
}

function ServicesDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [open]);

  const sectionLabel: React.CSSProperties = {
    fontSize: 10,
    fontWeight: 600,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: s.textSubtle,
    padding: '10px 10px 6px',
    display: 'block',
  };

  const columnDivider: React.CSSProperties = {
    width: 1,
    backgroundColor: s.border,
    alignSelf: 'stretch',
    flexShrink: 0,
  };

  return (
    <Box ref={ref} style={{ position: 'relative' }}>
      {/* Trigger button */}
      <UnstyledButton
        onClick={() => setOpen(o => !o)}
        style={{
          backgroundColor: open ? 'var(--ds-dark-4)' : s.bgAlt,
          display: 'flex',
          gap: 8,
          height: 40,
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0 16px',
          borderRadius: 8,
          flexShrink: 0,
          transition: 'background-color 150ms ease',
          outline: open ? `1px solid rgba(90,140,255,0.3)` : 'none',
        }}
      >
        <Box style={{ display: 'flex', flexWrap: 'wrap', gap: 1.78, width: 14.2, height: 14.2, alignItems: 'flex-start' }}>
          {[0, 1, 2, 3].map(i => (
            <Box
              key={i}
              style={{
                borderRadius: 2,
                width: 6.2,
                height: 6.2,
                backgroundColor: i === 0 && open ? s.blue6 : i === 0 ? s.blue8 : s.blue6,
              }}
            />
          ))}
        </Box>
        <Text style={{ fontSize: 12, lineHeight: '14.2px', fontWeight: 600, color: s.textSubtle }}>
          Сервисы
        </Text>
        <svg
          width="10" height="10" viewBox="0 0 10 10" fill="none"
          style={{ transition: 'transform 200ms ease', transform: open ? 'rotate(180deg)' : 'none' }}
        >
          <path d="M2.5 3.75L5 6.25L7.5 3.75" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </UnstyledButton>

      {/* Dropdown panel */}
      {open && (
        <Paper
          radius="md"
          shadow="xl"
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            marginTop: 6,
            zIndex: 100,
            backgroundColor: s.bgAlt,
            border: `1px solid ${s.border}`,
            overflow: 'hidden',
          }}
        >
          {/* Three columns */}
          <Box style={{ display: 'flex', alignItems: 'stretch' }}>
            {/* Column 1 — Прочие сервисы */}
            <Box style={{ width: 210, padding: '0 6px 8px' }}>
              <Text style={sectionLabel}>Прочие сервисы</Text>
              {OTHER_SERVICES.map(item => (
                <ServiceMenuItem
                  key={item.code}
                  code={item.code}
                  label={item.label}
                  hasSubmenu={'hasSubmenu' in item ? item.hasSubmenu : false}
                />
              ))}
            </Box>

            <Box style={columnDivider} />

            {/* Column 2 — Bond Research */}
            <Box style={{ width: 210, padding: '0 6px 8px' }}>
              <Text style={sectionLabel}>Bond Research</Text>
              {BOND_RESEARCH.map(item => (
                <ServiceMenuItem
                  key={item.code}
                  code={item.code}
                  label={item.label}
                />
              ))}
            </Box>

            <Box style={columnDivider} />

            {/* Column 3 — Навигация (existing NAV_ITEMS) */}
            <Box style={{ width: 230, padding: '0 6px 8px' }}>
              <Text style={sectionLabel}>Навигация</Text>
              {NAV_ITEMS.map(item => (
                <NavMenuItem
                  key={item.id}
                  item={item}
                  onClick={() => { setOpen(false); navigate(item.href); }}
                />
              ))}
            </Box>
          </Box>
        </Paper>
      )}
    </Box>
  );
}

export function Header() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  const iconBtnStyle: React.CSSProperties = {
    backgroundColor: s.bgAlt,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    width: 40,
    height: 40,
    flexShrink: 0,
    transition: 'background-color 150ms ease',
  };

  return (
    <Box
      component="header"
      style={{
        backgroundColor: s.bg,
        display: 'flex',
        gap: 16,
        alignItems: 'center',
        padding: '8px 24px',
        position: 'relative',
        width: '100%',
        borderBottom: `1px solid ${s.border}`,
      }}
    >
      {/* Logo block */}
      <Box
        component={Link}
        to="/"
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: 40,
          alignItems: 'flex-start',
          justifyContent: 'center',
          flexShrink: 0,
          minWidth: 136,
          textDecoration: 'none',
          transition: 'opacity 200ms ease',
        }}
      >
        <Box style={{ flexShrink: 0, width: 136, height: 14 }}>
          <svg
            style={{ display: 'block', width: 136, height: 14 }}
            fill="none"
            preserveAspectRatio="xMinYMid meet"
            viewBox="0 0 135.285 10.1281"
          >
            <path d={svgPaths.p405c000} fill="currentColor" style={{ color: s.textPrimary }} />
          </svg>
        </Box>
        <Text style={{ fontSize: 12, lineHeight: '16px', fontWeight: 600, color: s.textSubtle }}>
          Описание компании
        </Text>
      </Box>

      {/* Menu section */}
      <Group gap={8} style={{ flex: 1, minWidth: 0, flexWrap: 'nowrap' }}>
        <ServicesDropdown />

        {/* AMT search bar */}
        <Box
          style={{
            backgroundColor: s.bgAlt,
            display: 'flex',
            height: 40,
            alignItems: 'center',
            padding: '0 8px',
            borderRadius: 8,
            flex: 1,
            minWidth: 0,
            overflow: 'hidden',
          }}
        >
          <Group gap={8} style={{ flexWrap: 'nowrap', flex: 1, minWidth: 0, overflow: 'hidden' }}>
            <Group gap={8}>
              {/* Ticker badge */}
              <Group
                gap={4}
                style={{
                  backgroundColor: s.bg,
                  height: 24,
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '6px 4px',
                  borderRadius: 4,
                  flexShrink: 0,
                }}
              >
                <Text style={{ fontSize: 14, lineHeight: '20px', color: s.textPrimary, fontFeatureSettings: "'lnum', 'tnum'" }}>
                  Ticker
                </Text>
                <Group gap={4} style={{ fontSize: 12, lineHeight: '16px', color: s.green6 }}>
                  <span style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>3 123,43₽</span>
                  <span style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>+0,65%</span>
                </Group>
                {/* Mini sparkline */}
                <Box style={{ height: 15, width: 43, overflow: 'hidden', flexShrink: 0 }}>
                  <svg style={{ display: 'block', width: '100%', height: '100%' }} fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 39.5 10">
                    <mask height="10" id="mask-header-chart" maskUnits="userSpaceOnUse" style={{ maskType: 'alpha' }} width="40" x="0" y="0">
                      <path d={svgPaths.p33e02a80} stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                    </mask>
                    <g mask="url(#mask-header-chart)">
                      <rect fill="#1FC989" height="19" width="67" x="-12.5" y="-14.5" />
                      <rect fill="#F23645" height="19" width="67" x="-12.5" y="4.5" />
                    </g>
                  </svg>
                </Box>
              </Group>

              {/* Cursor */}
              <Box style={{
                backgroundColor: 'var(--mantine-color-text)',
                height: 16,
                width: 6,
                borderRadius: 2,
                animation: 'pulse 2s cubic-bezier(0.4,0,0.6,1) infinite',
              }} />

              {/* Search placeholder */}
              <Text style={{ fontSize: 12, lineHeight: '16px', color: s.textSubtle, fontFeatureSettings: "'lnum', 'tnum'", whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', flex: 1, minWidth: 0 }}>
                Искать по инструментам, функциям, новостям...
              </Text>
            </Group>
          </Group>
        </Box>
      </Group>

      {/* Right settings bar */}
      <Group gap={8} style={{ flexShrink: 0 }}>
        {/* Euler analytics portal button */}
        <UnstyledButton
          style={{
            display: 'flex',
            gap: 8,
            height: 40,
            alignItems: 'center',
            justifyContent: 'center',
            padding: '8px 8px 8px 12px',
            borderRadius: 8,
            border: `1px solid ${s.blue6}`,
            transition: 'background-color 150ms ease',
          }}
        >
          <Group gap={8}>
            <svg width="10.8" height="13.04" fill="none" viewBox="0 0 10.7969 13.0412" style={{ flexShrink: 0 }}>
              <path d={svgPaths.pbda2300} fill="#5A8CFF" />
              <path d={svgPaths.p38d88100} fill="#5A8CFF" />
            </svg>
            <svg width="47.34" height="16.02" fill="none" viewBox="0 0 47.3358 16.0224" style={{ flexShrink: 0 }}>
              <path d={svgPaths.p2e529770} fill="#5A8CFF" />
              <path d={svgPaths.p31123d00} fill="#5A8CFF" />
              <path d={svgPaths.p58e5c00} fill="#5A8CFF" />
              <path d={svgPaths.p3433ec00} fill="#5A8CFF" />
              <path d={svgPaths.p2b20da70} fill="#5A8CFF" />
              <path d={svgPaths.p1e765100} fill="#5A8CFF" />
            </svg>
          </Group>
          <Box style={{ fontWeight: 500, lineHeight: 'normal', fontSize: 7, letterSpacing: 0.49, textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
            <Text style={{ margin: 0, fontSize: 8, color: s.textSubtle }}>Аналитический портал</Text>
          </Box>
        </UnstyledButton>

        {/* GALAVIEW button */}
        <UnstyledButton
          style={{
            display: 'flex',
            gap: 10,
            height: 40,
            alignItems: 'center',
            justifyContent: 'center',
            padding: '10px 12px',
            borderRadius: 6,
            flexShrink: 0,
            backgroundImage: 'linear-gradient(157deg, #45D3CE 8.16%, #5A8CFF 88%)',
            transition: 'filter 150ms ease',
          }}
        >
          <svg width="86.58" height="14.64" fill="none" viewBox="0 0 86.5814 14.6382" style={{ flexShrink: 0 }}>
            <path d={svgPaths.p39ca200} fill="white" />
            <path d={svgPaths.p2499f3f0} fill="white" />
            <path d={svgPaths.p1eda5740} fill="white" />
            <path d={svgPaths.p395f2e80} fill="white" />
            <path d={svgPaths.p279be700} fill="white" />
            <path d={svgPaths.p2e952b00} fill="white" />
            <path d={svgPaths.p9f04000} fill="white" />
            <path d={svgPaths.p6ac6d80} fill="white" />
            <path d={svgPaths.p3cf9800} fill="white" />
          </svg>
        </UnstyledButton>

        {/* Theme toggle */}
        <UnstyledButton
          onClick={toggleColorScheme}
          title={colorScheme === 'dark' ? 'Светлая тема' : 'Тёмная тема'}
          style={iconBtnStyle}
        >
          {colorScheme === 'dark' ? (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.3" />
              <path d="M8 1.5V3M8 13V14.5M1.5 8H3M13 8H14.5M3.17 3.17L4.23 4.23M11.77 11.77L12.83 12.83M3.17 12.83L4.23 11.77M11.77 4.23L12.83 3.17" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M14 9.5A6.5 6.5 0 016.5 2c0-.5.06-1 .17-1.47A7 7 0 108.5 14.83c-.47.11-.97.17-1.47.17A6.5 6.5 0 0114 9.5z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </UnstyledButton>

        {/* Account button */}
        <UnstyledButton style={iconBtnStyle}>
          <svg width="11.03" height="18" fill="none" viewBox="0 0 11.0322 18">
            <path d={svgPaths.p3b5d5300} fill="currentColor" style={{ color: s.textPrimary }} />
            <path d={svgPaths.p9bfca00} fill="currentColor" style={{ color: s.textPrimary }} />
          </svg>
        </UnstyledButton>
      </Group>
    </Box>
  );
}