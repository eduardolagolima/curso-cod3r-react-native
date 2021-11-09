import {ADD_POST, ADD_COMMENT} from './types';

export const addPost = post => {
  return {
    payload: post,
    type: ADD_POST,
  };
};

export const addComment = payload => {
  return {
    payload,
    type: ADD_COMMENT,
  };
};
