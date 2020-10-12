import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    vertical-align: baseline;
    box-sizing: border-box;
    outline: 0;
  }

  body{
    -webkit-font-smoothing: antialiased;
    position: relative;
    background: #fff;
    font-family: 'Roboto Condensed', sans-serif;
  }

  button{
    cursor: pointer;
  }
`;

export default GlobalStyles;
