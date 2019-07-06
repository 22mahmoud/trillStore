import React from 'react';

import { Container } from '../ui/layout';
import Link from './Link';
import { useUserContext } from '../../context/UserContextProvider';
import useWidth from '../../utils/useWidth';
import SearchForm from './searchForm';
import MobileNav from './MobileNav';
import ShoppingCartIcon from './ShoppingCartIcon';
import rem from '../ui/utils/rem';
import UserDropDown from './UserDropDown';

export default () => {
  const { user } = useUserContext();
  const width = useWidth();

  return width > 1000 ? (
    <Container align="center">
      <SearchForm />
      <div style={{ margin: `0 ${rem(10)}`, cursor: 'pointer' }}>
        <ShoppingCartIcon />
      </div>
      {user ? (
        <UserDropDown />
      ) : (
        <Container>
          <Link to="/login">
            <span> login </span>
          </Link>

          <Link to="/signup">
            <span> signup </span>
          </Link>
        </Container>
      )}
    </Container>
  ) : (
    <MobileNav />
  );
};
