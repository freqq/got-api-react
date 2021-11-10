import styled from 'styled-components';

export const PaginationWrapper = styled.div`
  padding: 15px 0;
  border-bottom: 1px solid #ccc;
  margin-bottom: 15px;
`;

export const PaginationButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;
`;
