import { ADD_ARTICLE } from '../constants/action-types';

export const addArticle = (payload) => {
  return {
    type: ADD_ARTICLE,
    payload
  };
};

export const getData = () => {
  return async (dispatch) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const json = await response.json();
    return dispatch({
      type: 'DATA_LOADED',
      payload: json
    });
  }
};
