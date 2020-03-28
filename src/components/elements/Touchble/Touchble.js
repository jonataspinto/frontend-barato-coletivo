import React from 'react';
import { node, func } from 'prop-types';
import * as S from './TouchbleStyled';

const Touchble = ({ children, handleClick }) => {
  return (
    <S.TouchbleContainer onClick={handleClick}>{children}</S.TouchbleContainer>
  );
};

Touchble.propTypes = {
  children: node.isRequired,
  handleClick: func.isRequired,
};

export default Touchble;
