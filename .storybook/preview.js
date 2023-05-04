import { ThemeProvider } from "styled-components";
import React from "react";
import GlobalStyles from "styles/global";
import theme from "styles/theme";

const withGlobalStyle = (storyFn) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles removeBg />
    {storyFn()}
  </ThemeProvider>
);

export const decorators = [withGlobalStyle];
