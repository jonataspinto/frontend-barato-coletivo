import React from 'react';
import { node } from 'prop-types';
import * as S from './CardStyled';

const Card = ({ children }) => <S.CardContainer>{children}</S.CardContainer>;

Card.propTypes = {
  children: node.isRequired,
};

export default Card;
