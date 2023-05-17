import { Container, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export default function NotFound() {
  return (
    <Container sx={{ my: 4 }}>
      <Typography variant="h3" component="h1" sx={{ textAlign: 'center' }}>
        This page was not found, please return to
        <RouterLink to="/"> Home page</RouterLink>
      </Typography>
    </Container>
  );
}
