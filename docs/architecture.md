# architecture.md
# Project Architecture / Архитектура проекта

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
- [NEW] Companies are identified by their MOEX/SPB ticker. / [НОВОЕ] Компании идентифицируются по их тикерам MOEX/SPB.
- [NEW] Financial data follows a strict schema (Revenue, EBITDA, etc.). / [НОВОЕ] Финансовые данные следуют строгой схеме (Выручка, EBITDA и т.д.).

## Storage Decisions / Решения по хранению данных
- **SQLite**: Used for its simplicity and single-file portability. / **SQLite**: используется за простоту и портативность в виде одного файла.
- **SQLAlchemy**: ORM layer to allow switching to PostgreSQL via environment variables. / **SQLAlchemy**: слой ORM для возможности переключения на PostgreSQL через переменные окружения.
- [NEW] `Company` table stored metadata; `CompanyFinancials` stores time-series metrics. / [НОВОЕ] Таблица `Company` хранит метаданные; `CompanyFinancials` хранит временные показатели.

## Integration Points / Точки интеграции
- **SPB Exchange API**: External data source. / **API СПБ Биржи**: внешний источник данных.
- **Figma API**: Source for design tokens and assets. / **Figma API**: источник дизайн-токенов и ассетов.
- **Railway**: Orchestration and hosting platform. / **Railway**: платформа оркестрации и хостинга.

## Frontend Components / Фронтенд-компоненты
- **Dashboard**: High-level overview. / **Дашборд**: высокоуровневый обзор.
- [NEW] **CompanyPage**: Detailed view for a specific company. / [НОВОЕ] **CompanyPage**: Детальное представление конкретной компании.
- [NEW] **FinancialsTable**: Specialized table for P&L, BS, CF. / [НОВОЕ] **FinancialsTable**: Специализированная таблица для P&L, BS, CF.
- [NEW] **BondsTable**: List of tradable bonds for the company. / [НОВОЕ] **BondsTable**: Список торгуемых облигаций компании.
