import { AppRouteType } from 'layouts/helper';
import routesMap from 'layouts/routesMap';
import { memoize } from 'lodash';
import { lazy } from 'react';

const DangNhap = lazy(() => import('pages/DangNhap'));

const routes: AppRouteType[] = [
  {
    path: routesMap.LOGIN,
    component: DangNhap,
  },
];

const useRoutes = memoize(() => {
  return routes;
});

export default useRoutes;
