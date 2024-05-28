import { format, parseISO } from 'date-fns';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import handleSortArticles from '../../../selectors/articlesUtils';
import './Articles.scss';

// Component for a single article
const Article = ({ id, title, image, excerpt, created_at }) => {
  // Converting the date and using it as the day variable
  const dateISO = parseISO(created_at);
  const day = format(dateISO, 'dd-MMM-yyyy');

  // Template of a single article
  return (
    <Link to={`/articles/${id}`} className="post">
      <img className="post-image" src={image} alt="" />
      <div className="post-content">
        <p className="post-date">{day}</p>
        <h3 className="post-title">{title}</h3>
        <p className="post-excerpt">{excerpt}</p>
      </div>
    </Link>
  );
};

// Component for all the articles
const Articles = ({ articles }) => {
  // Retreive the sortOption from the blog reducer
  const sortOption = useSelector((state) => state.blog.sortOption);

  // Retreive the handleSortArticles function from the selectors folder
  const sortedArticles = handleSortArticles(sortOption, articles);

  return (
    // Return all the articles depending on the initial state of sortOption
    <div className="posts">
      <h2 className="posts-title">Blog</h2>
      <div className="goldLine postsLine" />
      <div className="posts-container">
        {sortedArticles.map((article) => (
          <Article key={article.id} {...article} />
        ))}
      </div>
    </div>
  );
};

// PropTypes
Article.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  created_at: PropTypes.string.isRequired,
};

Articles.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

Articles.defaultProps = {
  articles: null,
};

export default Articles;
