import { useCallback, useContext } from 'react';

import IHeroRepository from '../repositories/iHeroesRepository';

import { HeroesContext } from '../contexts/heroesContext';

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
  const heroesContexts = useContext(HeroesContext);

  if (!heroesContexts) {
    throw new Error('useHeroes must be used within an HeroesProvider.');
  }

  const { heroesState, nameStartsWithState } = heroesContexts;

  const [heroes, setHeroes] = heroesState;
  const [nameStartsWith, setNameStartsWith] = nameStartsWithState;

  const loadHeroes = useCallback(async () => {
    const apiHeroes = await heroesRepository.findHeroes({
      filters: { nameStartsWith },
    });

    setHeroes(apiHeroes.results);
  }, [heroesRepository, nameStartsWith, setHeroes]);

  const setNameStartsWithFilter = useCallback(
    (searchHeroValue: string) => {
      setNameStartsWith(searchHeroValue);
    },
    [setNameStartsWith],
  );

  return { heroes, loadHeroes, setNameStartsWithFilter, nameStartsWith };
};

export default useHeroes;
