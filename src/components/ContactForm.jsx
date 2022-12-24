import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from '../redux/contacts/operations';
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const newContact = {
      name,
      number,
    };
    const currentName = name;
    const matchName = contacts.some(
      contact => contact.name.toLowerCase() === currentName.toLowerCase()
    );

    if (!matchName) {
      dispatch(addContact({ ...newContact }));
    }
    form.reset();
  };

  return (
    <Box
      maxWidth="xs"
      sx={{
        position: 'relative',
        maxWidth: 300,
        minWidth: 270,
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <TextField
          margin="normal"
          required
          id={nameInputId}
          label="Name"
          name="name"
          autoComplete="name"
          autoFocus
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />
        <TextField
          margin="normal"
          required
          name="number"
          label="Number"
          type="tel"
          id={numberInputId}
          autoComplete="tel"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        />
        <Button type="submit" variant="contained" sx={{ mt: 2, mb: 2 }}>
          Add contact
        </Button>
      </Box>
    </Box>
  );
};
