import React from 'react';

import Loading from '../components/Loading';

import colors from '../styles/colors';
import sizes from '../styles/sizes';

import { ThemeProvider } from './Themes';
import { HeroesProvider } from './heroesContext';
import { LoadingProvider } from './loadingContext';

const theme = {
  colors,
  sizes,
};

const AppProvider: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <LoadingProvider Component={Loading}>
      <HeroesProvider>{children}</HeroesProvider>
    </LoadingProvider>
  </ThemeProvider>
);

export default AppProvider;
