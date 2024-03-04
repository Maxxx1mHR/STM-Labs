import { TypeFilter } from '@type/type';
import styles from './FilterType.module.scss';
import { filterUsers } from '@helpers/functions/filterUsers';
import { User } from '@type/user.interface';

interface FilterTypeProps {
  inputSearch: string;
  usersList: User[];
  setUsersListFiltred: (users: User[]) => void;
  typeFilter: TypeFilter;
  setTypeFilter: (typeFilter: TypeFilter) => void;
}

export const FilterType = ({
  inputSearch,
  usersList,
  setUsersListFiltred,
  typeFilter,
  setTypeFilter,
}: FilterTypeProps) => {
  const handleSwitchTypeFilter = (typeFilter: TypeFilter) => {
    setTypeFilter(typeFilter);
    const filtered = filterUsers(inputSearch, usersList, typeFilter);
    setUsersListFiltred(filtered);
  };

  return (
    <fieldset className={styles.filter}>
      <legend className={styles.filter__header}>Select type filer:</legend>
      <form>
        <div className={styles.filter__item}>
          <label className={styles.filter__label}>
            <input
              type="radio"
              name="filter"
              checked={typeFilter === 'substring'}
              value="substring"
              className={styles.filter__input}
              onChange={() => {
                handleSwitchTypeFilter('substring');
              }}
            />
            <span className={styles.button_radio}></span>
            Filter by substring in first or last name:
          </label>
        </div>
        <div className={styles.filter__item}>
          <label className={styles.filter__label}>
            <input
              type="radio"
              name="filter"
              value="startWith"
              checked={typeFilter === 'startWith'}
              className={styles.filter__input}
              onChange={() => {
                handleSwitchTypeFilter('startWith');
              }}
            />
            <span className={styles.button_radio}></span>
            Filter by start with first or last name:
          </label>
        </div>
      </form>
    </fieldset>
  );
};
