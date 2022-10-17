import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Main = styled.main`
  width: 100%;
`;

export const Links = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  border-bottom: solid #c0c0c0 2px;
  padding: 10px 0;
  @media screen and (min-width: 900px) {
    width: 75%;
    margin: auto;
  }
`;

export const Linked = styled(Link)`
  width: 33%;
  color: #686868;
  text-align: center;
  font-size: 30px;
  @media screen and (min-width: 700px) {
    :nth-child(1) {
      ::after {
        content: 'Home';
      }
      display: flex;
      justify-content: center;
      align-items: center;
    }
    :nth-child(2) {
      ::after {
        content: 'About';
      }
      display: flex;
      justify-content: center;
      align-items: center;
    }
    :nth-child(3) {
      ::after {
        content: 'Portfólio';
      }
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const RouterHome = styled.section`
  width: 100%;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  h2 {
    font-size: 7vw;
    color: #3e3e3e;
  }
  h5 {
    width: 80%;
    padding: 30px 0;
    text-align: center;
    font-size: 4vw;
    font-weight: 500;
    color: #808080;
  }
  @media screen and (min-width: 900px) {
    h2 {
      font-size: 4vw;
    }
    h5 {
      font-size: 2.25vw;
    }
  }
`;

export const RouterAbout = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    font-size: 7vw;
    color: #3e3e3e;
  }
  h5 {
    font-size: 3vw;
    font-weight: 500;
    color: #808080;
  }
  @media screen and (min-width: 900px) {
    h2 {
      font-size: 3vw;
    }
    h5 {
      font-size: 1.25vw;
    }
  }
`;

export const RouterAboutCard = styled.div`
  display: flex;
  height: 180%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  h4 {
    padding: 20px;
    font-size: 6vw;
    color: #3f3f3f;
  }
  img {
    width: 200px;
    height: 200px;
    border-radius: 100%;
    object-fit: cover;
  }
  figure {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  figcaption {
    margin: 40px 0;
    font-size: 4vw;
    text-align: center;
    color: #3d3d3d;
    span {
      font-weight: 600;
    }
  }

  @media screen and (min-width: 900px) {
    img {
      width: 300px;
      height: 300px;
      border-radius: 100%;
      object-fit: cover;
    }
    &:nth-child(2n + 1) {
      width: 100%;
      h4 {
        font-size: 3vw;
      }
      figure {
        width: 70%;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
      }
      figcaption {
        width: 70%;
        margin: 60px 20px;
        font-size: 2vw;
      }
    }
    &:nth-child(2n + 0) {
      width: 100%;
      h4 {
        font-size: 3vw;
      }
      figure {
        width: 70%;
        flex-direction: row-reverse;
        align-items: center;
        justify-content: space-between;
      }
      figcaption {
        width: 70%;
        margin: 60px 20px;
        font-size: 2vw;
      }
    }
  }
`;

export const Portfolio = styled.section`
  width: 100%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  @media screen and (min-width: 900px) {
    width: 75%;
  }
`;

export const Projetos = styled.div`
  img {
    width: 32vw;
    height: 32vw;
    object-fit: cover;
    object-position: 0;
    margin: 0.6vw;
  }
  @media screen and (min-width: 700px) {
    img {
      width: 30vw;
      height: 30vw;
      object-fit: cover;
      object-position: 0;
      margin: 1.6vw;
    }
  }
  @media screen and (min-width: 900px) {
    img {
      width: 21.3vw;
      height: 21.3vw;
      margin: 1.7vw;
    }
  }
`;

export const Popup = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  button {
    background: none;
    border: none;
    font-size: 30px;
  }
  .btn2 {
    display: none;
  }
  @media screen and (min-width: 700px) {
    background-color: #75757567;
    .btn1 {
      display: none;
    }
    .btn2 {
      color: #333333;
      display: initial;
      font-size: 30px;
      position: absolute;
      right: 2%;
      top: 2%;
    }
  }
`;
export const PopupInside = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  .top {
    width: 100%;
  }
  @media screen and (min-width: 700px) {
    width: 80vw;
    height: 60vw;
    border-radius: 20px;
    overflow: auto;
    top: 40%;
    left: 50%;
    translate: -50% -40%;
  }
  @media screen and (min-width: 900px) {
    width: 60vw;
    height: 40vw;
  }
`;

export const PopupProfileBox = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  h4 {
    font-weight: 200;
    padding-left: 10px;
  }
`;

export const PopupContent = styled.div`
  width: 100%;
  font-size: 14px;
  img {
    width: 100%;
  }
  p {
    width: 85%;
    margin: auto;
  }
  a {
    font-size: 30px;
  }
  span {
    font-weight: 700;
  }
  @media screen and (min-width: 700px) {
    padding-bottom: 40px;
    font-size: 2vw;
  }
  @media screen and (min-width: 900px) {
  font-size: 1.5vw;
  }
`;

export const ProfileBoxImg = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  object-position: 0;
  border-radius: 100%;
`;

export const PopupHeader = styled.div`
  width: 100%;
  padding: 10px;
  border-bottom: solid 2px #c0c0c0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h5 {
    translate: -30%;
    font-weight: 600;
  }
  @media screen and (min-width: 700px) {
  justify-content: center;
  }
`;
