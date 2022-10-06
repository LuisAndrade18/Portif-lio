import { createGlobalStyle } from "styled-components";
import Barney from './assets/fonts/Barneyfont.otf';

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
  }
  body{
    background-color: white;
  }
  @font-face {
    font-family: 'Barney';
    src: url(${Barney});
  }
  a{
    color: black;
    cursor: pointer;
  }
`