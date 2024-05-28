import { SAVE_DATE, SAVE_EVENTS } from '../actions/event';

export const initialState = {
  eventList: [],
  selectedDate: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_EVENTS:
      return {
        ...state,
        eventList: action.events,
      };

    case SAVE_DATE:
      return {
        ...state,
        selectedDate: action.selectedDate,
      };

    default:
      return state;
  }
};

export default reducer;
