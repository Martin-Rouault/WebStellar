import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { saveComments } from '../../../../actions/blog';
import './FormComment.scss';
import API_BASE_URL from '../../../../../apibase';

const FormComment = () => {
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.user.isLogged);
  const userId = useSelector((state) => state.user.id);
  const postId = useSelector((state) => state.blog.postId);
  const commentsList = useSelector((state) => state.blog.commentsList);

  const [newComment, setNewComment] = useState('');

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (isLogged && newComment.trim() !== '') {
      try {
        axios
          .post(`${API_BASE_URL}/public/api/comments`, {
            content: newComment,
            user_id: userId,
            post_id: postId,
          })
          .then((response) => {
            // Dispatch action to save the new comment in .then block
            dispatch(saveComments([response.data, ...commentsList]));
            setNewComment('');
            toast.success('Commentaire ajouté !');
          })
          .catch((error) => {
            console.error(error);
          });
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div>
      {isLogged ? (
        <form className="form" onSubmit={handleSubmit}>
          <label>
            <textarea
              type="comment"
              placeholder="Votre commentaire.."
              value={newComment}
              onChange={(event) => setNewComment(event.target.value)}
              required
              className="form-input"
              cols="30"
              rows="10"
              maxLength={800}
            />
          </label>
          <button type="submit" className="form-button">
            <span>Commenter</span>
          </button>
        </form>
      ) : (
        <div className="not-connected">
          <span className="not-connected-link">
            <Link to="/authentification">
              Vous voulez ajouter un commentaire ?
            </Link>
          </span>
        </div>
      )}
    </div>
  );
};

export default FormComment;
