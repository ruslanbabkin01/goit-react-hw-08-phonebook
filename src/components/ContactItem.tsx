import { deleteContact } from 'redux/contacts/operations';
import { IconButton, ListItem } from '@mui/material';
import { Close } from '@mui/icons-material';
import { Box } from '@mui/system';
import { toast } from 'react-toastify';
import { useAppDispatch } from 'redux/hooks';
import { Contact } from '../../@types/types';

export const ContactItem: React.FC<Contact> = ({
  name,
  number,
  email,
  _id,
}) => {
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    if (_id) {
      dispatch(deleteContact(_id));
      toast.info(`Contact ${name} deleted`);
    }
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
        type="button"
        id={_id}
        onClick={handleDelete}
        sx={{ p: '5px' }}
      >
        <Close />
      </IconButton>
    </ListItem>
  );
};
