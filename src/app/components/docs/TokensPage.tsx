import React from 'react';
import { DocShell, DocSection, DocSpecTable } from './DocShell';
import { DocSidebar } from './DocSidebar';

/* ═══════════════════════════════════════════════════════
   TokensPage — Design Tokens Documentation (Mantine migration)
   ═══════════════════════════════════════════════════════ */

const COLOR_SCALES: { name: string; prefix: string; steps: { step: number; hex: string }[] }[] = [
  { name: 'Dark', prefix: 'dark', steps: [
    { step: 0, hex: '#FFFFFF' }, { step: 1, hex: '#F8FAFE' }, { step: 2, hex: '#E0E1E2' }, { step: 3, hex: '#C4C7C9' }, { step: 4, hex: '#2A2E39' },
    { step: 5, hex: '#191F2D' }, { step: 6, hex: '#131722' }, { step: 7, hex: '#10141D' }, { step: 8, hex: '#0E1018' }, { step: 9, hex: '#000000' },
  ]},
  { name: 'Blue', prefix: 'blue', steps: [
    { step: 0, hex: '#E7EFFF' }, { step: 1, hex: '#D0DEFF' }, { step: 2, hex: '#B8CEFF' }, { step: 3, hex: '#A1BDFF' }, { step: 4, hex: '#89ADFF' },
    { step: 5, hex: '#729CFF' }, { step: 6, hex: '#5A8CFF' }, { step: 7, hex: '#3B66C9' }, { step: 8, hex: '#2D406C' }, { step: 9, hex: '#202A42' },
  ]},
  { name: 'Green', prefix: 'green', steps: [
    { step: 0, hex: '#DDFAEF' }, { step: 1, hex: '#BAF4DE' }, { step: 2, hex: '#98EFCE' }, { step: 3, hex: '#75EABE' }, { step: 4, hex: '#53E4AE' },
    { step: 5, hex: '#31DF9D' }, { step: 6, hex: '#1FC989' }, { step: 7, hex: '#1BAC75' }, { step: 8, hex: '#1B5249' }, { step: 9, hex: '#1A3037' },
  ]},
  { name: 'Red', prefix: 'red', steps: [
    { step: 0, hex: '#FCE3E4' }, { step: 1, hex: '#F9C6C9' }, { step: 2, hex: '#F6AAAE' }, { step: 3, hex: '#F38E94' }, { step: 4, hex: '#F07279' },
    { step: 5, hex: '#ED555E' }, { step: 6, hex: '#EA3943' }, { step: 7, hex: '#CD2835' }, { step: 8, hex: '#5B2635' }, { step: 9, hex: '#2E2230' },
  ]},
  { name: 'Orange', prefix: 'orange', steps: [
    { step: 0, hex: '#FEECE2' }, { step: 1, hex: '#FDDAC6' }, { step: 2, hex: '#FCC7A9' }, { step: 3, hex: '#FBB58D' }, { step: 4, hex: '#FAA270' },
    { step: 5, hex: '#F99054' }, { step: 6, hex: '#F87D37' }, { step: 7, hex: '#F7620D' }, { step: 8, hex: '#5C3B30' }, { step: 9, hex: '#30282E' },
  ]},
  { name: 'Yellow', prefix: 'yellow', steps: [
    { step: 0, hex: '#FEF7E0' }, { step: 1, hex: '#FCEFC1' }, { step: 2, hex: '#FBE7A2' }, { step: 3, hex: '#FAE082' }, { step: 4, hex: '#F9D863' },
    { step: 5, hex: '#F7D044' }, { step: 6, hex: '#F6C825' }, { step: 7, hex: '#E9B80A' }, { step: 8, hex: '#5C522B' }, { step: 9, hex: '#30302D' },
  ]},
  { name: 'Turquoise', prefix: 'turquoise', steps: [
    { step: 0, hex: '#E4F9F8' }, { step: 1, hex: '#CAF2F1' }, { step: 2, hex: '#AFECEA' }, { step: 3, hex: '#95E6E3' }, { step: 4, hex: '#7AE0DC' },
    { step: 5, hex: '#60D9D5' }, { step: 6, hex: '#45D3CE' }, { step: 7, hex: '#2EC2BD' }, { step: 8, hex: '#27555E' }, { step: 9, hex: '#1E313E' },
  ]},
  { name: 'Purple', prefix: 'purple', steps: [
    { step: 0, hex: '#F1EFFF' }, { step: 1, hex: '#E2DEFF' }, { step: 2, hex: '#D4CEFF' }, { step: 3, hex: '#C5BDFF' }, { step: 4, hex: '#B7ADFF' },
    { step: 5, hex: '#A89CFF' }, { step: 6, hex: '#9A8CFF' }, { step: 7, hex: '#6854FF' }, { step: 8, hex: '#40406C' }, { step: 9, hex: '#262A42' },
  ]},
  { name: 'Gray', prefix: 'gray', steps: [
    { step: 0, hex: '#E9ECF1' }, { step: 1, hex: '#D4DAE3' }, { step: 2, hex: '#BEC7D5' }, { step: 3, hex: '#A8B4C6' }, { step: 4, hex: '#92A1B8' },
    { step: 5, hex: '#7D8FAA' }, { step: 6, hex: '#677C9C' }, { step: 7, hex: '#586A86' }, { step: 8, hex: '#313B4F' }, { step: 9, hex: '#212839' },
  ]},
];

const ALPHA_COLORS: { name: string; prefix: string; hex6: string; rgb6: string; hex7: string; rgb7: string }[] = [
  { name: 'Blue',      prefix: 'blue',      hex6: '#5A8CFF', rgb6: '90, 140, 255',   hex7: '#3B66C9', rgb7: '59, 102, 201'   },
  { name: 'Green',     prefix: 'green',     hex6: '#1FC989', rgb6: '31, 201, 137',   hex7: '#1BAC75', rgb7: '27, 172, 117'   },
  { name: 'Red',       prefix: 'red',       hex6: '#EA3943', rgb6: '234, 57, 67',    hex7: '#CD2835', rgb7: '205, 40, 53'    },
  { name: 'Orange',    prefix: 'orange',    hex6: '#F87D37', rgb6: '248, 125, 55',   hex7: '#F7620D', rgb7: '247, 98, 13'    },
  { name: 'Yellow',    prefix: 'yellow',    hex6: '#F6C825', rgb6: '246, 200, 37',   hex7: '#E9B80A', rgb7: '233, 184, 10'   },
  { name: 'Turquoise', prefix: 'turquoise', hex6: '#45D3CE', rgb6: '69, 211, 206',   hex7: '#2EC2BD', rgb7: '46, 194, 189'   },
  { name: 'Purple',    prefix: 'purple',    hex6: '#9A8CFF', rgb6: '154, 140, 255',  hex7: '#6854FF', rgb7: '104, 84, 255'   },
  { name: 'Gray',      prefix: 'gray',      hex6: '#677C9C', rgb6: '103, 124, 156',  hex7: '#586A86', rgb7: '88, 106, 134'   },
];

const ALPHA_LEVELS = [
  { suffix: 'a10', opacity: 0.1, label: '10%', role: 'Hover' },
  { suffix: 'a30', opacity: 0.3, label: '30%', role: 'Active / Pressed' },
  { suffix: 'a50', opacity: 0.5, label: '50%', role: 'Emphasis / Overlay' },
];

function AlphaSwatch({ rgb, opacity, label }: { rgb: string; opacity: number; label: string }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
      <div style={{ width: 40, height: 40, borderRadius: 6, border: '1px solid var(--ds-border-primary)', flexShrink: 0, backgroundColor: `rgba(${rgb}, ${opacity})` }} />
      <span style={{ fontSize: 10, lineHeight: '14px', fontFamily: 'monospace', color: 'var(--ds-text-gray-dark)' }}>{label}</span>
      <span style={{ fontSize: 10, lineHeight: '12px', fontFamily: 'monospace', color: '#313B4F' }}>{Math.round(opacity * 100)}%</span>
    </div>
  );
}

function ColorSwatch({ hex, label }: { hex: string; label: string }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
      <div style={{ width: 40, height: 40, borderRadius: 6, border: '1px solid var(--ds-border-primary)', flexShrink: 0, backgroundColor: hex }} />
      <span style={{ fontSize: 10, lineHeight: '14px', fontFamily: 'monospace', color: 'var(--ds-text-gray-dark)' }}>{label}</span>
      <span style={{ fontSize: 10, lineHeight: '12px', fontFamily: 'monospace', color: '#313B4F' }}>{hex}</span>
    </div>
  );
}

const BORDER_RADII = [
  { label: '3px', radius: 3, desc: 'Checkbox sm' },
  { label: '4px', radius: 4, desc: 'Checkbox md, tags' },
  { label: '6px', radius: 6, desc: 'Segment inner, swatches' },
  { label: '8px (lg)', radius: 8, desc: 'Buttons, inputs, cards' },
  { label: '10px', radius: 10, desc: '--radius (0.625rem)' },
  { label: 'Full', radius: 9999, desc: 'Badge pills' },
];

export function TokensPage() {
  return (
    <DocShell breadcrumbs={[
      { label: 'Главная', to: '/' },
      { label: 'Библиотека', to: '/components' },
      { label: 'Design Tokens' },
    ]}
      sidebar={<DocSidebar activeId="tokens" />}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 40 }}>
        <h1 style={{ fontSize: 28, lineHeight: '36px', color: 'var(--ds-text-primary)' }}>Design Tokens</h1>
        <p style={{ fontSize: 14, lineHeight: '20px', color: 'var(--ds-text-gray-dark)', maxWidth: 700 }}>
          Токены дизайн-системы Andromeda. Определены в <code style={{ color: 'var(--ds-blue-6)', fontFamily: 'monospace' }}>theme.css</code> как CSS Custom Properties.
          Зарегистрированы в <code style={{ color: 'var(--ds-blue-6)', fontFamily: 'monospace' }}>@theme inline</code> для использования с Tailwind v4.
        </p>
      </div>

      {/* ── Typography ── */}
      <DocSection title="Typography" description="Шрифт Inter (Google Fonts). 4 веса, 6 уровней заголовков, body и caption стили.">
        <DocSpecTable rows={[
          { prop: 'font-family', value: "'Inter', sans-serif", token: '--font-family' },
          { prop: 'font-weight-light', value: '300', token: '--font-weight-light' },
          { prop: 'font-weight-normal', value: '400', token: '--font-weight-normal' },
          { prop: 'font-weight-medium', value: '500', token: '--font-weight-medium' },
          { prop: 'font-weight-semibold', value: '600', token: '--font-weight-semibold' },
        ]} />
        <div style={{ marginTop: 16 }} />
        <DocSpecTable rows={[
          { prop: 'H1', value: '32px / 40px, medium (500)', token: '--text-h1 / --leading-h1' },
          { prop: 'H2', value: '24px / 32px, semibold (600)', token: '--text-h2 / --leading-h2' },
          { prop: 'H3', value: '18px / 24px, semibold (600)', token: '--text-h3 / --leading-h3' },
          { prop: 'H4', value: '16px / 20px, semibold (600)', token: '--text-h4 / --leading-h4' },
          { prop: 'H5', value: '14px / 20px, semibold (600)', token: '--text-h5 / --leading-h5' },
          { prop: 'H6', value: '12px / 16px, semibold (600)', token: '--text-h6 / --leading-h6' },
          { prop: 'Body Big', value: '18px / 28px, normal (400)', token: '--text-big / --leading-big' },
          { prop: 'Body Medium', value: '16px / 24px, normal (400)', token: '--text-medium / --leading-medium' },
          { prop: 'Body Small', value: '14px / 20px, normal (400)', token: '--text-small / --leading-small' },
          { prop: 'Body Extra Small', value: '12px / 16px, normal (400)', token: '--text-extrasmall / --leading-extrasmall' },
          { prop: 'Caption', value: '12px / 16px, medium (500)', token: '--text-caption / --leading-caption' },
          { prop: 'Caption Small', value: '10px / 16px, medium (500)', token: '--text-caption-small / --leading-caption-small' },
          { prop: 'Button LG', value: '18px / 24px, semibold', token: '--text-btn-lg' },
          { prop: 'Button MD', value: '16px / 20px, semibold', token: '--text-btn-md' },
          { prop: 'Button SM', value: '14px / 20px, semibold', token: '--text-btn-sm' },
          { prop: 'Button XS', value: '12px / 16px, semibold', token: '--text-btn-xs' },
        ]} />
        <div style={{ marginTop: 24, borderRadius: 8, border: '1px solid var(--ds-border-primary)', backgroundColor: 'var(--ds-bg-secondary)', padding: 24, display: 'flex', flexDirection: 'column', gap: 12 }}>
          <span style={{ fontSize: 32, lineHeight: '40px', fontWeight: 500, color: 'var(--ds-text-primary)' }}>H1 — Heading 32/40</span>
          <span style={{ fontSize: 24, lineHeight: '32px', fontWeight: 600, color: 'var(--ds-text-primary)' }}>H2 — Heading 24/32</span>
          <span style={{ fontSize: 18, lineHeight: '24px', fontWeight: 600, color: 'var(--ds-text-primary)' }}>H3 — Heading 18/24</span>
          <span style={{ fontSize: 16, lineHeight: '20px', fontWeight: 600, color: 'var(--ds-text-primary)' }}>H4 — Heading 16/20</span>
          <span style={{ fontSize: 14, lineHeight: '20px', fontWeight: 600, color: 'var(--ds-text-primary)' }}>H5 — Heading 14/20</span>
          <span style={{ fontSize: 12, lineHeight: '16px', fontWeight: 600, color: 'var(--ds-text-primary)' }}>H6 — Heading 12/16</span>
          <div style={{ height: 1, backgroundColor: 'var(--ds-border-primary)', margin: '4px 0' }} />
          <span style={{ fontSize: 18, lineHeight: '28px', fontWeight: 400, color: 'var(--ds-text-primary)' }}>Body Big — 18/28 regular</span>
          <span style={{ fontSize: 16, lineHeight: '24px', fontWeight: 400, color: 'var(--ds-text-primary)' }}>Body Medium — 16/24 regular</span>
          <span style={{ fontSize: 14, lineHeight: '20px', fontWeight: 400, color: 'var(--ds-text-primary)' }}>Body Small — 14/20 regular</span>
          <span style={{ fontSize: 12, lineHeight: '16px', fontWeight: 400, color: 'var(--ds-text-primary)' }}>Body Extra Small — 12/16 regular</span>
          <span style={{ fontSize: 10, lineHeight: '16px', fontWeight: 500, color: 'var(--ds-text-primary)' }}>Caption Small — 10/16 medium</span>
        </div>
      </DocSection>

      {/* ── Color Primitives ── */}
      <DocSection title="Color Primitives" description="9 шкал по 10 ступеней (0-9). Ступень 6 — основной акцентный тон. CSS: --ds-{scale}-{step}. Tailwind: bg-{scale}-{step}.">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {COLOR_SCALES.map(scale => (
            <div key={scale.name} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontSize: 14, lineHeight: '20px', color: 'var(--ds-text-primary)' }}>{scale.name}</span>
                <span style={{ fontSize: 11, fontFamily: 'monospace', color: 'var(--ds-text-gray-dark)' }}>--ds-{scale.prefix}-*</span>
              </div>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {scale.steps.map(s => (
                  <ColorSwatch key={s.step} hex={s.hex} label={`${s.step}`} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </DocSection>

      {/* ── Alpha Colors ── */}
      <DocSection title="Alpha Colors" description={
        'Прозрачные варианты основных акцентных цветов для интерактивных состояний. ' +
        'Для каждого цвета на ступенях -6 (accent) и -7 (muted) определены 3 уровня прозрачности: ' +
        'a10 (10% — hover), a30 (30% — active/pressed), a50 (50% — emphasis/overlay). ' +
        'CSS: --ds-{scale}-6-a{N}. Tailwind: bg-{scale}-6-a{N}.'
      }>
        <DocSpecTable rows={[
          { prop: 'a10 (10%)', value: 'Hover backgrounds, subtle highlights', token: 'bg-{color}-6-a10 / hover:bg-{color}-6-a10' },
          { prop: 'a30 (30%)', value: 'Active / pressed states, selected items', token: 'bg-{color}-6-a30 / border-{color}-6-a30' },
          { prop: 'a50 (50%)', value: 'Emphasis overlays, strong focus rings', token: 'bg-{color}-6-a50' },
        ]} />

        <div style={{ marginTop: 12, marginBottom: 8 }}>
          <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--ds-text-primary)' }}>Ступень -6 (Accent)</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {ALPHA_COLORS.map(color => (
            <div key={`6-${color.name}`} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ width: 12, height: 12, borderRadius: 2, flexShrink: 0, backgroundColor: color.hex6 }} />
                <span style={{ fontSize: 13, lineHeight: '20px', color: 'var(--ds-text-primary)' }}>{color.name}-6</span>
                <span style={{ fontSize: 10, fontFamily: 'monospace', color: 'var(--ds-text-gray-dark)' }}>{color.hex6}</span>
              </div>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {ALPHA_LEVELS.map(level => (
                  <AlphaSwatch key={level.suffix} rgb={color.rgb6} opacity={level.opacity} label={`${color.prefix}-6-${level.suffix}`} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 24, marginBottom: 8 }}>
          <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--ds-text-primary)' }}>Ступень -7 (Muted)</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {ALPHA_COLORS.map(color => (
            <div key={`7-${color.name}`} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ width: 12, height: 12, borderRadius: 2, flexShrink: 0, backgroundColor: color.hex7 }} />
                <span style={{ fontSize: 13, lineHeight: '20px', color: 'var(--ds-text-primary)' }}>{color.name}-7</span>
                <span style={{ fontSize: 10, fontFamily: 'monospace', color: 'var(--ds-text-gray-dark)' }}>{color.hex7}</span>
              </div>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {ALPHA_LEVELS.map(level => (
                  <AlphaSwatch key={level.suffix} rgb={color.rgb7} opacity={level.opacity} label={`${color.prefix}-7-${level.suffix}`} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Usage examples */}
        <div style={{ marginTop: 24, borderRadius: 8, border: '1px solid var(--ds-border-primary)', backgroundColor: 'var(--ds-bg-secondary)', padding: 20, display: 'flex', flexDirection: 'column', gap: 12 }}>
          <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--ds-text-primary)' }}>Live Usage</span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            <div style={{ padding: '8px 16px', borderRadius: 8, backgroundColor: 'rgba(90,140,255,0.1)', color: '#5A8CFF', fontSize: 12, fontFamily: 'monospace' }}>bg-blue-6-a10 (hover)</div>
            <div style={{ padding: '8px 16px', borderRadius: 8, backgroundColor: 'rgba(90,140,255,0.3)', color: '#5A8CFF', fontSize: 12, fontFamily: 'monospace' }}>bg-blue-6-a30 (active)</div>
            <div style={{ padding: '8px 16px', borderRadius: 8, backgroundColor: 'rgba(90,140,255,0.5)', color: '#FFFFFF', fontSize: 12, fontFamily: 'monospace' }}>bg-blue-6-a50 (emphasis)</div>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            <div style={{ padding: '8px 16px', borderRadius: 8, backgroundColor: 'rgba(31,201,137,0.1)', color: '#1FC989', fontSize: 12, fontFamily: 'monospace' }}>bg-green-6-a10</div>
            <div style={{ padding: '8px 16px', borderRadius: 8, backgroundColor: 'rgba(234,57,67,0.1)', color: '#EA3943', fontSize: 12, fontFamily: 'monospace' }}>bg-red-6-a10</div>
            <div style={{ padding: '8px 16px', borderRadius: 8, backgroundColor: 'rgba(248,125,55,0.3)', color: '#F87D37', fontSize: 12, fontFamily: 'monospace' }}>bg-orange-6-a30</div>
            <div style={{ padding: '8px 16px', borderRadius: 8, backgroundColor: 'rgba(154,140,255,0.3)', color: '#9A8CFF', fontSize: 12, fontFamily: 'monospace' }}>bg-purple-6-a30</div>
            <div style={{ padding: '8px 16px', borderRadius: 8, backgroundColor: 'rgba(69,211,206,0.5)', color: '#FFFFFF', fontSize: 12, fontFamily: 'monospace' }}>bg-turquoise-6-a50</div>
          </div>
        </div>
      </DocSection>

      {/* ── Semantic Tokens ── */}
      <DocSection title="Semantic Tokens" description="Семантические токены маппят примитивы на роли в интерфейсе. Определены как CSS custom properties и зарегистрированы в Tailwind через @theme.">
        <DocSpecTable rows={[
          { prop: 'Background Primary', value: '#131722 (dark-6)', token: 'bg-surface / --ds-bg-primary' },
          { prop: 'Background Secondary', value: '#191F2D (dark-5)', token: 'bg-surface-alt / --ds-bg-secondary' },
          { prop: 'Table Mark Header', value: '#2A2E39 (dark-4)', token: 'bg-surface-mark-header' },
          { prop: 'Table Mark', value: '#212839 (gray-9)', token: 'bg-surface-mark' },
          { prop: 'Text Primary', value: '#E0E1E2 (dark-2)', token: 'text-on-surface / --ds-text-primary' },
          { prop: 'Text Secondary', value: '#C4C7C9 (dark-3)', token: 'text-on-surface-muted' },
          { prop: 'Text Subtle', value: '#677C9C (gray-6)', token: 'text-on-surface-subtle' },
          { prop: 'Text Faint', value: '#92A1B8 (gray-4)', token: 'text-on-surface-faint' },
          { prop: 'Border Primary', value: '#2A2E39 (dark-4)', token: 'border-edge' },
          { prop: 'Border Secondary', value: '#191F2D (dark-5)', token: 'border-edge-subtle' },
          { prop: 'Border Hover', value: 'blue-6 @ 30%', token: 'border-edge-hover / --ds-blue-6-a30' },
          { prop: 'Border Active', value: '#5A8CFF (blue-6)', token: 'border-edge-active' },
          { prop: 'Control Default', value: '#131722 (dark-6)', token: 'bg-ctrl-default' },
          { prop: 'Control Hover', value: 'blue-6 @ 10%', token: 'bg-ctrl-hover / --ds-blue-6-a10' },
          { prop: 'Control Active', value: 'blue-6 @ 30%', token: 'bg-ctrl-active / --ds-blue-6-a30' },
        ]} />
      </DocSection>

      {/* ── Border Radius ── */}
      <DocSection title="Border Radius" description="Скругления используемые в компонентах.">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
          {BORDER_RADII.map(r => (
            <div key={r.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 56, height: 56, border: '2px solid var(--ds-blue-6)', backgroundColor: 'var(--ds-bg-secondary)', borderRadius: r.radius }} />
              <span style={{ fontSize: 11, fontFamily: 'monospace', color: 'var(--ds-text-primary)' }}>{r.label}</span>
              <span style={{ fontSize: 10, color: 'var(--ds-text-gray-dark)', textAlign: 'center', maxWidth: 80 }}>{r.desc}</span>
            </div>
          ))}
        </div>
      </DocSection>

      {/* ── Spacing ── */}
      <DocSection title="Spacing & Sizing" description="Размеры компонентов по высоте из Figma-спецификации.">
        <DocSpecTable rows={[
          { prop: 'XL', value: '56px', token: 'h-14 / h-[56px]' },
          { prop: 'LG', value: '48px', token: 'h-12 / h-[48px]' },
          { prop: 'MD', value: '40px', token: 'h-10 / h-[40px]' },
          { prop: 'SM', value: '32px', token: 'h-8 / h-[32px]' },
          { prop: 'XS', value: '28px', token: 'h-7 / h-[28px]' },
          { prop: 'XXS', value: '24px', token: 'h-6 / h-[24px]' },
        ]} />
      </DocSection>

      {/* ── Shadows & Effects ── */}
      <DocSection title="Special Values" description="Дополнительные переменные и эффекты.">
        <DocSpecTable rows={[
          { prop: 'Forecast color', value: '#45D3CE', token: '--ds-turquoise-6' },
          { prop: 'Forecast text color', value: 'dark: turquoise-6 / light: turquoise-8', token: '--ds-table-forecast-text' },
          { prop: 'Table header bg', value: 'dark: #2f3441 / light: gray-0', token: '--ds-table-header-bg' },
          { prop: 'Forecast header bg', value: 'dark: #2A2E39 / light: turquoise-0', token: '--ds-table-forecast-header-bg' },
          { prop: 'Forecast cell bg', value: 'dark: #151B27 / light: turquoise-0', token: '--ds-table-forecast-cell-bg' },
          { prop: 'Sticky cell bg', value: 'dark: #10141D / light: white', token: '--ds-table-sticky-bg' },
          { prop: 'Sort highlight', value: 'rgba(90,140,255, 0.06)', token: 'Semi-transparent' },
          { prop: 'Sort header highlight', value: 'rgba(90,140,255, 0.12)', token: 'Semi-transparent' },
          { prop: 'Notif. error bg', value: 'dark: red-8 / light: red-0', token: '--ds-notification-error-bg' },
          { prop: 'Notif. warning bg', value: 'dark: orange-8 / light: orange-0', token: '--ds-notification-warning-bg' },
          { prop: 'Notif. success bg', value: 'dark: green-8 / light: green-0', token: '--ds-notification-success-bg' },
          { prop: 'Focus ring', value: '#5A8CFF, offset 2px, width 2px', token: 'focus-visible:outline-blue-6' },
          { prop: 'Tabular numbers', value: "font-feature-settings: 'lnum', 'tnum'", token: 'Style' },
          { prop: 'Scrollbar', value: 'thin, thumb #313B4F', token: '--ds-gray-8' },
        ]} />
      </DocSection>
    </DocShell>
  );
}