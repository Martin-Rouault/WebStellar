// === action types
export const CHANGE_LOGIN_FIELD = 'CHANGE_LOGIN_FIELD';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const HANDLE_SUCCESSFUL_LOGIN = 'HANDLE_SUCCESSFUL_LOGIN';
export const SUBMIT_SIGNUP = 'SUBMIT_SIGNUP';
export const HANDLE_SUCCESSFUL_SIGNUP = 'HANDLE_SUCCESSFUL_SIGNUP';
export const UPDATE_USER_STORE = 'UPDATE_USER_STORE';

// === action creators
export const changeLoginField = (newValue, identifier) => ({
  type: CHANGE_LOGIN_FIELD,
  newValue,
  identifier,
});

export const submitLogin = () => ({
  type: SUBMIT_LOGIN,
});

export const handleSuccessfulLogin = (nickname, token, id) => ({
  type: HANDLE_SUCCESSFUL_LOGIN,
  nickname,
  token,
  id,
});

export const updateUserStore = () => ({
  type: UPDATE_USER_STORE,
});

export const submitSignup = () => ({
  type: SUBMIT_SIGNUP,
});

export const handleSuccessfulSignup = () => ({
  type: HANDLE_SUCCESSFUL_SIGNUP,
});
