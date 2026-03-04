import React, { useState, useMemo } from 'react';
import { Box, Group, Text, UnstyledButton, Stack } from '@mantine/core';
import { DSSectionHeader } from '../ui/ds-section-header';
import { CALENDAR_EVENTS } from './data/home-events-db';
import { ChevronLeft, ChevronRight } from 'lucide-react';

/* ═══════════════════════════════════════
   UpcomingEvents — Calendar widget (Mantine)
   ═══════════════════════════════════════ */

const DAY_NAMES = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

function getWeekDates(baseDate: Date, offset: number): Date[] {
  const d = new Date(baseDate);
  const day = d.getDay();
  const diff = d.getDate() - day + (day === 0 ? -6 : 1);
  d.setDate(diff + offset * 7);

  const dates: Date[] = [];
  for (let i = 0; i < 7; i++) {
    dates.push(new Date(d));
    d.setDate(d.getDate() + 1);
  }
  return dates;
}

function formatShortDate(d: Date): string {
  const day = d.getDate();
  const months = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];
  return `${day} ${months[d.getMonth()]}`;
}

function toDateKey(d: Date): string {
  return d.toISOString().split('T')[0];
}

export function UpcomingEvents() {
  const today = useMemo(() => new Date(), []);
  const [weekOffset, setWeekOffset] = useState(0);
  const [selectedDate, setSelectedDate] = useState<string>(toDateKey(today));

  const weekDates = useMemo(() => getWeekDates(today, weekOffset), [today, weekOffset]);
  const todayKey = toDateKey(today);

  const eventMap = useMemo(() => {
    const map = new Map<string, number>();
    CALENDAR_EVENTS.forEach(e => map.set(e.date, e.count));
    return map;
  }, []);

  return (
    <Stack gap={16} style={{ width: '100%' }}>
      <DSSectionHeader action="Смотреть все">
        Ближайшие события
      </DSSectionHeader>

      {/* Day names row */}
      <Group gap={4} wrap="nowrap">
        {DAY_NAMES.map(name => (
          <Box
            key={name}
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: 26,
              borderRadius: 4,
              backgroundColor: 'var(--ds-bg-table-mark-header)',
              fontSize: 10,
              lineHeight: '16px',
              fontWeight: 500,
              color: 'var(--ds-text-gray-dark)',
            }}
          >
            {name}
          </Box>
        ))}
      </Group>

      {/* Date cells */}
      <Group gap={4} wrap="nowrap" style={{ marginTop: -12 }}>
        {weekDates.map(date => {
          const key = toDateKey(date);
          const isToday = key === todayKey;
          const isSelected = key === selectedDate;
          const count = eventMap.get(key);

          return (
            <UnstyledButton
              key={key}
              onClick={() => setSelectedDate(key)}
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 2,
                padding: '6px 0',
                borderRadius: 4,
                transition: 'background-color 150ms ease',
                border: isSelected ? '1px solid var(--ds-blue-6)' : '1px solid transparent',
                backgroundColor: isSelected
                  ? 'var(--ds-bg-secondary)'
                  : isToday
                    ? 'var(--ds-bg-highlight)'
                    : 'var(--ds-bg-secondary)',
              }}
            >
              <Text
                style={{
                  fontSize: 10,
                  lineHeight: '14px',
                  fontWeight: 500,
                  color: 'var(--ds-text-primary)',
                  whiteSpace: 'nowrap',
                  fontFeatureSettings: "'lnum', 'tnum'",
                }}
              >
                {formatShortDate(date)}
              </Text>
              {count !== undefined && (
                <Text
                  style={{
                    backgroundColor: 'var(--ds-purple-7)',
                    color: 'white',
                    fontSize: 10,
                    lineHeight: '14px',
                    fontWeight: 500,
                    borderRadius: 4,
                    padding: '0 4px',
                    minWidth: 16,
                    textAlign: 'center',
                    alignSelf: 'flex-start',
                  }}
                >
                  {count > 99 ? '99+' : count}
                </Text>
              )}
            </UnstyledButton>
          );
        })}
      </Group>

      {/* Navigation */}
      <Group justify="space-between">
        <UnstyledButton
          onClick={() => setWeekOffset(w => w - 1)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 4,
            fontSize: 10,
            lineHeight: '16px',
            fontWeight: 500,
            color: 'var(--ds-blue-6)',
            transition: 'color 150ms ease',
          }}
        >
          <ChevronLeft size={12} />
          пред. 7 дней
        </UnstyledButton>
        <UnstyledButton
          onClick={() => setWeekOffset(w => w + 1)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 4,
            fontSize: 10,
            lineHeight: '16px',
            fontWeight: 500,
            color: 'var(--ds-blue-6)',
            transition: 'color 150ms ease',
          }}
        >
          след. 7 дней
          <ChevronRight size={12} />
        </UnstyledButton>
      </Group>
    </Stack>
  );
}