import expect from 'expect';
import { selectMenuWatcherSaga, startLoader } from '../sagas';
import { takeEvery } from 'redux-saga';
import { SELECT_MENU } from '../constants';

describe('select menu saga watcher', () => {
  xit('should watch for SELECT_MENU action', () => {
    const takeDescriptor = selectMenuWatcherSaga().next().value;
    expect(takeDescriptor).toEqual(takeEvery(SELECT_MENU, startLoader));
  });
});

