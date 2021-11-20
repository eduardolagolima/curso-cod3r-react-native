import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import message from './reducers/message';
import posts from './reducers/posts';
import user from './reducers/user';

const reducers = combineReducers({
  message,
  posts,
  user,
});

const store = () => {
  return createStore(reducers, compose(applyMiddleware(thunk)));
};

export {store};
