/* ═══════════════════════════════════════
   Home Page — Events & Reviews Database
   ═══════════════════════════════════════ */

import type { CalendarEvent, EventCard, VideoItem, ReviewCard } from './home-types';

/* ═══════ CALENDAR EVENTS ═══════ */
export const CALENDAR_EVENTS: CalendarEvent[] = [
  { date: '2026-02-23', count: 12 },
  { date: '2026-02-24', count: 4 },
  { date: '2026-02-25', count: 8 },
  { date: '2026-02-26', count: 15 },
  { date: '2026-02-27', count: 3 },
  { date: '2026-02-28', count: 7 },
  { date: '2026-03-01', count: 99 },
  { date: '2026-03-02', count: 2 },
  { date: '2026-03-03', count: 11 },
  { date: '2026-03-04', count: 6 },
  { date: '2026-03-05', count: 9 },
  { date: '2026-03-06', count: 4 },
  { date: '2026-03-07', count: 14 },
  { date: '2026-03-08', count: 1 },
];

/* ═══════ EVENT CARDS (Carousel) ═══════ */
export const EVENT_CARDS: EventCard[] = [
  {
    id: 'ev1',
    date: '25 октября',
    tag: 'Паевые инвестиционные фонды',
    title: 'Акции: вложения фондов; ноябрь 2025 г. - Продавали Фосагро, Сургутнефтегаз',
    analystName: 'Елена Бакланова',
    analystCompany: 'Эйлер',
    avatarIndex: 0,
    avatarId: 'baklanova',
  },
  {
    id: 'ev2',
    date: '25 октября',
    tag: 'Нефть и газ',
    title: 'Россия - Европейский медицинский центр (GEMC) - начало покрытия',
    analystName: 'Виктор Смирновский',
    analystCompany: 'Совкомбанк',
    avatarIndex: 1,
    isActive: true,
  },
  {
    id: 'ev3',
    date: '25 октября',
    tag: 'Нефть и газ',
    title: 'Россия - Европейский медицинский центр (GEMC) - начало покрытия',
    analystName: 'Виктор Смирновский',
    analystCompany: 'Совкомбанк',
    avatarIndex: 1,
  },
  {
    id: 'ev4',
    date: '25 октября',
    tag: 'Нефть и газ',
    title: '2% SAAR = 100 bp lower',
    analystName: 'Елена Ахмедова',
    analystCompany: 'Эйлер',
    avatarIndex: 2,
    avatarId: 'akhmedova',
  },
  {
    id: 'ev5',
    date: '26 октября',
    tag: 'Макроэкономика',
    title: 'Обзор ключевых макроэкономических индикаторов за ноябрь 2025',
    analystName: 'Алексей Петров',
    analystCompany: 'Эйлер',
    avatarIndex: 0,
  },
];

/* ═══════ VIDEO MATERIALS ═══════ */
export const VIDEO_ITEMS: VideoItem[] = [
  {
    id: 'v1',
    title: 'Экономика нефти и нефтепродуктов.\nНоябрь 2025',
    subtitle: 'Видеоинтервью',
    date: '14.04.2024',
  },
  {
    id: 'v2',
    title: 'Стратегия на рынке акций: итоги года и перспективы 2026',
    subtitle: 'Вебинар',
    date: '20.12.2025',
  },
  {
    id: 'v3',
    title: 'Макроэкономический прогноз: что ждать от ЦБ в 2026',
    subtitle: 'Видеоинтервью',
    date: '18.12.2025',
  },
];

/* ═══════ MARKET REVIEWS ═══════ */
export const REVIEW_CARDS: ReviewCard[] = [
  {
    id: 'r1',
    time: '09:49',
    tag: 'Стратегия: Акции',
    title: 'Обзор рынков акций',
    description: 'Эйлер: Глобальный рынок - Обзор рынков акций - Ралли откладывается?',
    analystName: 'Лидия Михайлова',
    analystCompany: 'Эйлер',
    avatarIndex: 3,
    avatarId: 'mikhaylova',
  },
  {
    id: 'r2',
    time: '09:31',
    tag: 'Стратегия: Акции',
    title: 'Валюта и ставки',
    description: 'Эйлер: Россия - Валюта и ставки - 23 декабря 2025',
    analystName: 'Максим Коровин',
    analystCompany: 'Эйлер',
    avatarIndex: 4,
    avatarId: 'korovin',
  },
  {
    id: 'r3',
    time: '08:45',
    tag: 'Нефть и газ',
    title: 'Нефтегазовый сектор',
    description: 'Эйлер: Обзор нефтегазового сектора - ОПЕК+ и перспективы цен на Brent',
    analystName: 'Андрей Полищук',
    analystCompany: 'Эйлер',
    avatarIndex: 0,
    avatarId: 'polischuk',
  },
  {
    id: 'r4',
    time: '08:20',
    tag: 'Макроэкономика',
    title: 'Макроэкономический обзор',
    description: 'Эйлер: Россия - Инфляция и денежно-кредитная политика ЦБ - Декабрь 2025',
    analystName: 'Елена Ахмедова',
    analystCompany: 'Эйлер',
    avatarIndex: 2,
    avatarId: 'akhmedova',
  },
  {
    id: 'r5',
    time: '07:55',
    tag: 'Стратегия: Облигации',
    title: 'Рынок облигаций',
    description: 'Эйлер: Еженедельный обзор рынка рублевых облигаций - ОФЗ в фокусе',
    analystName: 'Виктор Смирновский',
    analystCompany: 'Совкомбанк',
    avatarIndex: 1,
  },
  {
    id: 'r6',
    time: '07:30',
    tag: 'Телекоммуникации',
    title: 'TMT сектор',
    description: 'Эйлер: Телекоммуникации и технологии - Яндекс, VK, МТС: итоги квартала',
    analystName: 'Дмитрий Новиков',
    analystCompany: 'Эйлер',
    avatarIndex: 3,
    avatarId: 'naumov',
  },
];