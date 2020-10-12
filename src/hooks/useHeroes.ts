import { useCallback, useState } from 'react';

import IHeroRepository from '../repositories/iHeroesRepository';

interface HeroProps {
  id: string;
  name: string;

  thumbnail: {
    path: string;
    extension: string;
  };
}

interface UseHeroes {
  heroes: HeroProps[];

  loadHeroes(): void;
}

const useHeroes = (heroesRepository: IHeroRepository): UseHeroes => {
  const [heroes, setHeroes] = useState<HeroProps[]>([]);

  const loadHeroes = useCallback(async () => {
    const heroesResponse = await heroesRepository.findHeroes();

    setHeroes(heroesResponse);
  }, [heroesRepository]);

  return { heroes, loadHeroes };
};

export default useHeroes;
