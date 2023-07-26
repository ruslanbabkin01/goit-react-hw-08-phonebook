import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { logIn, logOut, refreshUser, register } from './operations';
import { User } from '../../../@types/types';

interface IAuthState {
  user: User;
  accessToken: string | null;
  isLoggedIn: boolean;
  isRefreshing: boolean;
}

const initialState: IAuthState = {
  user: { name: null, email: null, subscription: null },
  accessToken: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAccessToken(state, action: PayloadAction<string>) {
      state.accessToken = action.payload;
      state.isLoggedIn = true;
    },
  },
  extraReducers: builder => {
    builder
      // .addCase(
      //   register.fulfilled,
      //   (state, action) => {
      //     state.user = action.payload.user.user;
      //     state.accessToken = action.payload.accessToken;
      //     state.isLoggedIn = true;
      //   }
      // )
      .addCase(register.pending, (state, action) => {
        state.isRefreshing = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isRefreshing = false;
      })
      .addCase(register.rejected, (state, action) => {
        state.isRefreshing = false;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.accessToken = action.payload.accessToken;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(logOut.fulfilled, (state, action) => {
        state.user = { name: null, email: null, subscription: null };
        state.accessToken = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.pending, (state, action) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.isRefreshing = false;
      });
  },
});

export const { setAccessToken } = authSlice.actions;

export const authReducer = authSlice.reducer;
