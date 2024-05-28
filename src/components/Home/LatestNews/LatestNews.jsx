import PropTypes from 'prop-types';
import './LatestNews.scss';
import { Link } from 'react-router-dom';
import handleSortArticles from '../../../selectors/articlesUtils';

const ArticleCard = ({ id, title, image, excerpt }) => {
  return (
    <Link to={`/articles/${id}`} className="article">
      <img className="article-image" src={image} alt="" />
      <div className="article-content">
        <h2 className="article-title">{title}</h2>
        <p className="article-excerpt">{excerpt}</p>
      </div>
    </Link>
  );
};

const LatestNews = ({ articles }) => {
  let latestArticles = handleSortArticles('latest', articles);

  latestArticles = latestArticles.slice(0, 3);

  return (
    <div className="articles">
      <h2 className="articles-title">Articles récents</h2>
      <div className="articles-container">
        {latestArticles.map((article) => (
          <ArticleCard key={article.id} {...article} />
        ))}
      </div>
    </div>
  );
};

LatestNews.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

LatestNews.defaultProps = {
  articles: null,
};

ArticleCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default LatestNews;
