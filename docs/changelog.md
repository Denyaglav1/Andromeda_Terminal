# changelog.md

## [1.2.2] - 2026-03-10
### Fixed / Исправлено
- Removed unused `beautifulsoup4` and `requests` from `requirements.txt`. / Удалены неиспользуемые зависимости из `requirements.txt`.
- Added missing blank line between functions in `scraper.py` (PEP 8). / Добавлена пустая строка между функциями в `scraper.py`.
- Fixed deprecated `color` prop on Mantine `Text` components → `c` (Mantine v8). / Исправлен устаревший проп `color` на `c` в Mantine v8.
- Fixed corrupted acceptance criteria line in `docs/spec.md`. / Исправлена битая строка в `docs/spec.md`.
### Updated / Обновлено
- Rebuilt backlog in `docs/tasks.md` (Epics 6–9). / Пересобран бэклог в `docs/tasks.md` (Эпики 6–9).

## [1.2.1] - 2026-03-07
### Added / Добавлено
- Comprehensive bilingual documentation (`/docs`). / Полная двуязычная документация (`/docs`).
### Refactored / Рефакторинг
- Modularized `scraper.py` and improved error handling in `main.py`. / Модульное разделение `scraper.py` и улучшение обработки ошибок в `main.py`.
- Centralized SPB API interaction logic. / Централизация логики взаимодействия с API СПБ.
- Cleaned up redundant database initialization. / Очистка дублирующейся инициализации базы данных.

## [1.2.0] - 2026-03-07

## [1.1.0] - 2026-03-06
### Added / Добавлено
- Document categories and grouping in Frontend. / Категории и группировка документов во фронтенде.
- Automated seeding of tickers on backend startup. / Автоматическое наполнение тикеров при запуске бэкенда.

## [1.0.0] - 2026-03-05
### Added / Добавлено
- Initial functional version with Index data, Composition, and Documents. / Начальная функциональная версия с данными индексов, их составом и документами.
- Railway deployment configuration. / Конфигурация деплоя в Railway.
