import styled, { css } from 'styled-components';
import media from 'styled-media-query';

const currentPage = {
  home: css`
  ${media.lessThan('580px')`
    grid-template-columns: repeat(1, 1fr);
    margin: 0 auto;
  `}

  ${media.between('581px', '1000px')`
    grid-template-columns: repeat(2, 1fr);
    margin: 0 auto;
  `}

  ${media.greaterThan('1001px')`
    /* gap: 30px; */

  `}
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    margin: 0 auto;
  `,
};

const BoxContainer = styled.div`
  ${props => currentPage[props.currentPage]}
`;

export { BoxContainer };
