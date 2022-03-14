// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { SEND_VALUES_ENTRY } from '../actions';

const INITIAL_STATE_WALLET = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE_WALLET, action) => {
  switch (action.type) {
  case SEND_VALUES_ENTRY:
    return {
      ...state,
      ...action.payload,
    };
  default:
    return state;
  }
};

export default wallet;
