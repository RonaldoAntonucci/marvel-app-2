import React from 'react';

import colors from '../styles/colors';
import sizes from '../styles/sizes';

import { ThemeProvider } from './Themes';
import { HeroesProvider } from './heroesContext';

const theme = {
  colors,
  sizes,
};

const AppProvider: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <HeroesProvider>{children}</HeroesProvider>
  </ThemeProvider>
);

export default AppProvider;
