import axios from 'axios';
import { FETCH_PICTURES, savePictures } from '../../actions/dailyPicture';

const dailyPictureMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_PICTURES:
      axios
        .get(
          'https://api.nasa.gov/planetary/apod?api_key=uEXvSBYYhetlpiwy4cJUGpAEZdaaXFGdyYuhPWgZ'
        )
        .then((response) => {
          store.dispatch(savePictures(response.data));
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

export default dailyPictureMiddleware;
