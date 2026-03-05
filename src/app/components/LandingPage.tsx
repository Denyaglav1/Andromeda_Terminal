import React from 'react';
import { Link } from 'react-router';
import {
  Box,
  Group,
  Stack,
  Text,
  Title,
  UnstyledButton,
  SimpleGrid,
  Paper,
  Badge,
  Divider,
  Anchor,
  Flex,
  useMantineColorScheme,
} from '@mantine/core';
import svgPaths from '../../imports/svg-yl7s4hfuce';

/* ═══════════════════════════════════════════════════════
   LandingPage — Service cards hub (Mantine)
   ═══════════════════════════════════════════════════════ */

interface ServiceCard {
  id: string;
  title: string;
  description: string;
  href: string;
  gradientFrom: string;
  gradientTo: string;
  accentColor: string;
  icon: React.ReactNode;
  tag?: string;
}

const MAIN_SERVICES: ServiceCard[] = [
  {
    id: 'home',
    title: 'Главная',
    description: 'Финансовый терминал: лента новостей, котировки, тренды рынков, лидеры роста и падения, обзоры аналитиков',
    href: '/home',
    gradientFrom: 'rgba(90,140,255,0.2)',
    gradientTo: 'rgba(32,42,66,0.4)',
    accentColor: 'var(--ds-blue-6)',
    tag: 'Andromeda-style',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="2" y="4" width="24" height="3" rx="1.5" fill="var(--ds-blue-6)" opacity="0.4" />
        <rect x="2" y="9" width="11" height="15" rx="1.5" fill="var(--ds-blue-6)" opacity="0.6" />
        <rect x="15" y="9" width="11" height="7" rx="1.5" fill="var(--ds-blue-6)" opacity="0.8" />
        <rect x="15" y="18" width="11" height="6" rx="1.5" fill="var(--ds-blue-6)" />
      </svg>
    ),
  },
  {
    id: 'chart-builder',
    title: 'Конструктор графиков',
    description: '20 типов визуализаций, SVG/PNG-экспорт, drag-and-drop конструирование дашбордов',
    href: '/chart-builder',
    gradientFrom: 'rgba(31,201,137,0.2)',
    gradientTo: 'rgba(26,48,55,0.4)',
    accentColor: 'var(--ds-green-6)',
    tag: 'Визуализация',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M3 24V12L8 7L14 13L20 4L25 9" stroke="var(--ds-green-6)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 24H25" stroke="var(--ds-green-6)" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'components',
    title: 'Дизайн-система',
    description: 'UI-компоненты, токены, типографика, цветовая палитра, документация и примеры',
    href: '/components',
    gradientFrom: 'rgba(154,140,255,0.2)',
    gradientTo: 'rgba(38,42,66,0.4)',
    accentColor: 'var(--ds-purple-6)',
    tag: 'UI Kit',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="3" width="9" height="9" rx="2" stroke="var(--ds-purple-6)" strokeWidth="2" />
        <rect x="16" y="3" width="9" height="9" rx="2" stroke="var(--ds-purple-6)" strokeWidth="2" />
        <rect x="3" y="16" width="9" height="9" rx="2" stroke="var(--ds-purple-6)" strokeWidth="2" />
        <rect x="16" y="16" width="9" height="9" rx="2" fill="var(--ds-purple-6)" opacity="0.3" stroke="var(--ds-purple-6)" strokeWidth="2" />
      </svg>
    ),
  },
  {
    id: 'indices',
    title: 'Индексы СПБ',
    description: 'Котировки индексов СПБ Биржи, исторические данные и аналитика (SPB100 и др.)',
    href: '/indices',
    gradientFrom: 'rgba(234,57,67,0.2)',
    gradientTo: 'rgba(50,20,30,0.4)',
    accentColor: 'var(--ds-red-6)',
    tag: 'Рынки',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 22L10 14L16 18L24 6" stroke="var(--ds-red-6)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M24 6V12M24 6H18" stroke="var(--ds-red-6)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const TOOL_SERVICES: ServiceCard[] = [
  {
    id: 'fa',
    title: 'FA — Financial Analysis',
    description: 'Консенсус-прогнозы, Live Models, мультипликаторы, сценарный анализ',
    href: '/fa',
    gradientFrom: 'rgba(248,125,55,0.2)',
    gradientTo: 'rgba(48,40,46,0.4)',
    accentColor: 'var(--ds-orange-6)',
    tag: 'Аналитика',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="13" width="4.5" height="12" rx="1.5" fill="var(--ds-orange-6)" opacity="0.4" />
        <rect x="9.5" y="9" width="4.5" height="16" rx="1.5" fill="var(--ds-orange-6)" opacity="0.6" />
        <rect x="16" y="5.5" width="4.5" height="19.5" rx="1.5" fill="var(--ds-orange-6)" opacity="0.8" />
        <rect x="22.5" y="3" width="4.5" height="22" rx="1.5" fill="var(--ds-orange-6)" />
      </svg>
    ),
  },
  {
    id: 'tickets',
    title: 'Тикеты — Research Platform',
    description: 'Система ответов на тикеты клиентов: чат, передача, статусы, привязка к публикациям',
    href: '/tickets',
    gradientFrom: 'rgba(31,201,137,0.15)',
    gradientTo: 'rgba(90,140,255,0.15)',
    accentColor: '#5A8CFF',
    tag: 'Чаты',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="5" width="22" height="16" rx="3" stroke="#5A8CFF" strokeWidth="2" fill="none" />
        <path d="M8 11H16M8 15H13" stroke="#5A8CFF" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="21" cy="7" r="4" fill="#1FC989" />
      </svg>
    ),
  },
  {
    id: 'image-editor',
    title: 'Редактор изображений',
    description: 'Canvas-редактор: кисть, фигуры, текст, обрезка, фильтры, цветокоррекция, экспорт в PNG/JPEG/WebP',
    href: '/image-editor',
    gradientFrom: 'rgba(246,200,37,0.2)',
    gradientTo: 'rgba(50,46,30,0.4)',
    accentColor: 'var(--ds-yellow-6)',
    tag: 'Инструмент',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="5" width="22" height="18" rx="2.5" stroke="var(--ds-yellow-6)" strokeWidth="2" />
        <circle cx="10" cy="12" r="2.5" stroke="var(--ds-yellow-6)" strokeWidth="1.5" />
        <path d="M3 19L9 14L14 18L19 12L25 17" stroke="var(--ds-yellow-6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const DOC_SERVICES: ServiceCard[] = [
  {
    id: 'chart-builder-spec',
    title: 'Спецификация графиков',
    description: 'Техническая документация по конструктору графиков и API визуализаций',
    href: '/chart-builder-spec',
    gradientFrom: 'rgba(69,211,206,0.2)',
    gradientTo: 'rgba(30,49,62,0.4)',
    accentColor: 'var(--ds-turquoise-6)',
    tag: 'Документация',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M7 3H17L23 9V25H7V3Z" stroke="var(--ds-turquoise-6)" strokeWidth="2" strokeLinejoin="round" />
        <path d="M17 3V9H23" stroke="var(--ds-turquoise-6)" strokeWidth="2" strokeLinejoin="round" />
        <path d="M11 15H21M11 19H18" stroke="var(--ds-turquoise-6)" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

function ServiceCardComponent({ card }: { card: ServiceCard }) {
  return (
    <Paper
      component={Link}
      to={card.href}
      radius="md"
      p={20}
      style={{
        background: `linear-gradient(135deg, ${card.gradientFrom}, ${card.gradientTo})`,
        border: '1px solid var(--ds-border-card)',
        minHeight: 180,
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        textDecoration: 'none',
        transition: 'all 200ms ease',
        position: 'relative',
        cursor: 'pointer',
      }}
      styles={{
        root: {
          '&:hover': {
            borderColor: 'rgba(90,140,255,0.4)',
            transform: 'scale(1.02)',
            boxShadow: '0 8px 24px rgba(90,140,255,0.05)',
          },
        },
      }}
    >
      {/* Tag */}
      {card.tag && (
        <Badge
          size="xs"
          variant="light"
          radius="sm"
          style={{
            alignSelf: 'flex-start',
            backgroundColor: `${card.accentColor}20`,
            color: card.accentColor,
            border: 'none',
            fontWeight: 600,
            fontSize: 10,
            lineHeight: '16px',
            textTransform: 'none',
          }}
        >
          {card.tag}
        </Badge>
      )}

      {/* Icon + Title */}
      <Group gap={12} align="center">
        <Flex
          align="center"
          justify="center"
          style={{
            width: 44,
            height: 44,
            borderRadius: 10,
            backgroundColor: 'var(--ds-blue-6-a10)',
            flexShrink: 0,
          }}
        >
          {card.icon}
        </Flex>
        <Title
          order={3}
          style={{
            color: 'var(--mantine-color-text)',
            fontSize: 18,
            lineHeight: '24px',
            fontWeight: 600,
          }}
        >
          {card.title}
        </Title>
      </Group>

      {/* Description */}
      <Text
        size="sm"
        style={{
          color: 'var(--ds-text-gray-dark)',
          fontSize: 13,
          lineHeight: '18px',
          flex: 1,
        }}
      >
        {card.description}
      </Text>

      {/* Arrow on hover — handled via CSS */}
      <Box
        style={{
          position: 'absolute',
          top: 16,
          right: 16,
          width: 24,
          height: 24,
          borderRadius: 6,
          backgroundColor: 'var(--ds-blue-6-a10)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: 0,
          transition: 'opacity 200ms ease',
        }}
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M2 6H10M7 3L10 6L7 9" stroke="var(--ds-blue-5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Box>
    </Paper>
  );
}

/* --- Landing Header --- */
function LandingHeader() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Box
      component="header"
      style={{
        backgroundColor: 'var(--mantine-color-body)',
        borderBottom: '1px solid var(--ds-border-primary)',
        position: 'sticky',
        top: 0,
        zIndex: 10,
      }}
    >
      <Group gap={16} px={32} py={12} align="center">
        {/* Logo */}
        <Box key="logo" style={{ flexShrink: 0, display: 'flex', alignItems: 'center', height: 40 }}>
          <svg
            width="136"
            height="11"
            viewBox="0 0 135.285 10.1281"
            fill="none"
            preserveAspectRatio="xMidYMid meet"
          >
            <path d={svgPaths.p405c000} fill="currentColor" style={{ color: 'var(--mantine-color-text)' }} />
          </svg>
        </Box>

        <Box key="spacer" style={{ flex: 1 }} />

        {/* Theme toggle */}
        <UnstyledButton
          key="theme-toggle"
          onClick={toggleColorScheme}
          title={colorScheme === 'dark' ? 'Светлая тема' : 'Тёмная тема'}
          style={{
            width: 36,
            height: 36,
            backgroundColor: 'var(--ds-bg-secondary)',
            borderRadius: 8,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            transition: 'background-color 150ms ease',
          }}
        >
          {colorScheme === 'dark' ? (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="3.5" stroke="var(--ds-text-gray-dark)" strokeWidth="1.3" />
              <path d="M8 1.5V3M8 13V14.5M1.5 8H3M13 8H14.5M3.17 3.17L4.23 4.23M11.77 11.77L12.83 12.83M3.17 12.83L4.23 11.77M11.77 4.23L12.83 3.17" stroke="var(--ds-text-gray-dark)" strokeWidth="1.3" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M14 9.5A6.5 6.5 0 016.5 2c0-.5.06-1 .17-1.47A7 7 0 108.5 14.83c-.47.11-.97.17-1.47.17A6.5 6.5 0 0114 9.5z" stroke="var(--ds-text-gray-dark)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </UnstyledButton>
      </Group>
    </Box>
  );
}

/* --- Main Landing Page --- */
export function LandingPage() {
  return (
    <Box
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'var(--mantine-color-body)',
        color: 'var(--mantine-color-text)',
        overflow: 'auto',
      }}
    >
      <LandingHeader />

      <Box
        component="main"
        style={{
          flex: 1,
          padding: 24,
          maxWidth: 1280,
          margin: '0 auto',
          width: '100%',
        }}
      >
        {/* Hero section */}
        <Stack gap={8} mb={32}>
          <Title order={1} style={{ color: 'var(--mantine-color-text)' }}>
            Платформа
          </Title>
          <Text style={{ color: 'var(--ds-text-gray-dark)', maxWidth: 600 }}>
            Выберите сервис для работы с финансовыми данными, аналитикой и визуализацией
          </Text>
        </Stack>

        {/* Main services grid */}
        <Stack key="main-section" gap={24}>
          <Group gap={8} align="center">
            <Box key="dot" style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: 'var(--ds-blue-6)' }} />
            <Text
              key="label"
              style={{
                color: 'var(--ds-text-gray-dark)',
                textTransform: 'uppercase',
                letterSpacing: 0.5,
                fontSize: 12,
                lineHeight: '16px',
                fontWeight: 600,
              }}
            >
              Основные сервисы
            </Text>
          </Group>

          <SimpleGrid cols={3} spacing={16}>
            {MAIN_SERVICES.map(card => (
              <ServiceCardComponent key={card.id} card={card} />
            ))}
          </SimpleGrid>
        </Stack>

        {/* Divider */}
        <Divider key="divider-1" my={32} color="var(--ds-border-primary)" />

        {/* Tools section */}
        <Stack key="tools-section" gap={24}>
          <Group gap={8} align="center">
            <Box key="dot" style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: 'var(--ds-orange-6)' }} />
            <Text
              key="label"
              style={{
                color: 'var(--ds-text-gray-dark)',
                textTransform: 'uppercase',
                letterSpacing: 0.5,
                fontSize: 12,
                lineHeight: '16px',
                fontWeight: 600,
              }}
            >
              Сервисы
            </Text>
          </Group>

          <SimpleGrid cols={3} spacing={16}>
            {TOOL_SERVICES.map(card => (
              <ServiceCardComponent key={card.id} card={card} />
            ))}
          </SimpleGrid>
        </Stack>

        {/* Divider */}
        <Divider key="divider-2" my={32} color="var(--ds-border-primary)" />

        {/* Documentation section */}
        <Stack key="docs-section" gap={24}>
          <Group gap={8} align="center">
            <Box key="dot" style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: 'var(--ds-turquoise-6)' }} />
            <Text
              key="label"
              style={{
                color: 'var(--ds-text-gray-dark)',
                textTransform: 'uppercase',
                letterSpacing: 0.5,
                fontSize: 12,
                lineHeight: '16px',
                fontWeight: 600,
              }}
            >
              Документация
            </Text>
          </Group>

          <SimpleGrid cols={3} spacing={16}>
            {DOC_SERVICES.map(card => (
              <ServiceCardComponent key={card.id} card={card} />
            ))}
          </SimpleGrid>
        </Stack>

        {/* Spacer */}
        <Box h={48} />

        {/* Footer */}
        <Group
          justify="space-between"
          align="center"
          style={{ borderTop: '1px solid var(--ds-border-primary)', paddingTop: 16, paddingBottom: 8 }}
        >
          <Text key="version" size="xs" style={{ color: 'var(--ds-text-gray-dark)', fontFeatureSettings: "'lnum', 'tnum'", fontSize: 11 }}>
            Andromeda Platform v2.0 &middot; 2026
          </Text>
          <Group key="links" gap={16}>
            <Anchor
              key="tokens"
              component={Link}
              to="/components/tokens"
              style={{ color: 'var(--ds-text-gray-dark)', fontSize: 11, textDecoration: 'none' }}
            >
              Токены
            </Anchor>
            <Anchor
              key="spec"
              component={Link}
              to="/chart-builder-spec"
              style={{ color: 'var(--ds-text-gray-dark)', fontSize: 11, textDecoration: 'none' }}
            >
              Спецификация
            </Anchor>
          </Group>
        </Group>
      </Box>
    </Box>
  );
}