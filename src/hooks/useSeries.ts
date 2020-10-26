import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  SetStateAction,
} from 'react';

interface SerieMeta {
  page: number;
  count: number;
  total: number;
  limit: number;
  offset: number;
}

interface Serie {
  id: string;
  title: string;
  issueNumber: string;
  description?: string;

  thumbnail: string;
}

interface useSeriesData extends SerieMeta {
  series: Serie[];
  lastPage: number;

  setPage: React.Dispatch<SetStateAction<number>>;
}

interface iRepository {
  findSeries(
    heroId: string,
    opts: { limit: number; page: number },
  ): Promise<{ page: number; results: Serie[] } & SerieMeta>;
}

const useSeries = (repository: iRepository, heroId: string): useSeriesData => {
  const [series, setSeries] = useState<Serie[]>([]);
  const [count, setCount] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  const [limit, setLimit] = useState<number>(4);
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
      .findSeries(heroId, { limit: 4, page: currentPage })
      .then((data) => {
        setSeries(data.results);
        setCount(data.count);
        setTotal(data.total);
        setLimit(data.limit);
        setOffset(data.offset);
      });
  }, [heroId, repository, currentPage]);

  return { series, count, total, limit, offset, page, setPage, lastPage };
};

export default useSeries;
