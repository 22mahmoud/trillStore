import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';

import { Relative } from '../components';

const DropDownWrapper = styled(Relative)`
  color: #fff;
  cursor: pointer;
`;

const DropDownMenuWrapper = styled('ul')`
  position: absolute;
  background: #000;
  box-shadow: 0px 2px 60px rgba(0, 0, 0, 0.1);
  top: 1.1rem;
  right: 0;
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  border-radius: 3px;
  width: 12rem;
  ::before {
    content: ' ';
    position: absolute;
    top: -0.6rem;
    right: 0.6rem;
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 12px solid black;
  }
`;

const DropDownMenuItemWrapper = styled('li')`
  width: 100%;
  list-style: none;
  margin: 0;
  margin-bottom: 0.6rem;
  display: flex;
  & > * {
    font-size: 0.9rem;
  }
`;

const DropDownContext = React.createContext();

export const useDropDown = () => useContext(DropDownContext);

export const DropDown = ({ title, children }) => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const dropDownRef = React.createRef();

  const closeDropDown = (event) => {
    if (dropDownRef.current) {
      if (
        event.target !== dropDownRef.current
        && !dropDownRef.current.contains(event.target)
        && isDropDownOpen
      ) {
        setIsDropDownOpen(false);
      }
    }
  };

  useEffect(
    () => {
      window.addEventListener('click', closeDropDown.bind(this));

      return () => window.removeEventListener('click', closeDropDown.bind(this));
    },
    [isDropDownOpen],
  );

  const toggleDropDownOpen = (event) => {
    event.stopPropagation();
    setIsDropDownOpen(!isDropDownOpen);
  };

  const ctx = {
    isDropDownOpen,
    setIsDropDownOpen,
    toggleDropDownOpen,
  };

  return (
    <DropDownContext.Provider value={ctx}>
      <DropDownWrapper ref={dropDownRef}>
        {/* eslint-disable-next-line  */}
        <span onClick={toggleDropDownOpen}>{title}</span>
        {children}
      </DropDownWrapper>
    </DropDownContext.Provider>
  );
};

export const DropDownMenu = ({ children }) => {
  const { isDropDownOpen } = useDropDown();
  return isDropDownOpen ? <DropDownMenuWrapper>{children}</DropDownMenuWrapper> : null;
};

export const DropDownMenuItem = ({ children }) => {
  const { setIsDropDownOpen } = useDropDown();

  const _children = React.Children.map(children, (elm) => {
    const originalOnClick = elm.props.onClick;
    return React.cloneElement(elm, {
      onClick: () => {
        setIsDropDownOpen(false);
        if (originalOnClick) {
          originalOnClick.apply(elm);
        }
      },
    });
  });
  return <DropDownMenuItemWrapper>{_children}</DropDownMenuItemWrapper>;
};
