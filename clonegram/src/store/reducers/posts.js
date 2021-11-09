import {ADD_POST} from '../actions/types';

const initialState = {
  posts: [
    {
      comments: [
        {
          comment: 'Comentário 123456',
          nickname: 'João Souza',
        },
        {
          comment: 'Comentário 789',
          nickname: 'Pedro Pereira Silva',
        },
      ],
      email: 'fulano1@teste.com',
      id: 1,
      image: require('../../../assets/images/fence.jpg'),
      nickname: 'Fulano 1',
    },
    {
      comments: [],
      email: 'fulano2@teste.com',
      id: 2,
      image: require('../../../assets/images/bw.jpg'),
      nickname: 'Fulano 2',
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: state.posts.concat({
          ...action.payload,
        }),
      };
    default:
      return state;
  }
};

export default reducer;
