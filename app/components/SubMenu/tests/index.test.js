import SubMenu from '../index';

import expect from 'expect';
import { render } from 'enzyme';
import React from 'react';

describe('<SubMenu />', () => {
  it('Should render empty div if no items are passed', () => {
    const renderedComponent = render(
      <SubMenu />
    );

    expect(renderedComponent.find('.gb-emptyDiv').length).toBe(1);
  });

  it('Should render items if passed', () => {
    const items = [
      { title: 'Hello' },
      { title: 'World' }
    ];

    const renderedComponent = render(
      <SubMenu items={items} />
    );

    expect(renderedComponent.find('.gb-item').length).toBe(2);
  });
});
