#!/bin/sh
set -e

ENV_FILE=/vault/secrets/.env
CONFIG_FILE=/usr/share/nginx/html/configs/config.json

mkdir -p "$(dirname "$CONFIG_FILE")"

if [ -f "$ENV_FILE" ]; then
  echo "{" > "$CONFIG_FILE"

  while IFS= read -r line || [ -n "$line" ]; do
    # Пропуск пустых строк и комментариев
    if [ -z "$line" ] || echo "$line" | grep -qE '^\s*#'; then
      continue
    fi

    key="${line%%=*}"
    value="${line#*=}"

    # Экранирование кавычек в значении
    value_escaped=$(printf '%s' "$value" | sed 's/"/\\"/g')

    echo "\"$key\": \"$value_escaped\"," >> "$CONFIG_FILE"
  done < "$ENV_FILE"

  # Удаление последней запятой
  sed -i '$s/,$//' "$CONFIG_FILE"
  echo "}" >> "$CONFIG_FILE"
else
  echo "{}" > "$CONFIG_FILE"
fi

# Запуск nginx
exec nginx -g "daemon off;"
