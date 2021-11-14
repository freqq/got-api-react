import styled from 'styled-components';

export const PaginationWrapper = styled.div`
  display: flex;
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
  margin-bottom: 10px;

  @media (max-width: 650px) {
    display: grid;
  }
`;

export const PaginationFilters = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

export const PaginationButtons = styled.div`
  display: flex;
  gap: 0;
  margin-left: auto;
  align-items: center;
  justify-content: center;

  @media (max-width: 650px) {
    margin-left: unset;
    margin-top: 15px;
  }
`;
