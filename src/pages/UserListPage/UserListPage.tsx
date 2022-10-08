import CommonContainer from '@/components/CommonContainer';
import { APP_ROUTES_CONFIG } from '@/constants/routes';
import React from 'react';
import { Link } from 'react-router-dom';
import s from './UserListPage.module.scss';

const TOP_FIVE_USER_LIST = ['Graham Campbell', 'fabpot', 'weierophinney', 'rkh', 'josh'];

function UserListPage() {
  return (
    <CommonContainer>
      <div className={s.wrapper}>
        {TOP_FIVE_USER_LIST.map((userName) => {
          return (
            <div key={userName} className={s.userName}>
              <Link to={APP_ROUTES_CONFIG.USER_DETAIL.getRoute(userName)}>{userName}</Link>
            </div>
          );
        })}
      </div>
    </CommonContainer>
  );
}

export default UserListPage;
