import _ from 'lodash';
import React, { PropTypes } from 'react';
import styled from 'styled-components';

const ItemWrapper = styled.div`
  margin-top: 20px;
  border: 1px solid black;
  padding: 2px 6px;
  box-shadow: 1px 1px 5px #807f7f;
`;

const ListWrapper = styled.ul`
  margin: 0;
  padding: 0 0 0 16px;
`;

const ListItemWrapper = styled.li`
  margin: 0;
  line-height: 20px;
`;

const listItem = (item) => _.map(item, (property, key) => {
  const isCollection = (property instanceof Array) || (property instanceof Object);

  return isCollection
    ? (<ListWrapper key={`UlItem-${key}`}>{listItem(property)}</ListWrapper>)
    : (
      <ListItemWrapper key={`ListItem-${key}`}>
        <span><b>{key}: </b></span>
        <span>{property}</span>
      </ListItemWrapper>
      );
});

const ContentList = (props) => {
  const content = props.content;
  const list = content
    ? _.map(content, (contentItem, index) => (
      <ItemWrapper key={`ItemWrapper-${index}`}>{listItem(contentItem)}</ItemWrapper>
    ))
    : (<div><h2>There is nothing here</h2></div>);

  return (<div>{list}</div>);
};

ContentList.propTypes = {
  content: PropTypes.array
};

export default ContentList;
