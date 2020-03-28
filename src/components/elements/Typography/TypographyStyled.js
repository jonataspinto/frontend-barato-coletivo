import styled, { css } from 'styled-components';

const BasicStyle = css`
  color: ${props => props.color || props.theme.colors.text};
  font-weight: ${props => props.weight};
`;

const text = styled.p`
  ${BasicStyle}
  font-size: 16px;
  line-height: 18px;
`;

const title = styled.h2`
  ${BasicStyle}
  font-size: 24px;
  line-height: 28px;
`;

const header = styled.h1`
  ${BasicStyle}
  font-size: 32px;
  line-height: 34px;
`;

export default {
  text,
  header,
  title,
};
