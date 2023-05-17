import axios from 'axios';

export const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export const setToken = accessToken =>
  (instance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`);

export const unsetToken = () =>
  (instance.defaults.headers.common['Authorization'] = '');

instance.interceptors.response.use(
  response => response,
  async error => {
    if (error.response.status === 401) {
      const refreshToken = localStorage.getItem('refreshToken');
      try {
        const { data } = await instance.post('/users/refresh', {
          refreshToken,
        });
        setToken(data.accessToken);
        localStorage.setItem('refreshToken', data.refreshToken);
        return instance(error.config);
      } catch (error) {
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);
