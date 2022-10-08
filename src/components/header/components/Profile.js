import React from 'react';
import * as S from '../Style';
import PerfilPic from '../../../assets/images/perfil.jpg';
import * as I from 'react-icons/di';

const Profile = () => {
  return (
    <div>
      <S.Profile>
        <S.Pic>
          <img src={PerfilPic} alt="" />
        </S.Pic>
        <S.Name>
          <h3>@LuisAndrade18</h3>
          <h5>Front-End Developer</h5>
        </S.Name>
      </S.Profile>
      <S.About>
        <ul>
          <li>
            Luis Andrade <I.DiWindows />
          </li>
          <li>Carioca</li>
          <li>
            <I.DiHtml5 />|
            <I.DiCss3 />|
            <I.DiGit />|
            <I.DiReact />
          </li>
        </ul>
      </S.About>
    </div>
  );
};

export default Profile;
