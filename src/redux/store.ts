import { Action, AnyAction, configureStore, Dispatch, ThunkAction, ThunkDispatch } from '@reduxjs/toolkit';
import { IUserDetailReducerState } from './slices/userDetail/types';
import userDetailReducer from './slices/userDetail/userDetail.slice';

export const store = configureStore({
  reducer: {
    userDetail: userDetailReducer,
  },
});

export type AppDispatch = ThunkDispatch<AppRootState, null, AnyAction> &
  ThunkDispatch<AppRootState, undefined, AnyAction> &
  Dispatch<AnyAction>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootState, unknown, Action<string>>;

export interface AppRootState {
  userDetail: IUserDetailReducerState;
}
