import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    font-family: 'Manrope', Helvetica, Arial, sans-serif;
    font-size: 16px;
    line-height: 1.5;
    font-weight: 500;
    color: ${(props) => props.theme.colors.text};

    background-image: url("./images/background.png");
    background-color: ${(props) => props.theme.colors.background};

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  *,*::after, *::before {
    box-sizing: border-box;
  }
  a, a:visited {
    color: ${(props) => props.theme.colors.text};
    text-decoration: none;
  }
`;

export default GlobalStyle;
