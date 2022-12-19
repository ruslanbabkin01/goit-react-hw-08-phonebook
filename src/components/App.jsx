import { ContactForm, ContactList, Filter } from './index';
import { Box } from '../styles/index';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectIsLoading, selectError } from 'redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box mx="auto" width="450px">
      <Box as="h1" fontSize={30}>
        Phonebook
      </Box>
      <ContactForm />
      <Box as="h2" fontSize={24}>
        Contacts
      </Box>
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList />
    </Box>
  );
};
