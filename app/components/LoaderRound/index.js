/**
*
* LoaderRound
*
*/

import React from 'react';
import styled from 'styled-components';

import Wrapper from './Wrapper';
import Base from './Base';

export const SmallestRound = styled(Base)`
`;

export const SmallRound = styled(Base)`
  animation-delay: 1s;
`;

export const BigRound = styled(Base)`
  animation-delay: 2s;
`;

function LoaderRound () {
  return (
    <Wrapper>
      <BigRound color={'red'}>
        <SmallRound>
          <SmallestRound color={'red'} />
        </SmallRound>
      </BigRound>
    </Wrapper>
  );
}

export default LoaderRound;
