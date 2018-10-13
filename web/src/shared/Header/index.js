import React from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';
import { Container } from '../ui/layout';
import { Link } from '../ui/components';
import SearchForm from './searchForm';
import { logout } from '../../store/auth/auth.actions';

const HeaderWrapper = styled(Container)`
  padding: 20px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
`;

const mapStateToProps = ({ authReducer, meReducer }) => ({
  isAuth: authReducer.isLoggedIn,
  data: meReducer.data,
  loading: meReducer.loading,
});

const Header = connect(mapStateToProps)(({
  isAuth, dispatch, data = {}, loading,
}) => (
  <HeaderWrapper dir="row" justify="space-between" align="center">
    <Link to="/">
      <span style={{ fontSize: 20, fontWeight: 'bold' }}> TrillStore </span>
    </Link>

    <Container dir="row" justify="space-between" align="center" as="nav">
      <SearchForm />
      {!isAuth ? (
        <>
          <Link to="/login">
            <span> login </span>
          </Link>

          <Link to="/signup">
            <span> signup </span>
          </Link>
        </>
      ) : (
        <>
          {!loading && (
            <Link to={`/profile/${data._id}`}>
              <span>{data.firstName}</span>
            </Link>
          )}

          <Link to="/" onClick={() => dispatch(logout())}>
            <span> logout </span>
          </Link>
        </>
      )}

      <Link to="/cart">
        <span> Cart </span>
      </Link>
    </Container>
  </HeaderWrapper>
));

export default Header;
