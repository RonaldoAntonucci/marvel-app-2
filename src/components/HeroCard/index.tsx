import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Thumbnail, Title, SizesProps, ColorsProps } from './styles';

interface HeroCardProps {
  image: string;
  name: string;
  link: string;
}

const HeroCard: React.FC<HeroCardProps & SizesProps & ColorsProps> = ({
  image,
  name,
  link,
  colors,
  sizes,
}) => {
  return (
    <Container colors={colors} sizes={sizes}>
      <Link to={link}>
        <Thumbnail>
          <img src={image} alt={name} />
        </Thumbnail>
        <figcaption>
          <Title colors={colors}>
            <span>{name}</span>
          </Title>
        </figcaption>
      </Link>
    </Container>
  );
};

export default HeroCard;
