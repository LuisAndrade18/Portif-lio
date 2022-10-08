import React from 'react';
import * as S from '../Style';
import violin from '../../../assets/images/luisViolin.jpg';
import comunicacao from '../../../assets/images/luisComunic.jpg';
import trilha from '../../../assets/images/luisTrilha.jpg';

const About = () => {
  return (
    <S.RouterAbout>
      <h2>Esse é o Luis</h2>
      <h5>(não tão "tecnicamente")</h5>
      <S.RouterAboutCard>
        <h4>Um apaixondo por música</h4>
        <figure>
          <img src={violin} alt="Luis Andrade tocando violino" />
          <figcaption>
            Musica é como respirar. É natural do ser humano se atrair pela
            música. Seja batucando em uma mesa, ou assoviando pelas ruas,
            é algo tão intrelassado em nossas vidas, que se encontra em momentos de alegria, tristeza, concentração, diversão. Amo fazer música. É como falar uma nova língua que em qualquer lugar consigo conversar. 
          </figcaption>
        </figure>
      </S.RouterAboutCard>
      <S.RouterAboutCard>
        <h4>Aventureiro da natureza</h4>
        <figure>
          <img
            src={trilha}
            alt="Luis Andrade sentado em uma pedra durante uma trilha"
          />
          <figcaption>
            Amo a natureza. Nela encontramos uma paz que, muitas vezes, não
            acharemos na correria do dia-a-dia na cidade. A natureza nos impõe
            condições que não gostariamos de estar normalmente. Suado, com fome,
            cansado, mas um instinto interior sempre gritando para prosseguir.
            Busco sempre me aventurar, e dessas aventuras, procuro nos desafios
            da jornada respostas e soluções para problemas que encontramos
            diariamente.
          </figcaption>
        </figure>
      </S.RouterAboutCard>
      <S.RouterAboutCard>
        <h4>Comunicativo</h4>
        <figure>
          <img
            src={comunicacao}
            alt="Luis Andrade prestando entrevista a uma TV alemã"
          />
          <figcaption>
            A capacidade de se comunicar é como um dom concedido a humanidade, e
            o dominio da comunicação é uma ferramenta necessaria para a evolução
            do ser humano. esse dom é algo de busca diaria, pois como diz
            Antonio Francisco:{' '}
            <span>
              "Comunicação é sempre uma via de duas mãos. O problema é que
              sempre estamos na contramão".
            </span> Devemos sempre buscar maneiras de se comunicar melhor, pois nossa
            fala atinge diretamente a outra pessoa.
          </figcaption>
        </figure>
      </S.RouterAboutCard>
    </S.RouterAbout>
  );
};

export default About;
