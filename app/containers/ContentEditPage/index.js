import _ from 'lodash';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { selectActiveSection, selectSections } from './selectors';
import SubMenu from '../../components/SubMenu';
import { SELECT_MENU } from './constants';
import Loader from '../../components/Loader2';
import EchoEditableContent from '../../components/EchoEditableContent';

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
      : (
        <EchoEditableContent 
          content={this.props.content} 
        />
      );

    //console.log(selectActiveSection(this.state));
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
  dispatch: PropTypes.func
};

const mapStateToProps = selectSections();

function mapDispatchToProps (dispatch) {
  return {
    dispatch
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ContentEditPage);
