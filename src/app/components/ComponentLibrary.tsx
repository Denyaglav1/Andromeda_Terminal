import React, { useState } from 'react';
import { Link } from 'react-router';
import { Header } from './Header';
import { ToastContainer, Notification } from './ui/notification';
import { DSButton } from './ui/ds-button';
import { DSInput } from './ui/ds-input';
import { DSCheckbox } from './ui/ds-checkbox';
import { DSTabs, DSTab } from './ui/ds-tabs';
import { DSSegmentButton, DSSegment } from './ui/ds-segment-button';
import { DSTable, DSTableCellPctChange, type DSTableColumn } from './ui/ds-table';
import { DSSelect } from './ui/ds-select';
import {
  DSCustomDropdown,
  DSCustomDropdownTrigger,
  DSCustomDropdownPanel,
  DSCustomDropdownHeader,
  DSCustomDropdownContent,
  DSCustomDropdownItem,
} from './ui/ds-custom-dropdown';
import { DSTooltip, DSTooltipContent } from './ui/ds-tooltip';
import { DSModal, DSModalBody, DSModalFooter } from './ui/ds-modal';
import { DSChart, DSSparklineChart } from './ui/ds-chart';
import { DSBadge, ALL_SOURCES } from './ui/ds-badge';
import { DSSparkline } from './ui/ds-sparkline';
import { DSSectionHeader } from './ui/ds-section-header';
import { useMantineColorScheme } from '@mantine/core';
import { DSSwitch } from './ui/ds-switch';
import { DSTag } from './ui/ds-tag';
import { DSMenu, DSMenuGroup, DSMenuItem } from './ui/ds-menu';
import { DSLegend } from './ui/ds-legend';
import { DSCalendar } from './ui/ds-calendar';
import { DSConfirmDialog } from './ui/ds-confirm-dialog';
import clStyles from './ComponentLibrary.module.css';

/* ═══════════════════════════════════════════════════════
   ComponentLibrary — Andromeda DS Component Catalogue
   ═══════════════════════════════════════════════════════ */

/* ── Component card metadata ── */

interface ComponentEntry {
  id: string;
  name: string;
  description: string;
  category: 'inputs' | 'data-display' | 'navigation' | 'feedback' | 'overlay';
  props: string[];
}

const COMPONENTS: ComponentEntry[] = [
  {
    id: 'ds-button',
    name: 'Button',
    description: 'Кнопка с 5 вариантами оформления, 4 размерами и поддержкой иконок',
    category: 'inputs',
    props: ['variant', 'size', 'leftIcon', 'rightIcon', 'iconOnly', 'loading', 'disabled'],
  },
  {
    id: 'ds-input',
    name: 'Input',
    description: 'Текстовое поле ввода с 5 размерами, состояниями валидации и вспомогательным текстом',
    category: 'inputs',
    props: ['size', 'label', 'placeholder', 'leftIcon', 'rightElement', 'helperText', 'errorText', 'success', 'disabled', 'required'],
  },
  {
    id: 'ds-checkbox',
    name: 'Checkbox',
    description: 'Чекбокс с состояниями checked, unchecked и indeterminate в двух размерах',
    category: 'inputs',
    props: ['checked', 'size', 'label', 'disabled', 'onChange'],
  },
  {
    id: 'ds-select',
    name: 'Select',
    description: 'Выпадающий список с поддержкой поиска, иконок и групп опций',
    category: 'inputs',
    props: ['size', 'label', 'placeholder', 'disabled', 'error', 'value', 'onChange'],
  },
  {
    id: 'ds-custom-dropdown',
    name: 'Custom Dropdown',
    description: 'Составной dropdown с заголовком, поиском, сегмент-фильтрами, группированными элементами и футером',
    category: 'inputs',
    props: ['isOpen', 'onOpenChange', 'trigger', 'header', 'search', 'segments', 'groups', 'footer'],
  },
  {
    id: 'ds-tabs',
    name: 'Tabs',
    description: 'Табы навигации с 4 размерами, иконками и бейджами',
    category: 'navigation',
    props: ['size', 'value', 'onChange', 'icon', 'badge', 'disabled'],
  },
  {
    id: 'ds-segment-button',
    name: 'Segment Button',
    description: 'Сегментированный контрол с 3 вариантами, 3 размерами и стилями активного состояния',
    category: 'navigation',
    props: ['variant', 'size', 'activeStyle', 'value', 'onChange', 'icon'],
  },
  {
    id: 'ds-table',
    name: 'Table',
    description: 'Таблица на CSS Grid с сортировкой, группировкой, sticky-колонками и прогнозными данными',
    category: 'data-display',
    props: ['columns', 'data', 'grouped', 'sortColumn', 'sortDirection', 'compact', 'stickyFirstColumn'],
  },
  {
    id: 'ds-chart-grid',
    name: 'Chart Grid',
    description: 'Каркас графика с осями, сеткой и слотом для SVG-рендеринга данных',
    category: 'data-display',
    props: ['yValues', 'yLabel', 'xValues', 'xLabel', 'solidLineIndex', 'showVerticalLines', 'secondaryYValues'],
  },
  {
    id: 'notification',
    name: 'Notification',
    description: 'Уведомления с 4 вариантами, действиями и программным API (notify.success/error)',
    category: 'feedback',
    props: ['variant', 'title', 'description', 'closable', 'primaryAction', 'secondaryAction', 'loading'],
  },
  {
    id: 'ds-tooltip',
    name: 'Tooltip',
    description: 'Составной тултип: подсказки при наведении, chart-тултипы с легендой и значениями, позиционирование у курсора',
    category: 'overlay',
    props: ['content', 'side', 'offset', 'delay', 'title', 'items', 'visible', 'x', 'y'],
  },
  {
    id: 'ds-chart',
    name: 'Chart',
    description: 'Набор из 14+ типов графиков на ECharts: линейный, столбчатый, area, pie, donut, scatter, stacked, горизонтальный, radar, waterfall, treemap, gauge, sparkline, combo',
    category: 'data-display',
    props: ['type', 'data', 'series', 'xKey', 'height', 'showGrid', 'showLegend', 'showTooltip'],
  },
  {
    id: 'ds-modal',
    name: 'Modal',
    description: 'Модальное окно с overlay, закрытием по Escape/клику, кастомным заголовком, body и footer. Используется во всех модалках приложения',
    category: 'overlay',
    props: ['open', 'onClose', 'title', 'headerRight', 'customHeader', 'width', 'height', 'maxWidth', 'showCloseButton', 'closeOnOverlay', 'closeOnEscape'],
  },
  {
    id: 'ds-sparkline',
    name: 'Sparkline',
    description: 'Мини SVG-график с градиентной заливкой и точкой на конце. Автоопределение цвета (зелёный/красный) по направлению',
    category: 'data-display',
    props: ['data', 'width', 'height', 'color', 'fill', 'strokeWidth'],
  },
  {
    id: 'ds-section-header',
    name: 'Section Header',
    description: 'Заголовок секции/виджета в uppercase с опциональной ссылкой-действием справа',
    category: 'navigation',
    props: ['children', 'action', 'onAction', 'className'],
  },
  {
    id: 'ds-switch',
    name: 'Switch',
    description: 'Переключатель с двумя состояниями: включен и выключен',
    category: 'inputs',
    props: ['checked', 'size', 'label', 'disabled', 'onChange'],
  },
  {
    id: 'ds-badge',
    name: 'Badge',
    description: 'Единый бейдж-компонент: text, icon, count, dot, pill (тёмные фоны), source (новостные источники). 7 цветов, 3 стиля, 4 размера, 13+ источников',
    category: 'data-display',
    props: ['variant', 'color', 'view', 'size', 'count', 'icon', 'source', 'showLabel', 'disabled', 'children'],
  },
  {
    id: 'ds-tag',
    name: 'Tag',
    description: 'Тег/чипс с иконкой и крестиком. 6 цветов, 3 размера, closable, active/disabled состояния',
    category: 'data-display',
    props: ['color', 'size', 'icon', 'closable', 'onClose', 'onClick', 'active', 'disabled'],
  },
  {
    id: 'ds-menu',
    name: 'Menu',
    description: 'Контекстное меню с группами, иконками, описаниями, accent/danger вариантами пунктов',
    category: 'overlay',
    props: ['open', 'onClose', 'width', 'children'],
  },
  {
    id: 'ds-legend',
    name: 'Legend',
    description: 'Легенда для графиков: inline, wrap и slider режимы с цветными маркерами и подписями',
    category: 'data-display',
    props: ['items', 'mode', 'maxWidth'],
  },
  {
    id: 'ds-calendar',
    name: 'Calendar',
    description: 'Календарь с переключением между датами/месяцами/годами, сегмент-кнопкой и навигацией',
    category: 'inputs',
    props: ['value', 'onChange', 'min', 'max', 'initialMonth'],
  },
  {
    id: 'ds-confirm-dialog',
    name: 'Confirm Dialog',
    description: 'Центрированный диалог подтверждения с заголовком, описанием и двумя кнопками действий (отмена/подтверждение)',
    category: 'overlay',
    props: ['open', 'title', 'message', 'cancelLabel', 'confirmLabel', 'confirmColor', 'onCancel', 'onConfirm', 'width'],
  },
];

const CATEGORY_LABELS: Record<string, string> = {
  'inputs': 'Inputs',
  'navigation': 'Navigation',
  'data-display': 'Data display',
  'feedback': 'Feedback',
  'overlay': 'Overlays',
};

const CATEGORY_ORDER = ['inputs', 'navigation', 'data-display', 'feedback', 'overlay'];

/* ── Live previews for each component ── */

function ButtonPreview() {
  return (
    <div className={clStyles.flexWrapGap2}>
      <DSButton variant="primary" size="sm">Primary</DSButton>
      <DSButton variant="secondary" size="sm">Secondary</DSButton>
      <DSButton variant="outline" size="sm">Outline</DSButton>
      <DSButton variant="ghost" size="sm">Ghost</DSButton>
      <DSButton variant="destructive" size="sm">Destructive</DSButton>
    </div>
  );
}

function InputPreview() {
  const [val, setVal] = useState('');
  return (
    <div className={clStyles.flexColGap3Max280}>
      <DSInput size="sm" placeholder="Default input" value={val} onChange={e => setVal(e.target.value)} />
      <DSInput size="sm" placeholder="With error" errorText="Required field" />
    </div>
  );
}

function CheckboxPreview() {
  const [a, setA] = useState(true);
  const [b, setB] = useState(false);
  return (
    <div className={clStyles.flexRowGap4}>
      <DSCheckbox checked={a} onChange={setA} label="Checked" />
      <DSCheckbox checked={b} onChange={setB} label="Unchecked" />
      <DSCheckbox checked="indeterminate" label="Mixed" />
    </div>
  );
}

function SelectPreview() {
  const [val, setVal] = useState('');
  return (
    <div className={clStyles.wMax240}>
      <DSSelect
        size="sm"
        value={val}
        onChange={setVal}
        placeholder="Select option"
        options={[
          { value: 'opt1', label: 'Option 1' },
          { value: 'opt2', label: 'Option 2' },
          { value: 'opt3', label: 'Option 3' },
        ]}
      />
    </div>
  );
}

function CustomDropdownPreview() {
  const [open, setOpen] = useState(false);
  const [sel, setSel] = useState<string>('Revenue');
  const [search, setSearch] = useState('');
  const [tab, setTab] = useState('Все');

  const SEGS = [
    { value: 'Все', label: 'Все' },
    { value: 'PnL', label: 'PnL' },
    { value: 'CF', label: 'CF' },
  ];

  const items = ['Revenue', 'EBITDA', 'Net Income', 'Free cash flow']
    .filter(it => tab === 'Все' || (tab === 'PnL' ? ['Revenue', 'EBITDA', 'Net Income'].includes(it) : it === 'Free cash flow'))
    .filter(it => !search.trim() || it.toLowerCase().includes(search.toLowerCase().trim()));

  return (
    <div className={clStyles.wMax240}>
      <DSCustomDropdown isOpen={open} onOpenChange={setOpen}>
        <DSCustomDropdownTrigger placeholder="Выберите показатель">
          {sel || undefined}
        </DSCustomDropdownTrigger>
        <DSCustomDropdownPanel minWidth={280}>
          <DSCustomDropdownHeader
            title="Выберите показатель"
            showSearch
            searchValue={search}
            onSearchChange={setSearch}
            segments={SEGS}
            segmentValue={tab}
            onSegmentChange={setTab}
          />
          <DSCustomDropdownContent maxHeight={180}>
            <div className={clStyles.flexColP1}>
              {items.map(item => (
                <DSCustomDropdownItem
                  key={item}
                  selected={sel === item}
                  onClick={() => { setSel(item); setOpen(false); }}
                >
                  {item}
                </DSCustomDropdownItem>
              ))}
              {items.length === 0 && (
                <div className={clStyles.emptyDropdown}>Ничего не найдено</div>
              )}
            </div>
          </DSCustomDropdownContent>
        </DSCustomDropdownPanel>
      </DSCustomDropdown>
    </div>
  );
}

function TabsPreview() {
  const [tab, setTab] = useState('first');
  return (
    <DSTabs size="sm" value={tab} onChange={setTab}>
      <DSTab value="first">First</DSTab>
      <DSTab value="second" badge="3">Second</DSTab>
      <DSTab value="third" disabled>Disabled</DSTab>
    </DSTabs>
  );
}

function SegmentPreview() {
  const [seg, setSeg] = useState('a');
  return (
    <div className={clStyles.flexColGap3}>
      <DSSegmentButton variant="stroke" size="sm" value={seg} onChange={setSeg}>
        <DSSegment value="a">Year</DSSegment>
        <DSSegment value="b">Half</DSSegment>
        <DSSegment value="c">Quarter</DSSegment>
      </DSSegmentButton>
    </div>
  );
}

function TablePreview() {
  const columns: DSTableColumn[] = [
    { id: 'name', header: 'Metric', align: 'left', width: 120, sticky: true },
    { id: 'y2023', header: '2023', align: 'right', flex: true, minWidth: '70px', sortable: true, sortType: 'number' },
    { id: 'y2024', header: '2024', align: 'right', flex: true, minWidth: '70px', sortable: true, sortType: 'number',
      render: (value: any, row: any) => (
        <div className={clStyles.flexColItemsEnd}>
          <span className={clStyles.cellValue}>
            {typeof value === 'number' ? value.toLocaleString('ru-RU') : value}
          </span>
          <DSTableCellPctChange pctChange={row[`_pct_y2024`]} />
        </div>
      ),
    },
    { id: 'y2025', header: '2025F', align: 'right', flex: true, minWidth: '70px', sortable: true, sortType: 'number', forecast: true,
      render: (value: any, row: any) => (
        <div className={clStyles.flexColItemsEnd}>
          <span className={clStyles.cellValueForecast}>
            {typeof value === 'number' ? value.toLocaleString('ru-RU') : value}
          </span>
          <DSTableCellPctChange pctChange={row[`_pct_y2025`]} />
        </div>
      ),
    },
  ];

  const data = [
    { id: '1', name: 'Revenue', y2023: 11500, y2024: 12800, y2025: 13650, _pct_y2024: 11.3, _pct_y2025: 6.6 },
    { id: '2', name: 'EBITDA', y2023: 6800, y2024: 7450, y2025: 8100, _pct_y2024: 9.6, _pct_y2025: 8.7 },
    { id: '3', name: 'Net Income', y2023: 4600, y2024: 5200, y2025: 5700, _pct_y2024: 13.0, _pct_y2025: 9.6 },
  ];

  return (
    <div className={clStyles.wFullOverflow}>
      <DSTable columns={columns} data={data} rowKeyField="id" stickyFirstColumn />
    </div>
  );
}

function NotificationPreview() {
  return (
    <div className={clStyles.flexColGap2Full}>
      <Notification variant="success" title="Success" description="Operation completed" closable={false} />
      <Notification variant="error" title="Error" description="Something went wrong" closable={false} />
    </div>
  );
}

function ChartGridPreview() {
  return (
    <div className={clStyles.chartSkeleton}>
      <div className={clStyles.flexColCenter1}>
        <svg width="40" height="32" viewBox="0 0 40 32" fill="none">
          <rect x="0.5" y="0.5" width="39" height="31" rx="3" stroke="var(--ds-border-primary)" />
          <line x1="8" y1="4" x2="8" y2="28" stroke="var(--ds-border-primary)" strokeWidth="0.5" />
          <line x1="4" y1="24" x2="36" y2="24" stroke="var(--ds-border-primary)" strokeWidth="0.5" />
          <line x1="4" y1="16" x2="36" y2="16" stroke="var(--ds-border-primary)" strokeDasharray="2 2" strokeWidth="0.5" />
          <line x1="4" y1="8" x2="36" y2="8" stroke="var(--ds-border-primary)" strokeDasharray="2 2" strokeWidth="0.5" />
          <polyline points="10,22 16,14 22,18 28,8 34,12" stroke="#5A8CFF" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span>Chart skeleton with axes & grid</span>
      </div>
    </div>
  );
}

function TooltipPreview() {
  return (
    <div className={clStyles.flexRowGap4}>
      <DSTooltip content="Простой тултип-подсказка">
        <DSButton variant="outline" size="sm">Hover me</DSButton>
      </DSTooltip>
      <DSTooltipContent
        title="21.03.24  16:30"
        items={[
          { color: '#5A8CFF', name: 'SBER Share Price', value: '234,14' },
          { color: '#F87D37', name: 'Anglo American', value: '8,45M' },
          { color: '#45D3CE', name: 'Impala Platinum', value: '8,45M' },
        ]}
        style={{ pointerEvents: 'auto' }}
      />
    </div>
  );
}

function ModalPreview() {
  return (
    <div className={clStyles.modalMini}>
      <div className={clStyles.modalMiniBox}>
        <div className={clStyles.modalMiniHeader}>
          <span className={clStyles.modalMiniTitle}>Modal Title</span>
          <span className={clStyles.modalMiniClose}>✕</span>
        </div>
        <div className={clStyles.modalMiniBody}>Content area with body & footer slots</div>
        <div className={clStyles.modalMiniFooter}>
          <span className={clStyles.modalMiniBtnGhost}>Cancel</span>
          <span className={clStyles.modalMiniBtnPrimary}>Save</span>
        </div>
      </div>
    </div>
  );
}

function ChartPreview() {
  return (
    <div className={clStyles.flexCenter}>
      <DSSparklineChart data={[120, 95, 145, 110, 160, 140, 180, 175, 200]} width={180} height={50} color="#5A8CFF" />
    </div>
  );
}

function SparklinePreview() {
  return (
    <div className={clStyles.flexRowGap4}>
      <DSSparkline data={[10, 15, 12, 18, 22, 20, 28, 25, 30]} width={77} height={33} />
      <DSSparkline data={[30, 28, 25, 22, 20, 18, 15, 12, 10]} width={77} height={33} />
      <DSSparkline data={[15, 20, 18, 25, 22, 30, 28, 35, 32]} width={77} height={33} color="#9A8CFF" />
    </div>
  );
}

function SectionHeaderPreview() {
  return (
    <div className={clStyles.flexColGap3Full}>
      <DSSectionHeader>ЛИДЕРЫ РОСТА</DSSectionHeader>
      <DSSectionHeader action="Смотреть все" onAction={() => {}}>ВИДЕОМАТЕРИАЛЫ</DSSectionHeader>
    </div>
  );
}

function SwitchPreview() {
  const [checked, setChecked] = useState(false);
  return (
    <div className={clStyles.flexRowGap4}>
      <DSSwitch checked={checked} onChange={setChecked} label="Switch" />
    </div>
  );
}

function BadgePreview() {
  return (
    <div className={clStyles.flexColGap2}>
      <div className={clStyles.flexWrapGap2}>
        <DSBadge color="blue" view="fill" size="s">Fill</DSBadge>
        <DSBadge color="red" view="stroke" size="s">Stroke</DSBadge>
        <DSBadge color="green" view="secondary" size="s">Secondary</DSBadge>
        <DSBadge variant="count" color="orange" count={5} size="s" />
        <DSBadge variant="dot" color="blue" size="s" />
      </div>
      <div className={clStyles.flexWrapGap2}>
        <DSBadge variant="pill" color="gray" size="xs">Pill</DSBadge>
        <DSBadge variant="pill" color="purple" size="xs">Purple</DSBadge>
        <DSBadge variant="source" source="reuters" size="s" />
        <DSBadge variant="source" source="andromeda" size="s" />
      </div>
    </div>
  );
}

function TagPreview() {
  return (
    <div className={clStyles.flexWrapGap2}>
      <DSTag>Default</DSTag>
      <DSTag color="blue">Finance</DSTag>
      <DSTag color="green" closable>Active</DSTag>
      <DSTag color="red" size="sm">Alert</DSTag>
      <DSTag color="purple" active>Selected</DSTag>
    </div>
  );
}

function MenuPreview() {
  return (
    <div className={clStyles.flexCenter}>
      <DSMenu open={true} width={200}>
        <DSMenuGroup>
          <DSMenuItem icon={<svg viewBox="0 0 14 14" fill="none" className={clStyles.iconFull}><circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.2"/></svg>}>Просмотр</DSMenuItem>
          <DSMenuItem>Редактировать</DSMenuItem>
        </DSMenuGroup>
        <DSMenuGroup>
          <DSMenuItem variant="danger">Удалить</DSMenuItem>
        </DSMenuGroup>
      </DSMenu>
    </div>
  );
}

function LegendPreview() {
  return (
    <DSLegend
      items={[
        { color: '#5A8CFF', label: 'Revenue' },
        { color: '#F87D37', label: 'EBITDA' },
        { color: '#1FC989', label: 'Net Income' },
      ]}
      mode="inline"
    />
  );
}

function CalendarPreview() {
  return (
    <div className={clStyles.calendarSkeleton}>
      <div className={clStyles.flexColCenter1}>
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <rect x="4" y="6" width="32" height="28" rx="3" stroke="currentColor" strokeWidth="1.2" />
          <line x1="4" y1="14" x2="36" y2="14" stroke="currentColor" strokeWidth="1" />
          <line x1="12" y1="6" x2="12" y2="2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          <line x1="28" y1="6" x2="28" y2="2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          <circle cx="20" cy="24" r="3" fill="#5A8CFF" opacity="0.6" />
        </svg>
        <span>Date picker with views</span>
      </div>
    </div>
  );
}

function ConfirmDialogPreview() {
  return (
    <div className={clStyles.modalMini}>
      <div className={clStyles.modalMiniBox}>
        <div style={{ padding: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, borderBottom: '1px solid var(--ds-border-primary)' }}>
          <span style={{ fontWeight: 600, fontSize: 11, color: 'var(--ds-text-primary)' }}>Закрыть тикет?</span>
          <span style={{ fontSize: 9, color: 'var(--ds-text-gray-dark)', textAlign: 'center', lineHeight: '12px' }}>Тикет будет закрыт</span>
        </div>
        <div style={{ padding: 8, display: 'flex', gap: 4 }}>
          <span style={{ flex: 1, textAlign: 'center', fontSize: 9, fontWeight: 600, color: 'var(--ds-blue-6)', backgroundColor: 'var(--ds-bg-primary)', borderRadius: 4, padding: '3px 0' }}>Отмена</span>
          <span style={{ flex: 1, textAlign: 'center', fontSize: 9, fontWeight: 600, color: 'white', backgroundColor: '#5A8CFF', borderRadius: 4, padding: '3px 0' }}>Закрыть</span>
        </div>
      </div>
    </div>
  );
}

const PREVIEW_MAP: Record<string, React.FC> = {
  'ds-button': ButtonPreview,
  'ds-input': InputPreview,
  'ds-checkbox': CheckboxPreview,
  'ds-select': SelectPreview,
  'ds-custom-dropdown': CustomDropdownPreview,
  'ds-tabs': TabsPreview,
  'ds-segment-button': SegmentPreview,
  'ds-table': TablePreview,
  'ds-chart-grid': ChartGridPreview,
  'notification': NotificationPreview,
  'ds-tooltip': TooltipPreview,
  'ds-modal': ModalPreview,
  'ds-chart': ChartPreview,
  'ds-sparkline': SparklinePreview,
  'ds-section-header': SectionHeaderPreview,
  'ds-switch': SwitchPreview,
  'ds-badge': BadgePreview,
  'ds-tag': TagPreview,
  'ds-menu': MenuPreview,
  'ds-legend': LegendPreview,
  'ds-calendar': CalendarPreview,
  'ds-confirm-dialog': ConfirmDialogPreview,
};

/* ── Component Card ── */

function ComponentCard({ entry }: { entry: ComponentEntry }) {
  const Preview = PREVIEW_MAP[entry.id];

  return (
    <Link to={`/components/${entry.id}`} className={clStyles.card}>
      <div className={clStyles.cardPreview}>{Preview && <Preview />}</div>
      <div className={clStyles.cardInfo}>
        <div className={clStyles.cardInfoRow}>
          <h3 className={clStyles.cardName}>{entry.name}</h3>
          <span className={clStyles.cardDocsLink}>Docs →</span>
        </div>
        <p className={clStyles.cardDesc}>{entry.description}</p>
      </div>
    </Link>
  );
}

/* ── Main page ── */

export function ComponentLibrary() {
  const [search, setSearch] = useState('');
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const [intTab, setIntTab] = useState('ticker');
  const [intPeriod, setIntPeriod] = useState('Y');

  const filtered = COMPONENTS.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.description.toLowerCase().includes(search.toLowerCase())
  );

  const grouped = CATEGORY_ORDER
    .map(cat => ({
      category: cat,
      label: CATEGORY_LABELS[cat],
      items: filtered.filter(c => c.category === cat),
    }))
    .filter(g => g.items.length > 0);

  return (
    <div className={clStyles.page}>
      <Header />

      <main className={clStyles.main}>
        <div className={clStyles.breadcrumb}>
          <Link to="/" className={clStyles.breadcrumbLink}>Главная</Link>
          <span>/</span>
          <span className={clStyles.breadcrumbCurrent}>Библиотека компонентов</span>
        </div>

        <div className={clStyles.titleBlock}>
          <h1 className={clStyles.titleH1}>Andromeda DS</h1>
          <p className={clStyles.titleDesc}>
            Библиотека компонентов дизайн-системы проекта. Все компоненты построены на токенах из Figma,
            поддерживают тёмную и светлую темы (переключатель ☀/🌙 в хедере) и адаптированы под финансовый интерфейс.
          </p>
        </div>

        <div className={clStyles.statsBar}>
          <div className={clStyles.statsLeft}>
            <div className={clStyles.statItem}>
              <div className={clStyles.statDotBlue} />
              <span className={clStyles.statLabel}>{COMPONENTS.length} components</span>
            </div>
            <div className={clStyles.statItem}>
              <div className={clStyles.statDotTurquoise} />
              <span className={clStyles.statLabel}>{CATEGORY_ORDER.length} categories</span>
            </div>
            <button
              onClick={toggleColorScheme}
              className={clStyles.themeToggle}
              title={colorScheme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            >
              <div className={clStyles.themeDotGroup}>
                <span className={colorScheme === 'dark' ? clStyles.themeDotActive : clStyles.themeDotInactive} />
                <span className={colorScheme === 'dark' ? clStyles.themeLabelActive : clStyles.themeLabelInactive}>Dark</span>
              </div>
              <div className={clStyles.themeSep} />
              <div className={clStyles.themeDotGroup}>
                <span className={colorScheme === 'light' ? clStyles.themeDotActive : clStyles.themeDotInactive} />
                <span className={colorScheme === 'light' ? clStyles.themeLabelActive : clStyles.themeLabelInactive}>Light</span>
              </div>
            </button>
          </div>
          <div className={clStyles.searchBox}>
            <DSInput
              size="sm"
              placeholder="Search components..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              leftIcon={
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeWidth="1.2" />
                  <path d="M9.5 9.5L13 13" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
              }
            />
          </div>
        </div>

        <div className={clStyles.categoryList}>
          <section>
            <div className={clStyles.sectionHeader}>
              <h2 className={clStyles.sectionTitle}>Foundation</h2>
            </div>
            <div className={clStyles.grid3}>
              <Link to="/components/tokens" className={clStyles.card}>
                <div className={clStyles.cardPreview}>
                  <div className={clStyles.swatchRow}>
                    {['#5A8CFF', '#1FC989', '#EA3943', '#F87D37', '#45D3CE', '#9A8CFF', '#F6C825'].map(c => (
                      <div key={c} className={clStyles.swatch} style={{ backgroundColor: c }} />
                    ))}
                  </div>
                </div>
                <div className={clStyles.cardInfo}>
                  <div className={clStyles.cardInfoRow}>
                    <h3 className={clStyles.cardName}>Design Tokens</h3>
                    <span className={clStyles.cardDocsLink}>Docs →</span>
                  </div>
                  <p className={clStyles.cardDesc}>Цвета, типографика, отступы, скругления — все токены дизайн-системы</p>
                </div>
              </Link>

              <Link to="/chart-builder-spec" className={clStyles.card}>
                <div className={clStyles.cardPreview}>
                  <svg width="80" height="56" viewBox="0 0 80 56" fill="none">
                    <rect x="8" y="8" width="64" height="40" rx="4" stroke="var(--ds-border-primary)" strokeWidth="1" />
                    <line x1="16" y1="40" x2="64" y2="40" stroke="var(--ds-border-primary)" strokeWidth="0.5" />
                    <line x1="16" y1="12" x2="16" y2="40" stroke="var(--ds-border-primary)" strokeWidth="0.5" />
                    <rect x="22" y="28" width="6" height="12" rx="1" fill="#5A8CFF" opacity="0.7" />
                    <rect x="30" y="22" width="6" height="18" rx="1" fill="#5A8CFF" opacity="0.85" />
                    <rect x="38" y="18" width="6" height="22" rx="1" fill="#5A8CFF" />
                    <rect x="46" y="24" width="6" height="16" rx="1" fill="#1FC989" opacity="0.7" />
                    <rect x="54" y="16" width="6" height="24" rx="1" fill="#1FC989" />
                    <polyline points="25,26 33,20 41,16 49,22 57,14" stroke="#9A8CFF" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className={clStyles.cardInfo}>
                  <div className={clStyles.cardInfoRow}>
                    <h3 className={clStyles.cardName}>Chart Builder Spec</h3>
                    <span className={clStyles.cardDocsLink}>PRD →</span>
                  </div>
                  <p className={clStyles.cardDesc}>Полная спецификация сервиса «Конструктор графиков» — PRD, TechSpec, модель данных, AC, тесты SVG-экспорта</p>
                </div>
              </Link>
            </div>
          </section>

          {grouped.map(group => (
            <section key={group.category}>
              <div className={clStyles.sectionHeader}>
                <h2 className={clStyles.sectionTitle}>{group.label}</h2>
                <span className={clStyles.sectionCount}>{group.items.length}</span>
              </div>
              <div className={clStyles.grid3}>
                {group.items.map(entry => (
                  <ComponentCard key={entry.id} entry={entry} />
                ))}
              </div>
            </section>
          ))}

          {filtered.length === 0 && (
            <div className={clStyles.emptyState}>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className={clStyles.emptyIcon}>
                <circle cx="18" cy="18" r="12" stroke="currentColor" strokeWidth="2" />
                <path d="M27 27L36 36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <span className={clStyles.emptyText}>No components found</span>
            </div>
          )}

          {/* ══════════════════════════════════════════
              Integration Examples — Live composite demos
              ═══════════════════════════════════════════ */}
          {!search && (
            <section>
              <div className={clStyles.intSectionHeader}>
                <h2 className={clStyles.sectionTitle}>Integration Examples</h2>
                <span className={clStyles.sectionCount}>3</span>
              </div>
              <p className={clStyles.intDesc}>
                Примеры компоновки DS-компонентов в реальных виджетах и экранах приложения. 
                Переключайте тему кнопкой Dark/Light выше, чтобы увидеть адаптацию.
              </p>

              <div className={clStyles.intList}>
                <div className={clStyles.intCard}>
                  <div className={clStyles.intCardHeader}>
                    <span className={clStyles.intCardLabel}>HomePage / TickerTape</span>
                    <span className={clStyles.intCardTech}>DSSparkline + DSBadge + DSSectionHeader</span>
                  </div>
                  <div className={clStyles.intCardBody}>
                    <DSSectionHeader action="Все инструменты" onAction={() => {}}>КОТИРОВКИ</DSSectionHeader>
                    <div className={clStyles.tickerRow}>
                      {[
                        { ticker: 'SBER', price: '312,45', pct: '+1,23%', up: true, data: [10,12,11,14,16,15,18,17,20] },
                        { ticker: 'GAZP', price: '187,20', pct: '-0,45%', up: false, data: [20,18,19,16,15,17,14,13,12] },
                        { ticker: 'LKOH', price: '7 890', pct: '+0,78%', up: true, data: [30,32,31,35,34,38,37,40,42] },
                        { ticker: 'ROSN', price: '564,10', pct: '+2,10%', up: true, data: [15,16,14,18,20,19,22,24,26] },
                        { ticker: 'NVTK', price: '1 245', pct: '-1,02%', up: false, data: [25,23,24,21,22,19,18,17,15] },
                      ].map(t => (
                        <div key={t.ticker} className={clStyles.tickerCard}>
                          <div className={clStyles.tickerInfo}>
                            <span className={clStyles.tickerSymbol}>{t.ticker}</span>
                            <div className={clStyles.tickerPriceRow}>
                              <span className={clStyles.tickerPrice}>{t.price}</span>
                              <span className={t.up ? clStyles.tickerPctUp : clStyles.tickerPctDown}>{t.pct}</span>
                            </div>
                          </div>
                          <DSSparkline data={t.data} width={60} height={24} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className={clStyles.intCard}>
                  <div className={clStyles.intCardHeader}>
                    <span className={clStyles.intCardLabel}>DashboardPage / FilterBar</span>
                    <span className={clStyles.intCardTech}>DSSelect + DSSegmentButton + DSButton + DSInput</span>
                  </div>
                  <div className={clStyles.intCardBody}>
                    <div className={clStyles.filterRow}>
                      <div className={clStyles.filterField}>
                        <DSSelect
                          size="xs"
                          label="Компания"
                          value="sber"
                          onChange={() => {}}
                          options={[
                            { value: 'sber', label: 'SBER — Сбербанк' },
                            { value: 'gazp', label: 'GAZP — Газпром' },
                            { value: 'lkoh', label: 'LKOH — ЛУКОЙЛ' },
                          ]}
                        />
                      </div>
                      <DSSegmentButton variant="stroke" size="xs" value={intPeriod} onChange={setIntPeriod}>
                        <DSSegment value="Y">Year</DSSegment>
                        <DSSegment value="H">Half</DSSegment>
                        <DSSegment value="Q">Quarter</DSSegment>
                      </DSSegmentButton>
                      <DSButton variant="primary" size="sm">Применить</DSButton>
                      <DSButton variant="ghost" size="sm">Сбросить</DSButton>
                    </div>
                  </div>
                </div>

                <div className={clStyles.intCard}>
                  <div className={clStyles.intCardHeader}>
                    <span className={clStyles.intCardLabel}>HomePage / EventCards + NewsFeed</span>
                    <span className={clStyles.intCardTech}>DSBadge + DSSectionHeader + DSTabs + DSTooltip</span>
                  </div>
                  <div className={clStyles.intCardBody}>
                    <div className={clStyles.eventGrid}>
                      <div className={clStyles.eventCol}>
                        <DSSectionHeader action="12 событий" onAction={() => {}}>ПРЕДСТОЯЩИЕ СОБЫТИЯ</DSSectionHeader>
                        <div className={clStyles.eventCards}>
                          {[
                            { date: '28 фев', title: 'Газпром нефть: Дивиденды за 2025', tag: 'Нефть и газ', analyst: 'А. Петров' },
                            { date: '03 мар', title: 'SBER: Отчёт за Q4 2025', tag: 'Банки', analyst: 'М. Иванова' },
                          ].map((e, i) => (
                            <div key={i} className={clStyles.eventCard}>
                              <div className={clStyles.eventCardTop}>
                                <span className={clStyles.eventDate}>{e.date}</span>
                                <DSBadge variant="pill" color="gray" size="xs">{e.tag}</DSBadge>
                              </div>
                              <p className={clStyles.eventTitle}>{e.title}</p>
                              <div className={clStyles.eventAnalyst}>
                                <div className={clStyles.eventAvatar}>{e.analyst.split(' ').map(n => n[0]).join('')}</div>
                                <span className={clStyles.eventAnalystName}>{e.analyst}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className={clStyles.eventCol}>
                        <DSSectionHeader>ЛЕНТА НОВОСТЕЙ</DSSectionHeader>
                        <div className={clStyles.newsTabs}>
                          <DSTabs size="xs" value={intTab} onChange={setIntTab}>
                            <DSTab value="ticker">По тикеру</DSTab>
                            <DSTab value="market">Рынки</DSTab>
                            <DSTab value="macro">Макро</DSTab>
                          </DSTabs>
                          <div className={clStyles.newsList}>
                            {[
                              { time: '14:32', text: 'ЦБ РФ оставил ключевую ставку без изменений — 21%', src: 'Reuters' },
                              { time: '13:15', text: 'SBER: Чистая прибыль за 2025 выросла на 12%', src: 'Интерфакс' },
                              { time: '12:40', text: 'Нефть Brent торгуется выше $82 за баррель', src: 'Andromeda' },
                            ].map((n, i) => (
                              <div key={i} className={clStyles.newsItem}>
                                <span className={clStyles.newsTime}>{n.time}</span>
                                <div className={clStyles.newsContent}>
                                  <p className={clStyles.newsText}>{n.text}</p>
                                  <span className={clStyles.newsSrc}>{n.src}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
        </div>
      </main>

      <div className={clStyles.footer}>
        <div>Andromeda Design System v1.0</div>
        <div className={clStyles.footerRight}>
          <span>{COMPONENTS.length} components</span>
          <span>React + Mantine v8</span>
          <span>Figma Tokens (W3C DTCG)</span>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
}