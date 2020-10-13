export interface HeroProps {
  id: string;
  name: string;

  thumbnail: {
    path: string;
    extension: string;
  };
}

export interface iFindHeroesDTO {
  filters?: {
    nameStartsWith?: string;
  };
}

export interface Data {
  offset: number;
  limit: number;
  total: number;
  count: number;

  results: HeroProps[];
}

interface HeroesRepository {
  findHeroes(dto?: iFindHeroesDTO): Promise<Data>;

  findHeroByName(name: string): Promise<Data>;
}

export default HeroesRepository;
