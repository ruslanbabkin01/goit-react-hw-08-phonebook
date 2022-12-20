import { Contacts, TotalContacts } from './ContactList.styled';
import { ContactItem } from '../ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const totalContacts = contacts.length;

  return (
    <Contacts>
      {contacts.map(({ number, name, id }) => (
        <ContactItem key={id} number={number} name={name} id={id} />
      ))}
      <TotalContacts>Total contacts: {totalContacts}</TotalContacts>
    </Contacts>
  );
};
