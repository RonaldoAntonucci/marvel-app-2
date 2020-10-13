import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Thumbnail, Title } from './styles';

interface HeroCardProps {
  image: string;
  name: string;
  link: string;
}

const HeroCard: React.FC<HeroCardProps> = ({ image, name, link }) => {
  return (
    <Container>
      <Link to={link}>
        <Thumbnail>
          <img src={image} alt={name} />
        </Thumbnail>
        <figcaption>
          <Title>
            <span>{name}</span>
          </Title>
        </figcaption>
      </Link>
    </Container>
  );
};

export default HeroCard;
