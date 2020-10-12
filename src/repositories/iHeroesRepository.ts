export interface HeroProps {
  id: string;
  name: string;

  thumbnail: {
    path: string;
    extension: string;
  };
}

interface HeroesRepository {
  findHeroes(): Promise<HeroProps[]>;
}

export default HeroesRepository;
