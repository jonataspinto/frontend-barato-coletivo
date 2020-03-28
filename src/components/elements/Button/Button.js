import React from 'react';
import { bool, func, string, oneOf } from 'prop-types';

import * as S from './ButtonStyled';

const Button = ({ type, handleClick, value, disabled, buttonLoading }) => (
  <S.Button
    type={type}
    onClick={handleClick}
    disabled={disabled}
    buttonLoading={buttonLoading}
  >
    {value}
  </S.Button>
);

Button.propTypes = {
  type: oneOf(['primary', 'outlided']),
  handleClick: func.isRequired,
  value: string,
  disabled: bool,
  buttonLoading: bool,
};

Button.defaultProps = {
  type: 'primary',
  disabled: false,
  buttonLoading: false,
};

export default Button;
