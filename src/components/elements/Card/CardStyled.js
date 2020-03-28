import styled from 'styled-components';

export const CardContainer = styled.div`
  min-height: 250px;
  padding: 8px;
  border: solid 1px ${props => props.theme.colors.primary};
  border-radius: 4px;
`;
