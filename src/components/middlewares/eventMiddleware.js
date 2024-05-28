import axios from 'axios';
import { FETCH_EVENTS, saveEvents } from '../../actions/event';
import API_BASE_URL from '../../../apibase';

const eventMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_EVENTS:
      axios
        .get(`${API_BASE_URL}/public/api/events`)
        .then((response) => {
          store.dispatch(saveEvents(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    default:
      break;
  }
  next(action);
};

export default eventMiddleware;
