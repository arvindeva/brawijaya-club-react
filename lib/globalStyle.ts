import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    @import url('https://fonts.googleapis.com/css?family=Nunito&display=swap');
    font-family: 'Nunito', sans-serif;
    color: black;
  }

  p {
    line-height: 1.5rem;
  }
`;

export default GlobalStyle;
