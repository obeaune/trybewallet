// Ao ser clicado, o botão deleta a linha da tabela, alterando o estado global e o header.
import { DELETE_EXPENSE } from '../actions/index';

const INITIAL_STATE = {
  expenses: [],
};

const deleteReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter((expense) => expense.id !== action.payload),
    };
  default:
    return state;
  }
};

export default deleteReducer;
