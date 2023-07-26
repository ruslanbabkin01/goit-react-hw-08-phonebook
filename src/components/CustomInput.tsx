import { TextField, TextFieldProps } from '@mui/material';
import { Control, Controller, FieldValues } from 'react-hook-form';

interface CustomInputProps {
  control: Control<FieldValues>;
  id: string;
  name: string;
  label: string;
  type: string;
  placeholder: string;
}

export const CustomInput: React.FC<CustomInputProps> = ({
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
          type={type as TextFieldProps['type']}
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
