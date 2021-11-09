import React from 'react';

import { ButtonWrapper } from 'components/Button/Button.styles';

const Button: React.FC<Props> = ({ text, disabled, onClick }: Props) => (
  <ButtonWrapper disabled={disabled} onClick={onClick}>
    {text}
  </ButtonWrapper>
);

Button.defaultProps = {
  disabled: false,
};

interface Props {
  text: string;
  disabled?: boolean;
  onClick: () => void;
}

export default Button;
