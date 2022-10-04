import { AppRouteType } from 'layouts/helper';
import routesMap from 'layouts/routesMap';
import { memoize } from 'lodash';
import { lazy } from 'react';

const TrangChu = lazy(() => import('pages/TrangChu'));

const CauHinhDiaDanh = lazy(() => import('pages/CauHinhDiaDanh'));
const CauHinhBangGia = lazy(() => import('pages/CauHinhBangGia'));

const DanhMucToChuc = lazy(() => import('pages/CauHinhDanhMuc/DanhMucToChuc'));
const DanhMucNhanSu = lazy(() => import('pages/CauHinhDanhMuc/DanhMucNhanSu'));

const routes: AppRouteType[] = [
  {
    path: routesMap.HOME,
    component: TrangChu,
  },
  {
    path: routesMap.CAU_HINH_DIA_DANH,
    component: CauHinhDiaDanh,
  },
  {
    path: routesMap.CAU_HINH_BANG_GIA,
    component: CauHinhBangGia,
  },
  {
    path: routesMap.DANH_MUC_TO_CHUC,
    component: DanhMucToChuc,
  },
  {
    path: routesMap.DANH_MUC_NHAN_SU,
    component: DanhMucNhanSu,
  },
];

const useRoutes = memoize(() => {
  return routes;
});

export default useRoutes;
