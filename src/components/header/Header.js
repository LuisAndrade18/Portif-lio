import React from 'react';
import Profile from './components/Profile';
import Highlights from './components/Highlights';
import * as S from './Style';

const Header = () => {
  return (
    <S.Header>
      <Profile />
      <Highlights/>
    </S.Header>
  );
};

export default Header;
