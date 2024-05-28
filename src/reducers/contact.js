import { HANDLE_SUCCESSFUL_CONTACT } from '../actions/contact';

export const initialState = {
  isMessageSent: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case HANDLE_SUCCESSFUL_CONTACT:
      return {
        ...state,
        isMessageSent: true,
      };

    default:
      return state;
  }
};

export default reducer;
