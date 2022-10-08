import { APP_ROUTES_CONFIG } from '@/constants/routes';
import ErrorPage from '@/pages/ErrorPage';
import UserDetailPage from '@/pages/UserDetailPage';
import UserListPage from '@/pages/UserListPage';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppLayout from '../AppLayout';
import RedirectRoute from './comnponents/RedirectRoute';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path={APP_ROUTES_CONFIG.HOME.path} element={<UserListPage />} />
          <Route path={APP_ROUTES_CONFIG.USER_DETAIL.path} element={<UserDetailPage />} />
          <Route path={APP_ROUTES_CONFIG.NOT_FOUND.path} element={<ErrorPage />} />
        </Route>

        <Route path="*" element={<RedirectRoute to={APP_ROUTES_CONFIG.NOT_FOUND.path} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
