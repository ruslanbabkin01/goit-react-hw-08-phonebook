import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix';
import { instance, setToken, unsetToken } from 'services';

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await instance.post('/users/register', credentials);
      // setToken(data.token);
      Notify.info(`Please confirm registration. Check your email`);
      return data;
    } catch (e) {
      Notify.failure(e.response.data.message);
      return rejectWithValue(e.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await instance.post('/users/login', credentials);
      setToken(data.accessToken);
      localStorage.setItem('refreshToken', data.refreshToken);
      return data;
    } catch (e) {
      Notify.failure(e.response.data.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    const { data } = await instance.post('/users/logout');
    unsetToken();
    return data;
  } catch (e) {
    Notify.failure(e.response.data.message);
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.accessToken;

    if (!persistedToken) {
      // If there is no token, exit without performing any request
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      // If there is a token, add it to the HTTP header and perform the request
      setToken(persistedToken);
      const { data } = await instance.get('/users/current');
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);
