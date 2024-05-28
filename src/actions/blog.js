export const TOGGLE_FILTER_MENU = 'TOGGLE_FILTER_MENU';
export const CLOSE_FILTER_MENU = 'CLOSE_FILTER_MENU';
export const FETCH_ARTICLES = 'FETCH_ARTICLES';
export const SAVE_ARTICLES = 'SAVE_ARTICLES';
export const FETCH_COMMENTS = 'FETCH_COMMENTS';
export const SAVE_COMMENTS = 'SAVE_COMMENTS';
export const SAVE_FILTER_CHOICE = 'SAVE_FILTER_CHOICE';
export const SAVE_POST_ID = 'SAVE_POST_ID';

export const toggleFilterMenu = () => ({
  type: TOGGLE_FILTER_MENU,
});

export const closeFilterMenu = () => ({
  type: CLOSE_FILTER_MENU,
});

export const fetchArticles = () => ({
  type: FETCH_ARTICLES,
});

export const saveArticles = (articles) => ({
  type: SAVE_ARTICLES,
  articles,
});

export const saveFilterChoice = (option) => ({
  type: SAVE_FILTER_CHOICE,
  option,
});

export const fetchComments = (postId) => ({
  type: FETCH_COMMENTS,
  postId,
});

export const saveComments = (comments) => ({
  type: SAVE_COMMENTS,
  comments,
});

export const savePostId = (postId) => ({
  type: SAVE_POST_ID,
  postId,
});
