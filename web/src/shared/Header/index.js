import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { Container } from '../ui/layout';
import { Link } from '../ui/components';
import SearchForm from './searchForm';

const HeaderWrapper = styled(Container)`
  padding: 20px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
`;

const Header = ({ isLoggedIn }) => (
  <HeaderWrapper dir="row" justify="space-between" align="center">
    <Link to="/">
      <span style={{ fontSize: 20, fontWeight: 'bold' }}> TrillStore </span>
    </Link>

    <Container dir="row" justify="space-between" align="center" as="nav">
      <SearchForm />

      {!isLoggedIn ? (
        <>
          <Link to="/login">
            <span> login </span>
          </Link>

          <Link to="/signup">
            <span> signup </span>
          </Link>
        </>
      ) : (
        <span> profile </span>
      )}

      <Link to="/cart">
        <span> Cart </span>
      </Link>
    </Container>
  </HeaderWrapper>
);

const mapStateToProps = ({ authReducer: { isLoggedIn } }) => ({ isLoggedIn });

export default connect(mapStateToProps)(Header);
