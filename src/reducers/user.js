import {
  CHANGE_LOGIN_FIELD,
  HANDLE_SUCCESSFUL_SIGNUP,
  HANDLE_SUCCESSFUL_LOGIN,
  UPDATE_USER_STORE,
} from '../actions/user';

export const initialState = {
  id: localStorage.getItem('id') || '',
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  nickname: localStorage.getItem('nickname') || '',
  token: localStorage.getItem('token') || '',
  isLogged: localStorage.getItem('isLogged') === 'true',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_LOGIN_FIELD:
      return {
        ...state,
        [action.identifier]: action.newValue,
      };

    case HANDLE_SUCCESSFUL_LOGIN:
      return {
        ...state,
        nickname: action.nickname,
        token: action.token,
        isLogged: true,
        id: action.id,

        email: '',
        password: '',
      };

    case HANDLE_SUCCESSFUL_SIGNUP:
      return {
        ...state,
        firstname: '',
        lastname: '',
        nickname: '',
        email: '',
        password: '',
      };

    case UPDATE_USER_STORE:
      return {
        ...state,
        token: '',
        nickname: '',
        id: '',
        isLogged: false,
      };

    default:
      return state;
  }
};

export default reducer;
