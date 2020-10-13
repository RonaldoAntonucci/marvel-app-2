import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 2rem 0;

  display: flex;
  align-items: center;
  min-height: 70vh;
`;

export const HeroesContainer = styled.div`
  ${(props) => props.theme.sizes && props.theme.sizes.responsiveContainer}
`;

export const HeroesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media (min-width: ${(props) => props.theme.sizes.MD}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: ${(props) => props.theme.sizes.LG}) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: ${(props) => props.theme.sizes.XL}) {
    grid-template-columns: repeat(5, 1fr);
  }
`;
