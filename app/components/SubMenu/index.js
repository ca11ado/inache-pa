import React, { PropTypes } from 'react';
import _ from 'lodash';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  border: 1px solid rgba(0,0,0,0.2);
`;

export const Item = styled.div`
  cursor: pointer;
`;

function SubMenu(props) {

  const content = _.isEmpty(props.items)
    ? (<div className="gb-emptyDiv"></div>)
    : _.map(props.items, (item, index) => (
      <Item
        className="gb-item"
        key={`sub-menu-${index}`}
        data-name={item.api}
        onClick={props.clickAction}
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

