import React from 'react';
import { string, number, bool, oneOfType } from 'prop-types';
import * as S from './ImageStyled';

const Image = ({ imgSrc, alt, width, height, rouded }) => (
  <S.Image
    src={imgSrc}
    alt={alt}
    width={width}
    height={height}
    rouded={rouded}
  />
);

Image.propTypes = {
  imgSrc: string.isRequired,
  alt: string.isRequired,
  width: oneOfType([string, number]),
  height: oneOfType([string, number]),
  rouded: bool,
};

export default Image;
