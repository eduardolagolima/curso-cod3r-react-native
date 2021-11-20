import api from '../../utils/api';
import authenticationApi from '../../utils/authenticationApi';

import {setMessage} from './message';
import {
  USER_LOGGED_IN,
  USER_LOGGED_OUT,
  LOADING_USER,
  USER_LOADED,
} from './types';

export const userLogged = user => {
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

export const createUser = user => {
  return async dispatch => {
    try {
      dispatch(loadingUser());

      const newUserData = (
        await authenticationApi.post('/signupNewUser', {
          email: user.email,
          password: user.password,
          returnSecureToken: true,
        })
      ).data;

      await api.put(`/users/${newUserData.localId}.json`, {
        name: user.name,
      });

      dispatch(userLogged(user));
      dispatch(userLoaded());
    } catch (error) {
      dispatch(setMessage({text: error.toString(), title: 'Erro'}));
    }
  };
};

export const loadingUser = () => {
  return {
    type: LOADING_USER,
  };
};

export const userLoaded = () => {
  return {
    type: USER_LOADED,
  };
};

export const login = user => {
  return async dispatch => {
    try {
      dispatch(loadingUser());

      const verifyPasswordData = (
        await authenticationApi.post('/verifyPassword', {
          email: user.email,
          password: user.password,
          returnSecureToken: true,
        })
      ).data;

      user.token = verifyPasswordData.idToken;

      const userData = (
        await api.get(`/users/${verifyPasswordData.localId}.json`)
      ).data;

      user.name = userData.name;
      dispatch(userLogged(user));
      dispatch(userLoaded());
    } catch (error) {
      dispatch(setMessage({text: error.toString(), title: 'Erro'}));
    }
  };
};
