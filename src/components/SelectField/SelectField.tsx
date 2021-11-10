import React from 'react';

import { SelectFieldWrapper, Option } from 'components/SelectField/SelectField.styles';

const SelectField: React.FC<Props> = ({ value, options, onChange }) => (
  <SelectFieldWrapper value={value} onChange={evt => onChange(evt.target.value)}>
    {options.map(option => (
      <Option key={option} value={option}>
        {option}
      </Option>
    ))}
  </SelectFieldWrapper>
);

interface Props {
  value: number | string;
  options: number[] | string[];
  onChange: (value: any) => void;
}

export default SelectField;
