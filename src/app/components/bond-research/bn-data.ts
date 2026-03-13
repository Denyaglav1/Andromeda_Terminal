/* ═══════════════════════════════════════════════════════
   BN — Новые выпуски: mock data
   ═══════════════════════════════════════════════════════ */

// ── Константы фильтров ─────────────────────────────────

export const RATING_OPTIONS = [
  { value: 'AAA',         label: 'AAA' },
  { value: 'AA+',         label: 'AA+' },
  { value: 'AA',          label: 'AA' },
  { value: 'AA-',         label: 'AA-' },
  { value: 'Не ниже AA-', label: 'Не ниже AA-' },
  { value: 'A+',          label: 'A+' },
  { value: 'A',           label: 'A' },
  { value: 'A-',          label: 'A-' },
  { value: 'Не ниже A-',  label: 'Не ниже A-' },
  { value: 'BBB+',        label: 'BBB+' },
  { value: 'BBB',         label: 'BBB' },
  { value: 'BBB-',        label: 'BBB-' },
  { value: 'Не ниже BBB-',label: 'Не ниже BBB-' },
  { value: 'BB+',         label: 'BB+' },
  { value: 'BB',          label: 'BB' },
  { value: 'BB-',         label: 'BB-' },
  { value: 'B+',          label: 'B+' },
  { value: 'B',           label: 'B' },
  { value: 'B-',          label: 'B-' },
  { value: 'C',           label: 'C' },
];

export const FREQUENCY_OPTIONS = [
  { value: 'Ежемесячный',   label: 'Ежемесячные' },
  { value: 'Квартальный',   label: 'Квартальные' },
  { value: 'Полугодовой',   label: 'Полугодовые' },
  { value: 'Годовой',       label: 'Годовые' },
];

// ── Таблица Календарь ──────────────────────────────────

export interface BNCalendarItem {
  id: string;
  placementDate: string;
  bookDate: string;
  issuer: string;
  rating: string;
  tenor: number;
  volume: number;
  currency: string;
  frequency: string;
  coupon: string;
  comment: string;
  highlight?: boolean;
}

export const BN_CALENDAR_DATA: BNCalendarItem[] = [
  { id: 'c1',  placementDate: '30.12.2026', bookDate: '30.12.2026', issuer: 'Йуми',              rating: 'AAA', tenor: 3,    volume: 250,  currency: 'RUB', frequency: 'Ежемесячный', coupon: 'ставка купона не выше 18.5%',  comment: '001Р-06, совокупный объём размещения не менее 2 млрд руб.' },
  { id: 'c2',  placementDate: '30.12.2026', bookDate: '30.12.2026', issuer: 'ЭкоНива',           rating: 'B+',  tenor: 12.5, volume: 250,  currency: 'RUB', frequency: 'Ежемесячный', coupon: 'ставка купона не выше 18.5%',  comment: '001Р-06, совокупный объём размещения не менее 2 млрд руб.' },
  { id: 'c3',  placementDate: '30.12.2026', bookDate: '30.12.2026', issuer: 'Арлифт Интернешнл', rating: 'BB+', tenor: 3,    volume: 5000, currency: 'RUB', frequency: 'Ежемесячный', coupon: 'КС + не выше 425 бп',          comment: '001Р-06, совокупный объём размещения не менее 2 млрд руб.', highlight: true },
  { id: 'c4',  placementDate: '30.12.2026', bookDate: '30.12.2026', issuer: 'Атомэнергопром',    rating: 'AAA', tenor: 1.5,  volume: 250,  currency: 'RUB', frequency: 'Ежемесячный', coupon: 'ставка купона не выше 18.5%',  comment: '001Р-06, совокупный объём размещения не менее 2 млрд руб.' },
  { id: 'c5',  placementDate: '30.12.2026', bookDate: '30.12.2026', issuer: 'Борец',             rating: 'B+',  tenor: 2.5,  volume: 5000, currency: 'RUB', frequency: 'Ежемесячный', coupon: 'ставка купона не выше 18.5%',  comment: '001Р-06, совокупный объём размещения не менее 2 млрд руб.', highlight: true },
  { id: 'c6',  placementDate: '30.12.2026', bookDate: '30.12.2026', issuer: 'Газпром нефть',     rating: 'BB+', tenor: 3,    volume: 250,  currency: 'RUB', frequency: 'Ежемесячный', coupon: 'КС + не выше 425 бп',          comment: '001Р-06, совокупный объём размещения не менее 2 млрд руб.' },
  { id: 'c7',  placementDate: '30.12.2026', bookDate: '30.12.2026', issuer: 'МТС',               rating: 'AAA', tenor: 3,    volume: 250,  currency: 'RUB', frequency: 'Квартальный',  coupon: 'ставка купона не выше 18.5%',  comment: '001Р-06, совокупный объём размещения не менее 2 млрд руб.' },
  { id: 'c8',  placementDate: '30.12.2026', bookDate: '30.12.2026', issuer: 'ТЕХНО Лизинг',      rating: 'B+',  tenor: 3,    volume: 5000, currency: 'RUB', frequency: 'Ежемесячный', coupon: 'ставка купона не выше 18.5%',  comment: '001Р-06, совокупный объём размещения не менее 2 млрд руб.' },
  { id: 'c9',  placementDate: '30.12.2026', bookDate: '30.12.2026', issuer: 'Автоассистанс',     rating: 'C',   tenor: 3,    volume: 5000, currency: 'RUB', frequency: 'Ежемесячный', coupon: 'КС + не выше 425 бп',          comment: '001Р-06, совокупный объём размещения не менее 2 млрд руб.', highlight: true },
  { id: 'c10', placementDate: '28.12.2026', bookDate: '26.12.2026', issuer: 'Сбербанк',          rating: 'AAA', tenor: 5,    volume: 500,  currency: 'RUB', frequency: 'Квартальный',  coupon: 'ставка купона не выше 17%',    comment: '002Р-08, объём размещения не менее 5 млрд руб.' },
  { id: 'c11', placementDate: '28.12.2026', bookDate: '26.12.2026', issuer: 'ВТБ',               rating: 'AA+', tenor: 4,    volume: 1000, currency: 'RUB', frequency: 'Полугодовой', coupon: 'ставка купона не выше 17.5%',  comment: '007Р-12, амортизация 30% через 2 года' },
  { id: 'c12', placementDate: '25.12.2026', bookDate: '23.12.2026', issuer: 'Ростелеком',        rating: 'AA',  tenor: 7,    volume: 300,  currency: 'RUB', frequency: 'Полугодовой', coupon: 'ставка купона не выше 17.8%',  comment: '003Р-05', highlight: true },
  { id: 'c13', placementDate: '25.12.2026', bookDate: '23.12.2026', issuer: 'РЖД',               rating: 'AAA', tenor: 10,   volume: 2000, currency: 'RUB', frequency: 'Годовой',      coupon: 'ставка купона не выше 16.5%',  comment: '002Р-01, объём размещения не менее 20 млрд руб.' },
  { id: 'c14', placementDate: '22.12.2026', bookDate: '20.12.2026', issuer: 'Лента',             rating: 'BB',  tenor: 3,    volume: 150,  currency: 'RUB', frequency: 'Ежемесячный', coupon: 'КС + не выше 500 бп',          comment: '002Р-03' },
  { id: 'c15', placementDate: '22.12.2026', bookDate: '20.12.2026', issuer: 'Эталон',            rating: 'BB-', tenor: 2,    volume: 100,  currency: 'RUB', frequency: 'Ежемесячный', coupon: 'КС + не выше 550 бп',          comment: '001Р-04, сбор книги 20 декабря' },
  { id: 'c16', placementDate: '20.12.2026', bookDate: '18.12.2026', issuer: 'Северсталь',        rating: 'AA',  tenor: 5,    volume: 500,  currency: 'RUB', frequency: 'Полугодовой', coupon: 'ставка купона не выше 17%',    comment: '003Р-06', highlight: true },
  { id: 'c17', placementDate: '20.12.2026', bookDate: '18.12.2026', issuer: 'НЛМК',              rating: 'AA+', tenor: 3,    volume: 300,  currency: 'RUB', frequency: 'Полугодовой', coupon: 'ставка купона не выше 17.2%',  comment: '002Р-07' },
  { id: 'c18', placementDate: '18.12.2026', bookDate: '16.12.2026', issuer: 'Детский Мир',       rating: 'B',   tenor: 2,    volume: 80,   currency: 'RUB', frequency: 'Ежемесячный', coupon: 'КС + не выше 600 бп',          comment: '001Р-02' },
  { id: 'c19', placementDate: '18.12.2026', bookDate: '16.12.2026', issuer: 'М.Видео',           rating: 'B+',  tenor: 3,    volume: 200,  currency: 'RUB', frequency: 'Квартальный',  coupon: 'ставка купона не выше 19%',    comment: '003Р-01' },
  { id: 'c20', placementDate: '15.12.2026', bookDate: '13.12.2026', issuer: 'Роснефть',          rating: 'AAA', tenor: 8,    volume: 5000, currency: 'RUB', frequency: 'Полугодовой', coupon: 'ставка купона не выше 16%',    comment: '004Р-09, объём размещения до 50 млрд руб.' },
  { id: 'c21', placementDate: '15.12.2026', bookDate: '13.12.2026', issuer: 'ЛУКОЙЛ',            rating: 'AAA', tenor: 5,    volume: 3000, currency: 'RUB', frequency: 'Полугодовой', coupon: 'ставка купона не выше 16.2%',  comment: '003Р-10' },
  { id: 'c22', placementDate: '12.12.2026', bookDate: '10.12.2026', issuer: 'Мегафон',           rating: 'AA',  tenor: 3,    volume: 400,  currency: 'RUB', frequency: 'Квартальный',  coupon: 'ставка купона не выше 17.5%',  comment: '002Р-05', highlight: true },
  { id: 'c23', placementDate: '12.12.2026', bookDate: '10.12.2026', issuer: 'Евраз',             rating: 'BB+', tenor: 4,    volume: 200,  currency: 'RUB', frequency: 'Ежемесячный', coupon: 'КС + не выше 450 бп',          comment: '001Р-08' },
  { id: 'c24', placementDate: '10.12.2026', bookDate: '08.12.2026', issuer: 'Самолёт',           rating: 'BB',  tenor: 3,    volume: 150,  currency: 'RUB', frequency: 'Ежемесячный', coupon: 'КС + не выше 475 бп',          comment: '005Р-01' },
  { id: 'c25', placementDate: '10.12.2026', bookDate: '08.12.2026', issuer: 'ПИК',               rating: 'BB+', tenor: 2,    volume: 120,  currency: 'RUB', frequency: 'Ежемесячный', coupon: 'КС + не выше 460 бп',          comment: '003Р-04' },
];

// ── Карточки Фиксы ─────────────────────────────────────

export interface BNFixItem {
  id: string;
  isin: string;
  placementDate: string;
  maturityDate: string;
  rating: string;
  frequency: string;
  volume: number;
  currency: string;
  yield: number;
  duration: number;
  coupon: number;
  note: string;
}

export const BN_FIXES_DATA: BNFixItem[] = [
  { id: 'f1',  isin: 'PAT-1P-01',   placementDate: '30.12.2026', maturityDate: '30.12.2029', rating: 'AAA', frequency: 'Ежемесячный купон', volume: 250,  currency: 'RUB', yield: 25,   duration: 0.18, coupon: 25,   note: 'Сбор книги заявок 17 марта, амортизация 50% через 2.5 года' },
  { id: 'f2',  isin: 'SBER-3P-08',  placementDate: '28.12.2026', maturityDate: '28.12.2031', rating: 'AAA', frequency: 'Квартальный купон',  volume: 500,  currency: 'RUB', yield: 18.5, duration: 0.21, coupon: 18.5, note: 'Объём не менее 5 млрд, возможно доразмещение' },
  { id: 'f3',  isin: 'RZD-2P-01',   placementDate: '25.12.2026', maturityDate: '25.12.2036', rating: 'AAA', frequency: 'Годовой купон',       volume: 2000, currency: 'RUB', yield: 16.5, duration: 0.14, coupon: 16.5, note: 'Приоритетное размещение для институциональных инвесторов' },
  { id: 'f4',  isin: 'VTB-7P-12',   placementDate: '28.12.2026', maturityDate: '28.12.2030', rating: 'AA+', frequency: 'Полугодовой купон',  volume: 1000, currency: 'RUB', yield: 17.5, duration: 0.16, coupon: 17.5, note: 'Амортизация 30% через 2 года, оферта через 3 года' },
  { id: 'f5',  isin: 'MTS-3P-02',   placementDate: '30.12.2026', maturityDate: '30.12.2029', rating: 'AA',  frequency: 'Квартальный купон',  volume: 400,  currency: 'RUB', yield: 17.8, duration: 0.19, coupon: 17.8, note: 'Оферта через 1.5 года' },
  { id: 'f6',  isin: 'NVLK-3P-06',  placementDate: '22.12.2026', maturityDate: '22.12.2029', rating: 'AA+', frequency: 'Полугодовой купон',  volume: 300,  currency: 'RUB', yield: 17.2, duration: 0.17, coupon: 17.2, note: 'Сбор книги до 15:00 МСК' },
  { id: 'f7',  isin: 'ROSN-4P-09',  placementDate: '15.12.2026', maturityDate: '15.12.2034', rating: 'AAA', frequency: 'Полугодовой купон',  volume: 5000, currency: 'RUB', yield: 16.0, duration: 0.12, coupon: 16.0, note: 'Крупнейшее размещение квартала, якорный инвестор ФНБ' },
  { id: 'f8',  isin: 'MGFN-2P-05',  placementDate: '12.12.2026', maturityDate: '12.12.2029', rating: 'AA',  frequency: 'Квартальный купон',  volume: 400,  currency: 'RUB', yield: 17.5, duration: 0.20, coupon: 17.5, note: 'Сбор книги 10 декабря 10:00–16:00' },
  { id: 'f9',  isin: 'GMKN-1P-03',  placementDate: '18.12.2026', maturityDate: '18.12.2031', rating: 'AA+', frequency: 'Полугодовой купон',  volume: 350,  currency: 'RUB', yield: 17.0, duration: 0.15, coupon: 17.0, note: 'Амортизация 25% ежегодно, начиная с 3-го года' },
  { id: 'f10', isin: 'SMLT-5P-01',  placementDate: '10.12.2026', maturityDate: '10.12.2029', rating: 'BB',  frequency: 'Ежемесячный купон',  volume: 150,  currency: 'RUB', yield: 22.5, duration: 0.22, coupon: 22.5, note: 'Повышенный купон на первый год' },
  { id: 'f11', isin: 'LNTA-2P-03',  placementDate: '22.12.2026', maturityDate: '22.12.2028', rating: 'BB',  frequency: 'Ежемесячный купон',  volume: 150,  currency: 'RUB', yield: 23.0, duration: 0.23, coupon: 23.0, note: 'КС + 500 бп, плавающий купон' },
  { id: 'f12', isin: 'ARLN-1P-06',  placementDate: '30.12.2026', maturityDate: '30.12.2029', rating: 'BB+', frequency: 'Ежемесячный купон',  volume: 5000, currency: 'RUB', yield: 21.5, duration: 0.20, coupon: 21.5, note: 'КС + 425 бп, оферта через 1 год' },
  { id: 'f13', isin: 'PIKK-3P-04',  placementDate: '10.12.2026', maturityDate: '10.12.2028', rating: 'BB+', frequency: 'Ежемесячный купон',  volume: 120,  currency: 'RUB', yield: 22.0, duration: 0.21, coupon: 22.0, note: 'Оферта через 1 год, книга 08.12' },
  { id: 'f14', isin: 'EVRAZ-1P-08', placementDate: '12.12.2026', maturityDate: '12.12.2030', rating: 'BB+', frequency: 'Ежемесячный купон',  volume: 200,  currency: 'RUB', yield: 21.0, duration: 0.19, coupon: 21.0, note: 'КС + 450 бп, возможна частичная амортизация' },
  { id: 'f15', isin: 'ECOEX-1P-01', placementDate: '30.12.2026', maturityDate: '30.12.2039', rating: 'B+',  frequency: 'Ежемесячный купон',  volume: 250,  currency: 'RUB', yield: 24.0, duration: 0.24, coupon: 24.0, note: 'Длинная дюрация, якорный спрос от НПФ' },
];

// ── Данные для scatter chart ───────────────────────────

export interface ScatterPoint {
  name: string;
  duration: number;
  yield: number;
  isSelected?: boolean;
}

export const SCATTER_BASE_POINTS: ScatterPoint[] = [
  { name: 'ДОМ РФ Р-6',   duration: 0.08,  yield: 68 },
  { name: 'ДОМ РФ Р-6',   duration: 0.10,  yield: 72 },
  { name: 'ДОМ РФ Р-6',   duration: 0.12,  yield: 48 },
  { name: 'ОФЗ 26238',     duration: 0.15,  yield: 45 },
  { name: 'ОФЗ 26243',     duration: 0.18,  yield: 42 },
  { name: 'СБЕР 2P-08',    duration: 0.20,  yield: 55 },
  { name: 'ВТБ 7P-10',     duration: 0.14,  yield: 60 },
  { name: 'РЖД 1P-22',     duration: 0.11,  yield: 50 },
  { name: 'ЛУКОЙЛ 4P-06',  duration: 0.13,  yield: 52 },
  { name: 'Роснефть 4P-07',duration: 0.09,  yield: 58 },
  { name: 'Газпром 3P-11', duration: 0.16,  yield: 46 },
  { name: 'МТС 2P-04',     duration: 0.19,  yield: 53 },
  { name: 'НЛМК 1P-09',    duration: 0.17,  yield: 49 },
];
