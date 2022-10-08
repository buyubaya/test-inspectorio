import { AppRootState } from '@/redux/store';
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { getUserDetailAction } from './userDetail.actions';
import { IUserDetail, IUserDetailReducerState } from './types';

export const USER_DETAIL_SLICE_NAME = 'userDetail';

const userDetailAdapter = createEntityAdapter<IUserDetail>({
  selectId: (user) => user.id,
});

const initialState: IUserDetailReducerState = {
  statusMap: {},
  errorMap: {},
  data: userDetailAdapter.getInitialState({
    ids: [],
    entities: {},
  }),
};

export const userDetailSlice = createSlice({
  name: USER_DETAIL_SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserDetailAction.pending, (state, action) => {
        state.statusMap[action.meta.arg] = 'LOADING';
        if (state.errorMap?.[action.meta.arg]) {
          delete state.errorMap[action.meta.arg];
        }
      })
      .addCase(getUserDetailAction.fulfilled, (state, action) => {
        state.statusMap[action.meta.arg] = 'SUCCESS';
        const payload = action.payload;
        delete state.errorMap[action.meta.arg];
        userDetailAdapter.addOne(state.data, payload);
      })
      .addCase(getUserDetailAction.rejected, (state, action) => {
        state.statusMap[action.meta.arg] = 'ERROR';
      });
  },
});

export const userDetailSelectors = userDetailAdapter.getSelectors<AppRootState>((state) => state.userDetail.data);

const userDetailReducer = userDetailSlice.reducer;
export default userDetailReducer;
