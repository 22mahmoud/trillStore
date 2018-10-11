import React from 'react';
import styled from 'styled-components';

import { Container } from '../ui/layout';
import { Link } from '../ui/components';
import SearchForm from './searchForm';

const HeaderWrapper = styled(Container)`
  padding: 20px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
`;

const Header = () => (
  <HeaderWrapper dir="row" justify="space-between" align="center">
    <Link to="/">
      <span style={{ fontSize: 20, fontWeight: 'bold' }}> TrillStore </span>
    </Link>

    <Container as="nav">
      <SearchForm />

      <Link to="/profile">
        <span> login/signup </span>
      </Link>

      <Link to="/cart">
        <span> Cart </span>
      </Link>
    </Container>
  </HeaderWrapper>
);

export default Header;
