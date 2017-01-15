import React from 'react';
import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.div`
  min-width: 300px;
  min-height: 300px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const makeBigger = keyframes`
  from {
    transform: scale(1) rotate(90deg)
  }
  50% {
    transform: scale(2) rotate(180deg);
  }
  to {
    transform: scale(1) rotate(270deg);
  }
`;

export const Rect = styled.div`
  border: 1px solid red;
  animation: ${makeBigger} 2s ease infinite;
`;

export const VerySmallRect = styled(Rect)`
  width: 10px;
  height: 10px;
`;

export const SmallRect = styled(Rect)`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MediumRect = styled(Rect)`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Loader () {
  return (
    <Wrapper>
      <MediumRect>
        <SmallRect>
          <VerySmallRect />
        </SmallRect>
      </MediumRect>
    </Wrapper>
  );
}

export default Loader;
