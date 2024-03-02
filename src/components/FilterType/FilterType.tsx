import styles from './FilterType.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterType } from '../../redux/searchSlice';
import { RootState } from '../../redux/store';

interface FilterTypeProps {
  handleSwitchTypeFilter: (typeFiler: string) => void;
}

export const FilterType = ({ handleSwitchTypeFilter }: FilterTypeProps) => {
  const dispatch = useDispatch();

  const typeFiler = useSelector(
    (state: RootState) => state.search.initialState.filterType
  );

  return (
    <fieldset className={styles.filer}>
      <legend>Select type filer:</legend>
      <form>
        <div className={styles.filer__item}>
          <label className={styles.filer__item_label}>
            <input
              type="radio"
              name="filter"
              checked={typeFiler === 'substring' ? true : false}
              value="substring"
              className={styles.filer__item_input}
              onChange={(e) => {
                handleSwitchTypeFilter(e.target.value);
                dispatch(setFilterType(e.target.value));
              }}
            />
            Filter by substring in first or last name:
          </label>
        </div>
        <div className={styles.filer__item}>
          <label className={styles.filer__item_label}>
            <input
              type="radio"
              name="filter"
              value="startWith"
              checked={typeFiler === 'startWith' ? true : false}
              className={styles.filer__item_input}
              onChange={(e) => {
                dispatch(setFilterType(e.target.value));
                handleSwitchTypeFilter(e.target.value);
              }}
            />
            Filter by start with first or last name:
          </label>
        </div>
      </form>
    </fieldset>
  );
};
