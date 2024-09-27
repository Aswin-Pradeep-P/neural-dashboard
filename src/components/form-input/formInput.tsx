import { TextField, TextFieldProps } from '@mui/material';
import { FC } from 'react'

const FormInput: FC<TextFieldProps> = (props) => {
  return (
    <TextField {...props} />
  )
}

export default FormInput;