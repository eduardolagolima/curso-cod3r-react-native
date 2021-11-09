import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import postsReducer from './reducers/posts';
import usersReducer from './reducers/users';

const reducers = combineReducers({
  postsReducer,
  usersReducer,
});

const store = () => {
  return createStore(reducers, compose(applyMiddleware(thunk)));
};

export {store};
