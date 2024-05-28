import { useDispatch } from 'react-redux';
import { saveDate } from '../../../actions/event';
import './Filter.scss';

const Filter = () => {
  const dispatch = useDispatch();

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    dispatch(saveDate(selectedDate));
  };

  return (
    <>
      <form method="post" className="filter-calendar">
        <fieldset>
          <legend>Affiner votre recherche</legend>
          <label htmlFor="date-picker">Sélectionner une date : </label>
          <input
            type="month"
            id="date-picker"
            name="date-picker"
            onChange={handleDateChange}
            required
          />
        </fieldset>
      </form>
      <div className="filter-line goldLine" />
    </>
  );
};

export default Filter;
