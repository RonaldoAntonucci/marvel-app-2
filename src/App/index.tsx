import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from '../styles/global';
import AppProvider from '../contexts';
import Routes from '../routes';

import Header from './Header';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppProvider>
        <Header />
        <Routes />
      </AppProvider>

      <GlobalStyle />
    </BrowserRouter>
  );
};

export default App;
