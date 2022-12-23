import { Outlet } from 'react-router-dom';
import { ResponsiveAppBar } from './AppBar';
import { Suspense } from 'react';
import Loader from './Loader';

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
