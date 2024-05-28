import { PropTypes } from 'prop-types';
import './Comment.scss';
import { format, parseISO } from 'date-fns';
import API_BASE_URL from '../../../../../apibase';

// Component of a single comment
const Comment = ({ user: { pseudo, avatar }, content, created_at }) => {
  // Converting the date and using it as the day variable
  const dateISO = parseISO(created_at);
  const day = format(dateISO, 'dd-MMM-yyyy');

  // Template of a single article
  return (
    <div className="comment-section">
      <div className="info">
        <img
          className="comment-avatar"
          src={`${API_BASE_URL}/public/images/${avatar}`}
          alt=""
        />
        <h4 className="comment-pseudo">{pseudo}</h4>
      </div>
      <p className="comment-text">{content}</p>
      <p className="comment-date">Posté le {day}</p>
    </div>
  );
};

// Proptypes
Comment.propTypes = {
  content: PropTypes.string.isRequired,
  created_at: PropTypes.string.isRequired,
  user: PropTypes.shape({
    pseudo: PropTypes.string.isRequired,
    avatar: PropTypes.string,
  }),
};

Comment.defaultProps = {
  user: PropTypes.shape({
    avatar: null,
  }),
};

export default Comment;
