import _ from 'lodash';
import React, { PropTypes } from 'react';
import styled from 'styled-components';

const ItemWrapper = styled.div`
  margin-top: 20px;
`;

const ListWrapper = styled.ul`
  margin: 0;
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
  const list = _.map(content, (contentItem, index) => (
    <ItemWrapper key={`ItemWrapper-${index}`}>{listItem(contentItem)}</ItemWrapper>
  ));

  return (<div>{list}</div>);
};

ContentList.propTypes = {
  content: PropTypes.array
};

export default ContentList;
