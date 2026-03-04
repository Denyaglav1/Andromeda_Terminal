import React, { useState, useMemo } from 'react';
import { DSSegmentButton, DSSegment } from './ds-segment-button';

/* ═══════════════════════════════════════════════════════
   DSCalendar — Date Picker Component (Mantine migration)
   ═══════════════════════════════════════════════════════ */

type CalendarView = 'dates' | 'months' | 'years';

export interface DSCalendarProps {
  value?: Date | null;
  onChange?: (date: Date) => void;
  min?: Date;
  max?: Date;
  initialMonth?: Date;
  className?: string;
}

const WEEKDAYS_RU = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
const MONTHS_RU = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
const MONTHS_SHORT_RU = ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'];

function isSameDay(a: Date, b: Date) {
  return a.getDate() === b.getDate() && a.getMonth() === b.getMonth() && a.getFullYear() === b.getFullYear();
}

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getMonthGrid(year: number, month: number) {
  const firstDay = new Date(year, month, 1);
  let startDow = firstDay.getDay() - 1;
  if (startDow < 0) startDow = 6;
  const daysInMonth = getDaysInMonth(year, month);
  const daysInPrev = getDaysInMonth(year, month - 1);
  const cells: { date: Date; inMonth: boolean }[] = [];
  for (let i = startDow - 1; i >= 0; i--) cells.push({ date: new Date(year, month - 1, daysInPrev - i), inMonth: false });
  for (let d = 1; d <= daysInMonth; d++) cells.push({ date: new Date(year, month, d), inMonth: true });
  const remaining = 42 - cells.length;
  for (let d = 1; d <= remaining; d++) cells.push({ date: new Date(year, month + 1, d), inMonth: false });
  return cells;
}

function ChevronIcon({ direction }: { direction: 'left' | 'right' }) {
  return (
    <svg viewBox="0 0 8 8" fill="none" style={{ width: 10, height: 10 }}>
      <path d={direction === 'left' ? 'M5.5 1L2.5 4L5.5 7' : 'M2.5 1L5.5 4L2.5 7'} stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const tnum: React.CSSProperties = { fontFeatureSettings: "'lnum', 'tnum'" };

const navBtnStyle: React.CSSProperties = {
  width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center',
  borderRadius: 4, color: 'var(--ds-text-gray-dark)', transition: 'background-color 150ms ease',
  cursor: 'pointer', background: 'none', border: 'none', outline: 'none',
};

export function DSCalendar({ value, onChange, min, max, initialMonth, className }: DSCalendarProps) {
  const today = useMemo(() => new Date(), []);
  const [view, setView] = useState<CalendarView>('dates');
  const [displayMonth, setDisplayMonth] = useState(initialMonth?.getMonth() ?? value?.getMonth() ?? today.getMonth());
  const [displayYear, setDisplayYear] = useState(initialMonth?.getFullYear() ?? value?.getFullYear() ?? today.getFullYear());
  const [yearPageStart, setYearPageStart] = useState(Math.floor((initialMonth?.getFullYear() ?? value?.getFullYear() ?? today.getFullYear()) / 12) * 12);

  const prevMonth = () => { if (displayMonth === 0) { setDisplayMonth(11); setDisplayYear(y => y - 1); } else setDisplayMonth(m => m - 1); };
  const nextMonth = () => { if (displayMonth === 11) { setDisplayMonth(0); setDisplayYear(y => y + 1); } else setDisplayMonth(m => m + 1); };
  const prevYear = () => setDisplayYear(y => y - 1);
  const nextYear = () => setDisplayYear(y => y + 1);
  const prevYearPage = () => setYearPageStart(s => s - 12);
  const nextYearPage = () => setYearPageStart(s => s + 12);

  const handleDateSelect = (date: Date) => { if ((min && date < min) || (max && date > max)) return; onChange?.(date); };
  const handleMonthSelect = (month: number) => { setDisplayMonth(month); setView('dates'); };
  const handleYearSelect = (year: number) => { setDisplayYear(year); setView('months'); };

  const grid = useMemo(() => getMonthGrid(displayYear, displayMonth), [displayYear, displayMonth]);

  return (
    <div
      className={className}
      style={{
        display: 'flex', flexDirection: 'column', borderRadius: 8, padding: 8,
        backgroundColor: 'var(--ds-bg-secondary)', border: '1px solid var(--ds-border-primary)',
        width: 300, userSelect: 'none',
      }}
    >
      {/* View switcher */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 8 }}>
        <DSSegmentButton variant="fill" size="xs" value={view} onChange={v => setView(v as CalendarView)}>
          <DSSegment value="dates">Даты</DSSegment>
          <DSSegment value="months">Месяцы</DSSegment>
          <DSSegment value="years">Годы</DSSegment>
        </DSSegmentButton>
      </div>

      {/* Dates view */}
      {view === 'dates' && (
        <>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 4px' }}>
            <button type="button" onClick={prevMonth} style={navBtnStyle}><ChevronIcon direction="left" /></button>
            <span style={{ fontSize: 14, lineHeight: '20px', fontWeight: 500, color: 'var(--ds-text-primary)', ...tnum }}>
              {MONTHS_RU[displayMonth]} {displayYear}
            </span>
            <button type="button" onClick={nextMonth} style={navBtnStyle}><ChevronIcon direction="right" /></button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 0 }}>
            {WEEKDAYS_RU.map(day => (
              <div key={day} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 32, fontSize: 12, lineHeight: '16px', color: 'var(--ds-text-gray-dark)', ...tnum }}>
                {day}
              </div>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 0 }}>
            {grid.map((cell, i) => {
              const isToday = isSameDay(cell.date, today);
              const isSelected = value ? isSameDay(cell.date, value) : false;
              const isDisabled = (min && cell.date < min) || (max && cell.date > max);

              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => handleDateSelect(cell.date)}
                  disabled={!!isDisabled}
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', height: 32,
                    borderRadius: '50%', fontSize: 14, lineHeight: '20px',
                    transition: 'all 100ms ease', cursor: isDisabled ? 'not-allowed' : 'pointer',
                    opacity: !cell.inMonth ? 0.3 : isDisabled ? 0.2 : 1,
                    backgroundColor: isSelected ? 'var(--ds-blue-6)' : 'transparent',
                    color: isSelected ? 'white' : 'var(--ds-text-primary)',
                    border: isToday && !isSelected ? '1px solid var(--ds-blue-6)' : 'none',
                    outline: 'none', background: isSelected ? 'var(--ds-blue-6)' : 'none',
                    ...tnum,
                  }}
                >
                  {cell.date.getDate()}
                </button>
              );
            })}
          </div>
        </>
      )}

      {/* Months view */}
      {view === 'months' && (
        <>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 4px' }}>
            <button type="button" onClick={prevYear} style={navBtnStyle}><ChevronIcon direction="left" /></button>
            <span style={{ fontSize: 14, lineHeight: '20px', fontWeight: 500, color: 'var(--ds-text-primary)', ...tnum }}>{displayYear}</span>
            <button type="button" onClick={nextYear} style={navBtnStyle}><ChevronIcon direction="right" /></button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 4, padding: 4 }}>
            {MONTHS_SHORT_RU.map((m, i) => {
              const isCurrent = i === today.getMonth() && displayYear === today.getFullYear();
              const isSelected = value && i === value.getMonth() && displayYear === value.getFullYear();
              return (
                <button
                  key={i} type="button" onClick={() => handleMonthSelect(i)}
                  style={{
                    height: 36, borderRadius: 8, fontSize: 12, lineHeight: '16px', fontWeight: 500,
                    transition: 'all 150ms ease', cursor: 'pointer', outline: 'none',
                    backgroundColor: isSelected ? 'var(--ds-blue-6)' : 'transparent',
                    color: isSelected ? 'white' : 'var(--ds-text-primary)',
                    border: isCurrent && !isSelected ? '1px solid var(--ds-blue-6)' : 'none',
                    background: isSelected ? 'var(--ds-blue-6)' : 'none',
                    ...tnum,
                  }}
                >
                  {m}
                </button>
              );
            })}
          </div>
        </>
      )}

      {/* Years view */}
      {view === 'years' && (
        <>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 4px' }}>
            <button type="button" onClick={prevYearPage} style={navBtnStyle}><ChevronIcon direction="left" /></button>
            <span style={{ fontSize: 14, lineHeight: '20px', fontWeight: 500, color: 'var(--ds-text-primary)', ...tnum }}>{yearPageStart} — {yearPageStart + 11}</span>
            <button type="button" onClick={nextYearPage} style={navBtnStyle}><ChevronIcon direction="right" /></button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 4, padding: 4 }}>
            {Array.from({ length: 12 }, (_, i) => yearPageStart + i).map(year => {
              const isCurrent = year === today.getFullYear();
              const isSelected = value && year === value.getFullYear();
              return (
                <button
                  key={year} type="button" onClick={() => handleYearSelect(year)}
                  style={{
                    height: 36, borderRadius: 8, fontSize: 12, lineHeight: '16px', fontWeight: 500,
                    transition: 'all 150ms ease', cursor: 'pointer', outline: 'none',
                    backgroundColor: isSelected ? 'var(--ds-blue-6)' : 'transparent',
                    color: isSelected ? 'white' : 'var(--ds-text-primary)',
                    border: isCurrent && !isSelected ? '1px solid var(--ds-blue-6)' : 'none',
                    background: isSelected ? 'var(--ds-blue-6)' : 'none',
                    ...tnum,
                  }}
                >
                  {year}
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}