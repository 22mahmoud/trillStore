import React, { useState, useContext } from 'react';

const NavContext = React.createContext(null);

export const useNavContext = () => useContext(NavContext);

export const NavContextProvider = ({ children, width }) => {
  const [isMobNavOpen, setIsMobNavOpen] = useState(false);

  function toggleNav() {
    setIsMobNavOpen(!isMobNavOpen);
  }

  const ctx = {
    isMobNavOpen,
    setIsMobNavOpen,
    toggleNav,
    width,
    isMobileLayout: width < 1000,
  };

  return <NavContext.Provider value={ctx}>{children}</NavContext.Provider>;
};
