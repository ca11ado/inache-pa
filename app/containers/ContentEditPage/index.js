import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { selectSections } from './selectors';
import SubMenu from '../../components/SubMenu';
import { SELECT_MENU } from './constants';
import Loader from '../../components/Loader2';

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
        <ul>
          {_.map(this.props.content, (item, index) => {
            return (
              <li key={`content-${index}`}>
                <span>{item.date}</span>
                <span> <b>{item.place}</b></span><br />
                <span>{item.fullDescription}</span>
              </li>
            );
          })}
        </ul>
      );

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
