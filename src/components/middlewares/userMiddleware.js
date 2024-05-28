import axios from 'axios';
import { toast } from 'react-hot-toast';
import {
  SUBMIT_LOGIN,
  SUBMIT_SIGNUP,
  handleSuccessfulLogin,
  handleSuccessfulSignup,
} from '../../actions/user';

import API_BASE_URL from '../../../apibase';

const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_LOGIN:
      axios
        .post(`${API_BASE_URL}/public/api/login_check`, {
          username: store.getState().user.email,
          password: store.getState().user.password,
        })
        .then((response) => {
          store.dispatch(
            handleSuccessfulLogin(
              response.data.pseudo,
              response.data.token,
              response.data.id
            ),
            toast.success('Vous êtes connecté !')
          );
          localStorage.setItem('id', response.data.id);
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('isLogged', true);
          localStorage.setItem('nickname', response.data.pseudo);
        })
        .catch((error) => {
          console.log(error);
          toast.error("Une erreur s'est produite !");
        });
      break;

    case SUBMIT_SIGNUP:
      axios
        .post(`${API_BASE_URL}/public/api/users`, {
          mail: store.getState().user.email,
          password: store.getState().user.password,
          firstname: store.getState().user.firstname,
          lastname: store.getState().user.lastname,
          pseudo: store.getState().user.nickname,
        })
        .then((response) => {
          store.dispatch(handleSuccessfulSignup());
          toast.success('Vous êtes inscrit !');
        })
        .catch((error) => {
          console.log(error);
          toast.error("Une erreur s'est produite !");
        });
      break;

    default:
  }
  next(action);
};

export default authMiddleware;
