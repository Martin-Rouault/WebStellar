import { Link, useParams } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { format, parseISO } from 'date-fns';

import './Single.scss';
import FormComment from '../Comments/FormComment/FormComment';
import Comments from '../Comments/Comments';

const Single = ({ articles }) => {
  const { id: idParams } = useParams();
  // Finding the id corresponding the article that as the same id.
  // eslint-disable-next-line eqeqeq
  const findPost = () => articles.find(({ id }) => id == idParams);
  const post = findPost();

  const dateISO = post ? parseISO(post.created_at) : null;
  const day = dateISO ? format(dateISO, 'dd-MMM-yyyy') : '';
  // A button to go back on the blog page
  // the details of the article.
  return (
    <>
      <div />
      {!post ? (
        <div className="error">
          <Link to="/blog">
            <div className="single-button">
              <button className="nav-menu" type="button">
                <span className="error-button">
                  <i className="ri-arrow-go-back-fill" />
                </span>
              </button>
            </div>
          </Link>
          <div className="error-container">
            <p className="error-text">Article non trouvé</p>
          </div>
        </div>
      ) : (
        <>
          <div className="single">
            <Link to="/blog">
              <div className="single-button">
                <button className="nav-menu" type="button">
                  <span className="error-button">
                    <i className="ri-arrow-go-back-fill" />
                  </span>
                </button>
              </div>
            </Link>
            <h3 className="single-title">{post.title}</h3>
            <div className="single-date">{day}</div>
            <div className="single-line" />
            <img className="single-image" src={post.image} alt="" />
            <div className="single-text">
              <h4 className="single-excerpt-title">{post.excerpt}</h4>
              <p className="single-content">{post.content}</p>
            </div>
          </div>
          <Comments postId={post.id} />
          <FormComment />
        </>
      )}
      <div />
    </>
  );
};

Single.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      find: PropTypes.func,
    })
  ),
};

Single.defaultProps = {
  articles: null,
};

export default Single;
