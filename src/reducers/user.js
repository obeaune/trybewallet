// Esse reducer será responsável por tratar as informações da pessoa usuária
import { SEND_EMAIL } from '../actions';

const INITIAL_EMAIL = '';

const userReducer = (state = INITIAL_EMAIL, action) => {
  switch (action.type) {
  case SEND_EMAIL:
    return {
      ...state,
      email: action.payload,
    };
  default:
    return state;
  }
};

export default userReducer;
