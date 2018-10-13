import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import Header from './shared/Header';
import Home from './modules/Home';
import Signup from './modules/Profile/Signup';
import Login from './modules/Profile/Login';
import Profile from './modules/Profile/Profile';
import PrivateRoute from './utils/privateRoute';

const App = ({ history }) => (
  <ConnectedRouter history={history}>
    <Switch>
      <>
        <Header />
        <PrivateRoute exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <PrivateRoute exact path="/profile/:id" component={Profile} />
      </>
    </Switch>
  </ConnectedRouter>
);

export default connect(state => ({
  location: state.router.location.pathname,
}))(App);
