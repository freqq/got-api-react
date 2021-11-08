import React from 'react';

import { ButtonWrapper } from 'components/Button/Button.styles';

const Button: React.FC<Props> = ({ text }: Props) => <ButtonWrapper>{text}</ButtonWrapper>;

interface Props {
  text: string;
}

export default Button;
