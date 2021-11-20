import {SET_MESSAGE} from '../actions/types';

const initialState = {
  text: '',
  title: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MESSAGE:
      return {
        ...state,
        text: action.payload.text,
        title: action.payload.title || 'Mensagem',
      };
    default:
      return state;
  }
};

export default reducer;
