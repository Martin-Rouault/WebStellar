import { applyMiddleware, legacy_createStore as createStore } from 'redux';

import { composeWithDevTools } from '@redux-devtools/extension';

import reducer from '../reducers';

import userMiddleware from '../components/middlewares/userMiddleware';
import eventMiddleware from '../components/middlewares/eventMiddleware';
import blogMiddleware from '../components/middlewares/blogMiddleware';
import planetMiddleware from '../components/middlewares/planetMiddleware';
import dailyPictureMiddleware from '../components/middlewares/dailyPictureMiddleware';

const superEnhancer = composeWithDevTools(
  applyMiddleware(
    userMiddleware,
    eventMiddleware,
    blogMiddleware,
    planetMiddleware,
    dailyPictureMiddleware
  )
);

const store = createStore(
  // reducer
  reducer,
  // enhancer
  superEnhancer
);

export default store;
