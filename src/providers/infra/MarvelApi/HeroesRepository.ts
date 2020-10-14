import { AxiosInstance } from 'axios';
import IHeroRepository, {
  iFindHeroesDTO,
  Data,
  iInfos,
  HeroProps,
} from '../../../repositories/iHeroesRepository';

import marvelApi from './api';

interface iApiResponse {
  data: Data;
}

interface iFindHeroesResponse {
  data: iInfos & { results: HeroProps[] };
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
}

export default new HeroRepository(marvelApi);
