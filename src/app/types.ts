// Shared type definitions and constants

export type PeriodType = 'Year' | 'Half' | 'Quarter';

export interface Company {
  id: string;
  ticker: string;
  name: string;
  availablePeriodTypes: PeriodType[];
  logoBg?: string;
  logoColor?: string;
  logoText?: string;
}

export interface Scenario {
  id: string;
  name: string;
  companyId: string;
  values: Record<string, Record<string, string>>;
  selectedPeriods?: string[];
  manuallyEditedDrivers?: Set<string>;
  driverScenarios?: Record<string, string>;
}

// Full MOEX company list with period availability + brand logos
export const COMPANIES: Company[] = [
  // ── Нефть и газ ──
  { id: 'rosneft',    ticker: 'ROSN', name: 'Роснефть',          availablePeriodTypes: ['Year'],                    logoBg: '#FFCA30', logoColor: '#000', logoText: 'РН' },
  { id: 'gazprom',    ticker: 'GAZP', name: 'Газпром',           availablePeriodTypes: ['Year', 'Half'],            logoBg: '#0079C2', logoColor: '#fff', logoText: 'ГП' },
  { id: 'lukoil',     ticker: 'LKOH', name: 'ЛУКОЙЛ',            availablePeriodTypes: ['Year', 'Half', 'Quarter'], logoBg: '#ED1B34', logoColor: '#fff', logoText: 'ЛК' },
  { id: 'novatek',    ticker: 'NVTK', name: 'НОВАТЭК',           availablePeriodTypes: ['Year', 'Half'],            logoBg: '#1A1E21', logoColor: '#fff', logoText: 'НВ' },
  { id: 'tatneft',    ticker: 'TATN', name: 'Татнефть',          availablePeriodTypes: ['Year', 'Half', 'Quarter'], logoBg: '#00843D', logoColor: '#fff', logoText: 'ТН' },
  { id: 'surgutnfgs', ticker: 'SNGS', name: 'Сургутнефтегаз',    availablePeriodTypes: ['Year'],                    logoBg: '#1A1A6E', logoColor: '#fff', logoText: 'СН' },
  { id: 'bashneft',   ticker: 'BANE', name: 'Башнефть',          availablePeriodTypes: ['Year'],                    logoBg: '#003DA5', logoColor: '#fff', logoText: 'БН' },
  { id: 'russneft',   ticker: 'RNFT', name: 'Русснефть',         availablePeriodTypes: ['Year'],                    logoBg: '#333',    logoColor: '#fff', logoText: 'РС' },

  // ── Металлургия и горнодобыча ──
  { id: 'nornickel',  ticker: 'GMKN', name: 'Норильский никель', availablePeriodTypes: ['Year', 'Half'],            logoBg: '#1A1E21', logoColor: '#fff', logoText: 'НН' },
  { id: 'severstal',  ticker: 'CHMF', name: 'Северсталь',        availablePeriodTypes: ['Year', 'Half', 'Quarter'], logoBg: '#13294B', logoColor: '#fff', logoText: 'СС' },
  { id: 'nlmk',       ticker: 'NLMK', name: 'НЛМК',              availablePeriodTypes: ['Year', 'Half'],            logoBg: '#004B87', logoColor: '#fff', logoText: 'НЛ' },
  { id: 'mmk',        ticker: 'MAGN', name: 'ММК',               availablePeriodTypes: ['Year', 'Half', 'Quarter'], logoBg: '#005DAA', logoColor: '#fff', logoText: 'ММ' },
  { id: 'alrosa',     ticker: 'ALRS', name: 'АЛРОСА',            availablePeriodTypes: ['Year', 'Half'],            logoBg: '#1A1E21', logoColor: '#ED2224', logoText: 'АЛ' },
  { id: 'polyus',     ticker: 'PLZL', name: 'Полюс',             availablePeriodTypes: ['Year', 'Half'],            logoBg: '#003B73', logoColor: '#fff', logoText: 'ПЗ' },
  { id: 'rusal',      ticker: 'RUAL', name: 'РУСАЛ',             availablePeriodTypes: ['Year'],                    logoBg: '#D71920', logoColor: '#fff', logoText: 'РА' },
  { id: 'mechel',     ticker: 'MTLR', name: 'Мечел',             availablePeriodTypes: ['Year'],                    logoBg: '#1B365D', logoColor: '#fff', logoText: 'МЧ' },
  { id: 'vsmpo',      ticker: 'VSMO', name: 'ВСМПО-АВИСМА',     availablePeriodTypes: ['Year'],                    logoBg: '#004990', logoColor: '#fff', logoText: 'ВА' },
  { id: 'raspadskaya',ticker: 'RASP', name: 'Распадская',        availablePeriodTypes: ['Year'],                    logoBg: '#E21A22', logoColor: '#fff', logoText: 'РП' },
  { id: 'seligdar',   ticker: 'SELG', name: 'Селигдар',          availablePeriodTypes: ['Year'],                    logoBg: '#FFC72C', logoColor: '#000', logoText: 'СЛ' },

  // ── Банки и финансы ──
  { id: 'sberbank',   ticker: 'SBER', name: 'Сбербанк',          availablePeriodTypes: ['Year', 'Half', 'Quarter'], logoBg: '#21A038', logoColor: '#fff', logoText: 'СБ' },
  { id: 'vtb',        ticker: 'VTBR', name: 'ВТБ',               availablePeriodTypes: ['Year', 'Half'],            logoBg: '#0C328C', logoColor: '#009FDF', logoText: 'ВТ' },
  { id: 'tbank',      ticker: 'TCSG', name: 'Т-Банк (ТКС)',      availablePeriodTypes: ['Year', 'Half', 'Quarter'], logoBg: '#FEDD2C', logoColor: '#000', logoText: 'ТК' },
  { id: 'moex',       ticker: 'MOEX', name: 'Мосбиржа',          availablePeriodTypes: ['Year', 'Half', 'Quarter'], logoBg: '#003882', logoColor: '#fff', logoText: 'МБ' },
  { id: 'bspb',       ticker: 'BSPB', name: 'Банк Санкт-Петербург', availablePeriodTypes: ['Year'],                 logoBg: '#E30613', logoColor: '#fff', logoText: 'БС' },
  { id: 'sovcombank', ticker: 'SVCB', name: 'Совкомбанк',        availablePeriodTypes: ['Year'],                    logoBg: '#D2232A', logoColor: '#fff', logoText: 'СК' },
  { id: 'europlan',   ticker: 'LEAS', name: 'Европлан',          availablePeriodTypes: ['Year'],                    logoBg: '#E94E1B', logoColor: '#fff', logoText: 'ЕП' },

  // ── Телеком и IT ──
  { id: 'yandex',     ticker: 'YDEX', name: 'Яндекс',            availablePeriodTypes: ['Year', 'Half', 'Quarter'], logoBg: '#FC3F1D', logoColor: '#fff', logoText: 'Я' },
  { id: 'mts',        ticker: 'MTSS', name: 'МТС',               availablePeriodTypes: ['Year', 'Half', 'Quarter'], logoBg: '#F0F3FA', logoColor: '#FF0032', logoText: 'МТ' },
  { id: 'rostelecom', ticker: 'RTKM', name: 'Ростелеком',        availablePeriodTypes: ['Year', 'Half'],            logoBg: '#7B2D8E', logoColor: '#fff', logoText: 'РТ' },
  { id: 'vk',         ticker: 'VKCO', name: 'VK (Mail.ru)',       availablePeriodTypes: ['Year', 'Half'],            logoBg: '#0077FF', logoColor: '#fff', logoText: 'VK' },
  { id: 'hh',         ticker: 'HHRU', name: 'HeadHunter',         availablePeriodTypes: ['Year', 'Half', 'Quarter'], logoBg: '#D6001C', logoColor: '#fff', logoText: 'HH' },
  { id: 'positive',   ticker: 'POSI', name: 'Positive Technologies', availablePeriodTypes: ['Year'],                logoBg: '#1B1B1B', logoColor: '#fff', logoText: 'PT' },
  { id: 'cian',       ticker: 'CIAN', name: 'ЦИАН',              availablePeriodTypes: ['Year'],                    logoBg: '#0468FF', logoColor: '#fff', logoText: 'ЦН' },
  { id: 'softline',   ticker: 'SOFL', name: 'Софтлайн',          availablePeriodTypes: ['Year'],                    logoBg: '#FF6600', logoColor: '#fff', logoText: 'СФ' },
  { id: 'astra',      ticker: 'ASTR', name: 'Астра',             availablePeriodTypes: ['Year'],                    logoBg: '#1A73E8', logoColor: '#fff', logoText: 'АС' },

  // ── Электроэнергетика ──
  { id: 'rosseti',    ticker: 'FEES', name: 'Россети',            availablePeriodTypes: ['Year'],                    logoBg: '#0072BC', logoColor: '#fff', logoText: 'РС' },
  { id: 'interrao',   ticker: 'IRAO', name: 'Интер РАО',         availablePeriodTypes: ['Year', 'Half'],            logoBg: '#003087', logoColor: '#fff', logoText: 'ИР' },
  { id: 'rushydro',   ticker: 'HYDR', name: 'РусГидро',          availablePeriodTypes: ['Year'],                    logoBg: '#0071BC', logoColor: '#fff', logoText: 'РГ' },
  { id: 'unipro',     ticker: 'UPRO', name: 'Юнипро',            availablePeriodTypes: ['Year'],                    logoBg: '#009FE3', logoColor: '#fff', logoText: 'ЮП' },
  { id: 'mosenergo',  ticker: 'MSNG', name: 'Мосэнерго',         availablePeriodTypes: ['Year'],                    logoBg: '#005BAA', logoColor: '#fff', logoText: 'МЭ' },
  { id: 'ogk2',       ticker: 'OGKB', name: 'ОГК-2',             availablePeriodTypes: ['Year'],                    logoBg: '#00843D', logoColor: '#fff', logoText: 'ОГ' },

  // ── Потребительский сектор ──
  { id: 'magnit',     ticker: 'MGNT', name: 'Магнит',            availablePeriodTypes: ['Year', 'Half', 'Quarter'], logoBg: '#E4002B', logoColor: '#fff', logoText: 'МГ' },
  { id: 'x5',         ticker: 'FIVE', name: 'X5 Group',           availablePeriodTypes: ['Year', 'Half', 'Quarter'], logoBg: '#60AD31', logoColor: '#000', logoText: 'X5' },
  { id: 'lenta',      ticker: 'LNTA', name: 'Лента',             availablePeriodTypes: ['Year', 'Half'],            logoBg: '#004B87', logoColor: '#fff', logoText: 'ЛТ' },
  { id: 'cherkizovo', ticker: 'GCHE', name: 'Черкизово',          availablePeriodTypes: ['Year'],                    logoBg: '#DC143C', logoColor: '#fff', logoText: 'ЧК' },
  { id: 'rusagro',    ticker: 'AGRO', name: 'Русагро',           availablePeriodTypes: ['Year'],                    logoBg: '#009944', logoColor: '#fff', logoText: 'РА' },
  { id: 'mvideo',     ticker: 'MVID', name: 'М.Видео',           availablePeriodTypes: ['Year', 'Half'],            logoBg: '#E4002B', logoColor: '#fff', logoText: 'МВ' },

  // ── Строительство ──
  { id: 'pik',        ticker: 'PIKK', name: 'ПИК',               availablePeriodTypes: ['Year'],                    logoBg: '#FF6B00', logoColor: '#fff', logoText: 'ПК' },
  { id: 'samolet',    ticker: 'SMLT', name: 'Самолёт',           availablePeriodTypes: ['Year'],                    logoBg: '#0055A5', logoColor: '#fff', logoText: 'СМ' },
  { id: 'etalon',     ticker: 'ETLN', name: 'Эталон',            availablePeriodTypes: ['Year'],                    logoBg: '#004C97', logoColor: '#fff', logoText: 'ЭТ' },
  { id: 'lsr',        ticker: 'LSRG', name: 'ЛСР',              availablePeriodTypes: ['Year'],                    logoBg: '#003DA5', logoColor: '#fff', logoText: 'ЛС' },

  // ── Транспорт ──
  { id: 'aeroflot',   ticker: 'AFLT', name: 'Аэрофлот',          availablePeriodTypes: ['Year', 'Half', 'Quarter'], logoBg: '#255398', logoColor: '#fff', logoText: 'АФ' },
  { id: 'sovcomflot', ticker: 'FLOT', name: 'Совкомфлот',         availablePeriodTypes: ['Year'],                    logoBg: '#003882', logoColor: '#fff', logoText: 'СФ' },
  { id: 'transneft',  ticker: 'TRNFP',name: 'Транснефть',        availablePeriodTypes: ['Year'],                    logoBg: '#003882', logoColor: '#fff', logoText: 'ТН' },
  { id: 'kamaz',      ticker: 'KMAZ', name: 'КАМАЗ',             availablePeriodTypes: ['Year'],                    logoBg: '#003DA5', logoColor: '#fff', logoText: 'КМ' },

  // ── Удобрения и химия ──
  { id: 'phosagro',   ticker: 'PHOR', name: 'ФосАгро',           availablePeriodTypes: ['Year', 'Half', 'Quarter'], logoBg: '#00843D', logoColor: '#fff', logoText: 'ФА' },
  { id: 'acron',      ticker: 'AKRN', name: 'Акрон',             availablePeriodTypes: ['Year'],                    logoBg: '#00423A', logoColor: '#fff', logoText: 'АК' },
  { id: 'kuibazot',   ticker: 'KAZT', name: 'КуйбышевАзот',     availablePeriodTypes: ['Year'],                    logoBg: '#005EB8', logoColor: '#fff', logoText: 'КА' },

  // ── Холдинги ──
  { id: 'sistema',    ticker: 'AFKS', name: 'АФК Система',       availablePeriodTypes: ['Year'],                    logoBg: '#00305E', logoColor: '#fff', logoText: 'АС' },
  { id: 'segezha',    ticker: 'SGZH', name: 'Сегежа Груп',       availablePeriodTypes: ['Year'],                    logoBg: '#00843D', logoColor: '#fff', logoText: 'СГ' },
];

/**
 * Returns ALL available companies = core list + extended from market-data.
 * Extended companies get `availablePeriodTypes: ['Year']` by default.
 */
let _allCompaniesCache: Company[] | null = null;
export function getAllAvailableCompanies(): Company[] {
  if (_allCompaniesCache) return _allCompaniesCache;
  try {
    const { getAllCompanies } = require('./components/chart-builder/extended-companies');
    const coreIds = new Set(COMPANIES.map(c => c.ticker));
    const extCompanies: Company[] = (getAllCompanies() as any[])
      .filter((c: any) => !coreIds.has(c.ticker))
      .map((c: any) => ({
        id: c.ticker.toLowerCase(),
        ticker: c.ticker,
        name: c.name,
        availablePeriodTypes: ['Year'] as PeriodType[],
        logoBg: c.logoBg || '#444',
        logoColor: c.logoColor || '#fff',
        logoText: c.logoText || c.ticker.slice(0, 2),
      }));
    _allCompaniesCache = [...COMPANIES, ...extCompanies];
  } catch {
    _allCompaniesCache = COMPANIES;
  }
  return _allCompaniesCache;
}