import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Main = styled.main``;

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
  &:hover {

    &::after {
      font-size: 10px;
    }
  }
`;
export const Couter = styled.div`
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
`;
