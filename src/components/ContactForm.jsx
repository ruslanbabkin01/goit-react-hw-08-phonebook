import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from '../redux/contacts/operations';
import { Button, Box } from '@mui/material';
import { useForm } from 'react-hook-form';
import { contactValidationSchema } from 'validationSсhemas/validationSchemas';
import { yupResolver } from '@hookform/resolvers/yup';
import { CustomInput } from './CustomInput';

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const { control, reset, handleSubmit } = useForm({
    defaultValues: {
      name: '',
      number: '',
      email: '',
    },
    resolver: yupResolver(contactValidationSchema),
  });

  const onSubmit = data => {
    const { name } = data;

    const currentName = name;
    const matchName = contacts.some(
      contact => contact.name.toLowerCase() === currentName.toLowerCase()
    );

    if (!matchName) {
      dispatch(addContact(data));
    }
    reset();
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
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <CustomInput control={control} label="Name" name="name" />
        <CustomInput
          control={control}
          name="number"
          label="Number"
          type="tel"
          placeholder="+380 50 111 11 11"
        />
        <CustomInput
          control={control}
          name="email"
          label="Email"
          type="email"
          placeholder="example@gmail.com"
        />
        <Button type="submit" variant="contained" sx={{ mt: 2, mb: 2 }}>
          Add contact
        </Button>
      </Box>
    </Box>
  );
};
