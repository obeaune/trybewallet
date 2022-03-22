import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteExpense, editExpense } from '../actions/index';

class ExpensesTable extends React.Component {
  handleClick = (id) => {
    const { dispatchForDelete } = this.props;
    dispatchForDelete(id);
  };

  render() {
    const { expensesFromState, btnEdit } = this.props;
    return (
      <table id="table">
        <thead>
          <tr>
            <th>Descrição </th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>

        <tbody>
          { expensesFromState.map((expense) => (
            <tr
              key={ expense.id }
              id={ expense.id }
            >
              <td>{ expense.description }</td>
              <td>{ expense.tag }</td>
              <td>{ expense.method }</td>
              <td>{ parseFloat(expense.value).toFixed(2) }</td>
              <td>{ expense.exchangeRates[expense.currency].name }</td>
              <td>
                { parseFloat(expense.exchangeRates[expense.currency].ask)
                  .toFixed(2) }
              </td>
              <td>
                {
                  (
                    parseFloat(expense.value)
                      * parseFloat(expense.exchangeRates[expense.currency].ask)
                  ).toFixed(2)
                }
              </td>
              <td>Real</td>
              <td>
                <button
                  // https://stackoverflow.com/questions/39818569/pass-id-through-on-click-react-js
                  onClick={ () => btnEdit(expense) }
                  type="button"
                  data-testid="edit-btn"
                >
                  Editar
                </button>
                <button
                  // https://stackoverflow.com/questions/39818569/pass-id-through-on-click-react-js
                  onClick={ () => this.handleClick(expense.id) }
                  type="button"
                  data-testid="delete-btn"
                >
                  Excluir
                </button>
              </td>
            </tr>
          )) }
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expensesFromState: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchForDelete: (id) => dispatch(deleteExpense(id)),
  dispatchForEdit: (expense) => dispatch(editExpense(expense)),
});

ExpensesTable.propTypes = {
  expensesFromState: PropTypes.arrayOf(PropTypes.object).isRequired,
  dispatchForDelete: PropTypes.func.isRequired,
  btnEdit: PropTypes.func.isRequired,
  // dispatchForEdit: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesTable);
