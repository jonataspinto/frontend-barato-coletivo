import styled from 'styled-components';

export const Image = styled.img`
  width: ${props => props.width}px;
  height: ${props => props.height || props.width}px;
  border-radius: ${props => props.rouded && '50%'};
`;
