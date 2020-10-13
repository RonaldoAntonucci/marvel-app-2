import React, { useEffect } from 'react';

import useHeroes from '../../hooks/useHeroes';
import HeroesRepository from '../../providers/HeroesRepository';

import colors from '../../styles/colors';
import sizes from '../../styles/sizes';

import HeroCard from '../../components/HeroCard';

import { Container, HeroesContainer, HeroesGrid } from './styles';

const Home: React.FC = () => {
  const { loadHeroes, heroes } = useHeroes(HeroesRepository);

  useEffect(() => {
    loadHeroes();
  }, [loadHeroes]);

  return (
    <Container>
      <HeroesContainer>
        <HeroesGrid>
          {heroes.map((item) => (
            <HeroCard
              colors={colors}
              sizes={sizes}
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
