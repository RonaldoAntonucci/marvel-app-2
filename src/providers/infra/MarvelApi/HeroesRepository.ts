import { AxiosInstance } from 'axios';
import IHeroRepository, {
  iFindHeroesDTO,
  Data,
  iInfos,
  HeroProps,
  IComic,
} from '../../../repositories/iHeroesRepository';

import marvelApi from './api';

interface iApiResponse {
  data: Data;
}

interface iFindHeroesResponse {
  data: iInfos & { results: HeroProps[] };
}

interface iReturnComic extends Omit<IComic, 'thumbnail'> {
  thumbnail: {
    path: string;
    extension: string;
  };
}

interface iFindComicsResponse {
  data: iInfos & { results: iReturnComic[] };
}

class HeroRepository implements IHeroRepository {
  private api: AxiosInstance = marvelApi;

  private limit = 10;

  constructor(mApi: AxiosInstance) {
    this.api = mApi;
  }

  async findHeroes(findHeroesDTO?: iFindHeroesDTO): Promise<Data> {
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

  async findHeroById(id: string): Promise<HeroProps> {
    const response = await this.api.get<iFindHeroesResponse>(
      `/characters/${id}`,
    );

    return response.data.data.results[0];
  }

  async findComics(id: string): Promise<IComic[]> {
    const response = await this.api.get<iFindComicsResponse>(
      `/characters/${id}/comics`,
    );

    const formattedData = response.data.data.results.map((result) => ({
      ...result,
      thumbnail: `${result.thumbnail.path}.${result.thumbnail.extension}`,
    }));

    return formattedData;
  }
}

export default new HeroRepository(marvelApi);
