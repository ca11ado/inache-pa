import expect from 'expect';
import contentEditPageReducer from '../reducer';
import { fromJS } from 'immutable';
import { initialState } from '../reducer';

describe('contentEditPageReducer', () => {
  it('returns the initial state', () => {
    expect(contentEditPageReducer(undefined, {})).toEqual(initialState);
  });
});
