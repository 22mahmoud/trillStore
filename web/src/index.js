import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import reset from 'styled-reset';

import App from './routes';
import registerServiceWorker from './registerServiceWorker';

const GlobalStyle = createGlobalStyle`
  ${reset};
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700');
  html {
    font-size: 16px;
    font-family: 'Open Sans', sans-serif;
  }  
`;

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
