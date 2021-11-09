import styled from 'styled-components';

export const ButtonWrapper = styled.button`
  padding: 10px;
  font-size: 12px;
  border-radius: 4px;
  outline: none;
  background: none;
  border: 1px solid #333;
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    opacity: 1;
    cursor: not-allowed;
  }
`;
