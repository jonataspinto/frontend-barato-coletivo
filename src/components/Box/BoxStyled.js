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

  ${media.between('1001px', '1250px')`
    grid-template-columns: repeat(3, 1fr);
    margin: 0 auto;
    gap: 30px;
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

const BoxWrapper = styled.div``;

const BoxContainer = styled.div`
  ${props => currentPage[props.currentPage]};
  padding: 10px 0px 20px 0;
`;

export { BoxWrapper, BoxContainer };
