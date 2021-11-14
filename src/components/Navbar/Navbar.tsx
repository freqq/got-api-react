import gotLogo from 'assets/got_logo.svg';

import { NavbarWrapper, NavbarLogo } from 'components/Navbar/Navbar.styles';

const Navbar = () => (
  <NavbarWrapper>
    <NavbarLogo src={gotLogo} alt="got-logo" />
  </NavbarWrapper>
);

export default Navbar;
