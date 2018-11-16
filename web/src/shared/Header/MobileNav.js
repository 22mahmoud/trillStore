import React from 'react';
import styled from 'styled-components';
import SearchForm from './searchForm';
import { Container } from '../ui/layout';
import rem from '../ui/utils/rem';
import { useNavContext } from '../../context/NavContextProvider';

const NavButtonHandlerWrapper = styled('div')`
  position: absolute;
  top: 0;
  right: 0;
  margin-left: 1em;
  height: 100%;
  display: flex;
  align-items: center;
  margin-right: ${rem(22)};

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

const Wrapper = styled('div')`
  background: #1b253e;
  position: absolute;
  min-height: 100vh;
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

export default ({ renderNavItems }) => {
  const WrapperRef = React.createRef();
  const { isMobNavOpen, toggleNav } = useNavContext();

  return (
    <>
      <NavButtonHandlerWrapper isOpen={isMobNavOpen} onClick={toggleNav}>
        <span />
      </NavButtonHandlerWrapper>
      {isMobNavOpen ? (
        <Wrapper ref={WrapperRef}>
          <MobNavWrapper>
            <SearchFormWrapper>
              <SearchForm />
            </SearchFormWrapper>
            <NavItemsWrapper>{renderNavItems()}</NavItemsWrapper>
          </MobNavWrapper>
        </Wrapper>
      ) : null}
    </>
  );
};
