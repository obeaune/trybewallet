import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { sendEmail } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      isButtonDisabled: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.validationButton = this.validationButton.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    }, () => this.validationButton());
  }

  // ref para regex do email:
  // https://stackoverflow.com/questions/46155/whats-the-best-way-to-validate-an-email-address-in-javascript
  validationButton() {
    const { email, password } = this.state;
    const minSizePassword = 6;
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (password.length >= minSizePassword && validEmail.test(email)) {
      this.setState({
        isButtonDisabled: false,
      });
    } else {
      this.setState({
        isButtonDisabled: true,
      });
    }
  }

  render() {
    const { dispatchFormData, history } = this.props;
    const { isButtonDisabled, email, password } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="email">
            Email:
            <input
              data-testid="email-input"
              type="email"
              name="email"
              value={ email }
              onChange={ this.handleChange }
            />
          </label>

          <label htmlFor="password">
            Senha:
            <input
              data-testid="password-input"
              type="password"
              name="password"
              value={ password }
              onChange={ this.handleChange }
            />
          </label>

          <button
            type="button"
            disabled={ isButtonDisabled }
            onClick={ () => {
              dispatchFormData(email);
              history.push('/carteira');
            } }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchFormData: (state) => dispatch(sendEmail(state)),
});

Login.propTypes = {
  dispatchFormData: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
