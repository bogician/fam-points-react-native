import axios from 'axios';
import { ELocalStoreKeys } from '../../models/models';

const getToken = () => {
  return localStorage.getItem(ELocalStoreKeys.TOKEN);
};

const defaultHeaders = { 'Content-Type': 'appliction/json' };

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: defaultHeaders,
});

instance.interceptors.request.use(async (config) => {
  const hasToken = !!getToken();
  if (hasToken) {
    try {
      // @ts-ignore
      config.headers['Authorization'] = `${hasToken}`;
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
