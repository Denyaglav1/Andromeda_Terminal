/* ═══════════════════════════════════════════════════════
   Tickets Data — Mock data layer for the Research Platform
   ticket/chat system. Analysts respond to client inquiries.
   ═══════════════════════════════════════════════════════ */

/* ── Client avatar imports (from Figma) ── */
import imgClient1 from "figma:asset/60cdcade542a2943a7e9e47600472b4c21fc9344.png";
import imgClient2 from "figma:asset/3ebbcfd68db8e7f43f9d82fdca9913bfb686c4b9.png";
import imgClient3 from "figma:asset/9215771ee58370873c77d5134e7c2d42873059da.png";
import imgClient4 from "figma:asset/ef9d4cefcb1bb671a5050f3df06a5978b19ca880.png";
import imgClient5 from "figma:asset/200536d57b922df0a3a0898765366bb9b854d81a.png";
import imgClient6 from "figma:asset/3124fdce260da53df742f2640c39c2302d783624.png";
import imgClient7 from "figma:asset/c3c8aeb3dc64debb039ba115dda0cc01ef186f50.png";

/* ── Types ── */

export type TicketStatus = 'open' | 'in_progress' | 'closed';
export type TicketType = 'publication' | 'question';

export interface TicketClient {
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  username: string;
  avatar?: string;       // PNG src or undefined for initials fallback
  initials: string;
}

export interface TicketMessage {
  id: string;
  ticketId: string;
  fromClient: boolean;   // true = client message, false = analyst message
  text: string;
  date: string;          // e.g. '14.04.2025'
  time: string;          // e.g. '09:21'
  attachments?: TicketAttachment[];
  isSystem?: boolean;    // system event message (centered, no bubble)
  read?: boolean;        // true = message has been read by recipient
  replyTo?: {            // quoted reply reference
    id: string;
    text: string;
    senderName: string;
    fromClient: boolean;
  };
}

export interface TicketAttachment {
  id: string;
  name: string;
  type: 'image' | 'file';
  url: string;           // object URL or data URL
  size?: string;         // human-readable, e.g. '2.4 MB'
}

export interface TicketTopic {
  title: string;
  type: TicketType;
  sector: string;
  sectorColor: string;   // status dot color for the sector
  date: string;
}

export interface Ticket {
  id: string;
  status: TicketStatus;
  client: TicketClient;
  analystId: string;     // maps to analyst-avatars.ts, empty string when unassigned (open)
  analystName: string;   // empty string when unassigned (open)
  topic: TicketTopic;
  messages: TicketMessage[];
  unreadCount: number;
  lastMessagePreview: string;
  lastMessageFromAnalyst: boolean;
  lastMessageTime: string;
  lastMessageTs: number; // epoch ms, used for sorting tickets by recency
}

/* ── Available analysts for transfer ── */
export interface AvailableAnalyst {
  id: string;
  name: string;
  role: string;
}

export const AVAILABLE_ANALYSTS: AvailableAnalyst[] = [
  { id: 'khalin',      name: 'Никанор Халин',        role: 'Старший аналитик, Материалы' },
  { id: 'salkovskiy',  name: 'Иван Сальковский',     role: 'Младший аналитик, Технологии' },
  { id: 'mosin',       name: 'Дмитрий Мосин',        role: 'Младший аналитик, Финансы' },
  { id: 'polyutov',    name: 'Александр Полютов',     role: 'Аналитик, Финансы' },
  { id: 'kovalev',     name: 'Николай Ковалев',       role: 'Аналитик, Нефть и газ' },
  { id: 'mikhaylova',  name: 'Лидия Михайлова',       role: 'Старший аналитик' },
  { id: 'berishev',    name: 'Марат Беришев',         role: 'Аналитик, Металлы' },
  { id: 'maremukova',  name: 'Маргарита Маремукова',  role: 'Аналитик, Потребительский сектор' },
  { id: 'mikheev',     name: 'Николай Михеев',        role: 'Аналитик, Телеком' },
  { id: 'bozhenko',    name: 'Станислав Боженко',     role: 'Аналитик, Электроэнергетика' },
  { id: 'polischuk',   name: 'Андрей Полищук',        role: 'Аналитик, Транспорт' },
];

/* ── Team structure ── */
/** Khalin's team: senior + juniors. Tickets assigned outside this team are hidden from Khalin's view. */
export const KHALIN_TEAM_IDS = ['khalin', 'salkovskiy', 'mosin'];

/** Check if an analyst belongs to Khalin's team */
export function isTeamMember(analystId: string): boolean {
  return KHALIN_TEAM_IDS.includes(analystId);
}

/** Filter tickets visible to Khalin's team (open tickets + tickets assigned to team members) */
export function getTeamVisibleTickets(tickets: Ticket[]): Ticket[] {
  return tickets.filter(t =>
    t.status === 'open' || // open tickets are visible to everyone
    isTeamMember(t.analystId) // only show tickets assigned to team members
  );
}

/* ── Status config ── */
export const STATUS_CONFIG: Record<TicketStatus, { label: string; color: string }> = {
  open:        { label: 'Открытый', color: '#5A8CFF' },
  in_progress: { label: 'В работе', color: '#1FC989' },
  closed:      { label: 'Закрытый', color: '#677C9C' },
};

/* ── Clients ── */
const CLIENTS: TicketClient[] = [
  {
    id: 'voronov',
    name: 'Александр Воронов',
    company: 'Совкомбанк',
    email: 'aleksandrvoron@sovkombank.ru',
    phone: '+7 985 668 96 66',
    username: '@oleksandvor',
    avatar: imgClient1,
    initials: 'АВ',
  },
  {
    id: 'morozov',
    name: 'Илья Морозов',
    company: 'Тинькофф',
    email: 'morozov.i@tinkoff.ru',
    phone: '+7 916 432 18 75',
    username: '@imorozov',
    initials: 'ИМ',
  },
  {
    id: 'kuznetsov',
    name: 'Максим Кузнецов',
    company: 'Совкомбанк',
    email: 'kuznetsov.m@sovkombank.ru',
    phone: '+7 903 555 44 33',
    username: '@mkuznetsov',
    avatar: imgClient2,
    initials: 'МК',
  },
  {
    id: 'lebedev',
    name: 'Артём Лебедев',
    company: 'Альфа-Банк',
    email: 'lebedev.a@alfabank.ru',
    phone: '+7 926 111 22 33',
    username: '@alebedev',
    initials: 'АЛ',
  },
  {
    id: 'santonovsky',
    name: 'Самуил Сантоновский',
    company: 'Газпромбанк',
    email: 'santonovsky@gpb.ru',
    phone: '+7 915 777 88 99',
    username: '@ssantonovsky',
    avatar: imgClient3,
    initials: 'СС',
  },
  {
    id: 'petrov',
    name: 'Ярослав Петров',
    company: 'Сбербанк',
    email: 'petrov.y@sber.ru',
    phone: '+7 909 333 22 11',
    username: '@ypetrov',
    avatar: imgClient4,
    initials: 'ЯП',
  },
  {
    id: 'egorov',
    name: 'Тимофей Егоров',
    company: 'ВТБ',
    email: 'egorov.t@vtb.ru',
    phone: '+7 977 444 55 66',
    username: '@tegorov',
    avatar: imgClient5,
    initials: 'ТЕ',
  },
  {
    id: 'krylov',
    name: 'Евгений Крылов',
    company: 'Ренессанс Капитал',
    email: 'krylov.e@rencap.ru',
    phone: '+7 965 888 77 66',
    username: '@ekrylov',
    initials: 'ЕК',
  },
  {
    id: 'fedorov',
    name: 'Андрей Фёдоров',
    company: 'БКС',
    email: 'fedorov.a@bcs.ru',
    phone: '+7 903 222 11 00',
    username: '@afedorov',
    initials: 'АФ',
  },
  {
    id: 'orlov',
    name: 'Никита Орлов',
    company: 'АТОН',
    email: 'orlov.n@aton.ru',
    phone: '+7 916 999 88 77',
    username: '@norlov',
    initials: 'НО',
  },
  {
    id: 'fedorov2',
    name: 'Андрей Фёдоров',
    company: 'БКС',
    email: 'fedorov.a@bcs.ru',
    phone: '+7 903 222 11 00',
    username: '@afedorov2',
    avatar: imgClient6,
    initials: 'АФ',
  },
  {
    id: 'orlov2',
    name: 'Никита Орлов',
    company: 'АТОН',
    email: 'orlov.n@aton.ru',
    phone: '+7 916 999 88 77',
    username: '@norlov2',
    initials: 'НО',
  },
  {
    id: 'santonovsky2',
    name: 'Самуил Сантоновский',
    company: 'Газпромбанк',
    email: 'santonovsky@gpb.ru',
    phone: '+7 915 777 88 99',
    username: '@ssantonovsky2',
    avatar: imgClient7,
    initials: 'СС',
  },
];

/* ── Tickets ── */
export const TICKETS: Ticket[] = [
  // ═══ Open tickets (blue dot) — no analyst assigned yet ═══
  {
    id: 't1',
    status: 'open',
    client: CLIENTS[0],
    analystId: '',
    analystName: '',
    topic: {
      title: 'РОССИЯ – Группа ВТБ — Результаты по МСФО за 5м25',
      type: 'publication',
      sector: 'Финансовый сектор',
      sectorColor: '#5A8CFF',
      date: '14.04.2025',
    },
    messages: [
      { id: 'm1', ticketId: 't1', fromClient: true, text: 'Добрый день! Хотел уточнить по результатам ВТБ — как в оцениваете динамику чистой процентной маржи в контексте текущей ставки ЦБ?', date: '14.04.2025', time: '09:15' },
      { id: 'm2', ticketId: 't1', fromClient: false, text: 'Здравствуйте! Чистая процентная маржа ВТБ за 5М25 показала снижение на 15 б.п. до 2.85%, что связано с ростом стоимости фондирования. При текущей ставке 16% давление сохраняется, но мы ожидаем стабилизацию к 3К25.', date: '14.04.2025', time: '09:30' },
      { id: 'm3', ticketId: 't1', fromClient: true, text: 'Спасибо! А как это повлияет на целевую цену?', date: '14.04.2025', time: '09:45' },
    ],
    unreadCount: 2,
    lastMessagePreview: 'Спасибо! А как это повлияет на целевую цену?',
    lastMessageFromAnalyst: false,
    lastMessageTime: '10:45',
    lastMessageTs: new Date('2025-04-14T10:45:00').getTime(),
  },
  {
    id: 't2',
    status: 'open',
    client: CLIENTS[4],
    analystId: '',
    analystName: '',
    topic: {
      title: 'Что делать с акциями Яндекса в 2026',
      type: 'question',
      sector: 'Технологии',
      sectorColor: '#5A8CFF',
      date: '10.03.2025',
    },
    messages: [
      { id: 'm10', ticketId: 't2', fromClient: true, text: 'Добрый день! Как оцениваете перспективы Яндекса после реструктуризации? Стоит ли держать позицию в 2026?', date: '10.03.2025', time: '11:00' },
    ],
    unreadCount: 0,
    lastMessagePreview: 'Текст последнего сообщения в одну строку для',
    lastMessageFromAnalyst: false,
    lastMessageTime: '10.03.25',
    lastMessageTs: new Date('2025-03-10T11:00:00').getTime(),
  },
  {
    id: 't3',
    status: 'open',
    client: CLIENTS[5],
    analystId: '',
    analystName: '',
    topic: {
      title: 'РОССИЯ – Группа ВТБ — Результаты по МСФО за 5м25',
      type: 'publication',
      sector: 'Финансовый сектор',
      sectorColor: '#5A8CFF',
      date: '09.03.2025',
    },
    messages: [
      { id: 'm20', ticketId: 't3', fromClient: true, text: 'Добрый день! Можно ли получить расширенную модель по ВТБ?', date: '09.03.2025', time: '14:30' },
      { id: 'm21', ticketId: 't3', fromClient: false, text: 'Да, конечно. Отправлю Excel-модель в течение часа.', date: '09.03.2025', time: '14:45' },
    ],
    unreadCount: 0,
    lastMessagePreview: 'Да, конечно. Отправлю Excel-модель в течение часа.',
    lastMessageFromAnalyst: true,
    lastMessageTime: '09.03.25',
    lastMessageTs: new Date('2025-03-09T14:45:00').getTime(),
  },
  {
    id: 't4',
    status: 'open',
    client: CLIENTS[6],
    analystId: '',
    analystName: '',
    topic: {
      title: 'РОССИЯ – Группа ВТБ — Результаты по МСФО за 5м25',
      type: 'publication',
      sector: 'Финансовый сектор',
      sectorColor: '#5A8CFF',
      date: '08.03.2025',
    },
    messages: [
      { id: 'm30', ticketId: 't4', fromClient: true, text: 'Какова ваша оценка качества активов ВТБ?', date: '08.03.2025', time: '10:00' },
      { id: 'm31', ticketId: 't4', fromClient: false, text: 'Качество активов остаётся стабильным, NPL ratio на уровне 4.2%. Резервы адекватны.', date: '08.03.2025', time: '10:30' },
    ],
    unreadCount: 0,
    lastMessagePreview: 'Качество активов остаётся стабильным, NPL ratio на уровне 4.2%.',
    lastMessageFromAnalyst: true,
    lastMessageTime: '08.03.25',
    lastMessageTs: new Date('2025-03-08T10:30:00').getTime(),
  },

  // ═══ In progress tickets (green dot) ═══
  {
    id: 't5',
    status: 'in_progress',
    client: CLIENTS[1],
    analystId: 'salkovskiy',
    analystName: 'Иван Сальковский',
    topic: {
      title: 'Группа ВТБ — Результаты по МСФО',
      type: 'publication',
      sector: 'Финансовый сектор',
      sectorColor: '#1FC989',
      date: '14.04.2025',
    },
    messages: [
      { id: 'm40', ticketId: 't5', fromClient: true, text: 'Здравствуйте! Интересует ваш прогноз по дивидендам ВТБ за 2025 год.', date: '14.04.2025', time: '08:30' },
      { id: 'm41', ticketId: 't5', fromClient: false, text: 'Добрый день! По нашим оценкам, дивиденд на акцию может составить 0.015-0.02 руб., что соответствует доходности около 8-10% при текущих уровнях.', date: '14.04.2025', time: '09:00' },
      { id: 'm42', ticketId: 't5', fromClient: true, text: 'А есть ли риск, что дивиденды порежут из-за требований к капиталу?', date: '14.04.2025', time: '09:15' },
    ],
    unreadCount: 3,
    lastMessagePreview: 'А есть ли риск, что дивиденды порежут из-за требований к капиталу?',
    lastMessageFromAnalyst: false,
    lastMessageTime: '10:45',
    lastMessageTs: new Date('2025-04-14T10:45:00').getTime(),
  },
  {
    id: 't6',
    status: 'in_progress',
    client: CLIENTS[2],
    analystId: 'salkovskiy',
    analystName: 'Иван Сальковский',
    topic: {
      title: 'ВК — Технический пересмотр прогнозов после допэмиссии',
      type: 'publication',
      sector: 'Технологии',
      sectorColor: '#1FC989',
      date: '04.12.2025',
    },
    messages: [
      { id: 'm50', ticketId: 't6', fromClient: true, text: 'Насколько опыт допэмиссий других российских IT-компаний (например, Яндекс, Ozon) полезен для корректного технического пересмотра прогнозов по VK, и какие специфичные для ВКонтакте факторы (структура собственности, география бизнеса) играют ключевую роль?', date: '14.04.2025', time: '09:21' },
      { id: 'm51', ticketId: 't6', fromClient: true, text: 'Насколько опыт допэмиссий ��ругих российских IT-компаний (например, Яндекс, Ozon) полезен для корректного технического пересмотра прогнозов по VK, и какие специфичные для ВКонтакте факторы (структура собственности, география бизнеса) играют ключевую роль?', date: '14.04.2025', time: '09:21' },
      { id: 'm52', ticketId: 't6', fromClient: false, text: 'Опыт прошлых допэмиссий в российских технологических компаниях, таких как Яндекс и Ozon, действительно может служить полезным ориентиром при теханализе и прогнозировании финансовых показателей VK. Особенности этих компаний дают сравнительный контекст, который помогает:\n\n1. Понимание рынка спроса на акции технологических компаний\n\nИстория допэмиссий Яндекса и Ozon показывает, как воспринимают рынком дополнительные выпуски акций IT-компаний в условиях волатильности экономики и санкционного давления.\n\nЭто помогает оценить, насколько инвесторы готовы реинвестировать капитал, и какие оценочные мультипликаторы считаются приемлемыми в секторе. Такой опыт полезен для оценки рыночной реакции на допэмиссию VK.', date: '14.04.2025', time: '09:21' },
      { id: 'm53', ticketId: 't6', fromClient: true, text: 'Спасибо за ответ, а что делать с акциями', date: '14.04.2025', time: '09:21' },
      { id: 'm54', ticketId: 't6', fromClient: false, text: 'Вернусь с ответом через 30 минут', date: '14.04.2025', time: '09:21' },
    ],
    unreadCount: 0,
    lastMessagePreview: 'Вернусь с ответом через 30 минут',
    lastMessageFromAnalyst: true,
    lastMessageTime: '09:23',
    lastMessageTs: new Date('2025-04-14T09:23:00').getTime(),
  },
  {
    id: 't7',
    status: 'in_progress',
    client: CLIENTS[3],
    analystId: 'khalin',
    analystName: 'Никанор Халин',
    topic: {
      title: 'Что делать с акциями Яндекса в 2026',
      type: 'question',
      sector: 'Технологии',
      sectorColor: '#1FC989',
      date: '12.04.2025',
    },
    messages: [
      { id: 'm60', ticketId: 't7', fromClient: true, text: 'Какой ваш таргет по Яндексу на горизонте 12 месяцев?', date: '12.04.2025', time: '15:00' },
      { id: 'm61', ticketId: 't7', fromClient: false, text: 'Наша целевая цена по Яндексу — 5,200 руб., потенциал роста около 15% от текущих уровней. Рекомендация «Покупать».', date: '12.04.2025', time: '15:20' },
    ],
    unreadCount: 2,
    lastMessagePreview: 'Наша целевая цена по Яндексу — 5,200 руб.',
    lastMessageFromAnalyst: false,
    lastMessageTime: '09:21',
    lastMessageTs: new Date('2025-04-12T09:21:00').getTime(),
  },

  // ═══ Closed tickets (gray dot) ═══
  {
    id: 't8',
    status: 'closed',
    client: CLIENTS[7],
    analystId: 'salkovskiy',
    analystName: 'Иван Сальковский',
    topic: {
      title: 'РОССИЯ – Группа ВТБ — Результаты по МСФО за 5м25',
      type: 'publication',
      sector: 'Финансовый сектор',
      sectorColor: '#677C9C',
      date: '07.01.2025',
    },
    messages: [
      { id: 'm70', ticketId: 't8', fromClient: true, text: 'Можете прислать таблицу с ключевыми метриками?', date: '07.01.2025', time: '12:00' },
      { id: 'm71', ticketId: 't8', fromClient: false, text: 'Отправил на почту. Если возникнут вопросы — обращайтесь.', date: '07.01.2025', time: '12:30' },
    ],
    unreadCount: 0,
    lastMessagePreview: 'Отправил на почту. Если возникнут вопросы — обращайтесь.',
    lastMessageFromAnalyst: true,
    lastMessageTime: '07.01.25',
    lastMessageTs: new Date('2025-01-07T12:30:00').getTime(),
  },
  {
    id: 't9',
    status: 'closed',
    client: CLIENTS[8],
    analystId: 'salkovskiy',
    analystName: 'Иван Сальковский',
    topic: {
      title: 'РОССИЯ – Группа ВТБ — Результаты по МСФО за 5м25',
      type: 'publication',
      sector: 'Финансовый сектор',
      sectorColor: '#677C9C',
      date: '06.01.2025',
    },
    messages: [
      { id: 'm80', ticketId: 't9', fromClient: true, text: 'Спасибо за подробный анализ, всё понятно.', date: '06.01.2025', time: '11:00' },
    ],
    unreadCount: 0,
    lastMessagePreview: 'Спасибо за подробный анализ, всё понятно.',
    lastMessageFromAnalyst: false,
    lastMessageTime: '06.01.25',
    lastMessageTs: new Date('2025-01-06T11:00:00').getTime(),
  },
  {
    id: 't10',
    status: 'closed',
    client: CLIENTS[9],
    analystId: 'salkovskiy',
    analystName: 'Иван Сальковский',
    topic: {
      title: 'РОССИЯ – Группа ВТБ — Результаты по МСФО за 5м25',
      type: 'publication',
      sector: 'Финансовый сектор',
      sectorColor: '#677C9C',
      date: '05.01.2025',
    },
    messages: [],
    unreadCount: 0,
    lastMessagePreview: 'Текст последнего сообщения в одну строку для',
    lastMessageFromAnalyst: false,
    lastMessageTime: '05.01.25',
    lastMessageTs: new Date('2025-01-05T00:00:00').getTime(),
  },
  {
    id: 't11',
    status: 'closed',
    client: CLIENTS[12],
    analystId: 'salkovskiy',
    analystName: 'Иван Сальковский',
    topic: {
      title: 'РОССИЯ – Группа ВТБ — Результаты по МСФО за 5м25',
      type: 'publication',
      sector: 'Финансовый сектор',
      sectorColor: '#677C9C',
      date: '04.01.2025',
    },
    messages: [],
    unreadCount: 0,
    lastMessagePreview: 'Текст последнего сообщения в одну строку для',
    lastMessageFromAnalyst: false,
    lastMessageTime: '04.01.25',
    lastMessageTs: new Date('2025-01-04T00:00:00').getTime(),
  },
  {
    id: 't12',
    status: 'closed',
    client: CLIENTS[10],
    analystId: 'salkovskiy',
    analystName: 'Иван Сальковский',
    topic: {
      title: 'РОССИЯ – Группа ВТБ — Результаты по МСФО за 5м25',
      type: 'publication',
      sector: 'Финансовый сектор',
      sectorColor: '#677C9C',
      date: '03.01.2025',
    },
    messages: [],
    unreadCount: 0,
    lastMessagePreview: 'Текст последнего сообщения в одну строку для',
    lastMessageFromAnalyst: false,
    lastMessageTime: '03.01.25',
    lastMessageTs: new Date('2025-01-03T00:00:00').getTime(),
  },
  {
    id: 't13',
    status: 'closed',
    client: CLIENTS[11],
    analystId: 'salkovskiy',
    analystName: 'Иван Сальковский',
    topic: {
      title: 'РОССИЯ – Группа ВТБ — Результаты по МСФО за 5м25',
      type: 'publication',
      sector: 'Финансовый сектор',
      sectorColor: '#677C9C',
      date: '02.01.2025',
    },
    messages: [],
    unreadCount: 0,
    lastMessagePreview: 'Текст последнего сообщения в одну строку для',
    lastMessageFromAnalyst: false,
    lastMessageTime: '02.01.25',
    lastMessageTs: new Date('2025-01-02T00:00:00').getTime(),
  },
  {
    id: 't14',
    status: 'closed',
    client: CLIENTS[12],
    analystId: 'salkovskiy',
    analystName: 'Иван Сальковский',
    topic: {
      title: 'РОССИЯ – Группа ВТБ — Результаты по МСФО за 5м25',
      type: 'publication',
      sector: 'Финансовый сектор',
      sectorColor: '#677C9C',
      date: '01.01.2025',
    },
    messages: [],
    unreadCount: 0,
    lastMessagePreview: 'Текст последнего сообщения в одну строку для',
    lastMessageFromAnalyst: false,
    lastMessageTime: '01.01.25',
    lastMessageTs: new Date('2025-01-01T00:00:00').getTime(),
  },
];

/* ── Client inquiry history (for right sidebar) ── */
export interface ClientInquiry {
  id: string;
  ticketId: string;    // references a Ticket.id for navigation
  type: TicketType;
  sector: string;
  sectorColor: string;
  title: string;
  date: string;
  closed: boolean;
}

/** Build inquiry list from actual tickets for a given client + static extras.
 *  Accepts optional live tickets array so closed-status stays in sync with state. */
export function getClientInquiries(clientId: string, liveTickets?: Ticket[]): ClientInquiry[] {
  const source = liveTickets ?? TICKETS;

  // Gather from real tickets belonging to this client
  const fromTickets: ClientInquiry[] = source
    .filter(t => t.client.id === clientId)
    .map(t => ({
      id: `ci-${t.id}`,
      ticketId: t.id,
      type: t.topic.type,
      sector: t.topic.sector,
      sectorColor: t.topic.sectorColor,
      title: t.topic.title,
      date: t.topic.date,
      closed: t.status === 'closed',
    }));

  // Pick some OTHER tickets as "past interactions" so the sidebar is navigable
  const otherTickets = source.filter(t => t.client.id !== clientId);
  const linkedExtras: ClientInquiry[] = otherTickets.slice(0, 3).map((t, i) => ({
    id: `ci-linked-${i}`,
    ticketId: t.id,
    type: t.topic.type,
    sector: t.topic.sector,
    sectorColor: t.topic.sectorColor,
    title: t.topic.title,
    date: t.topic.date,
    closed: t.status === 'closed',
  }));

  // Static extras (historical, no matching ticket — not clickable)
  const staticExtras: ClientInquiry[] = [
    { id: 'ci-extra1', ticketId: '', type: 'question', sector: 'Стратегия: акции', sectorColor: '#1FC989', title: 'Какие акции стоит добавить в портфель в этом году, какие стоит убрать', date: '14.04.2025', closed: false },
    { id: 'ci-extra2', ticketId: '', type: 'publication', sector: 'Глобальные активы', sectorColor: '#5A8CFF', title: 'РОССИЯ – Аэрофлот — Перевес по дивидендам — Почему прибыль лучше оставить на борту?', date: '14.04.2025', closed: false },
    { id: 'ci-extra3', ticketId: '', type: 'publication', sector: 'Нефть и газ: добыча и переработка', sectorColor: '#677C9C', title: 'РОССИЯ И СНГ – Нефть и газ — Фаворит недели — Транснефть (ап)', date: '14.04.2025', closed: true },
    { id: 'ci-extra4', ticketId: '', type: 'publication', sector: 'Макроэкономика', sectorColor: '#677C9C', title: 'Какая ставка будет в 2026 году', date: '14.04.2025', closed: true },
  ];

  return [...fromTickets, ...linkedExtras, ...staticExtras];
}

/* ── Current analyst (for the left sidebar header) ── */
export const CURRENT_ANALYST = {
  id: 'khalin',
  name: 'Никанор Халин',
  role: 'Старший аналитик, Материалы',
};

/* ═══════ System messages ═══════ */

export function createSystemMessage(ticketId: string, text: string): TicketMessage {
  const now = new Date();
  return {
    id: `sys-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
    ticketId,
    fromClient: false,
    text,
    date: now.toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit', year: 'numeric' }),
    time: now.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }),
    isSystem: true,
    read: true,
  };
}

/* ═══════ Auto-reply templates ═══════ */

export const CLIENT_AUTO_REPLIES = [
  'Спасибо за оперативный ответ!',
  'Понял, спасибо. А можете уточнить по срокам?',
  'Отлично, это то что нужно. Буду ждать детальный отчёт.',
  'Хорошо, давайте обсудим это подробнее завтра.',
  'Спасибо! Можете ещё прислать данные по дивидендной доходности?',
  'Принял. А как это повлияет на целевую цену?',
  'Благодарю! Очень полезная информация.',
  'Можно ли получить аналогичный анализ по другим эмитентам?',
  'Спасибо, всё понятно. Буду использовать в работе.',
  'Интересно. А какой ваш прогноз на ближайший квартал?',
  'Хорошо, учту это при формировании портфеля.',
  'Спасибо за разъяснение. Ещё один вопрос — какой сейчас консенсус по мультипликаторам?',
];

/* ═══════ New incoming ticket templates ═══════ */

export const INCOMING_TICKET_TEMPLATES: Array<{
  topic: Omit<TicketTopic, 'date'>;
  messageText: string;
}> = [
  {
    topic: { title: 'РОССИЯ – Норникель — Прогноз производства никеля и палладия на 2026', type: 'publication', sector: 'Материалы', sectorColor: '#F6C825' },
    messageText: 'Добрый день! Хотел бы узнать ваш прогноз по объёмам производства Норникеля на 2026 год. Как повлияет переход на новые рудники?',
  },
  {
    topic: { title: 'Оценка влияния санкций на экспорт алюминия Русал', type: 'question', sector: 'Материалы', sectorColor: '#F6C825' },
    messageText: 'Здравствуйте! Как оцениваете риски для Русал в связи с возможными новыми ограничениями на экспорт алюминия? Какие альтернативные рынки сбыта?',
  },
  {
    topic: { title: 'РОССИЯ – Полюс — Влияние цены золота на FCF и дивиденды', type: 'publication', sector: 'Материалы', sectorColor: '#F6C825' },
    messageText: 'Добрый день! Прочитал вашу публикацию по Полюсу. Можете подробнее раскрыть чувствительность FCF к цене золота выше $2500/oz?',
  },
  {
    topic: { title: 'Сравнительный анализ: Северсталь vs НЛМК vs ММК', type: 'question', sector: 'Материалы', sectorColor: '#F6C825' },
    messageText: 'Здравствуйте! Можете сделать сравнительный анализ чёрных металлургов? Кто из тройки сейчас наиболее привлекателен по мультипликаторам?',
  },
  {
    topic: { title: 'РОССИЯ – АЛРОСА — Перспективы рынка алмазов', type: 'publication', sector: 'Материалы', sectorColor: '#F6C825' },
    messageText: 'Добрый день! Как оцениваете перспективы АЛРОСА в условиях слабого спроса на алмазы и роста лабораторных камней? Стоит ли держать позицию?',
  },
  {
    topic: { title: 'Прогноз цен на медь и влияние на ГМК Норникель', type: 'question', sector: 'Материалы', sectorColor: '#F6C825' },
    messageText: 'Здравствуйте! Какой ваш прогноз по ценам на медь на горизонте 12 месяцев? Как это отразится на выручке медного сегмента Норникеля?',
  },
  {
    topic: { title: 'РОССИЯ – Фосагро — Анализ рынка удобрений и маржинальности', type: 'publication', sector: 'Материалы', sectorColor: '#F6C825' },
    messageText: 'Добрый день! Интересует ваша оценка текущей маржинальности Фосагро. Как экспортные пошлины повлияют на EBITDA в 2026?',
  },
  {
    topic: { title: 'Перспективы Polymetal после редомициляции', type: 'question', sector: 'Материалы', sectorColor: '#F6C825' },
    messageText: 'Здравствуйте! Как оцениваете операционные результаты Polymetal после переезда в Казахстан? Стоит ли рассматривать для портфеля?',
  },
];

/** Pick a random client for a new incoming ticket */
export function getRandomNewTicketClient(existingTickets: Ticket[]): TicketClient {
  const openClientIds = new Set(existingTickets.filter(t => t.status === 'open').map(t => t.client.id));
  const available = CLIENTS.filter(c => !openClientIds.has(c.id));
  return available.length > 0
    ? available[Math.floor(Math.random() * available.length)]
    : CLIENTS[Math.floor(Math.random() * CLIENTS.length)];
}