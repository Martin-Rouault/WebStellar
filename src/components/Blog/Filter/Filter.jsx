import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  closeFilterMenu,
  saveFilterChoice,
  toggleFilterMenu,
} from '../../../actions/blog';
import './Filter.scss';

const Filter = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeFilterMenu());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isFilterMenuOpen = useSelector((state) => state.blog.isFilterMenuOpen);

  const handleFilterMenu = () => {
    dispatch(toggleFilterMenu());
  };

  const handleSortChange = (e) => {
    const option = e.target.value;
    dispatch(saveFilterChoice(option));
  };

  return (
    <div className="filter-blog">
      <button className="nav-menu" type="button" onClick={handleFilterMenu}>
        <span>
          {isFilterMenuOpen ? <i className="ri-close-line" /> : 'Trier'}
        </span>
      </button>
      {isFilterMenuOpen && (
        <select name="tag" id="tag-select" onChange={handleSortChange}>
          <option value="latest">Les plus récents</option>
          <option value="oldest">Les plus anciens</option>
        </select>
      )}
    </div>
  );
};

export default Filter;
