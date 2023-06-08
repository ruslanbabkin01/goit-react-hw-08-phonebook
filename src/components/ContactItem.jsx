import { deleteContact } from 'redux/contacts/operations';
import { useDispatch } from 'react-redux';
import { IconButton, ListItem } from '@mui/material';
import { Close } from '@mui/icons-material';
import { Box } from '@mui/system';
import { toast } from 'react-toastify';

export const ContactItem = ({ name, number, email, id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
    toast.info(`Contact ${name} deleted`);
  };

  return (
    <ListItem
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        p: '5',
      }}
    >
      <Box>
        {name} <br />
        {number}
        <br />
        {email}
      </Box>

      <IconButton
        variant="outlined"
        type="button"
        id={id}
        onClick={handleDelete}
        sx={{ p: '5px' }}
      >
        <Close />
      </IconButton>
    </ListItem>
  );
};
