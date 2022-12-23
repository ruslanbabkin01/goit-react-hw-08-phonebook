import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from '../hooks/useAuth';
import { Box, Button, Typography } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';

export const UserMenu = () => {
  const dispatch = useDispatch();
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
