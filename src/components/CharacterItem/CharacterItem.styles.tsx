import styled from 'styled-components';

export const CharacterWrapper = styled.li`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin: 0;
  padding: 10px;
  border-bottom: 1px solid #333;
  font-size: 13px;
  font-family: 'Arial', sans-serif;

  &:last-child {
    border-bottom: none;
  }

  p {
    margin: 0;
  }
`;
