import React from 'react';
import Header from '../components/Header';
import FormExpense from '../components/FormExpense';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <div>TrybeWallet</div>
        <Header />
        <FormExpense />
      </>
    );
  }
}

export default Wallet;
