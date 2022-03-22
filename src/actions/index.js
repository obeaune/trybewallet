// Coloque aqui suas actions
export const SEND_EMAIL = 'SEND_EMAIL';
export const SEND_CURRENCIES = 'SEND_CURRENCIES';
export const SEND_INFO_EXPENSES = 'SEND_INFO_EXPENSES';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';

export const sendEmail = (email) => ({
  type: SEND_EMAIL,
  payload: email,
});

export const sendCurrencies = (currency) => ({
  type: SEND_CURRENCIES,
  payload: currency,
});

// vai ser chamada pelo Thunk
export const sendExpenses = (payload) => ({
  type: SEND_INFO_EXPENSES,
  payload,
});

// tentando usar uma actionThunk
export const actionThunk = (formData) => (async (dispatch) => {
  const requestedObj = await fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json());
  console.log(formData);
  const newExpenses = {
    ...formData,
    exchangeRates: requestedObj,
  };
  // chamar o sendExpenses
  dispatch(sendExpenses(newExpenses));
});

// action para o requisito 8
export const deleteExpense = (id) => ({
  type: DELETE_EXPENSE,
  payload: id,
});

// action para o requisito 9
export const editExpense = (expense) => ({
  type: EDIT_EXPENSE,
  payload: expense,
});
