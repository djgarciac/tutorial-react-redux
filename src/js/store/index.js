import { applyMiddleware, createStore, compose } from 'redux';
import { forbiddenWordsMiddleware } from '../middleware';
import rootReducer from '../reducers/index';
import createSagaMiddleware from '@redux-saga/core';
import apiSaga from '../sagas/api-saga';

const initialiseSagaMiddleware = createSagaMiddleware();
const storeEnhancers = (typeof window !== 'undefined' && window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']) || compose;

const store = createStore(
  rootReducer,
  storeEnhancers(
    applyMiddleware(forbiddenWordsMiddleware, initialiseSagaMiddleware)
  )
);

initialiseSagaMiddleware.run(apiSaga);

export default store;
