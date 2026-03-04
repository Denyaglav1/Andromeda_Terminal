import React, { useState, useMemo, useRef, useEffect, useCallback } from 'react';
import { Box, Group, Text, UnstyledButton } from '@mantine/core';
import { ChevronDown, ChevronRight, Settings2 } from 'lucide-react';
import { DSCheckbox } from '../ui/ds-checkbox';
import { DSBadge, type SourceId } from '../ui/ds-badge';
import { ContentTypeIcon } from './NewsSourceIcon';
import type { NewsItem } from './data/home-types';
import { getTopLevelNews, getImportantNews, getAllNewsFlat, getGroupChildren, getGroup } from './data/home-news-db';
import { NEWS_DB } from './data/home-news-db';

/* ═══════════════════════════════════════
   NewsFeed — Central news feed widget (Mantine)
   ═══════════════════════════════════════ */

type FilterMode = 'important' | 'all';

/* ─── Animated collapse wrapper ─── */
function AnimatedCollapse({ open, children }: { open: boolean; children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | undefined>(open ? undefined : 0);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (!ref.current) return;
    if (open) {
      const h = ref.current.scrollHeight;
      setHeight(h);
      const timer = setTimeout(() => setHeight(undefined), 250);
      return () => clearTimeout(timer);
    } else {
      const h = ref.current.scrollHeight;
      setHeight(h);
      ref.current.offsetHeight;
      requestAnimationFrame(() => setHeight(0));
    }
  }, [open]);

  return (
    <div
      ref={ref}
      style={{
        height: height !== undefined ? height : 'auto',
        overflow: 'hidden',
        transition: 'height 250ms cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      {children}
    </div>
  );
}

/* ─── Slide-in + highlight-fade wrapper for new news ─── */
function NewNewsAnimation({ isNew, children }: { isNew: boolean; children: React.ReactNode }) {
  const [phase, setPhase] = useState<number>(isNew ? 0 : 3);
  const elRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isNew) return;
    setPhase(0);
    const raf = requestAnimationFrame(() => setPhase(1));
    const t1 = setTimeout(() => setPhase(2), 800);
    const t2 = setTimeout(() => setPhase(3), 2800);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [isNew]);

  if (phase === 3 && !isNew) return <>{children}</>;

  const styles: React.CSSProperties = (() => {
    switch (phase) {
      case 0:
        return {
          opacity: 0,
          transform: 'translateY(-12px)',
          maxHeight: 0,
          overflow: 'hidden',
          backgroundColor: 'rgba(90, 140, 255, 0.18)',
        };
      case 1:
        return {
          opacity: 1,
          transform: 'translateY(0)',
          maxHeight: '80px',
          overflow: 'hidden',
          backgroundColor: 'rgba(90, 140, 255, 0.18)',
          transition: 'opacity 500ms ease-out, transform 500ms ease-out, max-height 500ms ease-out',
        };
      case 2:
        return {
          opacity: 1,
          transform: 'translateY(0)',
          maxHeight: '80px',
          overflow: 'visible',
          backgroundColor: 'transparent',
          transition: 'background-color 2000ms ease-out',
        };
      default:
        return {};
    }
  })();

  return <div ref={elRef} style={styles}>{children}</div>;
}

/* ─── Attribute badges ─── */
function AttributeBadges({ importantCount, docCount }: { importantCount?: number; docCount?: number }) {
  if (!importantCount && !docCount) return null;

  return (
    <Group gap={4} style={{ flexShrink: 0 }}>
      {importantCount !== undefined && (
        <Box
          style={{
            backgroundColor: 'var(--ds-orange-6-a10)',
            display: 'flex',
            alignItems: 'center',
            height: 24,
            padding: '0 8px 0 6px',
            borderRadius: 20,
            gap: 2,
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M4 2L4 14L12 8L4 2Z" fill="var(--ds-orange-6)" />
          </svg>
          <Text
            style={{
              fontSize: 10,
              lineHeight: '16px',
              fontWeight: 500,
              color: 'var(--ds-text-primary)',
              width: 14,
              textAlign: 'center',
              fontFeatureSettings: "'lnum', 'tnum'",
            }}
          >
            {importantCount}
          </Text>
        </Box>
      )}
      {docCount !== undefined && (
        <Box
          style={{
            backgroundColor: 'var(--ds-blue-6-a10)',
            display: 'flex',
            alignItems: 'center',
            height: 24,
            padding: '0 8px 0 6px',
            borderRadius: 20,
            gap: 2,
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M5 2H11L13 4V14H5V2Z" fill="var(--ds-blue-6)" />
          </svg>
          <Text
            style={{
              fontSize: 10,
              lineHeight: '16px',
              fontWeight: 500,
              color: 'var(--ds-text-primary)',
              width: 14,
              textAlign: 'center',
              fontFeatureSettings: "'lnum', 'tnum'",
            }}
          >
            {docCount}
          </Text>
        </Box>
      )}
    </Group>
  );
}

/* ─── Single news row ─── */
function NewsRow({ item, isChild = false, grouped = false, isNew = false }: { item: NewsItem; isChild?: boolean; grouped?: boolean; isNew?: boolean }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasGroup = grouped && item.groupId && item.isGroupParent;
  const group = hasGroup ? getGroup(item.groupId!) : undefined;
  const children = hasGroup ? getGroupChildren(item.groupId!) : [];
  const hasExpandable = grouped && (item.importantCount || item.docCount || hasGroup);
  const isGroupCard = grouped && hasGroup;

  const rowContent = (
    <Box
      style={{
        width: '100%',
        borderBottom: isChild ? 'none' : '1px solid var(--ds-border-primary)',
        backgroundColor: isGroupCard && isExpanded ? 'var(--ds-bg-table-mark)' : 'transparent',
        borderRadius: isGroupCard && isExpanded ? 6 : 0,
      }}
    >
      {/* Main row */}
      <Box
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          minHeight: isChild ? 20 : 40,
          padding: isChild ? '4px 12px 4px 12px' : '4px 12px',
          paddingLeft: isChild ? 95 : 12,
        }}
      >
        <Box style={{ display: 'flex', alignItems: 'center', gap: 8, width: '100%' }}>
          {/* Expand arrow */}
          {!isChild && (
            <UnstyledButton
              onClick={() => hasExpandable && setIsExpanded(!isExpanded)}
              style={{
                width: 20,
                height: 20,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                transition: 'transform 150ms ease',
                opacity: hasExpandable ? 1 : 0,
                pointerEvents: hasExpandable ? 'auto' : 'none',
              }}
            >
              {isExpanded ? (
                <ChevronDown size={12} color="var(--ds-blue-6)" />
              ) : (
                <ChevronRight size={12} color="var(--ds-blue-6)" />
              )}
            </UnstyledButton>
          )}

          {/* Time */}
          <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', flexShrink: 0, width: isChild ? 55 : 56 }}>
            <Text
              style={{
                fontSize: 12,
                lineHeight: '16px',
                textAlign: 'right',
                color: 'var(--ds-text-gray-dark)',
                whiteSpace: 'nowrap',
                fontFeatureSettings: "'lnum', 'tnum'",
              }}
            >
              {item.time}
            </Text>
          </Box>

          {/* Title */}
          <Text
            style={{
              flex: 1,
              minWidth: 0,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              fontSize: isChild ? 12 : 16,
              lineHeight: isChild ? '16px' : '20px',
              fontWeight: isChild ? 400 : 600,
              color: isChild ? 'var(--ds-text-gray-dark)' : 'var(--ds-text-primary)',
            }}
          >
            {item.title}
          </Text>

          {/* Content type icon (for children) */}
          {isChild && item.contentType && (
            <ContentTypeIcon type={item.contentType} />
          )}

          {/* Source icon or Attribute badges */}
          {!isChild && !hasExpandable && (
            <Box style={{ flexShrink: 0 }}>
              <DSBadge variant="source" source={item.source as SourceId} size="s" />
            </Box>
          )}

          {!isChild && hasExpandable && (
            <AttributeBadges importantCount={item.importantCount} docCount={item.docCount} />
          )}

          {isChild && (
            <Box style={{ flexShrink: 0 }}>
              <DSBadge variant="source" source={item.source as SourceId} size="xs" />
            </Box>
          )}
        </Box>

        {/* Expanded body */}
        <AnimatedCollapse open={isExpanded && !!item.body}>
          <Box style={{ paddingLeft: 93, display: 'flex', flexDirection: 'column', gap: 8, paddingTop: 12, paddingBottom: 4 }}>
            <Text style={{ fontSize: 14, lineHeight: '20px', color: 'var(--ds-text-primary)', fontFeatureSettings: "'lnum', 'tnum'" }}>
              {item.body}
            </Text>
            {item.bullets && item.bullets.length > 0 && (
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 8, color: 'var(--ds-text-secondary)', margin: 0, paddingLeft: 21 }}>
                {item.bullets.map((b, i) => (
                  <li key={i} style={{ fontSize: 14, lineHeight: '20px', listStyleType: 'disc' }}>
                    {b}
                  </li>
                ))}
              </ul>
            )}
          </Box>
        </AnimatedCollapse>
      </Box>

      {/* Related news block */}
      <AnimatedCollapse open={isExpanded && !!group && children.length > 0}>
        <Box style={{ display: 'flex', flexDirection: 'column', margin: '0 8px 4px' }}>
          <Box style={{ paddingLeft: 95, padding: '4px 0 4px 95px' }}>
            <Text style={{ fontSize: 12, lineHeight: '16px', fontWeight: 600, color: 'var(--ds-text-primary)' }}>
              Связанные новости
            </Text>
          </Box>

          {children.map(child => (
            <NewsRow key={child.id} item={child} isChild grouped />
          ))}

          {group && group.totalCount > children.length && (
            <Box style={{ paddingLeft: 95, padding: '8px 0 8px 95px' }}>
              <UnstyledButton
                style={{
                  fontSize: 12,
                  lineHeight: '16px',
                  fontWeight: 600,
                  color: 'var(--ds-blue-6)',
                  transition: 'color 150ms ease',
                }}
              >
                Смотреть все связанные новости ({group.totalCount})
              </UnstyledButton>
            </Box>
          )}
        </Box>
      </AnimatedCollapse>
    </Box>
  );

  if (isNew) {
    return <NewNewsAnimation isNew>{rowContent}</NewNewsAnimation>;
  }

  return rowContent;
}

/* ─── Main NewsFeed ─── */
export function NewsFeed() {
  const [filter, setFilter] = useState<FilterMode>('all');
  const [groupByTopics, setGroupByTopics] = useState(false);
  const [extraNews, setExtraNews] = useState<NewsItem[]>([]);
  const [newestId, setNewestId] = useState<string | null>(null);
  const newsIdCounter = useRef(0);

  useEffect(() => {
    const headlines = [
      'ЦБ РФ: Инфляционные ожидания населения снизились до 10.2%',
      'Газпром нефть: Дивиденды за 2025 год могут составить ₽45 на акцию',
      'Московская биржа: Объём торгов акциями вырос на 12% г/г',
      'Сбербанк: Чистая прибыль за январь 2026 — ₽142 млрд',
      'Русал: Цены на алюминий обновили максимум за 18 месяцев',
      'Норникель: Производство палладия увеличено на 3% к/к',
      'Яндекс: Выручка Q4 2025 превысила прогнозы аналитиков',
      'Полюс Золото: Запасы руды увеличены на 15% по итогам разведки',
      'ВТБ: Портфель розничных кредитов превысил ₽8 трлн',
      'ЛУКОЙЛ: Добыча нефти стабилизировалась на уровне ОПЕК+',
    ];
    const sources: Array<'euler' | 'interfax' | 'rbc' | 'tass' | 'kommersant'> = ['euler', 'interfax', 'rbc', 'tass', 'kommersant'];

    const interval = setInterval(() => {
      const idx = newsIdCounter.current++;
      const now = new Date();
      const time = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
      const newItem: NewsItem = {
        id: `live-${idx}`,
        time,
        timestamp: Date.now(),
        title: headlines[idx % headlines.length],
        source: sources[idx % sources.length],
        isImportant: idx % 3 === 0,
      };
      setExtraNews(prev => [newItem, ...prev]);
      setNewestId(newItem.id);
      setTimeout(() => setNewestId(prev => prev === newItem.id ? null : prev), 3000);
    }, 20000);

    return () => clearInterval(interval);
  }, []);

  const news = useMemo(() => {
    const base = (() => {
      if (groupByTopics) {
        return filter === 'important' ? getImportantNews() : getTopLevelNews();
      }
      const allFlat = getAllNewsFlat();
      if (filter === 'important') {
        return allFlat.filter(n => n.isImportant);
      }
      return allFlat;
    })();
    const liveFiltered = filter === 'important' ? extraNews.filter(n => n.isImportant) : extraNews;
    return [...liveFiltered, ...base];
  }, [filter, groupByTopics, extraNews]);

  return (
    <Box
      style={{
        backgroundColor: 'var(--ds-bg-secondary)',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 8,
        overflow: 'hidden',
        width: '100%',
        flex: 1,
      }}
    >
      {/* Header */}
      <Box
        style={{
          backgroundColor: 'var(--ds-bg-secondary)',
          height: 40,
          borderBottom: '1px solid var(--ds-border-primary)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 12px',
          flexShrink: 0,
          zIndex: 2,
        }}
      >
        <Group gap={12}>
          {/* Settings icon */}
          <Box
            style={{
              backgroundColor: 'var(--ds-bg-primary)',
              borderRadius: 8,
              width: 24,
              height: 24,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Settings2 size={16} color="var(--ds-blue-6)" />
          </Box>

          {/* Filter tabs */}
          <UnstyledButton
            onClick={() => setFilter('important')}
            style={{
              fontSize: 12,
              lineHeight: '16px',
              fontWeight: 600,
              textTransform: 'uppercase',
              transition: 'color 150ms ease',
              color: filter === 'important' ? 'var(--ds-blue-6)' : 'var(--ds-text-gray-dark)',
            }}
          >
            Важное
          </UnstyledButton>

          <DSCheckbox
            checked={groupByTopics}
            onChange={setGroupByTopics}
            size="md"
            label="Сгруппировать по темам"
          />
        </Group>

        <UnstyledButton
          onClick={() => setFilter('all')}
          style={{
            fontSize: 12,
            lineHeight: '16px',
            fontWeight: 600,
            color: 'var(--ds-blue-6)',
            transition: 'color 150ms ease',
          }}
        >
          Все новости ({news.length})
        </UnstyledButton>
      </Box>

      {/* News list */}
      <Box style={{ display: 'flex', flexDirection: 'column', overflowY: 'auto', flex: 1 }}>
        {news.map(item => (
          <NewsRow key={item.id} item={item} grouped={groupByTopics} isNew={item.id === newestId} />
        ))}
      </Box>
    </Box>
  );
}