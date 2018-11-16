import React from 'react';

import { Container } from '../ui/layout';
import { useUserContext } from '../../context/UserContextProvider';
import { useNavContext } from '../../context/NavContextProvider';
import SearchForm from './searchForm';
import MobileNav from './MobileNav';
import { Link } from './Link';

export default () => {
  const { user, setUser } = useUserContext();
  const { isMobileLayout } = useNavContext();

  const renderNavItems = () => {
    if (user) {
      return (
        <>
          {/* eslint-disable-next-line no-underscore-dangle */}
          <Link to={`/profile/${user._id}`}>Profile</Link>
          <Link
            to="/"
            onClick={() => {
              localStorage.removeItem('token');
              localStorage.removeItem('user-data');
              setUser(null);
            }}
          >
            <span> logout </span>
          </Link>
        </>
      );
    }

    return (
      <>
        <Link to="/login">
          <span> login </span>
        </Link>

        <Link to="/signup">
          <span> signup </span>
        </Link>
      </>
    );
  };

  return !isMobileLayout ? (
    <Container align="center">
      <SearchForm />
      {renderNavItems()}
    </Container>
  ) : (
    <MobileNav renderNavItems={renderNavItems} />
  );
};
