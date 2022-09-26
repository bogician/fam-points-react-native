import AsyncStorage from '@react-native-async-storage/async-storage';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { EApiStatuses, IError, ILogin } from '../../models/inner-models';
import { ELocalStoreKeys } from '../../models/models';
import { EEvent } from '../constants';
import instance from '../middleware/api';
import { RootState } from '../store';

const getAllForUser = createAsyncThunk(
  EEvent.getAllForUser,
  async (_, thunkAPI) => {
    try {
      const { user } = thunkAPI.getState() as RootState;
      const resp = await instance.post('/events/get-events-by-email', { email: user.user?.email });
      if (!resp?.data || resp.data.status !== EApiStatuses.SUCCESS) {
        return thunkAPI.rejectWithValue({ error: resp.data.message });
      }

      return resp?.data?.result;
    } catch (err) {
      const error = err as IError;
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export {
  getAllForUser,
};
