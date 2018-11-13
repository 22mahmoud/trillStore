import React, { useContext, useState } from 'react';

const UserContext = React.createContext();

export const useUserContext = () => useContext(UserContext);

export const UserContextProvider = React.memo(({ children }) => {
  const userData = () => JSON.parse(localStorage.getItem('user-data')) || null;
  const [user, setUser] = useState(userData);

  const ctx = {
    user,
    setUser,
  };

  return <UserContext.Provider value={ctx}>{children}</UserContext.Provider>;
});
