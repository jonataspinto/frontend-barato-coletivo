import React from 'react';
import { useLocation } from 'react-router-dom';
import { node, string } from 'prop-types';
import * as S from './BoxStyled';
import Typography from '../elements/Typography';

const Box = ({ children, category }) => {
  const { pathname } = useLocation();

  return (
    <S.BoxWrapper>
      {category && (
        <Typography type="header" weight={800}>
          {category}
        </Typography>
      )}
      <S.BoxContainer currentPage={pathname.split('/')[1].split('/')[0]}>
        {children}
      </S.BoxContainer>
    </S.BoxWrapper>
  );
};

Box.propTypes = {
  children: node.isRequired,
  category: string,
};

export default Box;
