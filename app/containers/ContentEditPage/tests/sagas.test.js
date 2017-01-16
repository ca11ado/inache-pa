import expect from 'expect';
import { selectMenuWatcherSaga, startLoader, getContent } from '../sagas';
import { takeEvery } from 'redux-saga';
import { fork } from 'redux-saga/effects';
import { SELECT_MENU } from '../constants';

describe('select menu saga watcher', () => {
  it('should watch for SELECT_MENU action and ex startLoader', () => {
    const watcherGenerator = selectMenuWatcherSaga();
    const takeDescriptor = watcherGenerator.next().value;
    expect(takeDescriptor).toEqual(fork(takeEvery, SELECT_MENU, startLoader));
  });

  it('should watch for SELECT_MENU action and ex getContent', () => {
    const watcherGenerator = selectMenuWatcherSaga();
    watcherGenerator.next();
    const takeDescriptor = watcherGenerator.next().value;
    expect(takeDescriptor).toEqual(fork(takeEvery, SELECT_MENU, getContent));
  });
});

