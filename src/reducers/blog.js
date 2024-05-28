import {
  SAVE_ARTICLES,
  TOGGLE_FILTER_MENU,
  SAVE_FILTER_CHOICE,
  SAVE_COMMENTS,
  SAVE_POST_ID,
  CLOSE_FILTER_MENU,
} from '../actions/blog';

export const initialState = {
  isFilterMenuOpen: false,
  articlesList: [],
  sortOption: 'latest',
  commentsList: [],
  postId: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_FILTER_MENU:
      return {
        ...state,
        isFilterMenuOpen: !state.isFilterMenuOpen,
      };

    case CLOSE_FILTER_MENU:
      return {
        ...state,
        isFilterMenuOpen: false,
      };

    case SAVE_ARTICLES:
      return {
        ...state,
        articlesList: action.articles,
      };

    case SAVE_FILTER_CHOICE:
      return {
        ...state,
        sortOption: action.option,
      };

    case SAVE_COMMENTS:
      return {
        ...state,
        commentsList: action.comments,
      };

    case SAVE_POST_ID:
      return {
        ...state,
        postId: action.postId,
      };
    default:
      return state;
  }
};

export default reducer;
