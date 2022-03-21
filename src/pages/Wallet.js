import React from 'react';
import Header from '../components/Header';
import FormExpense from '../components/FormExpense';
import ExpensesTable from '../components/ExpensesTable';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <div>TrybeWallet</div>
        <Header />
        <FormExpense />
        <ExpensesTable />
      </>
    );
  }
}

export default Wallet;
