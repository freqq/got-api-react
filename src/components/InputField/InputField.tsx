import React from 'react';

import { InputFieldWrapper } from 'components/InputField/InputField.styles';

const InputField: React.FC<Props> = ({ value, onChange }: Props) => (
  <InputFieldWrapper value={value} onChange={evt => onChange(evt.target.value)} />
);

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default InputField;
