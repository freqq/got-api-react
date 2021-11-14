import styled from 'styled-components';

export const ButtonWrapper = styled.button`
  width: fit-content;
  height: fit-content;
  padding: 8px 15px;
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
    opacity: 0.8;
    cursor: not-allowed;
  }
`;

export const ButtonIconWrapper = styled(ButtonWrapper)`
  border: none;
  padding: 8px;

  &:disabled {
    img {
      opacity: 0.8;
    }
  }
`;

export const ButtonText = styled.p`
  margin: 0;
  font-size: 12px;
`;

export const ButtonIcon = styled.img`
  height: 13px;
  width: 13px;
`;
