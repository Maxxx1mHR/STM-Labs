import styles from './FilterType.module.scss';

interface FilterTypeProps {
  handleSwitchTypeFilter: (typeFiler: string) => void;
}

export const FilterType = ({ handleSwitchTypeFilter }: FilterTypeProps) => {
  return (
    <fieldset className={styles.fieldset}>
      <legend className={styles.legend}>Select type filer:</legend>
      <form>
        <div className={styles.fieldset__item}>
          <label className={styles.fieldset__item_label}>
            <input
              type="radio"
              name="filter"
              // checked={typeFiler === 'substring' ? true : false}
              value="substring"
              className={styles.fieldset__item_input}
              onChange={(e) => {
                handleSwitchTypeFilter(e.target.value);
                // dispatch(setFilterType(e.target.value));
              }}
            />
            <span className={styles.custom_radio}></span>
            Filter by substring in first or last name:
          </label>
        </div>
        <div className={styles.fieldset__item}>
          <label className={styles.fieldset__item_label}>
            <input
              type="radio"
              name="filter"
              value="startWith"
              // checked={typeFiler === 'startWith' ? true : false}
              className={styles.fieldset__item_input}
              onChange={(e) => {
                // dispatch(setFilterType(e.target.value));
                handleSwitchTypeFilter(e.target.value);
              }}
            />
            <span className={styles.custom_radio}></span>
            Filter by start with first or last name:
          </label>
        </div>
      </form>
    </fieldset>
  );
};
