import './Home.scss';
import { PropTypes } from 'prop-types';

import LatestNews from './LatestNews/LatestNews';
import DailyPicture from './DailyPicture/DailyPicture';
import Welcome from './Welcome/Welcome';
import Links from './Links/Links';

const Home = ({ articles }) => {
  return (
    <>
      <Welcome />
      <Links />
      <LatestNews articles={articles} />
      <DailyPicture />
    </>
  );
};

Home.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Home;
