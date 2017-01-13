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
    width: 100px;
    height: 100px;
  }
  50% {
    width: 150px;
    height: 150px;
  }
  to {
    width: 100px;
    height: 100px;
  }
`;

export const LoaderItem = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid red;
  animation: ${makeBigger} 2s linear infinite;
`;

function Loader () {
  return (
    <Wrapper>
      <LoaderItem />
    </Wrapper>
  );
}

export default Loader;
