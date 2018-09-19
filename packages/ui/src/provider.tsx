import * as React from "react";

import { theme } from "./theme/theme";
import { ThemeProvider as TP } from "./theme/styled-components";
import { GlobalStyle } from "./global";

// import "sanitize.css";

export const ThemeProvider = ({ children }: { children: any }) => {
  return (
    <TP theme={theme}>
      <>
        {children}
        <GlobalStyle />
      </>
    </TP>
  );
};
