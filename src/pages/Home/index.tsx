import React, { useEffect } from 'react';

import useHeroes from '../../hooks/useHeroes';
import HeroesRepository from '../../providers/HeroesRepository';

import HeroCard from '../../components/HeroCard';

import { Container, HeroesContainer, HeroesGrid } from './styles';

const Home: React.FC = () => {
  const { loadHeroes, heroes, nameStartsWith } = useHeroes(HeroesRepository);

  useEffect(() => {
    loadHeroes();
  }, [loadHeroes, nameStartsWith]);

  return (
    <Container>
      <HeroesContainer>
        <HeroesGrid>
          {heroes.map((item) => (
            <HeroCard
              key={item.id}
              image={`${item.thumbnail.path}.${item.thumbnail.extension}`}
              name={item.name}
              link={`/characters/${item.id}`}
            />
          ))}
        </HeroesGrid>
      </HeroesContainer>
    </Container>
  );
};

export default Home;
