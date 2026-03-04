import React from 'react';
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { RouterProvider } from 'react-router';
import { router } from './routes';
import { andromedaTheme, andromedaCSSResolver } from './theme';
import { registerAndromedaTheme } from './echarts-theme';

// Re-export shared types and constants so existing imports from '../App' still work
export type { PeriodType, Company, Scenario } from './types';
export { COMPANIES } from './types';

// Register ECharts Andromeda theme once
registerAndromedaTheme();

// Simple Error Boundary
class ErrorBoundary extends React.Component<{children: React.ReactNode}, {hasError: boolean, error: Error | null}> {
  constructor(props: {children: React.ReactNode}) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          padding: 32,
          color: 'var(--ds-red-6)',
          backgroundColor: 'var(--ds-bg-primary)',
          minHeight: '100vh',
          fontFamily: "'Inter', sans-serif",
        }}>
          <h1 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>Something went wrong</h1>
          <pre style={{
            backgroundColor: 'rgba(0,0,0,0.5)',
            padding: 16,
            borderRadius: 8,
            fontSize: 13,
            fontFamily: 'monospace',
            overflow: 'auto',
          }}>
            {this.state.error?.toString()}
          </pre>
        </div>
      );
    }

    return this.props.children;
  }
}

export default function App() {
  return (
    <ErrorBoundary>
      <MantineProvider
        theme={andromedaTheme}
        cssVariablesResolver={andromedaCSSResolver}
        defaultColorScheme="dark"
      >
        <Notifications position="top-right" />
        <RouterProvider router={router} />
      </MantineProvider>
    </ErrorBoundary>
  );
}