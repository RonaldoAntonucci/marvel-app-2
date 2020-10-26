import { useEffect, useState } from 'react';

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
  issueNumber: string;
  description?: string;

  thumbnail: string;
}

interface useComicsData extends ComicMeta {
  comics: Comic[];
}

interface iRepository {
  findComics(
    heroId: string,
    opts: { limit: number },
  ): Promise<{ page: number; results: Comic[] } & ComicMeta>;
}

const useComics = (repository: iRepository, heroId: string): useComicsData => {
  const [comics, setComics] = useState<Comic[]>([]);
  const [count, setCount] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  const [limit, setLimit] = useState<number>(0);
  const [offset, setOffset] = useState<number>(0);

  useEffect(() => {
    repository.findComics(heroId, { limit: 8 }).then((data) => {
      setComics(data.results);
      setCount(data.count);
      setTotal(data.total);
      setLimit(data.limit);
      setOffset(data.offset);
    });
  }, [heroId, repository]);

  return { comics, count, total, limit, offset, page: 1 };
};

export default useComics;
