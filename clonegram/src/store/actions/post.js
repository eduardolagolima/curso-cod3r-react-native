import api from '../../utils/api';

import {setMessage} from './message';
import {SET_POSTS, CREATING_POST, POST_CREATED} from './types';

export const addPost = post => {
  return async dispatch => {
    try {
      dispatch(creatingPost());
      await api.post('/posts.json', {...post});
      dispatch(fetchPosts());
      dispatch(postCreated());
    } catch (error) {
      dispatch(setMessage({text: error.toString(), title: 'Erro'}));
    }
  };
};

export const addComment = payload => {
  return async dispatch => {
    try {
      const response = await api.get(`/posts/${payload.postId}.json`);
      const comments = response.data.comments ?? [];
      comments.push(payload.comment);
      await api.patch(`/posts/${payload.postId}.json`, {comments});
      dispatch(fetchPosts());
    } catch (error) {
      dispatch(setMessage({text: error.toString(), title: 'Erro'}));
    }
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
      dispatch(setMessage({text: error.toString(), title: 'Erro'}));
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
