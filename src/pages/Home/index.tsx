import React, { useEffect } from 'react';

import useHeroes from '../../hooks/useHeroes';
import HeroesRepository from '../../providers/HeroesRepository';

import HeroCard from '../../components/HeroCard';
import Pagination from '../../components/Pagination';

import { Container, HeroesContainer, HeroesGrid } from './styles';
import useLoading from '../../hooks/useLoading';

const Home: React.FC = () => {
  const { setLoading } = useLoading();

  const {
    loadHeroes,
    heroes,
    nameStartsWith,
    page,
    setPage,
    total,
    limit,
  } = useHeroes(HeroesRepository, setLoading);

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
        <Pagination
          page={page}
          handlePage={setPage}
          total={total}
          limit={limit}
        />
      </HeroesContainer>
    </Container>
  );
};

export default Home;
