import React from 'react';
import Select, { Props as SelectProps } from 'react-select';

interface WrapperSelectProps extends SelectProps {
  label?: string;
}

const WrapperSelect: React.FC<WrapperSelectProps> = ({ label, ...props }) => {
  return (
    <div className="wrapper-select">
      {label && <label className="wrapper-select__label">{label}</label>}
      <Select {...props} />
    </div>
  );
};

export default WrapperSelect;