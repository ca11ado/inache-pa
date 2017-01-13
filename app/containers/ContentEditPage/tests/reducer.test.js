import expect from 'expect';
import contentEditPageReducer, { initialState } from '../reducer';
import { SELECT_MENU } from '../constants';

describe('contentEditPageReducer', () => {
  it('returns the initial state', () => {
    expect(contentEditPageReducer(undefined, {})).toEqual(initialState);
  });

  it('should return an active menu item', () => {
    const index = initialState
      .get('sections')
      .findIndex((section) => section.get('api') === 'video');
    const expectedState = initialState
      .updateIn(
        ['sections', index],
        (video) => video.set('isActive', true)
      );

    expect(
      contentEditPageReducer(initialState, {
        type: SELECT_MENU,
        menu: 'video'
      })
    ).toEqual(expectedState);
  });
});
