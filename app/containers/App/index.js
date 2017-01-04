import React from 'react';
import AppWrapper from '../../components/AppWrapper';

export default class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    return (
      <AppWrapper>
        <div>
          {React.Children.toArray(this.props.children)}
        </div>
      </AppWrapper>
    );
  }
}
