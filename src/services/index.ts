import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://fierce-sea-22145.herokuapp.com/api',
});

instance.interceptors.request.use((config) => {
  const token = window.localStorage.getItem('token');
  if (!!token && config.headers) {
    config.headers.Authorization = `bearer ${token}`;
  }
  return config;
});
