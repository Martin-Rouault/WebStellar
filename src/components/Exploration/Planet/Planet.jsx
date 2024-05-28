/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { isBrowser } from 'react-device-detect';
import './Planet.scss';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import InfoPlanet from '../InfoPlanet/InfoPlanet';

const Planet = ({ image, name, handle }) => {
  // get name of active planet from store
  const activePlanetName = useSelector(
    (state) => state.exploration.activePlanetName
  );
  // create boolean to mark which planet is active
  const isActivePlanet = activePlanetName === `${name}`;

  // is the InfoPlanet component open?
  const isPlanetInfoOpen = useSelector(
    (state) => state.exploration.isPlanetInfoOpen
  );

  // list of all planets
  const planets = useSelector((state) => state.exploration.planetList);
  // find the active planet (the one that has its name in the store) in the whole list
  // used to display infoPlanet component for the selected planet
  const selectedPlanet = planets.find(
    (planet) => planet.name === activePlanetName
  );

  return (
    <div
      className={
        isActivePlanet
          ? `${
              isBrowser ? 'exploration-planet-browser' : 'exploration-planet'
            } exploration-planet-active exploration-${name} `
          : `${
              isBrowser ? 'exploration-planet-browser' : 'exploration-planet'
            } exploration-${name} `
      }
    >
      <img
        src={image}
        alt={`Planète ${name}`}
        className="planet-image"
        id={name}
        onClick={handle}
      />
      {isPlanetInfoOpen && isActivePlanet && <InfoPlanet {...selectedPlanet} />}
    </div>
  );
};

Planet.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handle: PropTypes.func.isRequired,
};

export default Planet;
