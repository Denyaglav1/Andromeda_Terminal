# spec.md

## Goal / Цель
Building a financial terminal (Andromeda Terminal) for monitoring and analyzing stock market indices, specifically focused on SPB Exchange data.
Создание финансового терминала (Andromeda Terminal) для мониторинга и анализа фондовых индексов, ориентированного на данные СПБ Биржи.

## Scope / Объем работ
- Backend: FastAPI application for data delivery. / Бэкенд: приложение на FastAPI для доставки данных.
- Frontend: React-based UI with advanced charting (ECharts). / Фронтенд: интерфейс на React с продвинутыми графиками (ECharts).
- Data: Automated scraping of index metadata, history, and constituents from SPB Exchange. / Данные: автоматический сбор метаданных, истории и состава индексов с СПБ Биржи.
- Deployment: Railway-compatible containerized environment. / Деплой: контейнеризированная среда, совместимая с Railway.

## Inputs/Outputs / Входные и выходные данные
- **Inputs**: Real-time and historical data from `indexapi.spbexchange.ru`. / **Входы**: данные в реальном времени и исторические данные с `indexapi.spbexchange.ru`.
- **Outputs**: JSON API for indices, interactive charts and tables in the browser. / **Выходы**: JSON API для индексов, интерактивные графики и таблицы в браузере.

## Constraints / Ограничения
- Must handle SPB Exchange API limitations (potential IP blocking). / Необходимо учитывать ограничения API СПБ Биржи (возможная блокировка по IP).
- Data timestamps must reflect actual market updates (bar_unixtime). / Временные метки данных должны отражать реальные рыночные обновления (bar_unixtime).
- SQLite for local/cloud storage (with DATABASE_URL support for PostgreSQL if needed). / SQLite для локального и облачного хранения (с поддержкой DATABASE_URL для PostgreSQL при необходимости).

## Risks / Риски
- Upstream API changes by SPB Exchange. / Изменения API на стороне СПБ Биржи.
- Data gaps (e.g., Nov 2023 - 2026 gap). / Пропуски в данных (например, разрыв между ноябрем 2023 и 2026 годом).
- Resource limits in the free/starter deployment tier. / Лимиты ресурсов на бесплатном или начальном тарифе деплоя.

## Acceptance Criteria / Критерии приемки
- [x] Application starts and displays index list. / Приложение запускается и отображает список индексов.
- [x] Charts display historical trends without artificial "straight line" tails. / Графики отображают исторические тренды без искусственных «прямых» хвостов.
- [x] Document list and index composition are accurately scraped and displayed. / Список документов и состав индексов корректно собираются и отображаются.
- [x] Backend runs as a robust Python package. / Бэкенд работает как надежный Python-пакет.
