import { SetStateAction, useCallback, useContext } from 'react';

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
  setPage: React.Dispatch<SetStateAction<number>>;

  nameStartsWith: string;
}

const useHeroes = (heroesRepository: IHeroRepository): UseHeroes => {
  const heroesContexts = useContext(HeroesContext);

  if (!heroesContexts) {
    throw new Error('useHeroes must be used within an HeroesProvider.');
  }

  const { heroesState, nameStartsWithState, pageState } = heroesContexts;

  const [heroes, setHeroes] = heroesState;
  const [nameStartsWith, setNameStartsWith] = nameStartsWithState;
  const [page, setPage] = pageState;

  const loadHeroes = useCallback(async () => {
    const apiHeroes = await heroesRepository.findHeroes({
      filters: { nameStartsWith },
      page,
    });

    setHeroes(apiHeroes.results);
    setPage(apiHeroes.page);
  }, [heroesRepository, nameStartsWith, page, setHeroes, setPage]);

  const setNameStartsWithFilter = useCallback(
    (searchHeroValue: string) => {
      setNameStartsWith(searchHeroValue);
    },
    [setNameStartsWith],
  );

  return {
    heroes,
    nameStartsWith,
    loadHeroes,
    setNameStartsWithFilter,
    setPage,
  };
};

export default useHeroes;
