import { createBrowserRouter } from 'react-router';
import React from 'react';
import { DashboardLayout } from './components/DashboardLayout';
import { DashboardPage } from './components/DashboardPage';
import { ComponentLibrary } from './components/ComponentLibrary';
import { ComponentDetailPage } from './components/docs/ComponentDetailPage';
import { TokensPage } from './components/docs/TokensPage';
import { LogosPage } from './components/docs/LogosPage';
import { ChartBuilderSpec } from './components/ChartBuilderSpec';
import { ChartBuilderPage } from './components/chart-builder/ChartBuilderPage';
import { LandingPage } from './components/LandingPage';
import { HomePage } from './components/HomePage';
import { IndicesPage } from './components/indices/IndicesPage';
import { CompanyPage } from './components/companies/CompanyPage';
import { BNPage } from './components/bond-research/BNPage';

const LazyTicketsPage = React.lazy(() =>
  import('./components/tickets/TicketsPage').then(m => ({ default: m.TicketsPage }))
);

const LazyImageEditorPage = React.lazy(() =>
  import('./components/image-editor/ImageEditorPage').then(m => ({ default: m.ImageEditorPage }))
);

function TicketsPageWrapper() {
  return (
    <React.Suspense fallback={<div style={{ backgroundColor: 'var(--ds-bg-secondary)', height: '100vh' }} />}>
      <LazyTicketsPage />
    </React.Suspense>
  );
}

function ImageEditorPageWrapper() {
  return (
    <React.Suspense fallback={<div style={{ backgroundColor: 'var(--ds-bg-secondary)', height: '100vh' }} />}>
      <LazyImageEditorPage />
    </React.Suspense>
  );
}

export const router = createBrowserRouter([
  {
    path: '/',
    Component: LandingPage,
  },
  {
    path: '/home',
    Component: HomePage,
  },
  {
    path: '/fa',
    Component: DashboardLayout,
    children: [
      { index: true, Component: DashboardPage },
    ],
  },
  {
    path: '/chart-builder',
    Component: ChartBuilderPage,
  },
  {
    path: '/chart-builder-spec',
    Component: ChartBuilderSpec,
  },
  {
    path: '/tickets',
    Component: TicketsPageWrapper,
  },
  {
    path: '/image-editor',
    Component: ImageEditorPageWrapper,
  },
  {
    path: '/components',
    Component: ComponentLibrary,
  },
  {
    path: '/components/tokens',
    Component: TokensPage,
  },
  {
    path: '/components/logos',
    Component: LogosPage,
  },
  {
    path: '/components/:id',
    Component: ComponentDetailPage,
  },
  {
    path: '/indices',
    Component: IndicesPage,
  },
  {
    path: '/companies/:ticker',
    Component: CompanyPage,
  },
  {
    path: '/bond-research/bn',
    Component: BNPage,
  },
]);