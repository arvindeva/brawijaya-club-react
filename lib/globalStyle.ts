import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap');
    font-family: 'Source Sans Pro', sans-serif;
    color: black;
    
  }
`;

export default GlobalStyle;
