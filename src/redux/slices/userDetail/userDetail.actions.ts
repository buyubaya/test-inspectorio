import { getUserDetail } from '@/api/users/getUserDetail';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getUserDetailAction = createAsyncThunk('userDetail/getUserDetailAction', async (userName: string) => {
  const response = await getUserDetail(userName);
  return response;
});
