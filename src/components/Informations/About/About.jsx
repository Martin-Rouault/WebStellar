import './About.scss';

const About = () => {
  return (
    <div className="about">
      <div className="about-container">
        <h2 className="about-title">Notre équipe</h2>
        <section className="about-team">
          <div className="about-member">
            <img className="about-picture" src="./assets/charlene.jpg" alt="" />
            <p className="about-firstname">Charlène</p>
            <p className="about-position">Product Owner</p>
          </div>

          <div className="about-member">
            <img className="about-picture" src="./assets/nathalie.png" alt="" />
            <p className="about-firstname">Nathalie</p>
            <p className="about-position">Scrum Master</p>
          </div>

          <div className="about-member">
            <img className="about-picture" src="./assets/nasma.jpg" alt="" />
            <p className="about-firstname">Nasma</p>
            <p className="about-position">Git Master</p>
          </div>

          <div className="about-member">
            <img
              className="about-picture"
              src="./assets/guillaume.jpg"
              alt=""
            />
            <p className="about-firstname">Guillaume</p>
            <p className="about-position">Lead Back</p>
          </div>

          <div className="about-member">
            <img className="about-picture" src="./assets/martin.jpg" alt="" />
            <p className="about-firstname">Martin</p>
            <p className="about-position">Lead Front</p>
          </div>
        </section>

        <div className="goldLine about-line" />

        <section className="about-description">
          <p className="about-description-text">
            WebStellar est notre projet de fin de formation, et représente le
            couronnement de notre parcours, démontrant nos compétences en
            développement web et design graphique, ainsi que notre passion pour
            l&apos;astronomie. Ce projet commun nous a permis de fusionner notre
            amour pour l&apos;espace avec notre expertise technique, créant
            ainsi une plateforme interactive où les visiteurs peuvent explorer
            les merveilles de l&apos;univers. Nous avons consacré de nombreuses
            heures à la conception d&apos;une interface intuitive et attrayante,
            et à la création de contenus informatifs. En fin de compte,
            WebStellar est bien plus qu&apos;un simple projet de fin
            d&apos;études : il est le témoignage de notre dévouement envers la
            vulgarisation scientifique et la technologie au service de la
            découverte.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
