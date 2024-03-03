import { TypeFilter } from '@type/type';
import styles from './FilterType.module.scss';
import { useEffect, useState } from 'react';
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

  useEffect(() => {
    console.log(typeFilter);
  }, [typeFilter]);

  return (
    <fieldset className={styles.fieldset}>
      <legend className={styles.legend}>Select type filer:</legend>
      <form>
        <div className={styles.fieldset__item}>
          <label className={styles.fieldset__item_label}>
            <input
              type="radio"
              name="filter"
              checked={typeFilter === 'substring'}
              value="substring"
              className={styles.fieldset__item_input}
              onChange={() => {
                handleSwitchTypeFilter('substring');
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
              checked={typeFilter === 'startWith'}
              className={styles.fieldset__item_input}
              onChange={() => {
                handleSwitchTypeFilter('startWith');
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
