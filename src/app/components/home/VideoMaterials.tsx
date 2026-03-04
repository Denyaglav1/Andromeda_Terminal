import React, { useState } from 'react';
import { Box, Group, Stack, Text, UnstyledButton } from '@mantine/core';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { DSSectionHeader } from '../ui/ds-section-header';
import { VIDEO_ITEMS } from './data/home-events-db';
import imgImage242 from 'figma:asset/977e4b878eadd822e621f47186b4000e26146076.png';

/* ═══════════════════════════════════════
   VideoMaterials — Video previews widget (Mantine)
   ═══════════════════════════════════════ */

export function VideoMaterials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const video = VIDEO_ITEMS[currentIndex];

  const goNext = () => setCurrentIndex(i => (i + 1) % VIDEO_ITEMS.length);
  const goPrev = () => setCurrentIndex(i => (i - 1 + VIDEO_ITEMS.length) % VIDEO_ITEMS.length);

  return (
    <Stack gap={12} style={{ width: '100%' }}>
      <DSSectionHeader action="Смотреть все">
        Видеоматериалы
      </DSSectionHeader>

      <Stack gap={12}>
        {/* Video thumbnail */}
        <Box style={{ position: 'relative', width: '100%', height: 179, borderRadius: 8, overflow: 'hidden' }}>
          <img
            src={imgImage242}
            alt={video.title}
            style={{ position: 'absolute', inset: 0, objectFit: 'cover', width: '100%', height: '100%' }}
          />
          {/* Play button overlay */}
          <Box style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <UnstyledButton
              style={{
                backgroundColor: 'rgba(90,140,255,0.1)',
                borderRadius: '50%',
                padding: 8,
                backdropFilter: 'blur(4px)',
                transition: 'background-color 150ms ease',
              }}
            >
              <Play size={24} color="white" fill="white" />
            </UnstyledButton>
          </Box>
          {/* Bottom gradient */}
          <Box style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 60, background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)' }} />
        </Box>

        {/* Title + subtitle */}
        <Stack gap={4}>
          <Text style={{ fontSize: 14, lineHeight: '20px', fontWeight: 600, color: 'var(--ds-text-primary)', whiteSpace: 'pre-wrap' }}>
            {video.title}
          </Text>
          <Text style={{ fontSize: 12, lineHeight: '16px', color: 'var(--ds-text-gray)', fontFeatureSettings: "'lnum', 'tnum'" }}>
            {video.subtitle}
          </Text>
        </Stack>

        {/* Dots + nav */}
        <Group justify="space-between">
          <Group gap={8}>
            {VIDEO_ITEMS.map((_, i) => (
              <Box
                key={i}
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  backgroundColor: i === currentIndex ? 'var(--ds-blue-6)' : 'var(--ds-border-primary)',
                }}
              />
            ))}
          </Group>

          <Group gap={20}>
            <UnstyledButton onClick={goPrev} style={{ color: 'var(--ds-blue-6)', transition: 'color 150ms ease' }}>
              <ChevronLeft size={16} />
            </UnstyledButton>
            <UnstyledButton onClick={goNext} style={{ color: 'var(--ds-blue-6)', transition: 'color 150ms ease' }}>
              <ChevronRight size={16} />
            </UnstyledButton>
          </Group>
        </Group>
      </Stack>
    </Stack>
  );
}