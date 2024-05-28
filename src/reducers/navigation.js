import { TOGGLE_SIDEMENU } from '../actions/navigation';

export const initialState = {
  isMenuOpen: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_SIDEMENU:
      return {
        ...state,
        isMenuOpen: !state.isMenuOpen,
      };

    default:
      return state;
  }
};

export default reducer;
