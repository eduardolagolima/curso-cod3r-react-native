import {USER_LOGGED_IN, USER_LOGGED_OUT} from './types';

export const login = user => {
  return {
    payload: user,
    type: USER_LOGGED_IN,
  };
};

export const logout = () => {
  return {
    type: USER_LOGGED_OUT,
  };
};
