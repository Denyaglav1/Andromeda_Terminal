# spec.md
# Project Specification / Спецификация проекта

## Goal / Цель
Andromeda Terminal — a high-performance financial data terminal for index tracking and analysis.
Andromeda Terminal — высокопроизводительный финансовый терминал для отслеживания и анализа индексов.
New Objective: Implement one-to-one Figma designs for "Company Details" view.
Новая цель: Реализовать макеты Figma «один-в-один» для детального представления компаний.

## Scope / Объем работ
- Real-time backend scraper for SPB Exchange. / Бэкенд-скрапер для SPB Exchange в реальном времени.
- Financial index dashboard (SPB100, etc.). / Дашборд финансовых индексов (SPB100 и др.).
- [NEW] Company Details Page (Financials, Bonds, Indicators). / [НОВОЕ] Страница деталей компании (финансы, облигации, показатели).
- Bilingual UI (Russian/English). / Двуязычный интерфейс (Русский/Английский).

## Non-Goals / Что не входит в задачу
- Real-time stock trading (view only). / Торговля акциями в реальном времени (только просмотр).
- Advanced portfolio management. / Продвинутое управление портфелем.

## Inputs/Outputs / Входные и выходные данные
- **Inputs**: SPB Exchange API, Figma API. / **Входы**: API SPB Exchange, API Figma.
- **Outputs**: Interactive charts, aggregated tables, company profiles. / **Выходы**: Интерактивные графики, сводные таблицы, профили компаний.

## Constraints / Ограничения
- Pixel-perfect implementation from Figma. / Реализация «пиксель-в-пиксель» из Figma.
- Bilingual documentation and UI. / Двуязычная документация и интерфейс.

## Risks / Риски
- SPB Exchange API rate limits or changes. / Лимиты или изменения API SPB Exchange.
- Complexity of rendering large financial tables. / Сложность рендеринга больших финансовых таблиц.

## Acceptance Criteria / Критерии приемки
- Company data matches Figma design exactly. / Данные компании в точности соответствуют дизайну Figma.
- API provides- [NEW] How to handle 40 companies' logo storage? / [НОВОЕ] Как организовать хранение логотипов для 40 компаний? MOEX.
- Bilingual switch works for all new components. / Переключатель языков работает для всех новых компонентов.

## Minimum Test Strategy / Минимальная стратегия тестирования
- Visual comparison (Figma vs App). / Визуальное сравнение (Figma против приложения).
- API response validation for company details. / Валидация ответов API для данных компаний.
