import styled, { css } from 'styled-components';

export interface SizesProps {
  sizes?: {
    XS?: string;
    SM?: string;
    MD?: string;
    LG?: string;
    XL?: string;
  };
}

export interface ColorsProps {
  colors?: {
    grey?: string;
    red?: string;
  };
}

export const Thumbnail = styled.div`
  position: relative;
  width: 100%;
  height: 188px;
  overflow: hidden;
  box-shadow: 0 7px 17px -8px rgba(0, 0, 0, 0.8);
  border-radius: 5px;

  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);

  img {
    position: absolute;
    left: 50%;
    top: 50%;
    height: 100%;
    width: auto;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
`;

export const Title = styled.div<ColorsProps>`
  width: 100%;

  span {
    font-weight: bold;
    color: ${(props) =>
      props.colors && props.colors.grey ? props.colors.grey : 'grey'};
  }
`;

export const Container = styled.div<SizesProps & ColorsProps>`
  width: 100%;
  cursor: pointer;

  a {
    text-decoration: none;
    outline: 0;
  }

  figcaption {
    width: 100%;
    margin-top: 0.5rem;
    padding: 5px;
  }

  &:hover {
    ${Thumbnail} {
      -webkit-animation-name: up-float, up;
      animation-name: up-float, up;
      -webkit-animation-duration: 0.3s, 1.5s;
      animation-duration: 0.3s, 1.5s;
      -webkit-animation-delay: 0s, 0.3s;
      animation-delay: 0s, 0.3s;
      -webkit-animation-timing-function: ease-out, ease-in-out;
      animation-timing-function: ease-out, ease-in-out;
      -webkit-animation-iteration-count: 1, infinite;
      animation-iteration-count: 1, infinite;
      -webkit-animation-fill-mode: forwards;
      animation-fill-mode: forwards;
      -webkit-animation-direction: normal, alternate;
      animation-direction: normal, alternate;
    }

    figcaption {
      ${Title} {
        span {
          color: ${(props) =>
            props.colors && props.colors.red ? props.colors.red : 'red'};
        }
      }
    }
  }

  /* Animation */
  @keyframes up {
    0% {
      -webkit-transform: translateY(-8px);
      transform: translateY(-8px);
    }
    50% {
      -webkit-transform: translateY(-4px);
      transform: translateY(-4px);
    }
    100% {
      -webkit-transform: translateY(-8px);
      transform: translateY(-8px);
    }
  }
  @keyframes up-float {
    100% {
      -webkit-transform: translateY(-8px);
      transform: translateY(-8px);
    }
  }

  ${(props) =>
    props.sizes &&
    props.sizes.MD &&
    css`
      @media (min-width: ${props.sizes.MD}) {
        ${Thumbnail} {
          height: 220px;

          img {
            height: 100%;
          }
        }
      }
    `}

  ${(props) =>
    props.sizes &&
    props.sizes.XL &&
    css`
      @media (min-width: ${props.sizes.XL}) {
        ${Thumbnail} {
          height: 220px;
        }
      }
    `}
`;
