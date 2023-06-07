import { AuthNav, Navigation, UserMenu } from 'components';
import { useAuth } from '../hooks/useAuth';
import { AppBar, Toolbar } from '@mui/material';

export const ResponsiveAppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Toolbar>
    </AppBar>
  );
};
