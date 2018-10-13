import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';

import App from './routes';

import { me } from './store/me/me.actions';
import { store, history } from './store';
import { AUTH_SUCCESS } from './store/acionTypes';

import registerServiceWorker from './registerServiceWorker';

if (localStorage.getItem('token')) {
  store.dispatch({ type: AUTH_SUCCESS });
  store.dispatch(me());
}

const GlobalStyle = createGlobalStyle`
  *,** {
    box-sizing: border-box;
  }

  body, html {
    padding: 0;
    margin: 0;
    font-family: "Assistant", sans-serif;
  }

  input {
    border: none;
    
    :focus {
      outline: none;
    }
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
