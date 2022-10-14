import React from 'react'
import * as S from '../Style'
import * as I from 'react-icons/ri'

const Links = () => {
  return (
    <S.Links>
      <S.Linked to="/">
        <I.RiHome2Line />
      </S.Linked>
      <S.Linked to="/about">
        <I.RiUserLine />
      </S.Linked>
      <S.Linked to="/portfolio" >
        <I.RiApps2Line />
      </S.Linked>
    </S.Links>
  );
}

export default Links