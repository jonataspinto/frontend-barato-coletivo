import React from 'react';
import { oneOf, string } from 'prop-types';
import Typographyes from './TypographyStyled';

const Typography = ({ type, children, weight, color }) => {
  const Text = Typographyes[type];
  return (
    <Text color={color} weight={weight}>
      {children}
    </Text>
  );
};

Typography.propTypes = {
  type: oneOf(['header', 'title', 'text']),
  children: string.isRequired,
  weight: oneOf([400, 500, 600, 700, 800, 900]),
  color: string,
};

Typography.defaultProps = {
  type: 'text',
  weight: 400,
};

export default Typography;
