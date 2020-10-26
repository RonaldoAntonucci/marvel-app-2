import React, { SetStateAction, useCallback, useMemo } from 'react';

import { Container, Button, PageNumbersButtons } from './styles';

interface PaginationProps {
  page: number;
  total: number;
  limit: number;
  size?: 'small' | 'normal';

  handlePage: React.Dispatch<SetStateAction<number>>;
}

const Pagination: React.FC<PaginationProps> = ({
  page,
  total,
  limit,
  size = 'normal',
  handlePage,
}) => {
  const lastPage = useMemo(() => Math.trunc((total - 1) / limit) + 1, [
    limit,
    total,
  ]);

  const handleNextPage = useCallback(() => {
    handlePage((prevPage) => prevPage + 1);
  }, [handlePage]);

  const handlePreviousPage = useCallback(() => {
    if (page <= 1) {
      return;
    }
    handlePage((prevPage) => prevPage - 1);
  }, [handlePage, page]);

  const handleFirstPage = useCallback(() => {
    handlePage(1);
  }, [handlePage]);

  const handleLastPage = useCallback(() => {
    handlePage(lastPage);
  }, [handlePage, lastPage]);

  return (
    <Container>
      <Button disable={page <= 1} name="prev" onClick={handlePreviousPage}>
        Anterior
      </Button>

      <div>
        <PageNumbersButtons inactive={page <= 1} onClick={handleFirstPage}>
          ...
        </PageNumbersButtons>
        <PageNumbersButtons
          inactive={size === 'small' || page - 1 <= 1}
          onClick={() => handlePage(page - 2)}
        >
          {page - 2}
        </PageNumbersButtons>
        <PageNumbersButtons
          inactive={page <= 1}
          onClick={() => handlePage(page - 1)}
        >
          {page - 1}
        </PageNumbersButtons>
        <PageNumbersButtons name="spotlight">{page}</PageNumbersButtons>
        <PageNumbersButtons
          inactive={page + 1 > lastPage}
          onClick={() => handlePage(page + 1)}
        >
          {page + 1}
        </PageNumbersButtons>
        <PageNumbersButtons
          inactive={size === 'small' || page + 2 > lastPage}
          onClick={() => handlePage(page + 2)}
        >
          {page + 2}
        </PageNumbersButtons>
        <PageNumbersButtons
          onClick={handleLastPage}
          inactive={page >= lastPage}
        >
          ...
        </PageNumbersButtons>
      </div>

      <Button onClick={handleNextPage} name="next" disable={page >= lastPage}>
        Próximo
      </Button>
    </Container>
  );
};

export default Pagination;
