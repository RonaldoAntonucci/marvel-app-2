export interface HeroProps {
  name: string;
}

interface HeroesRepository {
  findHeroes(): Promise<HeroProps[]>;
}

export default HeroesRepository;
