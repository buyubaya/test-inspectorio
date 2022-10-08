export type Id = string | number;

export enum APP_ROUTE_KEYS {
  HOME = 'HOME',
  USER_DETAIL = 'USER_DETAIL',
  NOT_FOUND = 'NOT_FOUND',
}

export interface IRouteConfigInfo {
  label?: string;
  test: RegExp;
  path: string;
  getRoute: (...args: (string | number)[]) => string;
}
