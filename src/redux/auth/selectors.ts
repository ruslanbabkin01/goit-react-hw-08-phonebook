import { RootState } from 'redux/store';

export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;

export const selectUserName = (state: RootState) => state.auth.user.name;

export const selectIsRefreshing = (state: RootState) => state.auth.isRefreshing;
