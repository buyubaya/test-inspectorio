import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { getUserDetailAction } from '@/redux/slices/userDetail/userDetail.actions';
import { selectUserDetail, selectUserDetailIsLoading } from '@/redux/slices/userDetail/userDetail.selectors';
import { useEffect } from 'react';

export const useUserDetail = (userName: string) => {
  const appDispatch = useAppDispatch();
  const { userDetail, isUserDetailLoading } = useAppSelector((rootState) => ({
    userDetail: selectUserDetail(userName)(rootState),
    isUserDetailLoading: selectUserDetailIsLoading(userName)(rootState),
  }));

  useEffect(() => {
    appDispatch(getUserDetailAction(userName));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    userDetail: userDetail,
    isUserDetailLoading: isUserDetailLoading,
  };
};
