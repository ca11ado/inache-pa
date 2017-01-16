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

export const LoaderWrapper = styled.div`
  width: 300px;
  height: 300px;
  border: 1px solid black;
`;

export class ComponentsList extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render () {
    return (
      <div>
        <LoaderWrapper>
          <h3>Loader wrapper</h3>
          <Loader />
        </LoaderWrapper>
        <LoaderWrapper>
          <h3>Loader2 wrapper</h3>
          <Loader2 />
        </LoaderWrapper>
      </div>
    );
  }
}


function mapDispatchToProps (dispatch) {
  return {
    dispatch
  };
}

export default connect(null, mapDispatchToProps)(ComponentsList);
