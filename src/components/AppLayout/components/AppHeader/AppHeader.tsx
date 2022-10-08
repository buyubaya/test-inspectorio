import CommonContainer from '@/components/CommonContainer';
import { APP_ROUTES_CONFIG } from '@/constants/routes';
import React from 'react';
import { Link } from 'react-router-dom';
import s from './AppHeader.module.scss';

function AppHeader() {
  return (
    <div className={s.wrapper}>
      <CommonContainer>
        <div>
          <Link to={APP_ROUTES_CONFIG.HOME.getRoute()}>Home</Link>
        </div>
      </CommonContainer>
    </div>
  );
}

export default AppHeader;
