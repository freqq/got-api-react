import React from 'react';

import clearIcon from 'assets/close.svg';
import {
  InputFieldWrapper,
  InputFieldElement,
  ClearButton,
  ClearButtonIcon,
} from 'components/InputField/InputField.styles';

const InputField: React.FC<Props> = ({ value, onChange, placeholder }: Props) => (
  <InputFieldWrapper>
    <InputFieldElement
      value={value}
      onChange={evt => onChange(evt.target.value)}
      placeholder={placeholder}
    />
    <ClearButton disabled={value === ''} onClick={() => onChange('')}>
      <ClearButtonIcon src={clearIcon} alt="clear-icon" />
    </ClearButton>
  </InputFieldWrapper>
);

interface Props {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}

export default InputField;
