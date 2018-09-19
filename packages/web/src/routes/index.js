import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { ThemeProvider } from '@trillstore/ui';

import Home from './home';
import Profile from './profile';

const App = ({ history }) => (
  <ConnectedRouter history={history}>
    <div>
      <ThemeProvider>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/profile" component={Profile} />
          <Route render={() => <div>Miss</div>} />
        </Switch>
      </ThemeProvider>
    </div>
  </ConnectedRouter>
);

export default App;
