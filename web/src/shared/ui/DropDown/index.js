import React, { useState, useContext, useEffect } from 'react';
import { DropDownWrapper, DropDownMenuWrapper, DropDownMenuItemWrapper } from './styles';

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
