import React from 'react';
import { Box, Text, UnstyledButton, Group } from '@mantine/core';

/* ═══════════════════════════════════════
   DSSectionHeader — Widget section title (Mantine)
   ═══════════════════════════════════════ */

export interface DSSectionHeaderProps {
  children: React.ReactNode;
  action?: string;
  onAction?: () => void;
  className?: string;
}

export function DSSectionHeader({
  children,
  action,
  onAction,
  className,
}: DSSectionHeaderProps) {
  return (
    <Group justify="space-between" style={{ width: '100%' }} className={className}>
      <Text
        style={{
          fontSize: 12,
          lineHeight: '16px',
          fontWeight: 600,
          color: 'var(--ds-text-gray-dark)',
          textTransform: 'uppercase',
        }}
      >
        {children}
      </Text>
      {action && (
        <UnstyledButton
          onClick={onAction}
          style={{
            fontSize: 12,
            lineHeight: '16px',
            fontWeight: 600,
            color: 'var(--ds-blue-6)',
            transition: 'color 150ms ease',
          }}
        >
          {action}
        </UnstyledButton>
      )}
    </Group>
  );
}