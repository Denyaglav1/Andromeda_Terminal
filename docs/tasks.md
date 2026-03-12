# tasks.md
# Project Tasks / Задачи проекта

## Completed Tasks / Завершенные задачи
- [x] Fix Railway 503 error. / Исправить ошибку Railway 503.
- [x] Standardize backend imports with `__init__.py`. / Стандартизировать импорты бэкенда с помощью `__init__.py`.
- [x] Fix chart "straight line" tail using `bar_unixtime`. / Исправить «прямой хвост» графика с помощью `bar_unixtime`.
- [x] Implement document grouping by category. / Реализовать группировку документов по категориям.
- [x] Synchronize GitHub and GitLab repositories. / Синхронизировать репозитории GitHub и GitLab.
- [x] Translate all documentation to Russian (Bilingual) / Перевести всю документацию на русский язык (двуязычный формат)
- [x] Setup Figma integration (Token & File ID) / Настройка интеграции с Figma (Токен и ID файла)
- [x] Fix production import crash (ModuleNotFoundError: backend) / Исправить сбой импорта на проде (ModuleNotFoundError: backend)

## Immediate Tasks / Текущие задачи
- [x] **Epic: Company Data Implementation / Эпик: Реализация данных компаний**
    - [x] 5.1. Backend: Create DB models (`Company`, `Financials`, `Bonds`). / Бэкенд: Создать модели БД (`Company`, `Financials`, `Bonds`).
    - [x] 5.2. Backend: Implement data seeding for 40 companies. / Бэкенд: Реализовать наполнение данными для 40 компаний.
    - [x] 5.3. Backend: Add API endpoints `/api/companies/{ticker}`. / Бэкенд: Добавить API-эндпоинты `/api/companies/{ticker}`.
    - [x] 5.4. Frontend: Create `CompanyDetailsPage` layout (Figma Pixel-Perfect). / Фронтенд: Создать макет `CompanyDetailsPage` (Figma Pixel-Perfect).
    - [x] 5.5. Frontend: Implement Financials Pivot Table. / Фронтенд: Реализовать сводную таблицу финансовых показателей.
    - [x] 5.6. Frontend: Implement Bonds Table & Sidebar Indicators. / Фронтенд: Реализовать таблицу облигаций и сайдбар с показателями.
    - [x] 5.7. Frontend: Integrate navigation (Indices -> Company Page). / Фронтенд: Интегрировать навигацию (Индексы -> Страница компании).
    - [x] 5.8. Frontend: Integrate navigation (Home -> Company Page). / Фронтенд: Интегрировать навигацию (Главная -> Страница компании).
    - [x] 5.9. Backend: Automate database seeding in production. / Бэкенд: Автоматизировать наполнение БД в продакшене.
- [x] Implement global error boundary in Frontend. / Реализовать глобальный обработчик ошибок (error boundary) во фронтенде. (`ErrorBoundary` class in `App.tsx`)
- [ ] Add basic unit tests for Scraper logic. / Добавить базовые юнит-тесты для логики скрапера.

## Backlog / Бэклог

### Epic 6: CompanyPage — Real Data Integration / Реальные данные на странице компании
- [x] 6.1. Frontend: Real MOEX quote + price/volume chart (useMoexQuote, useMoexCandles). / Реальный график MOEX котировок.
- [ ] 6.2. Frontend: Replace mock news (`MOCK_NEWS`) with real publications from API. / Заменить заглушку новостей реальными публикациями из API.
- [ ] 6.3. Frontend: Replace mock ownership (`MOCK_OWNERSHIP`) with real data. / Заменить заглушку структуры владения реальными данными.
- [ ] 6.4. Frontend: Wire up `SubHeader` back-navigation to use `navigate(-1)` or `/indices`. / Подключить навигацию "назад" в SubHeader.
- [x] 6.5. Frontend: Real indicators from `data.indicators` + dividend yield from MOEX. / Мультипликаторы и дивиденды из реальных данных.

### Epic 7: Data Quality / Качество данных
- [ ] 7.1. Backend: Investigate and resolve Nov 2023 historical data gap in SPB Exchange API. / Исследовать и устранить пробел в исторических данных (ноябрь 2023).
- [ ] 7.2. Backend: Replace `verify=False` SSL in `scraper.py` with proper certificate handling. / Заменить `verify=False` на корректную обработку сертификатов.
- [x] 7.3. Frontend: Company logo storage strategy implemented. / Логотипы компаний реализованы как inline SVG в `company-logos.tsx` + `CompanyLogo` компонент с fallback на цветной инициал.

### Epic 8: Testing / Тестирование
- [ ] 8.1. Backend: Add unit tests for `scraper.py` core functions (`fetch_index_metadata`, `save_historical_data`). / Добавить юнит-тесты для ключевых функций скрапера.
- [ ] 8.2. Frontend: Add basic smoke tests for `CompanyPage` and `IndicesPage`. / Добавить базовые smoke-тесты для страниц.

### Epic 10: Design System — DSTable / Дизайн-система
- [x] Add zebra striping prop with light/dark theme support. / Добавить зебру с поддержкой светлой и тёмной темы.
- [x] Fix sticky left/right column backgrounds and scroll shadow. / Исправить фон sticky-колонок и тень при скролле.
- [x] Add rowHeight prop (24/32/40/48px) with switcher tabs in docs. / Добавить rowHeight проп и переключатель высоты в документацию.
- [x] Add table examples to ComponentDetailPage (sticky, zebra, rich cells, both-sticky). / Добавить примеры таблиц в документацию компонента.
- [x] Rich cells: CompanyLogo + DSBadge + DSSelect + DSTag. / Ячейки с логотипами, бейджами, селектом и тегами.
- [ ] Sync ds-table.tsx changes to packages/andromeda-ds/. / Синхронизировать изменения DSTable в пакет дизайн-системы.

### Epic 9: Production Hardening / Подготовка к продакшену
- [ ] 9.1. Backend: Add rate limiting to API endpoints. / Добавить rate limiting на API эндпоинты.
- [ ] 9.2. Backend: Switch `allow_origins=["*"]` CORS to specific domains in production. / Заменить `*` в CORS на конкретные домены.
- [x] 9.3. Frontend: Add loading skeletons for data-fetching states.
- [ ] 9.4. General: Set up CI/CD via GitHub Actions (build + lint on PR).

### Epic 11: Index Calculators / Расчётные индексы
- [x] 11.1. SPBICAR calculator (Yahoo Finance, EURIBOR, нормализация по последней точке).
- [x] 11.2. SPBIDGT calculator (MOEX БД, RUONIA, predecessor mapping TCSG→T, YNDX→YDEX).
- [x] 11.3. MOEX модуль: котировки, история, дивиденды (MoexQuote, MoexCandle, MoexDividend).
- [x] 11.4. Dual-line chart на IndicesPage (Биржа / Расчёт) с toggles.
- [x] 11.5. Нормализация к последней официальной точке (конец ряда совпадает).
- [x] 11.6. SPBIDGT история расширена до 07.03.2023 (predecessor тикеры).
- [x] 11.7. Intraday для SPBIDGT: накопление точек каждые 15 мин, dual-line на 1D.
- [x] 11.8. Попап методики расчёта (Биржа/Расчёт, формула, состав).
- [x] 11.9. scraper.py: utcnow() вместо bar_unixtime для корректного 1D таймфрейма.
- [x] 11.10. INDEX_CALC_JOBS реестр — добавление нового индекса в одну строку.
- [ ] 11.11. Добавить новые индексы (SPBIREC, SPBIOIL и др.) по запросу.
- [ ] 11.12. SPBICAR: расширить историю как SPBIDGT (predecessor компоненты если нужно).
