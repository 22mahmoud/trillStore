import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';

import resetCss from './reset.css';
import App from './routes';
import registerServiceWorker from './registerServiceWorker';

const GlobalStyle = createGlobalStyle`${resetCss}`;

const app = (
  <>
    <GlobalStyle />
    <App />
  </>
);

ReactDOM.render(app, document.getElementById('root')); // eslint-disable-line no-undef
registerServiceWorker();
