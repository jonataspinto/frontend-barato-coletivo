import styled from 'styled-components';

const Wrapper = styled.div`
  .sk-${props => props.type} {
    color: ${props => props.theme.colors[props.color]};
    width: ${props => props.size}px;
    height: ${props => props.size}px;
  }
`;

const Spiner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  border: 3px solid ${props => props.theme.colors[props.color]};
  border-top: 3px solid transparent;
  animation: spin 0.9s linear infinite;

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;

export { Wrapper, Spiner };
