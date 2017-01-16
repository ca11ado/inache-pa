import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import Rectangle from '../Rectangle';

describe('<Rectangle />', () => {
  it('should render an div tag', () => {
    const renderedComponent = shallow(<Rectangle />);
    expect(renderedComponent.type()).toEqual('div');
  });

  it('should have a className attribute', () => {
    const renderedComponent = shallow(<Rectangle />);
    expect(renderedComponent.prop('className')).toExist();
  });
});

