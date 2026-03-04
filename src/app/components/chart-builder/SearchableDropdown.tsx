import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { Search, ChevronDown, X } from 'lucide-react';
import { CompanyLogo } from './CompanyLogo';
import sd from './SearchableDropdown.module.css';

/* ═══════════════════════════════════════════════════════
   SearchableDropdown — Filterable list with groups
   ═══════════════════════════════════════════════════════ */

export interface DropdownOption {
  id: string;
  label: string;
  sublabel?: string;
  group?: string;
  logoBg?: string;
  logoColor?: string;
  logoText?: string;
}

interface Props {
  options: DropdownOption[];
  value?: string | null;
  onChange: (id: string, option: DropdownOption) => void;
  placeholder?: string;
  className?: string;
  size?: 'xs' | 'sm' | 'md';
  /** Show logo circles */
  showLogos?: boolean;
  /** Max height for dropdown list */
  maxHeight?: number;
}

export function SearchableDropdown({
  options, value, onChange, placeholder = 'Выберите...',
  className = '', size = 'sm', showLogos = true, maxHeight = 320,
}: Props) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const [focusIdx, setFocusIdx] = useState(-1);

  const selected = useMemo(() => options.find(o => o.id === value), [options, value]);

  const filtered = useMemo(() => {
    if (!search.trim()) return options;
    const q = search.toLowerCase();
    return options.filter(o =>
      o.label.toLowerCase().includes(q) ||
      o.id.toLowerCase().includes(q) ||
      (o.sublabel && o.sublabel.toLowerCase().includes(q)) ||
      (o.group && o.group.toLowerCase().includes(q))
    );
  }, [options, search]);

  const grouped = useMemo(() => {
    const groups: Record<string, DropdownOption[]> = {};
    filtered.forEach(o => {
      const g = o.group || '';
      if (!groups[g]) groups[g] = [];
      groups[g].push(o);
    });
    return groups;
  }, [filtered]);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
        setSearch('');
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  // Focus input when opened
  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
      setFocusIdx(-1);
    }
  }, [open]);

  const handleSelect = useCallback((opt: DropdownOption) => {
    onChange(opt.id, opt);
    setOpen(false);
    setSearch('');
  }, [onChange]);

  // Keyboard nav
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape') { setOpen(false); setSearch(''); return; }
    if (e.key === 'ArrowDown') { e.preventDefault(); setFocusIdx(i => Math.min(i + 1, filtered.length - 1)); return; }
    if (e.key === 'ArrowUp') { e.preventDefault(); setFocusIdx(i => Math.max(i - 1, 0)); return; }
    if (e.key === 'Enter' && focusIdx >= 0 && focusIdx < filtered.length) { e.preventDefault(); handleSelect(filtered[focusIdx]); }
  }, [filtered, focusIdx, handleSelect]);

  // Scroll focused into view
  useEffect(() => {
    if (focusIdx >= 0 && listRef.current) {
      const el = listRef.current.querySelector(`[data-idx="${focusIdx}"]`);
      if (el) (el as HTMLElement).scrollIntoView({ block: 'nearest' });
    }
  }, [focusIdx]);

  const triggerClass = size === 'xs' ? sd.triggerXs : size === 'md' ? sd.triggerMd : sd.triggerSm;

  return (
    <div ref={containerRef} className={`${sd.root} ${className}`}>
      {/* Trigger */}
      <button
        onClick={() => setOpen(v => !v)}
        className={triggerClass}
      >
        {selected && showLogos && (
          <CompanyLogo
            logoBg={selected.logoBg}
            logoColor={selected.logoColor}
            logoText={selected.logoText}
            size={size === 'xs' ? 14 : 16}
          />
        )}
        <span className={selected ? sd.triggerText : sd.triggerPlaceholder}>
          {selected?.label || placeholder}
        </span>
        {value && (
          <button
            onClick={(e) => { e.stopPropagation(); onChange('', {} as DropdownOption); }}
            className={sd.clearBtn}
          >
            <X className={sd.iconSm} />
          </button>
        )}
        <ChevronDown className={`${sd.chevron} ${open ? sd.chevronOpen : ''}`} />
      </button>

      {/* Dropdown */}
      {open && (
        <div className={sd.panel} style={{ maxHeight: maxHeight + 40 }}>
          {/* Search input */}
          <div className={sd.searchRow}>
            <Search className={sd.searchIcon} />
            <input
              ref={inputRef}
              type="text"
              className={sd.searchInput}
              placeholder="Поиск..."
              value={search}
              onChange={e => { setSearch(e.target.value); setFocusIdx(-1); }}
              onKeyDown={handleKeyDown}
            />
            {search && (
              <button onClick={() => setSearch('')} className={sd.searchClear}>
                <X className={sd.iconSm} />
              </button>
            )}
          </div>

          {/* Options list */}
          <div ref={listRef} className={sd.list} style={{ maxHeight }}>
            {filtered.length === 0 && (
              <div className={sd.empty}>Ничего не найдено</div>
            )}
            {Object.entries(grouped).map(([group, items]) => (
              <div key={group}>
                {group && (
                  <div className={sd.groupLabel}>
                    {group}
                  </div>
                )}
                {items.map(opt => {
                  const globalIdx = filtered.indexOf(opt);
                  const isSelected = opt.id === value;
                  const isFocused = globalIdx === focusIdx;
                  return (
                    <button
                      key={opt.id}
                      data-idx={globalIdx}
                      onClick={() => handleSelect(opt)}
                      className={isFocused ? sd.itemFocused : isSelected ? sd.itemSelected : sd.item}
                    >
                      {showLogos && (
                        <CompanyLogo
                          logoBg={opt.logoBg}
                          logoColor={opt.logoColor}
                          logoText={opt.logoText}
                          size={16}
                        />
                      )}
                      <div className={sd.itemContent}>
                        <div className={isSelected ? sd.itemLabelSelected : sd.itemLabel}>
                          {opt.label}
                        </div>
                        {opt.sublabel && (
                          <div className={sd.itemSublabel}>{opt.sublabel}</div>
                        )}
                      </div>
                      {isSelected && <div className={sd.selectedDot} />}
                    </button>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}