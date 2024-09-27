import React from 'react';
import Button from '@mui/material/Button';
import { ButtonProps } from '@mui/material/Button';

import styles from './button.module.scss';

interface CustomButtonProps extends ButtonProps {
  label: string;
  containerClass?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ label, containerClass, ...props }) => {
  return (
    <Button {...props} className={`${styles.button} ${containerClass}`}>
      {label}
    </Button>
  );
};

export default CustomButton;