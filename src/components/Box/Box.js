import React from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as S from './BoxStyled';

const Box = ({ children }) => {
  const { pathname } = useLocation();

  return (
    <S.BoxContainer currentPage={pathname.split('/')[1].split('/')[0]}>
      {children}
    </S.BoxContainer>
  );
};

Box.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Box;
