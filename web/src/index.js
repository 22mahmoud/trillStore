import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';

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

  input {
    border: none;
    
    :focus {
      outline: none;
    }
  }
`;

const app = (
  <>
    <GlobalStyle />
    <App />
  </>
);

ReactDOM.render(app, document.getElementById('root')); // eslint-disable-line no-undef
registerServiceWorker();
