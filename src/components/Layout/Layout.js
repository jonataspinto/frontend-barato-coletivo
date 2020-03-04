import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import * as S from './LayoutStyled';
import Header from '../Header';

const Layout = ({ children }) => {
  const { pathname } = useLocation();

  return (
    <S.LayoutContainer>
      <Header />
      <S.Main currentPage={pathname.split('/')[1].split('/')[0]}>
        {children}
      </S.Main>
    </S.LayoutContainer>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
