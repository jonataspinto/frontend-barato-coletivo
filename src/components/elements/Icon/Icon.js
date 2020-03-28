import React from 'react';
import { string } from 'prop-types';
import * as S from './IconStyled';
import { getIcon } from '../../../shared/img';

const Icon = ({ icon, color, fontSize }) => (
  <S.Icon icon={getIcon(icon)} color={color} fontSize={fontSize} />
);

Icon.propTypes = {
  icon: string.isRequired,
  color: string,
  fontSize: string,
};
export default Icon;
