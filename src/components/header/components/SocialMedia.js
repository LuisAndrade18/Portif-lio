import React from 'react';
import * as S from '../Style';
import * as I from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <S.Social>
      <ul>
        <li>
          <a href="https://www.instagram.com/andrade_luis18/" target="_blanck">
            <I.FaInstagram />
          </a>
        </li>
        <li>
          <a href="https://github.com/LuisAndrade18" target="_blanck">
            <I.FaGithub />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/luisandrade18/" target="_blanck">
            <I.FaLinkedin />
          </a>
        </li>
        <li>
          <a href="https://wa.me/5521967294501" target="_blanck">
            <I.FaWhatsapp />
          </a>
        </li>
      </ul>
    </S.Social>
  );
};

export default SocialMedia;
