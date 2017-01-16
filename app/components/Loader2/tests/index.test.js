import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

import Loader2, { LeftRectangle, MiddleRectangle, RightRectangle } from '../index';

describe('<Loader2 />', () => {
  it('should render left rectangle', () => {
    const renderedComponent = shallow(<Loader2 />);
    expect(renderedComponent.contains(
      <LeftRectangle />
    )).toEqual(true);
  });

  it('should render middle rectangle', () => {
    const renderedComponent = shallow(<Loader2 />);
    expect(renderedComponent.contains(
      <MiddleRectangle />
    )).toEqual(true);
  });

  it('should render right rectangle', () => {
    const renderedComponent = shallow(<Loader2 />);
    expect(renderedComponent.contains(
      <RightRectangle />
    )).toEqual(true);
  });
});

