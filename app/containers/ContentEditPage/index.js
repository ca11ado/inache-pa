import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { selectSections } from './selectors';
import SubMenu from '../../components/SubMenu';

export class ContentEditPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="Content Edit"
          meta={[
            { name: 'description', content: 'Description of ContentEditPage' },
          ]}
        />
        <section>
          <SubMenu items={this.props.sections} />
        </section>
        <section>А здесь будет выводиться сам контент</section>
      </div>
    );
  }
}

ContentEditPage.propTypes = {
  sections: PropTypes.array
};

const mapStateToProps = selectSections();

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ContentEditPage);
