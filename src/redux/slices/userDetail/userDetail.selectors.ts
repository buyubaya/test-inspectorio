import { removeSpace } from '@/helpers/string';
import { AppRootState } from '@/redux/store';

export const selectUserDetail = (userName: string) => (state: AppRootState) => {
  const users = Object.values(state.userDetail.data?.entities || {});
  const userDetail = users.find((user) => removeSpace(user?.login || '') === userName);
  return userDetail;
};

export const selectUserDetailIsLoading = (userName: string) => (state: AppRootState) =>
  state.userDetail.statusMap?.[userName] === 'LOADING';
