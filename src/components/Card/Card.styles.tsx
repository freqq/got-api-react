import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 20% 1fr;
  gap: 20px;
  padding: 20px 10px;
  border: 1px solid #333;
  border-radius: 5px;
`;

export const CardDetails = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const CardName = styled.h3`
  margin: 0 0 10px 0;
  font-size: 20px;
`;

export const CardValue = styled.h4`
  margin: 0;
  font-size: 13px;
  font-weight: normal;
`;

export const CardIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardIcon = styled.img`
  height: 40px;
  width: 40px;
`;
