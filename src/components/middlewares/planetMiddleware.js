import axios from 'axios';
import { FETCH_PLANETS, savePlanets } from '../../actions/exploration';
import API_BASE_URL from '../../../apibase';

const planetMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_PLANETS:
      axios
        .get(`${API_BASE_URL}/public/api/planets`)
        .then((response) => {
          store.dispatch(savePlanets(response.data));
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

export default planetMiddleware;
