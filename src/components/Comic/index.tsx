import React, { useCallback } from 'react';

import { Container, BookThumbnail, ReadMore } from './styles';

interface ComicProps {
  title: string;
  issueNumber: string;
  description?: string;
  thumbnail: string;
}

const Comic: React.FC<ComicProps> = ({ title, thumbnail }) => {
  const handleShowMore = useCallback(() => console.log('show'), []);
  return (
    <Container>
      <BookThumbnail>
        <img src={thumbnail} alt={title} />

        <ReadMore>
          <button type="button" onClick={handleShowMore}>
            Saiba Mais
          </button>
        </ReadMore>
      </BookThumbnail>

      <p>{title}</p>
    </Container>
  );
};

export default Comic;
