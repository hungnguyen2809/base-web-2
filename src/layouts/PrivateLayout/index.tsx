import LoadingSkeleton from 'components/LoadingSkeleton';
import { CContainer } from '@coreui/react';
import routesMap from 'layouts/routesMap';
import { getStorageData, STORAGE_KEY } from 'utils/storage';
import { trim } from 'lodash';
import React, { useMemo } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import AppHeader from './AppHeader';
import AppSidebar from './AppSidebar';

const PrivateLayout: React.FC = () => {
  const isLogged = useMemo(() => {
    return Boolean(trim(getStorageData(STORAGE_KEY.ACCESS_TOKEN)));
  }, []);

  return isLogged ? (
    <main>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
          <React.Suspense fallback={<LoadingSkeleton />}>
            <CContainer fluid>
              <Outlet />
            </CContainer>
          </React.Suspense>
        </div>
      </div>
    </main>
  ) : (
    <Navigate to={routesMap.LOGIN} replace />
  );
};

export { default as useRoutes } from './useRoutes';
export default PrivateLayout;
