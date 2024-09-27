import React from 'react';
import { TextField } from '@mui/material';
import { DatePicker } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

interface DatePickerWrapperProps {
  label: string;
  value: Date | null;
  onChange: (date: Date | null) => void;
}

const DatePickerWrapper: React.FC<DatePickerWrapperProps> = ({ label, value, onChange }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label={label}
        value={value}
        onChange={onChange}
        renderInput={(params: any) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
};

export default DatePickerWrapper;