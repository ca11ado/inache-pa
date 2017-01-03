import React, { PropTypes } from 'react';
import _ from 'lodash';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  border: 1px solid rgba(0,0,0,0.2);
`;

const Item = styled.div`
  cursor: pointer;
`;

function SubMenu(props) {
  const content = _.isEmpty(props.items)
    ? (<div></div>)
    : _.map(props.items, (item, index) => (
      <Item
        key={`sub-menu-${index}`}
      >
        {item.title}
      </Item>
    ));

  return (
    <Wrapper>
      {content}
    </Wrapper>
  );
}

SubMenu.propTypes = {
  items: PropTypes.array
};

export default SubMenu;
