import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
`;

export const HeaderAbout = styled.div`
  display: flex;
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
  border-radius: 100%;
  max-width: 150px;
  max-height: 150px;
  overflow: hidden;
  img {
    width: 100%;
    height: 150%;
    object-position: 0 -30px;
    object-fit: cover;
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
`;

export const About = styled.div`
  padding: 0 5%;
  display: flex;
  justify-content: space-between;
  ul {
    width: 50%;
  }
  li {
    display: flex;
    align-items: center;
    margin: 5px;
  }
  div {
    width: 50%;
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
`;

export const Social = styled.nav`
width: 100%;
max-width: 100px;
  ul{
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  a{
    font-size: 20px;
  }
`