import styled from 'styled-components';

export const FilterWrapper = styled.div`
  display: flex;
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
  margin-bottom: 10px;

  @media (max-width: 650px) {
    display: grid;
  }
`;
