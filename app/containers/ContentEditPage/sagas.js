import { takeEvery } from 'redux-saga';
import { put } from 'redux-saga/effects';
import { SELECT_MENU, START_LOADER } from './constants';

export function* selectMenuWatcherSaga() {
  yield takeEvery(SELECT_MENU, startLoader);
}

export function* startLoader () {
  yield put({ type: START_LOADER });
}

// All sagas to be loaded
export default [
  selectMenuWatcherSaga
];
