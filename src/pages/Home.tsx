import { useEffect } from 'react';
import { Container, Link, Typography } from '@mui/material';
import { useAuth } from 'hooks/useAuth';
import { NavLink, useSearchParams } from 'react-router-dom';
import { setAccessToken } from 'redux/auth/slice';
import { useAppDispatch } from 'redux/hooks';
import { setToken } from 'services/index';

export default function Home() {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const accessToken = searchParams.get('accessToken');
  const refreshToken = searchParams.get('refreshToken');
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    if (accessToken && refreshToken) {
      setToken(accessToken);
      dispatch(setAccessToken(accessToken));
      localStorage.setItem('refreshToken', refreshToken);
    }
  }, [dispatch, accessToken, refreshToken]);

  return isLoggedIn ? (
    <Container sx={{ my: 4 }}>
      <Typography variant="h3" component="h1" sx={{ textAlign: 'center' }}>
        Welcome to your personal phonebook.
        <br />
        <Link to="/contacts" component={NavLink}>
          Add your contacts
        </Link>
      </Typography>
    </Container>
  ) : (
    <Container>
      <Typography variant="h3" component="h1" sx={{ textAlign: 'center' }}>
        Welcome to your personal phonebook. Please
        <br />
        <Link to="/register" component={NavLink}>
          register
        </Link>{' '}
        or{' '}
        <Link to="/login" component={NavLink}>
          login
        </Link>
      </Typography>
    </Container>
  );
}
