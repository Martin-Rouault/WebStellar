import { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { fetchComments, savePostId } from '../../../actions/blog';
import Comment from './Comment/Comment';
import './Comments.scss';

const Comments = ({ postId }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(savePostId(postId));
    dispatch(fetchComments(postId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const commentsList = useSelector((state) => state.blog.commentsList);

  return (
    <section className="comment">
      {commentsList.length > 0 ? (
        commentsList.map((comments) => (
          <Comment key={comments.id} {...comments} />
        ))
      ) : (
        <p>Aucun commentaire disponible.</p>
      )}
    </section>
  );
};
Comments.propTypes = {
  postId: PropTypes.number.isRequired,
};
export default Comments;
