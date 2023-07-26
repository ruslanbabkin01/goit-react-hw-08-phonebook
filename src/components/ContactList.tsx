import { selectVisibleContacts } from 'redux/contacts/selectors';
import { List, Typography } from '@mui/material';
import { ContactItem } from './ContactItem';
import { useAppSelector } from 'redux/hooks';

export const ContactList = () => {
  const contacts = useAppSelector(selectVisibleContacts);
  const totalContacts = contacts.length;

  return (
    <List sx={{ width: '100%', maxWidth: 420 }}>
      {contacts.map(({ number, name, _id, email }) => (
        <ContactItem
          key={_id}
          number={number}
          name={name}
          _id={_id}
          email={email}
        />
      ))}
      <Typography variant="inherit">Total contacts: {totalContacts}</Typography>
    </List>
  );
};
