import { applyMiddleware, createStore } from 'redux';
import { forbiddenWordsMiddleware } from '../middleware';
import rootReducer from '../reducers/index';

const store = createStore(
  rootReducer,
  applyMiddleware(forbiddenWordsMiddleware)
);

export default store;
