import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

export const CustomInput = ({
  control,
  id,
  name,
  label,
  type,
  placeholder,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, onBlur, value, ref },
        fieldState: { invalid, isTouched, isDirty, error },
      }) => (
        <TextField
          onBlur={onBlur}
          id={id}
          label={label}
          name={name}
          placeholder={placeholder}
          type={type}
          value={value}
          autoFocus
          fullWidth
          margin="normal"
          onChange={onChange}
          error={!!error}
          helperText={error?.message}
        />
      )}
    />
  );
};
