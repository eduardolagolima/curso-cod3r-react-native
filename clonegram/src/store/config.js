import {createStore, combineReducers} from 'redux';

import postsReducer from './reducers/posts';
import usersReducer from './reducers/users';

const reducers = combineReducers({
  postsReducer,
  usersReducer,
});

const store = () => {
  return createStore(reducers);
};

export {store};
