import { register } from 'redux/auth/operations';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Avatar,
  Button,
  Box,
  Typography,
  Container,
  Grid,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Copyright, CustomInput } from 'components';
import { useForm } from 'react-hook-form';
import { registerValidationSchema } from 'validationSсhemas/validationSchemas';
import { Link } from 'react-router-dom';
import { useAppDispatch } from 'redux/hooks';
import { RegisterData } from '../../@types/types';
// import { BASE_URL } from 'services';

export const RegisterForm = () => {
  const dispatch = useAppDispatch();

  const { control, reset, handleSubmit } = useForm<RegisterData>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
    resolver: yupResolver(registerValidationSchema),
  });

  const onSubmit = (data: RegisterData) => {
    dispatch(register(data));
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
          Register
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          sx={{ mt: 1 }}
        >
          <CustomInput id="name" label="Name" name="name" control={control} />
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
            Register
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
              <Link to="/login">Already have an account? Login</Link>
            </Grid>
          </Grid>

          {/* <Button
            href={`${BASE_URL}/users/google`}
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Register with Google
          </Button> */}
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
};
