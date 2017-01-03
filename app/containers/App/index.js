import React from 'react';
import styled from 'styled-components';
import SubMenu from '../../components/SubMenu';

const subMenuItems = [
	{ title: 'Новости', api: 'news' },
	{ title: 'Афиша', api: 'tours' },
	{ title: 'Виде', api: 'tours', noActive: true },
	{ title: 'Фото', api: 'gallery' },
	{ title: 'Музыка', api: 'music' }
];

const AppWrapper = styled.div`
    max-width: calc(768px + 16px * 2);
    margin: 0 auto;
    display: flex;
    min-height: 100%;
    padding: 0 16px;
    flex-direction: column;
`;

export default class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    return (
      <AppWrapper>
        <SubMenu items={subMenuItems} />
        <div>
          {React.Children.toArray(this.props.children)}
        </div>
      </AppWrapper>
    );
  }
}
