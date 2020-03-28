import React, { useContext } from 'react';
import { useTheme } from 'styled-components';
import * as S from './HeaderStyled';
import { ThemeContext } from '../../styles';
import { BrandLogo, Touchble, Switcher, Icon } from '../elements';

const initialState = () => {
  const storageValue = JSON.parse(localStorage.getItem('theme'));
  return storageValue !== 'dark';
};

const Header = () => {
  const themeContext = useContext(ThemeContext);
  const { headerColors } = useTheme();

  const RenderHeaderToggleMenuSection = () => (
    <S.SectionHandleMenu>
      <Touchble handleClick={() => console.log('click')}>
        <Icon icon="menu" fontSize="1.5" color={headerColors.iconColor} />
      </Touchble>
    </S.SectionHandleMenu>
  );

  const RenderHeaderCartSection = () => (
    <S.HeaderHandleState>
      <Switcher initialState={initialState()} action={() => themeContext()} />
      <Touchble handleClick={() => console.log('click')}>
        <Icon
          icon="shoppingCart"
          fontSize="1.5"
          color={headerColors.iconColor}
        />
      </Touchble>
    </S.HeaderHandleState>
  );

  return (
    <S.Header>
      {RenderHeaderToggleMenuSection()}
      <BrandLogo />
      {RenderHeaderCartSection()}
    </S.Header>
  );
};

export default Header;
