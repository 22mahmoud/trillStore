import React from 'react';
import styled, { css } from 'styled-components';

import Nav from './Nav';
import rem from '../ui/utils/rem';
import { Container } from '../ui/layout';
import { Relative } from '../ui/components';
import Link from './Link';

const HeaderWrapper = styled(Container)`
  padding: ${rem(20)};
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px ${rem(2)} ${rem(50)} rgba(255, 199, 0, 0.4);
  ${({ theme }) => css`
    background: ${theme.colors.yellow};
  `};
`;

const Header = () => (
  <Relative>
    <HeaderWrapper>
      <Link to="/">
        <span style={{ fontSize: 20, fontWeight: 'bold' }}> @TrillStore </span>
      </Link>
      <Nav />
    </HeaderWrapper>
  </Relative>
);

export default Header;
