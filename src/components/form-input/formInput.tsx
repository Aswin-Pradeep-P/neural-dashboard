import { TextField, TextFieldProps } from '@mui/material';
import { FC } from 'react';

const FormInput: FC<TextFieldProps> = (props) => {
  return (
    <TextField 
      {...props} 
      InputProps={{
        style: {
          height: '50px',
          borderRadius: '12px',
          padding: '12.5px 14px !important',
        },
      }}
      style={{
        width: '100%',
      }}
    />
  )
}

export default FormInput;