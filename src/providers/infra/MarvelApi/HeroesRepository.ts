import { AxiosInstance } from 'axios';
import IHeroRepository, {
  iFindHeroesDTO,
  Data,
} from '../../../repositories/iHeroesRepository';

import marvelApi from './api';

interface iApiResponse {
  data: Data;
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

  async findHeroByName(name: string): Promise<Data> {
    const response = await this.api.get<iApiResponse>(`characters`, {
      params: { nameStartsWith: name },
    });

    return response.data.data;
  }
}

export default new HeroRepository(marvelApi);
