import { createGlobalStyle } from "./theme/styled-components";

const styled = {
  createGlobalStyle
};

export const GlobalStyle = styled.createGlobalStyle`
  html,
  body {
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
    margin: 0;
    padding: 0;
    font-size: 16px;
    
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  h1 {
    font-size: 2em;
  }
  h2 {
    font-size: 1.5em;
  }
  h3 {
    font-size: 1.17em;
  }
  h4 {
    font-size: 1.12em;
  }
  h5 {
    font-size: 0.83em;
  }
  h6 {
    font-size: 0.75em;
  }
`;
