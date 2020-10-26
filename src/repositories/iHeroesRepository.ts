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

    items: { name: string; resourceURI: string }[];
  };
}

export interface IComic {
  id: string;
  title: string;
  issueNumber: number;
  description?: string;

  thumbnail: string;
}

export interface iSerie {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  creators: string[];
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

export interface iFindComicsOpts {
  limit?: number;
  page?: number;
}

export interface iFindComicsResponse extends iInfos {
  page: number;

  results: IComic[];
}

export interface iFindSeriesOpts {
  limit?: number;
  page?: number;
}

export interface iFindSeriesResponse extends iInfos {
  page: number;

  results: iSerie[];
}

interface HeroesRepository {
  findHeroes(dto?: iFindHeroesDTO): Promise<Data>;

  findHeroById(id: string): Promise<HeroProps | null>;

  findComics(
    heroId: string,
    opts?: iFindComicsOpts,
  ): Promise<iFindComicsResponse>;

  findSeries(
    heroId: string,
    opts?: iFindSeriesOpts,
  ): Promise<iFindSeriesResponse>;
}

export default HeroesRepository;
