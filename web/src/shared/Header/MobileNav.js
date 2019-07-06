import React from 'react';
import styled from 'styled-components';

import SearchForm from './searchForm';
import Link from './Link';
import { Container } from '../ui/layout';
import rem from '../ui/utils/rem';
import { Absolute } from '../ui/components';
import { useNavContext } from '../../context/NavContextProvider';
import ShoppingCartIcon from './ShoppingCartIcon';
import { useUserContext } from '../../context/UserContextProvider';
import UserDropDown from './UserDropDown';

const NavButtonHandlerWrapper = styled('div')`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  margin-right: ${rem(22)};
  margin-left: ${rem(15)};

  > span {
    &,
    &::before,
    &::after {
      display: block;
      background: #fff;
      width: ${rem(30)};
      height: 2px;
      border-radius: 2px;
      position: relative;
    }

    &::after,
    &::before {
      content: ' ';
      position: absolute;
    }

    &::before {
      bottom: 7px;
    }

    &::after {
      top: 7px;
    }
  }
`;

const MobNavWrapper = styled(Container)`
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0 1rem;
  margin-bottom: 1rem;
  > a {
    margin: 0;
  }
`;

const MobNav = ({ children }) => {
  const { setIsMobNavOpen, isMobNavOpen } = useNavContext();
  const navRef = React.createRef();

  const closeMobNav = (event) => {
    if (navRef.current) {
      if (
        event.target !== navRef.current
        && !navRef.current.contains(event.target)
        && isMobNavOpen
      ) {
        setIsMobNavOpen(false);
      }
    }
  };

  React.useEffect(
    () => {
      window.addEventListener('click', closeMobNav.bind(this));

      return () => window.removeEventListener('click', closeMobNav.bind(this));
    },
    [isMobNavOpen],
  );

  return <Wrapper ref={navRef}>{children}</Wrapper>;
};

const Wrapper = styled('div')`
  background: ${({ theme }) => theme.colors.yellow};
  position: absolute;
  left: 0;
  top: 100%;
  width: 100%;
  font-size: 1.2rem;
  text-align: left;
`;

const SearchFormWrapper = styled('div')`
  flex: 1;
  width: 100%;
  form input {
    width: 100%;
    margin-bottom: ${rem(10)};
  }
`;

const NavItemsWrapper = styled(Container)`
  flex-direction: column;
  a {
    margin: ${rem(5)} 0;
  }
`;

export default () => {
  const { isMobNavOpen, toggleNav } = useNavContext();
  const { user } = useUserContext();
  return (
    <>
      <Absolute>
        <ShoppingCartIcon size={24} style={{ marginRight: rem(5) }} />
        {user && <UserDropDown />}
        <NavButtonHandlerWrapper isOpen={isMobNavOpen} onClick={toggleNav}>
          <span />
        </NavButtonHandlerWrapper>
      </Absolute>
      {isMobNavOpen ? (
        <MobNav>
          <MobNavWrapper>
            <SearchFormWrapper>
              <SearchForm />
            </SearchFormWrapper>
            <NavItemsWrapper>
              {user ? null : (
                <>
                  <Link to="/login">
                    <span> login </span>
                  </Link>

                  <Link to="/signup">
                    <span> signup </span>
                  </Link>
                </>
              )}
            </NavItemsWrapper>
          </MobNavWrapper>
        </MobNav>
      ) : null}
    </>
  );
};
