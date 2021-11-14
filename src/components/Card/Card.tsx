import React from 'react';

import {
  CardWrapper,
  CardDetails,
  CardIconWrapper,
  CardIcon,
  CardName,
  CardValue,
} from 'components/Card/Card.styles';

const Card: React.FC<Props> = ({ name, value, icon }: Props) => (
  <CardWrapper>
    <CardIconWrapper>
      <CardIcon src={icon} alt="card-icon" />
    </CardIconWrapper>
    <CardDetails>
      <CardName>{name}</CardName>
      <CardValue>{value || '-'}</CardValue>
    </CardDetails>
  </CardWrapper>
);

interface Props {
  name: string;
  value: string | number;
  icon: string;
}

export default Card;
