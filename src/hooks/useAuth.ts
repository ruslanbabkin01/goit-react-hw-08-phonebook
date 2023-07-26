import {
  selectUserName,
  selectIsLoggedIn,
  selectIsRefreshing,
} from 'redux/auth/selectors';
import { useAppSelector } from 'redux/hooks';

export const useAuth = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const isRefreshing = useAppSelector(selectIsRefreshing);
  const userName = useAppSelector(selectUserName);

  return {
    isLoggedIn,
    isRefreshing,
    userName,
  };
};
