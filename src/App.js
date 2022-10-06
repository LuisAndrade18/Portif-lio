import React from 'react'
import * as S from './GlobalStyle'
import Header from './components/header/Header'
import Main from './components/main/Main'

function App() {
  return (
    <>
      <S.GlobalStyle/>
      <Header />
      <Main/>
    </>
  )
}

export default App