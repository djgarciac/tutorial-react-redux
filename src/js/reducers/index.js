import { ADD_ARTICLE } from '../constants/action-types';

const initialState = {
  articles: []
};

const rootReducer = (state = initialState, action) => {
  if (action.type === ADD_ARTICLE) {
    return {
      articles: [...action.payload]
    };
  }

  return state;
};

export default rootReducer;
