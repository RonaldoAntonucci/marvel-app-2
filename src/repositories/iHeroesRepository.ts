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

interface HeroesRepository {
  findHeroes(dto?: iFindHeroesDTO): Promise<HeroProps[]>;

  findHeroByName(name: string): Promise<HeroProps[]>;
}

export default HeroesRepository;
