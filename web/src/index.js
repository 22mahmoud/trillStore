import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';

import { store, history } from './store';

import App from './routes';
import registerServiceWorker from './registerServiceWorker';

const GlobalStyle = createGlobalStyle`
  *,** {
    box-sizing: border-box;
  }

  body, html {
    padding: 0;
    margin: 0;
    font-family: "Assistant", sans-serif;
  }
`;

const app = (
  <Provider store={store}>
    <>
      <GlobalStyle />
      <App history={history} />
    </>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root')); // eslint-disable-line no-undef
registerServiceWorker();
