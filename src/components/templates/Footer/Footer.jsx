import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer-list">
        <li>
          <NavLink to="/about" className="footer-title">
            Qui sommes-nous ?
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="footer-title">
            Nous contacter
          </NavLink>
        </li>
        <li>
          <NavLink to="/copyrights" className="footer-title">
            Mentions légales
          </NavLink>
        </li>
      </ul>
      <p className="footer-rights">All rights reserved, 2023</p>
    </footer>
  );
};

export default Footer;
