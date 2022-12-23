import PropTypes from 'prop-types';
import { Notify } from 'notiflix';
import { deleteContact } from 'redux/contacts/operations';
import { useDispatch } from 'react-redux';
import { IconButton, ListItem } from '@mui/material';
import { Close } from '@mui/icons-material';
import { Box } from '@mui/system';

export const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
    Notify.info(`Contact ${name} deleted`);
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

ContactItem.propTypes = {
  number: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
