import React from 'react';

import { Container, LoadingIcon } from './styles';

interface LoadingProps {
  loading: boolean;
}

const Loading: React.FC<LoadingProps> = ({ loading }) => {
  return (
    <Container loading={loading}>
      <LoadingIcon />
    </Container>
  );
};

export default Loading;
