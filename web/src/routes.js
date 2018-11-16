import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import useWidth from './utils/useWidth';
import Header from './shared/Header';
import Home from './modules/Home';
import Signup from './modules/Profile/Signup';
import Login from './modules/Profile/Login';
import Profile from './modules/Profile/Profile';
import PrivateRoute from './utils/PrivateRoute';
import { UserContextProvider } from './context/UserContextProvider';
import { NavContextProvider } from './context/NavContextProvider';

const App = () => {
  const width = useWidth();
  return (
    <BrowserRouter>
      <Switch>
        <NavContextProvider width={width}>
          <UserContextProvider>
            <Header />
            <PrivateRoute exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <PrivateRoute path="/profile/:id" component={Profile} />
          </UserContextProvider>
        </NavContextProvider>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
