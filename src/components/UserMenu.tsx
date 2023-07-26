import { logOut } from 'redux/auth/operations';
import { useAuth } from '../hooks/useAuth';
import { Box, Button, Typography } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import { useAppDispatch } from 'redux/hooks';

export const UserMenu = () => {
  const dispatch = useAppDispatch();
  const { userName } = useAuth();
  const onLogOut = () => dispatch(logOut());

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <AccountCircle sx={{ color: 'inherit' }} />
        <Typography>Hi, {userName}</Typography>
      </Box>

      <Button type="button" onClick={onLogOut} color="inherit" variant="text">
        Logout
      </Button>
    </Box>
  );
};
