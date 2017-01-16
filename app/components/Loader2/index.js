/**
*
* Loader2
*
*/

import React from 'react';
import styled, { keyframes } from 'styled-components';
import Wrapper from './Wrapper';
import Rectangle from './Rectangle';

const startColor = 'red';
const finalColor = 'black';

export const changeSize = keyframes`
  0% {
    transform: scale(1);
    background-color: ${startColor};
  }
  25% {
    transform: scaleY(3);
    background-color: ${finalColor};
  }
  75% {
    transform: scaleY(3);
    background-color: ${finalColor};
  }
  100% {
    transform: scaleY(1);
    background-color: ${startColor};
  }
`;

export const LeftRectangle = styled(Rectangle)`
  animation: ${changeSize} 1s ease-out infinite;
`;

export const MiddleRectangle = styled(Rectangle)`
  animation: ${changeSize} 1s ease-in 0.25s infinite;
`;

export const RightRectangle = styled(Rectangle)`
  animation: ${changeSize} 1s ease-out .5s infinite;
`;

function Loader2() {
  return (
    <Wrapper>
      <LeftRectangle />
      <MiddleRectangle />
      <RightRectangle />
    </Wrapper>
  );
}

export default Loader2;
