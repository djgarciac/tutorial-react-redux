import { applyMiddleware, createStore, compose } from 'redux';
import { forbiddenWordsMiddleware } from '../middleware';
import rootReducer from '../reducers/index';
import thunk from 'redux-thunk';

const storeEnhancers = (typeof window !== 'undefined' && window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']) || compose;

const store = createStore(
  rootReducer,
  storeEnhancers(applyMiddleware(forbiddenWordsMiddleware, thunk))
);

export default store;
