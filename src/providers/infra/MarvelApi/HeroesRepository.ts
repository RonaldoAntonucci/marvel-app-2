import { AxiosInstance } from 'axios';
import IHeroRepository, {
  HeroProps,
  iFindHeroesDTO,
} from '../../../repositories/iHeroesRepository';

import marvelApi from './api';

interface iApiResponse {
  data: {
    results: HeroProps[];
  };
}

class HeroRepository implements IHeroRepository {
  private api: AxiosInstance = marvelApi;

  constructor(mApi: AxiosInstance) {
    this.api = mApi;
  }

  async findHeroes(findHeroesDTO?: iFindHeroesDTO): Promise<HeroProps[]> {
    const params = {
      nameStartsWith:
        findHeroesDTO?.filters?.nameStartsWith === ''
          ? null
          : findHeroesDTO?.filters?.nameStartsWith,
    };

    const response = await this.api.get<iApiResponse>(`characters`, {
      params,
    });

    return response.data.data.results;
  }

  async findHeroByName(name: string): Promise<HeroProps[]> {
    const response = await this.api.get<iApiResponse>(`characters`, {
      params: { nameStartsWith: name },
    });

    return response.data.data.results;
  }
}

export default new HeroRepository(marvelApi);
