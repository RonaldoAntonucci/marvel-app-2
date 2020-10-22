import React from 'react';

import { Container, BookThumbnail } from './styles';

interface ComicProps {
  title: string;
  issueNumber: string;
  description?: string;
  thumbnail: string;
}

const Comic: React.FC<ComicProps> = ({ title, thumbnail }) => {
  return (
    <Container>
      <BookThumbnail>
        <img src={thumbnail} alt={title} />
      </BookThumbnail>

      <p>{title}</p>
    </Container>
  );
};

export default Comic;
