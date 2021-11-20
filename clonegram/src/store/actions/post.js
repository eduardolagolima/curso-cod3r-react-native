import api from '../../utils/api';

import {SET_POSTS, ADD_COMMENT, CREATING_POST, POST_CREATED} from './types';

export const addPost = post => {
  return async dispatch => {
    try {
      dispatch(creatingPost());
      await api.post('/posts.json', {...post});
      dispatch(fetchPosts());
      dispatch(postCreated());
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
      dispatch(setPosts(posts.reverse()));
    } catch (error) {
      console.log(error);
    }
  };
};

export const creatingPost = () => {
  return {
    type: CREATING_POST,
  };
};

export const postCreated = () => {
  return {
    type: POST_CREATED,
  };
};
