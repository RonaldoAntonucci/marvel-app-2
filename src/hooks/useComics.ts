import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  SetStateAction,
} from 'react';

interface ComicMeta {
  page: number;
  count: number;
  total: number;
  limit: number;
  offset: number;
}

interface Comic {
  id: string;
  title: string;
  issueNumber: number;
  description?: string;

  thumbnail: string;
}

interface useComicsData extends ComicMeta {
  comics: Comic[];
  lastPage: number;

  setPage: React.Dispatch<SetStateAction<number>>;
}

interface iRepository {
  findComics(
    heroId: string,
    opts: { limit: number; page: number },
  ): Promise<{ page: number; results: Comic[] } & ComicMeta>;
}

const useComics = (repository: iRepository, heroId: string): useComicsData => {
  const [comics, setComics] = useState<Comic[]>([]);
  const [count, setCount] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  const [limit, setLimit] = useState<number>(8);
  const [offset, setOffset] = useState<number>(0);

  const [currentPage, setCurrentPage] = useState<number>(1);

  const page = useMemo(() => Math.trunc(offset / limit) + 1 || 1, [
    limit,
    offset,
  ]);

  const lastPage = useMemo(() => Math.trunc((total - 1) / limit) + 1 || 1, [
    limit,
    total,
  ]);

  const setPage = useCallback(
    (value) => {
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
    [lastPage],
  );

  useEffect(() => {
    repository
      .findComics(heroId, { limit: 8, page: currentPage })
      .then((data) => {
        setComics(data.results);
        setCount(data.count);
        setTotal(data.total);
        setLimit(data.limit);
        setOffset(data.offset);
      });
  }, [heroId, repository, currentPage]);

  return { comics, count, total, limit, offset, page, setPage, lastPage };
};

export default useComics;
