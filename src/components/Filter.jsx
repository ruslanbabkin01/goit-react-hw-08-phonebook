import { useDispatch } from 'react-redux';
import { setFilter } from '../redux/contacts/filterSlice';
import { TextField } from '@mui/material';

export const Filter = () => {
  const dispatch = useDispatch();

  function changeFilter(e) {
    const inputValue = e.target.value;
    dispatch(setFilter(inputValue));
  }

  return (
    <TextField
      variant="standard"
      label="Find contacs by name"
      type="text"
      name="filter"
      placeholder="Enter name"
      onChange={changeFilter}
      sx={{ mb: 2 }}
    />
  );
};
