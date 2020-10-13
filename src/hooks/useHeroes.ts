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

  nameStartsWith: string;
}

const useHeroes = (heroesRepository: IHeroRepository): UseHeroes => {
  const [heroes, setHeroes] = useState<HeroProps[]>([]);
  const [nameStartsWith, setNameStartsWith] = useState('');

  const loadHeroes = useCallback(async () => {
    console.log('testando');

    const apiHeroes = await heroesRepository.findHeroes({
      filters: { nameStartsWith },
    });

    setHeroes(apiHeroes);
  }, [heroesRepository, nameStartsWith]);

  const setNameStartsWithFilter = useCallback((searchHeroValue: string) => {
    console.log(searchHeroValue);
    setNameStartsWith(searchHeroValue);
  }, []);

  return { heroes, loadHeroes, setNameStartsWithFilter, nameStartsWith };
};

export default useHeroes;
