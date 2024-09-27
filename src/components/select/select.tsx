import React from 'react';
import Select, { Props as SelectProps } from 'react-select';

import styles from './select.module.scss';

interface WrapperSelectProps extends SelectProps {
  label?: string;
}

const WrapperSelect: React.FC<WrapperSelectProps> = ({ label, ...props }) => {
  return (
    <div className={styles.selectWrapper}>
      {label && <label className={styles.selectLabel}>{label}</label>}
      <Select 
      {...props} 
      styles={{
      ...props.styles,
      control: (base) => ({
        ...base,
        height: '50px',
        minHeight: '50px',
        borderRadius: '8px',
      }),
      menu: (base) => ({
        ...base,
        zIndex: 999,
      })
      }}
      />
    </div>
  );
};

export default WrapperSelect;