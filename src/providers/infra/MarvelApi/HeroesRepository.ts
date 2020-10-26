import { AxiosInstance } from 'axios';
import IHeroRepository, {
  iFindHeroesDTO,
  iFindHeroesResponse,
  iMetaData,
  iHero,
  iComic,
  iSerie,
  iFindComicsResponse,
  iFindComicsOpts,
  iFindSeriesOpts,
  iFindSeriesResponse,
} from '../../../repositories/iHeroesRepository';

import marvelApi from './api';

interface iApiResponse {
  data: iFindHeroesResponse;
}

interface iFindHeroesApiResponse {
  data: iMetaData & { results: iHero[] };
}

interface iReturnComic extends Omit<iComic, 'thumbnail'> {
  thumbnail: {
    path: string;
    extension: string;
  };
}

interface iFindComicsApiResponse {
  data: iMetaData & { results: iReturnComic[] };
}

interface iApiReturnSerie extends Omit<iSerie, 'thumbnail' | 'creators'> {
  thumbnail: {
    path: string;
    extension: string;
  };

  creators: { items: { name: string }[] };
}

interface iFindSeriesApiResponse {
  data: iMetaData & { results: iApiReturnSerie[] };
}

class HeroRepository implements IHeroRepository {
  private api: AxiosInstance = marvelApi;

  private limit = 10;

  constructor(mApi: AxiosInstance) {
    this.api = mApi;
  }

  async findHeroes(
    findHeroesDTO?: iFindHeroesDTO,
  ): Promise<iFindHeroesResponse> {
    const page = findHeroesDTO?.page || 1;

    const offset = page * this.limit - this.limit;

    const params = {
      nameStartsWith:
        findHeroesDTO?.filters?.nameStartsWith === ''
          ? null
          : findHeroesDTO?.filters?.nameStartsWith,
      limit: this.limit,
      offset,
    };

    const response = await this.api.get<iApiResponse>(`characters`, {
      params,
    });

    return { ...response.data.data, page: Math.trunc(offset / this.limit + 1) };
  }

  async findHeroById(id: string): Promise<iHero> {
    const response = await this.api.get<iFindHeroesApiResponse>(
      `/characters/${id}`,
    );

    return response.data.data.results[0];
  }

  async findComics(
    id: string,
    opts: iFindComicsOpts = { limit: 20 },
  ): Promise<iFindComicsResponse> {
    const page = opts?.page || 1;

    const limit = opts.limit || this.limit;

    const offset = page * limit - limit;

    const response = await this.api.get<iFindComicsApiResponse>(
      `/characters/${id}/comics`,
      { params: { limit, offset } },
    );

    const formattedData = response.data.data.results.map((result) => ({
      ...result,
      thumbnail: `${result.thumbnail.path}.${result.thumbnail.extension}`,
    }));

    return {
      page: 1,
      results: formattedData,
      offset: response.data.data.offset,
      count: response.data.data.count,
      total: response.data.data.total,
      limit: response.data.data.limit,
    };
  }

  async findSeries(
    id: string,
    opts: iFindSeriesOpts = { limit: 20 },
  ): Promise<iFindSeriesResponse> {
    const page = opts?.page || 1;

    const limit = opts.limit || this.limit;

    const offset = page * limit - limit;

    const response = await this.api.get<iFindSeriesApiResponse>(
      `/characters/${id}/comics`,
      { params: { limit, offset } },
    );

    const formattedData = response.data.data.results.map((result) => ({
      ...result,
      thumbnail: `${result.thumbnail.path}.${result.thumbnail.extension}`,
      creators: result.creators.items.map((creator) => creator.name),
    }));

    return {
      page: 1,
      results: formattedData,
      offset: response.data.data.offset,
      count: response.data.data.count,
      total: response.data.data.total,
      limit: response.data.data.limit,
    };
  }
}

export default new HeroRepository(marvelApi);
