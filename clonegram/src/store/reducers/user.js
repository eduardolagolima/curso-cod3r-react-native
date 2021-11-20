import {
  USER_LOGGED_IN,
  USER_LOGGED_OUT,
  LOADING_USER,
  USER_LOADED,
} from '../actions/types';

const initialState = {
  email: null,
  isLoading: false,
  name: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGGED_IN:
      return {
        ...state,
        email: action.payload.email,
        name: action.payload.name,
      };
    case USER_LOGGED_OUT:
      return {
        ...initialState,
        email: null,
        name: null,
      };
    case LOADING_USER:
      return {
        ...state,
        isLoading: true,
      };
    case USER_LOADED:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default reducer;
