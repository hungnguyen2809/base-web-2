import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react';
import { NavItem } from 'layouts/helper';
import routesMap from 'layouts/routesMap';
import { memoize } from 'lodash';
import { FaAlignRight, FaLocationArrow, FaMoneyBillWave } from 'react-icons/fa';

const _nav: NavItem[] = [
  {
    component: CNavTitle,
    name: 'Chức năng',
  },
  {
    component: CNavItem,
    name: 'Cấu hình địa danh',
    to: routesMap.CAU_HINH_DIA_DANH,
    icon: FaLocationArrow,
  },
  {
    component: CNavItem,
    name: 'Cấu hình bảng giá',
    to: routesMap.CAU_HINH_BANG_GIA,
    icon: FaMoneyBillWave,
  },
  {
    component: CNavGroup,
    name: 'Danh mục',
    to: routesMap.DANH_MUC,
    icon: FaAlignRight,
    items: [
      {
        component: CNavItem,
        name: 'Tổ chức',
        to: routesMap.DANH_MUC_TO_CHUC,
      },
      {
        component: CNavItem,
        name: 'Nhân sự',
        to: routesMap.DANH_MUC_NHAN_SU,
      },
    ],
  },
];

const useNavs = memoize(() => {
  return _nav;
});

export default useNavs;
