import styled from 'styled-components';

export const Container = styled.div`
  display: inline-block;
  margin-bottom: 1rem;

  text-align: center;

  p {
    margin-top: 1rem;
  }
`;

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
