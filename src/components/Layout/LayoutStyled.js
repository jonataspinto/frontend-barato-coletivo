import styled, { css } from 'styled-components';
import media from 'styled-media-query';

const currentPage = {
  home: css`
    ${media.greaterThan('large')`
    padding: 20px 100px;
  `}
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 50px;
    padding: 20px 0px;
    margin: 0 auto;
  `,

  offer: css`
    ${media.greaterThan('large')`
    padding: 20px 100px;
  `}
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 50px;
    padding: 20px 0px;
    margin: 0 auto;
    background-color: pink;
  `,
};

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  /* background-color: black; */
`;

export const Main = styled.div`
  flex: 1;
  ${props => currentPage[props.currentPage]}
`;
