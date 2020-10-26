/* eslint-disable react/no-danger */
import React, { useCallback, useState } from 'react';

import {
  Container,
  BookThumbnail,
  ReadMore,
  Modal,
  ModalClose,
  ModalThumbnail,
  ModalDetails,
  ModalDescription,
  ModalTitle,
} from './styles';

interface ComicProps {
  title: string;
  issueNumber: number;
  description?: string;
  thumbnail: string;
}

const Comic: React.FC<ComicProps> = ({
  title,
  thumbnail,
  description,
  issueNumber,
}) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowMore = useCallback(() => setShowModal(true), []);

  const handleCloseModal = useCallback(() => {
    setShowModal(false);
  }, []);

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

      <Modal show={showModal}>
        <div>
          <ModalClose>
            <button type="button" onClick={handleCloseModal}>
              fechar
            </button>
          </ModalClose>
          <ModalThumbnail>
            <img src={thumbnail} alt={title} />

            {issueNumber > 0 && (
              <div>
                <p>#{issueNumber}</p>
              </div>
            )}
          </ModalThumbnail>

          <ModalDetails>
            <ModalTitle>
              <p>{title}</p>
            </ModalTitle>

            {description && (
              <ModalDescription>
                <h2>Descrição:</h2>
                <div dangerouslySetInnerHTML={{ __html: description }} />
              </ModalDescription>
            )}
          </ModalDetails>
        </div>
      </Modal>
    </Container>
  );
};

export default Comic;
