import React from 'react';
import { Outlet } from 'react-router-dom';
import s from './AppLayout.module.scss';
import AppHeader from './components/AppHeader';

function AppLayout() {
  return (
    <div className={s.wrapper}>
      <AppHeader />

      <Outlet />
    </div>
  );
}

export default AppLayout;
