import React from 'react';
import { Outlet } from 'react-router';
import { Box } from '@mantine/core';
import { Header } from './Header';

export function DashboardLayout() {
  return (
    <Box
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'var(--mantine-color-body)',
        color: 'var(--mantine-color-text)',
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      <Header />
      <Outlet />
    </Box>
  );
}
