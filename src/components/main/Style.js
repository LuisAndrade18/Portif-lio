import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Main = styled.main`
  position: relative;
  @media screen and (min-width: 500px) {
    position: relative;
  }
`;

export const Links = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  border-bottom: solid #c0c0c0 2px;
  padding: 10px 0;
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
    font-size: 12px;
  }
  p {
    font-size: 12px;
  }
  @media screen and (min-width: 520px) {
    width: 70%;
    position: absolute;
    top: -33.5vw;
    right: 2%;
    border: none;
    h5 {
      font-size: 3vw;
    }
    p {
      font-size: 2.3vw;
    }
  }

  @media screen and (min-width: 900px) {
    width: 40%;
    right: 40%;
    top: -400%;
    translate: 50%;
    h5 {
      font-size: 2vw;
    }
    p {
      font-size: 1.5vw;
    }
  }
`;
