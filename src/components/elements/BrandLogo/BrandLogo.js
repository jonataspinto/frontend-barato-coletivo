import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../Image';
import * as S from './BrandLogoStyled';
import { getImage } from '../../../shared/img';

const BrandLogo = () => {
  return (
    <Link to="/">
      <S.LogoWrapper>
        <Image
          imgSrc={getImage('brandLogo')}
          alt="BrandLogo"
          width="164"
          height="44"
        />
      </S.LogoWrapper>
      <S.ResponsiveLogoWrapper>
        <Image
          imgSrc="https://www.baratocoletivo.com.br/img/logo-bc-2018.png?_v=1020"
          alt="BrandLogo"
          width="82"
          height="22"
        />
      </S.ResponsiveLogoWrapper>
    </Link>
  );
};

export default BrandLogo;
