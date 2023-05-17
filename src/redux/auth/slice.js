import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, refreshUser } from './operations';

const initialState = {
  user: { name: null, email: null, subscription: null },
  accessToken: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAccessToken(state, action) {
      state.accessToken = action.payload;
      state.isLoggedIn = true;
    },
  },
  extraReducers: {
    // [register.fulfilled](state, action) {
    //   state.user = action.payload.user.user;
    //   state.accessToken = action.payload.accessToken;
    //   state.isLoggedIn = true;
    // },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [logOut.fulfilled](state) {
      state.user = { name: null, email: null, subscription: null };
      state.accessToken = null;
      state.isLoggedIn = false;
      state.isRefreshing = false;
    },
    [refreshUser.pending](state) {
      state.isRefreshing = true;
    },
    [refreshUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [refreshUser.rejected](state) {
      state.isRefreshing = false;
    },
  },
});

export const { setAccessToken } = authSlice.actions;
export const authReducer = authSlice.reducer;
