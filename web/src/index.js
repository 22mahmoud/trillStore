import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';

import { store, history } from './store';

import App from './routes';
import registerServiceWorker from './registerServiceWorker';

const app = (
  <Provider store={store}>
    {/* <PersistGate persistor={persistor} loading={null}> */}
    <App history={history} />
    {/* </PersistGate> */}
  </Provider>
);

ReactDOM.render(app, document.getElementById('root')); // eslint-disable-line no-undef
registerServiceWorker();
