import api from '../../utils/api';

import {ADD_POST, ADD_COMMENT} from './types';

export const addPost = post => {
  return async dispatch => {
    try {
      const response = api.post('/posts.json', {...post});
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
};

export const addComment = payload => {
  return {
    payload,
    type: ADD_COMMENT,
  };
};
