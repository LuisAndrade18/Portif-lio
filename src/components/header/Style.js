import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  position: relative;
  @media screen and (min-width: 900px) {
    width: 70%;
    margin: auto;
  }
`;

export const Profile = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 30px;
  position: relative;
`;

export const Pic = styled.figure`
  width: 20vw;
  height: 20vw;
  border: solid 4px #410066a3;
  border-radius: 100%;
  overflow: hidden;
  img {
    width: 100%;
    height: 150%;
    object-position: 0 -8vw;
    object-fit: cover;
  }

  @media screen and (min-width: 900px) {
    width: 10vw;
    height: 10vw;
    img {
      width: 100%;
      height: 150%;
      object-position: 0 -4vw;
      object-fit: cover;
    }
  }
`;

export const Name = styled.div`
  position: absolute;
  left: 35%;
  h3 {
    font-weight: 100;
  }
  h5 {
    font-weight: 400;
  }
  @media screen and (min-width: 500px) {
    h3 {
      font-size: 5vw;
    }
    h5 {
      font-size: 3vw;
      font-weight: 300;
    }
  }
  @media screen and (min-width: 900px) {
    h3 {
      font-size: 2.5vw;
    }
    h5 {
      font-size: 1.8vw;
    }
  }
`;

export const About = styled.div`
  padding: 0 5%;
  display: flex;
  justify-content: space-between;
  color: #3e3e3e;
  ul {
    width: 60%;
  }
  li {
    display: flex;
    align-items: center;
    margin: 5px;
  }
  div {
    width: 50%;
  }
  @media screen and (min-width: 500px) {
    position: relative;
    li {
      font-size: 3vw;
    }
  }

  @media screen and (min-width: 900px) {
    li {
      font-size: 2vw;
    }
  }
`;

export const HL = styled.div`
  margin: 10px;
  display: flex;

  figure {
    margin: 5px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  img {
    width: 60px;
    height: 60px;
    border: double #dbdbdb 3px;
    border-radius: 100%;
    object-fit: cover;
  }
  @media screen and (min-width: 500px) {
    img {
      width: 10vw;
      height: 10vw;
      border: double #dbdbdb 3px;
      border-radius: 100%;
      object-fit: cover;
    }
  }
  @media screen and (min-width: 900px) {
    img {
      max-width: 100px;
      max-height: 100px;
    }
    font-size: 28px;
  }
`;


export const Counter = styled.div`
  display: flex;
  justify-content: space-around;
  border-bottom: solid #c0c0c0 2px;
  padding: 10px 0;

  div {
    width: 33%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  h5 {
    color: #3e3e3e;
    font-size: 12px;
  }
  p {
    color: #686868;
    font-size: 12px;
  }

  @media screen and (min-width: 520px) {
    width: 60%;
    position: absolute;
    right: 0;
    top: 42.5%;
    border: none;
    h5 {
      font-size: 3vw;
    }
    p {
      font-size: 2.3vw;
    }
  }

  @media screen and (min-width: 900px) {
    top: 37.5%;
    h5 {
      font-size: 2vw;
    }
    p {
      font-size: 1.5vw;
    }
  }
`;


