import {USER_LOGGED_IN, USER_LOGGED_OUT} from '../actions/types';

const initialState = {
  email: null,
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
    default:
      return state;
  }
};

export default reducer;
