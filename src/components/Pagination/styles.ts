import styled, { css } from 'styled-components';

interface ButtonProps {
  name?: 'default' | 'prev' | 'next' | 'spotlight';
  disable?: boolean;
  inactive?: boolean;
}

const Button = styled.button<ButtonProps>`
  background: ${(props) => props.theme.colors.grey};
  padding: 2px 5px;
  color: #fff;
  border-radius: 5px;
  border: 0;
  margin: 0 2px;
  cursor: pointer;
  border: 2px solid transparent;
  outline: 0;
  font-size: 0.75rem;

  transition: 0.4s all ease;

  &:hover {
    background: ${(props) => props.theme.colors.red};
    color: #fff;
  }

  ${(props) =>
    props.disable &&
    css`
      visibility: hidden;
    `}

  ${(props) =>
    props.inactive &&
    css`
      display: none;
    `}

  ${(props) =>
    (props.name === 'next' || props.name === 'prev') &&
    css`
      //display: none;
      background: #000;
      font-weight: bold;
      letter-spacing: 1px;

      &:hover {
        background: ${props.theme.colors.red};
        color: #fff;
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.4);
      }
    `}
`;

Button.defaultProps = {
  name: 'default',
  type: 'button',
  disable: false,
  inactive: false,
};

const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  margin-top: 2rem;

  @media (min-width: ${(props) => props.theme.sizes.SM}) {
    justify-content: space-between;
  }
`;

const PageNumbersButtons = styled(Button)`
  @media (min-width: ${(props) => props.theme.sizes.SM}) {
    font-size: 1rem;
    padding: 5px 10px;

    ${(props) =>
      props.name === 'spotlight' &&
      css`
        background: ${props.theme.colors.red};
        color: #fff;
        border: 2px solid ${props.theme.colors.redDarken};
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.3);
      `}

    ${(props) =>
      (props.name === 'prev' || props.name === 'next') &&
      css`
        display: inherit;
      `}
  }
`;

export { Container, Button, PageNumbersButtons };
