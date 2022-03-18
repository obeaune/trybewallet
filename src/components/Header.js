import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { email, expensesFromState } = this.props;
    const sumExpenses = expensesFromState
    // ([curr.currency]>>>.<<<ask) é o valor em dolar
      .reduce((prev, curr) => prev + curr.value
        * (curr.exchangeRates[curr.currency].ask), 0);
    return (
      <header>
        <p data-testid="email-field">{ email }</p>
        <p data-testid="total-field">
          Valor total:
          { sumExpenses }
        </p>
        <p data-testid="header-currency-field">Currency: BRL</p>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expensesFromState: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expensesFromState: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
