import React from 'react';
import Counter from './components/Counter';
import Rotas from './components/Rotas';
import * as S from './Style';

const Main = () => {
  return (
    <S.Main>
      <Counter />
      <Rotas />
    </S.Main>
  );
};

export default Main;
