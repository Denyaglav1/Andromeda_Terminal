import React, { useCallback, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Box, Text, UnstyledButton } from '@mantine/core';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { DSBadge } from '../ui/ds-badge';
import { EVENT_CARDS } from './data/home-events-db';
import type { EventCard } from './data/home-types';
import { getAnalystAvatar } from './data/analyst-avatars';

/* ═══════════════════════════════════════
   EventCards — Horizontal carousel (Mantine)
   ═══════════════════════════════════════ */

const AVATAR_COLORS = ['var(--ds-blue-6)', 'var(--ds-red-5)', 'var(--ds-blue-6)', 'var(--ds-green-6)', 'var(--ds-purple-6)'];

function CardItem({ card }: { card: EventCard }) {
  const [isHovered, setIsHovered] = useState(false);
  const avatar = card.avatarId ? getAnalystAvatar(card.avatarId) : undefined;

  const gradient = isHovered
    ? 'linear-gradient(115.5deg, var(--ds-gradient-card-active-from) 0.44%, var(--ds-gradient-card-active-to) 100%)'
    : 'linear-gradient(-10.87deg, var(--ds-gradient-card-from) 41.67%, var(--ds-gradient-card-to) 98.36%)';

  return (
    <Box
      style={{
        position: 'relative',
        borderRadius: 8,
        flexShrink: 0,
        width: 319,
        border: `1px solid ${isHovered ? 'var(--ds-border-active)' : 'var(--ds-border-card)'}`,
        backgroundImage: gradient,
        transition: 'all 300ms ease',
        cursor: 'pointer',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Box style={{ display: 'flex', flexDirection: 'column', gap: 24, padding: 16, position: 'relative', zIndex: 1 }}>
        {/* Date + Tag */}
        <Box style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 14, lineHeight: '20px', color: 'var(--ds-text-gray)', fontFeatureSettings: "'lnum', 'tnum'" }}>
              {card.date}
            </Text>
            <DSBadge variant="pill" color="gray" size="s">{card.tag}</DSBadge>
          </Box>
          <Text
            style={{
              fontSize: 16,
              lineHeight: '20px',
              fontWeight: 600,
              height: 40,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              transition: 'color 300ms ease',
              color: isHovered ? 'var(--ds-blue-6)' : 'var(--ds-text-primary)',
            }}
          >
            {card.title}
          </Text>
        </Box>

        {/* Analyst */}
        <Box style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {avatar ? (
            <img
              src={avatar.src}
              alt={card.analystName}
              style={{
                width: 32,
                height: 32,
                borderRadius: '50%',
                objectFit: 'cover',
                flexShrink: 0,
              }}
            />
          ) : (
            <Box
              style={{
                width: 32,
                height: 32,
                borderRadius: '50%',
                backgroundColor: AVATAR_COLORS[card.avatarIndex % AVATAR_COLORS.length],
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: 12,
                fontWeight: 600,
                flexShrink: 0,
              }}
            >
              {card.analystName.split(' ').map(n => n[0]).join('')}
            </Box>
          )}
          <Box style={{ display: 'flex', flexDirection: 'column', minWidth: 0, flex: 1 }}>
            <Text style={{ fontSize: 14, lineHeight: '20px', fontWeight: 600, color: 'var(--ds-text-primary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              {card.analystName}
            </Text>
            <Text style={{ fontSize: 12, lineHeight: '16px', color: 'var(--ds-text-gray)' }}>
              {card.analystCompany}
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export function EventCardsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
    dragFree: true,
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const navBtnStyle = (side: 'left' | 'right'): React.CSSProperties => ({
    position: 'absolute',
    [side]: 4,
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 3,
    width: 24,
    height: 24,
    borderRadius: '50%',
    backgroundColor: 'var(--ds-bg-primary)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background-color 150ms ease',
    border: 'none',
    padding: 0,
  });

  return (
    <Box style={{ position: 'relative', width: '100%', padding: '12px 12px 0' }}>
      <Box ref={emblaRef} style={{ overflow: 'hidden' }}>
        <Box style={{ display: 'flex', gap: 8 }}>
          {EVENT_CARDS.map(card => (
            <CardItem key={card.id} card={card} />
          ))}
        </Box>
      </Box>

      {/* Fade edges */}
      <Box style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 52, background: 'linear-gradient(to right, var(--ds-bg-primary), transparent)', pointerEvents: 'none', zIndex: 2 }} />
      <Box style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 52, background: 'linear-gradient(to left, var(--ds-bg-primary), transparent)', pointerEvents: 'none', zIndex: 2 }} />

      {/* Nav buttons */}
      <UnstyledButton onClick={scrollPrev} style={navBtnStyle('left')}>
        <ChevronLeft size={14} color="var(--ds-blue-6)" />
      </UnstyledButton>
      <UnstyledButton onClick={scrollNext} style={navBtnStyle('right')}>
        <ChevronRight size={14} color="var(--ds-blue-6)" />
      </UnstyledButton>
    </Box>
  );
}