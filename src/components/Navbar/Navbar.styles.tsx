import styled from 'styled-components';

export const NavbarWrapper = styled.nav`
  padding: 15px 0;
  border-bottom: 1px solid #ccc;
  margin-bottom: 15px;
  text-align: center;
`;

export const NavbarLogo = styled.img`
  width: 30%;
  margin: 15px 0;

  @media (max-width: 800px) {
    width: 60%;
  }

  @media (max-width: 400px) {
    width: 80%;
  }
`;
