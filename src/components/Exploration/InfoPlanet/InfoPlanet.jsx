import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import { isBrowser } from 'react-device-detect';
import './InfoPlanet.scss';
import PropTypes from 'prop-types';
import {
  closePlanetInfo,
  previousPlanetInfo,
  nextPlanetInfo,
} from '../../../actions/exploration';

const InfoPlanet = ({
  id,
  composition,
  content,
  diameter,
  distance,
  gravity,
  image,
  mass,
  name,
  nbSatellite,
  rotation,
  revolution,
  temperatureMax,
  temperatureMean,
  temperatureMin,
}) => {
  const dispatch = useDispatch();

  const handlePlanetInfoClose = () => {
    dispatch(closePlanetInfo());
  };

  // get list of planets
  const planetList = useSelector((state) => state.exploration.planetList);

  const handlePlanetInfoPrevious = () => {
    // get name of previous planet (where planet.id = idActivePlanet-1)
    let previousPlanet;

    switch (id) {
      case 1:
        previousPlanet = planetList.find(
          (planet) => planet.id === planetList.length
        ).name;
        break;

      default:
        previousPlanet = planetList.find((planet) => planet.id === id - 1).name;
        break;
    }
    dispatch(previousPlanetInfo(previousPlanet));
  };

  const handlePlanetInfoNext = () => {
    let nextPlanet;

    switch (id) {
      case planetList.length:
        nextPlanet = planetList.find((planet) => planet.id === 1).name;
        break;

      default:
        nextPlanet = planetList.find((planet) => planet.id === id + 1).name;
        break;
    }
    dispatch(nextPlanetInfo(nextPlanet));
  };

  const infoPlanetRef = useRef(null);
  const previousButtonRef = useRef(null);

  useEffect(() => {
    if (isBrowser) {
      if (previousButtonRef.current) {
        previousButtonRef.current.scrollIntoView({
          inline: 'center',
          block: 'center',
          behavior: 'smooth',
        });
      }
    } else if (infoPlanetRef.current) {
      infoPlanetRef.current.scrollIntoView({
        inline: 'center',
        block: 'center',
        behavior: 'smooth',
      });
    }
  }, [name]);

  return (
    <div
      className={isBrowser ? 'infoPlanet infoPlanet-browser' : 'infoPlanet'}
      ref={infoPlanetRef}
    >
      <button
        className="infoPlanet-button infoPlanet-close"
        type="button"
        onClick={handlePlanetInfoClose}
      >
          <i className="ri-close-line" />
      </button>
      <button
        className="infoPlanet-button infoPlanet-previous"
        type="button"
        onClick={handlePlanetInfoPrevious}
        ref={previousButtonRef}
      >
        <i
          className={isBrowser ? 'ri-arrow-left-s-line' : 'ri-arrow-up-s-line'}
        />
      </button>
      <div className="infoPlanet-info">
        <img className="infoPlanet-image" src={image} alt={`Planète ${name}`} />
        <h3>{name}</h3>
        <ul className="infoPlanet-content">
          <li className="infoPlanet-content-section">
            <h4 className="infoPlanet-content-section-title">Description :</h4>
            <p>{content}</p>
          </li>
          <li>
            <h4 className="infoPlanet-content-section-title">Composition :</h4>
            <p>{composition}</p>
          </li>
          <li>
            <h4 className="infoPlanet-content-section-title">Distance au soleil :</h4>
            <p>{distance} millions de km</p>
          </li>
          <li>
            <h4 className="infoPlanet-content-section-title">Diamètre :</h4>
            <p>{diameter} km</p>
          </li>
          <li>
            <h4 className="infoPlanet-content-section-title">Masse :</h4>
            <p>{mass} fois celle de la Terre</p>
          </li>
          <li>
            <h4 className="infoPlanet-content-section-title">Gravité :</h4>
            <p>{gravity} fois celle de la Terre</p>
          </li>
          <li>
            <h4 className="infoPlanet-content-section-title">Satellites :</h4>
            <p>{nbSatellite}</p>
          </li>
          <li>
            <h4 className="infoPlanet-content-section-title">
              Période de rotation :
            </h4>
            <p>{rotation} jour(s) terrestre(s)</p>
          </li>
          <li>
            <h4 className="infoPlanet-content-section-title">
              Période de révolution :
            </h4>
            <p>{revolution} jour(s) terrestre(s)</p>
          </li>
          <li>
            <h4 className="infoPlanet-content-section-title">
              Température maximale :
            </h4>
            <p>{temperatureMax}°C</p>
          </li>
          <li>
            <h4 className="infoPlanet-content-section-title">
              Température moyenne :
            </h4>
            <p>{temperatureMean}°C</p>
          </li>
          <li>
            <h4 className="infoPlanet-content-section-title">
              Température minimale :
            </h4>
            <p>{temperatureMin}°C</p>
          </li>
        </ul>
      </div>
      <button
        className="infoPlanet-button infoPlanet-next"
        type="button"
        onClick={handlePlanetInfoNext}
      >
        <i
          className={
            isBrowser ? 'ri-arrow-right-s-line' : 'ri-arrow-down-s-line'
          }
        />
      </button>
    </div>
  );
};

InfoPlanet.propTypes = {
  id: PropTypes.number.isRequired,
  composition: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  diameter: PropTypes.number.isRequired,
  distance: PropTypes.number.isRequired,
  gravity: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  mass: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  nbSatellite: PropTypes.number.isRequired,
  rotation: PropTypes.number.isRequired,
  revolution: PropTypes.number.isRequired,
  temperatureMax: PropTypes.number.isRequired,
  temperatureMean: PropTypes.number.isRequired,
  temperatureMin: PropTypes.number.isRequired,
};

export default InfoPlanet;
