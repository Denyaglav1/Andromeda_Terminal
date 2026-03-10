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
- [ ] Implement global error boundary in Frontend. / Реализовать глобальный обработчик ошибок (error boundary) во фронтенде.
- [ ] Add basic unit tests for Scraper logic. / Добавить базовые юнит-тесты для логики скрапера.

## Backlog / Бэклог

### Epic 6: CompanyPage — Real Data Integration / Реальные данные на странице компании
- [ ] 6.1. Frontend: Replace hardcoded stock chart with real data from `/api/companies/{ticker}` or a future `/api/stocks/{ticker}` endpoint. / Заменить захардкоженный график акций на реальные данные.
- [ ] 6.2. Frontend: Replace mock news (`MOCK_NEWS`) with real publications from API. / Заменить заглушку новостей реальными публикациями из API.
- [ ] 6.3. Frontend: Replace mock ownership (`MOCK_OWNERSHIP`) with real data. / Заменить заглушку структуры владения реальными данными.
- [ ] 6.4. Frontend: Wire up `SubHeader` back-navigation to use `navigate(-1)` or `/indices`. / Подключить навигацию "назад" в SubHeader.
- [ ] 6.5. Frontend: Replace hardcoded indicator values in chart overlay with `data.indicators`. / Заменить хардкод мультипликаторов на данные из `data.indicators`.

### Epic 7: Data Quality / Качество данных
- [ ] 7.1. Backend: Investigate and resolve Nov 2023 historical data gap in SPB Exchange API. / Исследовать и устранить пробел в исторических данных (ноябрь 2023).
- [ ] 7.2. Backend: Replace `verify=False` SSL in `scraper.py` with proper certificate handling. / Заменить `verify=False` на корректную обработку сертификатов.
- [ ] 7.3. Backend: Add company logo storage strategy (static files or CDN). / Определить и реализовать стратегию хранения логотипов для 40 компаний.

### Epic 8: Testing / Тестирование
- [ ] 8.1. Backend: Add unit tests for `scraper.py` core functions (`fetch_index_metadata`, `save_historical_data`). / Добавить юнит-тесты для ключевых функций скрапера.
- [ ] 8.2. Frontend: Add basic smoke tests for `CompanyPage` and `IndicesPage`. / Добавить базовые smoke-тесты для страниц.

### Epic 9: Production Hardening / Подготовка к продакшену
- [ ] 9.1. Backend: Add rate limiting to API endpoints. / Добавить rate limiting на API эндпоинты.
- [ ] 9.2. Backend: Switch `allow_origins=["*"]` CORS to specific domains in production. / Заменить `*` в CORS на конкретные домены.
- [ ] 9.3. Frontend: Add loading skeletons for all data-fetching states. / Добавить скелетоны загрузки для всех состояний фетчинга.
- [ ] 9.4. General: Set up CI/CD via GitHub Actions (build + lint on PR). / Настроить CI/CD через GitHub Actions.
