import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import Header from './shared/header';
import Home from './modules/home';
import Profile from './modules/profile';

const App = ({ history }) => (
  <ConnectedRouter history={history}>
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/profile" component={Profile} />
        <Route render={() => <div>Miss</div>} />
      </Switch>
    </>
  </ConnectedRouter>
);

export default App;
