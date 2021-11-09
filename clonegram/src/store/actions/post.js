import {ADD_POST} from './types';

export const addPost = post => {
  return {
    payload: post,
    type: ADD_POST,
  };
};
