import { useEffect } from 'react';
import { selectIsLoading } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import { Box, Typography, useTheme } from '@mui/material';
import { ContactForm, ContactList, Filter, Loader } from 'components';
import { useAppDispatch, useAppSelector } from 'redux/hooks';

export default function Contacts() {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectIsLoading);
  const theme = useTheme();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        mt: 3,

        [theme.breakpoints.down('sm')]: {
          gap: 2,
          flexDirection: 'column',
          alignItems: 'center',
        },
        [theme.breakpoints.up('sm')]: {
          gap: 6,
          alignItems: 'start',
        },
      }}
    >
      <ContactForm />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Typography variant="h5" align="center" mb={theme.spacing(1)}>
          Contacts
        </Typography>
        <Filter />
        {isLoading && <Loader />}
        <ContactList />
      </Box>
    </Box>
  );
}
