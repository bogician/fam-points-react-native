import axios from 'axios';
import { ELocalStoreKeys } from '../../models/models';
// @ts-ignore
import { API_URL } from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';

const getToken = async () => {
  return AsyncStorage.getItem(ELocalStoreKeys.TOKEN)
};


const instance = axios.create({
  baseURL: API_URL,
});

instance.interceptors.request.use(async (config) => {
  const token = await getToken();

  if (token) {
    try {
      // @ts-ignore
      config.headers['Authorization'] = `${token}`;
    } catch (err) {
      console.log(err);
      localStorage.clear();
    }
  }
  return config;
});

instance.interceptors.response.use(function (response) {
  if (response.status >= 500 && response.status < 600) {
    console.log('Server error');
  }
  return response;
}, function (error) {
  return Promise.reject(error);
});

export default instance;
