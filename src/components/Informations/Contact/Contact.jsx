import './Contact.scss';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { handleSuccessfulContact } from '../../../actions/contact';
import API_BASE_URL from '../../../../apibase';

const Contact = () => {
  const dispatch = useDispatch();
  const isMessageSent = useSelector((store) => store.contact.isMessageSent);
  const [newMail, setNewMail] = useState('');
  const [newMessage, setNewMessage] = useState('');

  const handleSubmit = (evt) => {
    evt.preventDefault();
    try {
      axios
        .post(`${API_BASE_URL}/public/api/contact`, {
          mail: newMail,
          content: newMessage,
        })
        .then((response) => {
          dispatch(handleSuccessfulContact());
          setNewMail('');
          setNewMessage('');
          toast.success('Message envoyé !');
        })
        .catch((error) => {
          console.error(error);
          toast.error("Une erreur s'est produite !");
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <fieldset className="contact">
        <legend className="contact-legend">Nous contacter</legend>
        <div className="contact-mail">
          <label className="contact-label" htmlFor="mail">
            Email
          </label>
          <input
            className="contact-mail-input"
            id="mail"
            name="mail"
            type="mail"
            value={newMail}
            onChange={(event) => setNewMail(event.target.value)}
          />
        </div>
        <div className="contact-message">
          <label className="contact-label" htmlFor="mail">
            Message
          </label>
          <textarea
            className="contact-message-text"
            type="comment"
            placeholder="Votre commentaire.."
            value={newMessage}
            onChange={(event) => setNewMessage(event.target.value)}
            required
            maxLength={1000}
          />
        </div>
        <button type="submit" className="contact-button nav-menu">
          Envoyer
        </button>
      </fieldset>
    </form>
  );
};

export default Contact;
