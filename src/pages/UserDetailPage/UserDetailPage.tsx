import CommonContainer from '@/components/CommonContainer';
import { Skeleton } from 'antd';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useUserDetail } from './hooks/useUserDetail';
import s from './UserDetailPage.module.scss';

function UserDetailPage() {
  const routeParams = useParams();

  const { userDetail, isUserDetailLoading } = useUserDetail(routeParams.userName || '');

  if (isUserDetailLoading) {
    return (
      <CommonContainer className={s.wrapper}>
        <div className={s.avatarArea}>
          <Skeleton.Image active style={{ width: 300, height: 300 }} />
        </div>
        <div className={s.detailArea}>
          <Skeleton active />
        </div>
      </CommonContainer>
    );
  }

  return (
    <CommonContainer className={s.wrapper}>
      <div className={s.avatarArea}>
        <img src={userDetail?.avatarUrl} alt={userDetail?.name} style={{ width: '100%' }} />
      </div>
      <div className={s.detailArea}>
        <div className={s.userName}>{userDetail?.name}</div>
        <div className={s.location}>{userDetail?.location}</div>
      </div>
    </CommonContainer>
  );
}

export default UserDetailPage;
