/**
*
* AppWrapper
*
*/
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    max-width: calc(768px + 16px * 2);
    margin: 0 auto;
    display: flex;
    min-height: 100%;
    padding: 0 16px;
    flex-direction: column;
`;

function AppWrapper (props) {
  return (
    <Wrapper>
      {props.children}
    </Wrapper>
  );
}

AppWrapper.propTypes = {
  children: React.PropTypes.node
};

export default AppWrapper;
