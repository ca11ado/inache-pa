import LoaderRound, {
  SmallestRound,
  SmallRound,
  BigRound
} from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<LoaderRound />', () => {
  it('should render smalles round', () => {
    const renderedComponent = shallow(<LoaderRound />);
    expect(renderedComponent.contains(
      <SmallestRound color={'red'} />
    )).toEqual(true);
  });

  it('should render small round', () => {
    const renderedComponent = shallow(<LoaderRound />);
    expect(renderedComponent.contains(
      <SmallRound>
        <SmallestRound color={'red'} />
      </SmallRound>
    )).toEqual(true);
  });

  it('should render big round', () => {
    const renderedComponent = shallow(<LoaderRound />);
    expect(renderedComponent.contains(
      <BigRound color={'red'}>
        <SmallRound>
          <SmallestRound color={'red'} />
        </SmallRound>
      </BigRound>
    )).toEqual(true);
  });
});
