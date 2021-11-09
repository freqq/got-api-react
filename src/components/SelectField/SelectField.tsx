import React from 'react';

import { SelectFieldWrapper, Option } from 'components/SelectField/SelectField.styles';

const SelectField: React.FC<Props> = ({ value, options, onChange }) => (
  <SelectFieldWrapper value={value} onChange={evt => onChange(parseInt(evt.target.value, 10))}>
    {options.map((option: number) => (
      <Option key={option} value={option}>
        {option}
      </Option>
    ))}
  </SelectFieldWrapper>
);

interface Props {
  value: number;
  options: number[];
  onChange: (value: number) => void;
}

export default SelectField;
