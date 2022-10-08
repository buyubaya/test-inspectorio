import { removeSpace } from '@/helpers/string';
import { APP_ROUTE_KEYS, IRouteConfigInfo } from '@/types/common';

export const APP_ROUTES_CONFIG: Record<APP_ROUTE_KEYS, IRouteConfigInfo> = {
  [APP_ROUTE_KEYS.HOME]: {
    label: 'User List',
    test: /^(\/)?(\?[a-zA-Z0-9-_=&]*)?$/,
    path: '/',
    getRoute: () => '/',
  },

  [APP_ROUTE_KEYS.USER_DETAIL]: {
    label: 'User Detail',
    test: /^\/user\/([a-zA-Z0-9-]+)(\?[a-zA-Z0-9-_=&]*)?$/,
    path: '/user/:userName',
    getRoute: (userName: string | number) => `/user/${removeSpace(`${userName}`)}`,
  },

  [APP_ROUTE_KEYS.NOT_FOUND]: {
    test: /^\/not-found(\?[a-zA-Z0-9-_=&]*)?$/,
    path: '/not-found',
    getRoute: () => '/not-found',
  },
};
