# decisions.md

## ADR 001: Use SQLite as Default Database / Использовать SQLite как базу данных по умолчанию
- **Status**: Accepted / **Статус**: Принято
- **Context**: Need a simple, zero-config database for rapid prototyping and cloud deployment. / **Контекст**: Нужна простая база данных с нулевой конфигурацией для быстрого прототипирования и облачного деплоя.
- **Decision**: Use SQLite with SQLAlchemy. / **Решение**: Использовать SQLite с SQLAlchemy.
- **Consequences**: Easy migrations, single-file backup, limited concurrency (handled by `check_same_thread=False`). / **Последствия**: Простая миграция, бекап в виде одного файла, ограниченная многопоточность (решается через `check_same_thread=False`).

## ADR 002: Manual Timestamp Extraction / Ручное извлечение временных меток
- **Status**: Accepted / **Статус**: Принято
- **Context**: Automatic `utcnow()` caused visual errors in charts for stale data. / **Контекст**: Автоматический `utcnow()` вызывал визуальные ошибки в графиках при наличии устаревших данных.
- **Decision**: Extract `bar_unixtime` from SPB API and use as the primary data timestamp. / **Решение**: Извлекать `bar_unixtime` из API СПБ Биржи и использовать его в качестве основной временной метки данных.
- **Consequences**: Accurate historical visualization, correctly represents market state. / **Последствия**: Точная историческая визуализация, корректное отображение состояния рынка.

## ADR 003: Backend Package Wrapper / Обертка бэкенда как пакета
- **Status**: Accepted / **Статус**: Принято
- **Context**: Deployment paths in Railway conflicted with local relative imports. / **Контекст**: Пути деплоя в Railway конфликтовали с локальными относительными импортами.
- **Decision**: Add `__init__.py` and modify `sys.path`. / **Решение**: Добавить `__init__.py` и модифицировать `sys.path`.
- **Consequences**: Robust imports regardless of current working directory. / **Последствия**: Надежные импорты независимо от текущей рабочей директории.
