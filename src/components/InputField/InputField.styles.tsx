import styled from 'styled-components';

export const InputFieldWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const InputFieldElement = styled.input`
  padding: 10px;
  font-size: 12px;
  border-radius: 4px;
  outline: none;
  background: none;
  border: 1px solid #333;
  width: calc(100% - 20px - 2px);
`;

export const ClearButton = styled.button`
  position: absolute;
  right: 8px;
  top: 11px;
  transition: 0.2s;
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const ClearButtonIcon = styled.img`
  width: 10px;
  height: 10px;
`;
