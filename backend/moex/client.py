"""
MOEX ISS API Client
Базовый клиент для работы с Moscow Exchange ISS API.
Документация: https://iss.moex.com/iss/reference/
"""

import httpx
import logging
from typing import Any

logger = logging.getLogger(__name__)

MOEX_BASE = "https://iss.moex.com/iss"

HEADERS = {
    "Accept": "application/json",
    "User-Agent": "Andromeda Terminal/1.0",
}


def iss_get(path: str, params: dict | None = None) -> dict:
    """
    GET-запрос к ISS API.
    path: относительный путь без .json, например '/engines/stock/markets/shares/...'
    Возвращает распарсенный dict или {} при ошибке.
    """
    url = f"{MOEX_BASE}{path}.json"
    full_params: dict[str, Any] = {"iss.meta": "off", **(params or {})}
    try:
        r = httpx.get(url, params=full_params, headers=HEADERS, timeout=10.0)
        r.raise_for_status()
        return r.json()
    except Exception as exc:
        logger.warning("MOEX ISS error [%s]: %s", path, exc)
        return {}


def iss_rows(data: dict, block: str) -> list[dict]:
    """
    Конвертирует ISS блок {columns, data} в список словарей.
    Пример: iss_rows(data, "securities") → [{"SECID": "SBER", ...}, ...]
    """
    block_data = data.get(block, {})
    columns = block_data.get("columns", [])
    rows = block_data.get("data", [])
    return [dict(zip(columns, row)) for row in rows]


def iss_first(data: dict, block: str) -> dict | None:
    """Возвращает первую строку блока или None."""
    rows = iss_rows(data, block)
    return rows[0] if rows else None
