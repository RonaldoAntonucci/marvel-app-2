import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  color: ${(props) => props.theme.colors.header};
  background: ${(props) => props.theme.colors.grey};
`;

Container.defaultProps = {
  theme: {
    colors: {
      header: '#FFF',
      grey: 'grey',
    },
  },
};

const Logo = styled.div`
  width: 100%;
  height: 80px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);

  svg {
    border-radius: 4px;
  }

  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchContainer = styled.div`
  ${(props) => props.theme.sizes && props.theme.sizes.responsiveContainer}

  height: 50px;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  input {
    padding: 8px 9px;
    width: 250px;
    border-radius: 5px;
    border: 0;
    outline: 0;
    font-size: 1rem;
  }

  input[type='search'] {
    -webkit-appearance: none;
  }
`;

export { Container, Logo, SearchContainer };
