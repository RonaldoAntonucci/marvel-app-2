import styled from 'styled-components';

interface ModalProps {
  show: boolean;
}

export const BookThumbnail = styled.div`
  display: block;
  width: 100%;
  max-width: 150px;
  height: 220px;
  position: relative;
  background: white;
  z-index: 1;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 9px 20px 0 rgba(0, 0, 0, 0.25);
  overflow: hidden;
  -webkit-transition: box-shadow 0.3s linear;
  transition: box-shadow 0.3s linear;
  margin: 0 auto;

  img {
    width: inherit;
    height: inherit;
    -webkit-transform-origin: 0 50%;
    transform-origin: 0 50%;
    -webkit-transform: rotateY(0);
    transform: rotateY(0);
    -webkit-transition: all 0.45s ease;
    transition: all 0.45s ease;
  }

  &,
  & img,
  &::after,
  &::before {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  &::after,
  &::before {
    content: '';
    display: block;
    width: inherit;
    height: inherit;
    position: absolute;
    z-index: -1;
    top: 0;
    background: white;
    border: 1px solid #d9d9d9;
  }

  &::before {
    left: -3px;
  }

  &::after {
    left: -6px;
  }
`;

export const ReadMore = styled.div`
  position: absolute;
  bottom: 10px;

  left: 0;

  opacity: 0;
  visibility: hidden;
  transform: translate3d(0, 50px, 0);

  width: 100%;
  text-align: center;

  button {
    padding: 10px 15px;
    background: ${(props) => props.theme.colors.red};
    color: white;
    cursor: pointer;
    border: 0;
    border-radius: 8px;

    text-transform: uppercase;
    font-size: 0.75rem;
    letter-spacing: 2px;
    font-weight: bold;

    outline: 0;
    -webkit-transform: rotateY(-25deg);
    transform: rotateY(-25deg);
    box-shadow: 1px 1px 5px 5px rgba(0, 0, 0, 0.2);

    transition: 0.5s all ease;

    &:hover {
      background: ${(props) => props.theme.colors.grey};
    }
  }
`;

export const Container = styled.div`
  display: inline-block;
  margin-bottom: 1rem;

  text-align: center;

  p {
    margin-top: 1rem;
  }

  &:hover {
    > p {
      color: ${(props) => props.theme.colors.red};
    }

    ${BookThumbnail} {
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25),
        0 9px 20px 0 rgba(0, 0, 0, 0.45);

      img {
        -webkit-transform: rotateY(-25deg);
        transform: rotateY(-25deg);
        box-shadow: 1px 1px 5px 5px rgba(0, 0, 0, 0.2);
      }
    }

    ${ReadMore} {
      opacity: 1;
      visibility: visible;
      transition: 0.3s;
      transform: translate3d(0px, 0, 0);
      bottom: 10px;
    }
  }
`;

export const Modal = styled.div<ModalProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 99;

  display: ${(props) => (props.show ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;

  padding: 15px;

  > div {
    position: relative;
    background: white;
    border-radius: 8px;
    padding: 20px;

    background: white;
    border-radius: 8px;

    padding: 20px;

    width: 100%;
    height: auto;
    max-height: 500px;
    overflow: hidden;
    overflow-y: scroll;

    @media (min-width: ${(props) => props.theme.sizes.SM}) {
      max-height: 700px;
      overflow-y: hidden;
    }

    @media (min-width: ${(props) => props.theme.sizes.MD}) {
      max-width: 600px;
      display: flex;
      flex-wrap: wrap;
    }
  }
`;

export const ModalClose = styled.div`
  position: absolute;
  right: 0;
  top: 0;

  button {
    padding: 10px;
    border: 0;
    background: transparent;
    cursor: pointer;
    outline: 0;

    font-weight: bold;
    color: ${(props) => props.theme.colors.red};
  }
`;

export const ModalThumbnail = styled.div`
  width: 200px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  margin-top: 2rem;

  img {
    max-width: 100%;
    height: auto;
  }

  > div {
    position: absolute;
    top: -6px;
    right: -11px;

    p {
      width: 40px;
      height: 40px;

      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 50%;
      color: white;
      background: ${(props) => props.theme.colors.red};
    }
  }

  @media (min-width: ${(props) => props.theme.sizes.MD}) {
    width: 30%;
    margin-top: 0;
    margin-bottom: 1rem;

    img {
      max-width: 100%;
      height: auto;
    }
  }
`;

export const ModalDetails = styled.div`
  @media (min-width: ${(props) => props.theme.sizes.MD}) {
    width: 70%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

export const ModalTitle = styled.div`
  width: 100%;
  margin-top: 1rem;

  p {
    font-weight: bold;
    font-size: 1.125rem;
  }
`;

export const ModalDescription = styled.div`
  width: 100%;

  h2 {
    font-size: 1.125rem;
    color: ${(props) => props.theme.colors.red};
    margin-bottom: 1rem;
  }
`;
