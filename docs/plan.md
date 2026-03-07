# plan.md

## Major Milestones / Основные этапы
1. **Foundation (Completed)**: Basic UI, basic API, SQLite integration. / **Основание (Завершено)**: Базовый UI, базовый API, интеграция с SQLite.
2. **Data Ingestion (Completed)**: Robust scraper for history and metadata. / **Сбор данных (Завершено)**: Надежный скрапер для истории и метаданных.
3. **Refinement (Completed)**: Correct timestamps, grouping documents, fixing deployment errors. / **Доработка (Завершено)**: Корректные временные метки, группировка документов, исправление ошибок деплоя.
4. **Final Audit (Completed)**: Package standardization, synchronization of repos. / **Финальный аудит (Завершено)**: Стандартизация пакета, синхронизация репозиториев.
5. **Future Features (Pending)**: Real-time updates, portfolio tracking, more indices. / **Будущие функции (В ожидании)**: Обновления в реальном времени, отслеживание портфеля, больше индексов.

## Assumptions / Предположения
- SPB Exchange API will remain publicly accessible. / API СПБ Биржи останется общедоступным.
- Railway's persistent storage (volumes) will handle the SQLite file. / Постоянное хранилище Railway (volumes) будет справляться с файлом SQLite.

## Open Questions / Открытые вопросы
- Should we add support for Russian indices (MOEX) next? / Стоит ли следующим добавить поддержку российских индексов (MOEX)?
- Do we need a dedicated mobile view or is responsive enough? / Нужно ли отдельное мобильное представление или достаточно адаптивного дизайна?
