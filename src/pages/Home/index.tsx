import React, { useEffect } from 'react';

import useHeroes from '../../hooks/useHeroes';
import HeroesRepository from '../../providers/HeroesRepository';

const Home: React.FC = () => {
  const { loadHeroes } = useHeroes(HeroesRepository);

  useEffect(() => {
    loadHeroes();
  }, [loadHeroes]);

  return <h1>Home</h1>;
};

export default Home;
