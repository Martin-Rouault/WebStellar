import { BrowserView, MobileView } from 'react-device-detect';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { closePlanetInfo, fetchPlanets, togglePlanetInfo } from '../../actions/exploration';

import MobileSystem from './MobileSystem/MobileSystem';
import BrowserSystem from './BrowserSystem/BrowserSystem';
import { useLocation } from 'react-router-dom';

const Exploration = () => {
  const dispatch = useDispatch();

  // useEffect on mount
  // closes planetInfo if it was still open + fetches list of all planets from DB
  useEffect(() => {
    dispatch(closePlanetInfo());
    dispatch(fetchPlanets());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // fetch complete list of all planets which is in the store
  const planets = useSelector((state) => state.exploration.planetList);

  // handler for click on planet, dispatches planet name with 'evt.target.name' as load
  const handleClickPlanet = (evt) => {
    dispatch(togglePlanetInfo(evt.target.id));
  };

  return (
    <div>
      <MobileView>
        <MobileSystem planets={planets} handle={handleClickPlanet} />
      </MobileView>
      <BrowserView>
        <BrowserSystem planets={planets} handle={handleClickPlanet} />
      </BrowserView>
    </div>
  );
};

export default Exploration;
