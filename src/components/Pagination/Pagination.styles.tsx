import styled from 'styled-components';

export const PaginationWrapper = styled.div`
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
