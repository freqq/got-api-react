import styled from 'styled-components';

import { CharacterWrapper } from 'components/CharacterItem/CharacterItem.styles';

export const CharacterTableWrapper = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

export const CharacterTableHeader = styled(CharacterWrapper)`
  font-weight: bold;
  background: rgba(0, 0, 0, 0.12) !important;

  div {
    border-right: 1px solid rgba(0, 0, 0, 0.2);

    &:last-child {
      border-right: none;
    }
  }

  &:hover {
    background: rgba(0, 0, 0, 0.12) !important;
  }
`;

export const CharacterTableList = styled.div`
  max-height: 50vh;
  overflow-x: hidden;
  overflow-y: overlay;
`;
