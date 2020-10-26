import { useEffect, useState } from 'react';

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

const useHeroById = (heroRepo: iRepository, heroId: string): useHeroData => {
  const [hero, setHero] = useState<Hero | null>(null);

  useEffect(() => {
    heroRepo.findHeroById(heroId).then((heroResponse) => {
      setHero(heroResponse);
    });
  }, [heroId, heroRepo]);

  return { hero };
};

export default useHeroById;
