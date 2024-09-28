import { TextField, TextFieldProps } from '@mui/material';
import { FC } from 'react';

const FormInput: FC<TextFieldProps> = (props) => {
  return (
    <TextField 
      {...props} 
      InputProps={
        props.InputProps || {
        style: {
          ...(!props.multiline && {height: '50px'}),
          borderRadius: '12px',
          padding: '12.5px 14px !important',
        },
      }}
      InputLabelProps={{
        style: {
          color: '#33314C', // Example style for the label
          fontSize: '16px',
          marginTop: '-2px',
        },
      }}
      style={{
        width: '100%'
      }}
    />
  )
}

export default FormInput;