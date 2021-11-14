import api from '../../utils/api';

import {SET_POSTS, ADD_COMMENT} from './types';

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

export const setPosts = posts => {
  return {
    payload: posts,
    type: SET_POSTS,
  };
};

export const fetchPosts = () => {
  return async dispatch => {
    try {
      const response = await api.get('/posts.json');
      const rawPosts = response.data;
      const posts = [];
      for (let key in rawPosts) {
        posts.push({
          ...rawPosts[key],
          id: key,
        });
      }
      dispatch(setPosts(posts));
    } catch (error) {
      console.log(error);
    }
  };
};
