import { ContentEditPage } from '../index';

import expect from 'expect';
import { render } from 'enzyme';
import React from 'react';

describe('<ContentEditPage />', () => {
  it('Should render two sections', () => {
    const renderedComponent = render(
      <ContentEditPage />
    );
    expect(renderedComponent.find('section').length).toBe(2);
  });
});
