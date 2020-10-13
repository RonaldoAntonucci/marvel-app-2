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
  setNameStartsWithFilter(hero: string): void;
}

const useHeroes = (heroesRepository: IHeroRepository): UseHeroes => {
  const [heroes, setHeroes] = useState<HeroProps[]>([]);
  const [nameStartsWith, setNameStartsWith] = useState('');

  const loadHeroes = useCallback(async () => {
    const apiHeroes = await heroesRepository.findHeroes({
      filters: { nameStartsWith },
    });

    setHeroes(apiHeroes);
  }, [heroesRepository, nameStartsWith]);

  const setNameStartsWithFilter = useCallback((searchHeroValue: string) => {
    setNameStartsWith(searchHeroValue);
  }, []);

  return { heroes, loadHeroes, setNameStartsWithFilter };
};

export default useHeroes;
