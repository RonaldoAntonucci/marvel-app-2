import React from 'react';
import { useParams } from 'react-router-dom';

import { HiOutlineBookOpen } from 'react-icons/hi';
import { BiCameraMovie } from 'react-icons/bi';

import HeroRepository from '../../providers/HeroesRepository';
import useHeroById from '../../hooks/useHeroById';
import useComics from '../../hooks/useComics';

import Comic from '../../components/Comic';
import Pagination from '../../components/Pagination';

import {
  Container,
  HeroDetailsContainer,
  Thumbnail,
  HeroInfo,
  HeroInfoCard,
  Content,
  Flex,
  ComicsContainer,
  SeriesContainer,
} from './styles';

interface CharactersParams {
  id: string;
}

const Characters: React.FC = () => {
  const { id } = useParams<CharactersParams>();

  const { hero } = useHeroById(HeroRepository, id);
  const {
    comics,
    page: comicsPage,
    limit: comicsLimit,
    total: comicsTotal,
    setPage: setComicsPage,
  } = useComics(HeroRepository, id);

  return (
    <Container>
      <HeroDetailsContainer>
        <div>
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
        </div>
      </HeroDetailsContainer>

      <Content>
        <Flex>
          <div>
            <ComicsContainer>
              <div>
                <HiOutlineBookOpen size="34" />
                <h2>Quadrinhos</h2>
              </div>

              <ul>
                {comics.map((comic) => (
                  <Comic
                    key={comic.id}
                    thumbnail={comic.thumbnail}
                    title={comic.title}
                    issueNumber={comic.issueNumber}
                    description={comic.description}
                  />
                ))}
              </ul>
              <Pagination
                page={comicsPage}
                limit={comicsLimit}
                total={comicsTotal}
                handlePage={setComicsPage}
              />
            </ComicsContainer>

            <SeriesContainer>
              <div>
                <BiCameraMovie size="34" />
                <h2>Series</h2>
              </div>

              <ul>
                {comics.map((comic) => (
                  <Comic
                    key={comic.id}
                    thumbnail={comic.thumbnail}
                    title={comic.title}
                    issueNumber={comic.issueNumber}
                    description={comic.description}
                  />
                ))}
              </ul>
            </SeriesContainer>
          </div>
        </Flex>
      </Content>
    </Container>
  );
};

export default Characters;
