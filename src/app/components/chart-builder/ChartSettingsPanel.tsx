import React, { useState } from 'react';
import { Plus, Trash2, Eye, EyeOff } from 'lucide-react';
import { DSButton } from '../ui/ds-button';
import { DSInput } from '../ui/ds-input';
import { DSSelect } from '../ui/ds-select';
import { DSCheckbox } from '../ui/ds-checkbox';
import { DSSegmentButton, DSSegment } from '../ui/ds-segment-button';
import { DSTabs, DSTab } from '../ui/ds-tabs';
import type { ChartState, Series, ReferenceLine, ChartType } from './types';
import { DS, CHART_TYPE_OPTIONS, COLOR_OPTIONS, FONT_SIZE_OPTIONS, X_DISPLAY_MODE_OPTIONS } from './types';
import type { XDisplayMode } from './types';
import { isDateColumn, resolveVerticalX } from './helpers';
import cs from './ChartSettingsPanel.module.css';

/* ═══════════════════════════════════════════════════════
   ChartSettingsPanel — Settings for a single chart
   ═══════════════════════════════════════════════════════ */

function ColorDot({ color }: { color: string }) {
  return <span className={cs.colorDot} style={{ backgroundColor: color }} />;
}

interface Props {
  state: ChartState;
  onChange: (s: ChartState | ((prev: ChartState) => ChartState)) => void;
}

export function ChartSettingsPanel({ state, onChange }: Props) {
  const [settingsTab, setSettingsTab] = useState('chart');

  const update = (patch: Partial<ChartState>) => onChange({ ...state, ...patch });
  const updateSeries = (id: string, patch: Partial<Series>) =>
    onChange({ ...state, series: state.series.map(s => s.id === id ? { ...s, ...patch } : s) });
  const removeSeries = (id: string) =>
    onChange({ ...state, series: state.series.filter(s => s.id !== id) });

  const addSeries = () => {
    const usedNames = state.series.map(s => s.name);
    const available = state.headers.filter((h, i) => i !== state.xColumnIndex && !usedNames.includes(h));
    if (available.length === 0) return;
    onChange({
      ...state,
      series: [...state.series, {
        id: `s${Date.now()}`, name: available[0], type: 'line',
        color: DS.palette[state.series.length % DS.palette.length],
        yAxis: 'y1', visible: true, strokeWidth: 2, showDataLabels: false,
        dataLabelFontSize: 9, dataLabelColor: '', dataLabelStyle: 'plain',
      }],
    });
  };

  const setStateFn = onChange as (fn: (prev: ChartState) => ChartState) => void;

  const addReferenceLine = () => {
    const rl: ReferenceLine = {
      id: `rl_${Date.now()}`, direction: 'horizontal', axis: 'y1',
      value: '', valueMode: 'custom', label: '', labelPosition: 'right',
      color: DS.palette[6], fontSize: 10, lineStyle: 'dashed',
    };
    setStateFn(prev => ({ ...prev, referenceLines: [...(prev.referenceLines || []), rl] }));
  };

  const updateRL = (id: string, patch: Partial<ReferenceLine>) => {
    setStateFn(prev => ({ ...prev, referenceLines: (prev.referenceLines || []).map(r => r.id === id ? { ...r, ...patch } : r) }));
  };

  const removeRL = (id: string) => {
    setStateFn(prev => ({ ...prev, referenceLines: (prev.referenceLines || []).filter(r => r.id !== id) }));
  };

  const usedNames = state.series.map(s => s.name);
  const canAdd = state.headers.some((h, i) => i !== state.xColumnIndex && !usedNames.includes(h));

  const colorOptions = COLOR_OPTIONS.map(o => ({ ...o, icon: <ColorDot color={o.value} /> }));

  return (
    <div className={cs.root}>
      <div className={cs.tabsWrap}>
        <DSTabs size="xs" value={settingsTab} onChange={setSettingsTab} style={{ borderBottom: '1px solid var(--ds-border-primary)', padding: '0 4px', whiteSpace: 'nowrap' }}>
          <DSTab value="chart">График</DSTab>
          <DSTab value="series">Ряды</DSTab>
          <DSTab value="axes">Оси</DSTab>
          <DSTab value="ref">Отсечки</DSTab>
          <DSTab value="style">Стиль</DSTab>
        </DSTabs>
      </div>

      <div className={cs.body}>
        {/* ── Chart tab ── */}
        {settingsTab === 'chart' && (<>
          <DSInput size="xs" label="Заголовок" value={state.title} onChange={e => update({ title: e.target.value })} />
          <div className={cs.grid2}>
            <DSSelect size="xs" label="Шрифт заголовка" value={String(state.titleFontSize || 14)}
              onChange={v => update({ titleFontSize: Number(v) })} options={FONT_SIZE_OPTIONS} />
            <div>
              <label className={cs.fieldLabel}>Расположение</label>
              <DSSegmentButton variant="stroke" size="xs" value={state.titleAlign || 'center'}
                onChange={v => update({ titleAlign: v as any })}>
                <DSSegment value="left">&#8592;</DSSegment>
                <DSSegment value="center">&#8901;</DSSegment>
                <DSSegment value="right">&#8594;</DSSegment>
              </DSSegmentButton>
            </div>
          </div>
          <div className={cs.divider} />
          <div className={cs.grid2}>
            <DSInput size="xs" label="Ширина" type="number" value={String(state.canvasW)} onChange={e => update({ canvasW: Number(e.target.value) || 800 })} />
            <DSInput size="xs" label="Высота" type="number" value={String(state.canvasH)} onChange={e => update({ canvasH: Number(e.target.value) || 480 })} />
          </div>
          <DSCheckbox size="sm" checked={state.showBackground} onChange={v => update({ showBackground: v })} label="Фон графика" />
          <div className={cs.divider} />
          <div>
            <label className={cs.fieldLabel}>Легенда</label>
            <DSSegmentButton variant="stroke" size="xs" value={state.legendPosition} onChange={v => update({ legendPosition: v as any })}>
              <DSSegment value="top">Сверху</DSSegment>
              <DSSegment value="bottom">Снизу</DSSegment>
              <DSSegment value="hidden">Скрыть</DSSegment>
            </DSSegmentButton>
          </div>
          {state.legendPosition !== 'hidden' && (
            <DSSelect size="xs" label="Шрифт легенды" value={String(state.legendFontSize || 10)}
              onChange={v => update({ legendFontSize: Number(v) })} options={FONT_SIZE_OPTIONS} />
          )}
        </>)}

        {/* ── Series tab ── */}
        {settingsTab === 'series' && (<>
          {state.series.map(s => (
            <div key={s.id} className={cs.seriesCard}>
              <div className={cs.seriesHeader}>
                <div className={cs.seriesNameRow}>
                  <div className={cs.seriesColorDot} style={{ backgroundColor: s.color }} />
                  <span className={cs.seriesName}>{s.name}</span>
                </div>
                <div className={cs.seriesActions}>
                  <button onClick={() => updateSeries(s.id, { visible: !s.visible })} className={cs.iconBtn}>
                    {s.visible ? <Eye className={cs.iconSm} /> : <EyeOff className={cs.iconSm} />}
                  </button>
                  <button onClick={() => removeSeries(s.id)} className={cs.iconBtnDanger}>
                    <Trash2 className={cs.iconSm} />
                  </button>
                </div>
              </div>
              <div className={cs.grid2}>
                <DSSelect size="xs" label="Тип" value={s.type} onChange={v => updateSeries(s.id, { type: v as ChartType })} options={CHART_TYPE_OPTIONS} />
                <DSSelect size="xs" label="Цвет" value={s.color} onChange={v => updateSeries(s.id, { color: v })}
                  options={colorOptions}
                  renderValue={opt => (
                    <div className={cs.colorRow}>
                      <ColorDot color={opt?.value || '#5A8CFF'} />
                      <span className={cs.colorRowText}>{opt?.label || 'Цвет'}</span>
                    </div>
                  )}
                />
              </div>
              <div className={cs.grid2}>
                <DSSelect size="xs" label="Ось Y" value={s.yAxis} onChange={v => updateSeries(s.id, { yAxis: v as 'y1' | 'y2' })}
                  options={[{ value: 'y1', label: 'Y1 (левая)' }, { value: 'y2', label: 'Y2 (правая)' }]} />
                <DSInput size="xs" label="Толщина" type="number" value={String(s.strokeWidth)}
                  onChange={e => updateSeries(s.id, { strokeWidth: Number(e.target.value) || 2 })} />
              </div>
              <DSCheckbox size="sm" checked={s.showDataLabels} onChange={v => updateSeries(s.id, { showDataLabels: v })} label="Подписи значений" />
              {s.showDataLabels && (
                <div className={cs.subPanel}>
                  <div className={cs.grid2}>
                    <DSSelect size="xs" label="Шрифт" value={String(s.dataLabelFontSize || 9)}
                      onChange={v => updateSeries(s.id, { dataLabelFontSize: Number(v) })} options={FONT_SIZE_OPTIONS} />
                    <DSSelect size="xs" label="Цвет" value={s.dataLabelColor || ''}
                      onChange={v => updateSeries(s.id, { dataLabelColor: v })}
                      options={[{ value: '', label: 'По умолч.', icon: <ColorDot color={DS.textSecondary} /> }, ...colorOptions]}
                      renderValue={opt => (
                        <div className={cs.colorRow}>
                          <ColorDot color={opt?.value || DS.textSecondary} />
                          <span className={cs.colorRowText}>{opt?.label || 'Цвет'}</span>
                        </div>
                      )}
                    />
                  </div>
                  <div>
                    <label className={cs.fieldLabel}>Стиль</label>
                    <DSSegmentButton variant="stroke" size="xs" value={s.dataLabelStyle || 'plain'}
                      onChange={v => updateSeries(s.id, { dataLabelStyle: v as 'plain' | 'badge' })}>
                      <DSSegment value="plain">Без фона</DSSegment>
                      <DSSegment value="badge">Плашка</DSSegment>
                    </DSSegmentButton>
                  </div>
                </div>
              )}
            </div>
          ))}
          {canAdd && (
            <DSButton variant="ghost" size="sm" leftIcon={<Plus />} onClick={addSeries} style={{ width: '100%' }}>Добавить ряд</DSButton>
          )}
        </>)}

        {/* ── Axes tab ── */}
        {settingsTab === 'axes' && (<>
          <div className={cs.group}>
            <div className={cs.sectionTitle}>Ось X</div>
            <DSInput size="xs" label="Подпись оси" value={state.xAxis.label} onChange={e => update({ xAxis: { ...state.xAxis, label: e.target.value } })} />
            <div className={cs.grid2}>
              <DSSelect size="xs" label="Шрифт делений" value={String(state.xAxis.fontSize)}
                onChange={v => update({ xAxis: { ...state.xAxis, fontSize: Number(v) } })} options={FONT_SIZE_OPTIONS} />
              <DSSelect size="xs" label="Шрифт подписи" value={String(state.xAxis.labelFontSize)}
                onChange={v => update({ xAxis: { ...state.xAxis, labelFontSize: Number(v) } })} options={FONT_SIZE_OPTIONS} />
            </div>
            <DSCheckbox size="sm" checked={state.xAxis.showGrid} onChange={v => update({ xAxis: { ...state.xAxis, showGrid: v } })} label="Вертикальная сетка" />
            <div>
              <label className={cs.fieldLabel}>Подписи делений</label>
              <DSSegmentButton variant="stroke" size="xs" value={String(state.xAxis.rotation || 0)}
                onChange={v => update({ xAxis: { ...state.xAxis, rotation: Number(v) } })}>
                <DSSegment value="0">Горизонт.</DSSegment>
                <DSSegment value="-45">45&#176;</DSSegment>
                <DSSegment value="-90">Вертикал.</DSSegment>
              </DSSegmentButton>
            </div>
            <DSSelect size="xs" label="Отображение таймлайна"
              value={state.xAxis.displayMode || 'auto'}
              onChange={v => update({ xAxis: { ...state.xAxis, displayMode: v as XDisplayMode } })}
              options={X_DISPLAY_MODE_OPTIONS}
            />
          </div>
          <div className={cs.divider} />
          <div className={cs.group}>
            <div className={cs.sectionTitle}>Ось Y1 (левая)</div>
            <DSInput size="xs" label="Подпись оси" value={state.y1.label} onChange={e => update({ y1: { ...state.y1, label: e.target.value } })} />
            <div className={cs.grid2}>
              <DSSelect size="xs" label="Шрифт делений" value={String(state.y1.fontSize)}
                onChange={v => update({ y1: { ...state.y1, fontSize: Number(v) } })} options={FONT_SIZE_OPTIONS} />
              <DSSelect size="xs" label="Шрифт подписи" value={String(state.y1.labelFontSize)}
                onChange={v => update({ y1: { ...state.y1, labelFontSize: Number(v) } })} options={FONT_SIZE_OPTIONS} />
            </div>
            <div className={cs.grid2}>
              <DSInput size="xs" label="Min" value={state.y1.min} placeholder="auto" onChange={e => update({ y1: { ...state.y1, min: e.target.value || 'auto' } })} />
              <DSInput size="xs" label="Max" value={state.y1.max} placeholder="auto" onChange={e => update({ y1: { ...state.y1, max: e.target.value || 'auto' } })} />
            </div>
            <DSCheckbox size="sm" checked={state.y1.showGrid} onChange={v => update({ y1: { ...state.y1, showGrid: v } })} label="Горизонтальная сетка" />
            {state.y1.showGrid && (
              <DSSegmentButton variant="stroke" size="xs" value={state.y1.gridStyle} onChange={v => update({ y1: { ...state.y1, gridStyle: v as any } })}>
                <DSSegment value="dashed">Пунктир</DSSegment>
                <DSSegment value="solid">Сплошная</DSSegment>
              </DSSegmentButton>
            )}
          </div>
          <div className={cs.divider} />
          <div className={cs.group}>
            <div className={cs.sectionTitle}>Ось Y2 (правая)</div>
            <DSInput size="xs" label="Подпись оси" value={state.y2.label} onChange={e => update({ y2: { ...state.y2, label: e.target.value } })} />
            <div className={cs.grid2}>
              <DSSelect size="xs" label="Шрифт делений" value={String(state.y2.fontSize)}
                onChange={v => update({ y2: { ...state.y2, fontSize: Number(v) } })} options={FONT_SIZE_OPTIONS} />
              <DSSelect size="xs" label="Шрифт подписи" value={String(state.y2.labelFontSize)}
                onChange={v => update({ y2: { ...state.y2, labelFontSize: Number(v) } })} options={FONT_SIZE_OPTIONS} />
            </div>
            <div className={cs.grid2}>
              <DSInput size="xs" label="Min" value={state.y2.min} placeholder="auto" onChange={e => update({ y2: { ...state.y2, min: e.target.value || 'auto' } })} />
              <DSInput size="xs" label="Max" value={state.y2.max} placeholder="auto" onChange={e => update({ y2: { ...state.y2, max: e.target.value || 'auto' } })} />
            </div>
          </div>
        </>)}

        {/* ── Reference Lines tab ── */}
        {settingsTab === 'ref' && (<>
          <p className={cs.descText}>
            Горизонтальные или вертикальные отсечки по значению, статистике или дате.
          </p>
          {(state.referenceLines || []).map(rl => {
            const vMode = rl.valueMode || 'custom';
            const isCustom = vMode === 'custom';
            const xColVals = state.rows.map(r => r[state.xColumnIndex] || '');
            const xIsDate = rl.direction === 'vertical' && isDateColumn(xColVals);
            let valueHint = '';
            if (rl.direction === 'vertical' && isCustom && rl.value) {
              const resolved = resolveVerticalX(rl.value, xColVals);
              if (resolved === null) valueHint = 'Не найдено на оси X';
            }

            return (
              <div key={rl.id} className={cs.seriesCard}>
                <div className={cs.seriesHeader}>
                  <span className={cs.rlLabel}>{rl.label || 'Без подписи'}</span>
                  <button onClick={() => removeRL(rl.id)} className={cs.iconBtnDanger}>
                    <Trash2 className={cs.iconSm} />
                  </button>
                </div>
                <DSSegmentButton variant="stroke" size="xs" value={rl.direction}
                  onChange={v => updateRL(rl.id, { direction: v as any, axis: v === 'vertical' ? 'x' : 'y1', labelPosition: v === 'vertical' ? 'top' : 'right' })}>
                  <DSSegment value="horizontal">Горизонт.</DSSegment>
                  <DSSegment value="vertical">Вертикал.</DSSegment>
                </DSSegmentButton>
                <div>
                  <label className={cs.fieldLabel}>Режим значения</label>
                  <DSSegmentButton variant="stroke" size="xs" value={vMode}
                    onChange={v => updateRL(rl.id, { valueMode: v as any })}>
                    <DSSegment value="custom">Число</DSSegment>
                    <DSSegment value="mean">Среднее</DSSegment>
                    <DSSegment value="median">Медиана</DSSegment>
                    <DSSegment value="mode">Мода</DSSegment>
                  </DSSegmentButton>
                </div>
                <div className={cs.grid2}>
                  {rl.direction === 'horizontal' ? (
                    <DSSelect size="xs" label="Ось" value={rl.axis}
                      onChange={v => updateRL(rl.id, { axis: v as 'y1' | 'y2' })}
                      options={[{ value: 'y1', label: 'Y1 (левая)' }, { value: 'y2', label: 'Y2 (правая)' }]} />
                  ) : (
                    <div className={cs.hintText}>Ось X {xIsDate ? '(дата)' : ''}</div>
                  )}
                  {isCustom ? (
                    <DSInput size="xs" label={rl.direction === 'horizontal' ? 'Значение' : (xIsDate ? 'Дата / метка' : 'Значение X')}
                      value={rl.value} onChange={e => updateRL(rl.id, { value: e.target.value })} errorText={valueHint || undefined} />
                  ) : (
                    <div className={cs.hintBlue}>Авто: {vMode === 'mean' ? 'среднее' : vMode === 'median' ? 'медиана' : 'мода'}</div>
                  )}
                </div>
                <DSInput size="xs" label="Подпись" value={rl.label} onChange={e => updateRL(rl.id, { label: e.target.value })} />
                <div>
                  <label className={cs.fieldLabel}>Позиция подписи</label>
                  <DSSegmentButton variant="stroke" size="xs" value={rl.labelPosition || (rl.direction === 'horizontal' ? 'right' : 'top')}
                    onChange={v => updateRL(rl.id, { labelPosition: v as any })}>
                    <DSSegment value="left">Лево</DSSegment>
                    <DSSegment value="top">Верх</DSSegment>
                    <DSSegment value="bottom">Низ</DSSegment>
                    <DSSegment value="right">Право</DSSegment>
                  </DSSegmentButton>
                </div>
                <div className={cs.grid2}>
                  <DSSelect size="xs" label="Цвет" value={rl.color} onChange={v => updateRL(rl.id, { color: v })}
                    options={colorOptions}
                    renderValue={opt => (
                      <div className={cs.colorRow}>
                        <ColorDot color={opt?.value || '#ED555E'} />
                        <span className={cs.colorRowText}>{opt?.label || 'Цвет'}</span>
                      </div>
                    )}
                  />
                  <DSSelect size="xs" label="Шрифт" value={String(rl.fontSize)} onChange={v => updateRL(rl.id, { fontSize: Number(v) })} options={FONT_SIZE_OPTIONS} />
                </div>
                <DSSegmentButton variant="stroke" size="xs" value={rl.lineStyle} onChange={v => updateRL(rl.id, { lineStyle: v as any })}>
                  <DSSegment value="dashed">Пунктир</DSSegment>
                  <DSSegment value="solid">Сплошная</DSSegment>
                </DSSegmentButton>
              </div>
            );
          })}
          <DSButton variant="ghost" size="sm" leftIcon={<Plus />} onClick={addReferenceLine} style={{ width: '100%' }}>Добавить отсечку</DSButton>
        </>)}

        {/* ── Style tab ── */}
        {settingsTab === 'style' && (<>
          <div className={cs.group}>
            <div className={cs.sectionTitle}>Экспорт SVG</div>
            <p className={cs.descText}>Все текстовые элементы сохраняются редактируемыми.</p>
          </div>
          <DSSelect size="xs" label="Размер холста"
            value={`${state.canvasW}x${state.canvasH}`}
            onChange={v => { const [w, h] = v.split('x').map(Number); update({ canvasW: w, canvasH: h }); }}
            options={[
              { value: '800x480', label: '800 x 480' },
              { value: '800x600', label: '800 x 600' },
              { value: '1200x600', label: '1200 x 600' },
              { value: '1600x900', label: '1600 x 900' },
            ]}
          />
        </>)}
      </div>
    </div>
  );
}