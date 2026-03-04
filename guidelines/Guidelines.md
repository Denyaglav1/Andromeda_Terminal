# Andromeda Financial Dashboard - AI Guidelines

## Project Overview / Обзор проекта

Andromeda-style financial dashboard on React 18 + Vite.
Финансовый дашборд в стиле Andromeda на React 18 + Vite.

Design system components live in `/src/app/components/ui/` with `ds-` prefix.
Компоненты дизайн-системы находятся в `/src/app/components/ui/` с префиксом `ds-`.

Shadcn/Radix components (48 files without `ds-` prefix in the same folder) are dead code protected from deletion by the system - never touch them.
Shadcn/Radix-компоненты (48 файлов без префикса `ds-` в той же папке) — мёртвый код, защищённый системой от удаления — никогда их не трогать.

## Architecture Rules / Архитектурные правила

- `vite.config.ts` has a comment forbidding removal of Tailwind and React plugins - this is a Figma Make environment requirement.
  В `vite.config.ts` есть комментарий, запрещающий удаление плагинов Tailwind и React — это требование среды Figma Make.
- Mantine CSS is imported via `@import` inside `tailwind.css` with `@layer theme, base, mantine;`.
  CSS Mantine импортируется через `@import` внутри `tailwind.css` с декларацией `@layer theme, base, mantine;`.
- Theme switching uses `data-mantine-color-scheme` attribute on `<html>`.
  Переключение темы использует атрибут `data-mantine-color-scheme` на `<html>`.
- Figma tokens (`dark.tokens.json`, `light.tokens.json` in `/src/imports/`) are the source of truth for color mapping.
  Figma-токены (`dark.tokens.json`, `light.tokens.json` в `/src/imports/`) являются источником истины для маппинга цветов.

## Tech Stack / Стек технологий

| Package / Пакет | Version / Версия | Role / Роль |
|---|---|---|
| React | 18.3.1 | UI framework / UI-фреймворк |
| Vite | 6.3.5 | Bundler / Сборщик |
| Mantine | ^8.3.15 | Component library & theme provider / Библиотека компонентов и провайдер темы |
| ECharts | ^6.0.0 | Charts (canvas renderer) / Графики (canvas-рендерер) |
| echarts-for-react | ^3.0.6 | React wrapper for ECharts / React-обёртка для ECharts |
| React Router | 7.13.0 | Routing (Data mode, `createBrowserRouter`) / Роутинг (Data mode, `createBrowserRouter`) |
| Tailwind CSS | 4.1.12 (v4) | Utility classes / Утилитарные классы |
| Lucide React | 0.487.0 | Icons / Иконки |
| Motion | 12.23.24 | Animations / Анимации |

- **Do NOT use** `react-router-dom` — only `react-router` works in this environment.
  **НЕ использовать** `react-router-dom` — в этой среде работает только `react-router`.
- **Font**: Inter (300, 400, 500, 600) imported in `/src/styles/fonts.css`. Do not add font imports elsewhere.
  **Шрифт**: Inter (300, 400, 500, 600) импортируется в `/src/styles/fonts.css`. Не добавлять импорты шрифтов в другие файлы.

## App Entry Point / Точка входа приложения

`/src/app/App.tsx` structure must not be changed without explicit request:
Структура `/src/app/App.tsx` не должна меняться без явного запроса:

```
ErrorBoundary > MantineProvider (andromedaTheme + andromedaCSSResolver, defaultColorScheme="dark") > Notifications > RouterProvider
```

- `andromedaTheme` and `andromedaCSSResolver` are defined in `/src/app/theme.ts`.
  `andromedaTheme` и `andromedaCSSResolver` определены в `/src/app/theme.ts`.
- ECharts `"andromeda"` theme is registered once in `App.tsx` via `registerAndromedaTheme()` from `/src/app/echarts-theme.ts`.
  ECharts-тема `"andromeda"` регистрируется один раз в `App.tsx` через `registerAndromedaTheme()` из `/src/app/echarts-theme.ts`.

## Route Map / Карта роутов

Always check `/src/app/routes.tsx` before adding new routes to avoid conflicts.
Всегда проверять `/src/app/routes.tsx` перед добавлением новых роутов, чтобы избежать конфликтов.

| Path / Путь | Component / Компонент | Purpose / Назначение |
|---|---|---|
| `/` | `LandingPage` | Landing / Лендинг |
| `/home` | `HomePage` | Market overview with news, tickers, trends / Обзор рынка с новостями, тикерами, трендами |
| `/fa` | `DashboardLayout` > `DashboardPage` | Fundamental analysis dashboard / Дашборд фундаментального анализа |
| `/chart-builder` | `ChartBuilderPage` | Interactive chart builder / Интерактивный конструктор графиков |
| `/chart-builder-spec` | `ChartBuilderSpec` | Chart builder documentation / Документация конструктора графиков |
| `/components` | `ComponentLibrary` | DS component library / Библиотека DS-компонентов |
| `/components/tokens` | `TokensPage` | Design tokens reference / Справочник дизайн-токенов |
| `/components/logos` | `LogosPage` | Company logos reference / Справочник логотипов компаний |
| `/components/:id` | `ComponentDetailPage` | Individual component docs / Документация отдельного компонента |

## CSS Layer Order / Порядок CSS-слоёв

`tailwind.css` declares `@layer theme, base, mantine;` — this ordering is critical:
В `tailwind.css` объявлено `@layer theme, base, mantine;` — этот порядок критически важен:

- Without it, Tailwind preflight (`@layer base`) overrides Mantine styles (e.g. `border-width: 0`).
  Без этого Tailwind preflight (`@layer base`) перезаписывает стили Mantine (напр. `border-width: 0`).
- Never change the layer order or remove the `@layer` declaration.
  Никогда не менять порядок слоёв и не удалять декларацию `@layer`.

## File Organization / Организация файлов

| Directory / Директория | Purpose / Назначение |
|---|---|
| `/src/app/components/ui/ds-*.tsx` | Design system components / Компоненты дизайн-системы |
| `/src/app/components/ui/*.tsx` (no `ds-`) | Dead code (Shadcn/Radix) — do not touch / Мёртвый код (Shadcn/Radix) — не трогать |
| `/src/app/components/*.tsx` | Page-level and feature components / Компоненты уровня страниц и фич |
| `/src/app/components/chart-builder/` | Chart builder feature / Фича конструктора графиков |
| `/src/app/components/consensus/` | Consensus analysis feature / Фича консенсус-анализа |
| `/src/app/components/home/` | Home page widgets / Виджеты главной страницы |
| `/src/app/components/home/data/` | Mock data & types for home page / Мок-данные и типы для главной страницы |
| `/src/app/components/docs/` | Documentation pages / Страницы документации |
| `/src/imports/` | Figma imports (SVGs, tokens JSON, frame components) / Импорты из Figma (SVG, JSON-токены, компоненты фреймов) |
| `/src/styles/` | Global styles: `theme.css`, `tailwind.css`, `fonts.css`, `global.css` / Глобальные стили |
| `/docs/` | Feature specification documents / Спецификации фич |

## Mock Data Layer (Single Source of Truth) / Слой мок-данных (единый источник истины)

The project maintains a growing centralized mock data layer. When building new features, **always pull data from existing files** instead of creating duplicate datasets.
Проект поддерживает растущий централизованный слой мок-данных. При создании новых фич **всегда брать данные из существующих файлов**, а не создавать дубли.

### Data files and what they contain / Файлы данных и что в них содержится

| File / Файл | Contents / Содержимое |
|---|---|
| `/src/app/types.ts` | Core `COMPANIES` array (~50 MOEX companies: id, ticker, name, logo colors, period types) + `getAllAvailableCompanies()` merging with extended set / Основной массив `COMPANIES` (~50 компаний MOEX: id, тикер, название, цвета логотипов, типы периодов) + `getAllAvailableCompanies()`, объединяющий с расширенным набором |
| `/src/app/components/chart-builder/market-data.ts` | Sectors & sector colors, financial indicators (Revenue, EBITDA, P/E, ROE, etc.), company financial data / Секторы и цвета секторов, финансовые показатели (Выручка, EBITDA, P/E, ROE и т.д.), финансовые данные компаний |
| `/src/app/components/chart-builder/extended-companies.ts` | Extended 240 MOEX companies with generated quarterly/yearly financials / Расширенный набор из 240 компаний MOEX с генерируемыми квартальными/годовыми показателями |
| `/src/app/components/chart-builder/company-logos.tsx` | SVG logo registry — real brand logos from Figma import for key companies / Реестр SVG-логотипов — реальные логотипы брендов из импорта Figma для ключевых компаний |
| `/src/app/components/home/data/home-market-db.ts` | Ticker tape quotes, market instruments (Commodities, Currencies, Indices), gainers/losers by period / Котировки бегущей строки, рыночные инструменты (Товары, Валюты, Индексы), лидеры роста/падения по периодам |
| `/src/app/components/home/data/home-news-db.ts` | ~120 news items with groups, sources, bodies, bullets, content types / ~120 новостей с группами, источниками, телами, буллетами, типами контента |
| `/src/app/components/home/data/home-events-db.ts` | Calendar events, event cards (analyst names, avatars, companies), video items, review cards / Календарные события, карточки событий (имена аналитиков, аватары, компании), видео, карточки обзоров |
| `/src/app/components/home/data/home-types.ts` | Shared TypeScript types for all home page data / Общие TypeScript-типы для всех данных главной страницы |
| `/src/app/components/home/data/useRealtimePrices.ts` | Real-time price simulation hook (random walk, 1s interval) / Хук симуляции цен в реальном времени (случайное блуждание, интервал 1с) |
| `/src/app/components/consensus/ConsensusData.ts` | Consensus sources (7 brokers with analyst names), metrics (PnL, Balance Sheet, Cash Flow, Multiples) / Консенсус-источники (7 брокеров с именами аналитиков), метрики (PnL, Баланс, Денежные потоки, Мультипликаторы) |
| `/src/app/components/home/data/analyst-avatars.ts` | 36 PNG avatars (128×128 px) in `analyst-avatars.ts`, lookup by id/name/index via helper functions / 36 PNG-аватарок (128×128 px) в `analyst-avatars.ts`, поиск по id/имени/индексу через хелпер-функции |

### What data exists or may appear / Какие данные есть или могут появиться

- **Stocks / Акции** — company profiles, tickers, financial statements, price history, sparklines
  Профили компаний, тикеры, финансовая отчётность, история цен, спарклайны
- **Bonds / Облигации** — to be added (coupon rates, yields, maturity dates)
  Будут добавлены (ставки купона, доходности, даты погашения)
- **Commodities / Товары** — Brent, Urals, Gold, Silver, TTF Gas (prices, changes, sparklines)
  Brent, Urals, Золото, Серебро, TTF Gas (цены, изменения, спарклайны)
- **Indices / Индексы** — IMOEX, RTS, S&P 500, NASDAQ, STOXX 600
  IMOEX, RTS, S&P 500, NASDAQ, STOXX 600
- **Currencies / Валюты** — USD/RUB, EUR/RUB, CNY/RUB, EUR/USD, GBP/USD
- **Mutual Funds / ПИФы** — to be added (fund names, NAV, returns)
  Будут добавлены (названия фондов, СЧА, доходность)
- **Company logos / Логотипы компаний** — SVG logos in `company-logos.tsx`, fallback text logos via `logoBg`/`logoColor`/`logoText` in `COMPANIES`
  SVG-логотипы в `company-logos.tsx`, текстовые фолбэк-логотипы через `logoBg`/`logoColor`/`logoText` в `COMPANIES`
- **Analyst avatars / Аватары аналитиков** — 36 PNG avatars (128×128 px) in `analyst-avatars.ts`, lookup by id/name/index via helper functions
  36 PNG-аватарок (128×128 px) в `analyst-avatars.ts`, поиск по id/имени/индексу через хелпер-функции
- **News photos / Фото для новостей** — news items with image references
  Новостные элементы со ссылками на изображения
- **Analyst names & brokers / Имена аналитиков и брокеры** — in `ConsensusData.ts` (SOURCES array) and `home-events-db.ts`
  В `ConsensusData.ts` (массив SOURCES) и `home-events-db.ts`

### Rules / Правила

1. **Never duplicate data** — if a company, ticker, or instrument already exists in any of the files above, import and use it.
   **Никогда не дублировать данные** — если компания, тикер или инструмент уже есть в файлах выше, импортировать и использовать.
2. **Extend, don't replace** — when adding new instruments or companies, add them to the appropriate existing file.
   **Расширять, а не заменять** — при добавлении новых инструментов или компаний добавлять их в соответствующий существующий файл.
3. **Types first** — if adding a new data category, define types in the relevant `*-types.ts` file before creating mock data.
   **Сначала типы** — при добавлении новой категории данных определить типы в соответствующем `*-types.ts` файле до создания мок-данных.
4. **Consistent structure** — follow the existing patterns (e.g. `generateSparkline()` for price charts, `seededRandom()` for deterministic financial data).
   **Консистентная структура** — следовать существующим паттернам (напр. `generateSparkline()` для ценовых графиков, `seededRandom()` для детерминированных финансовых данных).

## Files That Change Between Sessions / Файлы, которые меняются между сессиями

**Always re-read before editing:**
**Всегда перечитывать перед редактированием:**

- `DashboardPage.tsx`, `FilterBar.tsx`, `Header.tsx`
- `ConsensusDetailModal.tsx`, `ChartModal.tsx`
- `ds-tooltip.tsx`, `ds-table.tsx`, `ds-chart.tsx`
- `types.ts`, `helpers.ts` (chart-builder)
- `svg-chart-renderer.tsx`, `chart-templates.ts`
- `NewsFeed.tsx`

## Color Migration Pattern / Паттерн миграции цветов

### Rule: CSS variables vs hardcoded hex / Правило: CSS-переменные vs захардкоженные hex

| Context / Контекст | Use / Использовать |
|---|---|
| JSX / DOM styles — стили JSX/DOM | `var(--ds-*)` CSS variables — CSS-переменные |
| ECharts options (canvas renderer) — опции ECharts (canvas-рендерер) | Hardcoded hex values (canvas can NOT interpret CSS vars) — Захардкоженные hex-значения (canvas НЕ понимает CSS-переменные) |
| Inside `<DocCode>` template strings — внутри шаблонных строк `<DocCode>` | Leave as-is (documentation examples) — Оставлять как есть (примеры документации) |

### ECharts Canvas-Safe Colors (theme-aware) / Canvas-безопасные цвета ECharts (с учётом темы)

ECharts renders on `<canvas>`, so CSS variables don't work. Use the `useChartColors()` hook at the top level of every chart component:
ECharts рендерится на `<canvas>`, поэтому CSS-переменные не работают. Используй хук `useChartColors()` на верхнем уровне каждого чарт-компонента:

```
Dark / Тёмная:   borderColor = #2A2E39   axisLabelColor = #677C9C
Light / Светлая:  borderColor = #E9F1F6   axisLabelColor = #92A1B8
```

The hook uses `useSyncExternalStore` + `MutationObserver` on `data-mantine-color-scheme` to reactively switch between dark/light hex values.
Хук использует `useSyncExternalStore` + `MutationObserver` на `data-mantine-color-scheme` для реактивного переключения между hex-значениями тёмной/светлой темы.

### Semantic Token -> Hex Mapping (Dark) / Маппинг семантических токенов -> Hex (тёмная тема)

| CSS Variable / CSS-переменная | Hex | Usage / Назначение |
|---|---|---|
| `--ds-bg-primary` | `#131722` | Main background / Основной фон |
| `--ds-bg-secondary` | `#191F2D` | Card background / Фон карточки |
| `--ds-text-primary` | `#E0E1E2` | Primary text / Основной текст |
| `--ds-text-secondary` | `#C4C7C9` | Secondary text / Вторичный текст |
| `--ds-text-gray-dark` | `#677C9C` | Subtle text, axis labels / Приглушённый текст, подписи осей |
| `--ds-border-primary` | `#2A2E39` | Borders, axis lines, split lines / Границы, линии осей, разделительные линии |
| `--ds-border-secondary` | `#191F2D` | Subtle borders / Тонкие границы |
| `--ds-blue-6` | `#5A8CFF` | Accent / Акцент |
| `--ds-green-6` | `#1FC989` | Positive / Положительное значение |
| `--ds-red-6` | `#EA3943` | Negative / Отрицательное значение |

### Semantic Token -> Hex Mapping (Light) / Маппинг семантических токенов -> Hex (светлая тема)

| CSS Variable / CSS-переменная | Hex | Usage / Назначение |
|---|---|---|
| `--ds-bg-primary` | `#F8FAFE` | Main background / Основной фон |
| `--ds-bg-secondary` | `#FFFFFF` | Card background / Фон карточки |
| `--ds-text-primary` | `#131722` | Primary text / Основной текст |
| `--ds-text-secondary` | `#2A2E39` | Secondary text / Вторичный текст |
| `--ds-text-gray-dark` | `#677C9C` | Subtle text / Приглушённый текст |
| `--ds-border-primary` | `#E9F1F6` | Borders, axis lines, split lines / Границы, линии осей, разделительные линии |
| `--ds-border-secondary` | `#C4C7C9` | Subtle borders / Тонкие границы |

## Intentionally Hardcoded Colors (DO NOT migrate) / Намеренно захардкоженные цвета (НЕ мигрировать)

These colors are hardcoded by design and must not be replaced with CSS variables:
Эти цвета захардкожены намеренно и не должны заменяться на CSS-переменные:

- **Chart data-viz palettes** in `ChartModal.tsx`, `ComponentLibrary.tsx`, `ds-chart.tsx` (the `DS_PALETTE` array)
  **Палитры визуализации данных** в `ChartModal.tsx`, `ComponentLibrary.tsx`, `ds-chart.tsx` (массив `DS_PALETTE`)
- **SVG logo** in `Header.tsx` (`#5A8CFF` fill)
  **SVG-логотип** в `Header.tsx` (заливка `#5A8CFF`)
- **Non-standard tints** `#8FE5E2` / `#FBB187` / `#A2AFC2` in `NewsSourceIcon.tsx`
  **Нестандартные оттенки** `#8FE5E2` / `#FBB187` / `#A2AFC2` в `NewsSourceIcon.tsx`
- **`ChartBuilderSpec.tsx`** - documentation content
  **`ChartBuilderSpec.tsx`** — документационный контент
- **`DocShell.tsx`** dark preview panel
  **`DocShell.tsx`** — панель предпросмотра тёмной темы
- **`ComponentDetailPage.tsx`** documentation spec tables
  **`ComponentDetailPage.tsx`** — таблицы спецификаций документации
- **Treemap** `borderColor: '#131722'` and label `color: '#fff'` (data-viz, not theme borders)
  **Treemap** `borderColor: '#131722'` и `color: '#fff'` для лейблов (визуализация данных, а не границы темы)

## DS Chart Component Rules / Правила DS-чарт-компонентов

1. **No borders on Pie/Donut** - no `borderColor`/`borderWidth` in `itemStyle` for pie/donut series
   **Без обводок на Pie/Donut** — не использовать `borderColor`/`borderWidth` в `itemStyle` для серий pie/donut
2. **Legend always below chart** - `ChartWithLegend` renders children first, then `DSLegend`
   **Легенда всегда под графиком** — `ChartWithLegend` рендерит сначала содержимое, потом `DSLegend`
3. **Legend centered** - wrapped in `<div style={{ display: 'flex', justifyContent: 'center' }}>`
   **Легенда по центру** — обёрнута в `<div style={{ display: 'flex', justifyContent: 'center' }}>`
4. **Legend only when > 1 item** - `showLegend && legendItems.length > 1`
   **Легенда только при > 1 элементе** — `showLegend && legendItems.length > 1`
5. **ECharts built-in legend always disabled** - `legend: { show: false }` in every chart
   **Встроенная легенда ECharts всегда отключена** — `legend: { show: false }` в каждом графике
6. **`grid.top: 16`** (not 32) since external legend replaces internal one
   **`grid.top: 16`** (не 32), так как внешняя легенда заменяет встроенную
7. **Axis styling** - use `useChartColors()` hook values for `axisLine`, `splitLine`, `axisLabel`
   **Стилизация осей** — использовать значения хука `useChartColors()` для `axisLine`, `splitLine`, `axisLabel`
8. **Split lines** - `type: 'dashed'`, `opacity: 0.5`
   **Разделительные линии** — `type: 'dashed'`, `opacity: 0.5`
9. **Category axis** - `axisLine: show`, `axisTick: hide`, `splitLine: hide`
   **Ось категорий** — `axisLine: show`, `axisTick: hide`, `splitLine: hide`
10. **Value axis** - `axisLine: hide`, `axisTick: hide`, `splitLine: show` (when `showGrid`)
    **Ось значений** — `axisLine: hide`, `axisTick: hide`, `splitLine: show` (когда `showGrid`)
11. **Radar** - explicit `axisLine`, `splitLine`, `splitArea: { show: false }`, `axisName` colors
    **Radar** — явно задавать `axisLine`, `splitLine`, `splitArea: { show: false }`, цвета `axisName`
12. **Sparkline** - set `minWidth`/`minHeight` to prevent 0-dimension errors
    **Sparkline** — задать `minWidth`/`minHeight`, чтобы избежать ошибок нулевых размеров
13. **Radar max** - round up indicators to "nice" numbers (`1, 2.5, 5, 10 x 10^n`), `splitNumber: 5`
    **Radar max** — округлять индикаторы до «красивых» чисел (`1, 2.5, 5, 10 x 10^n`), `splitNumber: 5`

## DS Palette (data-viz, 8 colors) / DS-палитра (визуализация данных, 8 цветов)

```
#5A8CFF  #1FC989  #F87D37  #9A8CFF
#45D3CE  #F6C825  #ED555E  #A8B4C6
```

## General Coding Rules / Общие правила кодирования

- Only create `.tsx` files for components
  Создавать только `.tsx` файлы для компонентов
- DS components go in `/src/app/components/ui/` with `ds-` prefix
  DS-компоненты размещаются в `/src/app/components/ui/` с префиксом `ds-`
- Use CSS modules (`.module.css`) for page/feature components
  Использовать CSS-модули (`.module.css`) для страниц и фич-компонентов
- Keep inline styles for ECharts options (they're JS objects, not DOM)
  Оставлять инлайн-стили для опций ECharts (это JS-объекты, а не DOM)
- Always use `notMerge` prop on `<ReactECharts>` to avoid stale option merging
  Всегда использовать проп `notMerge` на `<ReactECharts>`, чтобы избежать устаревшего слияния опций
- Always use `theme="andromeda"` on `<ReactECharts>`
  Всегда использовать `theme="andromeda"` на `<ReactECharts>`
- When `fast_apply_tool` loses chunks of a file, re-read and verify all components are intact
  Когда `fast_apply_tool` теряет куски файла — перечитать и убедиться, что все компоненты на месте

## Documentation Rules / Правила документирования

When creating a new user flow (page, route, multi-step process) or a significant new component, **always** create a specification document in the `/docs/` folder:
При создании нового пользовательского пути (страница, роут, многошаговый процесс) или значимого компонента **всегда** создавать спецификацию в папке `/docs/`:

- **File naming**: `SPEC_<FeatureName>.md` (e.g. `SPEC_PORTFOLIO_BUILDER.md`, `SPEC_ALERTS_PANEL.md`)
  **Именование файлов**: `SPEC_<ИмяФичи>.md` (напр. `SPEC_PORTFOLIO_BUILDER.md`, `SPEC_ALERTS_PANEL.md`)
- **Required sections / Обязательные секции**:
  1. **Overview** - what the feature does, its purpose in the dashboard
     **Обзор** — что делает фича, её назначение в дашборде
  2. **User Flow** - step-by-step description of the user journey (screens, actions, transitions)
     **Пользовательский путь** — пошаговое описание пути пользователя (экраны, действия, переходы)
  3. **Components** - list of all components involved, their props, and where they live in the file tree
     **Компоненты** — список всех задействованных компонентов, их пропсы и расположение в дереве файлов
  4. **State Management** - what state is used, where it lives, how it flows between components
     **Управление состоянием** — какой стейт используется, где хранится, как передаётся между компонентами
  5. **Routes** - new routes added (if any), with path and associated component
     **Роуты** — добавленные маршруты (если есть), путь и связанный компонент
  6. **Data** - data sources, mock data files, types/interfaces used
     **Данные** — источники данных, файлы мок-данных, используемые типы/интерфейсы
  7. **Design Tokens** - which `--ds-*` tokens and DS components (`ds-*`) are used
     **Дизайн-токены** — какие `--ds-*` токены и DS-компоненты (`ds-*`) используются
  8. **Edge Cases** - empty states, error states, loading states, responsive behavior
     **Крайние случаи** — пустые состояния, ошибки, загрузка, адаптивное поведение
- Update the spec document when the feature is modified in subsequent sessions.
  Обновлять спеку при изменении фичи в последующих сессиях.
- If a spec already exists for the feature being edited, re-read it before making changes.
  Если спека для редактируемой фичи уже существует — перечитать её перед внесением изменений.

## Reuse of Design System Tokens and Components / Переиспользование токенов и компонентов дизайн-системы

When building new functionality or components, **always** prefer existing design system assets over creating new ones:
При создании нового функционала или компонентов **всегда** отдавать предпочтение существующим ассетам дизайн-системы:

- **Colors**: use `var(--ds-*)` CSS variables from `/src/styles/theme.css`. Never invent new hex values for standard UI (backgrounds, text, borders). For ECharts canvas, use hex values from the mapping tables above.
  **Цвета**: использовать CSS-переменные `var(--ds-*)` из `/src/styles/theme.css`. Никогда не придумывать новые hex-значения для стандартного UI (фоны, тексты, границы). Для ECharts canvas — использовать hex-значения из таблиц маппинга выше.
- **DS Components**: check `/src/app/components/ui/ds-*.tsx` before creating a new UI element. Existing components include: `DSButton`, `DSInput`, `DSSelect`, `DSModal`, `DSTabs`, `DSTable`, `DSBadge`, `DSTag`, `DSCheckbox`, `DSSwitch`, `DSTooltip`, `DSMenu`, `DSCalendar`, `DSSectionHeader`, `DSSegmentButton`, `DSChart` (with all chart variants), `DSSparkline`, `DSLegend`, `DSChartGrid`, `DSCustomDropdown`, `DSSourceBadge`.
  **DS-компоненты**: проверять `/src/app/components/ui/ds-*.tsx` перед созданием нового UI-элемента. Существующие компоненты: `DSButton`, `DSInput`, `DSSelect`, `DSModal`, `DSTabs`, `DSTable`, `DSBadge`, `DSTag`, `DSCheckbox`, `DSSwitch`, `DSTooltip`, `DSMenu`, `DSCalendar`, `DSSectionHeader`, `DSSegmentButton`, `DSChart` (со всеми вариантами графиков), `DSSparkline`, `DSLegend`, `DSChartGrid`, `DSCustomDropdown`, `DSSourceBadge`.
- **Typography**: use the semantic text tokens (`--ds-text-primary`, `--ds-text-secondary`, `--ds-text-gray-dark`, etc.) instead of arbitrary color values.
  **Типографика**: использовать семантические текстовые токены (`--ds-text-primary`, `--ds-text-secondary`, `--ds-text-gray-dark` и т.д.) вместо произвольных цветов.
- **Spacing & layout**: use Tailwind utility classes consistent with the rest of the project.
  **Отступы и лейаут**: использовать Tailwind-утилиты, согласованные с остальным проектом.
- **Data-viz palette**: use the 8-color `DS_PALETTE` from `ds-chart.tsx` for any new charts or visualizations.
  **Палитра визуализации**: использовать 8-цветную `DS_PALETTE` из `ds-chart.tsx` для любых новых графиков и визуализаций.
- If a genuinely new token or component is needed, document it in the feature spec and add it following existing naming conventions (`--ds-*` for tokens, `ds-*.tsx` with `DS` prefix for components).
  Если действительно нужен новый токен или компонент — задокументировать его в спеке фичи и добавить по существующим соглашениям именования (`--ds-*` для токенов, `ds-*.tsx` с префиксом `DS` для компонентов).