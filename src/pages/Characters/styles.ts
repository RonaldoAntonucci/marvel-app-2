import styled from 'styled-components';

import MarvelBackgroundImg from '../../assets/bg-marvel.jpg';

export const Container = styled.div``;

export const HeroDetailsContainer = styled.div.attrs(() => ({
  style: { background: `url(${MarvelBackgroundImg}) no-repeat center center` },
}))`
  > div {
    ${(props) => props.theme.sizes.responsiveContainer}

    display: flex;
    flex-wrap: wrap;
    padding-top: 2rem;
    padding-bottom: 2rem;
  }

  width: 100%;
  background-size: cover;
`;

export const Thumbnail = styled.div`
  width: 100%;
  text-align: center;

  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    box-shadow: 0px 2px 8px rgba(255, 255, 255, 0.4);
  }

  @media (min-width: ${(props) => props.theme.sizes.MD}) {
    width: 40%;

    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 220px;
      height: 220px;
    }
  }
`;

export const HeroInfo = styled.div`
  width: 100%;
  margin-top: 2rem;
  color: white;
  text-shadow: 0px 2px 8px rgba(0, 0, 0, 0.4);

  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1rem;
  }

  @media (min-width: ${(props) => props.theme.sizes.MD}) {
    width: 60%;
    margin-top: 0;

    padding: 5rem 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media (min-width: ${(props) => props.theme.sizes.LG}) {
    width: calc(60% - 5%);
  }

  @media (min-width: ${(props) => props.theme.sizes.XL}) {
    width: calc(60% - 17%);
  }
`;

export const HeroInfoCard = styled.div`
  width: 100%;
  margin-top: 2rem;
  padding: 0 5px;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  > div {
    width: 46%;
    border: 2px solid #fff;
    border-radius: 5px;
    padding: 15px;

    text-align: center;

    position: relative;

    p {
      padding: 0;
      margin: 0;
    }

    span {
      position: absolute;
      top: -11px;
      right: -11px;

      font-size: 0.875rem;
      background: ${(props) => props.theme.colors.red};

      display: flex;
      align-items: center;
      justify-content: center;

      width: 30px;
      height: 30px;
      margin: 0 auto;
      border-radius: 50%;
    }
  }

  @media (min-width: ${(props) => props.theme.sizes.LG}) {
    justify-content: flex-start;

    > div {
      width: 30%;

      &:first-child {
        margin-right: 5%;
      }

      &:last-child {
        margin-left: 5%;
      }
    }
  }

  @media (min-width: ${(props) => props.theme.sizes.XL}) {
    justify-content: flex-start;
    align-items: center;

    > div {
      width: 30%;

      &:first-child {
        margin-right: 5%;
      }

      &:last-child {
        margin-left: 5%;
      }
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  padding: 2rem 0;

  ${(props) => props.theme.sizes.responsiveContainer}

  > div {
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    > div {
      width: 100%;
      margin-bottom: 2rem;

      display: flex;
      align-items: center;

      color: ${(props) => props.theme.colors.grey};

      h2 {
        font-size: 2.25rem;
        margin-left: 15px;
      }
    }
  }

  ul {
    vertical-align: middle;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;

    padding-left: 0;
    list-style: none;
  }

  @media (min-width: ${(props) => props.theme.sizes.MD}) {
    ul {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  @media (min-width: ${(props) => props.theme.sizes.LG}) {
    width: calc(50% - 15px);
    margin-right: 15px;

    ul {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (min-width: ${(props) => props.theme.sizes.XL}) {
    width: calc(60% - 15px);

    ul {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;

export const ComicContainer = styled.div`
  width: 100%;
`;

export const SeriesContainer = styled.div`
  width: 100%;
`;
