import styled from 'styled-components';

export const Footer = styled.footer`
  border-top: solid #c0c0c0 2px;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 10px;
`;

export const Social = styled.nav`
  width: 100%;
  padding: 15px 0 30px;
  ul {
    width: 100%;
    opacity: 0.5;
    display: flex;
    justify-content: space-around;
    font-size: 8vw;
  }
  @media screen and (min-width: 500px) {
    width: 50%;
    ul {
      font-size: 5vw;
    }
  }
  @media screen and (min-width: 700px) {
    width: 50%;
    ul {
      font-size: 4vw;
    }
  }
  @media screen and (min-width: 1000px) {
    width: 40%;
    ul {
      font-size: 3.5vw;
    }
  }
`;
