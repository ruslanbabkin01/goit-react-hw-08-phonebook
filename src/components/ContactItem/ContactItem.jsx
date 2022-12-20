import PropTypes from 'prop-types';
import { Notify } from 'notiflix';
import { Contact, Button } from './ContactItem.styled';
import { deleteContact } from 'redux/contacts/operations';
import { useDispatch } from 'react-redux';
import { updateDate } from '../../utils/formatDate';

export const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const currentDate = new Date();
  const newDate = updateDate(currentDate);

  const handleDelete = () => {
    dispatch(deleteContact(id));
    Notify.info(`Contact ${name} deleted`);
  };

  return (
    <Contact>
      {name} : {number} <br />
      {newDate}
      <Button type="button" id={id} onClick={handleDelete}>
        Delete
      </Button>
    </Contact>
  );
};

ContactItem.propTypes = {
  number: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
