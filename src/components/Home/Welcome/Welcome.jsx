/* eslint-disable react/no-unescaped-entities */
import './Welcome.scss';

const Welcome = () => {
  return (
    <div className="background-welcome">
      <div className="welcome">
        <h1 className="welcome-title">
          Bienvenue sur <span className="welcome-title-span">WebStellar</span>
        </h1>
        <div className="welcome-text">
          <p className="welcome-text-subtitle">
            Plongez dans l'univers infini de l'astronomie.
          </p>
          <p className="welcome-text-excerpt">
            Découvrez les secrets des étoiles et des planètes, suivez
            l'actualité astronomique, et partagez votre passion pour le ciel
            étoilé. Rejoignez-nous pour un voyage interstellaire inoubliable.
          </p>
        </div>
        <img
          className="welcome-img"
          src="./assets/webstellar-logo.png"
          alt="Logo WebStellar"
        />
      </div>
    </div>
  );
};

export default Welcome;
