import styled from 'styled-components';

import sizes from '../../styles/sizes';
import colors from '../../styles/colors';

export const Container = styled.div`
  width: 100%;
  margin: 2rem 0;

  display: flex;
  align-items: center;
  min-height: 70vh;

  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  @media (min-width: ${sizes.MD}) {
    .grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (min-width: ${sizes.LG}) {
    .grid {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  @media (min-width: ${sizes.XL}) {
    .grid {
      grid-template-columns: repeat(5, 1fr);
    }
  }
`;

export const HeroContainer = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  /* BREAKPOINT 576px */
  @media (min-width: 36em) {
    max-width: 540px;
  }

  /* BREAKPOINT 768px */
  @media (min-width: 48em) {
    max-width: 720px;
  }

  /* BREAKPOINT 992px */
  @media (min-width: 62em) {
    max-width: 960px;
  }

  /* BREAKPOINT 1200px */
  @media (min-width: 75em) {
    max-width: 1200px;
  }
`;

export const HeroItem = styled.div`
  width: 100%;
  cursor: pointer;

  a {
    text-decoration: none;
    outline: 0;
  }

  .thumbnail {
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
  }

  figcaption {
    width: 100%;
    margin-top: 0.5rem;
    padding: 5px;

    .title {
      width: 100%;

      span {
        font-weight: bold;
        color: ${colors.grey};
      }
    }
  }

  &:hover {
    .thumbnail {
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
      .title {
        span {
          color: ${colors.red};
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

  @media (min-width: ${sizes.MD}) {
    .thumbnail {
      height: 220px;

      img {
        height: 100%;
      }
    }
  }

  @media (min-width: ${sizes.XL}) {
    .thumbnail {
      height: 220px;
    }
  }
`;
