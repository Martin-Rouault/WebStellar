import { NavLink } from 'react-router-dom';
import './Links.scss';

const Links = () => {
  return (
    <section className="links">
      <div className="links-all">
        <NavLink to="/blog">
          <h2 className="links-title">Blog</h2>
          <img
            className="links-image"
            src="./assets/blog.jpg"
            alt="Lien vers le blog"
          />
        </NavLink>
      </div>

      <div className="links-all">
        <NavLink to="/exploration">
          <h2 className="links-title">Exploration</h2>
          <img
            className="links-image"
            src="./assets/exploration.jpg"
            alt="Lien vers l'exploration"
          />
        </NavLink>
      </div>

      <div className="links-all">
        <NavLink to="/calendar">
          <h2 className="links-title">Calendrier</h2>
          <img
            className="links-image"
            src="./assets/calendar.jpg"
            alt="Lien vers le calendrier"
          />
        </NavLink>
      </div>
    </section>
  );
};

export default Links;
