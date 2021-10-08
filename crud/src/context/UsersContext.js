import React, {createContext, useReducer} from 'react';

import users from '../data/users';

const initialState = {users};
const UsersContext = createContext({});

const actions = {
  deleteUser(state, action) {
    return {
      ...state,
      users: state.users.filter(user => user.id !== action.payload.user.id),
    };
  },
};

const UsersProvider = props => {
  function reducer(state, action) {
    if (action.type) {
      return actions[action.type](state, action);
    }

    return state;
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UsersContext.Provider value={{state, dispatch}}>
      {props.children}
    </UsersContext.Provider>
  );
};

export {UsersContext, UsersProvider};
