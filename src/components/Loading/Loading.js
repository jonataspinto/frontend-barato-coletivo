import React from 'react';
import PropTypes from 'prop-types';
import Spinkit from 'react-spinkit';

import * as S from './LoadingStyled';

const Loading = ({ type, color, size }) =>
  type ? (
    <S.Wrapper size={size} type={type} color={color}>
      <Spinkit name={type} />
    </S.Wrapper>
  ) : (
    <S.Spiner color={color} />
  );

Loading.propTypes = {
  type: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
};

Loading.defaultProps = {
  type: null,
  color: 'blackFridayBlack',
  size: 50,
};

export default Loading;
