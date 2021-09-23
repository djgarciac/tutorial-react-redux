import { ADD_ARTICLE, DATA_LOADED } from '../constants/action-types';

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

  return state;
};

export default rootReducer;
