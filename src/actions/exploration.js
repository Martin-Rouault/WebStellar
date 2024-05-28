export const TOGGLE_PLANET_INFO = 'TOGGLE_PLANET_INFO';
export const FETCH_PLANETS = 'FETCH_PLANETS';
export const SAVE_PLANETS = 'SAVE_PLANETS';
export const CLOSE_PLANET_INFO = 'CLOSE_PLANET_INFO';
export const NEXT_PLANET_INFO = 'NEXT_PLANET_INFO';
export const PREVIOUS_PLANET_INFO = 'PREVIOUS_PLANET_INFO';

export const togglePlanetInfo = (planet) => ({
  type: TOGGLE_PLANET_INFO,
  planet,
});

export const fetchPlanets = () => ({
  type: FETCH_PLANETS,
});

export const savePlanets = (planets) => ({
  type: SAVE_PLANETS,
  planets,
});

export const closePlanetInfo = () => ({
  type: CLOSE_PLANET_INFO,
});

export const previousPlanetInfo = (previousPlanet) => ({
  type: PREVIOUS_PLANET_INFO,
  previousPlanet,
});

export const nextPlanetInfo = (nextPlanet) => ({
  type: NEXT_PLANET_INFO,
  nextPlanet,
});
