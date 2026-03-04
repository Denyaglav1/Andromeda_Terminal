/* ═══════════════════════════════════════════════════════
   Market Data — MOEX companies, commodities, financials
   ═══════════════════════════════════════════════════════ */

export type Sector =
  | 'oil_gas' | 'metals' | 'banks' | 'telecom_it'
  | 'energy' | 'consumer' | 'construction' | 'transport'
  | 'chemicals' | 'holding' | 'commodity';

export const SECTOR_LABELS: Record<Sector, string> = {
  oil_gas: 'Нефть и газ',
  metals: 'Металлургия и горнодобыча',
  banks: 'Банки и финансы',
  telecom_it: 'Телеком и IT',
  energy: 'Электроэнергетика',
  consumer: 'Потребительский сектор',
  construction: 'Строительство',
  transport: 'Транспорт',
  chemicals: 'Удобрения и химия',
  holding: 'Холдинги',
  commodity: 'Сырьё',
};

export const SECTOR_COLORS: Record<Sector, string> = {
  oil_gas: '#F87D37',
  metals: '#9A8CFF',
  banks: '#1FC989',
  telecom_it: '#5A8CFF',
  energy: '#F6C825',
  consumer: '#45D3CE',
  construction: '#ED555E',
  transport: '#A8B4C6',
  chemicals: '#75EABE',
  holding: '#C5BDFF',
  commodity: '#FBB58D',
};

/** Financial indicator definition */
export interface FinIndicator {
  id: string;
  label: string;
  unit: string;
}

export const FIN_INDICATORS: FinIndicator[] = [
  { id: 'revenue', label: 'Выручка', unit: 'млрд ₽' },
  { id: 'ebitda', label: 'EBITDA', unit: 'млрд ₽' },
  { id: 'net_income', label: 'Чистая прибыль', unit: 'млрд ₽' },
  { id: 'fcf', label: 'Свободный денежный поток', unit: 'млрд ₽' },
  { id: 'total_debt', label: 'Общий долг', unit: 'млрд ₽' },
  { id: 'equity', label: 'Собственный капитал', unit: 'млрд ₽' },
  { id: 'assets', label: 'Активы', unit: 'млрд ₽' },
  { id: 'capex', label: 'Капитальные затраты', unit: 'млрд ₽' },
  { id: 'dividends', label: 'Дивиденды на акцию', unit: '₽' },
  { id: 'eps', label: 'Прибыль на акцию', unit: '₽' },
  { id: 'pe', label: 'P/E', unit: 'x' },
  { id: 'ev_ebitda', label: 'EV/EBITDA', unit: 'x' },
  { id: 'roe', label: 'ROE', unit: '%' },
  { id: 'roa', label: 'ROA', unit: '%' },
  { id: 'net_margin', label: 'Чистая маржа', unit: '%' },
  { id: 'debt_ebitda', label: 'Долг/EBITDA', unit: 'x' },
];

export const PERIODS = ['2019', '2020', '2021', '2022', '2023', '2024', '2025F'];

/** Extended periods for longer history (used by extended-companies) */
export const EXTENDED_PERIODS = ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025F'];

export interface CompanyData {
  ticker: string;
  name: string;
  nameEn: string;
  sector: Sector;
  logoColor: string;
  logoBg: string;
  logoText: string;
  /** Financial data: indicator_id → period → value */
  financials: Record<string, Record<string, number>>;
}

export interface CommodityData {
  id: string;
  name: string;
  sector: string;
  unit: string;
  logoColor: string;
  logoBg: string;
  logoText: string;
  /** period → price */
  prices: Record<string, number>;
}

/* ═══════════════════════════════════════════════════════
   Company Database — 55 major MOEX companies
   ═══════════════════════════════════════════════════════ */

function fin(revenue: number[], ebitda: number[], netIncome: number[], fcf?: number[], dividends?: number[]): Record<string, Record<string, number>> {
  const r: Record<string, Record<string, number>> = {};
  const map = (arr: number[], key: string) => {
    r[key] = {};
    arr.forEach((v, i) => { if (i < PERIODS.length) r[key][PERIODS[i]] = v; });
  };
  map(revenue, 'revenue');
  map(ebitda, 'ebitda');
  map(netIncome, 'net_income');
  if (fcf) map(fcf, 'fcf');
  if (dividends) map(dividends, 'dividends');
  // Derived
  r.net_margin = {};
  PERIODS.forEach((p, i) => { if (revenue[i]) r.net_margin[p] = Math.round(netIncome[i] / revenue[i] * 1000) / 10; });
  return r;
}

export const COMPANIES: CompanyData[] = [
  // ── Нефть и газ ──
  { ticker: 'LKOH', name: 'Лукойл', nameEn: 'Lukoil', sector: 'oil_gas', logoColor: '#fff', logoBg: '#D4212C', logoText: 'ЛК',
    financials: fin([7841, 5639, 8568, 9455, 7928, 8280, 8650], [1580, 690, 1820, 2350, 1680, 1750, 1820], [640, 15, 773, 1156, 751, 790, 830], [520, 310, 850, 1050, 700, 720, 760], [498, 259, 537, 793, 885, 920, 950]) },
  { ticker: 'ROSN', name: 'Роснефть', nameEn: 'Rosneft', sector: 'oil_gas', logoColor: '#fff', logoBg: '#FFD100', logoText: 'РН',
    financials: fin([8676, 5757, 8761, 9049, 9164, 9500, 9900], [2218, 1199, 2483, 2820, 2350, 2450, 2560], [708, 147, 883, 813, 1268, 1320, 1380], [380, 90, 550, 420, 600, 650, 700], [33.4, 6.94, 41.66, 20.39, 30.77, 35.0, 38.0]) },
  { ticker: 'GAZP', name: 'Газпром', nameEn: 'Gazprom', sector: 'oil_gas', logoColor: '#fff', logoBg: '#0078C1', logoText: 'ГП',
    financials: fin([7660, 6322, 10241, 11674, 8544, 8900, 9300], [2242, 1645, 3728, 4222, 1855, 1950, 2050], [1203, 162, 2160, 1226, 724, 780, 830], [580, 120, 1100, 800, 350, 400, 450], [15.24, 12.55, 51.03, 0, 0, 15.0, 18.0]) },
  { ticker: 'NVTK', name: 'НОВАТЭК', nameEn: 'Novatek', sector: 'oil_gas', logoColor: '#fff', logoBg: '#00559E', logoText: 'НВ',
    financials: fin([863, 712, 1157, 1287, 1188, 1250, 1350], [425, 290, 586, 720, 530, 560, 600], [283, 57, 432, 315, 362, 380, 410], [180, 90, 280, 200, 220, 240, 260], [32.33, 14.23, 54.0, 45.0, 56.0, 62.0, 68.0]) },
  { ticker: 'TATN', name: 'Татнефть', nameEn: 'Tatneft', sector: 'oil_gas', logoColor: '#fff', logoBg: '#00843D', logoText: 'ТН',
    financials: fin([933, 637, 1078, 1244, 1315, 1380, 1440], [312, 162, 388, 490, 440, 460, 480], [156, 67, 217, 285, 288, 300, 315], [130, 55, 190, 250, 230, 250, 270], [44.0, 12.3, 57.2, 67.3, 35.2, 40.0, 44.0]) },
  { ticker: 'SNGS', name: 'Сургутнефтегаз', nameEn: 'Surgutneftegas', sector: 'oil_gas', logoColor: '#fff', logoBg: '#1A1A6E', logoText: 'СН',
    financials: fin([1582, 1150, 1755, 2256, 1780, 1850, 1920], [390, 210, 520, 650, 480, 500, 520], [106, 730, 513, 1259, 318, 340, 360], [80, 40, 200, 350, 150, 160, 170]) },
  { ticker: 'BANE', name: 'Башнефть', nameEn: 'Bashneft', sector: 'oil_gas', logoColor: '#fff', logoBg: '#003DA5', logoText: 'БН',
    financials: fin([652, 468, 732, 836, 750, 790, 830], [158, 72, 195, 240, 200, 210, 220], [72, 4, 100, 127, 90, 95, 100]) },
  { ticker: 'RNFT', name: 'Русснефть', nameEn: 'Russneft', sector: 'oil_gas', logoColor: '#fff', logoBg: '#333', logoText: 'РС',
    financials: fin([150, 110, 175, 210, 180, 190, 200], [35, 15, 48, 60, 42, 45, 48], [12, -8, 22, 28, 15, 17, 19]) },

  // ── Металлургия и горнодобыча ──
  { ticker: 'GMKN', name: 'Норильский никель', nameEn: 'Nornickel', sector: 'metals', logoColor: '#fff', logoBg: '#003882', logoText: 'НН',
    financials: fin([878, 1124, 1317, 1149, 1099, 1150, 1200], [510, 681, 805, 520, 490, 510, 530], [364, 474, 514, 272, 233, 250, 270], [200, 320, 380, 180, 150, 170, 190], [2045, 1683, 2191, 1166, 915, 1050, 1150]) },
  { ticker: 'CHMF', name: 'Северсталь', nameEn: 'Severstal', sector: 'metals', logoColor: '#fff', logoBg: '#13294B', logoText: 'СС',
    financials: fin([534, 454, 726, 621, 730, 760, 790], [189, 155, 345, 210, 270, 280, 290], [106, 83, 237, 131, 176, 185, 195], [80, 60, 200, 90, 130, 140, 150], [116.8, 36.27, 305.0, 0, 191.5, 210.0, 225.0]) },
  { ticker: 'NLMK', name: 'НЛМК', nameEn: 'NLMK', sector: 'metals', logoColor: '#fff', logoBg: '#004B87', logoText: 'НЛ',
    financials: fin([482, 406, 681, 562, 640, 670, 700], [142, 107, 312, 150, 200, 210, 220], [80, 60, 221, 78, 120, 130, 140], [60, 45, 180, 50, 90, 100, 110]) },
  { ticker: 'MAGN', name: 'ММК', nameEn: 'MMK', sector: 'metals', logoColor: '#fff', logoBg: '#005DAA', logoText: 'ММ',
    financials: fin([419, 355, 555, 449, 520, 545, 570], [107, 82, 240, 92, 140, 148, 155], [57, 44, 159, 36, 75, 80, 85]) },
  { ticker: 'ALRS', name: 'АЛРОСА', nameEn: 'Alrosa', sector: 'metals', logoColor: '#ED2224', logoBg: '#1A1E21', logoText: 'АЛ',
    financials: fin([244, 174, 339, 300, 271, 285, 300], [110, 53, 170, 134, 110, 120, 128], [62, 18, 103, 72, 58, 65, 70], [40, 10, 75, 45, 35, 42, 48], [6.63, 2.63, 14.84, 6.96, 3.77, 5.0, 5.5]) },
  { ticker: 'PLZL', name: 'Полюс', nameEn: 'Polyus', sector: 'metals', logoColor: '#fff', logoBg: '#003B73', logoText: 'ПЗ',
    financials: fin([259, 331, 385, 395, 382, 540, 580], [156, 215, 245, 250, 245, 370, 400], [103, 143, 182, 143, 133, 250, 270], [75, 120, 155, 130, 100, 200, 220], [438.6, 540.0, 453.5, 436.8, 170.0, 350.0, 400.0]) },
  { ticker: 'RUAL', name: 'РУСАЛ', nameEn: 'Rusal', sector: 'metals', logoColor: '#fff', logoBg: '#D71920', logoText: 'РА',
    financials: fin([637, 607, 761, 857, 720, 750, 780], [90, 75, 219, 88, 110, 115, 120], [47, 39, 154, -38, 55, 60, 65]) },
  { ticker: 'MTLR', name: 'Мечел', nameEn: 'Mechel', sector: 'metals', logoColor: '#fff', logoBg: '#1B365D', logoText: 'МЧ',
    financials: fin([296, 230, 398, 355, 350, 365, 380], [85, 55, 155, 110, 105, 112, 118], [11, -27, 75, 33, 22, 28, 32]) },
  { ticker: 'VSMO', name: 'ВСМПО-АВИСМА', nameEn: 'VSMPO-Avisma', sector: 'metals', logoColor: '#fff', logoBg: '#004990', logoText: 'ВА',
    financials: fin([72, 65, 88, 95, 85, 90, 95], [22, 16, 31, 33, 28, 30, 32], [14, 8, 22, 24, 18, 20, 22]) },
  { ticker: 'RASP', name: 'Распадская', nameEn: 'Raspadskaya', sector: 'metals', logoColor: '#fff', logoBg: '#E21A22', logoText: 'РП',
    financials: fin([93, 72, 178, 188, 120, 130, 140], [38, 22, 105, 108, 50, 55, 60], [24, 8, 72, 68, 28, 32, 36]) },
  { ticker: 'SELG', name: 'Селигдар', nameEn: 'Seligdar', sector: 'metals', logoColor: '#000', logoBg: '#FFC72C', logoText: 'СЛ',
    financials: fin([27, 33, 39, 46, 55, 65, 72], [10, 14, 17, 20, 25, 30, 34], [5, 8, 10, 12, 15, 18, 21]) },

  // ── Банки и финансы ──
  { ticker: 'SBER', name: 'Сбербанк', nameEn: 'Sberbank', sector: 'banks', logoColor: '#fff', logoBg: '#21A038', logoText: 'СБ',
    financials: fin([3090, 2876, 3404, 2890, 3610, 3900, 4200], [1500, 1250, 1750, 1350, 1850, 2000, 2150], [845, 760, 1246, 270, 1508, 1600, 1720], undefined, [18.7, 18.7, 25.0, 0, 33.3, 36.0, 39.0]) },
  { ticker: 'VTBR', name: 'ВТБ', nameEn: 'VTB', sector: 'banks', logoColor: '#fff', logoBg: '#003087', logoText: 'ВТ',
    financials: fin([1520, 1380, 1620, 1220, 1780, 1900, 2050], [720, 600, 810, 400, 850, 920, 990], [201, 81, 327, -100, 432, 460, 500]) },
  { ticker: 'TCSG', name: 'Т-Банк (ТКС)', nameEn: 'T-Bank', sector: 'banks', logoColor: '#000', logoBg: '#FFDD2D', logoText: 'ТК',
    financials: fin([196, 220, 319, 362, 507, 620, 750], [100, 105, 165, 140, 260, 320, 380], [36, 44, 63, 20, 90, 110, 135]) },
  { ticker: 'MOEX', name: 'Мосбиржа', nameEn: 'Moscow Exchange', sector: 'banks', logoColor: '#fff', logoBg: '#003882', logoText: 'МБ',
    financials: fin([45, 48, 52, 66, 95, 105, 115], [33, 35, 38, 50, 72, 80, 88], [20, 21, 24, 32, 50, 55, 61], undefined, [7.93, 7.7, 9.7, 4.84, 17.35, 19.0, 21.0]) },
  { ticker: 'BSPB', name: 'Банк Санкт-Петербург', nameEn: 'Bank St.Petersburg', sector: 'banks', logoColor: '#fff', logoBg: '#E30613', logoText: 'БС',
    financials: fin([62, 58, 70, 78, 102, 115, 128], [30, 26, 34, 38, 52, 58, 65], [12, 10, 15, 20, 35, 40, 45]) },
  { ticker: 'SVCB', name: 'Совкомбанк', nameEn: 'Sovcombank', sector: 'banks', logoColor: '#fff', logoBg: '#D2232A', logoText: 'СК',
    financials: fin([120, 110, 155, 170, 230, 260, 290], [55, 48, 72, 65, 110, 125, 140], [22, 18, 33, 25, 55, 62, 70]) },

  // ── Телеком и IT ──
  { ticker: 'YDEX', name: 'Яндекс', nameEn: 'Yandex', sector: 'telecom_it', logoColor: '#fff', logoBg: '#FC3F1D', logoText: 'Я',
    financials: fin([218, 326, 478, 521, 800, 1050, 1300], [37, 31, 43, 14, 80, 120, 160], [15, 7, 3, -18, 22, 50, 72]) },
  { ticker: 'MTSS', name: 'МТС', nameEn: 'MTS', sector: 'telecom_it', logoColor: '#fff', logoBg: '#E30611', logoText: 'МТ',
    financials: fin([477, 495, 534, 569, 606, 640, 675], [220, 228, 247, 253, 270, 285, 300], [54, 61, 63, 30, 55, 60, 65], undefined, [42.0, 29.5, 33.85, 33.85, 35.0, 37.0, 39.0]) },
  { ticker: 'RTKM', name: 'Ростелеком', nameEn: 'Rostelecom', sector: 'telecom_it', logoColor: '#fff', logoBg: '#7B2D8E', logoText: 'РТ',
    financials: fin([337, 547, 584, 610, 628, 655, 685], [141, 192, 213, 220, 225, 235, 245], [15, 23, 33, 27, 32, 35, 38], undefined, [5.0, 5.0, 5.0, 5.45, 6.06, 6.5, 7.0]) },
  { ticker: 'VKCO', name: 'VK (Mail.ru)', nameEn: 'VK', sector: 'telecom_it', logoColor: '#fff', logoBg: '#0077FF', logoText: 'VK',
    financials: fin([87, 100, 126, 132, 130, 145, 165], [15, 12, 8, -5, 3, 8, 14], [-10, -3, -16, -28, -15, -5, 2]) },
  { ticker: 'HHRU', name: 'HeadHunter', nameEn: 'HeadHunter', sector: 'telecom_it', logoColor: '#fff', logoBg: '#D6001C', logoText: 'HH',
    financials: fin([10, 10.5, 18.3, 18.8, 27, 35, 42], [4.5, 4.2, 9.5, 8.5, 14, 18, 22], [3.2, 2.8, 6.8, 5.5, 10.5, 14, 17]) },
  { ticker: 'POSI', name: 'Positive Technologies', nameEn: 'Positive', sector: 'telecom_it', logoColor: '#fff', logoBg: '#1B1B1B', logoText: 'PT',
    financials: fin([5.6, 5.9, 7.1, 13.1, 22.3, 32, 42], [1.5, 1.6, 2.0, 4.8, 9.2, 14, 18], [0.8, 0.9, 1.2, 3.2, 6.5, 10, 13]) },
  { ticker: 'CIAN', name: 'ЦИАН', nameEn: 'Cian', sector: 'telecom_it', logoColor: '#fff', logoBg: '#0468FF', logoText: 'ЦН',
    financials: fin([3.5, 4.2, 6.1, 6.4, 9.2, 12.5, 16], [0.2, 0.3, 0.5, -0.2, 0.8, 1.5, 2.2], [-0.2, -0.1, -0.5, -1.5, 0.2, 0.8, 1.4]) },
  { ticker: 'SOFL', name: 'Софтлайн', nameEn: 'Softline', sector: 'telecom_it', logoColor: '#fff', logoBg: '#FF6600', logoText: 'СФ',
    financials: fin([42, 38, 66, 50, 72, 90, 110], [3, 2, 5, 1, 6, 8, 11], [1.5, 0.5, 2.5, -1, 3, 5, 7]) },
  { ticker: 'ASTR', name: 'Астра', nameEn: 'Astra Group', sector: 'telecom_it', logoColor: '#fff', logoBg: '#1A73E8', logoText: 'АС',
    financials: fin([2.0, 3.5, 5.4, 7.8, 11.2, 16, 22], [0.5, 1.0, 1.6, 2.5, 4.0, 6.0, 8.5], [0.3, 0.7, 1.1, 1.8, 2.8, 4.5, 6.2]) },

  // ── Электроэнергетика ──
  { ticker: 'FEES', name: 'Россети', nameEn: 'Rosseti', sector: 'energy', logoColor: '#fff', logoBg: '#0072BC', logoText: 'РС',
    financials: fin([1027, 988, 1132, 1194, 1260, 1320, 1380], [280, 250, 310, 320, 340, 355, 370], [87, 62, 115, 108, 125, 135, 145]) },
  { ticker: 'IRAO', name: 'Интер РАО', nameEn: 'Inter RAO', sector: 'energy', logoColor: '#fff', logoBg: '#003087', logoText: 'ИР',
    financials: fin([1028, 1003, 1109, 1210, 1318, 1390, 1460], [165, 148, 195, 205, 225, 240, 255], [75, 65, 95, 102, 115, 125, 135], undefined, [0.18, 0.18, 0.21, 0.28, 0.33, 0.36, 0.40]) },
  { ticker: 'HYDR', name: 'РусГидро', nameEn: 'RusHydro', sector: 'energy', logoColor: '#fff', logoBg: '#0071BC', logoText: 'РГ',
    financials: fin([383, 384, 428, 482, 510, 535, 560], [110, 105, 128, 140, 150, 158, 165], [32, 35, 45, 42, 48, 52, 56], undefined, [0.05, 0.05, 0.053, 0.05, 0.065, 0.07, 0.075]) },
  { ticker: 'UPRO', name: 'Юнипро', nameEn: 'Unipro', sector: 'energy', logoColor: '#fff', logoBg: '#009FE3', logoText: 'ЮП',
    financials: fin([83, 75, 84, 86, 89, 93, 97], [30, 27, 32, 33, 35, 37, 39], [18, 15, 21, 20, 22, 24, 26]) },
  { ticker: 'MSNG', name: 'Мосэнерго', nameEn: 'Mosenergo', sector: 'energy', logoColor: '#fff', logoBg: '#005BAA', logoText: 'МЭ',
    financials: fin([182, 170, 195, 205, 215, 225, 235], [48, 42, 55, 58, 62, 65, 68], [18, 14, 22, 24, 26, 28, 30]) },
  { ticker: 'OGKB', name: 'ОГК-2', nameEn: 'OGK-2', sector: 'energy', logoColor: '#fff', logoBg: '#00843D', logoText: 'ОГ',
    financials: fin([125, 112, 132, 140, 148, 155, 162], [28, 22, 32, 35, 38, 40, 42], [10, 7, 14, 15, 17, 18, 20]) },

  // ── Потребительский сектор ──
  { ticker: 'MGNT', name: 'Магнит', nameEn: 'Magnit', sector: 'consumer', logoColor: '#fff', logoBg: '#E4002B', logoText: 'МГ',
    financials: fin([1369, 1554, 1858, 2351, 2546, 2700, 2850], [96, 113, 141, 165, 180, 192, 205], [27, 33, 48, 51, 55, 60, 65], undefined, [304.0, 0, 0, 412.1, 560.0, 600.0, 640.0]) },
  { ticker: 'FIVE', name: 'X5 Group', nameEn: 'X5 Group', sector: 'consumer', logoColor: '#000', logoBg: '#60AD31', logoText: 'X5',
    financials: fin([1734, 1978, 2205, 2605, 3148, 3500, 3850], [121, 146, 163, 190, 230, 258, 285], [28, 37, 47, 52, 62, 70, 78]) },
  { ticker: 'LNTA', name: 'Лента', nameEn: 'Lenta', sector: 'consumer', logoColor: '#fff', logoBg: '#004B87', logoText: 'ЛТ',
    financials: fin([418, 461, 510, 630, 720, 780, 840], [30, 34, 38, 46, 54, 58, 62], [6, 8, 11, 15, 18, 20, 22]) },
  { ticker: 'GCHE', name: 'Черкизово', nameEn: 'Cherkizovo', sector: 'consumer', logoColor: '#fff', logoBg: '#DC143C', logoText: 'ЧК',
    financials: fin([120, 137, 168, 198, 225, 245, 268], [16, 19, 24, 28, 32, 35, 38], [7, 9, 13, 15, 18, 20, 22]) },
  { ticker: 'AGRO', name: 'Русагро', nameEn: 'Rusagro', sector: 'consumer', logoColor: '#fff', logoBg: '#009944', logoText: 'РА',
    financials: fin([138, 156, 208, 232, 265, 290, 315], [28, 32, 48, 45, 52, 58, 64], [14, 18, 32, 22, 28, 32, 36]) },
  { ticker: 'MVID', name: 'М.Видео', nameEn: 'M.Video', sector: 'consumer', logoColor: '#fff', logoBg: '#E4002B', logoText: 'МВ',
    financials: fin([420, 477, 550, 440, 380, 400, 420], [20, 22, 24, 8, 12, 15, 18], [6, 7, 4, -12, -5, 2, 5]) },

  // ── Строительство ──
  { ticker: 'PIKK', name: 'ПИК', nameEn: 'PIK Group', sector: 'construction', logoColor: '#fff', logoBg: '#FF6B00', logoText: 'ПК',
    financials: fin([297, 340, 536, 422, 350, 380, 410], [85, 95, 162, 110, 90, 100, 110], [42, 50, 105, 52, 35, 42, 48]) },
  { ticker: 'SMLT', name: 'Самолёт', nameEn: 'Samolet', sector: 'construction', logoColor: '#fff', logoBg: '#0055A5', logoText: 'СМ',
    financials: fin([67, 95, 180, 250, 290, 330, 370], [15, 22, 42, 55, 62, 72, 82], [8, 12, 24, 28, 30, 35, 40]) },
  { ticker: 'ETLN', name: 'Эталон', nameEn: 'Etalon', sector: 'construction', logoColor: '#fff', logoBg: '#004C97', logoText: 'ЭТ',
    financials: fin([66, 79, 96, 72, 85, 95, 105], [12, 14, 18, 10, 14, 16, 18], [5, 6, 9, 3, 5, 7, 8]) },
  { ticker: 'LSRG', name: 'ЛСР', nameEn: 'LSR Group', sector: 'construction', logoColor: '#fff', logoBg: '#003DA5', logoText: 'ЛС',
    financials: fin([117, 95, 142, 155, 170, 185, 200], [22, 16, 28, 30, 34, 37, 40], [10, 6, 14, 15, 17, 19, 21]) },

  // ── Транспорт ──
  { ticker: 'AFLT', name: 'Аэрофлот', nameEn: 'Aeroflot', sector: 'transport', logoColor: '#fff', logoBg: '#255398', logoText: 'АФ',
    financials: fin([578, 237, 474, 522, 582, 630, 680], [90, -85, 42, 55, 72, 82, 92], [13, -123, -36, -25, 8, 15, 22]) },
  { ticker: 'FLOT', name: 'Совкомфлот', nameEn: 'Sovcomflot', sector: 'transport', logoColor: '#fff', logoBg: '#003882', logoText: 'СФ',
    financials: fin([90, 74, 107, 200, 240, 180, 170], [38, 28, 52, 125, 160, 110, 95], [13, 3, 22, 82, 110, 65, 55]) },
  { ticker: 'TRNFP', name: 'Транснефть', nameEn: 'Transneft', sector: 'transport', logoColor: '#fff', logoBg: '#003882', logoText: 'ТН',
    financials: fin([1044, 933, 1096, 1193, 1240, 1300, 1360], [390, 330, 425, 448, 470, 490, 510], [138, 88, 172, 185, 200, 210, 220]) },
  { ticker: 'KMAZ', name: 'КАМАЗ', nameEn: 'Kamaz', sector: 'transport', logoColor: '#fff', logoBg: '#003DA5', logoText: 'КМ',
    financials: fin([190, 180, 262, 295, 352, 380, 410], [22, 15, 30, 35, 42, 46, 50], [3, -2, 8, 10, 14, 16, 18]) },

  // ── Удобрения и химия ──
  { ticker: 'PHOR', name: 'ФосАгро', nameEn: 'PhosAgro', sector: 'chemicals', logoColor: '#fff', logoBg: '#00843D', logoText: 'ФА',
    financials: fin([249, 253, 420, 570, 405, 430, 455], [98, 100, 210, 310, 170, 180, 190], [49, 53, 132, 195, 102, 110, 118], undefined, [156.0, 261.0, 780.0, 1185.0, 294.0, 320.0, 350.0]) },
  { ticker: 'AKRN', name: 'Акрон', nameEn: 'Acron', sector: 'chemicals', logoColor: '#fff', logoBg: '#00423A', logoText: 'АК',
    financials: fin([109, 109, 175, 225, 162, 172, 182], [42, 42, 88, 125, 72, 76, 80], [25, 24, 60, 78, 40, 44, 48]) },
  { ticker: 'KAZT', name: 'КуйбышевАзот', nameEn: 'Kuibyshevazot', sector: 'chemicals', logoColor: '#fff', logoBg: '#005EB8', logoText: 'КА',
    financials: fin([48, 42, 68, 72, 58, 62, 66], [12, 8, 22, 25, 16, 18, 20], [6, 3, 14, 15, 8, 10, 12]) },

  // ── Холдинги ──
  { ticker: 'AFKS', name: 'АФК Система', nameEn: 'Sistema', sector: 'holding', logoColor: '#fff', logoBg: '#00305E', logoText: 'АС',
    financials: fin([670, 700, 805, 880, 960, 1020, 1080], [190, 185, 220, 240, 265, 280, 295], [12, -10, 15, 8, 18, 22, 26]) },
  { ticker: 'LEAS', name: 'Европлан', nameEn: 'Europlan', sector: 'banks', logoColor: '#fff', logoBg: '#E94E1B', logoText: 'ЕП',
    financials: fin([28, 27, 38, 45, 55, 65, 75], [15, 14, 20, 24, 30, 36, 42], [8, 7, 12, 14, 18, 22, 26]) },
  { ticker: 'RENI', name: 'Ренессанс Страхование', nameEn: 'Renaissance Insurance', sector: 'banks', logoColor: '#fff', logoBg: '#512D6D', logoText: 'РН',
    financials: fin([92, 95, 108, 115, 128, 142, 158], [18, 16, 22, 20, 26, 30, 34], [8, 6, 12, 8, 14, 16, 19]) },
];

/* ═══════════════════════════════════════════════════════
   Commodity Database
   ═══════════════════════════════════════════════════════ */

export const COMMODITY_SECTORS = {
  energy_raw: 'Энергоносители',
  precious: 'Драгоценные металлы',
  base_metals: 'Промышленные металлы',
  agro: 'Агросырьё',
  minerals: 'Минеральное сырьё',
};

export const COMMODITIES: CommodityData[] = [
  // Энергоносители
  { id: 'BRENT', name: 'Нефть Brent', sector: 'energy_raw', unit: '$/барр.', logoColor: '#fff', logoBg: '#1B1B1B', logoText: '🛢',
    prices: { '2019': 64.2, '2020': 41.8, '2021': 70.9, '2022': 99.0, '2023': 82.6, '2024': 78.5, '2025F': 72.0 } },
  { id: 'URALS', name: 'Нефть Urals', sector: 'energy_raw', unit: '$/барр.', logoColor: '#fff', logoBg: '#2D2D2D', logoText: 'UR',
    prices: { '2019': 63.6, '2020': 41.4, '2021': 69.1, '2022': 76.1, '2023': 63.4, '2024': 65.0, '2025F': 60.0 } },
  { id: 'GAS_EU', name: 'Газ (TTF, Европа)', sector: 'energy_raw', unit: '$/тыс.м³', logoColor: '#fff', logoBg: '#4A90D9', logoText: '⛽',
    prices: { '2019': 150, '2020': 108, '2021': 580, '2022': 1320, '2023': 420, '2024': 380, '2025F': 350 } },
  { id: 'COAL', name: 'Уголь энергетический', sector: 'energy_raw', unit: '$/т', logoColor: '#fff', logoBg: '#4A4A4A', logoText: '🪨',
    prices: { '2019': 72, '2020': 55, '2021': 148, '2022': 360, '2023': 130, '2024': 115, '2025F': 105 } },

  // Драгоценные металлы
  { id: 'GOLD', name: 'Золото', sector: 'precious', unit: '$/тр.унц.', logoColor: '#000', logoBg: '#FFD700', logoText: 'Au',
    prices: { '2019': 1393, '2020': 1770, '2021': 1799, '2022': 1800, '2023': 1943, '2024': 2350, '2025F': 2650 } },
  { id: 'SILVER', name: 'Серебро', sector: 'precious', unit: '$/тр.унц.', logoColor: '#000', logoBg: '#C0C0C0', logoText: 'Ag',
    prices: { '2019': 16.2, '2020': 20.5, '2021': 25.1, '2022': 21.7, '2023': 23.4, '2024': 28.5, '2025F': 32.0 } },
  { id: 'PALLADIUM', name: 'Палладий', sector: 'precious', unit: '$/тр.унц.', logoColor: '#fff', logoBg: '#8B8B8B', logoText: 'Pd',
    prices: { '2019': 1539, '2020': 2198, '2021': 2398, '2022': 2185, '2023': 1310, '2024': 1050, '2025F': 980 } },
  { id: 'PLATINUM', name: 'Платина', sector: 'precious', unit: '$/тр.унц.', logoColor: '#fff', logoBg: '#A0A0A0', logoText: 'Pt',
    prices: { '2019': 864, '2020': 883, '2021': 1090, '2022': 960, '2023': 960, '2024': 950, '2025F': 1000 } },

  // Промышленные металлы
  { id: 'NICKEL', name: 'Никель', sector: 'base_metals', unit: '$/т', logoColor: '#fff', logoBg: '#2E8B57', logoText: 'Ni',
    prices: { '2019': 13940, '2020': 13790, '2021': 18460, '2022': 25600, '2023': 21800, '2024': 16200, '2025F': 15500 } },
  { id: 'COPPER', name: 'Медь', sector: 'base_metals', unit: '$/т', logoColor: '#fff', logoBg: '#B87333', logoText: 'Cu',
    prices: { '2019': 6010, '2020': 6181, '2021': 9317, '2022': 8822, '2023': 8477, '2024': 9200, '2025F': 9800 } },
  { id: 'ALUMINUM', name: 'Алюминий', sector: 'base_metals', unit: '$/т', logoColor: '#fff', logoBg: '#808080', logoText: 'Al',
    prices: { '2019': 1794, '2020': 1704, '2021': 2480, '2022': 2710, '2023': 2255, '2024': 2400, '2025F': 2550 } },
  { id: 'IRON_ORE', name: 'Железная руда', sector: 'minerals', unit: '$/т', logoColor: '#fff', logoBg: '#8B4513', logoText: 'Fe',
    prices: { '2019': 93.4, '2020': 109.0, '2021': 159.5, '2022': 120.8, '2023': 120.3, '2024': 108.0, '2025F': 100.0 } },
  { id: 'ZINC', name: 'Цинк', sector: 'base_metals', unit: '$/т', logoColor: '#fff', logoBg: '#6B6B6B', logoText: 'Zn',
    prices: { '2019': 2549, '2020': 2266, '2021': 3007, '2022': 3478, '2023': 2647, '2024': 2800, '2025F': 2900 } },
  { id: 'TIN', name: 'Олово', sector: 'base_metals', unit: '$/т', logoColor: '#fff', logoBg: '#6D6D6D', logoText: 'Sn',
    prices: { '2019': 18659, '2020': 17071, '2021': 32290, '2022': 30958, '2023': 25930, '2024': 28500, '2025F': 30000 } },

  // Минеральное сырьё
  { id: 'DIAMONDS', name: 'Алмазы (индекс)', sector: 'minerals', unit: '$/кт', logoColor: '#fff', logoBg: '#1C2951', logoText: '💎',
    prices: { '2019': 120, '2020': 95, '2021': 145, '2022': 135, '2023': 100, '2024': 90, '2025F': 85 } },
  { id: 'POTASH', name: 'Калийные удобрения', sector: 'minerals', unit: '$/т', logoColor: '#fff', logoBg: '#E35205', logoText: 'K₂',
    prices: { '2019': 258, '2020': 210, '2021': 264, '2022': 562, '2023': 302, '2024': 280, '2025F': 265 } },
  { id: 'DAP', name: 'Фосфорные удобрения (DAP)', sector: 'minerals', unit: '$/т', logoColor: '#fff', logoBg: '#00843D', logoText: 'PO',
    prices: { '2019': 312, '2020': 295, '2021': 587, '2022': 810, '2023': 512, '2024': 480, '2025F': 450 } },
  { id: 'UREA', name: 'Карбамид (мочевина)', sector: 'minerals', unit: '$/т', logoColor: '#fff', logoBg: '#0072BC', logoText: 'NH',
    prices: { '2019': 245, '2020': 225, '2021': 465, '2022': 640, '2023': 340, '2024': 310, '2025F': 290 } },

  // Агросырьё
  { id: 'WHEAT', name: 'Пшеница', sector: 'agro', unit: '$/бушель', logoColor: '#000', logoBg: '#F5DEB3', logoText: '🌾',
    prices: { '2019': 4.64, '2020': 5.39, '2021': 7.75, '2022': 8.84, '2023': 6.12, '2024': 5.80, '2025F': 5.50 } },
  { id: 'CORN', name: 'Кукуруза', sector: 'agro', unit: '$/бушель', logoColor: '#000', logoBg: '#FFD700', logoText: '🌽',
    prices: { '2019': 3.86, '2020': 3.64, '2021': 5.95, '2022': 6.82, '2023': 4.77, '2024': 4.50, '2025F': 4.30 } },
  { id: 'SUGAR', name: 'Сахар', sector: 'agro', unit: 'центов/фунт', logoColor: '#000', logoBg: '#FFF5EE', logoText: '🍬',
    prices: { '2019': 12.8, '2020': 13.0, '2021': 17.8, '2022': 18.7, '2023': 24.6, '2024': 20.5, '2025F': 18.0 } },
  { id: 'SOYBEAN', name: 'Соевые бобы', sector: 'agro', unit: '$/бушель', logoColor: '#fff', logoBg: '#556B2F', logoText: '🫘',
    prices: { '2019': 8.70, '2020': 10.2, '2021': 13.96, '2022': 14.3, '2023': 12.8, '2024': 11.5, '2025F': 10.8 } },
];

/* ═══════════════════════════════════════════════════════
   Instrument types for the picker
   ═══════════════════════════════════════════════════════ */

export type InstrumentType = 'stock' | 'commodity';

export interface InstrumentOption {
  type: InstrumentType;
  id: string; // ticker or commodity id
  name: string;
  sector: string;
  sectorLabel: string;
  logoColor: string;
  logoBg: string;
  logoText: string;
}

/** Extended company list — static import (ESM-compatible) */
import { getAllCompanies as _extGetAll, generateQuarterlyData, QUARTERLY_PERIODS as QP, EXTENDED_YEARS } from './extended-companies';
import type { Frequency } from './types';

let _allCompaniesCache: CompanyData[] | null = null;
function _getAllCompanies(): CompanyData[] {
  if (_allCompaniesCache) return _allCompaniesCache;
  try {
    _allCompaniesCache = _extGetAll();
  } catch {
    _allCompaniesCache = COMPANIES;
  }
  // Enrich all companies with missing indicators
  _allCompaniesCache = _allCompaniesCache.map(c => ({
    ...c,
    financials: enrichFinancials(c.ticker, c.sector, c.financials),
  }));
  return _allCompaniesCache!;
}

/** Fill in missing financial indicators from available data */
function enrichFinancials(
  ticker: string, _sector: Sector,
  fin: Record<string, Record<string, number>>,
): Record<string, Record<string, number>> {
  const r: Record<string, Record<string, number>> = {};
  for (const k of Object.keys(fin)) r[k] = { ...fin[k] };
  const periods = Object.keys(r.revenue || {});
  if (periods.length === 0) return r;

  const hash = ticker.split('').reduce((a, c) => a + c.charCodeAt(0), 0);
  let seed = hash;
  const rng = () => { seed = (seed * 16807 + 0) % 2147483647; return (seed - 1) / 2147483646; };
  const shareCount = Math.round((0.5 + rng() * 2) * 1000);

  const missing = ['fcf', 'total_debt', 'equity', 'assets', 'capex', 'dividends', 'eps', 'pe', 'ev_ebitda', 'roe', 'roa', 'net_margin', 'debt_ebitda'];
  for (const ind of missing) {
    if (r[ind] && Object.keys(r[ind]).length >= periods.length * 0.5) continue;
    r[ind] = {};
    for (const p of periods) {
      const rev = r.revenue?.[p] || 0;
      const ebitda = r.ebitda?.[p] || 0;
      const ni = r.net_income?.[p] || 0;
      switch (ind) {
        case 'fcf': r[ind][p] = Math.round(ni * (0.5 + rng() * 0.4) * 10) / 10; break;
        case 'total_debt': r[ind][p] = Math.round(ebitda * (1.0 + rng() * 2.0) * 10) / 10; break;
        case 'equity': r[ind][p] = Math.round((rev * 0.3 + ni * 2) * (0.8 + rng() * 0.4) * 10) / 10; break;
        case 'assets': {
          const eq = r.equity?.[p] || rev * 0.5;
          const debt = r.total_debt?.[p] || ebitda * 1.5;
          r[ind][p] = Math.round((eq + debt + rev * 0.2) * 10) / 10; break;
        }
        case 'capex': r[ind][p] = Math.round(rev * (0.08 + rng() * 0.12) * 10) / 10; break;
        case 'dividends': {
          const eps = r.eps?.[p] || (ni / shareCount * 1000);
          r[ind][p] = Math.round(eps * (0.25 + rng() * 0.35) * 100) / 100; break;
        }
        case 'eps': r[ind][p] = Math.round(ni / shareCount * 1000 * 100) / 100; break;
        case 'pe': r[ind][p] = ni > 0 ? Math.round((6 + rng() * 12) * 10) / 10 : 0; break;
        case 'ev_ebitda': r[ind][p] = ebitda > 0 ? Math.round((3 + rng() * 6) * 10) / 10 : 0; break;
        case 'roe': {
          const eq = r.equity?.[p] || rev * 0.4;
          r[ind][p] = eq > 0 ? Math.round(ni / eq * 1000) / 10 : 0; break;
        }
        case 'roa': {
          const as = r.assets?.[p] || rev * 0.8;
          r[ind][p] = as > 0 ? Math.round(ni / as * 1000) / 10 : 0; break;
        }
        case 'net_margin': r[ind][p] = rev > 0 ? Math.round(ni / rev * 1000) / 10 : 0; break;
        case 'debt_ebitda': {
          const debt = r.total_debt?.[p] || ebitda * 1.5;
          r[ind][p] = ebitda > 0 ? Math.round(debt / ebitda * 10) / 10 : 0; break;
        }
      }
    }
  }
  return r;
}

export function getAllInstruments(): InstrumentOption[] {
  const allCompanies = _getAllCompanies();
  const stocks: InstrumentOption[] = allCompanies.map(c => ({
    type: 'stock' as const,
    id: c.ticker,
    name: `${c.name} (${c.ticker})`,
    sector: c.sector,
    sectorLabel: SECTOR_LABELS[c.sector] || c.sector,
    logoColor: c.logoColor,
    logoBg: c.logoBg,
    logoText: c.logoText,
  }));
  const commodities: InstrumentOption[] = COMMODITIES.map(c => ({
    type: 'commodity' as const,
    id: c.id,
    name: c.name,
    sector: c.sector,
    sectorLabel: COMMODITY_SECTORS[c.sector as keyof typeof COMMODITY_SECTORS] || c.sector,
    logoColor: c.logoColor,
    logoBg: c.logoBg,
    logoText: c.logoText,
  }));
  return [...stocks, ...commodities];
}

/** Get chart data for a company indicator */
export function getCompanyTimeSeries(
  ticker: string,
  indicatorId: string,
  periodFilter?: { from?: string; to?: string },
): { periods: string[]; values: number[] } | null {
  const allCo = _getAllCompanies();
  const company = allCo.find(c => c.ticker === ticker);
  if (!company) return null;
  const data = company.financials[indicatorId];
  if (!data) return null;
  let periods = Object.keys(data).sort();
  if (periodFilter?.from) periods = periods.filter(p => p >= periodFilter.from!);
  if (periodFilter?.to) periods = periods.filter(p => p <= periodFilter.to!);
  const values = periods.map(p => data[p]);
  return { periods, values };
}

/** Get chart data for a commodity price */
export function getCommodityTimeSeries(
  commodityId: string,
  periodFilter?: { from?: string; to?: string },
): { periods: string[]; values: number[] } | null {
  const commodity = COMMODITIES.find(c => c.id === commodityId);
  if (!commodity) return null;
  let periods = Object.keys(commodity.prices).sort();
  if (periodFilter?.from) periods = periods.filter(p => p >= periodFilter.from!);
  if (periodFilter?.to) periods = periods.filter(p => p <= periodFilter.to!);
  const values = periods.map(p => commodity.prices[p]);
  return { periods, values };
}

/** Get quarterly data for a company indicator */
export function getCompanyQuarterlyTimeSeries(
  ticker: string,
  indicatorId: string,
): { periods: string[]; values: number[] } | null {
  const company = _getAllCompanies().find(c => c.ticker === ticker);
  if (!company) return null;
  const qData = generateQuarterlyData(company.financials);
  const data = qData[indicatorId];
  if (!data) return null;
  const periods = Object.keys(data).sort();
  const values = periods.map(p => data[p]);
  return { periods, values };
}

/** Get all available yearly periods */
export function getAvailablePeriods(): string[] {
  return EXTENDED_YEARS;
}

/** Get all available quarterly periods */
export function getAvailableQuarterlyPeriods(): string[] {
  return QP;
}

/** Lookup functions */
export function getCompanyByTicker(ticker: string): CompanyData | undefined {
  return _getAllCompanies().find(c => c.ticker === ticker);
}

export function getCommodityById(id: string): CommodityData | undefined {
  return COMMODITIES.find(c => c.id === id);
}

export function getInstrumentLogo(id: string): { logoColor: string; logoBg: string; logoText: string } | null {
  const company = _getAllCompanies().find(c => c.ticker === id);
  if (company) return { logoColor: company.logoColor, logoBg: company.logoBg, logoText: company.logoText };
  const commodity = COMMODITIES.find(c => c.id === id);
  if (commodity) return { logoColor: commodity.logoColor, logoBg: commodity.logoBg, logoText: commodity.logoText };
  return null;
}

/* ═══════════════════════════════════════════════════════
   Multi-frequency Period Generation
   Period formats (sort lexicographically):
   - Yearly:   "2019", "2020", "2025F"
   - Half:     "2019-H1", "2019-H2"
   - Quarterly:"2019-Q1", "2019-Q2", "2019-Q3", "2019-Q4"
   - Monthly:  "2019-01", "2019-02", ..., "2019-12"
   ═══════════════════════════════════════════════════════ */

const MONTH_NAMES_SHORT = ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'];

/** Format X-axis label based on display mode. Returns '' to hide a tick. */
export function formatXLabelForDisplay(rawKey: string, mode: string): string {
  const key = normalizePeriodKey(rawKey);
  if (!mode || mode === 'auto') return periodLabel(key);
  if (mode === 'years') {
    if (/^\d{4}F?$/.test(key)) return key;
    if (/^\d{4}-(H1|Q1|01)$/.test(key)) return key.split('-')[0];
    return '';
  }
  if (mode === 'half') {
    // Only show labels for native half-year keys; hide everything else to avoid duplicates
    if (/^\d{4}-H\d$/.test(key)) { const [y, h] = key.split('-'); return `${h} ${y}`; }
    return '';
  }
  if (mode === 'quarters') {
    // Only show labels for native quarter keys; hide everything else to avoid duplicates
    if (/^\d{4}-Q\d$/.test(key)) { const [y, q] = key.split('-'); return `${q} ${y}`; }
    return '';
  }
  if (mode === 'months') {
    // Only show labels for native month keys; hide everything else
    if (/^\d{4}-\d{2}$/.test(key)) return periodLabel(key);
    return '';
  }
  return periodLabel(key);
}

/** Human-readable label for any period key */
export function periodLabel(rawKey: string): string {
  const key = normalizePeriodKey(rawKey);
  // "2019-Q1" → "Q1 2019"
  if (/^\d{4}-Q\d$/.test(key)) { const [y, q] = key.split('-'); return `${q} ${y}`; }
  // "2019-H1" → "H1 2019"
  if (/^\d{4}-H\d$/.test(key)) { const [y, h] = key.split('-'); return `${h} ${y}`; }
  // "2019-01" → "Янв 2019"
  if (/^\d{4}-\d{2}$/.test(key)) {
    const [y, m] = key.split('-');
    return `${MONTH_NAMES_SHORT[parseInt(m) - 1]} ${y}`;
  }
  return key; // yearly as-is
}

/** Sortable key from period label */
export function periodSortKey(key: string): string {
  return key; // our format already sorts correctly
}

/** Get base year from any period key */
function yearOf(key: string): string {
  return key.split('-')[0].replace('F', '');
}

/** Available years for the from/to selector */
export function getAvailableYears(): string[] {
  return EXTENDED_YEARS.map(y => y.replace('F', ''));
}

/** Generate period keys for a given frequency and year range */
export function generatePeriodKeys(frequency: Frequency, fromYear: string, toYear: string): string[] {
  const from = parseInt(fromYear);
  const to = parseInt(toYear);
  const keys: string[] = [];
  for (let y = from; y <= to; y++) {
    const ys = String(y);
    switch (frequency) {
      case 'yearly':
        keys.push(ys);
        break;
      case 'half':
        keys.push(`${ys}-H1`, `${ys}-H2`);
        break;
      case 'quarterly':
        keys.push(`${ys}-Q1`, `${ys}-Q2`, `${ys}-Q3`, `${ys}-Q4`);
        break;
      case 'monthly':
        for (let m = 1; m <= 12; m++) keys.push(`${ys}-${String(m).padStart(2, '0')}`);
        break;
    }
  }
  return keys;
}

/** Seeded RNG for deterministic data */
function _rng(seed: number): () => number {
  let s = seed;
  return () => { s = (s * 16807 + 0) % 2147483647; return (s - 1) / 2147483646; };
}

/** Generate sub-period data from yearly data with seeded noise */
function disaggregate(
  yearlyData: Record<string, number>,
  frequency: Frequency,
  seed: number,
): Record<string, number> {
  if (frequency === 'yearly') return { ...yearlyData };
  const rng = _rng(seed);
  const result: Record<string, number> = {};
  
  for (const [year, val] of Object.entries(yearlyData)) {
    const y = year.replace('F', '');
    switch (frequency) {
      case 'half': {
        const w1 = 0.44 + rng() * 0.04; // ~44-48% in H1
        result[`${y}-H1`] = Math.round(val * w1 * 100) / 100;
        result[`${y}-H2`] = Math.round(val * (1 - w1) * 100) / 100;
        break;
      }
      case 'quarterly': {
        const weights = [0.22 + rng() * 0.03, 0.25 + rng() * 0.02, 0.24 + rng() * 0.02, 0];
        weights[3] = 1 - weights[0] - weights[1] - weights[2];
        for (let q = 0; q < 4; q++) {
          result[`${y}-Q${q + 1}`] = Math.round(val * weights[q] * 100) / 100;
        }
        break;
      }
      case 'monthly': {
        const mw: number[] = [];
        let sum = 0;
        for (let m = 0; m < 12; m++) {
          const w = 1 + (rng() - 0.5) * 0.15 + Math.sin((m + 3) / 12 * Math.PI * 2) * 0.05;
          mw.push(w);
          sum += w;
        }
        for (let m = 0; m < 12; m++) {
          result[`${y}-${String(m + 1).padStart(2, '0')}`] = Math.round(val * (mw[m] / sum) * 100) / 100;
        }
        break;
      }
    }
  }
  return result;
}

/** Universal time-series fetcher for any frequency */
export function getTimeSeries(
  instrumentType: 'stock' | 'commodity',
  instrumentId: string,
  indicatorId: string | undefined,
  frequency: Frequency,
  periodFilter?: { from?: string; to?: string },
): { periods: string[]; values: number[] } | null {
  if (instrumentType === 'stock') {
    return getCompanyTimeSeriesMultiFreq(instrumentId, indicatorId || 'revenue', frequency, periodFilter);
  } else {
    return getCommodityTimeSeriesMultiFreq(instrumentId, frequency, periodFilter);
  }
}

/** Get company data at any frequency */
function getCompanyTimeSeriesMultiFreq(
  ticker: string,
  indicatorId: string,
  frequency: Frequency,
  periodFilter?: { from?: string; to?: string },
): { periods: string[]; values: number[] } | null {
  const allCo = _getAllCompanies();
  const company = allCo.find(c => c.ticker === ticker);
  if (!company) return null;
  const yearlyData = company.financials[indicatorId];
  if (!yearlyData) return null;

  const seed = ticker.split('').reduce((a, c) => a + c.charCodeAt(0), 0) +
    indicatorId.split('').reduce((a, c) => a + c.charCodeAt(0), 0) +
    (['yearly', 'half', 'quarterly', 'monthly'].indexOf(frequency)) * 997;

  const data = disaggregate(yearlyData, frequency, seed);
  let periods = Object.keys(data).sort();

  if (periodFilter?.from) {
    const from = periodFilter.from;
    periods = periods.filter(p => yearOf(p) >= from);
  }
  if (periodFilter?.to) {
    const to = periodFilter.to;
    periods = periods.filter(p => yearOf(p) <= to);
  }

  return { periods, values: periods.map(p => data[p]) };
}

/** Get commodity data at any frequency */
function getCommodityTimeSeriesMultiFreq(
  commodityId: string,
  frequency: Frequency,
  periodFilter?: { from?: string; to?: string },
): { periods: string[]; values: number[] } | null {
  const commodity = COMMODITIES.find(c => c.id === commodityId);
  if (!commodity) return null;

  const seed = commodityId.split('').reduce((a, c) => a + c.charCodeAt(0), 0) +
    (['yearly', 'half', 'quarterly', 'monthly'].indexOf(frequency)) * 997;

  const data = disaggregate(commodity.prices, frequency, seed);
  let periods = Object.keys(data).sort();

  if (periodFilter?.from) {
    const from = periodFilter.from;
    periods = periods.filter(p => yearOf(p) >= from);
  }
  if (periodFilter?.to) {
    const to = periodFilter.to;
    periods = periods.filter(p => yearOf(p) <= to);
  }

  return { periods, values: periods.map(p => data[p]) };
}

/* ═══════════════════════════════════════════════════════
   Time-based X-axis positioning helpers
   Convert period keys to continuous numeric time values
   for proportional (uniform) timeline rendering.
   ═══════════════════════════════════════════════════════ */

/* ── Month name lookup tables ── */
const _MONTHS_RU_SHORT = ['янв','фев','мар','апр','май','июн','июл','авг','сен','окт','ноя','дек'];
const _MONTHS_RU_FULL  = ['январь','февраль','март','апрель','май','июнь','июль','август','сентябрь','октябрь','ноябрь','декабрь'];
const _MONTHS_EN_SHORT = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'];
const _MONTHS_EN_FULL  = ['january','february','march','april','may','june','july','august','september','october','november','december'];

/** Find 1-based month index from a month name (Russian or English, any case). Returns 0 if not found. */
function _monthIndex(s: string): number {
  const lc = s.toLowerCase().replace(/\.$/, '');
  let idx = _MONTHS_RU_SHORT.indexOf(lc);
  if (idx >= 0) return idx + 1;
  idx = _MONTHS_RU_FULL.indexOf(lc);
  if (idx >= 0) return idx + 1;
  idx = _MONTHS_EN_SHORT.indexOf(lc);
  if (idx >= 0) return idx + 1;
  idx = _MONTHS_EN_FULL.indexOf(lc);
  if (idx >= 0) return idx + 1;
  return 0;
}

/** Roman numeral to int (I–IV only) */
function _romanToInt(s: string): number {
  const map: Record<string, number> = { 'I': 1, 'II': 2, 'III': 3, 'IV': 4 };
  return map[s.toUpperCase()] || 0;
}

/** Expand a 2-digit year to 4-digit (00-49 → 2000s, 50-99 → 1900s) */
function _expandYear(y: string): string {
  if (y.length === 4) return y;
  const n = parseInt(y);
  return String(n < 50 ? 2000 + n : 1900 + n);
}

/**
 * Normalize any user-entered / Excel-pasted period key into canonical format.
 *
 * Canonical formats (sort lexicographically):
 *   Yearly:    "2019", "2025F"
 *   Half:      "2019-H1", "2019-H2"
 *   Quarterly: "2019-Q1" … "2019-Q4"
 *   Monthly:   "2019-01" … "2019-12"
 *
 * Recognized input formats (case-insensitive):
 *   Already canonical: "2020-H1", "2020-Q3", "2020-05"
 *   Yearly: "2020", "FY2020", "2025F", "2025f"
 *   Half (RU): "1П 2020", "1п2020", "1П20", "1п 2020", "2п20"
 *   Half (EN): "H1 2020", "H1'20", "H120", "1H2020", "1H 20"
 *   Quarter (RU): "1кв 2020", "1 кв. 2020", "1кв2020", "1кв20"
 *   Quarter (Roman): "I кв 2020", "III кв. 2020", "IV кв.2020"
 *   Quarter (EN): "Q1 2020", "Q1'20", "Q120", "1Q2020", "1Q 20"
 *   Month + year: "Янв 2020", "янв.2020", "Январь 2020", "Jan 2020", "Jan-20", "January 2020"
 *   MM.YYYY / MM/YYYY: "01.2020", "01/2020"
 *   DD.MM.YYYY / DD/MM/YYYY: "15.01.2020" → approximated to month
 *   ISO date: "2020-01-15" → approximated to month
 */
export function normalizePeriodKey(raw: string): string {
  if (!raw) return raw;
  const s = raw.trim();

  /* ── Already canonical ── */
  if (/^\d{4}F?$/i.test(s)) return s.length === 5 ? s.slice(0, 4) + 'F' : s;
  if (/^\d{4}-H[12]$/i.test(s)) return s.slice(0, 4) + '-H' + s.slice(-1);
  if (/^\d{4}-Q[1-4]$/i.test(s)) return s.slice(0, 4) + '-Q' + s.slice(-1);
  if (/^\d{4}-\d{2}$/.test(s)) return s;

  /* ── FY2020 ── */
  const fy = s.match(/^FY\s*(\d{2,4})$/i);
  if (fy) return _expandYear(fy[1]);

  /* ── Half-year (Russian): 1П2020, 1п 20, 1П 2020 ── */
  const hRu = s.match(/^([12])\s*[пП]\s*[.\s']*(\d{2,4})$/);
  if (hRu) return `${_expandYear(hRu[2])}-H${hRu[1]}`;
  // Reverse: 2020 1П, 2020-1П
  const hRuRev = s.match(/^(\d{2,4})\s*[-\s]*([12])\s*[пП]$/);
  if (hRuRev) return `${_expandYear(hRuRev[1])}-H${hRuRev[2]}`;

  /* ── Half-year (English): H1 2020, H1'20, H120, 1H2020, 1H 20 ── */
  const hEn = s.match(/^H([12])\s*[.\s'/-]*(\d{2,4})$/i);
  if (hEn) return `${_expandYear(hEn[2])}-H${hEn[1]}`;
  const hEnRev = s.match(/^([12])\s*H\s*[.\s'/-]*(\d{2,4})$/i);
  if (hEnRev) return `${_expandYear(hEnRev[2])}-H${hEnRev[1]}`;
  // Reverse: 2020 H1
  const hEnRev2 = s.match(/^(\d{2,4})\s*[-\s]+H([12])$/i);
  if (hEnRev2) return `${_expandYear(hEnRev2[1])}-H${hEnRev2[2]}`;

  /* ── Quarter (Russian кв): 1кв 2020, 1 кв. 2020, 1кв2020, 1кв20 ── */
  const qRu = s.match(/^([1-4])\s*кв\.?\s*[.\s'/-]*(\d{2,4})$/i);
  if (qRu) return `${_expandYear(qRu[2])}-Q${qRu[1]}`;
  // Reverse: 2020 1кв
  const qRuRev = s.match(/^(\d{2,4})\s*[-\s]*([1-4])\s*кв\.?$/i);
  if (qRuRev) return `${_expandYear(qRuRev[1])}-Q${qRuRev[2]}`;

  /* ── Quarter (Roman numeral): I кв 2020, III кв. 2020 ── */
  const qRoman = s.match(/^(I{1,3}|IV)\s*кв\.?\s*[.\s'/-]*(\d{2,4})$/i);
  if (qRoman) {
    const q = _romanToInt(qRoman[1]);
    if (q >= 1 && q <= 4) return `${_expandYear(qRoman[2])}-Q${q}`;
  }

  /* ── Quarter (English): Q1 2020, Q1'20, Q120, 1Q2020, 1Q 20 ── */
  const qEn = s.match(/^Q([1-4])\s*[.\s'/-]*(\d{2,4})$/i);
  if (qEn) return `${_expandYear(qEn[2])}-Q${qEn[1]}`;
  const qEnRev = s.match(/^([1-4])\s*Q\s*[.\s'/-]*(\d{2,4})$/i);
  if (qEnRev) return `${_expandYear(qEnRev[2])}-Q${qEnRev[1]}`;
  // Reverse: 2020 Q1
  const qEnRev2 = s.match(/^(\d{2,4})\s*[-\s]+Q([1-4])$/i);
  if (qEnRev2) return `${_expandYear(qEnRev2[1])}-Q${qEnRev2[2]}`;

  /* ── Month + year: "Янв 2020", "янв.2020", "Январь 2020", "Jan-20", "January 2020" ── */
  const mName = s.match(/^([A-Za-zА-Яа-яёЁ]+)\.?\s*[.\s'/-]*(\d{2,4})$/);
  if (mName) {
    const mi = _monthIndex(mName[1]);
    if (mi > 0) return `${_expandYear(mName[2])}-${String(mi).padStart(2, '0')}`;
  }
  // Reverse: "2020 Янв", "2020-Янв"
  const mNameRev = s.match(/^(\d{2,4})\s*[-.\s]+([A-Za-zА-Яа-яёЁ]+)\.?$/);
  if (mNameRev) {
    const mi = _monthIndex(mNameRev[2]);
    if (mi > 0) return `${_expandYear(mNameRev[1])}-${String(mi).padStart(2, '0')}`;
  }

  /* ── MM.YYYY or MM/YYYY ── */
  const mmyyyy = s.match(/^(\d{1,2})[./-](\d{4})$/);
  if (mmyyyy) {
    const m = parseInt(mmyyyy[1]);
    if (m >= 1 && m <= 12) return `${mmyyyy[2]}-${String(m).padStart(2, '0')}`;
  }

  /* ── DD.MM.YYYY or DD/MM/YYYY → approximate to month ── */
  const ddmmyyyy = s.match(/^(\d{1,2})[./](\d{1,2})[./](\d{4})$/);
  if (ddmmyyyy) {
    const d = parseInt(ddmmyyyy[1]);
    const m = parseInt(ddmmyyyy[2]);
    // Heuristic: if first > 12 → DD.MM; if second > 12 → MM.DD
    if (d > 12 && m >= 1 && m <= 12) {
      return `${ddmmyyyy[3]}-${String(m).padStart(2, '0')}`;
    }
    if (m > 12 && d >= 1 && d <= 12) {
      return `${ddmmyyyy[3]}-${String(d).padStart(2, '0')}`;
    }
    // Both ≤ 12: assume DD.MM (European/Russian)
    if (m >= 1 && m <= 12) {
      return `${ddmmyyyy[3]}-${String(m).padStart(2, '0')}`;
    }
  }

  /* ── ISO date: "2020-01-15" → approximate to month ── */
  const iso = s.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
  if (iso) {
    const m = parseInt(iso[2]);
    if (m >= 1 && m <= 12) return `${iso[1]}-${String(m).padStart(2, '0')}`;
  }

  /* ── Not recognized — return as-is ── */
  return s;
}

/**
 * Compare two period keys by their time position (for sorting rows).
 * Falls back to localeCompare for unrecognized keys.
 */
export function comparePeriodKeys(a: string, b: string): number {
  const ta = periodToTime(a);
  const tb = periodToTime(b);
  if (ta !== null && tb !== null) return ta - tb;
  if (ta !== null) return -1;
  if (tb !== null) return 1;
  return a.localeCompare(b);
}

/**
 * Convert a period key to a continuous time value (fractional year).
 * Returns null if the key is not a recognized period format.
 * Automatically normalizes non-canonical formats first.
 *
 * Examples:
 *   "2019"    → 2019.5   (midpoint of year)
 *   "2025F"   → 2025.5
 *   "2022-H1" → 2022.25  (midpoint of first half)
 *   "2022-H2" → 2022.75
 *   "2022-Q1" → 2022.125 (midpoint of Q1)
 *   "2022-Q3" → 2022.625
 *   "2022-01" → 2022.042 (midpoint of January)
 *   "1П 2022" → 2022.25  (normalized → "2022-H1")
 *   "Янв 2020"→ 2020.042 (normalized → "2020-01")
 */
export function periodToTime(key: string): number | null {
  if (!key) return null;
  // Normalize first (idempotent for canonical keys)
  const k = normalizePeriodKey(key);
  // Yearly: "2019" or "2025F"
  if (/^\d{4}F?$/.test(k)) return parseInt(k) + 0.5;
  // Quarterly: "2022-Q1"
  const qm = k.match(/^(\d{4})-Q(\d)$/);
  if (qm) return parseInt(qm[1]) + (parseInt(qm[2]) - 0.5) / 4;
  // Half-yearly: "2022-H1"
  const hm = k.match(/^(\d{4})-H(\d)$/);
  if (hm) return parseInt(hm[1]) + (parseInt(hm[2]) - 0.5) / 2;
  // Monthly: "2022-01"
  const mm = k.match(/^(\d{4})-(\d{2})$/);
  if (mm) return parseInt(mm[1]) + (parseInt(mm[2]) - 0.5) / 12;
  return null;
}

/**
 * Duration (in years) of a single period, based on the key format.
 * Used to compute bar widths proportional to the timeline.
 * Automatically normalizes non-canonical formats first.
 */
export function periodDuration(key: string): number {
  const k = normalizePeriodKey(key);
  if (/^\d{4}-\d{2}$/.test(k)) return 1 / 12;  // monthly
  if (/^\d{4}-Q\d$/.test(k)) return 0.25;       // quarterly
  if (/^\d{4}-H\d$/.test(k)) return 0.5;        // half-yearly
  return 1;                                        // yearly (default)
}
