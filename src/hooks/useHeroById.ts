import { useEffect, useState, Dispatch, SetStateAction } from 'react';

export interface Comic {
  name: string;
  resourceURI: string;
}

export interface Serie {
  name: string;
  resourceURI: string;
}

interface Hero {
  id: string;
  name: string;
  description: string;

  thumbnail: {
    path: string;
    extension: string;
  };

  comics: {
    available: number;
    collectionURI: string;

    items: Comic[];
  };

  series: {
    available: number;
    collectionURI: string;

    items: Serie[];
  };
}

interface useHeroData {
  hero: Hero | null;
}

interface iRepository {
  findHeroById(heroId: string): Promise<Hero | null>;
}

const useHeroById = (
  heroRepo: iRepository,
  heroId: string,
  setLoading: Dispatch<SetStateAction<boolean>> | null = null,
): useHeroData => {
  const [hero, setHero] = useState<Hero | null>(null);

  useEffect(() => {
    setLoading && setLoading(true);
    heroRepo.findHeroById(heroId).then((heroResponse) => {
      setHero(heroResponse);
      setLoading && setLoading(false);
    });
  }, [heroId, heroRepo, setLoading]);

  return { hero };
};

export default useHeroById;
