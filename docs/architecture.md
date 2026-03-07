# architecture.md

## System Modules / Модули системы
- **Backend (FastAPI)**: Serves the REST API. / **Бэкенд (FastAPI)**: обеспечивает работу REST API.
- **Scraper (Python/httpx)**: Background task manager for data ingestion. / **Скрапер (Python/httpx)**: менеджер фоновых задач для сбора данных.
- **Frontend (Vite/React/Mantine)**: UI layer. / **Фронтенд (Vite/React/Mantine)**: уровень пользовательского интерфейса.
- **Database (SQLAlchemy/SQLite)**: Persistent storage. / **База данных (SQLAlchemy/SQLite)**: постоянное хранилище.

## Boundaries / Границы
- Backend -> Database (SQLAlchemy models). / Бэкенд -> База данных (модели SQLAlchemy).
- Scraper -> Database (Direct session management). / Скрапер -> База данных (прямое управление сессиями).
- Frontend -> Backend (Fetch API via `api.ts`). / Фронтенд -> Бэкенд (Fetch API через `api.ts`).

## Domain Rules / Правила домена
- All timestamps in the database use UTC. / Все временные метки в базе данных используют UTC.
- Every index must have a unique ticker (e.g., SPB100). / У каждого индекса должен быть уникальный тикер (например, SPB100).
- Historical data should be deduplicated by day for long-term views. / Исторические данные должны дедуплицироваться по дням для долгосрочного отображения.

## Storage Decisions / Решения по хранению данных
- **SQLite**: Used for its simplicity and single-file portability. / **SQLite**: используется за простоту и портативность в виде одного файла.
- **SQLAlchemy**: ORM layer to allow switching to PostgreSQL via environment variables. / **SQLAlchemy**: слой ORM для возможности переключения на PostgreSQL через переменные окружения.

## Integration Points / Точки интеграции
- **SPB Exchange API**: External data source. / **API СПБ Биржи**: внешний источник данных.
- **Railway**: Orchestration and hosting platform. / **Railway**: платформа оркестрации и хостинга.
