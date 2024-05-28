import {
  TOGGLE_PLANET_INFO,
  SAVE_PLANETS,
  CLOSE_PLANET_INFO,
  NEXT_PLANET_INFO,
  PREVIOUS_PLANET_INFO,
} from '../actions/exploration';

export const initialState = {
  isPlanetInfoOpen: false,
  activePlanetName: '',
  planetList: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_PLANET_INFO:
      // if click on a different planet than the active one
      if (state.isPlanetInfoOpen && state.activePlanetName !== action.planet) {
        return {
          ...state,
          // isPlanetInfoOpen stays true (info window is open)
          // update planet name
          activePlanetName: action.planet,
        };
      }
      // if click on the active planet
      if (state.activePlanetName === action.planet) {
        return {
          ...state,
          // isPlanetInfoOpen switches to false (info window closes)
          isPlanetInfoOpen: !state.isPlanetInfoOpen,
          // drop previous planet name
          activePlanetName: '',
        };
      }
      // if nothing is open
      return {
        ...state,
        // isPlanetInfoOpen switches to true (opens info window)
        isPlanetInfoOpen: !state.isPlanetInfoOpen,
        // active planet name is stored
        activePlanetName: action.planet,
      };

    case SAVE_PLANETS:
      return {
        ...state,
        planetList: action.planets,
      };

    case CLOSE_PLANET_INFO:
      return {
        ...state,
        // isPlanetInfoOpen set to false (info window closes)
        isPlanetInfoOpen: false,
        // clear previous planet name
        activePlanetName: '',
      };

    case PREVIOUS_PLANET_INFO:
      return {
        ...state,
        activePlanetName: action.previousPlanet,
      };

    case NEXT_PLANET_INFO:
      return {
        ...state,
        activePlanetName: action.nextPlanet,
      };

    default:
      return state;
  }
};

export default reducer;
