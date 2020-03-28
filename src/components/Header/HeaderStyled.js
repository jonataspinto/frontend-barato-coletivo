import styled from 'styled-components';
import media from 'styled-media-query';

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: ${props => props.theme.headerColors.background};
  position: sticky;
  top: 0px;
`;

export const HeaderHandleState = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  align-items: center;
`;

export const SectionHandleMenu = styled.span`
  ${media.greaterThan('medium')`
    display: none;
  `}
`;
