export interface HeroProps {
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

    items: { name: string; resourceURI: string }[];
  };

  series: {
    available: number;
    collectionURI: string;

    items: Serie[];
  };
}

export interface IComic {
  id: string;
  title: string;
  issueNumber: string;
  description?: string;

  thumbnail: string;
}

export interface Serie {
  name: number;
  resourceURI: string;
}

export interface iFindHeroesDTO {
  filters?: {
    nameStartsWith?: string;
  };
  page?: number;
}

export interface iInfos {
  offset: number;
  limit: number;
  total: number;
  count: number;
}

export interface Data {
  offset: number;
  limit: number;
  total: number;
  count: number;

  page: number;

  results: HeroProps[];
}

interface HeroesRepository {
  findHeroes(dto?: iFindHeroesDTO): Promise<Data>;

  findHeroById(id: string): Promise<HeroProps>;

  findComics(heroId: string): Promise<IComic[]>;
}

export default HeroesRepository;
