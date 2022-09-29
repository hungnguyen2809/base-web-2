import LoadingSkeleton from 'components/LoadingSkeleton';
import { AppRouteType, delayLazyLoad } from 'layouts/helper';
import PrivateLayout, { useRoutes as useRoutesPrivate } from 'layouts/PrivateLayout';
import PublicLayout, { useRoutes as useRoutesPublic } from 'layouts/PublicLayout';
import React, { lazy } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';

const Page404 = lazy(() => delayLazyLoad(import('components/Page404')));

const makeRoutes = (routes: AppRouteType[]): JSX.Element[] => {
  return routes.map((route, idx) => {
    const { component: PageComponent } = route;
    return <Route key={idx} path={route.path} element={<PageComponent />} />;
  });
};

const AppContainer: React.FC = () => {
  const routePrivate = useRoutesPrivate();
  const routePublic = useRoutesPublic();

  return (
    <React.Suspense fallback={<LoadingSkeleton />}>
      <Routes>
        <Route path="/" element={<Outlet />}>
          {/* Public routes */}
          <Route element={<PublicLayout />}>{makeRoutes(routePublic)}</Route>

          {/* Private route */}
          <Route element={<PrivateLayout />}>{makeRoutes(routePrivate)}</Route>

          {/* Catch all */}
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </React.Suspense>
  );
};

export default AppContainer;
