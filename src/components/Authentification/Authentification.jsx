import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import LoginForm from './LoginForm/LoginForm';
import SignupForm from './SignupForm/SignupForm';
import './Authentification.scss';

import {
  changeLoginField,
  submitLogin,
  submitSignup,
  updateUserStore,
} from '../../actions/user';

const Authentification = () => {
  const dispatch = useDispatch();

  const [showSignupForm, setShowSignupForm] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(true);

  const firstnameValue = useSelector((state) => state.user.firstname);
  const lastnameValue = useSelector((state) => state.user.lastname);
  const emailValue = useSelector((state) => state.user.email);
  const passwordValue = useSelector((state) => state.user.password);
  const nickname = useSelector((state) => state.user.nickname);
  const isLogged = useSelector((state) => state.user.isLogged);

  const loggedMessage = `Bienvenue ${nickname}`;

  return (
    <div className="authentification">
      {showSignupForm ? (
        <SignupForm
          firstname={firstnameValue}
          lastname={lastnameValue}
          pseudo={nickname}
          email={emailValue}
          password={passwordValue}
          changeField={(newValue, identifier) => {
            dispatch(changeLoginField(newValue, identifier));
          }}
          handleSignup={() => {
            dispatch(submitSignup());
          }}
          onBackClick={() => {
            setShowSignupForm(false);
            setShowLoginForm(true);
          }}
        />
      ) : (
        showLoginForm && (
          <LoginForm
            email={emailValue}
            password={passwordValue}
            changeField={(newValue, identifier) => {
              dispatch(changeLoginField(newValue, identifier));
            }}
            handleLogin={() => {
              dispatch(submitLogin());
            }}
            handleLogout={() => {
              localStorage.setItem('id', '');
              localStorage.setItem('token', '');
              localStorage.setItem('nickname', '');
              localStorage.setItem('isLogged', 'false');
              dispatch(updateUserStore());
              toast.error('Vous êtes déconnecté !');
            }}
            isLogged={isLogged}
            loggedMessage={loggedMessage}
            setShowSignupForm={setShowSignupForm}
          />
        )
      )}
    </div>
  );
};

export default Authentification;
