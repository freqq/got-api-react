import React from 'react';

import clearIcon from 'assets/close.svg';
import {
  InputFieldWrapper,
  InputFieldElement,
  ClearButton,
  ClearButtonIcon,
} from 'components/InputField/InputField.styles';

const InputField: React.FC<Props> = ({ value, onChange, placeholder }: Props) => {
  const isClearButtonDisabled = () => value === '';

  const clearTextValue = () => onChange('');

  return (
    <InputFieldWrapper>
      <InputFieldElement
        value={value}
        onChange={evt => onChange(evt.target.value)}
        placeholder={placeholder}
      />
      <ClearButton disabled={isClearButtonDisabled()} onClick={clearTextValue}>
        <ClearButtonIcon src={clearIcon} alt="clear-button" />
      </ClearButton>
    </InputFieldWrapper>
  );
};
interface Props {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}

export default InputField;
