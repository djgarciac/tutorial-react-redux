import { ADD_ARTICLE, API_ERRORED, DATA_LOADED } from '../constants/action-types';

const initialState = {
  articles: [],
  remoteArticles: []
};

const rootReducer = (state = initialState, action) => {
  if (action.type === ADD_ARTICLE) {
    return {
      ...state,
      articles: [...state.articles, action.payload]
    };
  }

  if (action.type === DATA_LOADED) {
    return {
      ...state,
      remoteArticles: [
        ...state.remoteArticles,
        ...action.payload
      ]
    };
  }

  if (action.type === API_ERRORED) {
    return {
      ...state,
      remoteArticles: []
    };
  }

  return state;
};

export default rootReducer;
