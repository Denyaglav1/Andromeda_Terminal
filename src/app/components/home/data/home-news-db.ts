/* ═══════════════════════════════════════
   Home Page — News Database
   ~120 news items, with related/grouped news and auto-summaries
   ═══════════════════════════════════════ */

import type { NewsItem, NewsGroup, NewsSourceType, ContentType } from './home-types';

const SRC: NewsSourceType[] = ['euler', 'interfax', 'rbc', 'tass', 'kommersant'];
const CT: ContentType[] = ['analytics', 'podcast', 'important', 'article'];
const src = (i: number) => SRC[i % SRC.length];
const ct = (i: number) => CT[i % CT.length];

const NOW = Date.now();
const H = 3_600_000; // 1 hour in ms
const D = 86_400_000; // 1 day in ms

function t(hoursAgo: number) { return NOW - hoursAgo * H; }
function fmtTime(hoursAgo: number): string {
  if (hoursAgo < 24) {
    const d = new Date(NOW - hoursAgo * H);
    return `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
  }
  const d = new Date(NOW - hoursAgo * H);
  return `${String(d.getDate()).padStart(2, '0')}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getFullYear()).slice(2)}`;
}

/* ─── All news items ─── */
export const NEWS_DB: NewsItem[] = [
  // ═══════ RECENT (0-6 hours ago) ═══════
  { id: 'n1', time: fmtTime(0.1), timestamp: t(0.1), title: 'Эйлер: Россия - Первичный рынок облигаций - Самолет: новые летные испытания', source: 'euler', isImportant: false },
  { id: 'n2', time: fmtTime(0.3), timestamp: t(0.3), title: 'РЖД установили ориентир ставки купона облигаций объемом от 20 млрд руб. на уровне не выше 15,35%', source: 'rbc', isImportant: false },

  // ═══════ GROUP 0a: Sberbank ═══════
  {
    id: 'n3', time: fmtTime(0.5), timestamp: t(0.5),
    title: 'ЦБ РФ 23 декабря проведет 6-дневный аукцион репо с лимитом 3,63 трлн рублей',
    source: 'interfax', isImportant: true, importantCount: 3, docCount: 5,
    groupId: 'grp_cbr_repo', isGroupParent: true,
    body: 'Банк России анонсировал аукцион РЕПО на 6 дней с лимитом 3,63 трлн руб. Спрос со стороны банков ожидается высоким на фоне налогового периода.',
    bullets: [
      'Лимит аукциона увеличен на 400 млрд по сравнению с предыдущей неделей.',
      'Налоговый период формирует повышенный спрос на ликвидность.',
    ],
  },
  { id: 'n3_c1', time: fmtTime(0.7), timestamp: t(0.7), title: 'Ставки МБК выросли до 21,5% на фоне налогового периода', source: 'rbc', isImportant: false, groupId: 'grp_cbr_repo', contentType: 'analytics' },
  { id: 'n3_c2', time: fmtTime(0.9), timestamp: t(0.9), title: 'Банки привлекли на аукционе ЦБ 3,1 трлн руб. из 3,63 трлн лимита', source: 'interfax', isImportant: false, groupId: 'grp_cbr_repo', contentType: 'article' },
  { id: 'n3_c3', time: fmtTime(1.1), timestamp: t(1.1), title: 'Минфин: бюджетные расходы в декабре ускорят отток ликвидности', source: 'tass', isImportant: false, groupId: 'grp_cbr_repo', contentType: 'important' },

  { id: 'n4', time: fmtTime(0.8), timestamp: t(0.8), title: 'Индекс Мосбиржи обновил максимум с сентября 2024 года', source: 'rbc', isImportant: false },

  // ═══════ GROUP 0b: Sberbank RSBU ═══════
  {
    id: 'n5', time: fmtTime(1.0), timestamp: t(1.0),
    title: 'Сбербанк опубликовал отчетность по РСБУ за ноябрь: прибыль выросла на 8%',
    source: 'interfax', isImportant: true, importantCount: 4, docCount: 7,
    groupId: 'grp_sber_rsbu', isGroupParent: true,
    body: 'Чистая прибыль Сбербанка по РСБУ в ноябре 2025 составила 142 млрд руб., рост на 8% г/г. Кредитный портфель вырос на 2,1% за месяц.',
    bullets: [
      'Розничный кредитный портфель вырос на 2,5% за ноябрь.',
      'Чистая процентная маржа стабильна на уровне 5,8%.',
      'Резервы увеличены на 15 млрд руб. из-за макропруденциальных требований.',
    ],
  },
  { id: 'n5_c1', time: fmtTime(1.2), timestamp: t(1.2), title: 'Сбер: депозиты физлиц выросли на 18% г/г до 22 трлн руб.', source: 'rbc', isImportant: false, groupId: 'grp_sber_rsbu', contentType: 'analytics' },
  { id: 'n5_c2', time: fmtTime(1.4), timestamp: t(1.4), title: 'Аналитики повысили целевую цену акций Сбера до 340 руб.', source: 'euler', isImportant: false, groupId: 'grp_sber_rsbu', contentType: 'article' },
  { id: 'n5_c3', time: fmtTime(1.6), timestamp: t(1.6), title: 'Сбербанк: комиссионные доходы увеличились на 12%', source: 'kommersant', isImportant: false, groupId: 'grp_sber_rsbu', contentType: 'podcast' },
  { id: 'n5_c4', time: fmtTime(1.7), timestamp: t(1.7), title: 'Греф: цифровые сервисы обеспечивают 40% непроцентного дохода', source: 'tass', isImportant: false, groupId: 'grp_sber_rsbu', contentType: 'important' },

  // ═══════ GROUP 0c: Gas export ═══════
  {
    id: 'n6', time: fmtTime(1.3), timestamp: t(1.3),
    title: 'Газпром нарастил экспорт газа в Китай по «Силе Сибири» до рекордных объемов',
    source: 'tass', isImportant: true, importantCount: 3, docCount: 6,
    groupId: 'grp_gas_export', isGroupParent: true,
    body: 'Поставки по газопроводу «Сила Сибири» вышли на проектную мощность 38 млрд куб. м в год. Газпром рассматривает расширение до 44 млрд куб. м.',
    bullets: [
      'Суточные поставки достигли 104 млн куб. м — рекорд с момента запуска.',
      'Переговоры о «Силе Сибири-2» продолжаются, финальное соглашение ожидается в Q2 2026.',
    ],
  },
  { id: 'n6_c1', time: fmtTime(1.5), timestamp: t(1.5), title: 'Китай увеличил импорт трубопроводного газа из РФ на 45% г/г', source: 'interfax', isImportant: false, groupId: 'grp_gas_export', contentType: 'analytics' },
  { id: 'n6_c2', time: fmtTime(1.8), timestamp: t(1.8), title: 'Газпром: доходы от экспорта в Китай компенсируют падение поставок в ЕС', source: 'rbc', isImportant: false, groupId: 'grp_gas_export', contentType: 'article' },
  { id: 'n6_c3', time: fmtTime(2.1), timestamp: t(2.1), title: 'Монголия одобрила маршрут «Силы Сибири-2» через свою территорию', source: 'tass', isImportant: false, groupId: 'grp_gas_export', contentType: 'important' },

  { id: 'n7', time: fmtTime(1.5), timestamp: t(1.5), title: 'Курс доллара на Мосбирже опустился ниже 99 рублей впервые за месяц', source: 'rbc', isImportant: false },

  // ═══════ GROUP 0d: MinFin OFZ ═══════
  {
    id: 'n8', time: fmtTime(1.8), timestamp: t(1.8),
    title: 'Минфин увеличил объем заимствований на аукционах ОФЗ до 50 млрд руб.',
    source: 'interfax', isImportant: true, importantCount: 2, docCount: 4,
    groupId: 'grp_minfin_ofz', isGroupParent: true,
    body: 'Министерство финансов разместило ОФЗ-ПД серии 26245 на 50 млрд руб. при спросе 78 млрд. Средневзвешенная доходность составила 15,2%.',
    bullets: [
      'Спрос превысил предложение в 1,56 раза.',
      'Доходность ОФЗ 10Y стабилизировалась в районе 15%.',
    ],
  },
  { id: 'n8_c1', time: fmtTime(2.0), timestamp: t(2.0), title: 'ОФЗ: доходности длинных выпусков снижаются второй день подряд', source: 'euler', isImportant: false, groupId: 'grp_minfin_ofz', contentType: 'analytics' },
  { id: 'n8_c2', time: fmtTime(2.2), timestamp: t(2.2), title: 'Аналитики: спрос на ОФЗ растет на ожиданиях смягчения ДКП', source: 'rbc', isImportant: false, groupId: 'grp_minfin_ofz', contentType: 'article' },

  { id: 'n9', time: fmtTime(2.0), timestamp: t(2.0), title: 'ЛУКОЙЛ завершил сделку по продаже активов в Нигерии за $1,3 млрд', source: 'kommersant', isImportant: false },

  // ═══════ GROUP 0e: Yandex Strategy ═══════
  {
    id: 'n10', time: fmtTime(2.3), timestamp: t(2.3),
    title: 'Яндекс представил обновленную стратегию развития до 2028 года',
    source: 'euler', isImportant: true, importantCount: 4, docCount: 8,
    groupId: 'grp_yandex_strat', isGroupParent: true,
    body: 'Яндекс планирует удвоить выручку к 2028 году. Основные драйверы: рекламный бизнес, электронная коммерция (Маркет), финтех и автономный транспорт.',
    bullets: [
      'Выручка от электронной коммерции (Маркет) вырастет в 3 раза.',
      'Инвестиции в ИИ составят более 100 млрд руб. за 3 года.',
      'Яндекс планирует запуск беспилотного такси в 5 городах к 2027.',
    ],
  },
  { id: 'n10_c1', time: fmtTime(2.5), timestamp: t(2.5), title: 'Яндекс Маркет: GMV вырос на 60% г/г в IV квартале 2025', source: 'rbc', isImportant: false, groupId: 'grp_yandex_strat', contentType: 'analytics' },
  { id: 'n10_c2', time: fmtTime(2.8), timestamp: t(2.8), title: 'Яндекс Го: сервис доставки вышел на операционную безубыточность', source: 'kommersant', isImportant: false, groupId: 'grp_yandex_strat', contentType: 'article' },
  { id: 'n10_c3', time: fmtTime(3.0), timestamp: t(3.0), title: 'Аналитики: акции Яндекса недооценены на 25% к справедливой стоимости', source: 'euler', isImportant: false, groupId: 'grp_yandex_strat', contentType: 'podcast' },

  // ═══════ GROUP 1: Market morning overview ═══════
  {
    id: 'n11', time: fmtTime(3), timestamp: t(3),
    title: 'Спасатели продолжают тушить возгорание на одном из терминалов в Тамани после атаки БПЛА - оперштаб Кубани',
    source: 'tass', isImportant: true, importantCount: 5, docCount: 12,
    groupId: 'grp_market_morning', isGroupParent: true,
    body: 'Глобальные рынки вчера закрылись в плюсе. Американский рынок (S&P 500 +0,9%) вырос. Акции техсектора (NASDAQ 100 +1,3%) Были среди лидеров. Европейские рынки завершили день в положительной зоне.',
    bullets: [
      'Глобальные рынки вчера закрылись в плюсе. Американский рынок (S&P 500 +0,9%) вырос. Акции техсектора (NASDAQ 100 +1,3%) Были среди лидеров.',
      'Инвесткомпания CapVest близка к покупке германской компании за 10 млрд.',
    ],
  },
  { id: 'n11_c1', time: fmtTime(3.5), timestamp: t(3.5), title: 'Рынок акций РФ попытается подрости в понедельник', source: 'euler', isImportant: false, groupId: 'grp_market_morning', contentType: 'analytics' },
  { id: 'n11_c2', time: fmtTime(4.0), timestamp: t(4.0), title: 'Рубль утром почти не меняется в паре с юанем', source: 'rbc', isImportant: false, groupId: 'grp_market_morning', contentType: 'podcast' },
  { id: 'n11_c3', time: fmtTime(4.5), timestamp: t(4.5), title: 'Страны ШОС решили создать Банк развития', source: 'tass', isImportant: false, groupId: 'grp_market_morning', contentType: 'important' },
  { id: 'n11_c4', time: fmtTime(5.0), timestamp: t(5.0), title: 'Инвесткомпания CapVest близка к покупке германского производителя', source: 'kommersant', isImportant: false, groupId: 'grp_market_morning', contentType: 'article' },
  { id: 'n11_c5', time: fmtTime(5.5), timestamp: t(5.5), title: 'Европейские рынки завершили торги в положительной зоне', source: 'interfax', isImportant: false, groupId: 'grp_market_morning', contentType: 'analytics' },

  // ═══════ 6-12 hours ago ═══════
  { id: 'n12', time: fmtTime(6), timestamp: t(6), title: 'Мосбиржа зарегистрировала программу облигаций "Т Плюс" объемом 70 млрд руб. и выпуск в ее рамках', source: 'interfax', isImportant: false },
  { id: 'n13', time: fmtTime(6.5), timestamp: t(6.5), title: 'Совет директоров МТС утвердил программу биржевых облигаций на 350 млрд рублей', source: 'rbc', isImportant: false },
  { id: 'n14', time: fmtTime(7), timestamp: t(7), title: 'Минфин РФ предлагает увеличить лимит государственных гарантий на 200 млрд рублей в 2026 году', source: 'interfax', isImportant: false },
  { id: 'n15', time: fmtTime(7.5), timestamp: t(7.5), title: 'Норникель объявил о программе обратного выкупа акций на $500 млн', source: 'kommersant', isImportant: false },
  { id: 'n16', time: fmtTime(8), timestamp: t(8), title: 'Роснефть увеличила добычу нефти на Ванкорском кластере на 12%', source: 'tass', isImportant: false },

  // ═══════ GROUP 2: Oil & Transneft ═══════
  {
    id: 'n17', time: fmtTime(9), timestamp: t(9),
    title: 'Рынок акций РФ открылся в основную сессию незначительными изменениями индексов МосБиржи и РТС',
    source: 'rbc', isImportant: true, importantCount: 5, docCount: 12,
    groupId: 'grp_oil_transneft', isGroupParent: true,
    body: 'Индекс Мосбиржи на открытии вырос на 0,1%, РТС снизился на 0,2%. Нефть Brent торгуется вблизи $73 за баррель.',
    bullets: [
      'Индекс Мосбиржи на открытии вырос на 0,1%, РТС снизился на 0,2%.',
      'Нефть Brent стабильна вблизи $73, Urals с дисконтом $12.',
    ],
  },
  { id: 'n17_c1', time: fmtTime(9.5), timestamp: t(9.5), title: 'Транснефть: стабильность поставок нефтепродуктов не под угрозой', source: 'tass', isImportant: false, groupId: 'grp_oil_transneft', contentType: 'important' },
  { id: 'n17_c2', time: fmtTime(10), timestamp: t(10), title: 'ОПЕК+ может пересмотреть квоты на добычу в I квартале 2026', source: 'interfax', isImportant: false, groupId: 'grp_oil_transneft', contentType: 'analytics' },
  { id: 'n17_c3', time: fmtTime(10.5), timestamp: t(10.5), title: 'Саудовская Аравия снизила цены на нефть для Азии', source: 'kommersant', isImportant: false, groupId: 'grp_oil_transneft', contentType: 'article' },
  { id: 'n17_c4', time: fmtTime(11), timestamp: t(11), title: 'Запасы нефти в США снизились на 4,2 млн баррелей за неделю', source: 'euler', isImportant: false, groupId: 'grp_oil_transneft', contentType: 'analytics' },

  { id: 'n18', time: fmtTime(11.5), timestamp: t(11.5), title: 'ТЕХНОЛОГИЧЕСКИ НИЧТО НЕ УГРОЖАЕТ СТАБИЛЬНОСТИ ПОСТАВОК НЕФТИ И НЕФТЕПРОДУКТОВ ПО СИСТЕМЕ ТРАНСНЕФТИ - ТОКАРЕВ', source: 'tass', isImportant: true, importantCount: 5, docCount: 12 },
  { id: 'n19', time: fmtTime(12), timestamp: t(12), title: 'Правительство утвердило план приватизации федерального имущества на 2026-2028 годы', source: 'tass', isImportant: false },

  // ═══════ GROUP 3: ЦБ ставка ═══════
  {
    id: 'n20', time: fmtTime(14), timestamp: t(14),
    title: 'Акции Мосбиржи и Санкт-Петербургской биржи выросли после заявлений ЦБ о сохранении ставки',
    source: 'rbc', isImportant: true, importantCount: 3, docCount: 8,
    groupId: 'grp_cb_rate', isGroupParent: true,
    body: 'Банк России принял решение сохранить ключевую ставку на уровне 21% годовых. Рынок воспринял это как сигнал к завершению цикла ужесточения.',
    bullets: [
      'ЦБ сохранил ставку на уровне 21% - ожидания рынка оправдались.',
      'Индекс Мосбиржи прибавил 2,3% по итогам торговой сессии.',
      'Облигации показали умеренный рост доходностей.',
    ],
  },
  { id: 'n20_c1', time: fmtTime(14.5), timestamp: t(14.5), title: 'Набиуллина: ЦБ видит признаки замедления кредитования', source: 'rbc', isImportant: false, groupId: 'grp_cb_rate', contentType: 'analytics' },
  { id: 'n20_c2', time: fmtTime(15), timestamp: t(15), title: 'Аналитики прогнозируют снижение ставки ЦБ до 18% к середине 2026', source: 'euler', isImportant: false, groupId: 'grp_cb_rate', contentType: 'article' },
  { id: 'n20_c3', time: fmtTime(15.5), timestamp: t(15.5), title: 'Банковский сектор: влияние решения ЦБ на маржинальность', source: 'kommersant', isImportant: false, groupId: 'grp_cb_rate', contentType: 'podcast' },
  { id: 'n20_c4', time: fmtTime(16), timestamp: t(16), title: 'ОФЗ выросли в цене после решения ЦБ по ставке', source: 'interfax', isImportant: false, groupId: 'grp_cb_rate', contentType: 'important' },

  // ═══════ 1 day ago ═══════
  { id: 'n21', time: fmtTime(24), timestamp: t(24), title: 'ЕЦБ сохранил ключевую ставку на уровне 3,15% - решение совпало с прогнозом аналитиков', source: 'interfax', isImportant: false },
  { id: 'n22', time: fmtTime(25), timestamp: t(25), title: 'Русал планирует увеличить производство алюминия на 5% в 2026 году за счет модернизации заводов', source: 'kommersant', isImportant: false },
  { id: 'n23', time: fmtTime(26), timestamp: t(26), title: 'Полюс Золото отчитался о рекордной добыче за III квартал - 720 тыс. унций', source: 'euler', isImportant: false },
  { id: 'n24', time: fmtTime(27), timestamp: t(27), title: 'Аэрофлот увеличил пассажиропоток на 15% по сравнению с аналогичным периодом 2024 года', source: 'tass', isImportant: false },
  { id: 'n25', time: fmtTime(28), timestamp: t(28), title: 'ВТБ завершил допэмиссию акций на 150 млрд руб. для пополнения капитала', source: 'rbc', isImportant: false },
  { id: 'n26', time: fmtTime(29), timestamp: t(29), title: 'АЛРОСА возобновила продажи алмазов в Индию после снятия ограничений', source: 'interfax', isImportant: false },
  { id: 'n27', time: fmtTime(30), timestamp: t(30), title: 'Магнит открыл 200 новых магазинов «у дома» в регионах РФ', source: 'kommersant', isImportant: false },
  { id: 'n28', time: fmtTime(31), timestamp: t(31), title: 'Северсталь снизила цены на арматуру на 3% с 1 января 2026 года', source: 'tass', isImportant: false },

  // ═══════ GROUP 4: Sanctions ═══════
  {
    id: 'n29', time: fmtTime(32), timestamp: t(32),
    title: 'ЕС утвердил 15-й пакет санкций против России - ограничения затрагивают энергетический сектор',
    source: 'rbc', isImportant: true, importantCount: 8, docCount: 15,
    groupId: 'grp_sanctions', isGroupParent: true,
    body: 'Европейский союз утвердил 15-й пакет санкций, затрагивающий нефтяной и газовый секторы. Новые ограничения вступят в силу с 1 февраля 2026.',
    bullets: [
      'Новые ограничения распространяются на танкерный флот и страхование морских перевозок.',
      'Под санкции попали 12 российских компаний и 45 физических лиц.',
      'Аналитики оценивают потенциальное влияние на экспорт нефти в 5-8%.',
    ],
  },
  { id: 'n29_c1', time: fmtTime(32.5), timestamp: t(32.5), title: 'МИД РФ: новые санкции ЕС не повлияют на энергетическую безопасность страны', source: 'tass', isImportant: false, groupId: 'grp_sanctions', contentType: 'important' },
  { id: 'n29_c2', time: fmtTime(33), timestamp: t(33), title: 'Нефтяные компании переориентируют экспорт на азиатские рынки', source: 'euler', isImportant: false, groupId: 'grp_sanctions', contentType: 'analytics' },
  { id: 'n29_c3', time: fmtTime(33.5), timestamp: t(33.5), title: 'Индия нарастила импорт российской нефти до рекордных 2,1 млн б/с', source: 'interfax', isImportant: false, groupId: 'grp_sanctions', contentType: 'article' },
  { id: 'n29_c4', time: fmtTime(34), timestamp: t(34), title: 'Дисконт Urals к Brent сократился до $8 за баррель', source: 'rbc', isImportant: false, groupId: 'grp_sanctions', contentType: 'analytics' },
  { id: 'n29_c5', time: fmtTime(34.5), timestamp: t(34.5), title: 'Китайские НПЗ увеличили закупки российской нефти марки ESPO', source: 'kommersant', isImportant: false, groupId: 'grp_sanctions', contentType: 'podcast' },
  { id: 'n29_c6', time: fmtTime(35), timestamp: t(35), title: 'ЦБ оценил влияние новых санкций на платежный баланс', source: 'euler', isImportant: false, groupId: 'grp_sanctions', contentType: 'important' },

  // ═══════ 1.5-2 days ago ═══════
  { id: 'n30', time: fmtTime(36), timestamp: t(36), title: 'Фосагро увеличила экспорт удобрений в Латинскую Америку на 18%', source: 'euler', isImportant: false },
  { id: 'n31', time: fmtTime(37), timestamp: t(37), title: 'Россети вложат 120 млрд руб. в модернизацию сетей Дальнего Востока', source: 'tass', isImportant: false },
  { id: 'n32', time: fmtTime(38), timestamp: t(38), title: 'ТМК получила контракт на поставку труб для Силы Сибири-2 на $800 млн', source: 'kommersant', isImportant: false },
  { id: 'n33', time: fmtTime(39), timestamp: t(39), title: 'Ozon завершил строительство логистического центра площадью 200 тыс. кв.м в Казани', source: 'rbc', isImportant: false },
  { id: 'n34', time: fmtTime(40), timestamp: t(40), title: 'ПИК группа планирует выход на рынок ОАЭ с проектами жилой недвижимости', source: 'interfax', isImportant: false },
  { id: 'n35', time: fmtTime(41), timestamp: t(41), title: 'Т-Банк запустил программу лояльности для малого бизнеса с кэшбэком до 5%', source: 'rbc', isImportant: false },
  { id: 'n36', time: fmtTime(42), timestamp: t(42), title: 'Х5 Group завершила ребрендинг сети «Пятерочка» в формат «Пять»', source: 'kommersant', isImportant: false },
  { id: 'n37', time: fmtTime(43), timestamp: t(43), title: 'Группа ГАЗ начала серийное производство электрических грузовиков', source: 'tass', isImportant: false },

  // ═══════ GROUP 5: IPO wave ═══════
  {
    id: 'n38', time: fmtTime(44), timestamp: t(44),
    title: 'Волна IPO на Мосбирже: пять компаний подали заявки на первичное размещение в I кв 2026',
    source: 'rbc', isImportant: true, importantCount: 4, docCount: 9,
    groupId: 'grp_ipo', isGroupParent: true,
    body: 'Мосбиржа ожидает рекордное количество IPO в первом квартале 2026 года. Суммарный объем размещений может превысить 150 млрд руб.',
    bullets: [
      'Среди кандидатов на IPO - компании из IT, ритейла и промышленного сектора.',
      'Мосбиржа упрощает процедуру листинга для привлечения новых эмитентов.',
    ],
  },
  { id: 'n38_c1', time: fmtTime(44.5), timestamp: t(44.5), title: 'Группа Astra подала заявку на IPO с оценкой в 120 млрд руб.', source: 'rbc', isImportant: false, groupId: 'grp_ipo', contentType: 'analytics' },
  { id: 'n38_c2', time: fmtTime(45), timestamp: t(45), title: 'Wildberries рассматривает размещение на Мосбирже в марте 2026', source: 'kommersant', isImportant: false, groupId: 'grp_ipo', contentType: 'article' },
  { id: 'n38_c3', time: fmtTime(45.5), timestamp: t(45.5), title: 'Henderson планирует привлечь 15 млрд руб. через IPO', source: 'interfax', isImportant: false, groupId: 'grp_ipo', contentType: 'important' },

  // ═══════ 2-3 days ago ═══════
  { id: 'n39', time: fmtTime(48), timestamp: t(48), title: 'Сургутнефтегаз рассматривает возможность выплаты промежуточных дивидендов', source: 'euler', isImportant: false },
  { id: 'n40', time: fmtTime(49), timestamp: t(49), title: 'Совкомфлот увеличил тоннаж танкерного флота на 15% за счет новых судов', source: 'tass', isImportant: false },
  { id: 'n41', time: fmtTime(50), timestamp: t(50), title: 'НЛМК возобновил поставки стальной продукции в Турцию и Египет', source: 'interfax', isImportant: false },
  { id: 'n42', time: fmtTime(51), timestamp: t(51), title: 'Мосэнерго запустила новый энергоблок ТЭЦ-27 мощностью 420 МВт', source: 'kommersant', isImportant: false },
  { id: 'n43', time: fmtTime(52), timestamp: t(52), title: 'Ростелеком завершил модернизацию сетей 5G в 15 городах-миллионниках', source: 'rbc', isImportant: false },
  { id: 'n44', time: fmtTime(53), timestamp: t(53), title: 'Интер РАО увеличила экспорт электроэнергии в Казахстан и Монголию', source: 'tass', isImportant: false },
  { id: 'n45', time: fmtTime(54), timestamp: t(54), title: 'Селигдар получил лицензию на разработку нового золоторудного месторождения в Якутии', source: 'euler', isImportant: false },
  { id: 'n46', time: fmtTime(55), timestamp: t(55), title: 'HeadHunter отчитался о росте выручки на 32% год к году', source: 'rbc', isImportant: false },
  { id: 'n47', time: fmtTime(56), timestamp: t(56), title: 'РусГидро начала строительство каскада ГЭС на реке Тимптон мощностью 1,2 ГВт', source: 'tass', isImportant: false },
  { id: 'n48', time: fmtTime(57), timestamp: t(57), title: 'VEON завершил продажу российского бизнеса команде менеджмента за $2,1 млрд', source: 'kommersant', isImportant: false },

  // ═══════ GROUP 6: Budget ═══════
  {
    id: 'n49', time: fmtTime(58), timestamp: t(58),
    title: 'Госдума приняла федеральный бюджет на 2026 год в третьем чтении',
    source: 'tass', isImportant: true, importantCount: 6, docCount: 18,
    groupId: 'grp_budget', isGroupParent: true,
    body: 'Расходы бюджета составят 40,2 трлн руб., доходы — 37,1 трлн руб. Дефицит запланирован на уровне 0,9% ВВП.',
    bullets: [
      'Военные расходы сохранены на уровне 6,3% ВВП.',
      'Социальные расходы увеличены на 12% в номинальном выражении.',
      'Нефтегазовые доходы заложены из расчета цены нефти Urals $60/барр.',
    ],
  },
  { id: 'n49_c1', time: fmtTime(58.5), timestamp: t(58.5), title: 'Счетная палата одобрила параметры бюджета на 2026 год', source: 'interfax', isImportant: false, groupId: 'grp_budget', contentType: 'article' },
  { id: 'n49_c2', time: fmtTime(59), timestamp: t(59), title: 'Минфин повысит НДПИ на уголь с 2026 года', source: 'rbc', isImportant: false, groupId: 'grp_budget', contentType: 'important' },
  { id: 'n49_c3', time: fmtTime(59.5), timestamp: t(59.5), title: 'Налоговые поступления от нефтегазового сектора прогнозируются на уровне 11,6 трлн руб.', source: 'euler', isImportant: false, groupId: 'grp_budget', contentType: 'analytics' },
  { id: 'n49_c4', time: fmtTime(60), timestamp: t(60), title: 'ФНБ планируется расходовать в объеме не более 1,5 трлн руб.', source: 'tass', isImportant: false, groupId: 'grp_budget', contentType: 'podcast' },

  // ═══════ 3-5 days ago ═══════
  { id: 'n50', time: fmtTime(72), timestamp: t(72), title: 'Банк «Открытие» интегрирован в структуру ВТБ - процесс объединения завершен', source: 'rbc', isImportant: false },
  { id: 'n51', time: fmtTime(73), timestamp: t(73), title: 'КамАЗ начал поставки грузовиков нового поколения K6 дилерам', source: 'tass', isImportant: false },
  { id: 'n52', time: fmtTime(74), timestamp: t(74), title: 'МКБ получил кредитный рейтинг A+(RU) от АКРА с позитивным прогнозом', source: 'interfax', isImportant: false },
  { id: 'n53', time: fmtTime(75), timestamp: t(75), title: 'ЕвроХим увеличил производство карбамида на заводе в Кингисеппе на 20%', source: 'euler', isImportant: false },
  { id: 'n54', time: fmtTime(76), timestamp: t(76), title: 'Fix Price открыл 1000-й магазин в Центральной Азии', source: 'kommersant', isImportant: false },
  { id: 'n55', time: fmtTime(77), timestamp: t(77), title: 'Softline отчитался о росте контрактов на облачные сервисы на 45%', source: 'rbc', isImportant: false },
  { id: 'n56', time: fmtTime(78), timestamp: t(78), title: 'Positive Technologies провела успешные кибер-учения с крупнейшими банками', source: 'tass', isImportant: false },
  { id: 'n57', time: fmtTime(79), timestamp: t(79), title: 'Объем торгов на Мосбирже в ноябре достиг рекордных 85 трлн руб.', source: 'interfax', isImportant: false },
  { id: 'n58', time: fmtTime(80), timestamp: t(80), title: 'Мечел увеличил добычу угля на 8% за счет расконсервации шахт в Кузбассе', source: 'euler', isImportant: false },
  { id: 'n59', time: fmtTime(81), timestamp: t(81), title: 'Детский мир закрыл сделку по приобретению сети «Кораблик»', source: 'kommersant', isImportant: false },
  { id: 'n60', time: fmtTime(82), timestamp: t(82), title: 'АФК «Система» отчиталась о росте стоимости портфеля на 25% за год', source: 'rbc', isImportant: false },
  { id: 'n61', time: fmtTime(83), timestamp: t(83), title: 'Globaltrans завершил делистинг с Лондонской биржи', source: 'interfax', isImportant: false },

  // ═══════ GROUP 7: China trade ═══════
  {
    id: 'n62', time: fmtTime(84), timestamp: t(84),
    title: 'Товарооборот России и Китая по итогам 2025 года превысил $250 млрд',
    source: 'tass', isImportant: true, importantCount: 3, docCount: 7,
    groupId: 'grp_china', isGroupParent: true,
    body: 'Двусторонняя торговля продолжает расти. Основные статьи экспорта РФ: энергоносители, металлы, древесина. Расчеты в юанях достигли 40% товарооборота.',
    bullets: [
      'Доля расчетов в юанях выросла с 25% до 40% за год.',
      'Экспорт энергоносителей составил $120 млрд, что на 18% больше показателя 2024.',
    ],
  },
  { id: 'n62_c1', time: fmtTime(84.5), timestamp: t(84.5), title: 'Пекин снял ограничения на импорт российской пшеницы из всех регионов', source: 'tass', isImportant: false, groupId: 'grp_china', contentType: 'important' },
  { id: 'n62_c2', time: fmtTime(85), timestamp: t(85), title: 'Строительство газопровода «Сила Сибири-2» через Монголию идет по графику', source: 'interfax', isImportant: false, groupId: 'grp_china', contentType: 'analytics' },
  { id: 'n62_c3', time: fmtTime(85.5), timestamp: t(85.5), title: 'Юаневые облигации российских эмитентов набирают популярность на Мосбирже', source: 'euler', isImportant: false, groupId: 'grp_china', contentType: 'article' },

  // ═══════ 5-7 days ago ═══════
  { id: 'n63', time: fmtTime(96), timestamp: t(96), title: 'Полиметалл объявил о реструктуризации после переезда в Казахстан', source: 'rbc', isImportant: false },
  { id: 'n64', time: fmtTime(97), timestamp: t(97), title: 'СИБУР запустил производство специальных полимеров для авиапромышленности', source: 'tass', isImportant: false },
  { id: 'n65', time: fmtTime(98), timestamp: t(98), title: 'ЮГК увеличил производство золота на 12% в IV квартале 2025', source: 'euler', isImportant: false },
  { id: 'n66', time: fmtTime(99), timestamp: t(99), title: 'Вымпелком (Билайн) завершил развертывание 4G LTE в сельской местности 30 регионов', source: 'kommersant', isImportant: false },
  { id: 'n67', time: fmtTime(100), timestamp: t(100), title: 'ММК начал производство жаропрочных сталей для атомной энергетики', source: 'interfax', isImportant: false },
  { id: 'n68', time: fmtTime(101), timestamp: t(101), title: 'Сегежа Групп реструктурировала долг на 80 млрд руб. с участием банков-кредиторов', source: 'rbc', isImportant: false },
  { id: 'n69', time: fmtTime(102), timestamp: t(102), title: 'Распадская увеличила объем обогащения угля на 15% на фабрике «Распадская»', source: 'tass', isImportant: false },
  { id: 'n70', time: fmtTime(103), timestamp: t(103), title: 'Московский кредитный банк выпустил зеленые облигации на 10 млрд руб.', source: 'interfax', isImportant: false },
  { id: 'n71', time: fmtTime(104), timestamp: t(104), title: 'Совкомбанк завершил интеграцию Хоум Кредит Банка', source: 'rbc', isImportant: false },
  { id: 'n72', time: fmtTime(105), timestamp: t(105), title: 'Казаньоргсинтез запустил установку пиролиза мощностью 600 тыс. тонн этилена', source: 'euler', isImportant: false },
  { id: 'n73', time: fmtTime(106), timestamp: t(106), title: 'РусГидро подписала контракт на строительство ГЭС в Киргизии', source: 'tass', isImportant: false },
  { id: 'n74', time: fmtTime(107), timestamp: t(107), title: 'ЕМС опубликовал сильные результаты за 9 месяцев: EBITDA +22%', source: 'euler', isImportant: false },
  { id: 'n75', time: fmtTime(108), timestamp: t(108), title: 'Акрон нарастил выпуск аммиака на новгородской площадке на 10%', source: 'interfax', isImportant: false },

  // ═══════ GROUP 8: Digital ruble ═══════
  {
    id: 'n76', time: fmtTime(110), timestamp: t(110),
    title: 'ЦБ расширил пилот цифрового рубля до 500 тысяч участников',
    source: 'rbc', isImportant: true, importantCount: 2, docCount: 5,
    groupId: 'grp_digital_rub', isGroupParent: true,
    body: 'Банк России расширяет пилотный проект цифрового рубля. С 1 марта 2026 цифровой рубль станет доступен клиентам 15 банков.',
    bullets: [
      'К пилоту подключены Сбер, ВТБ, Альфа-Банк, Т-Банк и другие.',
      'Объем операций с цифровым рублем за время пилота составил 2,5 млрд руб.',
    ],
  },
  { id: 'n76_c1', time: fmtTime(110.5), timestamp: t(110.5), title: 'Сбербанк первым подключил оплату цифровым рублем в мобильном приложении', source: 'rbc', isImportant: false, groupId: 'grp_digital_rub', contentType: 'analytics' },
  { id: 'n76_c2', time: fmtTime(111), timestamp: t(111), title: 'Эксперты: цифровой рубль может снизить комиссии за переводы на 30%', source: 'euler', isImportant: false, groupId: 'grp_digital_rub', contentType: 'podcast' },
  { id: 'n76_c3', time: fmtTime(111.5), timestamp: t(111.5), title: 'Международные расчеты в цифровых валютах: опыт БРИКС', source: 'tass', isImportant: false, groupId: 'grp_digital_rub', contentType: 'article' },

  // ═══════ Older news (week+) ═══════
  { id: 'n77', time: fmtTime(120), timestamp: t(120), title: 'НОВАТЭК получил разрешение на отгрузку СПГ с «Арктик СПГ-2» по Севморпути', source: 'tass', isImportant: false },
  { id: 'n78', time: fmtTime(121), timestamp: t(121), title: 'Газпромнефть запустила цифровую платформу управления нефтедобычей на базе ИИ', source: 'euler', isImportant: false },
  { id: 'n79', time: fmtTime(122), timestamp: t(122), title: 'Русснефть увеличила объем бурения на 25% за счет горизонтальных скважин', source: 'interfax', isImportant: false },
  { id: 'n80', time: fmtTime(123), timestamp: t(123), title: 'ФСК ЕЭС модернизировала магистральные линии электропередач в Сибири', source: 'rbc', isImportant: false },
  { id: 'n81', time: fmtTime(124), timestamp: t(124), title: 'Фармсинтез вывел на рынок новый препарат для лечения редких заболеваний', source: 'kommersant', isImportant: false },
  { id: 'n82', time: fmtTime(125), timestamp: t(125), title: 'ЧТПЗ расширяет линейку труб для нефтехимических производств', source: 'tass', isImportant: false },
  { id: 'n83', time: fmtTime(130), timestamp: t(130), title: 'Группа Черкизово увеличила экспорт мясной продукции в Китай на 35%', source: 'interfax', isImportant: false },
  { id: 'n84', time: fmtTime(135), timestamp: t(135), title: 'ОМК поставила трубы для ремонта магистральных трубопроводов Газпрома', source: 'euler', isImportant: false },
  { id: 'n85', time: fmtTime(140), timestamp: t(140), title: 'Polymetal объявил о планах увеличить добычу на 10% в 2026 году', source: 'rbc', isImportant: false },
  { id: 'n86', time: fmtTime(145), timestamp: t(145), title: 'Энел Россия переименована в ЭЛ5-Энерго после выхода итальянского акционера', source: 'kommersant', isImportant: false },
  { id: 'n87', time: fmtTime(150), timestamp: t(150), title: 'Ростех представил новый беспилотный комплекс для мониторинга трубопроводов', source: 'tass', isImportant: false },
  { id: 'n88', time: fmtTime(155), timestamp: t(155), title: 'Абрау-Дюрсо увеличила продажи игристых вин на 20% к новогоднему сезону', source: 'rbc', isImportant: false },
  { id: 'n89', time: fmtTime(160), timestamp: t(160), title: 'ТГК-1 модернизировала Кировскую ТЭЦ-5 с увеличением мощности на 200 МВт', source: 'interfax', isImportant: false },
  { id: 'n90', time: fmtTime(165), timestamp: t(165), title: 'Уралкалий установил рекорд по производству калийных удобрений за декабрь', source: 'euler', isImportant: false },

  // ═══════ GROUP 9: Real estate ═══════
  {
    id: 'n91', time: fmtTime(168), timestamp: t(168),
    title: 'Рынок жилой недвижимости: продажи в Москве упали на 30% после отмены льготной ипотеки',
    source: 'rbc', isImportant: true, importantCount: 4, docCount: 11,
    groupId: 'grp_realestate', isGroupParent: true,
    body: 'Отмена массовой льготной ипотеки привела к резкому снижению спроса. Застройщики вынуждены предлагать скидки и рассрочки.',
    bullets: [
      'Число ипотечных сделок в Москве сократилось на 30% в ноябре.',
      'Застройщики ПИК, Самолет и ЛСР увеличили скидки до 15-20%.',
    ],
  },
  { id: 'n91_c1', time: fmtTime(168.5), timestamp: t(168.5), title: 'ПИК снизил цены на квартиры в новых проектах на 10-15%', source: 'rbc', isImportant: false, groupId: 'grp_realestate', contentType: 'important' },
  { id: 'n91_c2', time: fmtTime(169), timestamp: t(169), title: 'Самолет предлагает рассрочку на 3 года без удорожания', source: 'kommersant', isImportant: false, groupId: 'grp_realestate', contentType: 'article' },
  { id: 'n91_c3', time: fmtTime(169.5), timestamp: t(169.5), title: 'ЦБ: семейная ипотека остается основным драйвером спроса', source: 'interfax', isImportant: false, groupId: 'grp_realestate', contentType: 'analytics' },

  { id: 'n92', time: fmtTime(170), timestamp: t(170), title: 'Банк «Санкт-Петербург» увеличил прибыль по МСФО на 18% в 2025 году', source: 'interfax', isImportant: false },
  { id: 'n93', time: fmtTime(175), timestamp: t(175), title: 'ОГК-2 завершила капремонт энергоблока на Сургутской ГРЭС-2', source: 'tass', isImportant: false },
  { id: 'n94', time: fmtTime(180), timestamp: t(180), title: 'Русагро нарастила посевные площади под масличные культуры на 15%', source: 'euler', isImportant: false },
  { id: 'n95', time: fmtTime(185), timestamp: t(185), title: 'Белуга Групп расширила портфель брендов за счет покупки винодельни в Крыму', source: 'kommersant', isImportant: false },
  { id: 'n96', time: fmtTime(190), timestamp: t(190), title: 'Мать и дитя (MD Medical) открыла новый медцентр в Казани', source: 'rbc', isImportant: false },
  { id: 'n97', time: fmtTime(195), timestamp: t(195), title: 'ЛСР снизила объем ввода жилья на 12% из-за сокращения спроса', source: 'interfax', isImportant: false },
  { id: 'n98', time: fmtTime(200), timestamp: t(200), title: 'ОАК передала ВВС очередную партию истребителей Су-57', source: 'tass', isImportant: false },
  { id: 'n99', time: fmtTime(205), timestamp: t(205), title: 'ДВМП нарастил перевозки контейнеров на 22% по итогам 2025 года', source: 'euler', isImportant: false },
  { id: 'n100', time: fmtTime(210), timestamp: t(210), title: 'Группа «Эталон» объявила о программе обратного выкупа акций на 5 млрд руб.', source: 'rbc', isImportant: false },
  { id: 'n101', time: fmtTime(215), timestamp: t(215), title: 'Россети Ленэнерго модернизировала подстанции для новых жилых кварталов Петербурга', source: 'tass', isImportant: false },
  { id: 'n102', time: fmtTime(220), timestamp: t(220), title: 'ИРАО увеличила поставки электроэнергии в Финляндию на 30%', source: 'interfax', isImportant: false },
  { id: 'n103', time: fmtTime(225), timestamp: t(225), title: 'Татнефть запустила производство высокооктановых бензинов на ТАНЕКО', source: 'euler', isImportant: false },
  { id: 'n104', time: fmtTime(230), timestamp: t(230), title: 'СПБ Биржа вводит вечернюю торговую сессию для российских акций', source: 'rbc', isImportant: false },
  { id: 'n105', time: fmtTime(235), timestamp: t(235), title: 'Polymetal завершил продажу российских активов за $3,7 млрд', source: 'kommersant', isImportant: false },
  { id: 'n106', time: fmtTime(240), timestamp: t(240), title: 'ГМК «Норникель» начал строительство серного завода на Кольской площадке', source: 'tass', isImportant: false },
];

/* ─── Build news groups from data ─── */

function buildGroups(): NewsGroup[] {
  const groupMap = new Map<string, NewsItem[]>();

  for (const news of NEWS_DB) {
    if (news.groupId) {
      const arr = groupMap.get(news.groupId) || [];
      arr.push(news);
      groupMap.set(news.groupId, arr);
    }
  }

  const groups: NewsGroup[] = [];

  for (const [groupId, items] of groupMap) {
    const parent = items.find(i => i.isGroupParent);
    const children = items.filter(i => !i.isGroupParent);

    if (!parent) continue;

    const summaryParts = children.slice(0, 3).map(c => c.title);
    const summary = summaryParts.join('. ') + (children.length > 3 ? '...' : '.');

    groups.push({
      id: groupId,
      parentId: parent.id,
      childIds: children.map(c => c.id),
      summary,
      totalCount: children.length + Math.floor(Math.random() * 8) + 3,
    });
  }

  return groups;
}

export const NEWS_GROUPS: NewsGroup[] = buildGroups();

/** All news as a flat list (no grouping), sorted by timestamp desc */
export function getAllNewsFlat(): NewsItem[] {
  return [...NEWS_DB].sort((a, b) => b.timestamp - a.timestamp);
}

/** Get top-level news (parents + non-grouped), sorted by timestamp desc */
export function getTopLevelNews(): NewsItem[] {
  return NEWS_DB
    .filter(n => !n.groupId || n.isGroupParent)
    .sort((a, b) => b.timestamp - a.timestamp);
}

/** Get only important top-level news */
export function getImportantNews(): NewsItem[] {
  return getTopLevelNews().filter(n => n.isImportant);
}

/** Get children of a group */
export function getGroupChildren(groupId: string): NewsItem[] {
  return NEWS_DB
    .filter(n => n.groupId === groupId && !n.isGroupParent)
    .sort((a, b) => b.timestamp - a.timestamp);
}

/** Get group metadata */
export function getGroup(groupId: string): NewsGroup | undefined {
  return NEWS_GROUPS.find(g => g.id === groupId);
}