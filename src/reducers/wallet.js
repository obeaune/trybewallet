// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { SEND_INFO_EXPENSES, SEND_CURRENCIES, DELETE_EXPENSE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SEND_INFO_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, { id: state.expenses.length, ...action.payload }],
    };
  case SEND_CURRENCIES:
    return {
      ...state,
      // não usar [action.payload] pois seria lido como uma [ [] ]
      currencies: action.payload,
    };
  // fazer separado não estava dando certo
  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter((exp) => exp.id !== action.payload),
    };
  default:
    return state;
  }
};

export default walletReducer;
