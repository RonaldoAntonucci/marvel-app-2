import { useEffect, useState } from 'react';

import IHeroRepository from '../repositories/iHeroesRepository';

export interface Comic {
  name: string;
  resourceURI: string;
}

export interface Serie {
  name: number;
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

const useHeroById = (
  heroRepo: IHeroRepository,
  heroId: string,
): useHeroData => {
  const [hero, setHero] = useState<Hero | null>(null);

  useEffect(() => {
    heroRepo.findHeroById(heroId).then((heroResponse) => {
      setHero(heroResponse);
    });
  }, [heroId, heroRepo]);

  return { hero };
};

export default useHeroById;
