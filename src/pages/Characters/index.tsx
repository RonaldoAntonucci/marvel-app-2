import React from 'react';
import { useParams } from 'react-router-dom';

import { HiOutlineBookOpen } from 'react-icons/hi';
import { BiCameraMovie } from 'react-icons/bi';

import HeroRepository from '../../providers/HeroesRepository';
import useHeroById from '../../hooks/useHeroById';

import {
  Container,
  HeroDetailsContainer,
  Thumbnail,
  HeroInfo,
  HeroInfoCard,
} from './styles';

interface CharactersParams {
  id: string;
}

const Characters: React.FC = () => {
  const { id } = useParams<CharactersParams>();

  const { hero } = useHeroById(HeroRepository, id);

  return (
    <Container>
      <HeroDetailsContainer>
        <Thumbnail>
          {hero && hero.thumbnail && (
            <img
              src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
              alt={hero.name}
            />
          )}
        </Thumbnail>

        <HeroInfo>
          <h2>{hero?.name}</h2>
          <p>{hero?.description} </p>

          <hr />

          <HeroInfoCard>
            {hero?.comics && (
              <div>
                <HiOutlineBookOpen size="24" />
                <p>
                  <strong>Quadrinhos</strong>
                </p>

                <span>{hero.comics.available} </span>
              </div>
            )}

            {hero?.series && (
              <div>
                <BiCameraMovie size="24" />
                <p>
                  <strong>Series</strong>
                </p>

                <span>{hero.series.available} </span>
              </div>
            )}
          </HeroInfoCard>
        </HeroInfo>
      </HeroDetailsContainer>
    </Container>
  );
};

export default Characters;
