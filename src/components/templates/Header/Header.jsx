import './Header.scss';

import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import { useEffect, useRef } from 'react';
import { toggleSideMenu } from '../../../actions/navigation';
import { updateUserStore } from '../../../actions/user';

const Header = () => {
  const dispatch = useDispatch();
  const baseURI = window.location.origin;

  const isMenuOpen = useSelector((state) => state.navigation.isMenuOpen);
  const isLogged = useSelector((state) => state.user.isLogged);

  const handleSideMenu = () => {
    dispatch(toggleSideMenu());
  };

  const menuRef = useRef(null);
  const handleClickOutside = (evt) => {
    if (menuRef.current && !menuRef.current.contains(evt.target)) {
      handleSideMenu();
    }
  };

  const handleLogout = () => {
    localStorage.setItem('id', '');
    localStorage.setItem('token', '');
    localStorage.setItem('nickname', '');
    localStorage.setItem('isLogged', 'false');
    dispatch(updateUserStore());
    toast.error('Vous êtes déconnecté !');
  };

  const handleSignOut = () => {
    handleSideMenu();
    handleLogout();
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <nav className="nav">
      <div className="nav-logo">
        <NavLink className="nav-logo-link" to="/">
          <img
            className="nav-img"
            src={`${baseURI}/assets/webstellar-logo.png`}
            alt="Logo WebStellar"
          />
          <h1>WebStellar</h1>
        </NavLink>
      </div>
      <div className="nav-nav">
        <button className="nav-menu" type="button" onClick={handleSideMenu}>
          <span>Menu</span>
        </button>
        {isMenuOpen && (
          <div className="nav-sideMenu" ref={menuRef}>
            <button
              className="nav-sideMenu-close"
              type="button"
              onClick={handleSideMenu}
            >
              <span>
                <i className="ri-close-line" />
              </span>
            </button>
            <div className="goldLine nav-sideMenu-line" />
            {isLogged ? (
              <>
                <NavLink className="nav-sideMenu-link" onClick={handleSignOut}>
                  Déconnexion
                </NavLink>
                <NavLink
                  className="nav-sideMenu-link"
                  to="/profile"
                  onClick={handleSideMenu}
                >
                  Mon compte
                </NavLink>
              </>
            ) : (
              <NavLink
                className="nav-sideMenu-link"
                to="/authentification"
                onClick={handleSideMenu}
              >
                Connexion
              </NavLink>
            )}
            <NavLink
              className="nav-sideMenu-link"
              to="/exploration"
              onClick={handleSideMenu}
            >
              Exploration
            </NavLink>
            <NavLink
              className="nav-sideMenu-link"
              to="/blog"
              onClick={handleSideMenu}
            >
              Blog
            </NavLink>
            <NavLink
              className="nav-sideMenu-link"
              to="/calendar"
              onClick={handleSideMenu}
            >
              Calendrier
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
