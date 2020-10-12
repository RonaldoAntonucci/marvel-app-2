import { AxiosInstance } from 'axios';
import IHeroRepository, {
  HeroProps,
} from '../../../repositories/iHeroesRepository';

import marvelApi from './api';

class HeroRepository implements IHeroRepository {
  private api: AxiosInstance = marvelApi;

  constructor(mApi: AxiosInstance) {
    this.api = mApi;
  }

  async findHeroes(): Promise<HeroProps[]> {
    const response = await this.api.get(`characters`);

    return response.data.data;
  }
}

export default new HeroRepository(marvelApi);
