import {
  SetStateAction,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

import { HeroesContext } from '../contexts/heroesContext';

interface HeroProps {
  id: string;
  name: string;

  thumbnail: {
    path: string;
    extension: string;
  };
}

interface HeroesListInfo {
  page: number;
  count: number;
  total: number;
  limit: number;
  offset: number;
}

interface HeroesList extends HeroesListInfo {
  results: HeroProps[];
}

interface iRepository {
  findHeroes(findDto?: {
    filters: { nameStartsWith: string };
    page: number;
  }): Promise<HeroesList>;
}

interface UseHeroes extends Omit<HeroesList, 'results'> {
  heroes: HeroProps[];
  // page: number;
  // count: number;
  // total: number;
  // limit: number;
  // offset: number;

  loadHeroes(): void;
  setNameStartsWithFilter(hero: string): void;
  setPage: React.Dispatch<SetStateAction<number>>;

  nameStartsWith: string;
}

const useHeroes = (heroesRepository: iRepository): UseHeroes => {
  const heroesContexts = useContext(HeroesContext);

  if (!heroesContexts) {
    throw new Error('useHeroes must be used within an HeroesProvider.');
  }

  const {
    heroesState,
    nameStartsWithState,
    offsetState,
    limitState,
    totalState,
    countState,
  } = heroesContexts;

  const [heroes, setHeroes] = heroesState;
  const [nameStartsWith, setNameStartsWith] = nameStartsWithState;

  const [offset, setOffset] = offsetState;
  const [limit, setLimit] = limitState;
  const [count, setCount] = countState;
  const [total, setTotal] = totalState;

  const [currentPage, setCurrentPage] = useState(1);

  const page = useMemo(() => Math.trunc(offset / limit) + 1, [limit, offset]);

  const loadHeroes = useCallback(async () => {
    const apiHeroes = await heroesRepository.findHeroes({
      filters: { nameStartsWith },
      page: currentPage,
    });

    setHeroes(apiHeroes.results);
    setOffset(apiHeroes.offset);
    setCount(apiHeroes.count);
    setTotal(apiHeroes.total);
    setLimit(apiHeroes.limit);
  }, [
    heroesRepository,
    nameStartsWith,
    currentPage,
    setCount,
    setHeroes,
    setLimit,
    setOffset,
    setTotal,
  ]);

  const setNameStartsWithFilter = useCallback(
    (searchHeroValue: string) => {
      setNameStartsWith(searchHeroValue);
    },
    [setNameStartsWith],
  );

  const setPage = useCallback(
    (value) => {
      const lastPage = Math.trunc((total - 1) / limit) + 1;
      let cb;

      if (typeof value === 'function') {
        cb = (v: number): number => {
          const newValue = value(v);

          if (newValue <= 0 || newValue > lastPage) {
            return lastPage;
          }

          return newValue;
        };
      } else {
        cb = value;
      }

      if (value <= 0 || value > lastPage) {
        return;
      }
      setCurrentPage(cb);
    },
    [limit, total],
  );

  return {
    heroes,
    nameStartsWith,
    page,
    limit,
    total,
    count,
    offset,
    loadHeroes,
    setNameStartsWithFilter,
    setPage,
  };
};

export default useHeroes;
