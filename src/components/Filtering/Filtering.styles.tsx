import styled from 'styled-components';

export const FilteringWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  @media (max-width: 500px) {
    gap: 10px;
  }
`;
