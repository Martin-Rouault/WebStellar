import './MobileSystem.scss';
import PropTypes from 'prop-types';
import Planet from '../Planet/Planet';

const MobileSystem = ({ planets, handle }) => {
  return (
    <div className="exploration">
      <img
        className="exploration-sun"
        src="assets/exploration/0-sun.png"
        alt="Bottom half of the sun"
      />
      <div className="exploration-planets">
        {planets.map((planet) => {
          return <Planet key={planet.id} {...planet} handle={handle} />;
        })}
      </div>
    </div>
  );
};

MobileSystem.propTypes = {
  handle: PropTypes.func.isRequired,
  planets: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

MobileSystem.defaultProps = {
  planets: null,
};

export default MobileSystem;
