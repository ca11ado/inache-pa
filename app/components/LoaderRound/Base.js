import styled from 'styled-components';
import animation from './animation';

/* eslint-disable */
const Base = styled.div`
  width: 50%;
  height: 50%;
  border: 2px solid transparent;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${(props) => animation} 5s infinite linear;
`;
/* eslint-enable */

export default Base;

