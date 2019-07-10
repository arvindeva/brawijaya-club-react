import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;

  }
  body {
    @import url('https://fonts.googleapis.com/css?family=Nunito&display=swap');
    font-family: "Nunito", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    color: black;
  }

  p {
    line-height: 1.5rem;
  }
`;

export default GlobalStyle;
