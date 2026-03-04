/* ═══════════════════════════════════════════════════════
   Extended Companies — All 240 MOEX companies from Figma
   + quarterly data generator + longer history
   ═══════════════════════════════════════════════════════ */

import type { Sector, CompanyData } from './market-data';
import { COMPANIES as CORE_COMPANIES, PERIODS as CORE_PERIODS } from './market-data';

/* ── Period helpers ── */
export const EXTENDED_YEARS = ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025F'];

export const QUARTERLY_PERIODS = [
  'Q1 2022', 'Q2 2022', 'Q3 2022', 'Q4 2022',
  'Q1 2023', 'Q2 2023', 'Q3 2023', 'Q4 2023',
  'Q1 2024', 'Q2 2024', 'Q3 2024', 'Q4 2024',
  'Q1 2025', 'Q2 2025',
];

/** @deprecated Use Frequency from types.ts instead */
export type PeriodMode = 'yearly' | 'quarterly';

/* ── Sector-based revenue templates (base, growth, volatility) ── */
const SECTOR_TEMPLATES: Record<Sector, { base: [number, number]; growth: number; ebitdaM: number; nimM: number }> = {
  oil_gas:       { base: [80, 12000], growth: 0.06, ebitdaM: 0.28, nimM: 0.10 },
  metals:        { base: [30, 1300],  growth: 0.05, ebitdaM: 0.30, nimM: 0.14 },
  banks:         { base: [20, 4000],  growth: 0.08, ebitdaM: 0.45, nimM: 0.20 },
  telecom_it:    { base: [3, 1300],   growth: 0.12, ebitdaM: 0.22, nimM: 0.08 },
  energy:        { base: [20, 1400],  growth: 0.04, ebitdaM: 0.22, nimM: 0.09 },
  consumer:      { base: [40, 3500],  growth: 0.09, ebitdaM: 0.08, nimM: 0.03 },
  construction:  { base: [30, 600],   growth: 0.10, ebitdaM: 0.18, nimM: 0.07 },
  transport:     { base: [20, 1100],  growth: 0.05, ebitdaM: 0.20, nimM: 0.06 },
  chemicals:     { base: [20, 600],   growth: 0.07, ebitdaM: 0.35, nimM: 0.18 },
  holding:       { base: [50, 1100],  growth: 0.06, ebitdaM: 0.25, nimM: 0.05 },
  commodity:     { base: [10, 200],   growth: 0.04, ebitdaM: 0.30, nimM: 0.12 },
};

/** Deterministic pseudo-random based on seed */
function seededRandom(seed: number): () => number {
  let s = seed;
  return () => {
    s = (s * 16807 + 0) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

/** Generate financial data for any company based on sector + ticker hash */
function generateFinancials(ticker: string, sector: Sector): Record<string, Record<string, number>> {
  const tpl = SECTOR_TEMPLATES[sector] || SECTOR_TEMPLATES.holding;
  const hash = ticker.split('').reduce((a, c) => a + c.charCodeAt(0), 0);
  const rng = seededRandom(hash);
  // Company size: deterministic within sector range
  const sizeF = rng();
  const base = tpl.base[0] + (tpl.base[1] - tpl.base[0]) * sizeF;
  
  const result: Record<string, Record<string, number>> = {
    revenue: {}, ebitda: {}, net_income: {}, net_margin: {},
    fcf: {}, total_debt: {}, equity: {}, assets: {},
    capex: {}, dividends: {}, eps: {}, pe: {},
    ev_ebitda: {}, roe: {}, roa: {}, debt_ebitda: {},
  };

  // Assume share count based on company size
  const shareCount = Math.round((0.5 + rng() * 2) * 1000); // millions of shares

  EXTENDED_YEARS.forEach((p, i) => {
    const cyclical = Math.sin(i * 0.8 + hash * 0.1) * 0.08;
    const covid = p === '2020' ? -0.15 : 0;
    const boom = p === '2021' || p === '2022' ? 0.12 : 0;
    const growthF = Math.pow(1 + tpl.growth, i) * (1 + cyclical + covid + boom);
    const vol = (rng() - 0.5) * 0.06;
    
    const rev = Math.round(base * growthF * (1 + vol) * 10) / 10;
    const ebitda = Math.round(rev * tpl.ebitdaM * (0.9 + rng() * 0.2) * 10) / 10;
    const ni = Math.round(rev * tpl.nimM * (0.8 + rng() * 0.4) * 10) / 10;
    const fcf = Math.round(ni * (0.5 + rng() * 0.4) * 10) / 10;
    const capex = Math.round(rev * (0.08 + rng() * 0.12) * 10) / 10;
    const totalDebt = Math.round(ebitda * (1.0 + rng() * 2.0) * 10) / 10;
    const equity = Math.round((rev * 0.3 + ni * 2) * (0.8 + rng() * 0.4) * 10) / 10;
    const assets = Math.round((equity + totalDebt + rev * 0.2) * 10) / 10;
    const eps = Math.round(ni / shareCount * 1000 * 100) / 100; // ₽ per share
    const divPayout = 0.25 + rng() * 0.35;
    const divPerShare = Math.round(eps * divPayout * 100) / 100;
    const pe = ni > 0 ? Math.round((6 + rng() * 12) * 10) / 10 : 0;
    const evEbitda = ebitda > 0 ? Math.round((3 + rng() * 6) * 10) / 10 : 0;
    const roe = equity > 0 ? Math.round(ni / equity * 1000) / 10 : 0;
    const roa = assets > 0 ? Math.round(ni / assets * 1000) / 10 : 0;
    const debtEbitda = ebitda > 0 ? Math.round(totalDebt / ebitda * 10) / 10 : 0;
    
    result.revenue[p] = rev;
    result.ebitda[p] = ebitda;
    result.net_income[p] = ni;
    result.net_margin[p] = Math.round(ni / rev * 1000) / 10;
    result.fcf[p] = fcf;
    result.total_debt[p] = totalDebt;
    result.equity[p] = equity;
    result.assets[p] = assets;
    result.capex[p] = capex;
    result.dividends[p] = divPerShare;
    result.eps[p] = eps;
    result.pe[p] = pe;
    result.ev_ebitda[p] = evEbitda;
    result.roe[p] = roe;
    result.roa[p] = roa;
    result.debt_ebitda[p] = debtEbitda;
  });

  return result;
}

/** Generate quarterly data from yearly data */
export function generateQuarterlyData(
  yearlyData: Record<string, Record<string, number>>,
): Record<string, Record<string, number>> {
  const result: Record<string, Record<string, number>> = {};
  for (const indicator of Object.keys(yearlyData)) {
    result[indicator] = {};
    for (const qp of QUARTERLY_PERIODS) {
      const [q, year] = qp.split(' ');
      const yearVal = yearlyData[indicator]?.[year];
      if (yearVal === undefined) continue;
      const qNum = parseInt(q.replace('Q', ''));
      // Seasonal distribution
      const seasonal = [0.22, 0.25, 0.24, 0.29]; // Q1-Q4 weights
      const weight = seasonal[qNum - 1] || 0.25;
      result[indicator][qp] = Math.round(yearVal * weight * 10) / 10;
    }
  }
  return result;
}

/* ═══════════════════════════════════════════════════════
   Extended Company List — All 240 MOEX companies
   (data-name from Figma → ticker, Russian name, sector)
   ═══════════════════════════════════════════════════════ */

interface ExtCompanyDef {
  ticker: string;
  name: string;
  nameEn: string;
  sector: Sector;
  logoBg: string;
  logoColor: string;
  logoText: string;
}

const EXTRA_COMPANIES: ExtCompanyDef[] = [
  // ── Нефть и газ (дополнительно) ──
  { ticker: 'SNGS', name: 'Сургутнефтегаз', nameEn: 'Surgutneftegas', sector: 'oil_gas', logoBg: '#1A1A6E', logoColor: '#fff', logoText: 'СН' },
  { ticker: 'SLAV', name: 'Славнефть', nameEn: 'Slavneft', sector: 'oil_gas', logoBg: '#004B87', logoColor: '#fff', logoText: 'СЛ' },
  { ticker: 'SMGN', name: 'Славнефть-Мегионнефтегаз', nameEn: 'Slavneft-Megionneftegaz', sector: 'oil_gas', logoBg: '#004B87', logoColor: '#fff', logoText: 'МГ' },
  { ticker: 'SIBN', name: 'Газпром нефть', nameEn: 'Gazprom Neft', sector: 'oil_gas', logoBg: '#003DA5', logoColor: '#fff', logoText: 'ГН' },
  { ticker: 'NKNC', name: 'Нижнекамскнефтехим', nameEn: 'Nizhnekamskneftekhim', sector: 'chemicals', logoBg: '#E30613', logoColor: '#fff', logoText: 'НК' },
  { ticker: 'NKSH', name: 'Нижнекамскшина', nameEn: 'Nizhnekamskshina', sector: 'chemicals', logoBg: '#E30613', logoColor: '#fff', logoText: 'НШ' },
  { ticker: 'VRGN', name: 'ННК-Варьёганнефтегаз', nameEn: 'NNK-Varyoganneftegaz', sector: 'oil_gas', logoBg: '#333', logoColor: '#fff', logoText: 'ВН' },
  { ticker: 'UFOS', name: 'Уфаоргсинтез', nameEn: 'Ufaorgsintez', sector: 'chemicals', logoBg: '#00843D', logoColor: '#fff', logoText: 'УФ' },
  { ticker: 'SNOV', name: 'Славнефть-ЯНОСС', nameEn: 'Slavneft-YANOSS', sector: 'oil_gas', logoBg: '#004B87', logoColor: '#fff', logoText: 'ЯН' },
  { ticker: 'KROT', name: 'Саратовский НПЗ', nameEn: 'Saratov Oil Refinery', sector: 'oil_gas', logoBg: '#B22222', logoColor: '#fff', logoText: 'СН' },
  { ticker: 'RNYS', name: 'РН-Западная Сибирь', nameEn: 'RN-Western Siberia', sector: 'oil_gas', logoBg: '#FFCA30', logoColor: '#000', logoText: 'РЗ' },
  { ticker: 'RNYR', name: 'РН-Ярославль', nameEn: 'RN-Yaroslavl', sector: 'oil_gas', logoBg: '#FFCA30', logoColor: '#000', logoText: 'РЯ' },
  { ticker: 'KZOS', name: 'Красноярскнефтепродукт', nameEn: 'Krasnoyarsknefteprod', sector: 'oil_gas', logoBg: '#008E38', logoColor: '#fff', logoText: 'КН' },

  // ── Металлургия и горнодобыча (дополнительно) ──
  { ticker: 'ENPG', name: 'Эн+ Груп', nameEn: 'En+ Group', sector: 'metals', logoBg: '#004B87', logoColor: '#fff', logoText: 'Э+' },
  { ticker: 'ROLO', name: 'Русолово', nameEn: 'Rusolovo', sector: 'metals', logoBg: '#8B4513', logoColor: '#fff', logoText: 'РО' },
  { ticker: 'KMRG', name: 'Коршуновский ГОК', nameEn: 'Korshunov Mining', sector: 'metals', logoBg: '#666', logoColor: '#fff', logoText: 'КГ' },
  { ticker: 'BRZL', name: 'Бурятзолото', nameEn: 'Buryatzoloto', sector: 'metals', logoBg: '#FFD700', logoColor: '#000', logoText: 'БЗ' },
  { ticker: 'LNZL', name: 'Лензолото', nameEn: 'Lenzoloto', sector: 'metals', logoBg: '#DAA520', logoColor: '#000', logoText: 'ЛЗ' },
  { ticker: 'CHMK', name: 'ЧМК', nameEn: 'Chelyabinsk Met Plant', sector: 'metals', logoBg: '#333', logoColor: '#fff', logoText: 'ЧМ' },
  { ticker: 'CHKZ', name: 'ЧКЗ', nameEn: 'Chelyabinsk Forge Plant', sector: 'metals', logoBg: '#444', logoColor: '#fff', logoText: 'ЧК' },
  { ticker: 'IZSTP', name: 'Ижсталь', nameEn: 'Izhstal', sector: 'metals', logoBg: '#1B365D', logoColor: '#fff', logoText: 'ИС' },
  { ticker: 'KUZB', name: 'Кузбассразрезуголь', nameEn: 'Kuzbassrazrezugol', sector: 'metals', logoBg: '#555', logoColor: '#fff', logoText: 'КР' },
  { ticker: 'USBN', name: 'Уралэлектромедь', nameEn: 'Uralelectromed', sector: 'metals', logoBg: '#B87333', logoColor: '#fff', logoText: 'УЭ' },
  { ticker: 'SUMZ', name: 'СУМЗ', nameEn: 'SUMZ', sector: 'metals', logoBg: '#8B4513', logoColor: '#fff', logoText: 'СМ' },
  { ticker: 'POBD', name: 'Победит', nameEn: 'Pobedit', sector: 'metals', logoBg: '#02659C', logoColor: '#fff', logoText: 'ПБ' },
  { ticker: 'URKZ', name: 'Уральские штамповки', nameEn: 'Urals Stampings', sector: 'metals', logoBg: '#333', logoColor: '#fff', logoText: 'УШ' },
  { ticker: 'UKUZ', name: 'Южный Кузбасс', nameEn: 'Southern Kuzbass', sector: 'metals', logoBg: '#555', logoColor: '#fff', logoText: 'ЮК' },
  { ticker: 'USNI', name: 'Южноуральский никель', nameEn: 'Southern Urals Nickel', sector: 'metals', logoBg: '#2E8B57', logoColor: '#fff', logoText: 'ЮН' },
  { ticker: 'VSMO', name: 'ВСМПО-АВИСМА', nameEn: 'VSMPO-Avisma', sector: 'metals', logoBg: '#004990', logoColor: '#fff', logoText: 'ВА' },
  { ticker: 'BELN', name: 'Белон', nameEn: 'Belon', sector: 'metals', logoBg: '#1B365D', logoColor: '#fff', logoText: 'БЛ' },

  // ── Банки и финансы (дополнительно) ──
  { ticker: 'CBOM', name: 'МКБ', nameEn: 'Credit Bank of Moscow', sector: 'banks', logoBg: '#003882', logoColor: '#fff', logoText: 'МК' },
  { ticker: 'USBN2', name: 'Банк Уралсиб', nameEn: 'Bank Uralsib', sector: 'banks', logoBg: '#E94E1B', logoColor: '#fff', logoText: 'УС' },
  { ticker: 'AVJB', name: 'Авангард Банк', nameEn: 'Avangard JSB', sector: 'banks', logoBg: '#003DA5', logoColor: '#fff', logoText: 'АВ' },
  { ticker: 'KZBN', name: 'Кузнецкий банк', nameEn: 'Kuznetsky Bank', sector: 'banks', logoBg: '#003882', logoColor: '#fff', logoText: 'КБ' },
  { ticker: 'RDBN', name: 'Росдорбанк', nameEn: 'Rosdorbank', sector: 'banks', logoBg: '#003DA5', logoColor: '#fff', logoText: 'РД' },
  { ticker: 'PRMB', name: 'Примсоцбанк', nameEn: 'Primorye Comm Bank', sector: 'banks', logoBg: '#2E8B57', logoColor: '#fff', logoText: 'ПС' },
  { ticker: 'ARSM', name: 'Арсагера', nameEn: 'Arsagera Asset Mgmt', sector: 'banks', logoBg: '#003882', logoColor: '#fff', logoText: 'АР' },

  // ── Телеком и IT (дополнительно) ──
  { ticker: 'VKCO', name: 'VK (Mail.ru)', nameEn: 'VK', sector: 'telecom_it', logoBg: '#0077FF', logoColor: '#fff', logoText: 'VK' },
  { ticker: 'HHRU', name: 'HeadHunter', nameEn: 'HeadHunter', sector: 'telecom_it', logoBg: '#D6001C', logoColor: '#fff', logoText: 'HH' },
  { ticker: 'POSI', name: 'Positive Technologies', nameEn: 'Positive', sector: 'telecom_it', logoBg: '#1B1B1B', logoColor: '#fff', logoText: 'PT' },
  { ticker: 'CIAN', name: 'ЦИАН', nameEn: 'Cian', sector: 'telecom_it', logoBg: '#0468FF', logoColor: '#fff', logoText: 'ЦН' },
  { ticker: 'SOFL', name: 'Софтлайн', nameEn: 'Softline', sector: 'telecom_it', logoBg: '#FF6600', logoColor: '#fff', logoText: 'СФ' },
  { ticker: 'ASTR', name: 'Астра', nameEn: 'Astra Group', sector: 'telecom_it', logoBg: '#1A73E8', logoColor: '#fff', logoText: 'АС' },
  { ticker: 'DATA', name: 'Аренадата', nameEn: 'Arenadata Group', sector: 'telecom_it', logoBg: '#FF4500', logoColor: '#fff', logoText: 'АД' },
  { ticker: 'DIAS', name: 'Диасофт', nameEn: 'Diasoft', sector: 'telecom_it', logoBg: '#003DA5', logoColor: '#fff', logoText: 'ДС' },
  { ticker: 'IVAT', name: 'ИВА', nameEn: 'IVA', sector: 'telecom_it', logoBg: '#512D6D', logoColor: '#fff', logoText: 'ИВ' },
  { ticker: 'ELMT', name: 'Элемент', nameEn: 'Element', sector: 'telecom_it', logoBg: '#1A73E8', logoColor: '#fff', logoText: 'ЭЛ' },
  { ticker: 'TTLK', name: 'Таттелеком', nameEn: 'Tattelecom', sector: 'telecom_it', logoBg: '#009944', logoColor: '#fff', logoText: 'ТТ' },
  { ticker: 'MGTC', name: 'МГТС', nameEn: 'Moscow City Telephone', sector: 'telecom_it', logoBg: '#7B2D8E', logoColor: '#fff', logoText: 'МГ' },
  { ticker: 'CTLG', name: 'Центральный телеграф', nameEn: 'Central Telegraph', sector: 'telecom_it', logoBg: '#003DA5', logoColor: '#fff', logoText: 'ЦТ' },
  { ticker: 'BSIF', name: 'Башинформсвязь', nameEn: 'Bashinformsvyaz', sector: 'telecom_it', logoBg: '#003882', logoColor: '#fff', logoText: 'БИ' },
  { ticker: 'NKNT', name: 'Наука-Связь', nameEn: 'Nauka Telecom', sector: 'telecom_it', logoBg: '#333', logoColor: '#fff', logoText: 'НС' },
  { ticker: 'RBCM', name: 'РБК', nameEn: 'RBC', sector: 'telecom_it', logoBg: '#333', logoColor: '#fff', logoText: 'РБ' },

  // ── Электроэнергетика (дополнительно) ──
  { ticker: 'TGKA', name: 'ТГК-1', nameEn: 'TGC-1', sector: 'energy', logoBg: '#003882', logoColor: '#fff', logoText: 'Т1' },
  { ticker: 'TGKB', name: 'ТГК-2', nameEn: 'TGC-2', sector: 'energy', logoBg: '#004B87', logoColor: '#fff', logoText: 'Т2' },
  { ticker: 'TGKN', name: 'ТГК-14', nameEn: 'TGC-14', sector: 'energy', logoBg: '#005EB8', logoColor: '#fff', logoText: '14' },
  { ticker: 'TPLP', name: 'Т Плюс', nameEn: 'T Plus', sector: 'energy', logoBg: '#E30611', logoColor: '#fff', logoText: 'Т+' },
  { ticker: 'ENRU', name: 'Энел Россия', nameEn: 'Enel Russia', sector: 'energy', logoBg: '#004C97', logoColor: '#fff', logoText: 'ЭН' },
  { ticker: 'OGKB', name: 'ОГК-2', nameEn: 'OGK-2', sector: 'energy', logoBg: '#00843D', logoColor: '#fff', logoText: 'ОГ' },
  { ticker: 'MRKU', name: 'Россети Урал', nameEn: 'IDGC of Urals', sector: 'energy', logoBg: '#0072BC', logoColor: '#fff', logoText: 'РУ' },
  { ticker: 'FWEN', name: 'Дальневосточная энергия', nameEn: 'Far Eastern Energy', sector: 'energy', logoBg: '#004B87', logoColor: '#fff', logoText: 'ДЭ' },
  { ticker: 'FWRD', name: 'Форвард Энерго', nameEn: 'Forward Energy', sector: 'energy', logoBg: '#333', logoColor: '#fff', logoText: 'ФЭ' },
  { ticker: 'GZSV', name: 'Газэнергосервис', nameEn: 'Gazenergoservis', sector: 'energy', logoBg: '#0078C1', logoColor: '#fff', logoText: 'ГЭ' },
  { ticker: 'KLPS', name: 'Калужская ЭСБК', nameEn: 'Kaluga Power Sales', sector: 'energy', logoBg: '#003DA5', logoColor: '#fff', logoText: 'КЭ' },
  { ticker: 'KMEN', name: 'Камчатскэнерго', nameEn: 'Kamchatskenergo', sector: 'energy', logoBg: '#004B87', logoColor: '#fff', logoText: 'КМ' },
  { ticker: 'KSEN', name: 'Красноярскэнергосбыт', nameEn: 'Krasnoyarskenergosbyt', sector: 'energy', logoBg: '#003DA5', logoColor: '#fff', logoText: 'КС' },
  { ticker: 'KSTR', name: 'Костромская сбыт. комп.', nameEn: 'Kostromskaya Sbyt', sector: 'energy', logoBg: '#003882', logoColor: '#fff', logoText: 'КО' },
  { ticker: 'LPEN', name: 'Липецкая ЭСБК', nameEn: 'Lipetsk Power Sales', sector: 'energy', logoBg: '#003DA5', logoColor: '#fff', logoText: 'ЛЭ' },
  { ticker: 'MGEN', name: 'Магаданэнерго', nameEn: 'Magadanenergo', sector: 'energy', logoBg: '#004B87', logoColor: '#fff', logoText: 'МА' },
  { ticker: 'MDEN', name: 'Мордовская ЭСК', nameEn: 'Mordovia Energy', sector: 'energy', logoBg: '#003882', logoColor: '#fff', logoText: 'МЭ' },
  { ticker: 'PMEN', name: 'Пермэнергосбыт', nameEn: 'Perm Energy Supply', sector: 'energy', logoBg: '#003DA5', logoColor: '#fff', logoText: 'ПЭ' },
  { ticker: 'RZEN', name: 'Рязаньэнергосбыт', nameEn: 'Ryazanenergosbyt', sector: 'energy', logoBg: '#004B87', logoColor: '#fff', logoText: 'РЭ' },
  { ticker: 'SKEN', name: 'Сахалинэнерго', nameEn: 'Sakhalinenergo', sector: 'energy', logoBg: '#003882', logoColor: '#fff', logoText: 'СЭ' },
  { ticker: 'SMEN', name: 'Самараэнерго', nameEn: 'Samaraenergo', sector: 'energy', logoBg: '#003DA5', logoColor: '#fff', logoText: 'СА' },
  { ticker: 'SREN', name: 'Саратовэнерго', nameEn: 'Saratovenergo', sector: 'energy', logoBg: '#003882', logoColor: '#fff', logoText: 'СР' },
  { ticker: 'STEN', name: 'Ставропольэнергосбыт', nameEn: 'Stavropolenergosbyt', sector: 'energy', logoBg: '#003DA5', logoColor: '#fff', logoText: 'СТ' },
  { ticker: 'TBEN', name: 'Тамбовская ЭСК', nameEn: 'Tambov Power Supply', sector: 'energy', logoBg: '#003882', logoColor: '#fff', logoText: 'ТМ' },
  { ticker: 'TNKE', name: 'ТНС энерго Кубань', nameEn: 'TNS Energo Kuban', sector: 'energy', logoBg: '#DC143C', logoColor: '#fff', logoText: 'ТК' },
  { ticker: 'TNME', name: 'ТНС энерго Марий Эл', nameEn: 'TNS Energo Mari El', sector: 'energy', logoBg: '#DC143C', logoColor: '#fff', logoText: 'ТМ' },
  { ticker: 'TNNE', name: 'ТНС энерго НН', nameEn: 'TNS Energo NN', sector: 'energy', logoBg: '#DC143C', logoColor: '#fff', logoText: 'ТН' },
  { ticker: 'TNRE', name: 'ТНС энерго Ростов', nameEn: 'TNS Energo Rostov', sector: 'energy', logoBg: '#DC143C', logoColor: '#fff', logoText: 'ТР' },
  { ticker: 'TNVE', name: 'ТНС энерго Воронеж', nameEn: 'TNS Energo Voronezh', sector: 'energy', logoBg: '#DC143C', logoColor: '#fff', logoText: 'ТВ' },
  { ticker: 'TNYE', name: 'ТНС энерго Ярославль', nameEn: 'TNS Energo Yaroslavl', sector: 'energy', logoBg: '#DC143C', logoColor: '#fff', logoText: 'ТЯ' },
  { ticker: 'TNEN', name: 'ТНС энерго', nameEn: 'TNS Energo Public', sector: 'energy', logoBg: '#DC143C', logoColor: '#fff', logoText: 'ТЭ' },
  { ticker: 'VLGE', name: 'Волгоградэнергосбыт', nameEn: 'Volgogradenergosbyt', sector: 'energy', logoBg: '#003DA5', logoColor: '#fff', logoText: 'ВЭ' },
  { ticker: 'KOMI', name: 'Коми Энергосбыт', nameEn: 'Komi Energosbyt', sector: 'energy', logoBg: '#0B5EA2', logoColor: '#fff', logoText: 'КЭ' },
  { ticker: 'NBEN', name: 'Новосибирскэнергосбыт', nameEn: 'Novosibirskenergosbyt', sector: 'energy', logoBg: '#003DA5', logoColor: '#fff', logoText: 'НЭ' },
  { ticker: 'TODS', name: 'Томская распр. комп.', nameEn: 'Tomsk Distribution', sector: 'energy', logoBg: '#003882', logoColor: '#fff', logoText: 'ТД' },
  { ticker: 'ASEN', name: 'Астраханская ЭСК', nameEn: 'Astrakhan Power Sales', sector: 'energy', logoBg: '#003DA5', logoColor: '#fff', logoText: 'АЭ' },
  { ticker: 'MSES', name: 'Мосэнергосетьстрой', nameEn: 'Mosenergoset Stroy', sector: 'energy', logoBg: '#005BAA', logoColor: '#fff', logoText: 'МС' },
  { ticker: 'MSTT', name: 'Мостотрест', nameEn: 'Mostotrest', sector: 'construction', logoBg: '#003DA5', logoColor: '#fff', logoText: 'МТ' },
  { ticker: 'RGES', name: 'Регио Электрические сети', nameEn: 'Regio Elektrich Seti', sector: 'energy', logoBg: '#0072BC', logoColor: '#fff', logoText: 'РЭ' },

  // ── Потребительский сектор (дополнительно) ──
  { ticker: 'ABRD', name: 'Абрау-Дюрсо', nameEn: 'Abrau-Durso', sector: 'consumer', logoBg: '#EDA141', logoColor: '#fff', logoText: 'АД' },
  { ticker: 'BELU', name: 'Новабев Груп (Белуга)', nameEn: 'Beluga Group', sector: 'consumer', logoBg: '#003DA5', logoColor: '#fff', logoText: 'НБ' },
  { ticker: 'OKEY', name: 'О\'Кей', nameEn: 'O\'Key', sector: 'consumer', logoBg: '#E30611', logoColor: '#fff', logoText: 'ОК' },
  { ticker: 'HNDR', name: 'Хендерсон', nameEn: 'Henderson', sector: 'consumer', logoBg: '#1B1B1B', logoColor: '#fff', logoText: 'ХН' },
  { ticker: 'SVTF', name: 'Светофор Групп', nameEn: 'Svetofor Group', sector: 'consumer', logoBg: '#00843D', logoColor: '#fff', logoText: 'СГ' },
  { ticker: 'KLVZ', name: 'КЛВЗ «Кристалл»', nameEn: 'KLVZ Kristall', sector: 'consumer', logoBg: '#003DA5', logoColor: '#fff', logoText: 'КС' },
  { ticker: 'SLAD', name: 'Сладонеж', nameEn: 'Sladonezh', sector: 'consumer', logoBg: '#DC143C', logoColor: '#fff', logoText: 'СД' },
  { ticker: 'KOCB', name: 'Красный Октябрь', nameEn: 'Krasnyj Octyabr', sector: 'metals', logoBg: '#B22222', logoColor: '#fff', logoText: 'КО' },
  { ticker: 'DIOD', name: 'ДИОД', nameEn: 'Diod', sector: 'consumer', logoBg: '#003DA5', logoColor: '#fff', logoText: 'ДИ' },
  { ticker: 'APTK', name: 'Аптечная сеть 36.6', nameEn: 'Pharmacy Chain 36.6', sector: 'consumer', logoBg: '#00843D', logoColor: '#fff', logoText: '36' },
  { ticker: 'ROSN2', name: 'Росинтер', nameEn: 'Rosinter Restaurants', sector: 'consumer', logoBg: '#DC143C', logoColor: '#fff', logoText: 'РИ' },

  // ── Строительство (дополнительно) ──
  { ticker: 'INGR', name: 'Инград', nameEn: 'Ingrad', sector: 'construction', logoBg: '#003DA5', logoColor: '#fff', logoText: 'ИН' },
  { ticker: 'APRI', name: 'АПРИ', nameEn: 'APRI', sector: 'construction', logoBg: '#E30611', logoColor: '#fff', logoText: 'АП' },

  // ── Транспорт (дополнительно) ──
  { ticker: 'DELI', name: 'Делимобиль', nameEn: 'Delimobil', sector: 'transport', logoBg: '#00C853', logoColor: '#fff', logoText: 'ДМ' },
  { ticker: 'WUSH', name: 'Вуш (Whoosh)', nameEn: 'Whoosh', sector: 'transport', logoBg: '#6200EA', logoColor: '#fff', logoText: 'ВШ' },
  { ticker: 'EUTR', name: 'Евротранс', nameEn: 'Evrotrans', sector: 'transport', logoBg: '#E30611', logoColor: '#fff', logoText: 'ЕТ' },
  { ticker: 'UTAV', name: 'ЮТэйр', nameEn: 'Utair Aviation', sector: 'transport', logoBg: '#003DA5', logoColor: '#fff', logoText: 'ЮТ' },
  { ticker: 'NSHP', name: 'Северное пароходство', nameEn: 'Northern Shipping Co', sector: 'transport', logoBg: '#003882', logoColor: '#fff', logoText: 'СП' },
  { ticker: 'FESH', name: 'ДВМП', nameEn: 'Far Eastern Shipping', sector: 'transport', logoBg: '#003DA5', logoColor: '#fff', logoText: 'ДВ' },
  { ticker: 'NVSB', name: 'Новошип', nameEn: 'Novoship', sector: 'transport', logoBg: '#003882', logoColor: '#fff', logoText: 'НШ' },
  { ticker: 'PRMS', name: 'Примшипинг', nameEn: 'Prim Shipping', sector: 'transport', logoBg: '#004B87', logoColor: '#fff', logoText: 'ПШ' },
  { ticker: 'VLGP', name: 'Волжское пароходство', nameEn: 'Volga Shipping', sector: 'transport', logoBg: '#003DA5', logoColor: '#fff', logoText: 'ВП' },
  { ticker: 'PAVL', name: 'Павловский автобус', nameEn: 'Pavlovo Bus', sector: 'transport', logoBg: '#003DA5', logoColor: '#fff', logoText: 'ПА' },
  { ticker: 'NFAZ', name: 'НефАЗ', nameEn: 'Nefaz', sector: 'transport', logoBg: '#003DA5', logoColor: '#fff', logoText: 'НФ' },
  { ticker: 'SOLA', name: 'Соллерс Авто', nameEn: 'Sollers Auto', sector: 'transport', logoBg: '#003DA5', logoColor: '#fff', logoText: 'СА' },
  { ticker: 'GLTR', name: 'Глобалтранс', nameEn: 'Globaltruck', sector: 'transport', logoBg: '#003DA5', logoColor: '#fff', logoText: 'ГТ' },
  { ticker: 'DRIM', name: 'Дороги и мосты', nameEn: 'Dorogi i Mosty', sector: 'construction', logoBg: '#364956', logoColor: '#fff', logoText: 'ДМ' },
  { ticker: 'VLPT', name: 'Владивосток. торг. порт', nameEn: 'Commercial Port of Vladivostok', sector: 'transport', logoBg: '#003882', logoColor: '#fff', logoText: 'ВТ' },

  // ── Удобрения и химия (дополнительно) ──
  { ticker: 'DGRZ', name: 'Дорогобуж', nameEn: 'Dorogobuzh', sector: 'chemicals', logoBg: '#00843D', logoColor: '#fff', logoText: 'ДР' },
  { ticker: 'ORGS', name: 'Органический синтез', nameEn: 'Organichesky Sintez', sector: 'chemicals', logoBg: '#003DA5', logoColor: '#fff', logoText: 'ОС' },
  { ticker: 'KHMP', name: 'Химпром', nameEn: 'Khimprom', sector: 'chemicals', logoBg: '#003DA5', logoColor: '#fff', logoText: 'ХП' },
  { ticker: 'VLHM', name: 'Владимирский химзавод', nameEn: 'Vladimir Chemical', sector: 'chemicals', logoBg: '#003DA5', logoColor: '#fff', logoText: 'ВХ' },
  { ticker: 'PHRM', name: 'Фармсинтез', nameEn: 'Pharmsynthez', sector: 'chemicals', logoBg: '#00843D', logoColor: '#fff', logoText: 'ФС' },
  { ticker: 'OZPH', name: 'Озон Фармацевтика', nameEn: 'Ozon Pharmaceuticals', sector: 'chemicals', logoBg: '#004B87', logoColor: '#fff', logoText: 'ОФ' },
  { ticker: 'PRMD', name: 'Промомед', nameEn: 'Promomed', sector: 'chemicals', logoBg: '#00843D', logoColor: '#fff', logoText: 'ПМ' },
  { ticker: 'GNTC', name: 'Генетико', nameEn: 'Genetico', sector: 'chemicals', logoBg: '#512D6D', logoColor: '#fff', logoText: 'ГН' },

  // ── Холдинги и прочее ──
  { ticker: 'SGZH', name: 'Сегежа Груп', nameEn: 'Segezha Group', sector: 'holding', logoBg: '#00843D', logoColor: '#fff', logoText: 'СГ' },
  { ticker: 'SFIN', name: 'СФИ', nameEn: 'SFI', sector: 'holding', logoBg: '#003DA5', logoColor: '#fff', logoText: 'СФ' },
  { ticker: 'RGSS', name: 'Росгосстрах', nameEn: 'Rosgosstrakh', sector: 'banks', logoBg: '#E30611', logoColor: '#fff', logoText: 'РГ' },
  { ticker: 'RNSN', name: 'Ренессанс Страхование', nameEn: 'Renaissance Insurance', sector: 'banks', logoBg: '#512D6D', logoColor: '#fff', logoText: 'РН' },
  { ticker: 'ICNV', name: 'ИК Ай Си', nameEn: 'Investment Co IC', sector: 'banks', logoBg: '#003DA5', logoColor: '#fff', logoText: 'ИС' },
  { ticker: 'MDMG', name: 'МД Медикал', nameEn: 'MD Medical', sector: 'consumer', logoBg: '#DC143C', logoColor: '#fff', logoText: 'МД' },
  { ticker: 'HMSG', name: 'ИСКЧ', nameEn: 'Human Stem Cells', sector: 'chemicals', logoBg: '#003DA5', logoColor: '#fff', logoText: 'ИС' },
  { ticker: 'IRKT', name: 'Иркут', nameEn: 'Irkut Corporation', sector: 'transport', logoBg: '#003DA5', logoColor: '#fff', logoText: 'ИР' },
  { ticker: 'UNAC', name: 'ОАК', nameEn: 'United Aircraft Corp', sector: 'transport', logoBg: '#003882', logoColor: '#fff', logoText: 'ОА' },
  { ticker: 'UWGN', name: 'ОВК', nameEn: 'United Wagon Company', sector: 'transport', logoBg: '#003DA5', logoColor: '#fff', logoText: 'ОВ' },
  { ticker: 'UHMK', name: 'ОМЗ', nameEn: 'United Heavy Mach', sector: 'metals', logoBg: '#333', logoColor: '#fff', logoText: 'ОМ' },
  { ticker: 'ENPK', name: 'Энергия', nameEn: 'Energia Rocket', sector: 'transport', logoBg: '#003882', logoColor: '#fff', logoText: 'ЭР' },
  { ticker: 'TRMK', name: 'ТМК', nameEn: 'TMK', sector: 'metals', logoBg: '#E30611', logoColor: '#fff', logoText: 'ТМ' },
  { ticker: 'GAZJ', name: 'ГАЗ', nameEn: 'GAZ', sector: 'transport', logoBg: '#003DA5', logoColor: '#fff', logoText: 'ГА' },
  { ticker: 'LIKHZ', name: 'Завод им. Лихачёва', nameEn: 'Likhachov Plant', sector: 'transport', logoBg: '#003DA5', logoColor: '#fff', logoText: 'ЗЛ' },
  { ticker: 'MGKL', name: 'МГКЛ', nameEn: 'MGKL', sector: 'holding', logoBg: '#E94E1B', logoColor: '#fff', logoText: 'МГ' },
  { ticker: 'VIRU', name: 'Виру', nameEn: 'Viru', sector: 'consumer', logoBg: '#003DA5', logoColor: '#fff', logoText: 'ВР' },
  { ticker: 'WTRN', name: 'Центр Междунар. Торговли', nameEn: 'World Trade Center', sector: 'holding', logoBg: '#003882', logoColor: '#fff', logoText: 'ЦМ' },
  { ticker: 'SPBE', name: 'СПБ Биржа', nameEn: 'SPB Exchange', sector: 'banks', logoBg: '#003882', logoColor: '#fff', logoText: 'СП' },
  { ticker: 'STGR', name: 'СТГ', nameEn: 'STG', sector: 'energy', logoBg: '#003DA5', logoColor: '#fff', logoText: 'СТ' },
  { ticker: 'RSTI', name: 'Ростсельмаш', nameEn: 'Rostselmash', sector: 'transport', logoBg: '#E30611', logoColor: '#fff', logoText: 'РС' },
  { ticker: 'RAQC', name: 'Русская Аквакультура', nameEn: 'Russian Aquaculture', sector: 'consumer', logoBg: '#004B87', logoColor: '#fff', logoText: 'РА' },
  { ticker: 'OMSK', name: 'Омскоблгаз', nameEn: 'Omskoblgaz', sector: 'energy', logoBg: '#0078C1', logoColor: '#fff', logoText: 'ОМ' },
  { ticker: 'NTEL', name: 'Нител', nameEn: 'Nitel', sector: 'telecom_it', logoBg: '#333', logoColor: '#fff', logoText: 'НТ' },
  { ticker: 'NPNK', name: 'НПО Наука', nameEn: 'NPO Nauka', sector: 'transport', logoBg: '#003882', logoColor: '#fff', logoText: 'НН' },
  { ticker: 'NVCR', name: 'Новороссийск КМТП', nameEn: 'Novorossiysk Comm. Port', sector: 'transport', logoBg: '#003DA5', logoColor: '#fff', logoText: 'НП' },
  { ticker: 'NZGR', name: 'Новороссийский зерновой', nameEn: 'Novorossiysk Grain', sector: 'transport', logoBg: '#00843D', logoColor: '#fff', logoText: 'НЗ' },
  { ticker: 'KZGD', name: 'Красногорский завод', nameEn: 'Krasnogorsk Zavod', sector: 'metals', logoBg: '#003DA5', logoColor: '#fff', logoText: 'КЗ' },
  { ticker: 'KRKN', name: 'Красный Котельщик', nameEn: 'Krasny Kotelshchik', sector: 'metals', logoBg: '#B22222', logoColor: '#fff', logoText: 'КК' },
  { ticker: 'KVMK', name: 'Ковровский мех. завод', nameEn: 'Kovrov Mechanical', sector: 'metals', logoBg: '#003DA5', logoColor: '#fff', logoText: 'КМ' },
  { ticker: 'LAMB', name: 'Ламбумиз', nameEn: 'Lambumiz', sector: 'consumer', logoBg: '#003DA5', logoColor: '#fff', logoText: 'ЛМ' },
  { ticker: 'LEVH', name: 'Левенгук', nameEn: 'Levenhuk', sector: 'consumer', logoBg: '#003DA5', logoColor: '#fff', logoText: 'ЛВ' },
  { ticker: 'CTBI', name: 'Городские ИТ', nameEn: 'City Innovative Tech', sector: 'telecom_it', logoBg: '#003DA5', logoColor: '#fff', logoText: 'ГИ' },
  { ticker: 'IPJP', name: 'ИнтерПрогрессБанк', nameEn: 'IPJSC', sector: 'banks', logoBg: '#003DA5', logoColor: '#fff', logoText: 'ИП' },
  { ticker: 'ELCH', name: 'Европейская Элтехника', nameEn: 'European Eltech', sector: 'telecom_it', logoBg: '#003DA5', logoColor: '#fff', logoText: 'ЕЭ' },
  { ticker: 'LEAS', name: 'Европлан', nameEn: 'Europlan', sector: 'banks', logoBg: '#E94E1B', logoColor: '#fff', logoText: 'ЕП' },
  { ticker: 'RBEN', name: 'РБТ', nameEn: 'RBT', sector: 'consumer', logoBg: '#333', logoColor: '#fff', logoText: 'РБ' },
  { ticker: 'BGDN', name: 'Богданович Огнеупор', nameEn: 'Bogdanovich Ogneupor', sector: 'metals', logoBg: '#F9512D', logoColor: '#fff', logoText: 'БО' },
  { ticker: 'BGHS', name: 'Богучанская ГЭС', nameEn: 'Boguchanskaya GES', sector: 'energy', logoBg: '#0162AD', logoColor: '#fff', logoText: 'БГ' },
  { ticker: 'KEMZ', name: 'КЭМЗ', nameEn: 'KEMZ', sector: 'metals', logoBg: '#3C5F9F', logoColor: '#fff', logoText: 'КЭ' },
  { ticker: 'KOMT', name: 'Комитекс', nameEn: 'Komiteks', sector: 'consumer', logoBg: '#339967', logoColor: '#fff', logoText: 'КТ' },
  { ticker: 'NEWN', name: 'Новая энергия', nameEn: 'New Energy', sector: 'energy', logoBg: '#1B1B1B', logoColor: '#fff', logoText: 'НЭ' },
  { ticker: 'NVRL', name: 'Новорослесэкспорт', nameEn: 'Novorosleseksport', sector: 'consumer', logoBg: '#0D1A8D', logoColor: '#fff', logoText: 'НЛ' },
  { ticker: 'PLSO', name: 'АО Плюс', nameEn: 'AO Plus', sector: 'holding', logoBg: '#C1321A', logoColor: '#fff', logoText: 'П+' },
  { ticker: 'RJYK', name: 'ЖД Якутии', nameEn: 'Railways of Yakutia', sector: 'transport', logoBg: '#372664', logoColor: '#fff', logoText: 'ЖЯ' },
  { ticker: 'RUEN', name: 'RU', nameEn: 'RU', sector: 'telecom_it', logoBg: '#333', logoColor: '#fff', logoText: 'RU' },
  { ticker: 'RUAL2', name: 'Уральские авиалинии', nameEn: 'Ural Airlines', sector: 'transport', logoBg: '#003DA5', logoColor: '#fff', logoText: 'УА' },
  { ticker: 'TYZM', name: 'Туймазинский завод', nameEn: 'Tuimazinskiy Zavod', sector: 'metals', logoBg: '#003DA5', logoColor: '#fff', logoText: 'ТЗ' },
  { ticker: 'UGCN', name: 'ЮГК', nameEn: 'UGC', sector: 'metals', logoBg: '#FFD700', logoColor: '#000', logoText: 'ЮГ' },
  { ticker: 'PLAS', name: 'Пжц Уралас бест', nameEn: 'Uralasbest', sector: 'metals', logoBg: '#333', logoColor: '#fff', logoText: 'УБ' },
  { ticker: 'VYBG', name: 'Выборгский Судостр. завод', nameEn: 'Vyborg Shipyard', sector: 'transport', logoBg: '#003882', logoColor: '#fff', logoText: 'ВС' },
  { ticker: 'YKEN', name: 'Якутскэнерго', nameEn: 'Yakutskenergo', sector: 'energy', logoBg: '#E96024', logoColor: '#fff', logoText: 'ЯЭ' },
  { ticker: 'YKFE', name: 'Якутская ТЭК', nameEn: 'Yakutsk Fuel & Energy', sector: 'energy', logoBg: '#4591CA', logoColor: '#fff', logoText: 'ЯТ' },
  { ticker: 'ZAYM', name: 'Займер', nameEn: 'Zaymer', sector: 'banks', logoBg: '#4C9D37', logoColor: '#fff', logoText: 'ЗМ' },
  { ticker: 'ZVEZ', name: 'Звезда', nameEn: 'Zvezda', sector: 'transport', logoBg: '#374B90', logoColor: '#fff', logoText: 'ЗВ' },
  { ticker: 'DNSF', name: 'Донской завод', nameEn: 'Donskoy Factory', sector: 'metals', logoBg: '#333', logoColor: '#fff', logoText: 'ДЗ' },
  { ticker: 'BPGC', name: 'БПГК', nameEn: 'BPGC', sector: 'energy', logoBg: '#003DA5', logoColor: '#fff', logoText: 'БП' },
  { ticker: 'BSZR', name: 'БСЗ', nameEn: 'BSZ', sector: 'metals', logoBg: '#333', logoColor: '#fff', logoText: 'БС' },
  { ticker: 'CHEL', name: 'Челябинский завод', nameEn: 'Chelyabinsk Plant', sector: 'metals', logoBg: '#333', logoColor: '#fff', logoText: 'ЧЗ' },
  { ticker: 'AGRM', name: 'Агрофирма Мценская', nameEn: 'Agrofirma Mtsenskaya', sector: 'consumer', logoBg: '#B56605', logoColor: '#fff', logoText: 'АМ' },
  { ticker: 'INTM', name: 'Межд. мед. центр', nameEn: 'Intl Med Center', sector: 'consumer', logoBg: '#003DA5', logoColor: '#fff', logoText: 'ММ' },
  { ticker: 'TRNF', name: 'Транснефть', nameEn: 'Transneft', sector: 'transport', logoBg: '#003882', logoColor: '#fff', logoText: 'ТН' },
  { ticker: 'UPRO', name: 'Юнипро', nameEn: 'Unipro', sector: 'energy', logoBg: '#009FE3', logoColor: '#fff', logoText: 'ЮП' },
];

/** Get all companies = CORE (hand-tuned) + EXTRA (generated) */
export function getAllCompanies(): CompanyData[] {
  const coreTickerSet = new Set(CORE_COMPANIES.map(c => c.ticker));
  const extraCompanies: CompanyData[] = EXTRA_COMPANIES
    .filter(ec => !coreTickerSet.has(ec.ticker))
    .map(ec => ({
      ...ec,
      financials: generateFinancials(ec.ticker, ec.sector),
    }));
  return [...CORE_COMPANIES, ...extraCompanies];
}

/** Get all extended yearly periods */
export function getExtendedPeriods(): string[] {
  return EXTENDED_YEARS;
}

/** Get quarterly periods */
export function getQuarterlyPeriods(): string[] {
  return QUARTERLY_PERIODS;
}