import React from 'react';
import TextField from '@mui/material/TextField';

interface MultilineInputProps {
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  rows?: number;
  placeholder?: string;
  variant?: 'filled' | 'outlined' | 'standard';
}

const MultilineInput: React.FC<MultilineInputProps> = ({
  label,
  value,
  onChange,
  rows = 4,
  placeholder = '',
  variant = 'outlined',
}) => {
  return (
    <TextField
      label={label}
      value={value}
      onChange={onChange}
      multiline
      rows={rows}
      placeholder={placeholder}
      variant={variant}
      fullWidth
    />
  );
};

export default MultilineInput;