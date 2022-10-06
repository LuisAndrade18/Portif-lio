import React from 'react';
import Profile from './components/Profile';
import Highlights from './components/Highlights';
import SocialMedia from './components/SocialMedia';
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
