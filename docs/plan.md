# plan.md
# Project Plan / План проекта

## Major Milestones / Основные этапы
1. **Foundation (Completed)**: Basic UI, basic API, SQLite integration. / **Основание (Завершено)**: Базовый UI, базовый API, интеграция с SQLite.
2. **Data Ingestion (Completed)**: Robust scraper for history and metadata. / **Сбор данных (Завершено)**: Надежный скрапер для истории и метаданных.
3. **Refinement (Completed)**: Correct timestamps, grouping documents, fixing deployment errors. / **Доработка (Завершено)**: Корректные временные метки, группировка документов, исправление ошибок деплоя.
4. **Final Audit (Completed)**: Package standardization, synchronization of repos. / **Финальный аудит (Завершено)**: Стандартизация пакета, синхронизация репозиториев.
5. **Company Data (Current)**: Implement detailed company view from Figma, extend DB models. / **Данные компаний (Текущий)**: Реализация детального представления компаний из Figma, расширение моделей БД.
6. **Future Features (Pending)**: Real-time updates, portfolio tracking, more indices. / **Будущие функции (В ожидании)**: Обновления в реальном времени, отслеживание портфеля, больше индексов.

## Assumptions / Предположения
- SPB Exchange API will remain publicly accessible. / API СПБ Биржи останется общедоступным.
- Railway's persistent storage (volumes) will handle the SQLite file. / Постоянное хранилище Railway (volumes) будет справляться с файлом SQLite.
- Existing frontend charts can be reused for company stock data. / Существующие фронтенд-графики могут быть повторно использованы для данных акций.

## Open Questions / Открытые вопросы
- [NEW] Should we use a separate scraper for company financials or manual seed? / [НОВОЕ] Использовать ли отдельный скрапер для финансов компаний или ручное наполнение?
- [NEW] How to handle 40 companies' logo storage? / [НОВОЕ] Как организовать хранение логотипов для 40 компаний?
