import { PropTypes } from 'prop-types';

import Articles from './Articles/Articles';
import Filter from './Filter/Filter';
import './Blog.scss';

const Blog = ({ articles }) => {
  return (
    <>
      <Filter />
      <Articles articles={articles} />
    </>
  );
};

Blog.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Blog;
