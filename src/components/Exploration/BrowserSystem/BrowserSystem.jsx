import './BrowserSystem.scss';
import PropTypes from 'prop-types';
import Planet from '../Planet/Planet';

const BrowserSystem = ({ planets, handle }) => {
  return (
    <div className="exploration exploration-browser">
      <img
        className="exploration-sun exploration-sun-browser"
        src="assets/exploration/0-sun-browser.png"
        alt="Bottom half of the sun"
      />
      <div className="exploration-planets exploration-planets-browser">
        {planets.map((planet) => {
          return <Planet key={planet.id} {...planet} handle={handle} />;
        })}
      </div>
    </div>
  );
};

BrowserSystem.propTypes = {
  handle: PropTypes.func.isRequired,
  planets: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

BrowserSystem.defaultProps = {
  planets: null,
};

export default BrowserSystem;
