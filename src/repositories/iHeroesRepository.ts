// Models
export interface iHero {
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

export interface iComic {
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
// DTOS

export interface iFindHeroesDTO {
  filters?: {
    nameStartsWith?: string;
  };
  page?: number;
}

// responses

export interface iMetaData {
  offset: number;
  limit: number;
  total: number;
  count: number;
}

export interface iFindHeroesResponse {
  offset: number;
  limit: number;
  total: number;
  count: number;

  page: number;

  results: iHero[];
}

export interface iFindComicsResponse extends iMetaData {
  page: number;

  results: iComic[];
}

export interface iFindSeriesResponse extends iMetaData {
  page: number;

  results: iSerie[];
}

// options

export interface iFindComicsOpts {
  limit?: number;
  page?: number;
}

export interface iFindSeriesOpts {
  limit?: number;
  page?: number;
}

interface HeroesRepository {
  findHeroes(dto?: iFindHeroesDTO): Promise<iFindHeroesResponse>;

  findHeroById(id: string): Promise<iHero | null>;

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
