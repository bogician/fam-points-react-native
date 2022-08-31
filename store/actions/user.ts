import { createAsyncThunk } from '@reduxjs/toolkit';
import { IError, ILogin } from '../../models/inner-models';
import { EUser } from '../constants';
import instance from '../middleware/api';

const login = createAsyncThunk(
  EUser.loginUser,
  async (loginInfo: ILogin, thunkAPI) => {
    try {
      return {
        email: 'test',
        role: 'user',
        token: 'token'
      };
    } catch (err) {
      const error = err as IError;
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export {
  login,
};
