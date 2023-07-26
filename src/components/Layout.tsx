import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Loader, ResponsiveAppBar } from './index';

export const Layout = () => {
  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
      <ResponsiveAppBar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
