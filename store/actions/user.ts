import AsyncStorage from '@react-native-async-storage/async-storage';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { EApiStatuses, IError, ILogin } from '../../models/inner-models';
import { ELocalStoreKeys } from '../../models/models';
import { EUser } from '../constants';
import instance from '../middleware/api';

const login = createAsyncThunk(
  EUser.loginUser,
  async (loginInfo: ILogin, thunkAPI) => {
    try {
      const resp = await instance.post('/auth/login', loginInfo);

      if (!resp?.data || resp.data.status !== EApiStatuses.SUCCESS) {
        return thunkAPI.rejectWithValue({ error: resp.data.message });
      }

      await AsyncStorage.setItem(ELocalStoreKeys.TOKEN, resp.data.result.accessToken);
      return resp?.data?.result;
    } catch (err) {
      const error = err as IError;
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const sendCode = createAsyncThunk(
  EUser.sendCode,
  async (email: string, thunkAPI) => {
    try {
      const resp = await instance.post('/auth/send-code', { email: email });
      if (!resp?.data || resp.data.status !== EApiStatuses.SUCCESS) {
        return thunkAPI.rejectWithValue({ error: resp.data.message });
      }

      await AsyncStorage.setItem(ELocalStoreKeys.EMAIL, email);
      return email;
    } catch (err) {
      console.log('error', err);
      const error = err as IError;
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export {
  login,
  sendCode,
};
