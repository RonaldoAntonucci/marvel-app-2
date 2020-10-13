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

  constructor(mApi: AxiosInstance) {
    this.api = mApi;
  }

  async findHeroes(findHeroesDTO?: iFindHeroesDTO): Promise<Data> {
    const params = {
      nameStartsWith:
        findHeroesDTO?.filters?.nameStartsWith === ''
          ? null
          : findHeroesDTO?.filters?.nameStartsWith,
    };

    const response = await this.api.get<iApiResponse>(`characters`, {
      params,
    });

    return response.data.data;
  }

  async findHeroByName(name: string): Promise<Data> {
    const response = await this.api.get<iApiResponse>(`characters`, {
      params: { nameStartsWith: name },
    });

    return response.data.data;
  }
}

export default new HeroRepository(marvelApi);
