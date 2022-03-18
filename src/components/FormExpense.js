import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actionThunk, sendCurrencies } from '../actions';

class FormExpense extends Component {
  state = {
    value: '',
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
  };

  fetchKeysAPI = async () => {
    const requestedObj = await fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json());
    const requestedKeys = Object.keys(requestedObj)
    // Remover das informações trazidas pela API a opção 'USDT' (Dólar Turismo).
      .filter((currency) => currency !== 'USDT');
    return requestedKeys;
  };

  componentDidMount = async () => {
    const keys = await this.fetchKeysAPI();
    const { disptachFormCurrencies } = this.props;
    disptachFormCurrencies(keys);
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  }

  handleClick = (event) => {
    event.preventDefault();
    const { dispatchFormExpense } = this.props; // func
    dispatchFormExpense({ ...this.state }); // vai pro thunk
    // limpando state
    this.setState({
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
    });
  };

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { currenciesFromState } = this.props;
    return (
      <div>
        <form>
          <label htmlFor="value-input">
            Valor
            <input
              data-testid="value-input"
              type="number"
              name="value"
              min="0"
              value={ value }
              onChange={ this.handleChange }
            />
          </label>

          <label htmlFor="description-input">
            Descrição
            <input
              data-testid="description-input"
              type="text"
              name="description"
              value={ description }
              onChange={ this.handleChange }
            />
          </label>

          <label htmlFor="currency-input">
            Moeda
            <select
              placeholder="choose one"
              data-testid="currency-input"
              id="currency-input"
              name="currency"
              value={ currency }
              onChange={ this.handleChange }
            >
              { currenciesFromState.map((key) => (
                <option
                  key={ key }
                  value={ key }
                  data-testid={ key }
                >
                  { key }
                </option>
              )) }
            </select>
          </label>

          <label htmlFor="method-input">
            Método de Pagamento
            <select
              data-testid="method-input"
              name="method"
              id="method-input"
              value={ method }
              onChange={ this.handleChange }
            >
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>

          <label htmlFor="tag-input">
            Categoria
            <select
              data-testid="tag-input"
              id="tag-input"
              name="tag"
              value={ tag }
              onChange={ this.handleChange }
            >
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>

          <button
            type="submit"
            onClick={ this.handleClick }
          >
            Adicionar despesa
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currenciesFromState: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchFormExpense: (formData) => dispatch(actionThunk(formData)),
  disptachFormCurrencies: (currencies) => dispatch(sendCurrencies(currencies)),
});

FormExpense.propTypes = {
  dispatchFormExpense: PropTypes.func.isRequired,
  disptachFormCurrencies: PropTypes.func.isRequired,
  currenciesFromState: PropTypes.arrayOf(PropTypes.string).isRequired,

};

export default connect(mapStateToProps, mapDispatchToProps)(FormExpense);
