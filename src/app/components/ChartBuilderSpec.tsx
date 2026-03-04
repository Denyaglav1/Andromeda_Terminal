import React, { useState } from 'react';
import { Link } from 'react-router';
import { Header } from './Header';
import { DSTabs, DSTab } from './ui/ds-tabs';

/* ========================================================================
   Chart Builder — Product & Technical Specification
   Version 1.0 | February 2026
   ======================================================================== */

/* ─── Section Component ─── */
function Section({ id, title, level = 2, children }: { id: string; title: string; level?: 2 | 3 | 4; children: React.ReactNode }) {
  const Tag = `h${level}` as 'h2' | 'h3' | 'h4';
  const styles = {
    2: 'text-[20px] leading-[28px] font-semibold text-on-surface mt-10 mb-4 pb-2 border-b border-edge',
    3: 'text-[16px] leading-[22px] font-semibold text-on-surface mt-6 mb-3',
    4: 'text-[14px] leading-[20px] font-semibold text-on-surface mt-4 mb-2',
  };
  return (
    <section id={id} className="scroll-mt-20">
      <Tag className={styles[level]}>{title}</Tag>
      {children}
    </section>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="text-[13px] leading-[20px] text-on-surface-muted mb-3">{children}</p>;
}
function Ul({ children }: { children: React.ReactNode }) {
  return <ul className="list-disc pl-5 mb-4 space-y-1 text-[13px] leading-[20px] text-on-surface-muted">{children}</ul>;
}
function Ol({ children }: { children: React.ReactNode }) {
  return <ol className="list-decimal pl-5 mb-4 space-y-1 text-[13px] leading-[20px] text-on-surface-muted">{children}</ol>;
}
function Code({ children }: { children: React.ReactNode }) {
  return <code className="px-1.5 py-0.5 rounded bg-surface-alt text-turquoise-6 text-[12px] font-mono">{children}</code>;
}
function CodeBlock({ title, children }: { title?: string; children: string }) {
  return (
    <div className="mb-4 rounded-lg border border-edge overflow-hidden">
      {title && <div className="px-3 py-1.5 bg-surface-alt border-b border-edge text-[11px] text-on-surface-subtle font-semibold">{title}</div>}
      <pre className="p-3 bg-surface overflow-x-auto text-[11px] leading-[16px] font-mono text-on-surface-muted whitespace-pre">{children}</pre>
    </div>
  );
}
function Table({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="mb-4 overflow-x-auto rounded-lg border border-edge">
      <table className="w-full text-[12px] leading-[16px]">
        <thead>
          <tr className="bg-surface-alt">
            {headers.map((h, i) => (
              <th key={i} className="px-3 py-2 text-left font-semibold text-on-surface-subtle border-b border-edge whitespace-nowrap">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} className="border-b border-edge last:border-b-0 hover:bg-surface-alt/30">
              {row.map((cell, ci) => (
                <td key={ci} className="px-3 py-2 text-on-surface-muted whitespace-pre-line">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
function Badge({ color, children }: { color: 'blue' | 'green' | 'orange' | 'red' | 'purple' | 'gray'; children: React.ReactNode }) {
  const cls: Record<string, string> = {
    blue: 'bg-blue-9 text-blue-4',
    green: 'bg-green-9 text-green-4',
    orange: 'bg-orange-9 text-orange-4',
    red: 'bg-red-9 text-red-4',
    purple: 'bg-purple-9 text-purple-4',
    gray: 'bg-gray-9 text-gray-4',
  };
  return <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-semibold ${cls[color]}`}>{children}</span>;
}
function Note({ type = 'info', children }: { type?: 'info' | 'warn' | 'critical'; children: React.ReactNode }) {
  const styles = {
    info: 'border-blue-7 bg-blue-9/30',
    warn: 'border-orange-7 bg-orange-9/30',
    critical: 'border-red-7 bg-red-9/30',
  };
  const labels = { info: 'INFO', warn: 'WARNING', critical: 'CRITICAL' };
  const labelColors = { info: 'text-blue-4', warn: 'text-orange-4', critical: 'text-red-4' };
  return (
    <div className={`mb-4 p-3 rounded-lg border ${styles[type]}`}>
      <div className={`text-[10px] font-semibold mb-1 ${labelColors[type]}`}>{labels[type]}</div>
      <div className="text-[12px] leading-[18px] text-on-surface-muted">{children}</div>
    </div>
  );
}

/* ─── Navigation ─── */
const TOC = [
  { id: 'context', label: '1. Контекст и цели' },
  { id: 'chart-types', label: '2. Типы графиков' },
  { id: 'data-import', label: '3. Данные и импорт' },
  { id: 'axes', label: '4. Оси и шкалы' },
  { id: 'legend', label: '5. Легенда и подписи' },
  { id: 'design-system', label: '6. Design System' },
  { id: 'rendering', label: '7. Рендеринг' },
  { id: 'svg-export', label: '8. Экспорт SVG' },
  { id: 'ux-flows', label: '9. UX-потоки' },
  { id: 'validation', label: '10. Валидация' },
  { id: 'nfr', label: '11. НФТ' },
  { id: 'data-model', label: '12. Модель данных' },
  { id: 'events', label: '13. Событийная модель' },
  { id: 'render-options', label: '14. Сравнение рендереров' },
  { id: 'ds-components', label: '15. Компоненты DS' },
  { id: 'acceptance', label: '16. Критерии приёмки' },
  { id: 'svg-checklist', label: '17. Чек-лист SVG' },
  { id: 'architecture', label: '18. Архитектура' },
  { id: 'risks', label: '19. Риски и решения' },
];

/* ═══════════════════════════════════════════════════════
   Main Page
   ═══════════════════════════════════════════════════════ */

export function ChartBuilderSpec() {
  const [activeSection, setActiveSection] = useState('context');

  return (
    <div className="min-h-screen flex flex-col bg-background text-on-surface font-sans selection:bg-blue-6/30">
      <Header />

      <div className="flex flex-1 overflow-hidden">
        {/* ── Sidebar TOC ── */}
        <nav className="w-[240px] shrink-0 border-r border-edge bg-surface overflow-y-auto py-4 px-3">
          <Link to="/" className="flex items-center gap-1.5 mb-4 text-[11px] text-blue-6 hover:text-blue-4 transition-colors">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M6 8L2 5L6 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Dashboard
          </Link>
          <div className="text-[10px] font-semibold text-on-surface-subtle uppercase tracking-wider mb-3 px-1">
            Chart Builder Spec v1.0
          </div>
          {TOC.map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setActiveSection(item.id)}
              className={`block px-2 py-1.5 rounded text-[11px] leading-[16px] transition-colors mb-0.5 ${
                activeSection === item.id
                  ? 'bg-blue-9 text-blue-4 font-semibold'
                  : 'text-on-surface-subtle hover:text-on-surface hover:bg-surface-alt/50'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* ── Content ── */}
        <main className="flex-1 overflow-y-auto px-8 py-6 max-w-[960px]">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-[28px] leading-[36px] font-semibold text-on-surface">Chart Builder</h1>
              <Badge color="blue">PRD + TechSpec</Badge>
              <Badge color="gray">v1.0</Badge>
            </div>
            <p className="text-[13px] text-on-surface-subtle">
              Product &amp; Technical Specification | Andromeda Platform | February 2026
            </p>
          </div>

          {/* ═══════════ 1. Context & Goals ═══════════ */}
          <Section id="context" title="1. Контекст и цели">
            <P>
              Chart Builder — встраиваемый модуль (micro-frontend) платформы Andromeda, позволяющий пользователям интерактивно 
              создавать графики из табличных/финансовых данных и экспортировать результат в SVG-файл, где все текстовые элементы 
              сохраняются как редактируемые <Code>{`<text>`}</Code> / <Code>{`<tspan>`}</Code> узлы с явным указанием 
              <Code>font-family</Code>, <Code>font-size</Code>, <Code>font-weight</Code>.
            </P>

            <Section id="context-goals" title="1.1 Ключевые цели" level={3}>
              <Ol>
                <li><strong>Импорт данных</strong> — вставка из Excel / Google Sheets через clipboard, парсинг табуляций, чисел, дат, пустых значений.</li>
                <li><strong>Интерактивное конфигурирование</strong> — выбор типа графика, назначение осей, цветов, стилей рядов.</li>
                <li><strong>Множество типов диаграмм</strong> — 13+ типов с возможностью комбинирования рядов.</li>
                <li><strong>SVG-экспорт с editable text</strong> — текст остаётся текстом, не кривыми.</li>
                <li><strong>Design System compliance</strong> — все UI-элементы и стили графика строго из токенов Andromeda DS.</li>
              </Ol>
            </Section>

            <Section id="context-scope" title="1.2 Scope / Out of scope" level={3}>
              <Table
                headers={['In Scope', 'Out of Scope']}
                rows={[
                  ['Clipboard paste (Excel / Sheets)', 'Файловый импорт CSV/XLSX (Phase 2)'],
                  ['13 типов графиков + смешанные', 'Real-time data streaming'],
                  ['Multi-axis (Y1 + Y2)', '3D-графики'],
                  ['SVG-экспорт (screen + print)', 'PNG/PDF экспорт (Phase 2)'],
                  ['Frontend-only state (zustand/context)', 'Backend persistence (Supabase)'],
                  ['Responsive UI (1280px+)', 'Mobile-first layout'],
                ]}
              />
            </Section>
          </Section>

          {/* ═══════════ 2. Chart Types ═══════════ */}
          <Section id="chart-types" title="2. Поддерживаемые типы графиков">
            <Table
              headers={['#', 'Тип', 'ID', 'Ориентация', 'Категория', 'Допускает смешивание']}
              rows={[
                ['1', 'Line Chart', 'line', 'H / V', 'Time-series', 'Да (с bar, area)'],
                ['2', 'Bar Chart', 'bar', 'Vertical', 'Time-series / Category', 'Да (с line, area)'],
                ['3', 'Bar Chart (Horizontal)', 'bar-h', 'Horizontal', 'Category', 'Да (с line-h)'],
                ['4', 'Candlestick', 'candlestick', 'Vertical', 'OHLC', 'Нет'],
                ['5', 'Pie', 'pie', '-', 'Part-to-whole', 'Нет'],
                ['6', 'Donut', 'donut', '-', 'Part-to-whole', 'Нет'],
                ['7', 'Scatter', 'scatter', 'XY', 'Correlation', 'Нет'],
                ['8', 'Area', 'area', 'Vertical', 'Time-series', 'Да (с line, bar)'],
                ['9', '100% Area', 'area-norm', 'Vertical', 'Time-series', 'Нет (все ряды = 100%)'],
                ['10', 'Stacked Bar/Column', 'bar-stacked', 'V / H', 'Time-series / Category', 'Нет (внутри стека)'],
                ['11', '100% Stacked Bar/Column', 'bar-stacked-norm', 'V / H', 'Category', 'Нет'],
                ['12', 'Bar Horizontal (линейчатая)', 'bar-h', 'Horizontal', 'Category', 'Ограничено'],
                ['13', '100% Bar Horizontal', 'bar-h-norm', 'Horizontal', 'Category', 'Нет'],
              ]}
            />

            <Section id="chart-types-terms" title="2.1 Терминология: Bar vs Column vs Линейчатая" level={3}>
              <P>
                В данной спецификации используется следующее разграничение:
              </P>
              <Ul>
                <li><strong>Bar (Vertical) = Column</strong> — вертикальные столбцы, ось X внизу, значения по Y.</li>
                <li><strong>Bar (Horizontal) = Линейчатая</strong> — горизонтальные полосы, категории по Y-оси, значения по X. Термин «линейчатая диаграмма» является синонимом «Bar Horizontal».</li>
                <li><strong>100% Bar Horizontal = Нормированная линейчатая</strong> — то же, но значения нормированы к 100%.</li>
              </Ul>
            </Section>

            <Section id="chart-types-mixing" title="2.2 Правила совместимости (смешивание типов рядов)" level={3}>
              <P>
                Пользователь может для каждого временного ряда выбрать свой тип отображения в рамках одного графика.
                Допустимые комбинации:
              </P>
              <Table
                headers={['Комбинация', 'Допустимо', 'Примечание']}
                rows={[
                  ['line + bar (vertical)', 'Да', 'Классический combo chart; bar на primary Y, line на secondary Y'],
                  ['line + area', 'Да', 'Area рендерится под line'],
                  ['bar + area', 'Да', 'Area фоном, bar поверх'],
                  ['line + bar + area', 'Да', 'Z-order: area -> bar -> line'],
                  ['pie + любой', 'Нет', 'Pie/Donut — отдельный режим, один «chart canvas»'],
                  ['donut + любой', 'Нет', 'Аналогично pie'],
                  ['candlestick + любой', 'Нет', 'OHLC — изолированный режим (Volume bar overlay — Phase 2)'],
                  ['scatter + любой', 'Нет', 'Scatter использует собственную XY-систему координат'],
                  ['stacked + line', 'Да', 'line overlay на stacked bar'],
                  ['stacked + bar (non-stacked)', 'Нет', 'Конфликт позиционирования'],
                  ['100% area + любой', 'Нет', 'Все ряды нормированы, смешивание нарушает логику'],
                  ['100% stacked + любой', 'Нет', 'Аналогично'],
                  ['bar-h + line-h', 'Да', 'Горизонтальные оси'],
                  ['bar-h + bar-v', 'Нет', 'Разные ориентации осей'],
                ]}
              />

              <Note type="info">
                При попытке добавить несовместимый тип ряда UI показывает inline-предупреждение 
                и предлагает переключить существующие ряды или создать отдельный график.
              </Note>
            </Section>

            <Section id="chart-types-candlestick" title="2.3 Candlestick: маппинг данных" level={3}>
              <P>
                Для свечного графика требуются 4 обязательные колонки: <Code>Open</Code>, <Code>High</Code>, <Code>Low</Code>, <Code>Close</Code> и 1 колонка для X-оси (дата/время).
              </P>
              <Ul>
                <li>Авто-определение: если в данных есть колонки с именами, содержащими O/H/L/C, предлагается автоматический маппинг.</li>
                <li>Цвета: <Code>--ds-green-6 (#1FC989)</Code> для up-свечи, <Code>--ds-red-6 (#EA3943)</Code> для down-свечи.</li>
                <li>Тело свечи: fill, фитили (wicks): stroke 1px того же цвета.</li>
              </Ul>
            </Section>

            <Section id="chart-types-pie" title="2.4 Pie / Donut" level={3}>
              <Ul>
                <li>Входные данные: 1 колонка категорий + 1 колонка числовых значений.</li>
                <li>Donut: внутренний радиус = 60% от внешнего (настраиваемо 40%–80%).</li>
                <li>Подписи: имя категории + значение / % — рядом с сектором или через выноски (leader lines).</li>
                <li>Легенда: отдельный блок с цветами из палитры DS.</li>
                <li>Цвета секторов: последовательно из palette <Code>chart-1..chart-5</Code>, затем цикл по scale-6 каждой гаммы.</li>
              </Ul>
            </Section>
          </Section>

          {/* ═══════════ 3. Data & Import ═══════════ */}
          <Section id="data-import" title="3. Данные и импорт (Excel Paste)">
            <Section id="data-import-flow" title="3.1 Механизм вставки" level={3}>
              <Ol>
                <li>Пользователь копирует прямоугольный диапазон в Excel / Google Sheets.</li>
                <li>В интерфейсе Chart Builder фокус на <Code>{`<textarea>`}</Code> «Вставьте данные» (или ячейка таблицы).</li>
                <li>Пользователь нажимает Ctrl+V / Cmd+V.</li>
                <li>Обработчик <Code>onPaste</Code> перехватывает <Code>text/plain</Code> из clipboard.</li>
                <li>Парсинг: разделитель строк = <Code>\n</Code> / <Code>\r\n</Code>; разделитель колонок = <Code>\t</Code>.</li>
                <li>Результат: 2D-массив строк → далее типизация.</li>
              </Ol>
            </Section>

            <Section id="data-import-parsing" title="3.2 Парсинг и типизация" level={3}>
              <Table
                headers={['Тип', 'Паттерн распознавания', 'Примеры']}
                rows={[
                  ['Число (int)', '/^[\\-]?[\\d\\s\\u00a0]+$/', '1 234, -56, 1234'],
                  ['Число (float, точка)', '/^[\\-]?[\\d\\s\\u00a0]*\\.[\\d]+$/', '1234.56, -0.5'],
                  ['Число (float, запятая)', '/^[\\-]?[\\d\\s\\u00a0]*,[\\d]+$/', '1 234,56 — если не найдена точка'],
                  ['Процент', '/^[\\-]?[\\d.,\\s]+%$/', '12,5%, -3.2%'],
                  ['Дата (ISO)', '/^\\d{4}-\\d{2}-\\d{2}/', '2025-03-15'],
                  ['Дата (RU)', '/^\\d{2}\\.\\d{2}\\.\\d{4}/', '15.03.2025'],
                  ['Дата (US)', '/^\\d{2}\\/\\d{2}\\/\\d{4}/', '03/15/2025'],
                  ['Квартал', '/^[QК]\\d\\s*\\d{4}|\\d{4}[QК]\\d/', 'Q1 2025, 2025Q3'],
                  ['Пустое', 'null, undefined, "", "-", "н/д"', '- , пусто, н/д'],
                  ['Текст (fallback)', 'Всё остальное', 'Газпром, Revenue'],
                ]}
              />

              <Section id="data-import-locale" title="3.2.1 Обработка локалей" level={4}>
                <P>
                  Разделитель тысяч (пробел / неразрывный пробел <Code>\u00a0</Code>) удаляется при парсинге чисел.
                  Запятая как десятичный разделитель: если в колонке ≥ 80% значений содержат запятую и НЕ содержат точку, 
                  запятая интерпретируется как десятичный разделитель. Иначе — точка. Эвристика применяется поколоночно.
                </P>
              </Section>
            </Section>

            <Section id="data-import-assignment" title="3.3 Назначение колонок" level={3}>
              <P>
                После вставки данных пользователю показывается превью-таблица с авто-определёнными типами. 
                Над каждой колонкой — <Code>DSSelect</Code> с ролями:
              </P>
              <Ul>
                <li><strong>X-ось (категории / время)</strong> — можно выбрать ровно 1 колонку.</li>
                <li><strong>Y-ряд</strong> — любое количество числовых колонок.</li>
                <li><strong>Метки (label)</strong> — текстовая колонка для подписей точек (опционально).</li>
                <li><strong>Open / High / Low / Close</strong> — для candlestick (по одной колонке).</li>
                <li><strong>Игнорировать</strong> — колонка не используется.</li>
              </Ul>
              <P>
                Авто-присвоение: первая текстовая/датовая колонка → X; все числовые → Y-ряды.
              </P>
            </Section>

            <Section id="data-import-series" title="3.4 Управление рядами" level={3}>
              <Ul>
                <li>Добавление ряда: кнопка «+ Добавить ряд» → dropdown с доступными Y-колонками.</li>
                <li>Удаление ряда: иконка (X) на элементе ряда в правой панели.</li>
                <li>Для каждого ряда: выбор типа (line/bar/area/...), цвет (из палитры токенов), ось Y (Y1/Y2), толщина линии, маркер (circle/square/none).</li>
                <li>Drag-and-drop для изменения порядка рядов (z-order).</li>
              </Ul>
            </Section>
          </Section>

          {/* ═══════════ 4. Axes & Scales ═══════════ */}
          <Section id="axes" title="4. Оси и шкалы">
            <Section id="axes-y" title="4.1 Оси Y" level={3}>
              <P>
                Поддерживается до 2 осей Y: <strong>Y1 (левая)</strong> и <strong>Y2 (правая)</strong>.
                Ограничение на 2 оси — UX-решение для читаемости финансовых графиков.
              </P>
              <Table
                headers={['Параметр', 'Элемент UI', 'Описание']}
                rows={[
                  ['Label (название)', 'DSInput size="xs"', 'Текстовая подпись оси (напр. "Млрд. руб.")'],
                  ['Формат чисел', 'DSSelect size="xs"', 'auto | decimal(0-6) | % | currency(RUB/USD/EUR) | compact(K/M/B)'],
                  ['Min', 'DSInput size="xs" type="number"', 'Минимум (auto или manual)'],
                  ['Max', 'DSInput size="xs" type="number"', 'Максимум (auto или manual)'],
                  ['Шкала', 'DSSegmentButton size="xs"', 'Линейная | Логарифмическая'],
                  ['Font size (тики)', 'DSSelect size="xs"', '8 | 9 | 10 | 11 | 12 px'],
                  ['Сетка', 'DSCheckbox size="sm"', 'Показать горизонтальные линии сетки'],
                  ['Стиль сетки', 'DSSegmentButton', 'Сплошная | Пунктирная'],
                ]}
              />
              <Note type="info">
                Логарифмическая шкала доступна как опция (optional, Phase 1). 
                При log scale значения {`<= 0`} отображаются как пустые с предупреждением.
              </Note>
            </Section>

            <Section id="axes-x" title="4.2 Ось X" level={3}>
              <Table
                headers={['Параметр', 'Элемент UI', 'Описание']}
                rows={[
                  ['Тип', 'DSSegmentButton', 'Время | Категории (авто-определяется)'],
                  ['Label', 'DSInput size="xs"', 'Подпись оси X'],
                  ['Формат дат', 'DSSelect', 'YYYY | MM.YYYY | DD.MM.YY | Q[N] YYYY | auto'],
                  ['Поворот подписей', 'DSSegmentButton', '0 | 45 | 90 градусов'],
                  ['Font size', 'DSSelect size="xs"', '8-12px'],
                  ['Вертикальная сетка', 'DSCheckbox', 'Показать вертикальные линии'],
                ]}
              />
            </Section>
          </Section>

          {/* ═══════════ 5. Legend & Labels ═══════════ */}
          <Section id="legend" title="5. Легенда и подписи">
            <Section id="legend-legend" title="5.1 Легенда" level={3}>
              <Ul>
                <li><strong>Позиция:</strong> DSSegmentButton — Top | Bottom | Left | Right | Hidden.</li>
                <li><strong>Переименование:</strong> клик по имени элемента легенды → inline-редактирование (DSInput).</li>
                <li><strong>Порядок:</strong> drag-and-drop для изменения порядка.</li>
                <li><strong>Скрытие ряда:</strong> клик по элементу легенды toggles visibility (dimmed + strikethrough = hidden).</li>
                <li><strong>Маркеры:</strong> цветной квадрат / кружок / линия — соответствует типу ряда.</li>
                <li><strong>Стилизация:</strong> font: <Code>--text-caption (12px)</Code>, цвет: <Code>--ds-text-secondary</Code>.</li>
              </Ul>
            </Section>

            <Section id="legend-datalabels" title="5.2 Подписи данных (Data Labels)" level={3}>
              <Ul>
                <li><strong>Включение:</strong> DSCheckbox per-series «Показать значения».</li>
                <li><strong>Формат:</strong> наследует формат числа Y-оси.</li>
                <li><strong>Позиция:</strong> auto (above/inside) или выбор: Above | Center | Below.</li>
                <li><strong>Font:</strong> <Code>--text-caption-small (10px)</Code>, цвет наследует ряд.</li>
              </Ul>
            </Section>

            <Section id="legend-tooltip" title="5.3 Tooltip (интерактивный режим)" level={3}>
              <P>
                При наведении на точку/столбец графика показывается <Code>DSChartTooltip</Code> из DS-библиотеки:
              </P>
              <Ul>
                <li>Title: значение X-оси (дата/категория).</li>
                <li>Items: legend color + series name + value для каждого ряда.</li>
                <li>Crosshair: вертикальная / горизонтальная пунктирная линия.</li>
                <li>Tooltip не попадает в SVG-экспорт.</li>
              </Ul>
            </Section>
          </Section>

          {/* ═══════════ 6. Design System ═══════════ */}
          <Section id="design-system" title="6. Стиль и Design System (строгие ограничения)">
            <Note type="critical">
              Все UI-элементы (формы, таблицы, панели, модалки, тосты) — строго из имеющейся DS-библиотеки. 
              Все стили графика (цвета, шрифты, толщина линий, радиусы, сетка) — только из токенов/тем дизайн-системы.
              Нельзя использовать произвольные CSS-значения вне токенов.
            </Note>

            <Section id="design-system-tokens" title="6.1 Требуемые токены" level={3}>
              <Table
                headers={['Категория', 'Токен', 'Значение', 'Применение']}
                rows={[
                  ['Typography', '--font-family', "'Inter', sans-serif", 'Все текстовые элементы SVG и UI'],
                  ['Typography', '--text-caption / --text-caption-small', '12px / 10px', 'Подписи осей, легенда, data labels'],
                  ['Typography', '--font-weight-normal / -medium / -semibold', '400 / 500 / 600', 'Подписи значений / Label оси / Заголовок'],
                  ['Color', '--chart-1..5', 'blue-6, green-6, orange-6, purple-6, turquoise-6', 'Палитра рядов (по умолчанию)'],
                  ['Color', '--ds-dark-4', '#2A2E39', 'Сетка, borders'],
                  ['Color', '--ds-dark-6', '#131722', 'Фон графика (опционально)'],
                  ['Color', '--ds-gray-6', '#677C9C', 'Текст подписей осей'],
                  ['Color', '--ds-text-primary', '#E0E1E2', 'Основной текст'],
                  ['Color', '--ds-green-6 / --ds-red-6', '#1FC989 / #EA3943', 'Candlestick up/down'],
                  ['Spacing', 'Tailwind gap/px scale', '4px, 8px, 12px, 16px', 'Отступы в панелях настроек'],
                  ['Border', '--ds-border-primary', '#2A2E39', 'Рамка графика, оси'],
                  ['Radius', '--radius', '0.625rem (10px)', 'Скругления кнопок и панелей'],
                ]}
              />
            </Section>

            <Section id="design-system-svg-consistency" title="6.2 Консистентность в SVG" level={3}>
              <P>
                <strong>Выбранный подход: Вариант A — inline attributes</strong> (обоснование в секции 8).
              </P>
              <Ul>
                <li>Каждый <Code>{`<text>`}</Code> элемент в SVG получает <Code>font-family="'Inter', sans-serif"</Code>, <Code>font-size="10"</Code>, <Code>font-weight="500"</Code>, <Code>fill="#677C9C"</Code> как inline-атрибуты.</li>
                <li>Дополнительно: <Code>{`<style>`}</Code> блок в корне SVG с fallback-правилами для шрифтов.</li>
                <li>Fallback шрифтов: <Code>'Inter', 'Helvetica Neue', 'Arial', sans-serif</Code>.</li>
              </Ul>
              <CodeBlock title="SVG Font Fallback Block">
{`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');
    text { font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif; }
  </style>
  <text x="50" y="30" 
    font-family="'Inter', sans-serif" 
    font-size="12" 
    font-weight="600" 
    fill="#E0E1E2">
    Chart Title
  </text>
  <!-- ... -->
</svg>`}
              </CodeBlock>
            </Section>
          </Section>

          {/* ═══════════ 7. Rendering ═══════════ */}
          <Section id="rendering" title="7. Рендеринг графиков">
            <Section id="rendering-arch" title="7.1 Архитектура рендера: SVG-first" level={3}>
              <Note type="info">
                Выбранная стратегия: <strong>SVG-first</strong>. Один и тот же SVG DOM используется как для 
                интерактивного отображения на экране, так и для экспорта. Это гарантирует pixel-perfect 
                соответствие между preview и файлом.
              </Note>
              <Ul>
                <li><strong>Интерактивный рендер:</strong> SVG рендерится в DOM через React. Hover/click обработчики навешиваются на SVG-элементы.</li>
                <li><strong>Tooltip/crosshair:</strong> HTML-overlay поверх SVG (не часть SVG). Реализован через <Code>DSChartTooltip</Code> (абсолютное позиционирование).</li>
                <li><strong>Экспорт:</strong> <Code>svgElement.outerHTML</Code> → удаление интерактивных атрибутов → Blob → download.</li>
                <li><strong>Анимации:</strong> CSS transitions на SVG-элементах для плавных переходов при смене данных (не экспортируются).</li>
              </Ul>
            </Section>

            <Section id="rendering-layers" title="7.2 Слои рендеринга (z-order)" level={3}>
              <Ol>
                <li><Code>background</Code> — фон графика (rect, fill).</li>
                <li><Code>grid</Code> — горизонтальные/вертикальные линии сетки.</li>
                <li><Code>areas</Code> — заполненные области (area charts).</li>
                <li><Code>bars</Code> — столбцы/полосы.</li>
                <li><Code>lines</Code> — линии.</li>
                <li><Code>markers</Code> — точки-маркеры на линиях.</li>
                <li><Code>data-labels</Code> — подписи значений.</li>
                <li><Code>axes</Code> — линии осей, тики, подписи.</li>
                <li><Code>legend</Code> — блок легенды.</li>
                <li><Code>title</Code> — заголовок графика.</li>
              </Ol>
              <P>
                Каждый слой — отдельная <Code>{`<g>`}</Code> группа в SVG с соответствующим <Code>data-layer</Code> атрибутом.
              </P>
            </Section>

            <Section id="rendering-clip" title="7.3 Clipping" level={3}>
              <P>
                Область построения (plotting area) ограничена <Code>{`<clipPath>`}</Code>. Это предотвращает выход 
                элементов графика (линий, столбцов) за пределы осей при прокрутке/зуме.
              </P>
              <CodeBlock title="ClipPath Example">
{`<defs>
  <clipPath id="plot-area">
    <rect x="60" y="20" width="700" height="420" />
  </clipPath>
</defs>
<g clip-path="url(#plot-area)" data-layer="series">
  <!-- chart content -->
</g>`}
              </CodeBlock>
            </Section>
          </Section>

          {/* ═══════════ 8. SVG Export ═══════════ */}
          <Section id="svg-export" title="8. Экспорт SVG (критически важно)">
            <Note type="critical">
              Текст в экспортированном SVG ОБЯЗАН оставаться текстом (<Code>{`<text>`}</Code>, <Code>{`<tspan>`}</Code>).
              Конвертация в <Code>{`<path>`}</Code> / outline ЗАПРЕЩЕНА.
              Файл должен быть редактируемым в Figma, Illustrator, Inkscape.
            </Note>

            <Section id="svg-export-text" title="8.1 Требования к тексту" level={3}>
              <Table
                headers={['Атрибут', 'Обязателен', 'Пример']}
                rows={[
                  ['font-family', 'Да', "'Inter', sans-serif"],
                  ['font-size', 'Да', '12 (без единиц = px в SVG)'],
                  ['font-weight', 'Да', '400 | 500 | 600'],
                  ['fill', 'Да', '#677C9C'],
                  ['letter-spacing', 'Если задан', '0.5'],
                  ['text-anchor', 'Если не start', 'middle | end'],
                  ['dominant-baseline', 'Рекомендуется', 'central | hanging | auto'],
                ]}
              />
              <P>
                Единицы <Code>font-size</Code>: в SVG по умолчанию px (user units). Указываются без суффикса.
              </P>
            </Section>

            <Section id="svg-export-viewbox" title="8.2 ViewBox и размеры" level={3}>
              <Ul>
                <li><Code>viewBox="0 0 W H"</Code> — W, H в пикселях (default 800x500).</li>
                <li><Code>width</Code> и <Code>height</Code> атрибуты на корневом <Code>{`<svg>`}</Code> — в px, равны viewBox.</li>
                <li>Масштабирование: <Code>preserveAspectRatio="xMidYMid meet"</Code>.</li>
                <li>Пользователь может изменить размер холста: 800x500, 1200x600, 1600x900, custom.</li>
              </Ul>
            </Section>

            <Section id="svg-export-styles" title="8.3 Встраивание стилей: обоснование выбора" level={3}>
              <Table
                headers={['Вариант', 'Плюсы', 'Минусы', 'Совместимость']}
                rows={[
                  ['A: Inline attributes', 'Максимальная совместимость; каждый элемент самодостаточен; работает в Figma, AI, Inkscape', 'Бо́льший размер файла; дублирование значений', 'Figma, Illustrator, Inkscape, браузеры — Отлично'],
                  ['B: <style> внутри SVG', 'Компактнее; DRY; легко менять тему', 'Figma: ограниченная поддержка CSS в SVG; Illustrator: частичная поддержка; Inkscape: ОК', 'Figma — Ограничено; AI — Частично; Inkscape — Хорошо'],
                ]}
              />
              <P>
                <strong>Решение: Вариант A (inline) + минимальный <Code>{`<style>`}</Code> блок с @import шрифта и fallback-правилами.</strong>
              </P>
              <P>
                Каждый <Code>{`<text>`}</Code> получает полный набор inline-атрибутов. Дополнительно в <Code>{`<defs>`}</Code> / <Code>{`<style>`}</Code> — 
                @import шрифта Inter из Google Fonts для корректного отображения при открытии SVG в браузере.
                Это гибридный подход: inline обеспечивает совместимость, а <Code>{`<style>`}</Code> — удобство при просмотре в вебе.
              </P>
            </Section>

            <Section id="svg-export-contents" title="8.4 Содержимое экспорта" level={3}>
              <Ul>
                <li>Фон (background rect) — если задан пользователем.</li>
                <li>Сетка (grid lines) — <Code>{`<line>`}</Code> с stroke и dasharray.</li>
                <li>Оси (axes) — линии + тики + текстовые подписи.</li>
                <li>Серии данных — <Code>{`<path>`}</Code>, <Code>{`<rect>`}</Code>, <Code>{`<circle>`}</Code> и т.д.</li>
                <li>Data labels — <Code>{`<text>`}</Code>.</li>
                <li>Легенда — <Code>{`<g>`}</Code> с markers + text.</li>
                <li>Заголовок — <Code>{`<text>`}</Code>.</li>
                <li>ClipPath — в <Code>{`<defs>`}</Code>.</li>
                <li>Z-order: порядок <Code>{`<g>`}</Code> групп = визуальный порядок.</li>
              </Ul>
            </Section>

            <Section id="svg-export-modes" title="8.5 Режимы экспорта" level={3}>
              <Table
                headers={['Режим', 'Описание', 'Параметры']}
                rows={[
                  ['Как на экране (Screen)', 'Один-в-один с preview. Font sizes, line widths = как в UI.', 'viewBox: текущие размеры'],
                  ['Для печати (Print)', 'Увеличенные шрифты и толщина линий для читаемости на бумаге.', 'printScale: 1.0–2.0x (по умолчанию 1.5x). Font sizes *= printScale. Stroke widths *= printScale.'],
                ]}
              />
            </Section>

            <Section id="svg-export-compat" title="8.6 Ограничения SVG-фич для совместимости" level={3}>
              <Ul>
                <li><strong>Нет filter:</strong> SVG filters (blur, drop-shadow) нестабильно поддерживаются в Figma/AI. Не используем.</li>
                <li><strong>Нет foreignObject:</strong> содержит HTML — не поддерживается в AI/Inkscape.</li>
                <li><strong>Нет CSS animations:</strong> статический SVG.</li>
                <li><strong>Нет use/symbol:</strong> каждый элемент рендерится явно (для совместимости).</li>
                <li><strong>Gradients:</strong> только <Code>{`<linearGradient>`}</Code> / <Code>{`<radialGradient>`}</Code> в <Code>{`<defs>`}</Code> — хорошо поддерживаются.</li>
                <li><strong>ClipPath:</strong> только <Code>{`<rect>`}</Code> внутри clipPath (круговые clipPath не поддерживаются в некоторых редакторах).</li>
              </Ul>
            </Section>
          </Section>

          {/* ═══════════ 9. UX Flows ═══════════ */}
          <Section id="ux-flows" title="9. Функциональные сценарии (UX-потоки)">
            <Section id="ux-flow-1" title="9.1 Создание графика с нуля" level={3}>
              <Ol>
                <li>Пользователь нажимает «Конструктор графиков» в Header → открывается страница Chart Builder.</li>
                <li>Состояние: пустой холст с placeholder «Вставьте данные (Ctrl+V) или введите вручную».</li>
                <li>Пользователь вставляет данные из Excel (Ctrl+V в текстовую область).</li>
                <li>Система парсит → показывает превью-таблицу с авто-типизацией.</li>
                <li>Авто-определение: X-ось (первая текстовая/датовая колонка), Y-ряды (числовые колонки).</li>
                <li>Авто-выбор типа графика: Line (по умолчанию для time-series), Bar (для категорий).</li>
                <li>Preview графика обновляется в реальном времени.</li>
                <li>Пользователь может настроить: тип, цвета, оси, легенду через правую панель.</li>
              </Ol>
            </Section>

            <Section id="ux-flow-2" title="9.2 Добавление второй оси Y" level={3}>
              <Ol>
                <li>В правой панели, секция «Ряды» → выбрать ряд.</li>
                <li>В настройках ряда: «Ось Y» → переключить с Y1 на Y2.</li>
                <li>Появляется правая Y-ось с авто-расчётом min/max.</li>
                <li>Пользователь настраивает формат чисел для Y2 (напр. «%»).</li>
              </Ol>
            </Section>

            <Section id="ux-flow-3" title="9.3 Смешанный график (combo)" level={3}>
              <Ol>
                <li>Ряд A: тип = Line (синий), ось Y1.</li>
                <li>Ряд B: тип = Bar (зелёный), ось Y1 или Y2.</li>
                <li>Система проверяет совместимость (line + bar = OK).</li>
                <li>Z-order: bars → lines (bar под линией).</li>
                <li>Легенда отображает оба ряда с разными маркерами (линия vs квадрат).</li>
              </Ol>
            </Section>

            <Section id="ux-flow-4" title="9.4 Настройка шрифтов осей" level={3}>
              <Ol>
                <li>Правая панель → секция «Ось Y1» → «Размер шрифта».</li>
                <li>DSSelect: выбрать 8 / 9 / 10 / 11 / 12 px.</li>
                <li>Preview обновляется мгновенно.</li>
                <li>Аналогично для X-оси.</li>
              </Ol>
            </Section>

            <Section id="ux-flow-5" title="9.5 Экспорт и проверка" level={3}>
              <Ol>
                <li>Нажать «Экспорт SVG» (DSButton primary).</li>
                <li>Модальное окно: выбрать режим (Screen / Print), размер холста.</li>
                <li>Нажать «Скачать».</li>
                <li>Файл .svg скачивается через Blob URL.</li>
                <li>Открыть в Figma / Illustrator → выделить любой текст → убедиться, что он редактируемый, шрифт Inter, корректный size/weight.</li>
              </Ol>
            </Section>
          </Section>

          {/* ═══════════ 10. Validation ═══════════ */}
          <Section id="validation" title="10. Ошибки и валидация">
            <Table
              headers={['Кейс', 'Поведение', 'UI']}
              rows={[
                ['Строки вместо чисел в Y-колонке', 'Пропуск значения (null) + warning', 'Жёлтый badge "N пропущено" над колонкой'],
                ['Разная длина рядов', 'Дополнение null до max length', 'Info toast "Ряды разной длины, добавлены пустые значения"'],
                ['Пустой ряд (все null)', 'Ряд не рисуется, dimmed в легенде', 'Inline warning "Ряд не содержит данных"'],
                ['Невалидные даты в X', 'Fallback: категориальная ось', 'Warning "Не удалось распознать даты, используется категориальная ось"'],
                ['Слишком много точек (>10 000)', 'Downsampling предлагается', 'Confirm dialog "Данные содержат N точек. Оптимизировать?"'],
                ['0 колонок после вставки', 'Показать пустое состояние', 'Placeholder "Данные не распознаны. Проверьте формат."'],
                ['Несовместимые типы рядов', 'Блокировка + suggestion', 'Tooltip на disabled option "Несовместимо с текущими рядами"'],
                ['OHLC: пропущена колонка', 'Ошибка маппинга', 'Red error text "Candlestick требует 4 колонки: O, H, L, C"'],
              ]}
            />
          </Section>

          {/* ═══════════ 11. NFR ═══════════ */}
          <Section id="nfr" title="11. Нефункциональные требования">
            <Table
              headers={['Категория', 'Требование', 'Целевое значение']}
              rows={[
                ['Производительность', 'Рендер графика (initial)', '< 200ms для 10 рядов x 500 точек'],
                ['Производительность', 'Рендер графика (update)', '< 50ms для изменения одного параметра'],
                ['Производительность', 'Макс. точек (без downsampling)', '5 000 точек x 10 рядов = 50 000 values'],
                ['Производительность', 'Макс. точек (с downsampling)', '100 000+ (LTTB алгоритм)'],
                ['Производительность', 'SVG-экспорт', '< 500ms для 10 рядов x 500 точек'],
                ['Доступность (a11y)', 'Клавиатурная навигация', 'Все контролы доступны через Tab/Enter/Space'],
                ['Доступность (a11y)', 'ARIA роли', 'role="img" на SVG, aria-label с описанием графика'],
                ['Доступность (a11y)', 'Screen reader', 'Текстовое описание данных через aria-describedby'],
                ['Локализация', 'Формат чисел', 'ru-RU (1 234,56) по умолчанию; en-US (1,234.56) опционально'],
                ['Локализация', 'Формат дат', 'Авто-определение; ручной выбор формата'],
                ['Локализация', 'UI labels', 'Русский (Phase 1); i18n-ready (Phase 2)'],
                ['Совместимость', 'Браузеры', 'Chrome 100+, Firefox 100+, Safari 16+, Edge 100+'],
                ['Совместимость', 'SVG редакторы', 'Figma, Adobe Illustrator 2024+, Inkscape 1.2+'],
                ['Размер бандла', 'Chart Builder module', '< 200KB gzipped (без shared deps)'],
              ]}
            />
          </Section>

          {/* ═══════════ 12. Data Model ═══════════ */}
          <Section id="data-model" title="12. Модель данных диаграммы (JSON Schema)">
            <CodeBlock title="ChartConfig — Root Model">
{`interface ChartConfig {
  /** Unique chart ID */
  id: string;
  /** Chart title (shown above the chart) */
  title: string;
  /** Canvas dimensions (px) */
  canvas: {
    width: number;   // default 800
    height: number;  // default 500
  };
  /** Background color (null = transparent) */
  background: string | null;
  /** Chart-level padding (px) */
  padding: {
    top: number;     // default 40
    right: number;   // default 20
    bottom: number;  // default 60
    left: number;    // default 60
  };

  /** Data source */
  data: ChartData;
  /** Series configuration */
  series: ChartSeries[];
  /** Axes */
  axes: ChartAxes;
  /** Legend */
  legend: ChartLegend;
  /** Grid */
  grid: ChartGrid;
  /** Export settings */
  export: ChartExportSettings;
}`}
            </CodeBlock>

            <CodeBlock title="ChartData">
{`interface ChartData {
  /** Raw 2D array (as pasted) */
  raw: string[][];
  /** Column definitions */
  columns: ChartDataColumn[];
  /** Parsed rows (objects) */
  rows: Record<string, any>[];
}

interface ChartDataColumn {
  /** Column index in raw data */
  index: number;
  /** Column header (from first row or auto-generated) */
  header: string;
  /** Detected type */
  type: 'number' | 'date' | 'text' | 'percent';
  /** Assigned role */
  role: 'x' | 'y' | 'label' | 'open' | 'high' | 'low' | 'close' | 'ignore';
  /** Decimal separator detected */
  decimalSeparator: '.' | ',';
}`}
            </CodeBlock>

            <CodeBlock title="ChartSeries">
{`interface ChartSeries {
  /** Unique series ID */
  id: string;
  /** Display name (editable via legend) */
  name: string;
  /** Column ID for Y values */
  dataColumnIndex: number;
  /** Chart type for this series */
  type: 'line' | 'bar' | 'bar-h' | 'area' | 'area-norm'
      | 'bar-stacked' | 'bar-stacked-norm' | 'bar-h-norm'
      | 'candlestick' | 'pie' | 'donut' | 'scatter';
  /** Which Y axis this series is bound to */
  yAxisId: 'y1' | 'y2';
  /** Color (DS token value, e.g. "#5A8CFF") */
  color: string;
  /** Line width (px) — for line/area */
  strokeWidth: number;  // default 2
  /** Marker shape — for line/scatter */
  marker: 'none' | 'circle' | 'square' | 'diamond';
  /** Marker size (px) */
  markerSize: number;   // default 4
  /** Fill opacity — for area/bar */
  fillOpacity: number;  // default 0.2 for area, 1.0 for bar
  /** Show data labels */
  showDataLabels: boolean;
  /** Data label position */
  dataLabelPosition: 'above' | 'center' | 'below' | 'auto';
  /** Visible in chart (toggle via legend) */
  visible: boolean;
  /** Z-order (lower = behind) */
  zIndex: number;
  
  /** Candlestick-specific */
  candlestick?: {
    openColumnIndex: number;
    highColumnIndex: number;
    lowColumnIndex: number;
    closeColumnIndex: number;
    upColor: string;    // default --ds-green-6
    downColor: string;  // default --ds-red-6
  };
  /** Pie/Donut-specific */
  pieDonut?: {
    innerRadiusRatio: number;  // 0 for pie, 0.6 for donut
    labelType: 'name' | 'value' | 'percent' | 'name+percent';
    showLeaderLines: boolean;
  };
}`}
            </CodeBlock>

            <CodeBlock title="ChartAxes">
{`interface ChartAxes {
  x: ChartAxisX;
  y1: ChartAxisY;
  y2?: ChartAxisY;
}

interface ChartAxisX {
  /** Axis type */
  type: 'time' | 'category';
  /** Label text */
  label: string;
  /** Date format (if type='time') */
  dateFormat: 'YYYY' | 'MM.YYYY' | 'DD.MM.YY' | 'Q[N] YYYY' | 'auto';
  /** Label rotation (degrees) */
  labelRotation: 0 | 45 | 90;
  /** Font size for tick labels */
  fontSize: 8 | 9 | 10 | 11 | 12;
  /** Show axis line */
  showAxisLine: boolean;
  /** Show tick marks */
  showTicks: boolean;
}

interface ChartAxisY {
  /** Axis ID */
  id: 'y1' | 'y2';
  /** Side */
  side: 'left' | 'right';
  /** Label text */
  label: string;
  /** Number format */
  numberFormat: {
    type: 'auto' | 'decimal' | 'percent' | 'currency' | 'compact';
    decimals: number;           // 0-6
    currency?: 'RUB' | 'USD' | 'EUR';
    compact?: 'K' | 'M' | 'B'; // auto-select
  };
  /** Domain */
  min: number | 'auto';
  max: number | 'auto';
  /** Scale type */
  scale: 'linear' | 'log';
  /** Font size for tick labels */
  fontSize: 8 | 9 | 10 | 11 | 12;
  /** Show axis line */
  showAxisLine: boolean;
}`}
            </CodeBlock>

            <CodeBlock title="ChartLegend, ChartGrid, ChartExportSettings">
{`interface ChartLegend {
  /** Position */
  position: 'top' | 'bottom' | 'left' | 'right' | 'hidden';
  /** Items order (series IDs) */
  order: string[];
  /** Font size */
  fontSize: 10 | 11 | 12;
}

interface ChartGrid {
  /** Horizontal grid lines */
  horizontal: {
    show: boolean;
    style: 'solid' | 'dashed';
    color: string;  // default --ds-dark-4
  };
  /** Vertical grid lines */
  vertical: {
    show: boolean;
    style: 'solid' | 'dashed';
    color: string;
  };
}

interface ChartExportSettings {
  /** Export mode */
  mode: 'screen' | 'print';
  /** Print scale factor */
  printScale: number;  // 1.0 - 2.0, default 1.5
  /** Include background */
  includeBackground: boolean;
  /** Embed font via @import */
  embedFontImport: boolean;  // default true
}`}
            </CodeBlock>
          </Section>

          {/* ═══════════ 13. Events ═══════════ */}
          <Section id="events" title="13. Событийная модель (интеграция с хост-приложением)">
            <CodeBlock title="ChartBuilderEvents">
{`interface ChartBuilderEvents {
  /** Fires on any config change */
  onChange: (config: ChartConfig) => void;

  /** Fires when data is pasted/edited */
  onDataChange: (data: ChartData) => void;

  /** Fires when series are added/removed/modified */
  onSeriesChange: (series: ChartSeries[]) => void;

  /** Fires when export is triggered */
  onExport: (payload: {
    svgString: string;
    mode: 'screen' | 'print';
    filename: string;
  }) => void;

  /** Fires on validation error */
  onError: (error: {
    code: string;
    message: string;
    severity: 'error' | 'warning' | 'info';
    context?: Record<string, any>;
  }) => void;

  /** Fires when chart type compatibility issue arises */
  onCompatibilityWarning: (payload: {
    requestedType: string;
    existingTypes: string[];
    suggestion: string;
  }) => void;

  /** Ready event — module fully initialized */
  onReady: () => void;
}

// Error codes
type ChartErrorCode =
  | 'PARSE_FAILED'          // clipboard data unparseable
  | 'INVALID_COLUMN_TYPE'   // string in numeric column
  | 'MISSING_OHLC'          // candlestick missing columns
  | 'INCOMPATIBLE_SERIES'   // mixing pie with line
  | 'DATA_TOO_LARGE'        // exceeds max points
  | 'EMPTY_SERIES'          // all values null
  | 'LOG_SCALE_NEGATIVE'    // negative values with log scale
  | 'EXPORT_FAILED';        // SVG generation error`}
            </CodeBlock>
          </Section>

          {/* ═══════════ 14. Render Options ═══════════ */}
          <Section id="render-options" title="14. Сравнение подходов к рендерингу (2-3 опции)">
            <Table
              headers={['Подход', 'Плюсы', 'Минусы', 'SVG-экспорт с editable text', 'Рекомендация']}
              rows={[
                [
                  'A: Custom SVG Renderer (выбрано)',
                  '100% контроль над SVG DOM; pixel-perfect экспорт; minimal bundle; no dependency; editable text гарантирован',
                  'Больше кода для реализации; нет готовых interactions (zoom, pan)',
                  'Нативный (svgElement.outerHTML)',
                  'РЕКОМЕНДУЕТСЯ'
                ],
                [
                  'B: Recharts (уже в проекте)',
                  'Уже установлен; декларативный API; встроенные анимации',
                  'Использует SVG, но с React-specific атрибутами; экспорт требует cleanup; limited customization; text может содержать React-специфичные props',
                  'Возможен через ref.current.outerHTML + cleanup (удаление data-*, class, style как CSS modules)',
                  'ДОПУСТИМО (с ограничениями)'
                ],
                [
                  'C: D3.js (чистый)',
                  'Мощнейший API; все типы графиков; scales, axes, transitions встроены',
                  'Imperative API (конфликт с React); большой bundle (+80KB); learning curve',
                  'Отличный (D3 генерирует чистый SVG)',
                  'ИЗБЫТОЧНО для данного scope'
                ],
              ]}
            />

            <Note type="info">
              <strong>Выбор: Вариант A — Custom SVG Renderer.</strong> Причины:
              (1) Полный контроль над каждым <Code>{`<text>`}</Code> узлом гарантирует editable text.
              (2) Нулевые зависимости — минимальный bundle.
              (3) Идеальное соответствие DS-токенам.
              (4) Допускается использование утилит из <Code>DSChartGrid</Code> (toPolylinePoints, toSmoothPath, toAreaPath) как foundation.
              Recharts остаётся для существующих дашборд-графиков; Chart Builder получает собственный рендерер.
            </Note>
          </Section>

          {/* ═══════════ 15. DS Components ═══════════ */}
          <Section id="ds-components" title="15. Компоненты дизайн-системы (необходимые)">
            <Table
              headers={['Компонент', 'Файл', 'Применение в Chart Builder']}
              rows={[
                ['DSButton', 'ds-button.tsx', 'Кнопки «Экспорт SVG», «+ Добавить ряд», «Очистить данные»'],
                ['DSInput', 'ds-input.tsx', 'Ввод заголовка, labels осей, min/max, custom values'],
                ['DSSelect', 'ds-select.tsx', 'Выбор типа графика, формата чисел, формата дат, роли колонки'],
                ['DSSegmentButton', 'ds-segment-button.tsx', 'Переключатели: линейная/лог шкала, позиция легенды, поворот подписей, режим экспорта'],
                ['DSCheckbox', 'ds-checkbox.tsx', 'Toggles: показать сетку, data labels, фон'],
                ['DSTabs', 'ds-tabs.tsx', 'Вкладки: Данные | График | Настройки | Экспорт (или аналог)'],
                ['DSTable', 'ds-table.tsx', 'Превью вставленных данных (editable cells через DSTableCellEditable)'],
                ['DSTooltip / DSChartTooltip', 'ds-tooltip.tsx', 'Tooltip при наведении на элементы графика'],
                ['DSChartGrid', 'ds-chart-grid.tsx', 'Базовая сетка для preview (опционально, или custom SVG renderer)'],
                ['DSCustomDropdown', 'ds-custom-dropdown.tsx', 'Dropdown для выбора колонок с группировкой'],
                ['Dialog (shadcn)', 'dialog.tsx', 'Модальное окно экспорта, confirmation dialogs'],
                ['Slider (Radix)', 'slider.tsx', 'Настройка opacity, innerRadius (donut), printScale'],
                ['Notification / Toast', 'notification.tsx', 'Toast-уведомления об ошибках парсинга, успешном экспорте'],
                ['ColorSwatch (новый)', 'TBD', 'Выбор цвета ряда из палитры DS-токенов (grid из DS-цветов)'],
              ]}
            />

            <Note type="info">
              Компонент <strong>ColorSwatch</strong> потребуется создать — простой grid из 10x8 цветовых ячеек, 
              использующих палитру DS (blue-0..9, green-0..9, orange-0..9 и т.д.).
              Состоит из <Code>DSCustomDropdown</Code> + CSS grid с квадратами.
            </Note>
          </Section>

          {/* ═══════════ 16. Acceptance Criteria ═══════════ */}
          <Section id="acceptance" title="16. Критерии приёмки (Feature → AC)">
            <Table
              headers={['Feature', 'AC (Acceptance Criteria)', 'Priority']}
              rows={[
                ['Excel paste', 'Данные из Excel (tab-separated) корректно парсятся в таблицу; числа с пробелом-разделителем распознаются; даты в ф��рмате DD.MM.YYYY распознаются', 'P0'],
                ['Авто-определение типов', 'Числовые колонки авто-назначаются как Y; первая текстовая/датовая — как X', 'P0'],
                ['13 типов графиков', 'Каждый из 13 типов рендерится корректно с тестовыми данными; визуальное соответствие design spec', 'P0'],
                ['Combo chart', 'Line + Bar на одном графике с 2 осями Y; корректный z-order; легенда отображает оба типа', 'P0'],
                ['SVG Export — editable text', 'Экспортированный SVG открывается в Figma; любой текстовый элемент (ось, легенда, заголовок, data label) выделяется и редактируется; font = Inter', 'P0'],
                ['SVG Export — attributes', 'Каждый <text> содержит font-family, font-size, font-weight, fill как inline attributes', 'P0'],
                ['Dual Y axis', 'Y1 (левая) и Y2 (правая) отображаются; ряды корректно привязаны; независимый масштаб', 'P0'],
                ['Числовые форматы', 'Формат decimal/percent/currency/compact корректно применяется к подписям осей и data labels', 'P1'],
                ['Легенда', 'Переименование, переупорядочивание (drag), toggle visibility; отражается в SVG export', 'P1'],
                ['Grid настройки', 'Горизонтальная/вертикальная сетка; solid/dashed; цвет из DS токенов', 'P1'],
                ['Font size настройка', 'Изменение font size осей (8-12px) мгновенно отражается на preview и в экспорте', 'P1'],
                ['Print mode', 'Экспорт с printScale=1.5 увеличивает шрифты и толщину линий на 50%', 'P2'],
                ['Candlestick OHLC', 'Маппинг 4 колонок; up/down цвета; тело + фитили', 'P1'],
                ['Pie/Donut', 'Категории + значения; корректные сектора; подписи; настраиваемый innerRadius для donut', 'P1'],
                ['Валидация', 'Некорректные данные показывают warning/error; не crashит UI', 'P0'],
                ['Производительность', '10 рядов x 500 точек рендерится < 200ms', 'P1'],
                ['A11y', 'Все контролы доступны с клавиатуры; SVG имеет role="img" + aria-label', 'P2'],
              ]}
            />
          </Section>

          {/* ═══════════ 17. SVG Test Checklist ═══════════ */}
          <Section id="svg-checklist" title="17. Чек-лист тестов экспорта SVG">
            <Table
              headers={['#', 'Тест-кейс', 'Ожидаемый результат', 'Инструмент проверки']}
              rows={[
                ['1', 'Открыть SVG в Figma', 'Файл импортируется без ошибок; все элементы видны', 'Figma'],
                ['2', 'Выделить текст оси Y в Figma', 'Текст выделяется как текстовый узел; font = Inter; size/weight корректны', 'Figma'],
                ['3', 'Редактировать текст легенды в Figma', 'Текст изменяется; formatting сохраняется', 'Figma'],
                ['4', 'Открыть SVG в Adobe Illustrator', 'Файл открывается; текст не конвертирован в outlines', 'AI 2024+'],
                ['5', 'Открыть SVG в Inkscape', 'Корректное отображение; тексты редактируемы', 'Inkscape 1.2+'],
                ['6', 'Открыть SVG в Chrome', 'Корректное отображение; Inter загружается через @import', 'Chrome 100+'],
                ['7', 'Проверить viewBox', 'viewBox="0 0 W H" соответствует заданным размерам; width/height атрибуты присутствуют', 'Текстовый редактор'],
                ['8', 'Проверить отсутствие <path> вместо текста', 'Grep по SVG: все видимые тексты = <text>/<tspan>, НЕ <path>', 'grep / sed'],
                ['9', 'Проверить inline attributes', 'Каждый <text> имеет font-family, font-size, font-weight, fill', 'Текстовый редактор'],
                ['10', 'Проверить clipPath', '<clipPath> в <defs>; серии обрезаны по области построения', 'Визуально + код'],
                ['11', 'Проверить z-order', 'Слои: background → grid → areas → bars → lines → markers → labels → axes → legend → title', 'Визуально'],
                ['12', 'Проверить фон', 'Если задан — <rect> с fill; если transparent — нет rect', 'Визуально'],
                ['13', 'Print mode: шрифты увеличены', 'font-size * printScale; strokeWidth * printScale', 'Сравнение screen vs print'],
                ['14', 'Нет React-специфичных атрибутов', 'Нет data-reactid, className, onClick и т.д.', 'grep'],
                ['15', 'Нет foreignObject', 'Grep: 0 вхождений foreignObject', 'grep'],
                ['16', 'Combo chart export', 'Line + Bar корректно экспортируются; оба ряда видны; легенда корректна', 'Figma'],
                ['17', 'Candlestick export', 'Свечи корректны; цвета up/down; фитили видны', 'Figma'],
                ['18', 'Pie/Donut export', 'Сектора корректны; подписи как <text>; leader lines как <line>', 'Figma'],
                ['19', 'Кириллица в тексте', 'Русские символы корректно отображаются в всех редакторах', 'Figma + AI + Inkscape'],
                ['20', 'Файл < 1MB', 'Для типового графика (10 рядов x 100 точек) размер SVG < 500KB', 'File size'],
              ]}
            />
          </Section>

          {/* ═══════════ 18. Architecture ═══════════ */}
          <Section id="architecture" title="18. Архитектура модулей (frontend)">
            <CodeBlock title="File Structure">
{`src/app/components/chart-builder/
  ChartBuilderPage.tsx          # Главная страница (layout: sidebar + canvas + panel)
  
  # Data layer
  data/
    clipboard-parser.ts          # Парсинг clipboard text → 2D array
    column-detector.ts           # Авто-определение типов колонок
    data-store.ts                # Zustand store для ChartData
  
  # Chart config
  config/
    chart-store.ts               # Zustand store для ChartConfig
    series-manager.ts            # CRUD для серий + compatibility checks
    axis-calculator.ts           # Auto min/max, tick generation, nice numbers
    color-palette.ts             # DS-based color rotation
  
  # SVG Renderer
  renderer/
    SVGChart.tsx                 # React component → SVG DOM
    layers/
      BackgroundLayer.tsx        # <rect> фон
      GridLayer.tsx              # Horizontal/vertical grid lines
      AxisLayer.tsx              # X/Y axes: lines, ticks, labels (<text>)
      LineLayer.tsx              # Line series: <path>/<polyline>
      BarLayer.tsx               # Bar/Column series: <rect>
      AreaLayer.tsx              # Area series: <path> with fill
      CandlestickLayer.tsx       # OHLC candles: <rect> + <line>
      PieDonutLayer.tsx          # Pie/Donut: <path> arcs
      ScatterLayer.tsx           # Scatter: <circle>
      DataLabelLayer.tsx         # Data labels: <text>
      LegendLayer.tsx            # Legend: <g> with markers + <text>
      TitleLayer.tsx             # Chart title: <text>
    scales/
      linear-scale.ts            # Linear mapping value → pixel
      log-scale.ts               # Log mapping
      band-scale.ts              # Category band scale
      time-scale.ts              # Date → pixel
    utils/
      nice-numbers.ts            # "Nice" tick generation (1, 2, 5, 10...)
      svg-text-utils.ts          # Text measurement, wrapping
      arc-utils.ts               # Pie/donut arc path generation
  
  # SVG Export
  export/
    svg-exporter.ts              # DOM → clean SVG string
    svg-cleanup.ts               # Remove React attrs, add xmlns
    svg-print-scale.ts           # Apply print scaling
    download.ts                  # Blob → download
  
  # UI Panels
  panels/
    DataPanel.tsx                # Paste area + data table preview
    SeriesPanel.tsx              # Series list + per-series settings
    AxisPanel.tsx                # Y1/Y2/X axis settings
    StylePanel.tsx               # Grid, legend, title, colors
    ExportPanel.tsx              # Export modal with settings
  
  # Shared
  types.ts                       # ChartConfig, ChartSeries, etc.
  constants.ts                   # DS token values, defaults
  compatibility.ts               # Series type compatibility matrix`}
            </CodeBlock>

            <Section id="architecture-state" title="18.1 State Management" level={3}>
              <P>
                Два Zustand store: <Code>useDataStore</Code> (raw data, parsed columns, rows) и <Code>useChartStore</Code> 
                (полный ChartConfig). Оба доступны через React context для composable инжекции.
              </P>
              <P>
                Альтернатива: единый React Context + useReducer (если Zustand не установлен). 
                Zustand предпочтителен из-за: selector subscriptions, devtools, middleware (immer).
              </P>
            </Section>

            <Section id="architecture-layout" title="18.2 Layout страницы" level={3}>
              <P>
                Трёхколоночный layout:
              </P>
              <Ul>
                <li><strong>Левая панель (280px):</strong> DSTabs: «Данные» (paste + table) | «Ряды» (series list).</li>
                <li><strong>Центр (flex-1):</strong> SVG canvas preview с interactive tooltip overlay.</li>
                <li><strong>Правая панель (280px):</strong> DSTabs: «Оси» | «Стиль» | «Экспорт». Настройки осей, сетки, легенды, экспорта.</li>
              </Ul>
            </Section>
          </Section>

          {/* ═══════════ 19. Risks ═══════════ */}
          <Section id="risks" title="19. Риски и решения">
            <Table
              headers={['Риск', 'Вероятность', 'Влияние', 'Митигация']}
              rows={[
                [
                  'Шрифт Inter не установлен у пользователя SVG-редактора',
                  'Высокая',
                  'Среднее (текст отображается fallback-шрифтом)',
                  '@import Google Fonts в <style> блоке SVG; fallback chain: Inter → Helvetica Neue → Arial → sans-serif; документация для пользователя'
                ],
                [
                  'Figma ограниченно поддерживает CSS в SVG',
                  'Средняя',
                  'Низкое',
                  'Inline attributes на каждом <text> (Вариант A) — Figma их понимает полностью'
                ],
                [
                  'Производительность на больших данных (>10K точек)',
                  'Средняя',
                  'Высокое (UI freezes)',
                  'LTTB downsampling; requestAnimationFrame batching; Web Worker для парсинга (Phase 2)'
                ],
                [
                  'Clipboard API ограничен в некоторых браузерах',
                  'Низкая',
                  'Среднее',
                  'Fallback: textarea + manual Ctrl+V; также navigator.clipboard.readText() с permission prompt'
                ],
                [
                  'Сложность combo charts (смешанные типы)',
                  'Высокая',
                  'Среднее',
                  'Строгая матрица совместимости (секция 2.2); UI блокирует невалидные комбинации'
                ],
                [
                  'SVG файл слишком большой (>5MB)',
                  'Низкая',
                  'Среднее',
                  'Оптимизация: округление координат до 2 decimal; удаление пустых атрибутов; warning при >2MB'
                ],
                [
                  'Логарифмическая шкала с нулевыми/отрицательными значениями',
                  'Средняя',
                  'Низкое',
                  'Валидация: предупреждение + пропуск точек <= 0; предложение переключиться на линейную шкалу'
                ],
                [
                  'Кириллица в SVG при экспорте',
                  'Низкая',
                  'Высокое',
                  'UTF-8 encoding в SVG header; тестирование в Figma/AI/Inkscape (см. чек-лист #19)'
                ],
              ]}
            />
          </Section>

          {/* ═══ End ═══ */}
          <div className="mt-12 pt-6 border-t border-edge text-center">
            <p className="text-[11px] text-on-surface-subtle">
              Chart Builder Specification v1.0 | Andromeda Platform | Generated February 2026
            </p>
            <p className="text-[11px] text-on-surface-subtle mt-1">
              Автор: Lead Product/Technical Analyst &amp; Frontend Architect
            </p>
          </div>

          {/* Spacer */}
          <div className="h-20" />
        </main>
      </div>
    </div>
  );
}
