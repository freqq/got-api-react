import styled from 'styled-components';

export const EmptyListWrapper = styled.div`
  width: 60%;
  margin: 20px auto;
  text-align: center;
`;

export const EmptyListIcon = styled.img`
  margin: 10px 0;

  @media (max-width: 500px) {
    margin: 5px 0;
  }
`;

export const EmptyListHeader = styled.h2`
  font-weight: bold;
  font-size: 24px;
  margin: 0 0 5px 0;

  @media (max-width: 500px) {
    font-size: 16px;
  }
`;

export const EmptyListSubHeader = styled.h3`
  font-weight: normal;
  font-size: 16px;
  margin: 0;

  @media (max-width: 500px) {
    font-size: 13px;
  }
`;
