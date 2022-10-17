import { createGlobalStyle } from 'styled-components';

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
  a{
    color: black;
    cursor: pointer;
  }
*::-webkit-scrollbar {
  width: 7px;
}

*::-webkit-scrollbar-thumb {
  background-color: #33333310;
  border-radius: 20px;
  border: 3px solid #33333340;
}
`;
