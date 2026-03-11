import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router';
import { DocShell, DocSection, DocPreview, DocPreviewDual, DocSpecTable, DocCode, DocPropsTable } from './DocShell';
import { DocSidebar } from './DocSidebar';
import { DSButton } from '../ui/ds-button';
import { DSInput } from '../ui/ds-input';
import { DSCheckbox } from '../ui/ds-checkbox';
import { DSTabs, DSTab } from '../ui/ds-tabs';
import { DSSegmentButton, DSSegment } from '../ui/ds-segment-button';
import { DSTable, DSTableCellEditable, DSTableCellNumber, DSTableCellPctChange, DSTableCellTicker, DSTableCellPrice, type DSTableColumn, type DSTableRowGroup } from '../ui/ds-table';
import { DSSelect } from '../ui/ds-select';
import { Notification, notify } from '../ui/notification';
import {
  DSCustomDropdown,
  DSCustomDropdownTrigger,
  DSCustomDropdownPanel,
  DSCustomDropdownHeader,
  DSCustomDropdownContent,
  DSCustomDropdownGroup,
  DSCustomDropdownItem,
  DSCustomDropdownFooter,
  DSCustomDropdownFooterButton,
} from '../ui/ds-custom-dropdown';
import { DSChartGrid } from '../ui/ds-chart-grid';
import { DSTooltip, DSTooltipContent, DSChartTooltip, type DSTooltipItem } from '../ui/ds-tooltip';
import { DSModal, DSModalBody, DSModalFooter } from '../ui/ds-modal';
import {
  DSLineChart, DSBarChart, DSAreaChart, DSPieChart, DSDonutChart,
  DSScatterChart, DSComboChart, DSWaterfallChart, DSGaugeChart,
  DSSparklineChart, DSRadarChart, DSStackedBarChart,
  DSHorizontalBarChart, DSTreemapChart,
} from '../ui/ds-chart';
import { DSSparkline } from '../ui/ds-sparkline';
import { DSSectionHeader } from '../ui/ds-section-header';
import { DSSwitch } from '../ui/ds-switch';
import { DSBadge, ALL_SOURCES } from '../ui/ds-badge';
import { DSTag } from '../ui/ds-tag';
import { DSMenu, DSMenuGroup, DSMenuItem } from '../ui/ds-menu';
import { DSLegend } from '../ui/ds-legend';
import { DSCalendar } from '../ui/ds-calendar';
import { DSConfirmDialog } from '../ui/ds-confirm-dialog';
import { CompanyLogo } from '../chart-builder/CompanyLogo';
import s from './ComponentDetailPage.module.css';

/* ═══════════════════════════════════════════════════════
   ComponentDetailPage — Full documentation for each DS component
   ═══════════════════════════════════════════════════════ */

const COMPONENT_NAMES: Record<string, string> = {
  'ds-button': 'Button',
  'ds-input': 'Input',
  'ds-checkbox': 'Checkbox',
  'ds-select': 'Select',
  'ds-custom-dropdown': 'Custom Dropdown',
  'ds-tabs': 'Tabs',
  'ds-segment-button': 'Segment Button',
  'ds-table': 'Table',
  'ds-chart-grid': 'Chart Grid',
  'ds-chart': 'Chart',
  'notification': 'Notification',
  'ds-tooltip': 'Tooltip',
  'ds-modal': 'Modal',
  'ds-sparkline': 'Sparkline',
  'ds-section-header': 'Section Header',
  'ds-switch': 'Switch',
  'ds-badge': 'Badge',
  'ds-tag': 'Tag',
  'ds-menu': 'Menu',
  'ds-legend': 'Legend',
  'ds-calendar': 'Calendar',
  'ds-confirm-dialog': 'Confirm Dialog',
};

/* ─────────── Helper: section label ─────────── */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return <div className={s.sectionLabel}>{children}</div>;
}

/* ════════════════════════════════════════════════
   Per-component detail renderers
   ════════════════════════════════════════════════ */

function ButtonDetails() {
  const variants = ['primary', 'secondary', 'outline', 'ghost', 'destructive'] as const;
  const sizes = ['xl', 'lg', 'md', 'sm'] as const;
  const PlusIcon = () => (<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>);

  return (
    <div>
      <DocSection title="Variants" description="5 визуальных вариантов для разных контекстов действий.">
        <DocPreview>
          <div className={s.flexRow}>
            {variants.map(v => <DSButton key={v} variant={v} size="md">{v.charAt(0).toUpperCase() + v.slice(1)}</DSButton>)}
          </div>
        </DocPreview>
      </DocSection>

      <DocSection title="Sizes" description="4 размера: XL (56px), LG (48px), MD (40px), SM (32px).">
        <DocPreview>
          <div className={s.flexRowEnd}>
            {sizes.map(s => <DSButton key={s} variant="primary" size={s}>Size {s.toUpperCase()}</DSButton>)}
          </div>
        </DocPreview>
        <div className={s.spacer4} />
        <DocSpecTable rows={[
          { prop: 'XL', value: 'height: 56px, px: 24px, gap: 12px, font: 18px/24px, UPPERCASE', token: 'h-[56px] px-[24px]' },
          { prop: 'LG', value: 'height: 48px, px: 20px, gap: 12px, font: 16px/20px', token: 'h-[48px] px-[20px]' },
          { prop: 'MD', value: 'height: 40px, px: 16px, gap: 8px, font: 14px/20px', token: 'h-[40px] px-[16px]' },
          { prop: 'SM', value: 'height: 32px, px: 12px, gap: 8px, font: 12px/16px', token: 'h-[32px] px-[12px]' },
        ]} />
      </DocSection>

      <DocSection title="Theme Comparison" description="Все варианты на тёмном и светлом фоне.">
        <DocPreviewDual>
          <div className={s.flexRowGap2}>
            <DSButton variant="primary" size="sm">Primary</DSButton>
            <DSButton variant="secondary" size="sm">Secondary</DSButton>
            <DSButton variant="outline" size="sm">Outline</DSButton>
            <DSButton variant="ghost" size="sm">Ghost</DSButton>
            <DSButton variant="destructive" size="sm">Destructive</DSButton>
          </div>
        </DocPreviewDual>
      </DocSection>

      <DocSection title="With Icons" description="leftIcon, rightIcon, iconOnly.">
        <DocPreview>
          <div className={s.flexRow}>
            <DSButton variant="primary" size="md" leftIcon={<PlusIcon />}>Left Icon</DSButton>
            <DSButton variant="secondary" size="md" rightIcon={<PlusIcon />}>Right Icon</DSButton>
            <DSButton variant="outline" size="md" leftIcon={<PlusIcon />} rightIcon={<PlusIcon />}>Both</DSButton>
            <DSButton variant="primary" size="md" iconOnly><PlusIcon /></DSButton>
            <DSButton variant="outline" size="sm" iconOnly><PlusIcon /></DSButton>
          </div>
        </DocPreview>
      </DocSection>

      <DocSection title="States" description="Default, hover (CSS), loading, disabled.">
        <DocPreview>
          <div className={s.flexRow}>
            <DSButton variant="primary" size="md">Default</DSButton>
            <DSButton variant="primary" size="md" loading>Loading</DSButton>
            <DSButton variant="primary" size="md" disabled>Disabled</DSButton>
            <DSButton variant="outline" size="md" disabled>Disabled</DSButton>
          </div>
        </DocPreview>
      </DocSection>

      <DocSection title="Styling Specs">
        <DocSpecTable rows={[
          { prop: 'border-radius', value: '8px', token: 'rounded-lg' },
          { prop: 'font-weight', value: '600 (semibold)', token: 'font-semibold' },
          { prop: 'transition', value: 'colors 150ms', token: 'transition-colors duration-150' },
          { prop: 'primary bg', value: '#5A8CFF', token: 'var(--ds-blue-6)' },
          { prop: 'primary hover', value: '#729CFF', token: 'var(--ds-blue-5)' },
          { prop: 'secondary bg', value: 'dark:#191F2D / light:#E7EFFF', token: 'var(--ds-btn-secondary-bg)' },
          { prop: 'secondary text', value: '#5A8CFF', token: 'var(--ds-blue-6)' },
          { prop: 'destructive bg', value: 'dark:#2E2230 / light:#FCE3E4', token: 'var(--ds-btn-destructive-bg)' },
          { prop: 'destructive text', value: '#EA3943 (red-6)', token: 'var(--ds-red-6)' },
          { prop: 'outline border', value: '1px solid #5A8CFF', token: 'var(--ds-blue-6)' },
          { prop: 'ghost hover', value: 'blue-6 @ 10%', token: 'var(--ds-btn-ghost-hover)' },
          { prop: 'disabled', value: 'opacity: 0.3', token: 'opacity: 0.3' },
          { prop: 'hover', value: 'JS onMouseEnter/Leave', token: 'useState-managed' },
        ]} />
      </DocSection>

      <DocSection title="Props API">
        <DocPropsTable rows={[
          { name: 'variant', type: "'primary' | 'secondary' | 'destructive' | 'outline' | 'ghost'", default: "'primary'", description: 'Visual variant' },
          { name: 'size', type: "'xl' | 'lg' | 'md' | 'sm'", default: "'md'", description: 'Size variant' },
          { name: 'leftIcon', type: 'ReactNode', default: '—', description: 'Icon before label' },
          { name: 'rightIcon', type: 'ReactNode', default: '—', description: 'Icon after label' },
          { name: 'iconOnly', type: 'boolean', default: 'false', description: 'Square icon-only mode' },
          { name: 'loading', type: 'boolean', default: 'false', description: 'Show spinner, disable button' },
          { name: 'disabled', type: 'boolean', default: 'false', description: 'Disabled state' },
        ]} />
      </DocSection>

      <DocSection title="Usage">
        <DocCode>{`import { DSButton } from './ui/ds-button';

<DSButton variant="primary" size="sm" leftIcon={<Plus />}>
  Create Scenario
</DSButton>

<DSButton variant="outline" size="md" iconOnly>
  <FileText />
</DSButton>`}</DocCode>
      </DocSection>
    </div>
  );
}

function InputDetails() {
  const [val, setVal] = useState('Hello');
  const sizes = ['lg', 'md', 'sm', 'xs', 'xxs'] as const;
  const SearchIcon = () => (<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeWidth="1.2" /><path d="M9.5 9.5L13 13" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" /></svg>);

  return (
    <div>
      <DocSection title="Sizes" description="5 размеров: LG (56px), MD (48px), SM (40px), XS (32px), XXS (~24px).">
        <DocPreview>
          <div className={s.flexColMax360}>
            {sizes.map(s => (
              <DSInput key={s} size={s} placeholder={`Size ${s.toUpperCase()}`} label={`Size ${s.toUpperCase()}`} />
            ))}
          </div>
        </DocPreview>
        <div className={s.spacer4} />
        <DocSpecTable rows={[
          { prop: 'LG', value: 'h: 56px, px: 16px, font: 18px/28px, label: 16px', token: 'h-14 px-4' },
          { prop: 'MD', value: 'h: 48px, px: 12px, font: 16px/24px, label: 14px', token: 'h-12 px-3' },
          { prop: 'SM', value: 'h: 40px, px: 12px, font: 14px/20px, label: 12px', token: 'h-10 px-3' },
          { prop: 'XS', value: 'h: 32px, px: 8px, font: 12px/16px, label: 12px', token: 'h-8 px-2' },
          { prop: 'XXS', value: 'h: auto (~24px), px: 8px, font: 10px/16px', token: 'px-2' },
        ]} />
      </DocSection>

      <DocSection title="Validation States" description="4 состояния валидации: default, error, success, warning.">
        <DocPreview>
          <div className={s.grid2}>
            <DSInput size="sm" label="Default" placeholder="Type here" value={val} onChange={e => setVal(e.target.value)} />
            <DSInput size="sm" label="Error" placeholder="Invalid" errorText="This field is required" />
            <DSInput size="sm" label="Success" placeholder="Valid" successText="Looks good" />
            <DSInput size="sm" label="Disabled" placeholder="Disabled" disabled />
          </div>
        </DocPreview>
      </DocSection>

      <DocSection title="Slots" description="leftIcon, rightElement, label с asterisk, helperText.">
        <DocPreview>
          <div className={s.flexColMax360}>
            <DSInput size="sm" label="Search" leftIcon={<SearchIcon />} placeholder="Search..." />
            <DSInput size="sm" label="Area" placeholder="0" rightElement="m²" />
            <DSInput size="sm" label="Required Field" required placeholder="Enter value" helperText="Helper text below" />
          </div>
        </DocPreview>
      </DocSection>

      <DocSection title="Styling Specs">
        <DocSpecTable rows={[
          { prop: 'border-radius', value: '8px', token: 'rounded-lg' },
          { prop: 'border default', value: 'dark:#2A2E39 / light:#D0D5DD', token: 'var(--ds-border-primary)' },
          { prop: 'border hover', value: 'blue-6 @ 30%', token: 'var(--ds-input-border-hover)' },
          { prop: 'border focus', value: '#5A8CFF', token: 'var(--ds-blue-6)' },
          { prop: 'border error', value: '#EA3943', token: 'var(--ds-red-6)' },
          { prop: 'border success', value: '#1FC989', token: 'var(--ds-green-6)' },
          { prop: 'bg', value: 'transparent', token: '—' },
          { prop: 'text color', value: 'dark:#E0E1E2 / light:#1A1D24', token: 'var(--ds-text-primary)' },
          { prop: 'placeholder', value: 'gray-6 @ 30%', token: 'rgba(103,124,156,0.3)' },
          { prop: 'font-feature', value: "'lnum', 'tnum'", token: 'Tabular numbers' },
          { prop: 'disabled', value: 'opacity: 0.5', token: 'opacity-50' },
        ]} />
      </DocSection>

      <DocSection title="Props API">
        <DocPropsTable rows={[
          { name: 'size', type: "'lg' | 'md' | 'sm' | 'xs' | 'xxs'", default: "'md'", description: 'Size variant' },
          { name: 'label', type: 'string', default: '—', description: 'Label above input' },
          { name: 'required', type: 'boolean', default: 'false', description: 'Show red asterisk' },
          { name: 'leftIcon', type: 'ReactNode', default: '—', description: 'Icon left of input' },
          { name: 'rightElement', type: 'ReactNode', default: '—', description: 'Suffix right of input' },
          { name: 'helperText', type: 'string', default: '—', description: 'Helper text below' },
          { name: 'errorText', type: 'string', default: '—', description: 'Error message (sets red border)' },
          { name: 'successText', type: 'string', default: '—', description: 'Success message (sets green border)' },
          { name: 'disabled', type: 'boolean', default: 'false', description: 'Disabled state' },
        ]} />
      </DocSection>

      <DocSection title="Usage">
        <DocCode>{`import { DSInput } from './ui/ds-input';

<DSInput
  size="sm"
  label="Revenue"
  required
  placeholder="0.00"
  rightElement="mn USD"
  helperText="Annual revenue"
/>`}</DocCode>
      </DocSection>
    </div>
  );
}

function CheckboxDetails() {
  const [a, setA] = useState(false);
  const [b, setB] = useState(true);
  return (
    <div>
      <DocSection title="States" description="3 визуальных состояния: unchecked, checked, indeterminate. 2 размера: md (16px), sm (12px).">
        <DocPreview>
          <div className={s.flexCol6}>
            <div>
              <SectionLabel>Size MD (16px)</SectionLabel>
              <div className={s.flexRowGap6}>
                <DSCheckbox checked={false} label="Unchecked" size="md" />
                <DSCheckbox checked={true} label="Checked" size="md" />
                <DSCheckbox checked="indeterminate" label="Indeterminate" size="md" />
                <DSCheckbox checked={false} label="Disabled" size="md" disabled />
                <DSCheckbox checked={true} label="Disabled Checked" size="md" disabled />
              </div>
            </div>
            <div>
              <SectionLabel>Size SM (12px)</SectionLabel>
              <div className={s.flexRowGap6}>
                <DSCheckbox checked={false} label="Unchecked" size="sm" />
                <DSCheckbox checked={true} label="Checked" size="sm" />
                <DSCheckbox checked="indeterminate" label="Indeterminate" size="sm" />
                <DSCheckbox checked={false} label="Disabled" size="sm" disabled />
              </div>
            </div>
          </div>
        </DocPreview>
      </DocSection>

      <DocSection title="Interactive">
        <DocPreview>
          <div className={s.flexRowGap6}>
            <DSCheckbox checked={a} onChange={setA} label={a ? 'Checked (click to toggle)' : 'Unchecked (click to toggle)'} />
            <DSCheckbox checked={b} onChange={setB} label="Another option" />
          </div>
        </DocPreview>
      </DocSection>

      <DocSection title="Styling Specs">
        <DocSpecTable rows={[
          { prop: 'MD box', value: '16 x 16px', token: 'size-[16px]' },
          { prop: 'SM box', value: '12 x 12px', token: 'size-[12px]' },
          { prop: 'MD border-radius', value: '4px', token: 'rounded-[4px]' },
          { prop: 'SM border-radius', value: '3px', token: 'rounded-[3px]' },
          { prop: 'Unchecked border', value: 'dark:#3D4867 / light:#B0BAC9', token: 'var(--ds-checkbox-border)' },
          { prop: 'Unchecked hover border', value: '#9CBAFF', token: 'var(--ds-checkbox-hover)' },
          { prop: 'Checked bg', value: '#5A8CFF', token: 'var(--ds-blue-6)' },
          { prop: 'Check stroke', value: 'white, 1.5px (md) / 1.2px (sm)', token: '—' },
          { prop: 'Label gap', value: '8px', token: 'gap-2' },
          { prop: 'MD label font', value: '14px / 20px', token: 'text-[14px] leading-[20px]' },
          { prop: 'SM label font', value: '12px / 16px', token: 'text-[12px] leading-[16px]' },
          { prop: 'Disabled', value: 'opacity: 0.5', token: 'opacity-50' },
        ]} />
      </DocSection>

      <DocSection title="Props API">
        <DocPropsTable rows={[
          { name: 'checked', type: "boolean | 'indeterminate'", default: 'false', description: 'Controlled state' },
          { name: 'onChange', type: '(checked: boolean) => void', default: '—', description: 'Change handler' },
          { name: 'size', type: "'md' | 'sm'", default: "'md'", description: 'Size variant' },
          { name: 'label', type: 'ReactNode', default: '—', description: 'Label text' },
          { name: 'disabled', type: 'boolean', default: 'false', description: 'Disabled state' },
        ]} />
      </DocSection>
    </div>
  );
}

function TabsDetails() {
  const [tab1, setTab1] = useState('a');
  const [tab2, setTab2] = useState('a');
  const [tab3, setTab3] = useState('a');
  const [tab4, setTab4] = useState('a');
  const StarIcon = () => (<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1l2.2 4.5 5 .7-3.6 3.5.9 5L8 12.4 3.5 14.7l.9-5L.8 6.2l5-.7L8 1z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" /></svg>);

  return (
    <div>
      <DocSection title="Sizes" description="4 размера: LG, MD, SM, XS. Активный таб подчёркнут 3px blue-6.">
        <DocPreview>
          <div className={s.flexCol}>
            <div><SectionLabel>LG</SectionLabel><DSTabs size="lg" value={tab1} onChange={setTab1}><DSTab value="a">Overview</DSTab><DSTab value="b">Details</DSTab><DSTab value="c">Settings</DSTab></DSTabs></div>
            <div><SectionLabel>MD</SectionLabel><DSTabs size="md" value={tab2} onChange={setTab2}><DSTab value="a">Overview</DSTab><DSTab value="b">Details</DSTab><DSTab value="c">Settings</DSTab></DSTabs></div>
            <div><SectionLabel>SM</SectionLabel><DSTabs size="sm" value={tab3} onChange={setTab3}><DSTab value="a">Overview</DSTab><DSTab value="b">Details</DSTab><DSTab value="c">Settings</DSTab></DSTabs></div>
            <div><SectionLabel>XS</SectionLabel><DSTabs size="xs" value={tab4} onChange={setTab4}><DSTab value="a">Overview</DSTab><DSTab value="b">Details</DSTab><DSTab value="c">Settings</DSTab></DSTabs></div>
          </div>
        </DocPreview>
        <div className={s.spacer4} />
        <DocSpecTable rows={[
          { prop: 'LG', value: 'px: 20px, py: 14px, gap: 12px, icon: 24px, font: 18px/24px', token: 'px-5 py-3.5' },
          { prop: 'MD', value: 'px: 16px, py: 12px, gap: 8px, icon: 20px, font: 14px/20px', token: 'px-4 py-3' },
          { prop: 'SM', value: 'px: 12px, py: 10px, gap: 8px, icon: 18px, font: 14px/20px', token: 'px-3 py-2.5' },
          { prop: 'XS', value: 'px: 12px, py: 8px, gap: 8px, icon: 16px, font: 12px/16px', token: 'px-3 py-2' },
        ]} />
      </DocSection>

      <DocSection title="With Icon & Badge" description="Опциональная иконка и бейдж-счётчик.">
        <DocPreview>
          <DSTabs size="sm" value={tab3} onChange={setTab3}>
            <DSTab value="a" icon={<StarIcon />}>With Icon</DSTab>
            <DSTab value="b" badge="12">With Badge</DSTab>
            <DSTab value="c" icon={<StarIcon />} badge="3">Both</DSTab>
          </DSTabs>
        </DocPreview>
      </DocSection>

      <DocSection title="States" description="default (no border), hover (2px edge-hover), active (3px blue-6), disabled (opacity 20%).">
        <DocPreview>
          <DSTabs size="sm" value="active" onChange={() => { }}>
            <DSTab value="default">Default</DSTab>
            <DSTab value="active">Active</DSTab>
            <DSTab value="dis" disabled>Disabled</DSTab>
          </DSTabs>
        </DocPreview>
      </DocSection>

      <DocSection title="Styling Specs">
        <DocSpecTable rows={[
          { prop: 'Active border', value: '3px solid #5A8CFF', token: 'var(--ds-blue-6)' },
          { prop: 'Hover border', value: '2px blue-6 @ 30%', token: 'rgba(90,140,255,0.3)' },
          { prop: 'Default border', value: 'transparent', token: 'border-transparent' },
          { prop: 'font-weight', value: '600 (semibold)', token: 'font-semibold' },
          { prop: 'Badge bg', value: '#5A8CFF', token: 'var(--ds-blue-6)' },
          { prop: 'Badge text', value: 'white', token: 'text-white' },
          { prop: 'Badge shape', value: 'rounded-full', token: 'rounded-full' },
          { prop: 'Disabled opacity', value: '20%', token: 'opacity-20' },
        ]} />
      </DocSection>
    </div>
  );
}

function SegmentDetails() {
  const [v1, setV1] = useState('a');
  const [v2, setV2] = useState('a');
  const [v3, setV3] = useState('a');
  const [v4, setV4] = useState('a');
  const [v5, setV5] = useState('a');
  const [v6, setV6] = useState('a');

  return (
    <div>
      <DocSection title="Variants" description="3 варианта контейнера: fill (bg), stroke (border), individual (каждый сегмент отдельно).">
        <DocPreview>
          <div className={s.flexCol}>
            <div><SectionLabel>Fill</SectionLabel><DSSegmentButton variant="fill" size="sm" value={v1} onChange={setV1}><DSSegment value="a">Year</DSSegment><DSSegment value="b">Half</DSSegment><DSSegment value="c">Quarter</DSSegment></DSSegmentButton></div>
            <div><SectionLabel>Stroke</SectionLabel><DSSegmentButton variant="stroke" size="sm" value={v2} onChange={setV2}><DSSegment value="a">Year</DSSegment><DSSegment value="b">Half</DSSegment><DSSegment value="c">Quarter</DSSegment></DSSegmentButton></div>
            <div><SectionLabel>Individual</SectionLabel><DSSegmentButton variant="individual" size="sm" value={v3} onChange={setV3}><DSSegment value="a">Year</DSSegment><DSSegment value="b">Half</DSSegment><DSSegment value="c">Quarter</DSSegment></DSSegmentButton></div>
          </div>
        </DocPreview>
      </DocSection>

      <DocSection title="Active Styles" description="2 стиля активного сегмента: solid (залитый blue-6) и outline (прозрачный с бордером).">
        <DocPreview>
          <div className={s.flexCol}>
            <div><SectionLabel>Solid (default)</SectionLabel><DSSegmentButton variant="fill" size="sm" activeStyle="solid" value={v4} onChange={setV4}><DSSegment value="a">A</DSSegment><DSSegment value="b">B</DSSegment><DSSegment value="c">C</DSSegment></DSSegmentButton></div>
            <div><SectionLabel>Outline</SectionLabel><DSSegmentButton variant="fill" size="sm" activeStyle="outline" value={v5} onChange={setV5}><DSSegment value="a">A</DSSegment><DSSegment value="b">B</DSSegment><DSSegment value="c">C</DSSegment></DSSegmentButton></div>
          </div>
        </DocPreview>
      </DocSection>

      <DocSection title="Sizes" description="3 размера: MD (auto), SM (28px), XS (24px).">
        <DocPreview>
          <div className={s.flexCol}>
            {(['md', 'sm', 'xs'] as const).map(s => (
              <div key={s}><SectionLabel>{s.toUpperCase()}</SectionLabel><DSSegmentButton variant="fill" size={s} value={v6} onChange={setV6}><DSSegment value="a">Year</DSSegment><DSSegment value="b">Half</DSSegment><DSSegment value="c">Quarter</DSSegment></DSSegmentButton></div>
            ))}
          </div>
        </DocPreview>
        <div className={s.spacer4} />
        <DocSpecTable rows={[
          { prop: 'MD', value: 'px: 12px, py: 8px, icon: 18px, font: 14px/20px, inner-r: 6px', token: 'px-3 py-2' },
          { prop: 'SM', value: 'px: 12px, h: 28px, icon: 16px, font: 12px/16px, inner-r: 6px', token: 'px-3 h-7' },
          { prop: 'XS', value: 'px: 8px, h: 24px, icon: 12px, font: 12px/16px, inner-r: 8px', token: 'px-2 h-6' },
        ]} />
      </DocSection>

      <DocSection title="Styling Specs">
        <DocSpecTable rows={[
          { prop: 'Container radius', value: '8px', token: 'rounded-lg' },
          { prop: 'Container padding', value: '2px', token: 'p-0.5' },
          { prop: 'Container gap', value: '2px', token: 'gap-0.5' },
          { prop: 'Fill bg', value: 'dark:#131722 / light:#F8FAFE', token: 'var(--ds-bg-primary)' },
          { prop: 'Stroke border', value: 'dark:#2A2E39 / light:#D0D5DD', token: 'var(--ds-border-primary)' },
          { prop: 'Individual inactive bg', value: 'dark:#191F2D / light:#FFFFFF', token: 'var(--ds-bg-secondary)' },
          { prop: 'Active solid bg', value: '#5A8CFF', token: 'var(--ds-blue-6)' },
          { prop: 'Active solid text', value: 'white', token: 'white' },
          { prop: 'Inactive text', value: 'dark:#C4C7C9 / light:#667085', token: 'var(--ds-text-secondary)' },
          { prop: 'font-weight', value: '600', token: 'font-semibold' },
        ]} />
      </DocSection>
    </div>
  );
}

function SelectDetails() {
  const [v1, setV1] = useState('');
  const [v2, setV2] = useState('');
  const [v3, setV3] = useState('');
  const [v4, setV4] = useState('');
  const opts = [
    { value: 'opt1', label: 'ROSN — Роснефть' },
    { value: 'opt2', label: 'GAZP — Газпром' },
    { value: 'opt3', label: 'LKOH — ЛУКОЙЛ' },
  ];

  return (
    <div>
      <DocSection title="Sizes" description="4 размера: XS (32px), SM (40px), MD (48px), LG (56px).">
        <DocPreview>
          <div className={s.grid2}>
            <DSSelect size="xs" value={v1} onChange={setV1} options={opts} placeholder="XS (32px)" label="XS" />
            <DSSelect size="sm" value={v2} onChange={setV2} options={opts} placeholder="SM (40px)" label="SM" />
            <DSSelect size="md" value={v3} onChange={setV3} options={opts} placeholder="MD (48px)" label="MD" />
            <DSSelect size="lg" value={v4} onChange={setV4} options={opts} placeholder="LG (56px)" label="LG" />
          </div>
        </DocPreview>
      </DocSection>

      <DocSection title="States" description="enable, filled, disabled, error, success.">
        <DocPreview>
          <div className={s.grid2}>
            <DSSelect size="sm" value="" onChange={() => { }} options={opts} placeholder="Empty" label="Default" />
            <DSSelect size="sm" value="opt1" onChange={() => { }} options={opts} placeholder="Select" label="Filled" />
            <DSSelect size="sm" value="" onChange={() => { }} options={opts} placeholder="Select" label="Disabled" disabled />
            <DSSelect size="sm" value="" onChange={() => { }} options={opts} placeholder="Select" label="Error" error="Required field" />
          </div>
        </DocPreview>
      </DocSection>

      <DocSection title="Styling Specs">
        <DocSpecTable rows={[
          { prop: 'border-radius', value: '8px', token: 'rounded-lg' },
          { prop: 'Dropdown bg', value: 'dark:#131722 / light:#FFFFFF', token: 'var(--ds-bg-primary)' },
          { prop: 'Dropdown border', value: 'dark:#2A2E39 / light:#D0D5DD', token: 'var(--ds-border-primary)' },
          { prop: 'Item hover', value: 'blue-6 @ 10%', token: 'rgba(90,140,255,0.1)' },
          { prop: 'Item selected', value: 'blue-6 @ 30%', token: 'rgba(90,140,255,0.3)' },
          { prop: 'Chevron color', value: 'currentColor', token: '—' },
          { prop: 'Max dropdown height', value: '280px', token: 'max-h-[280px]' },
        ]} />
      </DocSection>
    </div>
  );
}

function CustomDropdownDetails() {
  const [open, setOpen] = useState(false);
  const [sel, setSel] = useState<string[]>(['Revenue']);
  const [search, setSearch] = useState('');
  const [segTab, setSegTab] = useState('Все');

  const [openSub, setOpenSub] = useState(false);
  const [selSub, setSelSub] = useState<string>('LKOH');

  const SEGMENTS = [
    { value: 'Все', label: 'Все' },
    { value: 'Summary', label: 'Summary' },
    { value: 'PnL', label: 'PnL' },
    { value: 'CF', label: 'CF' },
    { value: 'Mults', label: 'Mults & Yield' },
    { value: 'Other', label: 'Other' },
  ];

  const ALL_ITEMS: Record<string, string[]> = {
    'Summary': ['Revenue', 'EBITDA', 'Net Income'],
    'PnL': ['Gross Profit', 'Operating Income'],
    'CF': ['Free cash flow', 'Sustaining FCF'],
    'Mults': ['Dividend yield, %', 'FCF yield, %'],
    'Other': ['Net debt', 'net debt/EBITDA'],
  };

  const visibleGroups = Object.entries(ALL_ITEMS)
    .filter(([cat]) => segTab === 'Все' || cat === segTab)
    .map(([cat, items]) => ({
      cat,
      items: items.filter(it => !search.trim() || it.toLowerCase().includes(search.toLowerCase().trim())),
    }))
    .filter(g => g.items.length > 0);

  return (
    <div>
      <DocSection title="Full Example" description="Composable: Trigger + Panel с Header (search + segment tabs), Content, Items и Footer. Сегменты прокручиваются горизонтально при нехватке ширины.">
        <DocPreview>
          <div className={s.maxW300}>
            <DSCustomDropdown isOpen={open} onOpenChange={setOpen}>
              <DSCustomDropdownTrigger placeholder="Выберите показатель">
                {sel.length > 0 ? sel.join(', ') : undefined}
              </DSCustomDropdownTrigger>
              <DSCustomDropdownPanel minWidth={340}>
                <DSCustomDropdownHeader
                  title="Выберите показатель"
                  showSearch
                  searchValue={search}
                  onSearchChange={setSearch}
                  searchPlaceholder="Начните вводить"
                  segments={SEGMENTS}
                  segmentValue={segTab}
                  onSegmentChange={setSegTab}
                />
                <DSCustomDropdownContent maxHeight={240}>
                  {visibleGroups.map(g => (
                    <DSCustomDropdownGroup key={g.cat} title={g.cat}>
                      {g.items.map(item => (
                        <DSCustomDropdownItem
                          key={item}
                          checkbox
                          checked={sel.includes(item)}
                          onClick={() => setSel(p => p.includes(item) ? p.filter(x => x !== item) : [...p, item])}
                        >
                          {item}
                        </DSCustomDropdownItem>
                      ))}
                    </DSCustomDropdownGroup>
                  ))}
                  {visibleGroups.length === 0 && (
                    <div className={s.emptyText}>Ничего не найдено</div>
                  )}
                </DSCustomDropdownContent>
                <DSCustomDropdownFooter>
                  <DSCustomDropdownFooterButton onClick={() => setSel([])}>Сбросить</DSCustomDropdownFooterButton>
                  <DSCustomDropdownFooterButton variant="primary" onClick={() => setOpen(false)}>Применить</DSCustomDropdownFooterButton>
                </DSCustomDropdownFooter>
              </DSCustomDropdownPanel>
            </DSCustomDropdown>
          </div>
        </DocPreview>
      </DocSection>

      <DocSection title="With Subtitles & Horizontal Scroll" description="Вариант с подписями меньшим шрифтом для каждого пункта (свойство subtitle). Сегменты прокручиваются свайпом (без видимого скроллбара).">
        <DocPreview>
          <div className={s.maxW300}>
            <DSCustomDropdown isOpen={openSub} onOpenChange={setOpenSub}>
              <DSCustomDropdownTrigger placeholder="Выберите инструмент">
                {selSub}
              </DSCustomDropdownTrigger>
              <DSCustomDropdownPanel minWidth={340}>
                <DSCustomDropdownHeader
                  title="Инструменты"
                  segments={[
                    { value: 'tab1', label: 'Очень длинный сегмент 1' },
                    { value: 'tab2', label: 'Очень длинный сегмент 2' },
                    { value: 'tab3', label: 'Очень длинный сегмент 3' },
                    { value: 'tab4', label: 'Очень длинный сегмент 4' },
                  ]}
                  segmentValue="tab1"
                />
                <DSCustomDropdownContent maxHeight={240}>
                  <div style={{ padding: 4, display: 'flex', flexDirection: 'column' }}>
                    <DSCustomDropdownItem
                      subtitle="Нефтяная компания Роснефть"
                      selected={selSub === 'ROSN'}
                      onClick={() => { setSelSub('ROSN'); setOpenSub(false); }}
                    >
                      ROSN
                    </DSCustomDropdownItem>
                    <DSCustomDropdownItem
                      subtitle="Газпром нефть"
                      selected={selSub === 'SIBN'}
                      onClick={() => { setSelSub('SIBN'); setOpenSub(false); }}
                    >
                      SIBN
                    </DSCustomDropdownItem>
                    <DSCustomDropdownItem
                      subtitle="Нефтяная компания ЛУКОЙЛ"
                      selected={selSub === 'LKOH'}
                      onClick={() => { setSelSub('LKOH'); setOpenSub(false); }}
                    >
                      LKOH
                    </DSCustomDropdownItem>
                  </div>
                </DSCustomDropdownContent>
              </DSCustomDropdownPanel>
            </DSCustomDropdown>
          </div>
        </DocPreview>
      </DocSection>

      <DocSection title="Composable Parts">
        <DocSpecTable rows={[
          { prop: 'DSCustomDropdown', value: 'Root context provider', token: 'isOpen, onOpenChange' },
          { prop: 'DSCustomDropdownTrigger', value: 'Clickable trigger button', token: 'placeholder, children' },
          { prop: 'DSCustomDropdownPanel', value: 'Portal-rendered dropdown', token: 'minWidth, maxHeight' },
          { prop: 'DSCustomDropdownHeader', value: 'Title + close + search + segments', token: 'title, showSearch, segments' },
          { prop: 'DSCustomDropdownContent', value: 'Scrollable body area', token: 'maxHeight' },
          { prop: 'DSCustomDropdownGroup', value: 'Group with optional title', token: 'title, children' },
          { prop: 'DSCustomDropdownItem', value: 'Selectable item', token: 'subtitle, checkbox, checked, selected, onClick' },
          { prop: 'DSCustomDropdownFooter', value: 'Action footer', token: 'children' },
          { prop: 'DSCustomDropdownFooterButton', value: 'Footer CTA button', token: "variant: 'ghost' | 'primary'" },
        ]} />
      </DocSection>

      <DocSection title="Header Props">
        <DocPropsTable rows={[
          { name: 'title', type: 'string', default: '—', description: 'Header title text' },
          { name: 'showSearch', type: 'boolean', default: 'false', description: 'Show search input' },
          { name: 'searchValue', type: 'string', default: "''", description: 'Controlled search value' },
          { name: 'onSearchChange', type: '(value: string) => void', default: '—', description: 'Search change handler' },
          { name: 'searchPlaceholder', type: 'string', default: "'Начните вводить'", description: 'Search placeholder text' },
          { name: 'segments', type: '{ value: string; label: string }[]', default: '—', description: 'Segment filter tabs (horizontally scrollable)' },
          { name: 'segmentValue', type: 'string', default: '—', description: 'Active segment value' },
          { name: 'onSegmentChange', type: '(value: string) => void', default: '—', description: 'Segment change handler' },
        ]} />
      </DocSection>

      <DocSection title="Usage">
        <DocCode>{`import {
  DSCustomDropdown,
  DSCustomDropdownTrigger,
  DSCustomDropdownPanel,
  DSCustomDropdownHeader,
  DSCustomDropdownContent,
  DSCustomDropdownItem,
} from './ui/ds-custom-dropdown';

<DSCustomDropdown isOpen={open} onOpenChange={setOpen}>
  <DSCustomDropdownTrigger placeholder="Выберите показатель">
    {selected}
  </DSCustomDropdownTrigger>
  <DSCustomDropdownPanel minWidth={340}>
    <DSCustomDropdownHeader
      title="Выберите показатель"
      showSearch
      searchValue={search}
      onSearchChange={setSearch}
      segments={[
        { value: 'all', label: 'Все' },
        { value: 'pnl', label: 'PnL' },
        { value: 'cf', label: 'CF' },
      ]}
      segmentValue={tab}
      onSegmentChange={setTab}
    />
    <DSCustomDropdownContent maxHeight={240}>
      {items.map(item => (
        <DSCustomDropdownItem
          key={item.id}
          selected={item.id === selectedId}
          onClick={() => select(item.id)}
        >
          {item.name}
        </DSCustomDropdownItem>
      ))}
    </DSCustomDropdownContent>
  </DSCustomDropdownPanel>
</DSCustomDropdown>`}</DocCode>
      </DocSection>
    </div>
  );
}

/* ── Editable Table Demo (used inside TableDetails) ── */
function EditableTableDemoSection() {
  const [rowH, setRowH] = useState(40);
  const [editValues, setEditValues] = useState<Record<string, Record<string, string>>>({
    brent: { '2025': '72.40', '2026F': '78.50', '2027F': '82.10', '2028F': '' },
    usd_rub: { '2025': '92.80', '2026F': '95.00', '2027F': '', '2028F': '' },
    key_rate: { '2025': '20.00', '2026F': '18.50', '2027F': '', '2028F': '' },
  });
  const [editedCells, setEditedCells] = useState<Set<string>>(new Set());

  const handleEdit = (rowId: string, col: string, val: string) => {
    if (val !== '' && !/^-?\d*[.,]?\d*$/.test(val)) return;
    setEditValues(prev => ({ ...prev, [rowId]: { ...prev[rowId], [col]: val } }));
    setEditedCells(prev => new Set(prev).add(`${rowId}-${col}`));
  };

  const drivers = [
    { id: 'brent', name: 'Brent', unit: 'USD/бар.' },
    { id: 'usd_rub', name: 'USD/RUB', unit: 'руб.' },
    { id: 'key_rate', name: 'Ключевая ставка', unit: '%' },
  ];

  const editCols: DSTableColumn[] = [
    {
      id: '_name', header: 'Драйвер', align: 'left', width: 140, sticky: true,
      render: (_: any, row: any) => (
        <div className={s.driverCell}>
          <span className={s.driverName}>{row._driverName}</span>
          <span className={s.driverUnit}>{row._unit}</span>
        </div>
      ),
    },
    {
      id: '2025', header: '2025', align: 'right', width: 90,
      render: (_: any, row: any) => (
        <span className={s.driverValue} style={{ fontFeatureSettings: "'lnum', 'tnum'" }}>
          {row['2025'] || '—'}
        </span>
      ),
    },
    ...['2026F', '2027F', '2028F'].map((col, idx): DSTableColumn => ({
      id: col, header: col, align: 'right', flex: true, minWidth: '80px', forecast: true,
      groupBorderLeft: idx === 0,
      render: (_: any, row: any) => (
        <DSTableCellEditable
          value={row[col] || ''}
          onChange={(v) => handleEdit(row.id, col, v)}
          placeholder="0"
          highlighted={editedCells.has(`${row.id}-${col}`)}
        />
      ),
    })),
  ];

  const editData = drivers.map(d => ({
    id: d.id,
    _driverName: d.name,
    _unit: d.unit,
    ...editValues[d.id],
  }));

  return (
    <DocSection title="Editable Table (DSTableCellEditable)" description="Вариант таблицы с инлайн-редактируемыми ячейками для ввода данных (сценарный анализ, драйверы). Исторические колонки — read-only, прогнозные — редактируемые. Ручные правки подсвечиваются оранжевым (highlighted). Высота инпута 24px, текст 12px, выравнивание по правому краю, tabular-nums.">
      <DocPreview>
        <div style={{ marginBottom: 12 }}>
          <DSTabs size="xs" value={String(rowH)} onChange={v => setRowH(Number(v))}>
            <DSTab value="40">40px</DSTab>
            <DSTab value="48">48px</DSTab>
          </DSTabs>
        </div>
        <div className={s.tableWrap}>
          <DSTable columns={editCols} data={editData} rowKeyField="id" stickyFirstColumn rowHeight={rowH} />
        </div>
      </DocPreview>
      <div className={s.spacer4} />
      <DocCode>{`const editCols: DSTableColumn[] = [
  {
    id: '_name', header: 'Драйвер', align: 'left', width: 140, sticky: true,
    render: (_, row) => (
      <div className={s.driverCell}>
        <span className={s.driverName}>{row._driverName}</span>
        <span className={s.driverUnit}>{row._unit}</span>
      </div>
    ),
  },
  {
    id: '2025', header: '2025', align: 'right', width: 90,
    render: (_, row) => <span className={s.driverValue}>{row['2025']}</span>,
  },
  {
    id: '2026F', header: '2026F', align: 'right', flex: true,
    forecast: true, groupBorderLeft: true,
    render: (_, row) => (
      <DSTableCellEditable
        value={row['2026F'] || ''}
        onChange={(v) => handleEdit(row.id, '2026F', v)}
        placeholder="0"
        highlighted={editedCells.has(\`\${row.id}-2026F\`)}
      />
    ),
  },
];`}</DocCode>
    </DocSection>
  );
}

/* ── Shared data for scroll/sticky/zebra examples ── */
const SCREENER_COLS: DSTableColumn[] = [
  { id: 'ticker',      header: 'Тикер',       align: 'left',  width: 90,  sticky: true,
    render: (v: any) => <DSTableCellTicker>{v}</DSTableCellTicker>,
  },
  { id: 'name',        header: 'Компания',    align: 'left',  width: 150 },
  { id: 'price',       header: 'Цена',        align: 'right', width: 95,  sortable: true, sortType: 'number',
    render: (v: any, row: any) => <DSTableCellPrice value={v} trend={row.trend} />,
  },
  { id: 'chg1d',       header: '1д, %',      align: 'right', width: 80,  sortable: true, sortType: 'number',
    getCellStyle: (v: any) => ({ color: v >= 0 ? 'var(--ds-green-5,#089981)' : 'var(--ds-red-5,#EA3943)' }),
  },
  { id: 'chg1w',       header: '1н, %',      align: 'right', width: 80,  sortable: true, sortType: 'number',
    getCellStyle: (v: any) => ({ color: v >= 0 ? 'var(--ds-green-5,#089981)' : 'var(--ds-red-5,#EA3943)' }),
  },
  { id: 'chg1m',       header: '1м, %',      align: 'right', width: 80,  sortable: true, sortType: 'number',
    getCellStyle: (v: any) => ({ color: v >= 0 ? 'var(--ds-green-5,#089981)' : 'var(--ds-red-5,#EA3943)' }),
  },
  { id: 'chg1y',       header: '1г, %',      align: 'right', width: 80,  sortable: true, sortType: 'number',
    getCellStyle: (v: any) => ({ color: v >= 0 ? 'var(--ds-green-5,#089981)' : 'var(--ds-red-5,#EA3943)' }),
  },
  { id: 'mktcap',      header: 'Кап, млрд',  align: 'right', width: 105, sortable: true, sortType: 'number' },
  { id: 'revenue',     header: 'Выр, млрд',  align: 'right', width: 105, sortable: true, sortType: 'number' },
  { id: 'pe',          header: 'P/E',         align: 'right', width: 75,  sortable: true, sortType: 'number' },
  { id: 'pb',          header: 'P/B',         align: 'right', width: 75,  sortable: true, sortType: 'number' },
  { id: 'ev_ebitda',   header: 'EV/EBITDA',   align: 'right', width: 100, sortable: true, sortType: 'number' },
  { id: 'ebitda_margin', header: 'EBITDA%',   align: 'right', width: 90,  sortable: true, sortType: 'number' },
  { id: 'div',         header: 'Дивиденд',    align: 'right', width: 95,  sortable: true, sortType: 'number' },
  { id: 'roe',         header: 'ROE, %',      align: 'right', width: 85,  sortable: true, sortType: 'number' },
  { id: 'sector',      header: 'Сектор',      align: 'left',  width: 120 },
];
const SCREENER_DATA = [
  { id: '1', ticker: 'SBER', name: 'Сбербанк',         price: 297.5,  trend: 'up',   chg1d:  1.2, chg1w:  3.1, chg1m:  8.4, chg1y:  22.1, mktcap: 6700, revenue: 3200, pe:  4.8, pb: 0.9, ev_ebitda:  3.2, ebitda_margin: 58.2, div:  6.8, roe: 21.4, sector: 'Финансы' },
  { id: '2', ticker: 'GAZP', name: 'Газпром',           price: 148.3,  trend: 'down', chg1d: -0.8, chg1w: -2.4, chg1m: -5.1, chg1y: -18.3, mktcap: 3500, revenue: 8900, pe:  3.1, pb: 0.4, ev_ebitda:  2.1, ebitda_margin: 24.1, div:  5.2, roe: 12.1, sector: 'Энергетика' },
  { id: '3', ticker: 'LKOH', name: 'ЛУКОЙЛ',            price: 7180.0, trend: 'up',   chg1d:  0.5, chg1w:  1.8, chg1m:  4.2, chg1y:  14.7, mktcap: 4900, revenue: 7600, pe:  5.6, pb: 1.1, ev_ebitda:  3.8, ebitda_margin: 18.4, div:  9.4, roe: 19.8, sector: 'Энергетика' },
  { id: '4', ticker: 'YNDX', name: 'Яндекс',            price: 4250.0, trend: 'up',   chg1d:  2.1, chg1w:  5.6, chg1m: 12.3, chg1y:  41.2, mktcap: 1600, revenue:  890, pe: 28.4, pb: 4.2, ev_ebitda: 15.1, ebitda_margin: 22.6, div:  0.0, roe: 14.3, sector: 'Технологии' },
  { id: '5', ticker: 'GMKN', name: 'Норильский никель', price: 13100,  trend: 'down', chg1d: -1.4, chg1w: -3.2, chg1m: -7.8, chg1y:  -9.4, mktcap: 2000, revenue: 1450, pe:  8.2, pb: 3.6, ev_ebitda:  5.4, ebitda_margin: 49.3, div: 11.2, roe: 42.1, sector: 'Металлы' },
  { id: '6', ticker: 'NVTK', name: 'НоваТЭК',           price: 975.6,  trend: 'up',   chg1d:  0.3, chg1w:  0.9, chg1m:  2.1, chg1y:   8.5, mktcap: 2900, revenue: 1200, pe:  6.1, pb: 1.8, ev_ebitda:  4.2, ebitda_margin: 42.1, div:  4.1, roe: 28.7, sector: 'Энергетика' },
  { id: '7', ticker: 'ROSN', name: 'Роснефть',          price: 512.4,  trend: 'down', chg1d: -0.5, chg1w: -1.1, chg1m:  0.8, chg1y:   5.2, mktcap: 5400, revenue: 9100, pe:  4.3, pb: 0.8, ev_ebitda:  3.1, ebitda_margin: 21.8, div:  7.6, roe: 18.2, sector: 'Энергетика' },
  { id: '8', ticker: 'MGNT', name: 'Магнит',            price: 4820.0, trend: 'up',   chg1d:  0.7, chg1w:  2.3, chg1m:  6.1, chg1y:  17.9, mktcap:  490, revenue: 2300, pe:  9.8, pb: 2.1, ev_ebitda:  6.2, ebitda_margin: 11.4, div:  8.1, roe: 22.6, sector: 'Потребление' },
];
const STICKY_RIGHT_COLS: DSTableColumn[] = [
  { id: 'ticker',    header: 'Тикер',      align: 'left',  width: 90 },
  { id: 'name',      header: 'Компания',   align: 'left',  width: 150 },
  { id: 'price',     header: 'Цена',       align: 'right', width: 95,  sortable: true, sortType: 'number' },
  { id: 'chg1d',     header: '1д, %',     align: 'right', width: 80,  sortable: true, sortType: 'number',
    getCellStyle: (v: any) => ({ color: v >= 0 ? 'var(--ds-green-5,#089981)' : 'var(--ds-red-5,#EA3943)' }),
  },
  { id: 'chg1w',     header: '1н, %',     align: 'right', width: 80,  sortable: true, sortType: 'number',
    getCellStyle: (v: any) => ({ color: v >= 0 ? 'var(--ds-green-5,#089981)' : 'var(--ds-red-5,#EA3943)' }),
  },
  { id: 'chg1m',     header: '1м, %',     align: 'right', width: 80,  sortable: true, sortType: 'number',
    getCellStyle: (v: any) => ({ color: v >= 0 ? 'var(--ds-green-5,#089981)' : 'var(--ds-red-5,#EA3943)' }),
  },
  { id: 'mktcap',    header: 'Кап, млрд', align: 'right', width: 105, sortable: true, sortType: 'number' },
  { id: 'pe',        header: 'P/E',        align: 'right', width: 75,  sortable: true, sortType: 'number' },
  { id: 'ev_ebitda', header: 'EV/EBITDA',  align: 'right', width: 100, sortable: true, sortType: 'number' },
  { id: 'div',       header: 'Дивиденд',   align: 'right', width: 95,  sortable: true, sortType: 'number' },
  { id: 'roe',       header: 'ROE, %',     align: 'right', width: 85,  sortable: true, sortType: 'number' },
  { id: 'action',    header: '',           align: 'center', width: 52, stickyEnd: true, stickyEndOffset: 0,
    render: () => (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ cursor: 'pointer', color: 'var(--ds-gray-6,#677C9C)' }}>
        <circle cx="8" cy="3"  r="1.3" fill="currentColor" />
        <circle cx="8" cy="8"  r="1.3" fill="currentColor" />
        <circle cx="8" cy="13" r="1.3" fill="currentColor" />
      </svg>
    ),
  },
];


const CONSENSUS_MAP: Record<string, { color: 'green' | 'blue' | 'orange' | 'red'; label: string }> = {
  buy:         { color: 'green',  label: 'Покупать' },
  overweight:  { color: 'blue',   label: 'Выше рынка' },
  hold:        { color: 'orange', label: 'Держать' },
  underweight: { color: 'red',    label: 'Ниже рынка' },
  sell:        { color: 'red',    label: 'Продавать' },
};

const RATING_OPTIONS = [
  { value: '1', label: 'Продавать' },
  { value: '2', label: 'Ниже рынка' },
  { value: '3', label: 'Держать' },
  { value: '4', label: 'Выше рынка' },
  { value: '5', label: 'Покупать' },
];

const RICH_DATA = [
  { id: '1', ticker: 'SBER', name: 'Сбербанк',         sector: 'Финансы',     consensus: 'buy',         analysts: 18, target: 340,   upside: 14.3, tags: ['Дивиденды', 'Топ-пик'] },
  { id: '2', ticker: 'GAZP', name: 'Газпром',           sector: 'Энергетика',  consensus: 'hold',        analysts: 14, target: 145,   upside: -2.2, tags: ['Газ'] },
  { id: '3', ticker: 'LKOH', name: 'ЛУКОЙЛ',            sector: 'Нефть и газ', consensus: 'buy',         analysts: 16, target: 8200,  upside: 14.2, tags: ['Дивиденды'] },
  { id: '4', ticker: 'YNDX', name: 'Яндекс',            sector: 'Технологии',  consensus: 'overweight',  analysts: 12, target: 5100,  upside: 20.0, tags: ['Рост', 'Техно'] },
  { id: '5', ticker: 'GMKN', name: 'Норильский никель', sector: 'Металлы',     consensus: 'hold',        analysts: 11, target: 12800, upside: -2.3, tags: ['Металлы'] },
  { id: '6', ticker: 'NVTK', name: 'НоваТЭК',           sector: 'СПГ',         consensus: 'buy',         analysts: 13, target: 1150,  upside: 17.9, tags: ['СПГ', 'Дивиденды'] },
  { id: '7', ticker: 'ROSN', name: 'Роснефть',          sector: 'Нефть и газ', consensus: 'underweight', analysts: 10, target: 490,   upside: -4.4, tags: ['Нефть'] },
];

function RichCellsTableSection() {
  const [rowH, setRowH] = useState(40);
  const [ratings, setRatings] = useState<Record<string, string>>({
    '1': '5', '2': '3', '3': '5', '4': '4', '5': '3', '6': '5', '7': '2',
  });

  const columns: DSTableColumn[] = [
    {
      id: 'company', header: 'Компания', align: 'left', width: 210, sticky: true,
      render: (_: any, row: any) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, minWidth: 0, overflow: 'hidden' }}>
          <CompanyLogo ticker={row.ticker} size={28} />
          <div style={{ minWidth: 0, overflow: 'hidden' }}>
            <div style={{ fontSize: 14, fontWeight: 500, color: 'var(--ds-text-primary)', lineHeight: '20px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              {row.name}
            </div>
            <div style={{ fontSize: 12, color: 'var(--ds-gray-6, #677C9C)', lineHeight: '16px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              {row.sector}
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'consensus', header: 'Консенсус', align: 'left', width: 130,
      render: (v: any) => {
        const cfg = CONSENSUS_MAP[v as string];
        if (!cfg) return null;
        return <DSBadge variant="pill" color={cfg.color} size="s">{cfg.label}</DSBadge>;
      },
    },
    {
      id: 'analysts', header: 'Аналитики', align: 'right', width: 100, sortable: true, sortType: 'number',
    },
    {
      id: 'target', header: 'Цель, ₽', align: 'right', width: 100, sortable: true, sortType: 'number',
    },
    {
      id: 'upside', header: 'Потенциал', align: 'right', width: 105, sortable: true, sortType: 'number',
      getCellStyle: (v: any) => ({ color: v >= 0 ? 'var(--ds-green-5,#089981)' : 'var(--ds-red-5,#EA3943)' }),
      render: (v: any) => <span>{v >= 0 ? '+' : ''}{v}%</span>,
    },
    {
      id: 'rating', header: 'Рейтинг', align: 'left', width: 155,
      render: (_: any, row: any) => (
        <DSSelect
          value={ratings[row.id] || ''}
          onChange={(v) => setRatings(prev => ({ ...prev, [row.id]: v }))}
          options={RATING_OPTIONS}
          size="xs"
        />
      ),
    },
    {
      id: 'tags', header: 'Теги', align: 'left', flex: true, minWidth: '120px',
      render: (_: any, row: any) => (
        <div style={{ display: 'flex', gap: 4, overflow: 'hidden' }}>
          {(row.tags as string[]).map((tag: string) => (
            <DSTag key={tag} size="sm">{tag}</DSTag>
          ))}
        </div>
      ),
    },
  ];

  return (
    <DocSection
      title="Rich Cells — Two-line, Badge, Select, Tags"
      description="Расширенные ячейки с компонентами из дизайн-системы. Двустрочная ячейка с аватаром (логотип компании через цветной инициал): Title 14px/500 + Subtitle 12px/gray-6. Статус консенсуса — DSBadge variant=pill. Управляемый рейтинг аналитика — DSSelect size=xs. Метки сектора — DSTag size=sm. Sticky-колонка по-прежнему поддерживает все перечисленные возможности."
    >
      <DocPreview>
        <div style={{ marginBottom: 12 }}>
          <DSTabs size="xs" value={String(rowH)} onChange={v => setRowH(Number(v))}>
            <DSTab value="40">40px</DSTab>
            <DSTab value="48">48px</DSTab>
          </DSTabs>
        </div>
        <div className={s.tableWrap}>
          <DSTable columns={columns} data={RICH_DATA} rowKeyField="id" stickyFirstColumn rowHeight={rowH} />
        </div>
      </DocPreview>
      <div className={s.spacer4} />
      <DocCode>{`// Двустрочная ячейка с аватаром
{ id: 'company', width: 210, sticky: true,
  render: (_, row) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <CompanyAvatar ticker={row.ticker} />
      <div>
        <div style={{ fontSize: 14, fontWeight: 500 }}>{row.name}</div>
        <div style={{ fontSize: 12, color: 'var(--ds-gray-6)' }}>{row.sector}</div>
      </div>
    </div>
  ),
},

// Бейдж-консенсус
{ id: 'consensus',
  render: (v) => <DSBadge variant="pill" color={colorMap[v]} size="s">{labelMap[v]}</DSBadge>,
},

// Выпадающий список (управляемый)
{ id: 'rating',
  render: (_, row) => (
    <DSSelect value={ratings[row.id]} onChange={(v) => setRatings(p => ({...p, [row.id]: v}))}
      options={RATING_OPTIONS} size="xs" />
  ),
},

// Теги
{ id: 'tags',
  render: (_, row) => (
    <div style={{ display: 'flex', gap: 4 }}>
      {row.tags.map(tag => <DSTag key={tag} size="sm">{tag}</DSTag>)}
    </div>
  ),
}`}</DocCode>
    </DocSection>
  );
}

/* ── Row height tabs wrapper ── */
function TableHeightDemo({ children }: { children: (rowHeight: number) => React.ReactNode }) {
  const [h, setH] = useState(40);
  return (
    <div>
      <div style={{ marginBottom: 12 }}>
        <DSTabs size="xs" value={String(h)} onChange={v => setH(Number(v))}>
          <DSTab value="24">24px</DSTab>
          <DSTab value="32">32px</DSTab>
          <DSTab value="40">40px</DSTab>
          <DSTab value="48">48px</DSTab>
        </DSTabs>
      </div>
      {children(h)}
    </div>
  );
}

const BOTH_STICKY_COLS: DSTableColumn[] = [
  { id: 'ticker',      header: 'Тикер',       align: 'left',  width: 90,  sticky: true,
    render: (v: any) => <DSTableCellTicker>{v}</DSTableCellTicker>,
  },
  { id: 'name',        header: 'Компания',    align: 'left',  width: 150 },
  { id: 'price',       header: 'Цена',        align: 'right', width: 95,  sortable: true, sortType: 'number',
    render: (v: any, row: any) => <DSTableCellPrice value={v} trend={row.trend} />,
  },
  { id: 'chg1d',       header: '1д, %',      align: 'right', width: 80,  sortable: true, sortType: 'number',
    getCellStyle: (v: any) => ({ color: v >= 0 ? 'var(--ds-green-5,#089981)' : 'var(--ds-red-5,#EA3943)' }),
  },
  { id: 'chg1w',       header: '1н, %',      align: 'right', width: 80,  sortable: true, sortType: 'number',
    getCellStyle: (v: any) => ({ color: v >= 0 ? 'var(--ds-green-5,#089981)' : 'var(--ds-red-5,#EA3943)' }),
  },
  { id: 'chg1m',       header: '1м, %',      align: 'right', width: 80,  sortable: true, sortType: 'number',
    getCellStyle: (v: any) => ({ color: v >= 0 ? 'var(--ds-green-5,#089981)' : 'var(--ds-red-5,#EA3943)' }),
  },
  { id: 'mktcap',      header: 'Кап, млрд',  align: 'right', width: 105, sortable: true, sortType: 'number' },
  { id: 'pe',          header: 'P/E',         align: 'right', width: 75,  sortable: true, sortType: 'number' },
  { id: 'pb',          header: 'P/B',         align: 'right', width: 75,  sortable: true, sortType: 'number' },
  { id: 'ev_ebitda',   header: 'EV/EBITDA',   align: 'right', width: 100, sortable: true, sortType: 'number' },
  { id: 'div',         header: 'Дивиденд',    align: 'right', width: 95,  sortable: true, sortType: 'number' },
  { id: 'roe',         header: 'ROE, %',      align: 'right', width: 85,  sortable: true, sortType: 'number' },
  { id: 'sector',      header: 'Сектор',      align: 'left',  width: 120 },
  { id: 'action',      header: '',            align: 'center', width: 52, stickyEnd: true, stickyEndOffset: 0,
    render: () => (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ cursor: 'pointer', color: 'var(--ds-gray-6,#677C9C)' }}>
        <circle cx="8" cy="3"  r="1.3" fill="currentColor" />
        <circle cx="8" cy="8"  r="1.3" fill="currentColor" />
        <circle cx="8" cy="13" r="1.3" fill="currentColor" />
      </svg>
    ),
  },
];

function TableDetails() {
  const columns: DSTableColumn[] = [
    { id: 'name', header: 'Metric', align: 'left', width: 140, sticky: true, sortable: true, sortType: 'text' },
    { id: 'y2022', header: '2022', align: 'right', flex: true, minWidth: '80px', sortable: true, sortType: 'number' },
    { id: 'y2023', header: '2023', align: 'right', flex: true, minWidth: '80px', sortable: true, sortType: 'number' },
    { id: 'y2024', header: '2024', align: 'right', flex: true, minWidth: '80px', sortable: true, sortType: 'number' },
    {
      id: 'y2025f', header: '2025F', align: 'right', flex: true, minWidth: '80px', sortable: true, sortType: 'number', forecast: true,
      render: (v: any) => <DSTableCellNumber value={v} forecast />
    },
  ];
  const groups: DSTableRowGroup[] = [
    {
      id: 'pnl', title: 'P&L', collapsible: true, rows: [
        { id: '1', name: 'Revenue', y2022: 11200, y2023: 11500, y2024: 12800, y2025f: 13650 },
        { id: '2', name: 'EBITDA', y2022: 6400, y2023: 6800, y2024: 7450, y2025f: 8100 },
      ]
    },
    {
      id: 'cf', title: 'Cash Flow', collapsible: true, rows: [
        { id: '3', name: 'FCF', y2022: 3500, y2023: 3800, y2024: 4200, y2025f: 4600 },
      ]
    },
  ];

  // Pct change demo data
  const pctColumns: DSTableColumn[] = [
    { id: 'name', header: 'Metric', align: 'left', width: 140, sticky: true },
    {
      id: 'y2023', header: '2023', align: 'right', flex: true, minWidth: '80px',
      render: (v: any) => <DSTableCellNumber value={v} />,
    },
    {
      id: 'y2024', header: '2024', align: 'right', flex: true, minWidth: '80px',
      render: (v: any, row: any) => (
        <div className={s.flexColEnd}>
          <DSTableCellNumber value={v} />
          <DSTableCellPctChange pctChange={row._pct_y2024} />
        </div>
      ),
    },
    {
      id: 'y2025f', header: '2025F', align: 'right', flex: true, minWidth: '80px', forecast: true,
      render: (v: any, row: any) => (
        <div className={s.flexColEnd}>
          <DSTableCellNumber value={v} forecast />
          <DSTableCellPctChange pctChange={row._pct_y2025f} />
        </div>
      ),
    },
  ];
  const pctData = [
    { id: '1', name: 'Revenue', y2023: 11500, y2024: 12800, y2025f: 13650, _pct_y2024: 11.3, _pct_y2025f: 6.6 },
    { id: '2', name: 'EBITDA', y2023: 6800, y2024: 7450, y2025f: 8100, _pct_y2024: 9.6, _pct_y2025f: 8.7 },
    { id: '3', name: 'FCF', y2023: 3800, y2024: 4200, y2025f: 4600, _pct_y2024: 10.5, _pct_y2025f: 9.5 },
    { id: '4', name: 'Net Debt', y2023: 6500, y2024: 6200, y2025f: 5800, _pct_y2024: -4.6, _pct_y2025f: -6.5 },
  ];

  return (
    <div>
      <DocSection title="Grouped Table with Forecast" description="CSS Grid layout. Группировка, сортировка, sticky-колонки, прогнозные ячейки.">
        <DocPreview>
          <TableHeightDemo>
            {(h) => <DSTable columns={columns} data={groups} grouped rowKeyField="id" stickyFirstColumn rowHeight={h} />}
          </TableHeightDemo>
        </DocPreview>
      </DocSection>

      <DocSection title="Percentage Change Indicator" description="Компонент DSTableCellPctChange отображает процентное изменение период-к-периоду со стрелкой динамики. Зелёная ▲ для роста, красная ▼ для снижения. Текст процента серый (gray-6).">
        <DocPreview>
          <TableHeightDemo>
            {(h) => <DSTable columns={pctColumns} data={pctData} rowKeyField="id" stickyFirstColumn rowHeight={h} />}
          </TableHeightDemo>
        </DocPreview>
      </DocSection>

      <EditableTableDemoSection />

      <DocSection
        title="Sticky Left Column + Horizontal Scroll"
        description="Используй stickyFirstColumn когда в таблице много колонок и нужен горизонтальный скролл. Первая колонка фиксируется слева и не уходит за экран — пользователь всегда видит контекст строки. Оберни таблицу в контейнер с overflow-x: auto. Sticky-шапка работает автоматически через position: sticky; top: 0 на headerWrapper."
      >
        <DocPreview>
          <TableHeightDemo>
            {(h) => (
              <div className={s.tableWrap}>
                <DSTable columns={SCREENER_COLS} data={SCREENER_DATA} rowKeyField="id" stickyFirstColumn rowHeight={h} />
              </div>
            )}
          </TableHeightDemo>
        </DocPreview>
        <div className={s.spacer4} />
        <DocCode>{`// Оберни таблицу в overflow-контейнер
<div style={{ overflowX: 'auto' }}>
  <DSTable
    columns={columns}
    data={data}
    stickyFirstColumn   // фиксирует первую колонку слева
  />
</div>

// В колонке: sticky: true вместо stickyFirstColumn
{ id: 'ticker', header: 'Тикер', width: 90, sticky: true }`}</DocCode>
      </DocSection>

      <DocSection
        title="Sticky Right Column + Horizontal Scroll"
        description="stickyEnd фиксирует колонку справа — удобно для колонки действий (⋮ меню, кнопки). Колонка всегда видна при горизонтальном скролле. Задай stickyEnd: true и stickyEndOffset: 0 в описании колонки. Фон sticky-ячеек автоматически непрозрачный, чтобы контент под ними не просвечивал."
      >
        <DocPreview>
          <TableHeightDemo>
            {(h) => (
              <div className={s.tableWrap}>
                <DSTable columns={STICKY_RIGHT_COLS} data={SCREENER_DATA} rowKeyField="id" rowHeight={h} />
              </div>
            )}
          </TableHeightDemo>
        </DocPreview>
        <div className={s.spacer4} />
        <DocCode>{`{
  id: 'action', header: '', align: 'center', width: 60,
  stickyEnd: true,        // фиксирует колонку справа
  stickyEndOffset: 0,     // отступ от правого края
  render: () => <ActionsMenu />,
}`}</DocCode>
      </DocSection>

      <DocSection
        title="Zebra Striping"
        description="Проп zebra добавляет чередование фона строк — нечётные строки получают слегка осветлённый фон. Sticky-колонки всегда принимают фон соответствующей строки (прозрачный или zebra), не выбиваясь из ритма таблицы. При горизонтальном скролле sticky-ячейки получают непрозрачный фон, чтобы контент под ними не просвечивал."
      >
        <DocPreview>
          <TableHeightDemo>
            {(h) => (
              <div className={s.tableWrap}>
                <DSTable columns={SCREENER_COLS} data={SCREENER_DATA} rowKeyField="id" stickyFirstColumn zebra rowHeight={h} />
              </div>
            )}
          </TableHeightDemo>
        </DocPreview>
        <div className={s.spacer4} />
        <DocCode>{`<DSTable
  columns={columns}
  data={data}
  stickyFirstColumn
  zebra   // нечётные строки подсвечиваются; sticky-колонка совпадает с фоном строки
/>`}</DocCode>
      </DocSection>

      <RichCellsTableSection />

      <DocSection
        title="Sticky Left + Sticky Right одновременно"
        description="Можно зафиксировать колонку одновременно слева (sticky: true или stickyFirstColumn) и справа (stickyEnd: true). Типичный сценарий: слева — идентификатор строки (тикер, название), справа — колонка действий. При скролле между ними видно содержимое таблицы, обе крайние колонки остаются на месте."
      >
        <DocPreview>
          <TableHeightDemo>
            {(h) => (
              <div className={s.tableWrap}>
                <DSTable columns={BOTH_STICKY_COLS} data={SCREENER_DATA} rowKeyField="id" stickyFirstColumn rowHeight={h} />
              </div>
            )}
          </TableHeightDemo>
        </DocPreview>
        <div className={s.spacer4} />
        <DocCode>{`const columns: DSTableColumn[] = [
  // Левая sticky — через stickyFirstColumn или sticky: true
  { id: 'ticker', header: 'Тикер', width: 90, sticky: true },

  // ... средние колонки скроллируются ...

  // Правая sticky — через stickyEnd: true
  { id: 'action', header: '', width: 52, stickyEnd: true, stickyEndOffset: 0,
    render: () => <ActionsMenu /> },
];

<DSTable columns={columns} data={data} stickyFirstColumn />`}</DocCode>
      </DocSection>

      <DocSection title="Features">
        <DocSpecTable rows={[
          { prop: 'Layout', value: 'CSS Grid (grid-template-columns)', token: 'display: grid' },
          { prop: 'Fixed column', value: 'width: Npx', token: 'grid: Npx' },
          { prop: 'Flex column', value: 'minmax(min, 1fr)', token: 'flex: true' },
          { prop: 'Sticky column', value: 'position: sticky, left: 0', token: 'sticky: true' },
          { prop: 'Sticky end', value: 'position: sticky, right: 0', token: 'stickyEnd: true' },
          { prop: 'Forecast header bg', value: 'dark: #2A2E39 / light: turquoise-0', token: '--ds-table-forecast-header-bg' },
          { prop: 'Forecast cell bg', value: 'dark: #151B27 / light: turquoise-0', token: '--ds-table-forecast-cell-bg' },
          { prop: 'Forecast text color', value: 'dark: turquoise-6 / light: turquoise-8', token: '--ds-table-forecast-text' },
          { prop: 'Default header bg', value: 'dark: #2f3441 / light: gray-0', token: '--ds-table-header-bg' },
          { prop: 'Sort highlight bg', value: 'rgba(90,140,255,0.06)', token: 'Semi-transparent' },
          { prop: 'Sort header bg', value: 'rgba(90,140,255,0.12)', token: 'Semi-transparent' },
          { prop: 'Sticky cell bg', value: 'dark: #10141D / light: white', token: '--ds-table-sticky-bg' },
          { prop: 'Row height default', value: '48px', token: 'compact ? 28px : 48px' },
          { prop: 'Row height compact', value: '28px', token: 'compact: true' },
          { prop: 'Group header height', value: '32px', token: 'h-8' },
          { prop: 'Pct change arrow ▲', value: '8x6px SVG, #089981 (green-5)', token: '--ds-green-5' },
          { prop: 'Pct change arrow ▼', value: '8x6px SVG, #EA3943 (red-5)', token: '--ds-red-5' },
          { prop: 'Pct change text', value: '12px/16px Inter (Body XS), gray-6, tabular-nums', token: 'text-[12px] leading-[16px]' },
          { prop: 'Editable input height', value: '24px (h-6)', token: 'h-6' },
          { prop: 'Editable input font', value: '12px/16px Inter, tabular-nums, right-aligned', token: 'text-[12px] leading-[16px]' },
          { prop: 'Editable input bg', value: 'transparent', token: '—' },
          { prop: 'Editable input border', value: 'var(--ds-border-primary) → focus: var(--ds-blue-6)', token: 'var(--ds-border-primary)' },
          { prop: 'Editable highlighted border', value: '#D97706/40 (orange-6)', token: '--ds-orange-6' },
          { prop: 'Editable highlighted text', value: '#F59E0B (orange-4), font-medium', token: '--ds-orange-4' },
        ]} />
      </DocSection>

      <DocSection title="Props API">
        <DocPropsTable rows={[
          { name: 'columns', type: 'DSTableColumn[]', default: '—', description: 'Column definitions' },
          { name: 'data', type: 'T[] | DSTableRowGroup<T>[]', default: '—', description: 'Flat or grouped data' },
          { name: 'grouped', type: 'boolean', default: 'false', description: 'Enable grouped mode' },
          { name: 'compact', type: 'boolean', default: 'false', description: 'Compact row height (28px)' },
          { name: 'stickyFirstColumn', type: 'boolean', default: 'false', description: 'Sticky first column' },
          { name: 'sortColumn', type: 'string', default: '—', description: 'Controlled sort column' },
          { name: 'sortDirection', type: "'asc' | 'desc'", default: '—', description: 'Controlled sort direction' },
          { name: 'onSortChange', type: '(colId, dir) => void', default: '—', description: 'Sort change callback' },
        ]} />
      </DocSection>

      <DocSection title="Cell Helper Components">
        <DocPropsTable rows={[
          { name: 'DSTableCellNumber', type: '{ value, forecast?, className? }', default: '—', description: 'Formatted numeric cell. forecast=true applies turquoise color' },
          { name: 'DSTableCellPctChange', type: '{ pctChange, className? }', default: '—', description: 'Period-over-period % change with colored arrow (▲ green / ▼ red), gray text' },
          { name: 'DSTableCellTicker', type: '{ children, icon?, onClick? }', default: '—', description: 'Clickable ticker link cell (blue-6)' },
          { name: 'DSTableCellPrice', type: '{ value, trend? }', default: '—', description: 'Price cell with optional up/down triangle' },
          { name: 'DSTableCellEditable', type: '{ value, onChange?, placeholder?, highlighted?, readOnly?, className?, inputClassName? }', default: '—', description: 'Inline editable input for data-entry tables. highlighted=true applies orange border + text for manual edits' },
        ]} />
      </DocSection>

      <DocSection title="DSTableCellEditable Props">
        <DocPropsTable rows={[
          { name: 'value', type: 'string', default: '—', description: 'Current input value (controlled)' },
          { name: 'onChange', type: '(value: string) => void', default: '—', description: 'Value change callback' },
          { name: 'placeholder', type: 'string', default: "''", description: 'Placeholder text for empty input' },
          { name: 'highlighted', type: 'boolean', default: 'false', description: 'Orange highlight for manually edited cells (border + text color)' },
          { name: 'readOnly', type: 'boolean', default: 'false', description: 'Makes input non-editable (transparent bg, no border)' },
          { name: 'className', type: 'string', default: '—', description: 'Extra class on the wrapper div' },
          { name: 'inputClassName', type: 'string', default: '—', description: 'Extra class on the <input> element' },
        ]} />
      </DocSection>
    </div>
  );
}

function ChartGridDetails() {
  return (
    <div>
      <DocSection title="Chart Grid" description="SVG-каркас графика с осями Y (первичная + вторичная), осью X, горизонтальными/вертикальными линиями сетки и слотом для children.">
        <DocPreview style={{ minHeight: 300 }}>
          <DSChartGrid
            yValues={[200, 150, 100, 50, 0]}
            yLabel="Млрд. руб."
            xValues={['2019', '2020', '2021', '2022', '2023', '2024']}
            xLabel="Год"
            solidLineIndex={3}
            showVerticalLines
          />
        </DocPreview>
      </DocSection>

      <DocSection title="Styling Specs">
        <DocSpecTable rows={[
          { prop: 'Grid stroke', value: 'dark:#2A2E39 / light:#D0D5DD', token: 'var(--ds-border-primary)' },
          { prop: 'Grid dash', value: '1.84 1.84', token: 'strokeDasharray' },
          { prop: 'Axis text', value: '#677C9C (gray-6)', token: 'var(--ds-text-gray-dark)' },
          { prop: 'Axis text font', value: '12px Inter, tabular nums', token: 'text-[12px]' },
          { prop: 'Solid line stroke', value: '1.5px solid', token: 'strokeWidth: 1.5' },
          { prop: 'Label rotation', value: '-90deg (Y labels)', token: 'writingMode: vertical-rl' },
        ]} />
      </DocSection>

      <DocSection title="Props API">
        <DocPropsTable rows={[
          { name: 'yValues', type: 'number[]', default: '—', description: 'Primary Y-axis values (top → bottom)' },
          { name: 'yLabel', type: 'string', default: '—', description: 'Y-axis label' },
          { name: 'xValues', type: 'string[]', default: '—', description: 'X-axis tick labels' },
          { name: 'xLabel', type: 'string', default: '—', description: 'X-axis label' },
          { name: 'solidLineIndex', type: 'number', default: '—', description: 'Index of solid (non-dashed) grid line' },
          { name: 'showVerticalLines', type: 'boolean', default: 'false', description: 'Show vertical grid lines' },
          { name: 'secondaryYValues', type: 'number[]', default: '—', description: 'Secondary Y-axis values' },
          { name: 'secondaryYLabel', type: 'string', default: '—', description: 'Secondary Y-axis label' },
          { name: 'children', type: 'ReactNode', default: '—', description: 'Overlay content (SVG paths, etc.)' },
        ]} />
      </DocSection>
    </div>
  );
}

function NotificationDetails() {
  return (
    <div>
      <DocSection title="Variants" description="4 варианта: error, warning, success, info. Каждый со своей иконкой и цветовой схемой.">
        <DocPreview>
          <div className={s.flexColMax440}>
            <Notification variant="info" title="Info" description="Informational message about the process." closable={false} />
            <Notification variant="success" title="Success" description="Operation completed successfully." closable={false} />
            <Notification variant="warning" title="Warning" description="Please review before continuing." closable={false} />
            <Notification variant="error" title="Error" description="Something went wrong, please try again." closable={false} />
          </div>
        </DocPreview>
      </DocSection>

      <DocSection title="With Actions" description="Кнопки primary и secondary действий.">
        <DocPreview>
          <div className={s.maxW440}>
            <Notification
              variant="info"
              title="Confirm Action"
              description="Do you want to proceed with the scenario update?"
              closable={false}
              primaryAction={{ label: 'Confirm', onClick: () => notify.success('Confirmed!') }}
              secondaryAction={{ label: 'Cancel', onClick: () => { } }}
            />
          </div>
        </DocPreview>
      </DocSection>

      <DocSection title="Loading State">
        <DocPreview>
          <div className={s.maxW440}>
            <Notification variant="info" title="Processing..." description="Please wait while we update your data." loading closable={false} />
          </div>
        </DocPreview>
      </DocSection>

      <DocSection title="Programmatic API" description="Вызов через notify.success(), notify.error(), notify.warning(), notify.info().">
        <DocPreview>
          <div className={s.flexWrapGap2}>
            <DSButton variant="primary" size="sm" onClick={() => notify.success('Scenario saved')}>notify.success()</DSButton>
            <DSButton variant="destructive" size="sm" onClick={() => notify.error('Failed to save')}>notify.error()</DSButton>
            <DSButton variant="secondary" size="sm" onClick={() => notify.warning('Check your data')}>notify.warning()</DSButton>
            <DSButton variant="outline" size="sm" onClick={() => notify.info('FYI notification')}>notify.info()</DSButton>
          </div>
        </DocPreview>
      </DocSection>

      <DocSection title="Styling Specs">
        <DocSpecTable rows={[
          { prop: 'border-radius', value: '12px', token: 'rounded-xl' },
          { prop: 'bg error', value: 'dark: #5B2635 (red-8) / light: #FCE3E4 (red-0)', token: '--ds-notification-error-bg' },
          { prop: 'bg warning', value: 'dark: #5C3B30 (orange-8) / light: #FEECE2 (orange-0)', token: '--ds-notification-warning-bg' },
          { prop: 'bg success', value: 'dark: #1B5249 (green-8) / light: #DDFAEF (green-0)', token: '--ds-notification-success-bg' },
          { prop: 'bg info', value: 'var(--ds-bg-secondary) + border', token: 'var(--ds-bg-secondary) var(--ds-border-primary)' },
          { prop: 'Error accent', value: '#EA3943', token: 'var(--ds-red-6)' },
          { prop: 'Warning accent', value: '#F87D37', token: 'var(--ds-orange-6)' },
          { prop: 'Success accent', value: '#1FC989', token: 'var(--ds-green-6)' },
          { prop: 'Info accent', value: '#5A8CFF', token: 'var(--ds-blue-6)' },
          { prop: 'Title font', value: '16px/20px semibold', token: 'text-[16px] font-semibold' },
          { prop: 'Description font', value: '12px/16px normal', token: 'text-[12px]' },
          { prop: 'Padding', value: 'pl:16 pr:32 py:16', token: 'pl-4 pr-8 py-4' },
          { prop: 'Toast position', value: 'bottom-right, fixed', token: 'fixed bottom-6 right-6' },
          { prop: 'Toast duration', value: '5000ms', token: 'Auto-dismiss' },
          { prop: 'Theme', value: 'Auto dark/light via semantic tokens', token: '--ds-notification-*-bg' },
        ]} />
      </DocSection>

      <DocSection title="Props API">
        <DocPropsTable rows={[
          { name: 'variant', type: "'error' | 'warning' | 'success' | 'info'", default: "'info'", description: 'Visual variant' },
          { name: 'title', type: 'string', default: '—', description: 'Headline text (required)' },
          { name: 'description', type: 'string', default: '—', description: 'Body text' },
          { name: 'closable', type: 'boolean', default: 'true', description: 'Show close button' },
          { name: 'loading', type: 'boolean', default: 'false', description: 'Show spinner instead of icon' },
          { name: 'primaryAction', type: '{ label, onClick }', default: '—', description: 'Primary CTA' },
          { name: 'secondaryAction', type: '{ label, onClick }', default: '—', description: 'Secondary CTA' },
        ]} />
      </DocSection>
    </div>
  );
}

/* ════════════════════════════════════════════════
   Router page component
   ════════════════════════════════════════════════ */

function TooltipDetails() {
  return (
    <div>
      <DocSection title="Простой тултип" description="Обёртка DSTooltip — показывает тултип при наведении на триггер-элемент. Поддерживает 4 стороны и задержку появления.">
        <DocPreview>
          <div className={s.flexRowGap6}>
            <DSTooltip content="Подсказка сверху" side="top">
              <DSButton variant="outline" size="sm">Top</DSButton>
            </DSTooltip>
            <DSTooltip content="Подсказка снизу" side="bottom">
              <DSButton variant="outline" size="sm">Bottom</DSButton>
            </DSTooltip>
            <DSTooltip content="Подсказка слева" side="left">
              <DSButton variant="outline" size="sm">Left</DSButton>
            </DSTooltip>
            <DSTooltip content="Подсказка справа" side="right">
              <DSButton variant="outline" size="sm">Right</DSButton>
            </DSTooltip>
          </div>
        </DocPreview>
      </DocSection>

      <DocSection title="Тултип с легендой" description="DSTooltipContent отображает строки с цветными маркерами легенды и значениями. Максимальная ширина 286px.">
        <DocPreview>
          <div className={s.flexWrapGap6}>
            <DSTooltipContent
              title="21.03.24  16:30"
              items={[
                { color: '#5A8CFF', name: 'SBER Share Price', value: '234,14' },
                { color: '#F87D37', name: 'Anglo American', value: '8,45M' },
                { color: '#9A8CFF', name: 'Anglo American Platinum', value: '8,45M' },
                { color: '#45D3CE', name: 'Impala Platinum', value: '8,45M' },
                { color: '#A646D3', name: 'Sibanye-Stillwater', value: '8,45M' },
                { color: '#EA3943', name: 'Northam Platinum', value: '8,45M' },
                { color: '#089981', name: 'Sylvania Platinum', value: '8,45M' },
              ]}
              style={{ pointerEvents: 'auto' }}
            />
            <DSTooltipContent
              title="29 Mar 2024"
              items={[
                { name: 'Airprice', value: '234,14' },
                { name: 'Data', value: '8,45M', isDetail: true },
                { name: 'Date 2025', value: '8,45M', isDetail: true },
              ]}
              style={{ pointerEvents: 'auto' }}
            />
          </div>
        </DocPreview>
      </DocSection>

      <DocSection title="Нагруженный тултип" description="Каждый пункт может содержать маркер легенды, имя, значение, и дополнительный цветной текст (extra).">
        <DocPreview>
          <DSTooltipContent
            title="21.03.24  16:30"
            items={[
              { color: '#5A8CFF', name: 'SBER Share Price', value: '234,14' },
              { name: 'Открытие', value: '247,00', isDetail: true },
              { name: 'Макс', value: '212,45', isDetail: true },
              { name: 'Мин', value: '248,45', isDetail: true },
              { name: 'Закрытие', value: '238,45', extra: '+0,02 (Text)', extraColor: '#089981', isDetail: true },
              { name: 'Объем', value: '231,45', isDetail: true },
              { color: '#F87D37', name: 'Anglo American', value: '8,45M' },
            ]}
            style={{ pointerEvents: 'auto' }}
          />
        </DocPreview>
      </DocSection>

      <DocSection title="Информация о графике" description="DSChartTooltip — абсолютно позиционированный тултип внутри контейнера графика. Автоматически переключается на левую сторону у правого края.">
        <DocPreview>
          <div className={s.tooltipBox}>
            <DSChartTooltip
              visible
              x={60}
              y={16}
              containerWidth={600}
              title="SBER"
              subtitle="Обыкн. акция"
              items={[
                { color: '#5A8CFF', shape: 'square', name: 'SBER Share Price', value: '40 014,26' },
              ]}
            />
          </div>
        </DocPreview>
      </DocSection>

      <DocSection title="Styling Specs">
        <DocSpecTable rows={[
          { prop: 'Background', value: 'dark:#191F2D / light:#FFF', token: 'var(--ds-bg-secondary)' },
          { prop: 'Border', value: 'dark:#2A2E39 / light:#D0D5DD', token: 'var(--ds-border-primary)' },
          { prop: 'Border radius', value: '8px', token: 'rounded-lg' },
          { prop: 'Max width', value: '286px', token: 'maxWidth: 286' },
          { prop: 'Shadow', value: '0 8px 24px rgba(0,0,0,0.45)', token: 'shadow-xl' },
          { prop: 'Item text', value: '10px / 16px, weight 500', token: 'text-[10px] font-medium' },
          { prop: 'Item text color', value: 'dark:#E0E1E2 / light:#1A1D24', token: 'var(--ds-text-primary)' },
          { prop: 'Legend square', value: '8x8px, radius 2px', token: 'size-[8px] rounded-[2px]' },
          { prop: 'Padding', value: '10px horizontal, 8px vertical', token: 'px-2.5 py-2' },
          { prop: 'Minimum gap name-value', value: '12px', token: 'gap-3' },
        ]} />
      </DocSection>

      <DocSection title="DSTooltip Props">
        <DocPropsTable rows={[
          { name: 'content', type: "string | DSTooltipContentProps", default: '—', description: 'Tooltip content' },
          { name: 'side', type: "'top' | 'bottom' | 'left' | 'right'", default: "'top'", description: 'Preferred side' },
          { name: 'offset', type: 'number', default: '6', description: 'Distance from trigger (px)' },
          { name: 'delay', type: 'number', default: '120', description: 'Delay before show (ms)' },
          { name: 'disabled', type: 'boolean', default: 'false', description: 'Disable tooltip' },
        ]} />
      </DocSection>

      <DocSection title="Usage">
        <DocCode>{`import { DSTooltip, DSTooltipContent, DSChartTooltip } from '../ui/ds-tooltip';

// Simple hover tooltip
<DSTooltip content="Описание показателя" side="top">
  <span>Revenue</span>
</DSTooltip>

// Chart tooltip (positioned)
<DSChartTooltip
  visible={hoverIdx !== null}
  x={crosshairX}
  y={16}
  containerWidth={plotWidth}
  title={period}
  items={series.map(s => ({
    color: s.color, name: s.name, value: formatValue(s.value),
  }))}
/>`}</DocCode>
      </DocSection>
    </div>
  );
}

/* ════════════════════════════════════════════════
   Chart (ds-chart) Details
   ════════════════════════════════════════════════ */

function ChartComponentDetails() {
  const sampleData = [
    { name: '2019', revenue: 8200, ebitda: 3900, netIncome: 2100 },
    { name: '2020', revenue: 7500, ebitda: 3400, netIncome: 1700 },
    { name: '2021', revenue: 9800, ebitda: 4800, netIncome: 2900 },
    { name: '2022', revenue: 11200, ebitda: 5600, netIncome: 3400 },
    { name: '2023', revenue: 11500, ebitda: 6100, netIncome: 3800 },
    { name: '2024', revenue: 12800, ebitda: 6800, netIncome: 4200 },
  ];
  const pieData = [
    { name: 'Нефть', value: 35 }, { name: 'Металлы', value: 25 },
    { name: 'Банки', value: 20 }, { name: 'IT', value: 15 }, { name: 'Прочее', value: 5 },
  ];
  const radarData = [
    { metric: 'Revenue', A: 85, B: 65 }, { metric: 'EBITDA', A: 70, B: 80 },
    { metric: 'Margin', A: 60, B: 75 }, { metric: 'Growth', A: 90, B: 55 },
    { metric: 'ROE', A: 72, B: 68 }, { metric: 'FCF', A: 55, B: 82 },
  ];
  const waterfallData = [
    { name: 'Выручка', value: 12800 },
    { name: 'Себестоимость', value: -6000 },
    { name: 'SG&A', value: -2000 },
    { name: 'D&A', value: -800 },
    { name: 'EBITDA', value: 0, isTotal: true },
  ];
  const comboSeries = [
    { dataKey: 'revenue', name: 'Выручка', chartType: 'bar' as const },
    { dataKey: 'netIncome', name: 'Чистая прибыль', chartType: 'line' as const },
  ];

  return (
    <div>
      <DocSection title="Line Chart" description="Линейный график для трендов временных рядов.">
        <DocPreview>
          <DSLineChart
            data={sampleData}
            series={[
              { dataKey: 'revenue', name: 'Выручка' },
              { dataKey: 'ebitda', name: 'EBITDA' },
            ]}
            height={250}
          />
        </DocPreview>
      </DocSection>

      <DocSection title="Bar Chart" description="Столбчатый график для сравнения значений.">
        <DocPreview>
          <DSBarChart
            data={sampleData}
            series={[
              { dataKey: 'revenue', name: 'Выручка' },
              { dataKey: 'ebitda', name: 'EBITDA' },
            ]}
            height={250}
          />
        </DocPreview>
      </DocSection>

      <DocSection title="Area Chart" description="График с заливкой области под кривой.">
        <DocPreview>
          <DSAreaChart
            data={sampleData}
            series={[
              { dataKey: 'revenue', name: 'Выручка' },
              { dataKey: 'netIncome', name: 'Чистая прибыль' },
            ]}
            height={250}
          />
        </DocPreview>
      </DocSection>

      <DocSection title="Pie & Donut Charts" description="Круговая и кольцевая диаграммы.">
        <DocPreview>
          <div className={s.grid2NoMax}>
            <DSPieChart data={pieData} height={200} showLabels />
            <DSDonutChart data={pieData} height={200} />
          </div>
        </DocPreview>
      </DocSection>

      <DocSection title="Stacked Bar Chart" description="С накоплением, опционально нормализованный.">
        <DocPreview>
          <DSStackedBarChart
            data={sampleData}
            series={[
              { dataKey: 'netIncome', name: 'ЧП' },
              { dataKey: 'ebitda', name: 'EBITDA' },
              { dataKey: 'revenue', name: 'Выручка' },
            ]}
            height={250}
          />
        </DocPreview>
      </DocSection>

      <DocSection title="Horizontal Bar Chart" description="Горизонтальный столбчатый.">
        <DocPreview>
          <DSHorizontalBarChart
            data={sampleData.slice(0, 4)}
            series={[{ dataKey: 'revenue', name: 'Выручка' }]}
            height={200}
          />
        </DocPreview>
      </DocSection>

      <DocSection title="Radar Chart" description="Радарная диаграмма для сравнения множества метрик.">
        <DocPreview>
          <DSRadarChart
            data={radarData}
            dataKey="metric"
            series={[
              { dataKey: 'A', name: 'Компания A' },
              { dataKey: 'B', name: 'Компания B' },
            ]}
            height={250}
          />
        </DocPreview>
      </DocSection>

      <DocSection title="Combo Chart" description="Комбинированный: bar + line.">
        <DocPreview>
          <DSComboChart data={sampleData} series={comboSeries} height={250} />
        </DocPreview>
      </DocSection>

      <DocSection title="Waterfall Chart" description="Каскадный график прибылей/убытков.">
        <DocPreview>
          <DSWaterfallChart data={waterfallData} height={250} />
        </DocPreview>
      </DocSection>

      <DocSection title="Gauge & Sparkline" description="Шкала-спидометр и мини-график.">
        <DocPreview>
          <div className={s.flexRowGap8}>
            <DSGaugeChart value={73} label="ROE %" height={160} />
            <div className={s.flexCol2}>
              <span className={s.textSubtle11}>Sparkline:</span>
              <DSSparklineChart data={[120, 95, 145, 135, 160, 180, 175]} width={140} height={36} />
            </div>
          </div>
        </DocPreview>
      </DocSection>

      <DocSection title="Treemap" description="Древовидная карта для пропорциональных данных.">
        <DocPreview>
          <DSTreemapChart data={pieData} height={200} />
        </DocPreview>
      </DocSection>

      <DocSection title="Props API">
        <DocPropsTable rows={[
          { name: 'data', type: 'Record<string,any>[]', default: '[]', description: 'Array of data objects' },
          { name: 'series', type: 'DSChartSeries[]', default: '[]', description: 'Series definitions: dataKey, name, color' },
          { name: 'xKey', type: 'string', default: "'name'", description: 'X-axis data key' },
          { name: 'height', type: 'number', default: '300', description: 'Chart height in pixels' },
          { name: 'showGrid', type: 'boolean', default: 'true', description: 'Show grid lines' },
          { name: 'showLegend', type: 'boolean', default: 'true', description: 'Show legend' },
          { name: 'showTooltip', type: 'boolean', default: 'true', description: 'Show hover tooltip' },
        ]} />
      </DocSection>

      <DocSection title="Usage">
        <DocCode>{`import { DSLineChart, DSBarChart, DSPieChart, DSComboChart } from '../ui/ds-chart';

<DSLineChart
  data={[{ name: '2023', value: 100 }, { name: '2024', value: 150 }]}
  series={[{ dataKey: 'value', name: 'Revenue', color: '#5A8CFF' }]}
  height={300}
/>

<DSComboChart
  data={data}
  series={[
    { dataKey: 'revenue', name: 'Revenue', chartType: 'bar' },
    { dataKey: 'margin', name: 'Margin', chartType: 'line' },
  ]}
/>`}</DocCode>
      </DocSection>
    </div>
  );
}

/* ════════════════════════════════════════════════
   Modal (ds-modal) Details
   ════════════════════════════════════════════════ */

function ModalDetails() {
  const [basic, setBasic] = useState(false);
  const [custom, setCustom] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [sized, setSized] = useState(false);
  const [noClose, setNoClose] = useState(false);

  return (
    <div>
      <DocSection title="Basic Modal" description="DSModal с title, body и footer. Закрытие по Escape, клику на overlay и кнопке X в заголовке.">
        <DocPreview>
          <DSButton variant="primary" size="sm" onClick={() => setBasic(true)}>Open Basic Modal</DSButton>
          <DSModal open={basic} onClose={() => setBasic(false)} title="Basic Modal">
            <DSModalBody>
              <p className={s.textSubtle14}>
                This is a basic modal with a title, body content, and footer actions.
                It closes on Escape, overlay click, and the X button.
              </p>
            </DSModalBody>
            <DSModalFooter>
              <span className={s.textGray6_12}>Footer left slot</span>
              <div className={s.flexRowGap2}>
                <DSButton variant="ghost" size="sm" onClick={() => setBasic(false)}>Cancel</DSButton>
                <DSButton variant="primary" size="sm" onClick={() => setBasic(false)}>Confirm</DSButton>
              </div>
            </DSModalFooter>
          </DSModal>
        </DocPreview>
      </DocSection>

      <DocSection title="Custom Header" description="customHeader — полностью кастомный заголовок. Используется в ChartModal, ConsensusDetailModal для размещения доп. контролов (zoom, фильтры).">
        <DocPreview>
          <DSButton variant="outline" size="sm" onClick={() => setCustom(true)}>Open Custom Header</DSButton>
          <DSModal
            open={custom}
            onClose={() => setCustom(false)}
            showCloseButton={false}
            customHeader={
              <div className={s.toolbarRow}>
                <div className={s.flexRowGap3}>
                  <h2 className={s.textOnSurface14Semi}>Custom Header</h2>
                  <span className={s.textGray6_12}>with extra controls</span>
                </div>
                <div className={s.flexRowGap1}>
                  <DSButton variant="ghost" size="sm">Action</DSButton>
                  <DSButton variant="ghost" size="sm" iconOnly onClick={() => setCustom(false)}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M9 1L1 9M1 1L9 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" /></svg>
                  </DSButton>
                </div>
              </div>
            }
          >
            <DSModalBody>
              <p className={s.textSubtle14}>
                This modal uses customHeader for a fully custom header layout with additional controls.
              </p>
            </DSModalBody>
          </DSModal>
        </DocPreview>
      </DocSection>

      <DocSection title="headerRight Slot" description="headerRight — дополнительный контент справа от title (перед кнопкой X).">
        <DocPreview>
          <DSButton variant="outline" size="sm" onClick={() => setConfirm(true)}>Open with headerRight</DSButton>
          <DSModal
            open={confirm}
            onClose={() => setConfirm(false)}
            title="Confirm Deletion"
            headerRight={<span className={s.destructiveBadge}>Destructive</span>}
          >
            <DSModalBody>
              <p className={s.textSubtle14}>
                Are you sure you want to delete this scenario? This action cannot be undone.
              </p>
            </DSModalBody>
            <DSModalFooter>
              <div />
              <div className={s.flexRowGap2}>
                <DSButton variant="ghost" size="sm" onClick={() => setConfirm(false)}>Cancel</DSButton>
                <DSButton variant="destructive" size="sm" onClick={() => setConfirm(false)}>Delete</DSButton>
              </div>
            </DSModalFooter>
          </DSModal>
        </DocPreview>
      </DocSection>

      <DocSection title="Fixed Dimensions" description="width и height — фиксированные размеры панели в px или CSS-строке.">
        <DocPreview>
          <DSButton variant="outline" size="sm" onClick={() => setSized(true)}>Open 600x400 Modal</DSButton>
          <DSModal open={sized} onClose={() => setSized(false)} title="Fixed Size Modal" width={600} height={400}>
            <DSModalBody>
              <p className={s.textSubtle14}>This modal has fixed width=600px and height=400px.</p>
            </DSModalBody>
            <DSModalFooter>
              <div />
              <DSButton variant="primary" size="sm" onClick={() => setSized(false)}>OK</DSButton>
            </DSModalFooter>
          </DSModal>
        </DocPreview>
      </DocSection>

      <DocSection title="Non-dismissible" description="closeOnOverlay={false}, closeOnEscape={false}, showCloseButton={false} — модалка, которую нельзя закрыть стандартными способами (только программно).">
        <DocPreview>
          <DSButton variant="outline" size="sm" onClick={() => setNoClose(true)}>Open Non-dismissible</DSButton>
          <DSModal
            open={noClose}
            onClose={() => setNoClose(false)}
            title="Non-dismissible"
            closeOnOverlay={false}
            closeOnEscape={false}
            showCloseButton={false}
          >
            <DSModalBody>
              <p className={s.textSubtle14}>
                This modal cannot be closed by Escape or overlay click.
                Only the button below will close it.
              </p>
            </DSModalBody>
            <DSModalFooter>
              <div />
              <DSButton variant="primary" size="sm" onClick={() => setNoClose(false)}>I understand</DSButton>
            </DSModalFooter>
          </DSModal>
        </DocPreview>
      </DocSection>

      <DocSection title="Composable Parts">
        <DocSpecTable rows={[
          { prop: 'DSModal', value: 'Root: overlay + panel + Escape + scroll lock', token: 'open, onClose, title, customHeader' },
          { prop: 'DSModalBody', value: 'Scrollable content area', token: 'scrollable, className' },
          { prop: 'DSModalFooter', value: 'Sticky footer with actions', token: 'className' },
        ]} />
      </DocSection>

      <DocSection title="Styling Specs">
        <DocSpecTable rows={[
          { prop: 'Overlay', value: 'bg-black/60 backdrop-blur-sm', token: 'bg-black/60 backdrop-blur-sm' },
          { prop: 'Panel bg', value: 'dark:#191F2D / light:#FFF', token: 'var(--ds-bg-secondary)' },
          { prop: 'Panel border', value: 'dark:#2A2E39 / light:#D0D5DD', token: 'var(--ds-border-primary)' },
          { prop: 'Panel border-radius', value: '12px', token: 'rounded-xl' },
          { prop: 'Panel shadow', value: 'shadow-2xl', token: 'shadow-2xl' },
          { prop: 'Default max-width', value: 'max-w-3xl (768px)', token: 'max-w-3xl' },
          { prop: 'Default max-height', value: '90vh', token: 'max-h-[90vh]' },
          { prop: 'Header padding', value: 'px: 20px, py: 14px', token: 'px-5 py-3.5' },
          { prop: 'Header border', value: '1px solid', token: 'var(--ds-border-primary)' },
          { prop: 'Header title', value: '14px, semibold', token: 'var(--ds-text-primary)' },
          { prop: 'Body padding', value: 'px: 20px, py: 12px', token: 'px-5 py-3' },
          { prop: 'Footer padding', value: 'px: 20px, py: 12px', token: 'px-5 py-3' },
          { prop: 'Footer bg', value: 'var(--ds-bg-secondary)', token: 'var(--ds-bg-secondary)' },
          { prop: 'Footer border', value: '1px solid (top)', token: 'var(--ds-border-primary)' },
          { prop: 'Close button', value: 'ghost DSButton, 16px X icon', token: 'var(--ds-text-gray-dark)' },
          { prop: 'Z-index', value: '200', token: 'z-[200]' },
          { prop: 'Animation', value: 'zoom-in-95 + fade-in 200ms', token: 'animate-in zoom-in-95 fade-in' },
        ]} />
      </DocSection>

      <DocSection title="Props API">
        <DocPropsTable rows={[
          { name: 'open', type: 'boolean', default: '—', description: 'Whether the modal is visible' },
          { name: 'onClose', type: '() => void', default: '—', description: 'Close callback (overlay, Escape, X button)' },
          { name: 'title', type: 'string', default: '—', description: 'Header title text' },
          { name: 'headerRight', type: 'ReactNode', default: '—', description: 'Extra content right of title (before X)' },
          { name: 'customHeader', type: 'ReactNode', default: '—', description: 'Replaces default header entirely' },
          { name: 'width', type: 'number | string', default: 'auto', description: 'Fixed panel width' },
          { name: 'height', type: 'number | string', default: 'auto', description: 'Fixed panel height' },
          { name: 'maxWidth', type: 'string', default: "'max-w-3xl'", description: 'Max width Tailwind class' },
          { name: 'maxHeight', type: 'string', default: "'max-h-[90vh]'", description: 'Max height Tailwind class' },
          { name: 'zIndex', type: 'number', default: '200', description: 'Z-index of the modal' },
          { name: 'closeOnOverlay', type: 'boolean', default: 'true', description: 'Close on overlay click' },
          { name: 'closeOnEscape', type: 'boolean', default: 'true', description: 'Close on Escape key' },
          { name: 'showCloseButton', type: 'boolean', default: 'true', description: 'Show X button in header' },
          { name: 'className', type: 'string', default: '—', description: 'Extra class on panel' },
        ]} />
      </DocSection>

      <DocSection title="DSModalBody Props">
        <DocPropsTable rows={[
          { name: 'scrollable', type: 'boolean', default: 'true', description: 'Enable overflow-y-auto' },
          { name: 'className', type: 'string', default: '—', description: 'Extra class' },
        ]} />
      </DocSection>

      <DocSection title="Usage">
        <DocCode>{`import { DSModal, DSModalBody, DSModalFooter } from './ui/ds-modal';
import { DSButton } from './ui/ds-button';

function MyModal({ open, onClose }) {
  return (
    <DSModal open={open} onClose={onClose} title="My Modal" maxWidth="max-w-xl">
      <DSModalBody>
        <p>Modal content goes here.</p>
      </DSModalBody>
      <DSModalFooter>
        <div />
        <div className="flex gap-2">
          <DSButton variant="ghost" size="sm" onClick={onClose}>Cancel</DSButton>
          <DSButton variant="primary" size="sm" onClick={onClose}>Save</DSButton>
        </div>
      </DSModalFooter>
    </DSModal>
  );
}

// Custom header variant (ChartModal pattern):
<DSModal open={open} onClose={onClose} maxWidth="max-w-6xl" showCloseButton={false}
  customHeader={
    <div className="flex items-center justify-between px-5 py-3.5 border-b border-edge">
      <h2 className="text-[14px] text-on-surface font-semibold">Chart</h2>
      <DSButton variant="ghost" size="sm" iconOnly onClick={onClose}>
        <X size={14} />
      </DSButton>
    </div>
  }
>
  <DSModalBody scrollable={false} className="flex-1">
    {/* Full-height chart content */}
  </DSModalBody>
</DSModal>`}</DocCode>
      </DocSection>
    </div>
  );
}

/* ════════════════════════════════════════════════
   Sparkline (ds-sparkline) Details
   ════════════════════════════════════════════════ */

function SparklineDetails() {
  return (
    <div>
      <DocSection title="Auto Color" description="Цвет линии определяется автоматически: зелёный при росте (последнее значение >= первого), красный при падении. Можно переопределить через color.">
        <DocPreview>
          <div className={s.flexRowGap8}>
            <div className={s.flexColCenter1}>
              <DSSparkline data={[10, 15, 12, 18, 22, 20, 28, 25, 30]} width={77} height={33} />
              <span className={s.textSubtle10}>Рост (auto green)</span>
            </div>
            <div className={s.flexColCenter1}>
              <DSSparkline data={[30, 28, 25, 22, 20, 18, 15, 12, 10]} width={77} height={33} />
              <span className={s.textSubtle10}>Падение (auto red)</span>
            </div>
            <div className={s.flexColCenter1}>
              <DSSparkline data={[15, 20, 18, 25, 22, 30, 28, 35, 32]} width={77} height={33} color="#9A8CFF" />
              <span className={s.textSubtle10}>Custom purple</span>
            </div>
          </div>
        </DocPreview>
      </DocSection>

      <DocSection title="Sizes" description="Произвольные width/height. По умолчанию 77x33 — оптимально для TickerTape и MarketTrends.">
        <DocPreview>
          <div className={s.flexEndGap6}>
            <DSSparkline data={[10, 18, 14, 22, 30, 25, 35]} width={50} height={20} />
            <DSSparkline data={[10, 18, 14, 22, 30, 25, 35]} width={77} height={33} />
            <DSSparkline data={[10, 18, 14, 22, 30, 25, 35]} width={120} height={48} />
          </div>
        </DocPreview>
      </DocSection>

      <DocSection title="Theme Comparison" description="Спарклайны на тёмном и светлом фоне.">
        <DocPreviewDual>
          <div className={s.flexRowGap6}>
            <DSSparkline data={[10, 15, 12, 18, 22, 20, 28, 25, 30]} width={77} height={33} />
            <DSSparkline data={[30, 28, 25, 22, 20, 18, 15, 12, 10]} width={77} height={33} />
          </div>
        </DocPreviewDual>
      </DocSection>

      <DocSection title="Fill Control" description="fill={false} отключает градиентную заливку под линией.">
        <DocPreview>
          <div className={s.flexRowGap6}>
            <div className={s.flexColCenter1}>
              <DSSparkline data={[10, 18, 14, 22, 30, 25, 35]} width={77} height={33} fill />
              <span className={s.textSubtle10}>fill=true</span>
            </div>
            <div className={s.flexColCenter1}>
              <DSSparkline data={[10, 18, 14, 22, 30, 25, 35]} width={77} height={33} fill={false} />
              <span className={s.textSubtle10}>fill=false</span>
            </div>
          </div>
        </DocPreview>
      </DocSection>

      <DocSection title="Styling Specs">
        <DocSpecTable rows={[
          { prop: 'Default size', value: '77 x 33 px', token: 'width={77} height={33}' },
          { prop: 'Stroke width', value: '1.5px', token: 'strokeWidth={1.5}' },
          { prop: 'Stroke linecap', value: 'round', token: 'strokeLinecap="round"' },
          { prop: 'End dot', value: 'r=2, same color', token: '<circle r={2} />' },
          { prop: 'Green color', value: '#1FC989 (green-6)', token: '--ds-green-6' },
          { prop: 'Red color', value: '#EA3943 (red-6)', token: '--ds-red-6' },
          { prop: 'Fill gradient', value: '30% → 0% opacity', token: 'linearGradient' },
          { prop: 'Padding', value: '2px internal', token: 'padding: 2' },
        ]} />
      </DocSection>

      <DocSection title="Props API">
        <DocPropsTable rows={[
          { name: 'data', type: 'number[]', default: '—', description: 'Array of values (min 2)' },
          { name: 'width', type: 'number', default: '77', description: 'SVG width' },
          { name: 'height', type: 'number', default: '33', description: 'SVG height' },
          { name: 'color', type: 'string', default: 'auto', description: 'Line color (auto: green up, red down)' },
          { name: 'fill', type: 'boolean', default: 'true', description: 'Show gradient fill under line' },
          { name: 'strokeWidth', type: 'number', default: '1.5', description: 'Line thickness' },
        ]} />
      </DocSection>

      <DocSection title="Usage">
        <DocCode>{`import { DSSparkline } from './ui/ds-sparkline';

// Auto-colored (green = up, red = down)
<DSSparkline data={[10, 15, 12, 18, 22, 20, 28]} />

// Custom color, no fill
<DSSparkline data={prices} color="#9A8CFF" fill={false} />

// Large variant
<DSSparkline data={values} width={120} height={48} strokeWidth={2} />`}</DocCode>
      </DocSection>
    </div>
  );
}

/* ════════════════════════════════════════════════
   Section Header (ds-section-header) Details
   ════════════════════════════════════════════════ */

function SectionHeaderDetails() {
  return (
    <div>
      <DocSection title="Basic" description="Uppercase заголовок секции. Используется как разделитель виджетов на Andromeda-style экранах.">
        <DocPreview>
          <div className={s.flexCol4Full}>
            <DSSectionHeader>ЛИДЕРЫ РОСТА</DSSectionHeader>
            <DSSectionHeader>ОБЗОРЫ РЫНКОВ</DSSectionHeader>
            <DSSectionHeader>ВИДЕОМАТЕРИАЛЫ</DSSectionHeader>
          </div>
        </DocPreview>
      </DocSection>

      <DocSection title="With Action" description="Опциональная ссылка-действие справа (action + onAction).">
        <DocPreview>
          <div className={s.flexCol4Full}>
            <DSSectionHeader action="Смотреть все" onAction={() => { }}>
              ЛИДЕРЫ РОСТА
            </DSSectionHeader>
            <DSSectionHeader action="12 событий →" onAction={() => { }}>
              ПРЕДСТОЯЩИЕ СОБЫТИЯ
            </DSSectionHeader>
          </div>
        </DocPreview>
      </DocSection>

      <DocSection title="Theme Comparison" description="Заголовок секции в тёмной и светлой теме.">
        <DocPreviewDual>
          <DSSectionHeader action="Смотреть все" onAction={() => { }}>
            ЛИДЕРЫ РОСТА
          </DSSectionHeader>
        </DocPreviewDual>
      </DocSection>

      <DocSection title="Usage Context" description="Используется в HomePage для заголовков секций: Лидеры роста/падения, Обзоры рынков, Бегущая строка, Предстоящие события.">
        <DocPreview>
          <div className={s.usageContextBox}>
            <DSSectionHeader action="Смотреть все" onAction={() => { }}>
              ЛИДЕРЫ РОСТА
            </DSSectionHeader>
            <div className={s.usageContextGrid}>
              <div className={s.usagePlaceholder} />
              <div className={s.usagePlaceholder} />
              <div className={s.usagePlaceholder} />
            </div>
          </div>
        </DocPreview>
      </DocSection>

      <DocSection title="Styling Specs">
        <DocSpecTable rows={[
          { prop: 'Layout', value: 'flex, space-between, full width', token: 'flex items-center justify-between w-full' },
          { prop: 'Label font', value: '12px / 16px, semibold, uppercase', token: 'text-[12px] leading-[16px] font-semibold uppercase' },
          { prop: 'Label color', value: '#677C9C (gray-6)', token: 'var(--ds-text-gray-dark)' },
          { prop: 'Action font', value: '12px / 16px, semibold', token: 'text-[12px] leading-[16px] font-semibold' },
          { prop: 'Action color', value: '#5A8CFF (blue-6)', token: 'var(--ds-blue-6)' },
          { prop: 'Action hover', value: '#729CFF (blue-5)', token: 'var(--ds-blue-5)' },
          { prop: 'Transition', value: 'colors', token: 'transition-colors' },
        ]} />
      </DocSection>

      <DocSection title="Props API">
        <DocPropsTable rows={[
          { name: 'children', type: 'ReactNode', default: '—', description: 'Label text (auto uppercase)' },
          { name: 'action', type: 'string', default: '—', description: 'Action link text (right side)' },
          { name: 'onAction', type: '() => void', default: '—', description: 'Action click handler' },
          { name: 'className', type: 'string', default: '—', description: 'Extra class on root' },
        ]} />
      </DocSection>

      <DocSection title="Usage">
        <DocCode>{`import { DSSectionHeader } from './ui/ds-section-header';

// Simple label
<DSSectionHeader>ЛИДЕРЫ РОСТА</DSSectionHeader>

// With action link
<DSSectionHeader action="Смотреть все" onAction={handleViewAll}>
  ВИДЕОМАТЕРИАЛЫ
</DSSectionHeader>`}</DocCode>
      </DocSection>
    </div>
  );
}

/* ════════════════════════════════════════════════
   NEW COMPONENTS — Detail renderers
   ════════════════════════════════════════════════ */

function SwitchDetails() {
  const [a, setA] = useState(false);
  const [b, setB] = useState(true);
  const [c, setC] = useState(false);

  return (
    <div>
      <DocSection title="States" description="Unchecked, checked, hover (CSS), disabled.">
        <DocPreviewDual>
          <div className={s.flexCol4}>
            <DSSwitch checked={a} onChange={setA} label="Unchecked" />
            <DSSwitch checked={b} onChange={setB} label="Checked" />
            <DSSwitch checked={false} disabled label="Disabled off" />
            <DSSwitch checked={true} disabled label="Disabled on" />
          </div>
        </DocPreviewDual>
      </DocSection>

      <DocSection title="Sizes" description="3 размера: LG (36x20), MD (27x16), SM (20x12).">
        <DocPreview>
          <div className={s.flexRowGap6}>
            <DSSwitch checked={true} size="lg" label="Large" />
            <DSSwitch checked={true} size="md" label="Medium" />
            <DSSwitch checked={true} size="sm" label="Small" />
          </div>
        </DocPreview>
        <div className={s.spacer4} />
        <DocSpecTable rows={[
          { prop: 'LG', value: '36 x 20px, thumb 16px', token: 'w-[36px] h-[20px]' },
          { prop: 'MD', value: '27 x 16px, thumb 12px', token: 'w-[27px] h-[16px]' },
          { prop: 'SM', value: '20 x 12px, thumb 9px', token: 'w-[20px] h-[12px]' },
        ]} />
      </DocSection>

      <DocSection title="Styling Specs">
        <DocSpecTable rows={[
          { prop: 'border-radius', value: 'full (pill)', token: 'rounded-full' },
          { prop: 'track unchecked', value: 'dark:#2A2E39 / light:#D0D5DD', token: 'var(--ds-switch-track-off)' },
          { prop: 'track checked', value: '#5A8CFF solid', token: 'var(--ds-switch-track-on)' },
          { prop: 'thumb unchecked', value: '#5A8CFF', token: 'var(--ds-switch-thumb-off)' },
          { prop: 'thumb checked', value: 'white', token: 'var(--ds-switch-thumb-on)' },
          { prop: 'hover', value: 'border-color #5A8CFF', token: 'var(--ds-blue-6)' },
          { prop: 'disabled', value: 'opacity: 0.5', token: 'opacity-50' },
          { prop: 'transition', value: '150ms', token: 'duration-150' },
        ]} />
      </DocSection>

      <DocSection title="Props API">
        <DocPropsTable rows={[
          { name: 'checked', type: 'boolean', default: 'false', description: 'Controlled checked state' },
          { name: 'onChange', type: '(checked: boolean) => void', default: '—', description: 'Change handler' },
          { name: 'size', type: "'lg' | 'md' | 'sm'", default: "'lg'", description: 'Size variant' },
          { name: 'label', type: 'ReactNode', default: '—', description: 'Optional label text' },
          { name: 'disabled', type: 'boolean', default: 'false', description: 'Disabled state' },
        ]} />
      </DocSection>

      <DocSection title="Usage">
        <DocCode>{`import { DSSwitch } from './ui/ds-switch';

<DSSwitch checked={autoRefresh} onChange={setAutoRefresh} label="Auto-refresh" />
<DSSwitch checked={darkMode} onChange={setDarkMode} size="md" />`}</DocCode>
      </DocSection>
    </div>
  );
}

function BadgeDetails() {
  return (
    <div>
      <DocSection title="Variants" description="6 вариантов: text, icon, count, dot, pill (тёмные фоны), source (новостные источники).">
        <DocPreviewDual>
          <div className={s.flexCol3}>
            <div className={s.flexWrapGap3}>
              <DSBadge variant="text" color="blue">Text</DSBadge>
              <DSBadge variant="icon" color="blue" />
              <DSBadge variant="count" color="blue" count={12} />
              <DSBadge variant="dot" color="blue" />
            </div>
            <div className={s.flexWrapGap3}>
              <DSBadge variant="pill" color="gray" size="s">Pill</DSBadge>
              <DSBadge variant="pill" color="purple" size="s">Purple</DSBadge>
              <DSBadge variant="pill" color="blue" size="s">Blue</DSBadge>
              <DSBadge variant="pill" color="green" size="s">Green</DSBadge>
            </div>
            <div className={s.flexWrapGap3}>
              <DSBadge variant="source" source="reuters" showLabel size="m" />
              <DSBadge variant="source" source="andromeda" showLabel size="m" />
              <DSBadge variant="source" source="telegram" size="s" />
            </div>
          </div>
        </DocPreviewDual>
      </DocSection>

      <DocSection title="Colors" description="7 цветовых схем: blue, red, orange, green, gray, purple, turquoise.">
        <DocPreview>
          <div className={s.flexWrapGap3}>
            {(['blue', 'red', 'orange', 'green', 'gray', 'purple', 'turquoise'] as const).map(c => (
              <DSBadge key={c} color={c}>{c}</DSBadge>
            ))}
          </div>
        </DocPreview>
      </DocSection>

      <DocSection title="Views" description="3 визуальных стиля: fill, stroke, secondary.">
        <DocPreview>
          <div className={s.flexCol3}>
            <div className={s.flexRowGap3}>
              {(['fill', 'stroke', 'secondary'] as const).map(v => (
                <DSBadge key={v} view={v} color="blue">{v}</DSBadge>
              ))}
            </div>
            <div className={s.flexRowGap3}>
              {(['fill', 'stroke', 'secondary'] as const).map(v => (
                <DSBadge key={v} view={v} color="red">{v}</DSBadge>
              ))}
            </div>
          </div>
        </DocPreview>
      </DocSection>

      <DocSection title="Sizes" description="4 размера: L (32px), M (24px), S (20px), XS (16px).">
        <DocPreview>
          <div className={s.flexRowGap3}>
            {(['l', 'm', 's', 'xs'] as const).map(s => (
              <DSBadge key={s} size={s} color="blue">Size {s.toUpperCase()}</DSBadge>
            ))}
          </div>
        </DocPreview>
      </DocSection>

      <DocSection title="Pill Variant" description="Pill-бейджи для тёмных фонов (ранее DSBadgeDark). Округлённый стиль, 7 цветов.">
        <DocPreviewDual>
          <div className={s.flexWrapGap3}>
            <DSBadge variant="pill" color="gray" size="s">Default</DSBadge>
            <DSBadge variant="pill" color="purple" size="s">Purple</DSBadge>
            <DSBadge variant="pill" color="orange" size="s">Orange</DSBadge>
            <DSBadge variant="pill" color="blue" size="s">Blue</DSBadge>
            <DSBadge variant="pill" color="green" size="s">Green</DSBadge>
            <DSBadge variant="pill" color="gray" size="s" count={42} />
          </div>
        </DocPreviewDual>
      </DocSection>

      <DocSection title="Source Variant" description="Брендированные бейджи новостных источников (ранее DSSourceBadge). 13+ источников с SVG-иконками.">
        <DocPreview>
          <div className={s.flexWrapGap3}>
            {ALL_SOURCES.map(src => (
              <DSBadge key={src} variant="source" source={src} showLabel size="m" />
            ))}
          </div>
        </DocPreview>
        <DocPreview>
          <div className={s.flexWrapGap2}>
            {ALL_SOURCES.map(src => (
              <DSBadge key={src} variant="source" source={src} size="s" />
            ))}
          </div>
        </DocPreview>
      </DocSection>

      <DocSection title="Props API">
        <DocPropsTable rows={[
          { name: 'variant', type: "'text' | 'icon' | 'count' | 'dot' | 'pill' | 'source'", default: "'text'", description: 'Display variant' },
          { name: 'color', type: "'blue' | 'red' | 'orange' | 'green' | 'gray' | 'purple' | 'turquoise'", default: "'blue'", description: 'Color scheme' },
          { name: 'view', type: "'fill' | 'stroke' | 'secondary'", default: "'fill'", description: 'Visual style (text/icon/count)' },
          { name: 'size', type: "'l' | 'm' | 's' | 'xs'", default: "'m'", description: 'Size' },
          { name: 'count', type: 'number', default: '—', description: 'Count value (count/pill variants)' },
          { name: 'icon', type: 'ReactNode', default: '—', description: 'Icon element' },
          { name: 'source', type: 'SourceId', default: '—', description: 'Source identifier (source variant)' },
          { name: 'showLabel', type: 'boolean', default: 'false', description: 'Show text label (source variant)' },
          { name: 'disabled', type: 'boolean', default: 'false', description: 'Disabled state (source variant)' },
          { name: 'children', type: 'ReactNode', default: '—', description: 'Text content' },
        ]} />
      </DocSection>

      <DocSection title="Usage">
        <DocCode>{`import { DSBadge } from './ui/ds-badge';

// Text / Fill / Stroke / Secondary
<DSBadge color="blue" view="fill" size="m">Active</DSBadge>
<DSBadge variant="count" color="red" count={5} />
<DSBadge variant="dot" color="green" />

// Pill (dark bg)
<DSBadge variant="pill" color="purple">Category</DSBadge>

// Source (news)
<DSBadge variant="source" source="reuters" showLabel />
<DSBadge variant="source" source="andromeda" size="s" />`}</DocCode>
      </DocSection>
    </div>
  );
}

function TagDetails() {
  const [tags, setTags] = useState(['Finance', 'Oil & Gas', 'Banks']);

  return (
    <div>
      <DocSection title="Colors" description="6 цветовых вариантов.">
        <DocPreviewDual>
          <div className={s.flexWrapGap2}>
            {(['default', 'blue', 'green', 'red', 'orange', 'purple'] as const).map(c => (
              <DSTag key={c} color={c}>{c}</DSTag>
            ))}
          </div>
        </DocPreviewDual>
      </DocSection>

      <DocSection title="Sizes" description="3 размера: LG (32px), MD (24px), SM (20px).">
        <DocPreview>
          <div className={s.flexRowGap3}>
            {(['lg', 'md', 'sm'] as const).map(s => (
              <DSTag key={s} size={s} color="blue">Size {s.toUpperCase()}</DSTag>
            ))}
          </div>
        </DocPreview>
      </DocSection>

      <DocSection title="With Close Button" description="Closable теги с удалением.">
        <DocPreview>
          <div className={s.flexWrapGap2}>
            {tags.map(tag => (
              <DSTag key={tag} color="blue" closable onClose={() => setTags(prev => prev.filter(t => t !== tag))}>
                {tag}
              </DSTag>
            ))}
            {tags.length === 0 && (
              <button
                onClick={() => setTags(['Finance', 'Oil & Gas', 'Banks'])}
                className={s.resetLink}
              >Reset tags</button>
            )}
          </div>
        </DocPreview>
      </DocSection>

      <DocSection title="States" description="Active и disabled состояния.">
        <DocPreview>
          <div className={s.flexRowGap3}>
            <DSTag color="blue">Default</DSTag>
            <DSTag color="blue" active>Active</DSTag>
            <DSTag color="blue" disabled>Disabled</DSTag>
          </div>
        </DocPreview>
      </DocSection>

      <DocSection title="Props API">
        <DocPropsTable rows={[
          { name: 'children', type: 'ReactNode', default: '—', description: 'Tag text' },
          { name: 'color', type: "'default' | 'blue' | 'green' | 'red' | 'orange' | 'purple'", default: "'default'", description: 'Color' },
          { name: 'size', type: "'lg' | 'md' | 'sm'", default: "'md'", description: 'Size' },
          { name: 'icon', type: 'ReactNode', default: '—', description: 'Icon element' },
          { name: 'closable', type: 'boolean', default: 'false', description: 'Show close button' },
          { name: 'onClose', type: '() => void', default: '—', description: 'Close handler' },
          { name: 'onClick', type: '() => void', default: '—', description: 'Click handler' },
          { name: 'active', type: 'boolean', default: 'false', description: 'Active/selected state' },
          { name: 'disabled', type: 'boolean', default: 'false', description: 'Disabled state' },
        ]} />
      </DocSection>

      <DocSection title="Usage">
        <DocCode>{`import { DSTag } from './ui/ds-tag';

<DSTag color="blue" closable onClose={handleRemove}>Finance</DSTag>
<DSTag color="green" active onClick={handleClick}>Selected</DSTag>`}</DocCode>
      </DocSection>
    </div>
  );
}

function MenuDetails() {
  const EyeIcon = () => (
    <svg viewBox="0 0 18 18" fill="none" className={s.iconFull}>
      <path d="M2 9C2 9 5 4 9 4C13 4 16 9 16 9C16 9 13 14 9 14C5 14 2 9 2 9Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="9" cy="9" r="2" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
  const PencilIcon = () => (
    <svg viewBox="0 0 18 18" fill="none" className={s.iconFull}>
      <path d="M11 3L15 7L7 15H3V11L11 3Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
  const TrashIcon = () => (
    <svg viewBox="0 0 18 18" fill="none" className={s.iconFull}>
      <path d="M4 5L5 15H13L14 5M2 5H16M7 5V3H11V5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  return (
    <div>
      <DocSection title="Basic Menu" description="Меню с группами, иконками, сепараторами.">
        <DocPreviewDual>
          <DSMenu open={true} width={214}>
            <DSMenuGroup>
              <DSMenuItem icon={<EyeIcon />}>Просмотр</DSMenuItem>
              <DSMenuItem icon={<PencilIcon />}>Редактировать</DSMenuItem>
            </DSMenuGroup>
            <DSMenuGroup>
              <DSMenuItem description="Дополнительная информация">Покинуть публикацию</DSMenuItem>
            </DSMenuGroup>
            <DSMenuGroup>
              <DSMenuItem variant="accent">Отправить на публикацию</DSMenuItem>
            </DSMenuGroup>
            <DSMenuGroup>
              <DSMenuItem icon={<TrashIcon />} variant="danger">Удалить публикацию</DSMenuItem>
            </DSMenuGroup>
          </DSMenu>
        </DocPreviewDual>
      </DocSection>

      <DocSection title="Item Variants" description="Default, accent (синяя иконка), danger (красная иконка).">
        <DocPreview>
          <DSMenu open={true} width={200}>
            <DSMenuGroup>
              <DSMenuItem>Default item</DSMenuItem>
              <DSMenuItem variant="accent">Accent item</DSMenuItem>
              <DSMenuItem variant="danger">Danger item</DSMenuItem>
              <DSMenuItem disabled>Disabled item</DSMenuItem>
            </DSMenuGroup>
          </DSMenu>
        </DocPreview>
      </DocSection>

      <DocSection title="Props API">
        <DocPropsTable rows={[
          { name: 'open', type: 'boolean', default: 'true', description: 'Control visibility' },
          { name: 'onClose', type: '() => void', default: '—', description: 'Close handler' },
          { name: 'width', type: 'number', default: '230', description: 'Menu width in px' },
        ]} />
        <div className={s.spacer2} />
        <DocPropsTable rows={[
          { name: 'icon', type: 'ReactNode', default: '—', description: 'Item icon (18x18)' },
          { name: 'description', type: 'string', default: '—', description: 'Description below label' },
          { name: 'variant', type: "'default' | 'accent' | 'danger'", default: "'default'", description: 'Visual variant' },
          { name: 'disabled', type: 'boolean', default: 'false', description: 'Disabled state' },
          { name: 'onClick', type: '() => void', default: '—', description: 'Click handler' },
        ]} />
      </DocSection>

      <DocSection title="Usage">
        <DocCode>{`import { DSMenu, DSMenuGroup, DSMenuItem } from './ui/ds-menu';

<DSMenu open={isOpen} onClose={() => setOpen(false)}>
  <DSMenuGroup>
    <DSMenuItem icon={<Eye />}>Просмотр</DSMenuItem>
    <DSMenuItem icon={<Pencil />}>Редактировать</DSMenuItem>
  </DSMenuGroup>
  <DSMenuGroup>
    <DSMenuItem icon={<Trash />} variant="danger">Удалить</DSMenuItem>
  </DSMenuGroup>
</DSMenu>`}</DocCode>
      </DocSection>
    </div>
  );
}

function LegendDetails() {
  const sampleItems = [
    { color: '#5A8CFF', label: 'Revenue' },
    { color: '#F87D37', label: 'EBITDA' },
    { color: '#1FC989', label: 'Net Income' },
    { color: '#9A8CFF', label: 'Free Cash Flow' },
    { color: '#45D3CE', label: 'Operating Margin' },
    { color: '#EA3943', label: 'Debt/Equity' },
    { color: '#F6C825', label: 'P/E Ratio' },
    { color: '#677C9C', label: 'Market Cap' },
  ];

  return (
    <div>
      <DocSection title="Modes" description="3 режима: inline, wrap, slider.">
        <DocPreviewDual>
          <div className={s.flexCol4}>
            <div>
              <div className={s.labelGray6}>inline</div>
              <DSLegend items={sampleItems.slice(0, 3)} mode="inline" />
            </div>
            <div>
              <div className={s.labelGray6}>wrap</div>
              <DSLegend items={sampleItems.slice(0, 6)} mode="wrap" maxWidth={260} />
            </div>
            <div>
              <div className={s.labelGray6}>slider</div>
              <DSLegend items={sampleItems} mode="slider" maxWidth={260} />
            </div>
          </div>
        </DocPreviewDual>
      </DocSection>

      <DocSection title="Styling Specs">
        <DocSpecTable rows={[
          { prop: 'item bg', value: '--ds-bg-table-mark (#212839)', token: 'bg-[var(--ds-bg-table-mark)]' },
          { prop: 'item padding', value: '2px 8px', token: 'px-[8px] py-[2px]' },
          { prop: 'color swatch', value: '8x8px, radius 1px', token: 'size-[8px] rounded-[1px]' },
          { prop: 'label font', value: '10px/16px Inter Medium', token: 'text-[10px] leading-[16px] font-medium' },
          { prop: 'max item width', value: '156px', token: 'max-w-[156px]' },
          { prop: 'arrow button', value: '24x24, bg #F8FAFE', token: 'size-[24px] rounded-[8px]' },
        ]} />
      </DocSection>

      <DocSection title="Props API">
        <DocPropsTable rows={[
          { name: 'items', type: '{ color: string; label: string }[]', default: '—', description: 'Legend items array' },
          { name: 'mode', type: "'inline' | 'wrap' | 'slider'", default: "'inline'", description: 'Display mode' },
          { name: 'maxWidth', type: 'number', default: '—', description: 'Max width in px' },
        ]} />
      </DocSection>

      <DocSection title="Usage">
        <DocCode>{`import { DSLegend } from './ui/ds-legend';

<DSLegend
  mode="slider"
  items={[
    { color: '#5A8CFF', label: 'Revenue' },
    { color: '#F87D37', label: 'EBITDA' },
    { color: '#1FC989', label: 'Net Income' },
  ]}
  maxWidth={300}
/>`}</DocCode>
      </DocSection>
    </div>
  );
}

function CalendarDetails() {
  const [date, setDate] = useState<Date | null>(new Date());

  return (
    <div>
      <DocSection title="Date Picker" description="Полноценный календарь с переключением между датами, месяцами и годами.">
        <DocPreviewDual>
          <DSCalendar value={date} onChange={setDate} />
        </DocPreviewDual>
      </DocSection>

      <DocSection title="Views" description="Переключение между Даты / Месяцы / Годы через сегмент-кнопку.">
        <DocPreview>
          <div className={s.flexRowGap4}>
            <DSCalendar value={date} onChange={setDate} />
          </div>
        </DocPreview>
      </DocSection>

      <DocSection title="Styling Specs">
        <DocSpecTable rows={[
          { prop: 'container', value: '300px, rounded-[8px], border', token: 'var(--ds-bg-secondary) / var(--ds-border-primary)' },
          { prop: 'day cell', value: '32px height, rounded-full', token: 'h-[32px] rounded-full' },
          { prop: 'selected day', value: 'bg #5A8CFF, text white', token: '#5A8CFF / white' },
          { prop: 'today', value: 'border #5A8CFF', token: '1px solid #5A8CFF' },
          { prop: 'outside month', value: 'opacity 0.3', token: 'opacity: 0.3' },
          { prop: 'month/year cell', value: '36px height, rounded-[8px]', token: 'h-[36px] rounded-[8px]' },
          { prop: 'weekday headers', value: '12px, gray-6', token: 'var(--ds-text-gray-dark)' },
        ]} />
      </DocSection>

      <DocSection title="Props API">
        <DocPropsTable rows={[
          { name: 'value', type: 'Date | null', default: '—', description: 'Selected date' },
          { name: 'onChange', type: '(date: Date) => void', default: '—', description: 'Change handler' },
          { name: 'min', type: 'Date', default: '—', description: 'Min selectable date' },
          { name: 'max', type: 'Date', default: '—', description: 'Max selectable date' },
          { name: 'initialMonth', type: 'Date', default: '—', description: 'Starting month to display' },
        ]} />
      </DocSection>

      <DocSection title="Usage">
        <DocCode>{`import { DSCalendar } from './ui/ds-calendar';

<DSCalendar
  value={selectedDate}
  onChange={setSelectedDate}
  min={new Date(2024, 0, 1)}
  max={new Date(2026, 11, 31)}
/>`}</DocCode>
      </DocSection>
    </div>
  );
}

function ConfirmDialogDetails() {
  const [openDefault, setOpenDefault] = useState(false);
  const [openDanger, setOpenDanger] = useState(false);

  return (
    <div>
      <DocSection title="Default" description="Стандартный диалог подтверждения с центрированным заголовком и описанием. Две кнопки: отмена и подтверждение.">
        <DocPreview>
          <div className={s.flexRowGap4}>
            <DSButton variant="primary" size="sm" onClick={() => setOpenDefault(true)}>Открыть диалог</DSButton>
            <DSButton variant="destructive" size="sm" onClick={() => setOpenDanger(true)}>Danger вариант</DSButton>
          </div>
          <DSConfirmDialog
            open={openDefault}
            title="Закрыть тикет?"
            message={<>После подтверждения тикет будет переведён<br />в статус &laquo;Закрыт&raquo;</>}
            confirmLabel="Закрыть"
            onConfirm={() => setOpenDefault(false)}
            onCancel={() => setOpenDefault(false)}
          />
          <DSConfirmDialog
            open={openDanger}
            title="Удалить виджет?"
            message="Это действие нельзя отменить. Виджет будет удалён безвозвратно."
            confirmLabel="Удалить"
            confirmColor="#EA3943"
            onConfirm={() => setOpenDanger(false)}
            onCancel={() => setOpenDanger(false)}
          />
        </DocPreview>
      </DocSection>

      <DocSection title="Styling Specs">
        <DocSpecTable rows={[
          { prop: 'panel', value: 'width 320px, rounded-[8px]', token: 'var(--ds-bg-secondary)' },
          { prop: 'shadow', value: '0 4px 16px rgba(0,0,0,0.08)', token: '—' },
          { prop: 'title', value: '18px / 24px, semibold, centered', token: 'var(--ds-text-primary)' },
          { prop: 'message', value: '14px / 20px, regular, centered', token: 'var(--ds-text-gray-dark)' },
          { prop: 'divider', value: '1px solid', token: 'var(--ds-border-primary)' },
          { prop: 'buttons', value: 'height 32px, rounded-[8px], flex 1', token: '—' },
          { prop: 'cancel btn', value: '12px semibold', token: 'var(--ds-bg-primary) / var(--ds-blue-6)' },
          { prop: 'confirm btn', value: '12px semibold, white text', token: 'var(--ds-blue-6) / white' },
          { prop: 'button gap', value: '8px', token: '—' },
          { prop: 'padding', value: '16px all sections', token: '—' },
        ]} />
      </DocSection>

      <DocSection title="Props API">
        <DocPropsTable rows={[
          { name: 'open', type: 'boolean', default: '—', description: 'Visibility state' },
          { name: 'title', type: 'string', default: '—', description: 'Dialog title (centered)' },
          { name: 'message', type: 'string | ReactNode', default: '—', description: 'Description text (centered, muted)' },
          { name: 'cancelLabel', type: 'string', default: "'Отмена'", description: 'Cancel button label' },
          { name: 'confirmLabel', type: 'string', default: '—', description: 'Confirm button label' },
          { name: 'confirmColor', type: 'string', default: 'var(--ds-blue-6)', description: 'Confirm button background' },
          { name: 'confirmTextColor', type: 'string', default: "'white'", description: 'Confirm button text color' },
          { name: 'onCancel', type: '() => void', default: '—', description: 'Cancel handler' },
          { name: 'onConfirm', type: '() => void', default: '—', description: 'Confirm handler' },
          { name: 'closeOnOverlay', type: 'boolean', default: 'true', description: 'Close on overlay click' },
          { name: 'closeOnEscape', type: 'boolean', default: 'true', description: 'Close on Escape key' },
          { name: 'width', type: 'number', default: '320', description: 'Panel width in pixels' },
          { name: 'zIndex', type: 'number', default: '1100', description: 'z-index for stacking' },
        ]} />
      </DocSection>

      <DocSection title="Usage">
        <DocCode>{`import { DSConfirmDialog } from './ui/ds-confirm-dialog';

const [open, setOpen] = useState(false);

<DSConfirmDialog
  open={open}
  title="Закрыть тикет?"
  message={<>После подтверждения тикет будет переведён<br />в статус «Закрыт»</>}
  confirmLabel="Закрыть"
  onConfirm={() => { handleClose(); setOpen(false); }}
  onCancel={() => setOpen(false)}
/>

// Danger variant:
<DSConfirmDialog
  open={open}
  title="Удалить виджет?"
  message="Это действие нельзя отменить"
  confirmLabel="Удалить"
  confirmColor="#EA3943"
  onConfirm={handleDelete}
  onCancel={() => setOpen(false)}
/>`}</DocCode>
      </DocSection>
    </div>
  );
}

const DETAIL_RENDERERS: Record<string, React.FC> = {
  'ds-button': ButtonDetails,
  'ds-input': InputDetails,
  'ds-checkbox': CheckboxDetails,
  'ds-tabs': TabsDetails,
  'ds-segment-button': SegmentDetails,
  'ds-select': SelectDetails,
  'ds-custom-dropdown': CustomDropdownDetails,
  'ds-table': TableDetails,
  'ds-chart-grid': ChartGridDetails,
  'ds-chart': ChartComponentDetails,
  'notification': NotificationDetails,
  'ds-tooltip': TooltipDetails,
  'ds-modal': ModalDetails,
  'ds-sparkline': SparklineDetails,
  'ds-section-header': SectionHeaderDetails,
  'ds-switch': SwitchDetails,
  'ds-badge': BadgeDetails,
  'ds-tag': TagDetails,
  'ds-menu': MenuDetails,
  'ds-legend': LegendDetails,
  'ds-calendar': CalendarDetails,
  'ds-confirm-dialog': ConfirmDialogDetails,
};

export function ComponentDetailPage() {
  const { id } = useParams<{ id: string }>();

  if (!id || !COMPONENT_NAMES[id]) {
    return <Navigate to="/components" replace />;
  }

  const name = COMPONENT_NAMES[id];
  const DetailRenderer = DETAIL_RENDERERS[id];

  return (
    <DocShell
      breadcrumbs={[
        { label: 'Главная', to: '/' },
        { label: 'Библиотека', to: '/components' },
        { label: name },
      ]}
      sidebar={<DocSidebar activeId={id} />}
    >
      <div className={s.pageHeader}>
        <div className={s.titleRow}>
          <h1 className={s.title}>{name}</h1>
          <span className={s.titleBadge}>
            {id}.tsx
          </span>
        </div>
        <p className={s.importPath}>
          import {'{ '}DS{name.replace(/\s/g, '')}{' }'} from './ui/{id}';
        </p>
      </div>

      {DetailRenderer ? <DetailRenderer /> : <p>Documentation coming soon.</p>}
    </DocShell>
  );
}