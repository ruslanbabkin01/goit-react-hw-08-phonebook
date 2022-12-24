import { ContactItem } from './ContactItem';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/selectors';
import { List, Typography } from '@mui/material';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const totalContacts = contacts.length;

  return (
    <List sx={{ width: '100%', maxWidth: 420 }}>
      {contacts.map(({ number, name, id }) => (
        <ContactItem key={id} number={number} name={name} id={id} />
      ))}
      <Typography variant="inherit">Total contacts: {totalContacts}</Typography>
    </List>
  );
};
