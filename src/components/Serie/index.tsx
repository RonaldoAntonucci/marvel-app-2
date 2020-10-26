import React, { useMemo } from 'react';

import { Container, Thumbnail } from './styles';

interface SerieProps {
  title: string;
  description: string;
  creators: string[];
  thumbnail: string;
}

const Serie: React.FC<SerieProps> = ({
  title,
  description,
  creators,
  thumbnail,
}) => {
  const formattedCreators = useMemo(() => creators.slice(0, 3).join(', '), [
    creators,
  ]);

  return (
    <Container>
      <Thumbnail>
        <img src={thumbnail} alt={title} />
      </Thumbnail>
      <p className="title-creators">{title}</p>
      <p
        className="description"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: description }}
      />
      <p className="creators">Criadores:</p>
      <p className="list">{formattedCreators}</p>
    </Container>
  );
};

export default Serie;
