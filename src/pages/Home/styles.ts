import styled from 'styled-components';

import sizes from '../../styles/sizes';

export const Container = styled.div`
  width: 100%;
  margin: 2rem 0;

  display: flex;
  align-items: center;
  min-height: 70vh;
`;

export const HeroesContainer = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  /* BREAKPOINT 576px */
  @media (min-width: ${sizes.SM}) {
    max-width: 540px;
  }

  /* BREAKPOINT 768px */
  @media (min-width: ${sizes.MD}) {
    max-width: 720px;
  }

  /* BREAKPOINT 992px */
  @media (min-width: ${sizes.LG}) {
    max-width: 960px;
  }

  /* BREAKPOINT 1200px */
  @media (min-width: ${sizes.XL}) {
    max-width: 1200px;
  }
`;

export const HeroesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media (min-width: ${sizes.MD}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: ${sizes.LG}) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: ${sizes.XL}) {
    grid-template-columns: repeat(5, 1fr);
  }
`;
