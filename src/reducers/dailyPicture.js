import { SAVE_PICTURES } from '../actions/dailyPicture';

export const initialState = {
  pictureList: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_PICTURES:
      return {
        ...state,
        pictureList: action.pictures,
      };

    default:
      return state;
  }
};

export default reducer;
