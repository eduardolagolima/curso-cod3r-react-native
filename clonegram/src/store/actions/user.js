import api from '../../utils/api';
import authenticationApi from '../../utils/authenticationApi';

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

export const createUser = user => {
  return async dispatch => {
    try {
      const response = await authenticationApi.post('/signupNewUser', {
        email: user.email,
        password: user.password,
        returnSecureToken: true,
      });

      await api.put(`/users/${response.data.localId}.json`, {
        name: user.name,
      });

      console.log('Usuário criado com sucesso');
    } catch (error) {
      console.log(error);
    }
  };
};
