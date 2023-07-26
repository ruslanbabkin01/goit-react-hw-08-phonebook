import { setFilter } from '../redux/contacts/slice';
import { TextField } from '@mui/material';
import { useAppDispatch } from 'redux/hooks';

export const Filter = () => {
  const dispatch = useAppDispatch();

  function changeFilter(e: React.ChangeEvent<HTMLInputElement>) {
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
