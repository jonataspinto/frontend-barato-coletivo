import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 250px;
  /* background-color: #c4c4c4; */
  border: solid 1px ${props => props.theme.colors.primary};
  border-radius: 4px;
  span {
    .title {
      max-width: 150px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
`;

export const Image = styled.img`
  border-radius: 4px 4px 0 0;
  width: 200px;
  height: 40%;
`;
