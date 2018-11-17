import React, { useState, useContext, useEffect } from 'react';

const NavContext = React.createContext(null);

export const useNavContext = () => useContext(NavContext);

export const NavContextProvider = ({ children, width }) => {
  const [isMobNavOpen, setIsMobNavOpen] = useState(false);
  const navRef = React.createRef();

  function toggleNav() {
    setIsMobNavOpen(!isMobNavOpen);
  }

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

  useEffect(
    () => {
      window.addEventListener('click', closeMobNav.bind(this));

      return () => window.removeEventListener('click', closeMobNav.bind(this));
    },
    [isMobNavOpen],
  );

  const ctx = {
    isMobNavOpen,
    setIsMobNavOpen,
    toggleNav,
    width,
    isMobileLayout: width < 1000,
  };

  return <NavContext.Provider value={ctx}>{children}</NavContext.Provider>;
};
