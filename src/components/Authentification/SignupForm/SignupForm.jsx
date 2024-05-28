import PropTypes from 'prop-types';
import { useState } from 'react';
import './SignupForm.scss';

import Field from '../LoginForm/Field/Field';

const SignupForm = ({
  firstname,
  lastname,
  pseudo,
  email,
  password,
  changeField,
  handleSignup,
  onBackClick,
}) => {
  const [passwordError, setPasswordError] = useState('');

  const validatePassword = (userPassword) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(userPassword);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const userPassword = password;

    if (!validatePassword(userPassword)) {
      setPasswordError(
        'Le mot de passe doit contenir au mois 1 lettre majuscule, 1 lettre minuscule, 1 chiffre, 1 caractère spécial et faire au moins 8 caractères.'
      );
    } else {
      setPasswordError('');
      handleSignup();
    }
  };

  return (
    <form
      autoComplete="off"
      className="signup-form"
      onSubmit={handleSubmit}
      required
    >
      <p>FORMULAIRE D&apos;INSCRIPTION</p>
      {passwordError && <p className="signup-form-message">{passwordError}</p>}
      <Field
        name="firstname"
        className="field"
        placeholder="Prénom"
        onChange={changeField}
        value={firstname}
      />
      <Field
        name="lastname"
        className="field"
        placeholder="Nom"
        onChange={changeField}
        value={lastname}
      />
      <Field
        name="nickname"
        className="field"
        placeholder="Pseudo"
        onChange={changeField}
        value={pseudo}
      />
      <Field
        name="email"
        type="email"
        className="field"
        placeholder="Email"
        onChange={changeField}
        value={email}
      />
      <Field
        name="password"
        type="password"
        className="field"
        placeholder="Mot de passe"
        onChange={changeField}
        value={password}
      />
      <button type="submit" className="signup-form-button">
        S&apos;INSCRIRE
      </button>
      <div>
        <button className="nav-menu goback" type="button" onClick={onBackClick}>
          <span className="error-button">
            <i className="ri-arrow-go-back-fill" />
          </span>
        </button>
      </div>
    </form>
  );
};

SignupForm.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  pseudo: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleSignup: PropTypes.func.isRequired,
  onBackClick: PropTypes.func.isRequired,
};

export default SignupForm;
