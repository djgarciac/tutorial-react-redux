import { takeEvery, call, put } from 'redux-saga/effects';
import { API_ERRORED, DATA_LOADED, DATA_REQUESTED } from '../constants/action-types';

const watcherSaga = function* () {
  yield takeEvery(DATA_REQUESTED, workerSaga);
};

const workerSaga = function* (action) {
  try {
    const payload = yield call(getData, action.payload.url);
    yield put({ type: DATA_LOADED, payload });
  } catch (e) {
    yield put({ type: API_ERRORED, payload: e });
  }
};

const getData = async (url) => {
  try {
    const response = await fetch(url);
    return response.json();
  } catch (e) {
    throw new Error('Error al consumir');
  }
};

export default watcherSaga;
