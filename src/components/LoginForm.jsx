import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import {
  Avatar,
  Button,
  Typography,
  Container,
  Box,
  Grid,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Copyright, CustomInput } from 'components';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { loginValidationSchema } from 'validationSсhemas/validationSchemas';
import { Link } from 'react-router-dom';
// import { BASE_URL } from 'services';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const { control, reset, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(loginValidationSchema),
  });

  const onSubmit = data => {
    dispatch(logIn(data));
    reset();
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Log In
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          sx={{ mt: 1 }}
        >
          <CustomInput
            id="email"
            label="Email"
            name="email"
            control={control}
          />
          <CustomInput
            name="password"
            label="Password"
            type="password"
            id="password"
            control={control}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Log In
          </Button>

          <Grid
            container
            justifyContent="center"
            sx={{
              '&:hover': {
                color: '#008B8B',
              },
            }}
          >
            <Grid item>
              <Link to="/register">{"Don't have an account? Register"}</Link>
            </Grid>
          </Grid>
          {/* <Button
            href={`${BASE_URL}/users/google`}
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Log In with Google
          </Button> */}
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
};
