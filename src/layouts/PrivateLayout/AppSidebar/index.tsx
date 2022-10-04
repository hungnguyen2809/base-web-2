import { CSidebar, CSidebarBrand, CSidebarNav } from '@coreui/react';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import useWindowDimensions from 'hooks/useWindowDimensions';
import React, { useEffect } from 'react';
import { actionToggleSidebar } from 'redux/appConfig/actions';
import { selectAppSidebarShow } from 'redux/appConfig/selectors';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import AppSidebarNav from '../AppSidebarNav';
import useNavs from '../useNavs';

const AppSidebar: React.FC = () => {
  const dispatch = useAppDispatch();
  const { width: WIDTH_SCREEN } = useWindowDimensions();

  const showSidebar = useAppSelector(selectAppSidebarShow);
  const navs = useNavs();

  useEffect(() => {
    if (!showSidebar && WIDTH_SCREEN > 770) {
      dispatch(actionToggleSidebar(true));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, WIDTH_SCREEN]);

  const handleVisibleChange = (visible: boolean) => {
    dispatch(actionToggleSidebar(visible));
  };

  return (
    <CSidebar position="fixed" visible={showSidebar} onVisibleChange={handleVisibleChange}>
      <CSidebarBrand className="d-none d-md-flex">
        <strong>Minh Khải Logistics</strong>
      </CSidebarBrand>
      <CSidebarNav>
        <SimpleBar>
          <AppSidebarNav items={navs} />
        </SimpleBar>
      </CSidebarNav>
    </CSidebar>
  );
};

export default AppSidebar;
