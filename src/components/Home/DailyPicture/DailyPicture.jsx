import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import './DailyPicture.scss';
import { fetchPictures } from '../../../actions/dailyPicture';

const DailyPicture = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPictures());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const pictures = useSelector((state) => state.dailyPicture.pictureList);

  return (
    <section className="dailyPicture">
      <h2 className="dailyPicture-title">Image du Jour</h2>
      <img
        className="dailyPicture-photo"
        loading="lazy"
        src={pictures.hdurl}
        alt={pictures.title}
      />
    </section>
  );
};

export default DailyPicture;
