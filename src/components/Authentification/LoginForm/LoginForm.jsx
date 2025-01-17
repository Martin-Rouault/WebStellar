import PropTypes from 'prop-types';
import { toast } from 'react-hot-toast';
import Field from './Field/Field';

import './LoginForm.scss';

const LoginForm = ({
  email,
  password,
  changeField,
  handleLogin,
  handleLogout,
  isLogged,
  loggedMessage,
  setShowSignupForm,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
  };

  return (
    <div className="login-form">
      {isLogged && (
        <div className="login-form-logged">
          <p className="login-form-message">{loggedMessage}</p>
          <button
            type="button"
            className="login-form-button"
            onClick={handleLogout}
          >
            Déconnexion
          </button>
        </div>
      )}
      {!isLogged && (
        <form
          autoComplete="off"
          className="login-form-element"
          onSubmit={handleSubmit}
        >
          <p>CONNEXION</p>
          <Field
            name="email"
            className="field"
            placeholder="Adresse Email"
            onChange={changeField}
            value={email}
          />
          <Field
            name="password"
            className="field"
            type="password"
            placeholder="Mot de passe"
            onChange={changeField}
            value={password}
          />
          <button type="submit" className="login-form-button">
            SE CONNECTER
          </button>
          <div className="login-form-sign">
            <p>Pas de compte ?</p>
            <button
              type="button"
              className="login-form-button"
              onClick={() => setShowSignupForm(true)}
            >
              S&apos;INSCRIRE
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
  isLogged: PropTypes.bool,
  loggedMessage: PropTypes.string,
  setShowSignupForm: PropTypes.func.isRequired,
};

LoginForm.defaultProps = {
  isLogged: null,
  loggedMessage: 'Connecté',
};

export default LoginForm;
