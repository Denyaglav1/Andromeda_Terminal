import React from 'react';
import { Box, Stack, Text } from '@mantine/core';
import { ChevronRight } from 'lucide-react';
import { DSSectionHeader } from '../ui/ds-section-header';
import { DSBadge } from '../ui/ds-badge';
import { REVIEW_CARDS } from './data/home-events-db';
import type { ReviewCard } from './data/home-types';
import { getAnalystAvatar } from './data/analyst-avatars';

/* ═══════════════════════════════════════
   MarketReviews — Review cards widget (Mantine)
   ═══════════════════════════════════════ */

const AVATAR_COLORS = ['var(--ds-blue-6)', 'var(--ds-red-5)', 'var(--ds-green-6)', 'var(--ds-purple-6)', 'var(--ds-orange-6)'];

function ReviewCardItem({ review }: { review: ReviewCard }) {
  const avatar = review.avatarId ? getAnalystAvatar(review.avatarId) : undefined;

  return (
    <Box
      style={{
        position: 'relative',
        borderRadius: 8,
        padding: 16,
        display: 'flex',
        flexDirection: 'column',
        gap: 24,
        border: '1px solid var(--ds-border-card)',
        backgroundImage: 'linear-gradient(-12.76deg, var(--ds-gradient-card-from) 41.67%, var(--ds-gradient-card-to) 98.36%)',
      }}
    >
      {/* Date + Tag + Title */}
      <Stack gap={8}>
        <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 14, lineHeight: '20px', color: 'var(--ds-text-gray)', fontFeatureSettings: "'lnum', 'tnum'" }}>
            {review.time}
          </Text>
          <DSBadge variant="pill" color="gray" size="s">{review.tag}</DSBadge>
        </Box>
        <Text style={{ fontSize: 16, lineHeight: '20px', fontWeight: 600, color: 'var(--ds-text-primary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {review.title}
        </Text>
        <Text style={{ fontSize: 14, lineHeight: '20px', color: 'var(--ds-text-gray)', fontFeatureSettings: "'lnum', 'tnum'" }}>
          {review.description}
        </Text>
      </Stack>

      {/* Analyst */}
      <Box style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        {avatar ? (
          <img
            src={avatar.src}
            alt={review.analystName}
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
              backgroundColor: AVATAR_COLORS[review.avatarIndex % AVATAR_COLORS.length],
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: 12,
              fontWeight: 600,
              flexShrink: 0,
            }}
          >
            {review.analystName.split(' ').map(n => n[0]).join('')}
          </Box>
        )}
        <Box style={{ display: 'flex', flexDirection: 'column', minWidth: 0, flex: 1 }}>
          <Text style={{ fontSize: 14, lineHeight: '20px', fontWeight: 600, color: 'var(--ds-text-primary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {review.analystName}
          </Text>
          <Text style={{ fontSize: 12, lineHeight: '16px', color: 'var(--ds-text-gray)' }}>
            {review.analystCompany}
          </Text>
        </Box>
        <ChevronRight size={24} color="var(--ds-text-gray-dark)" style={{ flexShrink: 0 }} />
      </Box>
    </Box>
  );
}

export function MarketReviews() {
  return (
    <Stack gap={12} style={{ width: '100%' }}>
      <DSSectionHeader>Обзоры рынков</DSSectionHeader>

      <Stack gap={8}>
        {REVIEW_CARDS.map(review => (
          <ReviewCardItem key={review.id} review={review} />
        ))}
      </Stack>
    </Stack>
  );
}