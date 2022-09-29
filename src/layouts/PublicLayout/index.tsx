import LoadingSkeleton from 'components/LoadingSkeleton';
import React from 'react';
import { Outlet } from 'react-router-dom';

const PublicLayout: React.FC = () => {
  return (
    <React.Suspense fallback={<LoadingSkeleton />}>
      <Outlet />
    </React.Suspense>
  );
};

export { default as useRoutes } from './useRoutes';
export default PublicLayout;
