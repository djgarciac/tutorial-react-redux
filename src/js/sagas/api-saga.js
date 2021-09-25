import { takeEvery, call, put } from 'redux-saga/effects';
import { API_ERRORED, DATA_LOADED, DATA_REQUESTED } from '../constants/action-types';

const watcherSaga = function* () {
  yield takeEvery(DATA_REQUESTED, workerSaga);
};

const workerSaga = function* () {
  try {
    const payload = yield call(getData);
    yield put({ type: DATA_LOADED, payload });
  } catch (e) {
    yield put({ type: API_ERRORED, payload: e });
  }
};

const getData = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return response.json();
  } catch (e) {
    throw new Error('Error al consumir');
  }
};

export default watcherSaga;
