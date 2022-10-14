import React, { useState } from 'react';
import { results } from './Projetos';
import PerfilPic from '../../../assets/images/perfil.jpg';
import * as I from 'react-icons/ai';
import { DiGithubBadge, DiNetmagazine } from 'react-icons/di';
import * as S from '../Style';

const Portifolio = () => {
  const [open, setopen] = useState(false);
  const [popupcontent, setpopupcontent] = useState([]);
  const changeContent = (i) => {
    setpopupcontent([i]);
  };

  return (
    <S.Portfolio>
        {results.map((i) => (
        <S.Projetos
          onClick={() => {
            changeContent(i);
            setopen(!open);
          }}
        >
          <img src={i.image} alt="" />
        </S.Projetos>
      ))}
      
      
      {open && (
        <S.Popup>
          {popupcontent.map((i) => (
            <S.Popup>
              <S.PopupHeader>
                <button onClick={() => setopen(!open)}>
                  <I.AiOutlineLeft />
                </button>
                <h5>{i.name}</h5>
                <span></span>
              </S.PopupHeader>
              
                <S.PopupProfileBox>
                  <S.ProfileBoxImg src={PerfilPic} alt="" />
                  <h4>LuisAndrade18</h4>
                </S.PopupProfileBox>
                <S.PopupContent>
                  <img src={i.image} alt="" />
                  <p>
                    <a href={i.repositorio}>
                      <DiGithubBadge />
                    </a>
                    {'      '}
                    <a href={i.site}>
                      <DiNetmagazine />
                    </a>
                  </p>
                  <p>
                    <span>andrade_luis18</span> - {i.about}
                  </p>
                </S.PopupContent>
              
            </S.Popup>
          ))}
        </S.Popup>
      )}
    </S.Portfolio>
  );
};

export default Portifolio;
