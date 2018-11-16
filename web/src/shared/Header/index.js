import React from 'react';
import styled from 'styled-components';

import { Link } from './Link';
import Nav from './Nav';
import rem from '../ui/utils/rem';
import { Container } from '../ui/layout';

const HeaderWrapper = styled(Container)`
  padding: ${rem(20)};
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px ${rem(2)} ${rem(50)} rgba(0, 0, 0, 0.1);
  background: #1b253e;
  position: relative;
`;

const Header = () => (
  <HeaderWrapper>
    <Link to="/">
      <span style={{ fontSize: 20, fontWeight: 'bold' }}> TrillStore </span>
    </Link>
    <Nav />
  </HeaderWrapper>
);

export default Header;
