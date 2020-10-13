import React from 'react';

import colors from '../styles/colors';
import sizes from '../styles/sizes';

import { ThemeProvider } from './Themes';

const theme = { colors, sizes };

const AppProvider: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default AppProvider;
