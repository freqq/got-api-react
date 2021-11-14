import React from 'react';

import {
  SelectFieldWrapper,
  SelectElement,
  Option,
  SelectLabel,
} from 'components/SelectField/SelectField.styles';

const SelectField: React.FC<Props> = ({ label, value, options, onChange }) => (
  <SelectFieldWrapper>
    <SelectLabel>{label}</SelectLabel>
    <SelectElement value={value} onChange={evt => onChange(evt.target.value)}>
      {options.map(option => (
        <Option key={option} value={option}>
          {option}
        </Option>
      ))}
    </SelectElement>
  </SelectFieldWrapper>
);

interface Props {
  label: string;
  value: number | string;
  options: number[] | string[];
  onChange: (value: any) => void;
}

export default SelectField;
