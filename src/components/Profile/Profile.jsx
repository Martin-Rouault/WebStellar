import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import './Profile.scss';
import axios from 'axios';
import { updateUserStore } from '../../actions/user';
import API_BASE_URL from '../../../apibase';

const Profile = () => {
  const navigateTo = useNavigate();
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.user.isLogged);
  const [isLoading, setIsLoading] = useState(true);
  const [APIData, setAPIData] = useState({});
  const [isEmailModified, setIsEmailModified] = useState(false);
  const [isPasswordModified, setIsPasswordModified] = useState(false);
  const id = useSelector((state) => state.user.id);
  const token = useSelector((state) => state.user.token);

  useEffect(() => {
    setIsLoading(true);
    if (isLogged) {
      try {
        axios
          .get(`${API_BASE_URL}/public/api/users/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((response) => {
            setAPIData({
              mail: response.data.result.mail,
              firstname: response.data.result.firstname,
              lastname: response.data.result.lastname,
              pseudo: response.data.result.pseudo,
              avatar: response.data.result.avatar,
              password: '',
            });
            setIsLoading(false);
          })
          .catch((error) => {
            console.error(error);
            setIsLoading(false);
          });
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogoutAndRedirect = () => {
    // Code pour déconnecter l'utilisateur (par exemple, en supprimant le jeton d'authentification du local storage ou du state Redux)
    const handleLogout = () => {
      localStorage.setItem('id', '');
      localStorage.setItem('token', '');
      localStorage.setItem('nickname', '');
      localStorage.setItem('isLogged', 'false');
      dispatch(updateUserStore());
    };
    handleLogout();

    // Rediriger l'utilisateur vers la page de connexion
    navigateTo('/authentification');
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    try {
      axios
        .put(`${API_BASE_URL}/public/api/users/${id}`, APIData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setAPIData({ ...APIData, ...response.data.result });

          if (isEmailModified || isPasswordModified) {
            // L'adresse e-mail a été modifiée, déconnectez l'utilisateur et redirigez-le vers la page de connexion.
            handleLogoutAndRedirect();
          }
          toast.success('Modification(s) enregistrée(s) !');
        })
        .catch((error) => {
          console.error(error);
          toast.error("Une erreur s'est produite !");
        });
    } catch (error) {
      console.error(error);
    }
  };

  const handleFieldChange = (evt) => {
    const { name, value } = evt.target;
    setAPIData({
      ...APIData,
      [name]: value,
    });

    if (name === 'mail' && value !== APIData.mail) {
      setIsEmailModified(true);
    }
    if (name === 'password' && value !== APIData.password) {
      setIsPasswordModified(true);
    }
  };

  if (isLoading) {
    return <p>Chargement en cours ...</p>;
  }

  const handleAvatarChange = (evt) => {
    const file = evt.target.files[0];
    try {
      axios
        .post(
          `${API_BASE_URL}/public/uploads/userImage/${id}/add`,
          {
            avatar: file,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'multipart/form-data',
            },
          }
        )
        .then((response) => {
          setAPIData({ ...APIData, avatar: response.data.result.avatar });
          toast.success('Photo de profil enregistrée !');
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
    <form method="post" className="profile" onSubmit={handleSubmit}>
      <fieldset>
        <legend>Modifier mes coordonnées</legend>
        <div className="profile-container">
          <div className="profile-avatar">
            <img
              src={
                APIData.avatar
                  ? `${API_BASE_URL}/public/images/${APIData.avatar}`
                  : './assets/Avatar1.png'
              }
              alt="Avatar"
            />
            <div className="avatar-change-button">
              <label htmlFor="avatar">Changer l&apos;avatar</label>
              <input
                id="avatar"
                name="avatar"
                type="file"
                accept="image/*"
                onChange={handleAvatarChange}
              />
            </div>
          </div>
          <div className="profile-inputs">
            <div className="profile-input">
              <label htmlFor="mail">Email</label>
              <input
                id="mail"
                name="mail"
                type="text"
                value={APIData?.mail || ''}
                onChange={handleFieldChange}
              />
            </div>
            <div className="profile-input">
              <label htmlFor="lastname">Nom</label>
              <input
                id="lastname"
                name="lastname"
                type="text"
                value={APIData?.lastname || ''}
                onChange={handleFieldChange}
              />
            </div>
            <div className="profile-input">
              <label htmlFor="firstname">Prénom</label>
              <input
                id="firstname"
                name="firstname"
                type="text"
                value={APIData?.firstname || ''}
                onChange={handleFieldChange}
              />
            </div>
            <div className="profile-input">
              <label htmlFor="pseudo">Pseudo</label>
              <input
                id="pseudo"
                name="pseudo"
                type="text"
                value={APIData?.pseudo || ''}
                onChange={handleFieldChange}
              />
            </div>
            <div className="profile-input">
              <label htmlFor="password">Mot de passe</label>
              <input
                id="password"
                name="password"
                type="password"
                value={APIData?.password || ''}
                placeholder="Laisser vide si inchangé..."
                onChange={handleFieldChange}
              />
            </div>
          </div>
        </div>
        <button className="nav-menu profile-button" type="submit">
          ENREGISTRER
        </button>
      </fieldset>
    </form>
  );
};

export default Profile;
