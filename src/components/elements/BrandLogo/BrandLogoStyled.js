import styled from 'styled-components';
import media from 'styled-media-query';

export const LogoWrapper = styled.span`
  ${media.lessThan('medium')`
    display: none;
  `}
`;

export const ResponsiveLogoWrapper = styled.span`
  ${media.greaterThan('medium')`
    display: none;
  `}
`;
