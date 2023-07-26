import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { RootState } from 'redux/store';
import { instance, setToken, unsetToken } from 'services';
import {
  LoginData,
  LoginResponse,
  RegisterData,
  RegisterResponse,
  User,
} from '../../../@types/types';

export const register = createAsyncThunk<
  RegisterResponse,
  RegisterData,
  { rejectValue: string }
>('auth/register', async (credentials, { rejectWithValue }) => {
  try {
    const { data } = await instance.post('/auth/register', credentials);
    // setToken(data.token);
    toast.info(`Please confirm registration. Check your email`);
    return data;
  } catch (e: unknown) {
    const error = e as AxiosError;
    // toast.error(error.response.data.message);
    return rejectWithValue(error.message);
  }
});

export const logIn = createAsyncThunk<
  LoginResponse,
  LoginData,
  { rejectValue: string }
>('auth/login', async (credentials, thunkAPI) => {
  try {
    const { data } = await instance.post('/auth/login', credentials);
    setToken(data.accessToken);
    localStorage.setItem('refreshToken', data.refreshToken);
    return data;
  } catch (e: unknown) {
    const error = e as AxiosError;
    // toast.error(error.response.data.message);
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logOut = createAsyncThunk<
  string,
  undefined,
  { rejectValue: string }
>('auth/logout', async (_, thunkAPI) => {
  try {
    const { data } = await instance.post('/auth/logout');
    unsetToken();
    return data;
  } catch (e: unknown) {
    const error = e as AxiosError;
    // console.log(error.response.data.message);
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk<
  User,
  undefined,
  { rejectValue: string; state: RootState }
>('auth/refresh', async (_, thunkAPI) => {
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
  } catch (e: unknown) {
    const error = e as AxiosError;
    // console.log(error.response.data.message);
    return thunkAPI.rejectWithValue(error.message);
  }
});
