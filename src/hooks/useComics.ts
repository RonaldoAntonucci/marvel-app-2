import { useEffect, useState } from 'react';

interface Comic {
  id: string;
  title: string;
  issueNumber: string;
  description?: string;

  thumbnail: string;
}

interface useComicsData {
  comics: Comic[];
}

interface iRepository {
  findComics(heroId: string): Promise<Comic[]>;
}

const useComics = (repository: iRepository, heroId: string): useComicsData => {
  const [comics, setComics] = useState<Comic[]>([]);

  useEffect(() => {
    repository.findComics(heroId).then((data) => setComics(data));
  }, [heroId, repository]);

  return { comics };
};

export default useComics;
