/*
 *
 * ComponentsList
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Loader from '../../components/Loader';
import Loader2 from '../../components/Loader2';
import LoaderRound from '../../components/LoaderRound';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Container = styled.div`
  border: 1px solid black;
`;

export const LoaderWrapper = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export class ComponentsList extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render () {
    return (
      <Wrapper>
        <Container>
          <h3>Loader wrapper</h3>
          <LoaderWrapper>
            <Loader />
          </LoaderWrapper>
        </Container>

        <Container>
          <h3>Loader2 wrapper</h3>
          <LoaderWrapper>
            <Loader2 />
          </LoaderWrapper>
        </Container>

        <Container>
          <h3>Loader3 wrapper</h3>
          <LoaderWrapper>
            <LoaderRound />
          </LoaderWrapper>
        </Container>
      </Wrapper>
    );
  }
}


function mapDispatchToProps (dispatch) {
  return {
    dispatch
  };
}

export default connect(null, mapDispatchToProps)(ComponentsList);
