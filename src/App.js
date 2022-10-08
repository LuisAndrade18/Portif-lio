import React from 'react'
import * as S from './GlobalStyle'
import Header from './components/header/Header'
import Main from './components/main/Main'
import Footer from './components/footer/Footer'

function App() {
  return (
    <>
      <S.GlobalStyle/>
      <Header />
      <Main />
      <Footer/>
    </>
  )
}

export default App