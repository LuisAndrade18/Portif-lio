import React from 'react';
import Profile from './components/Profile';
import Highlights from './components/Highlights';
import * as S from './Style';
import Counter from './components/Counter';

const Header = () => {
  return (
    <S.Header>
      <Profile />
      <Highlights />
      <Counter/>
    </S.Header>
  );
};

export default Header;
