import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import resetCss from './reset.css';
import App from './routes';
import registerServiceWorker from './registerServiceWorker';

const GlobalStyle = createGlobalStyle`${resetCss}`;

const theme = {
  colors: {
    yellow: '#FFC700',
    gray: '#F7F7F7',
    darkGray: '#bdbdbd',
  },
};

const Root = () => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <App />
    </>
  </ThemeProvider>
);

ReactDOM.render(<Root />, document.getElementById('root')); // eslint-disable-line no-undef
registerServiceWorker();
