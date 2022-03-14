// Coloque aqui suas actions
export const SEND_EMAIL = 'SEND_EMAIL';
export const SEND_VALUES_ENTRY = 'SEND_VALUES_ENTRY';

export const sendEmail = (email) => ({
  type: SEND_EMAIL,
  payload: email,
});

// export const valuesWallet = ({ currencies, expenses }) => ({
//   type: SEND_VALUES_ENTRY,
//   payload: {
//     currencies,
//     expenses,
//   },
// });
