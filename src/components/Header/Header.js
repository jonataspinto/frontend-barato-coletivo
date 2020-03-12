import React, { useContext } from 'react';
import * as S from './HeaderStyled';
import { ThemeContext } from '../../styles';
import Switch from '../Switch';

const initialState = () => {
  const storageValue = JSON.parse(localStorage.getItem('theme'));
  return storageValue !== 'dark';
};

const Header = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <S.HeaderContainer>
      <Switch initialState={initialState()} action={() => themeContext()} />
    </S.HeaderContainer>
  );
};

export default Header;
