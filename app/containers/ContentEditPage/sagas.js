import { takeEvery } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import request from '../../utils/request';
import {
  SELECT_MENU,
  START_LOADER,
  STOP_LOADER,
  CONTENT_LOADED_SUCCESSEFULLY,
  CONTENT_LOADED_UNSUCCESSEFULLY
} from './constants';

export function* selectMenuWatcherSaga () {
  yield takeEvery(SELECT_MENU, startLoader);
  yield takeEvery(SELECT_MENU, getContent);
}

export function* contentLoadedWatcherSaga () {
  yield takeEvery(CONTENT_LOADED_SUCCESSEFULLY, stopLoader);
}

export function* getContent () {
  // const username = yield select(selectUsername());
  const section = 'tours';
  const requestURL = `http://127.0.0.1:3008/api/${section}`;

  try {
    const content = yield call(request, requestURL);
    // yield put(reposLoaded(repos, username));
    yield put({ type: CONTENT_LOADED_SUCCESSEFULLY, content });
  } catch (err) {
    // yield put(repoLoadingError(err));
    yield put({ type: CONTENT_LOADED_UNSUCCESSEFULLY });
  }
}

export function* startLoader () {
  yield put({ type: START_LOADER });
}

export function* stopLoader () {
  yield put({ type: STOP_LOADER });
}

// All sagas to be loaded
export default [
  selectMenuWatcherSaga,
  contentLoadedWatcherSaga
];
