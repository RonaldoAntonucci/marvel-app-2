import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import useHeroes from './hooks/useHeroes';
import HeroesRepository from './providers/HeroesRepository';

import GlobalStyle from './styles/global';
import AppProvider from './contexts';
import Routes from './routes';

import Header from './components/Header';

const App: React.FC = () => {
  const { setNameStartsWithFilter } = useHeroes(HeroesRepository);

  return (
    <BrowserRouter>
      <AppProvider>
        <Header onSearch={setNameStartsWithFilter} />
        <Routes />
      </AppProvider>

      <GlobalStyle />
    </BrowserRouter>
  );
};

export default App;
