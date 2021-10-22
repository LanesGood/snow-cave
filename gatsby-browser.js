import * as React from 'react';
import { ThemeProvider } from "styled-components";
import theme from './src/styles/theme';

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme.main}>
    {element}
  </ThemeProvider>
)