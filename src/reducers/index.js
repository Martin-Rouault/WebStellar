import { combineReducers } from 'redux';

import userReducer from './user';
import navigationReducer from './navigation';
import explorationReducer from './exploration';
import eventReducer from './event';
import blogReducer from './blog';
import dailyPictureReducer from './dailyPicture';
import contactReducer from './contact';

const rootReducer = combineReducers({
  user: userReducer,
  navigation: navigationReducer,
  exploration: explorationReducer,
  event: eventReducer,
  blog: blogReducer,
  dailyPicture: dailyPictureReducer,
  contact: contactReducer,
});

export default rootReducer;
