import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { email, expensesFromState } = this.props;
    const sumExpenses = expensesFromState
      .reduce((prev, curr) => prev + parseFloat(curr.value)
        * parseFloat(curr.exchangeRates[curr.currency].ask), 0).toFixed(2);
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
