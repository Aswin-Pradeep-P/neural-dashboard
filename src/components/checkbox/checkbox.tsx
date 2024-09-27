import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

interface CheckboxWrapperProps {
  label: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

const CheckboxWrapper: React.FC<CheckboxWrapperProps> = ({ label, checked, onChange, disabled = false }) => {
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          onChange={onChange}
          disabled={disabled}
        />
      }
      label={label}
    />
  );
};

export default CheckboxWrapper;