import React from 'react';

import {
  ButtonWrapper,
  ButtonIconWrapper,
  ButtonText,
  ButtonIcon,
} from 'components/Button/Button.styles';

const Button: React.FC<Props> = ({ text, icon, disabled, onClick }: Props) => {
  if (text)
    return (
      <ButtonWrapper disabled={disabled} onClick={onClick}>
        <ButtonText>{text}</ButtonText>
      </ButtonWrapper>
    );

  if (icon)
    return (
      <ButtonIconWrapper disabled={disabled} onClick={onClick}>
        <ButtonIcon src={icon} alt="button-icon" />
      </ButtonIconWrapper>
    );

  return null;
};

Button.defaultProps = {
  disabled: false,
  text: undefined,
  icon: undefined,
};

interface Props {
  text?: string;
  icon?: string;
  disabled?: boolean;
  onClick: () => void;
}

export default Button;
