import React, { useState } from 'react';
import { results } from './Projetos';
import PerfilPic from '../../../assets/images/perfil.jpg';
import { AiOutlineLeft } from 'react-icons/ai';
import { FiX } from 'react-icons/fi';
import * as I from 'react-icons/di';
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
          <button className="btn2" onClick={() => setopen(!open)}>
            <FiX />
          </button>
          {popupcontent.map((i) => (
            <S.PopupInside>
              <div className="top">
                <S.PopupHeader>
                  <button className="btn1" onClick={() => setopen(!open)}>
                    <AiOutlineLeft />
                  </button>
                  <h5>{i.name}</h5>
                  <span></span>
                </S.PopupHeader>

                <S.PopupProfileBox>
                  <S.ProfileBoxImg src={PerfilPic} alt="" />
                  <h4>LuisAndrade18</h4>
                </S.PopupProfileBox>
              </div>
              <S.PopupContent>
                <img src={i.image} alt="" />
                <p>
                  <a href={i.repositorio}>
                    <I.DiGithubBadge />
                  </a>
                  {'      '}
                  <a href={i.site}>
                    <I.DiNetmagazine />
                  </a>
                </p>
                <p>
                  <span>andrade_luis18</span> - {i.about}
                </p>
              </S.PopupContent>
            </S.PopupInside>
          ))}
        </S.Popup>
      )}
    </S.Portfolio>
  );
};

export default Portifolio;
