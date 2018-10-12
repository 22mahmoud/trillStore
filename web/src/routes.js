import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import Header from './shared/Header';
import Home from './modules/Home';
import Signup from './modules/Profile/Signup';
import Login from './modules/Profile/Login';

const App = ({ history }) => (
  <ConnectedRouter history={history}>
    <>
      <Switch>
        <Route
          path="/"
          render={() => (
            <>
              <Header />
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
            </>
          )}
        />
      </Switch>
    </>
  </ConnectedRouter>
);

export default App;
