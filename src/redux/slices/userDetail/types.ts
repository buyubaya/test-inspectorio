import { EntityState } from '@reduxjs/toolkit';

export interface IUserDetailReducerState {
  statusMap: {
    [movieId: string]: 'LOADING' | 'SUCCESS' | 'ERROR' | undefined;
  };
  errorMap: {
    [movieId: string]: string | undefined;
  };
  data: EntityState<IUserDetail>;
}

export interface IUserDetail {
  id: number;
  avatarUrl: string;
  name: string;
  location: string;
  login: string;
}
