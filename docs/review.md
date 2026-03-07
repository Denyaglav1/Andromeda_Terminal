# review.md

## Implementation Review Notes / Заметки по обзору реализации

### Technical Debt / Технический долг
- **Imports**: Using `python -m backend.scraper` correctly resolves absolute imports. Static analysis tools (Pyre2) might still show warnings due to environment paths, but runtime behavior is correct.
- **SSL Verification**: `verify=False` is still used in `scraper.py` for SPB Exchange API to maintain compatibility with their server certificates.

### Resolved during Audit / Решено во время аудита
- [x] **Modular Scraper**: Large functional blocks in `scraper.py` separated for clarity. / Основные блоки `scraper.py` разделены для ясности.
- [x] **Centralized HTTP**: `spb_get` helper simplifies request management and error logging. / Помощник `spb_get` упрощает управление запросами.
- [x] **Redundant Initialization**: Removed duplicate `Base.metadata.create_all` from scraper. / Удалено дублирование создания таблиц в скрапере.
- [x] **API Resilience**: Added specific error details to `get_index_data` responses. / Добавлены детали об ошибках в ответы API.

### Known Issues / Известные проблемы
- **Data Gap**: Historical data remains stale due to external API limitations (Nov 2023 gap). / Исторические данные остаются устаревшими из-за ограничений внешнего API.
