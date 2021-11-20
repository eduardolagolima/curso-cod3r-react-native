import {SET_MESSAGE} from './types';

export const setMessage = message => {
  return {
    payload: message,
    type: SET_MESSAGE,
  };
};
