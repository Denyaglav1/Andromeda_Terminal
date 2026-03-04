# Публикация @andromeda/design-system для команды

## TL;DR — Три варианта

| Вариант | Стоимость | Приватность | Работает в Figma Make |
|---------|-----------|-------------|----------------------|
| **npm Organization** | $7/user/мес | Приватный | Да |
| **GitHub Packages** | Бесплатно (в рамках GitHub) | Приватный | С настройкой `.npmrc` |
| **Public npm** | Бесплатно | Публичный | Да, из коробки |

---

## Вариант 1: npm Organization (рекомендуемый)

Самый простой способ для команды. Пакет приватный, доступен только членам организации.

### Шаг 1 — Создать организацию на npmjs.com

1. Зайти на [npmjs.com/signup](https://www.npmjs.com/signup)
2. Создать организацию (напр. `@andromeda-research`)
3. Добавить коллег как членов организации

### Шаг 2 — Настроить package.json

```json
{
  "name": "@andromeda-research/design-system",
  "version": "0.1.0",
  "publishConfig": {
    "access": "restricted"
  }
}
```

### Шаг 3 — Собрать и опубликовать

```bash
cd packages/andromeda-ds

# Скопировать компоненты из основного проекта
./scripts/copy-components.sh

# Установить зависимости и собрать
pnpm install
pnpm build

# Авторизоваться в npm
npm login

# Опубликовать (приватно)
npm publish
```

### Шаг 4 — Использовать в другом Figma Make проекте

В новом проекте Figma Make попросить AI:

> «Установи пакет @andromeda-research/design-system»

AI вызовет `install_package`, и пакет подтянется из npm.

Затем в коде:
```tsx
import '@andromeda-research/design-system/styles.css';
import { DSButton, DSTable, andromedaTheme } from '@andromeda-research/design-system';
```

### Шаг 5 — Обновление версий

```bash
# Поднять версию
npm version patch   # 0.1.0 → 0.1.1 (баг-фикс)
npm version minor   # 0.1.1 → 0.2.0 (новый компонент)
npm version major   # 0.2.0 → 1.0.0 (breaking change)

# Пересобрать и опубликовать
pnpm build
npm publish
```

---

## Вариант 2: GitHub Packages (бесплатный приватный)

Хорош, если команда уже использует GitHub.

### Шаг 1 — Создать репозиторий

```bash
# Создать отдельный репозиторий
gh repo create andromeda-research/design-system --private
cd design-system

# Скопировать содержимое /packages/andromeda-ds/ сюда
```

### Шаг 2 — Настроить package.json

```json
{
  "name": "@andromeda-research/design-system",
  "version": "0.1.0",
  "repository": {
    "type": "git",
    "url": "https://github.com/andromeda-research/design-system.git"
  },
  "publishConfig": {
    "registry": "https://npm.pkg.github.com"
  }
}
```

### Шаг 3 — Создать GitHub Actions для автопубликации

Файл `.github/workflows/publish.yml`:

```yaml
name: Publish Package

on:
  release:
    types: [created]

jobs:
  publish:
    runs-on: ubuntu-latest
    permissions:
      packages: write
      contents: read
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          registry-url: https://npm.pkg.github.com
      - run: pnpm install
      - run: pnpm build
      - run: npm publish
        env:
          NODE_AUTH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

### Шаг 4 — Настроить .npmrc в consumer-проектах

Каждый разработчик/аккаунт Figma Make должен иметь `.npmrc`:

```
@andromeda-research:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=ghp_YOUR_PERSONAL_ACCESS_TOKEN
```

---

## Вариант 3: Public npm (самый простой)

Если дизайн-система не содержит конфиденциальных данных.

### Шаг 1 — Опубликовать как public

```json
{
  "name": "@andromeda-research/design-system",
  "publishConfig": {
    "access": "public"
  }
}
```

```bash
npm publish --access public
```

### Шаг 2 — Готово!

Любой Figma Make проект может установить пакет:

> «Установи @andromeda-research/design-system»

---

## Как использовать в Figma Make проекте

### 1. Начальная настройка

Попросить AI в новом Figma Make проекте:

> «Установи пакет @andromeda-research/design-system, настрой MantineProvider
> с andromedaTheme и andromedaCSSResolver, зарегистрируй ECharts-тему.
> Используй DS-компоненты для интерфейса.»

### 2. Что AI создаст

**App.tsx:**
```tsx
import '@andromeda-research/design-system/styles.css';
import { MantineProvider } from '@mantine/core';
import {
  andromedaTheme,
  andromedaCSSResolver,
  registerAndromedaTheme,
} from '@andromeda-research/design-system';

registerAndromedaTheme();

export default function App() {
  return (
    <MantineProvider
      theme={andromedaTheme}
      cssVariablesResolver={andromedaCSSResolver}
      defaultColorScheme="dark"
    >
      {/* Страницы приложения */}
    </MantineProvider>
  );
}
```

**Любая страница:**
```tsx
import {
  DSButton, DSInput, DSSelect, DSTable,
  DSModal, DSTabs, DSTab, DSBadge,
  DSChart, DSSparkline,
} from '@andromeda-research/design-system';

function Dashboard() {
  return (
    <div>
      <DSButton variant="primary">Сохранить</DSButton>
      <DSChart type="line" data={data} series={series} />
      <DSTable columns={columns} data={rows} />
    </div>
  );
}
```

### 3. Guidelines.md для нового проекта

Создать `Guidelines.md` в новом проекте, чтобы AI знал про дизайн-систему:

```markdown
# Project Guidelines

## Design System
This project uses `@andromeda-research/design-system` — an Andromeda-style
React design system.

### Setup (already done)
- CSS tokens imported via `@andromeda-research/design-system/styles.css`
- MantineProvider configured with `andromedaTheme` and `andromedaCSSResolver`
- ECharts theme registered via `registerAndromedaTheme()`

### Rules
- Always use DS components (DSButton, DSInput, DSTable, etc.) instead of
  creating custom UI elements.
- Use `var(--ds-*)` CSS variables for colors.
- For ECharts canvas, use `useChartColors()` hook for hex values.
- Use `DS_PALETTE` array for data-viz colors.
- Do not create new color tokens — use existing ones.

### Available Components
DSButton, DSInput, DSSelect, DSCheckbox, DSSwitch, DSTooltip,
DSModal, DSConfirmDialog, DSTabs/DSTab, DSMenu, DSBadge, DSTag,
DSSegmentButton/DSSegment, DSCalendar, DSSectionHeader, DSSourceBadge,
DSTable, DSLegend, DSSparkline, DSChartGrid, DSChart (14 types),
DSCustomDropdown

### Color Tokens
- `--ds-bg-primary` — main background (#131722 dark / #F8FAFE light)
- `--ds-bg-secondary` — card background (#191F2D dark / #FFFFFF light)
- `--ds-text-primary` — main text (#E0E1E2 dark / #131722 light)
- `--ds-text-secondary` — secondary text
- `--ds-text-gray-dark` — muted text (#677C9C)
- `--ds-border-primary` — borders (#2A2E39 dark / #E9F1F6 light)
- `--ds-blue-6` — accent (#5A8CFF)
- `--ds-green-6` — positive (#1FC989)
- `--ds-red-6` — negative (#EA3943)
```

---

## Workflow: Обновление дизайн-системы

```
┌───────────────────┐       ┌──────────────────┐       ┌────────────────────┐
│  Основной проект  │       │  Пакет DS         │       │  Consumer-проекты  │
│  (Figma Make #1)  │──────>│  (npm/GitHub)     │──────>│  (Figma Make #2-N) │
│                   │ copy  │                   │ install│                   │
│  ds-button.tsx    │ build │  dist/index.js    │       │  import { DS... }  │
│  ds-table.tsx     │ pub   │  dist/styles.css  │       │                   │
│  theme.css        │       │  dist/index.d.ts  │       │                   │
└───────────────────┘       └──────────────────┘       └────────────────────┘
```

1. Обновить компонент в основном проекте
2. Запустить `copy-components.sh` + `pnpm build`
3. Поднять версию: `npm version patch`
4. Опубликовать: `npm publish`
5. В consumer-проектах: `npm update @andromeda-research/design-system`

---

## FAQ

### Q: Нужно ли устанавливать Mantine в consumer-проекте?
**A:** Да, `@mantine/core` — peer dependency. Установить:
```bash
pnpm add @mantine/core @mantine/hooks
```

### Q: Нужен ли ECharts если я не использую графики?
**A:** Нет, `echarts` — optional peer dependency. Если не устанавливать,
компоненты DSChart/DSSparklineChart не будут работать, остальные — будут.

### Q: Как обновить пакет в Figma Make?
**A:** Попросить AI:
> «Обнови пакет @andromeda-research/design-system до последней версии»

### Q: Можно ли расширять DS в consumer-проекте?
**A:** Да, создавайте обёртки:
```tsx
import { DSButton } from '@andromeda-research/design-system';

export function SaveButton(props) {
  return <DSButton variant="primary" leftIcon={<Save />} {...props}>Сохранить</DSButton>;
}
```

### Q: Что если я поменяю компонент в consumer-проекте?
**A:** Изменения останутся локальными. При обновлении пакета они не потеряются
(вы импортируете из пакета, а не модифицируете его файлы).