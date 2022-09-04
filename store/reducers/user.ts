import { createAction, createSlice } from '@reduxjs/toolkit';
import { IUser } from '../../models/models';
import {
  login, sendCode,
} from '../actions/user';
import { EUser } from '../constants';

export interface UserState {
  loading: boolean;
  user: IUser | null;
}

const initialState: UserState = {
  loading: true,
  user: null,
};

const clearUserState = createAction(EUser.resetUser);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { actions, reducer } = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, { payload }) => {
        if (!payload) {
          return;
        }

        state.user = payload as IUser;
        state.loading = false;
      })
      .addCase(sendCode.fulfilled, (state, { payload }) => {
        state.user = {
          email: payload
        }
      })
      .addCase(clearUserState, () => initialState);
  },
});

export { clearUserState };

export default reducer;
