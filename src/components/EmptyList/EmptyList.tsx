import React from 'react';

import emptyListIcon from 'assets/empty_list.png';

import {
  EmptyListWrapper,
  EmptyListIcon,
  EmptyListHeader,
  EmptyListSubHeader,
} from 'components/EmptyList/EmptyList.styles';

const EmptyList: React.FC<Props> = ({ textFilter }: Props) => (
  <EmptyListWrapper>
    <EmptyListIcon alt="empty-listt-icon" src={emptyListIcon} />
    <EmptyListHeader>No results found</EmptyListHeader>
    <EmptyListSubHeader>Searched phrase: {textFilter}</EmptyListSubHeader>
  </EmptyListWrapper>
);

interface Props {
  textFilter: string;
}

export default EmptyList;
