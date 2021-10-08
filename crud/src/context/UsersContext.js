import React, {createContext, useReducer} from 'react';

import users from '../data/users';

const initialState = {users};
const UsersContext = createContext({});

const actions = {
  createUser(state, action) {
    const newUser = action.payload.user;
    const maxUserId = state.users
      .map(({id}) => id)
      .reduce((acc, cur) => (cur > acc ? cur : acc));

    newUser.id = maxUserId + 1;

    return {
      ...state,
      users: [...state.users, newUser],
    };
  },
  updateUser(state, action) {
    const updatedUser = action.payload.user;

    return {
      ...state,
      users: state.users.map(user =>
        user.id === updatedUser.id ? updatedUser : user,
      ),
    };
  },
  deleteUser(state, action) {
    const userToDelete = action.payload.user;

    return {
      ...state,
      users: state.users.filter(user => user.id !== userToDelete.id),
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
