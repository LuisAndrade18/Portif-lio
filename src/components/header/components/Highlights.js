import React from 'react';
import * as S from '../Style';
import * as I from 'react-icons/fc';

const Highlights = () => {
  return (
    <S.HL>
      <S.HL>
        <a href="https://mylistodo.netlify.app/" target="_blanck">
          <figure>
            <img
              src="https://screenshot-proxy.netlify.app/f_jpg,w_336/https://d33wubrfki0l68.cloudfront.net/633f17087ded51000924421a/screenshot_2022-10-06-17-58-25-0000.png"
              alt=""
            />
            <figcaption>
              <I.FcTodoList />
            </figcaption>
          </figure>
        </a>
        <a href="https://newsrecipes.netlify.app/" target="_blanck">
          <figure>
            <img
              src="https://screenshot-proxy.netlify.app/f_avif,w_204/https://d33wubrfki0l68.cloudfront.net/633904a91e4f870009d3047a/screenshot_2022-10-02-03-25-57-0000.png"
              alt=""
            />
            <figcaption>
              <I.FcNews />
            </figcaption>
          </figure>
        </a>

        <a href="https://hogwartschool.netlify.app/" target="_blanck">
          <figure>
            <img
              src="https://screenshot-proxy.netlify.app/f_avif,w_204/https://d33wubrfki0l68.cloudfront.net/632d0ec8e9447713676b28b8/screenshot_2022-09-23-01-42-26-0000.png"
              alt=""
            />
            <figcaption>
              <I.FcFlashOn />
            </figcaption>
          </figure>
        </a>
      </S.HL>
 
    </S.HL>
  );
};

export default Highlights;
