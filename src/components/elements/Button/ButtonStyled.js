import styled, { css } from 'styled-components';
import { tint } from 'polished';

const TYPES = {
  primary: css`
    border: none;
    background-color: ${props =>
      !props.disabled
        ? props.theme.buttonColors.background
        : tint(0.1, props.theme.buttonColors.background)};
    color: ${props => props.theme.fontColors.primary};
    &:hover {
      background-color: ${props =>
        tint(0.1, props.theme.buttonColors.background)};
    }
  `,
  outlided: css`
    border: solid 1px ${props => props.theme.buttonColors.background};
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.buttonColors.background};
    &:hover {
      background-color: ${props =>
        !props.disabled && props.theme.buttonColors.background};
      color: ${props => !props.disabled && props.theme.colors.background};
    }
  `,
};

export const Button = styled.button`
  ${props => TYPES[props.type]}
  cursor: ${props => (!props.disabled ? 'pointer' : 'not-allowed')};
  padding: 5px;
  border-radius: 2px;
  height: 35px;
  transition: all 0.15s ease-in-out;
  width: 180px;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;
