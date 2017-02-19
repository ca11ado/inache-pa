import _ from 'lodash';
import moment from 'moment';
import styled from 'styled-components';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { selectSections } from './selectors';
import SubMenu from '../../components/SubMenu';
import { SELECT_MENU } from './constants';
import Loader from '../../components/Loader2';

const FORMAT = 'DD.MM.YYYY';

const ListItemWrapper = styled.li`
  margin-bottom: 12px;
`;

const listItem = (item) => _.map(item, (property, key) => {
  const result = property instanceof Array 
    ? (<ul>ListItem(property, key)</ul>)
    : (
        <ListItemWrapper key={`ListItem-${key}`}>
          <span><b>{key}:</b></span>
          <span>{property}</span>
        </ListItemWrapper>
      );
});

const ListItem = (props) => {
  const content = _.map(props.content, (letter) => (<li>{letter}</li>));

  return (
    <ul>{content}</ul>
  );
};

export class ContentEditPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render () {
    function clickAction (dispatch) {
      return (e) => {
        dispatch({
          type: SELECT_MENU,
          menu: e.currentTarget.dataset.name
        });
      };
    }

    const content = this.props.isLoaded
      ? (<Loader />)
    //: (<ListItem content={['t','e','s','t']} />);
    : listItem(this.props.content);

    return (
      <div>
        <Helmet
          title="Content Edit"
          meta={[
            { name: 'description', content: 'Description of ContentEditPage' }
          ]}
        />
        <section>
          <SubMenu clickAction={clickAction(this.props.dispatch)} items={this.props.sections} />
        </section>
        <section>
          {content}
        </section>
      </div>
    );
  }
}

ContentEditPage.propTypes = {
  sections: PropTypes.array,
  isLoaded: PropTypes.bool,
  dispatch: PropTypes.func,
  content: PropTypes.array
};

const mapStateToProps = selectSections();

function mapDispatchToProps (dispatch) {
  return {
    dispatch
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ContentEditPage);
