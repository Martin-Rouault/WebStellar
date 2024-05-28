/* eslint-disable no-case-declarations */
import axios from 'axios';
import {
  FETCH_ARTICLES,
  FETCH_COMMENTS,
  saveArticles,
  saveComments,
} from '../../actions/blog';
import API_BASE_URL from '../../../apibase';

const blogMiddleware = (store) => (next) => (action) => {
  const { postId } = store.getState().blog;
  switch (action.type) {
    case FETCH_ARTICLES:
      axios
        .get(`${API_BASE_URL}/public/api/posts`)
        .then((response) => {
          store.dispatch(saveArticles(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      break;

    case FETCH_COMMENTS:
      axios
        .get(`${API_BASE_URL}/public/api/comments/post/${postId}`)
        .then((response) => {
          store.dispatch(saveComments(response.data));
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

export default blogMiddleware;
