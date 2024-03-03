import { useEffect, useRef, useState } from 'react';
import styles from './Search.module.scss';
import { TypeFilter } from '@type/type';
import { User } from '@type/user.interface';
import { filterUsers } from '@helpers/functions/filterUsers';
import { checkInputString } from '@helpers/validation/checkInputString';

interface SearchProps {
  usersList: User[];
  setInputSearch: (inputSearch: string) => void;
  typeFilter: TypeFilter;
  setUsersListFiltred: (users: User[]) => void;
}

export const Search = ({
  usersList,
  setInputSearch,
  typeFilter,
  setUsersListFiltred,
}: SearchProps) => {
  const textInput = useRef<HTMLInputElement>(null);

  const [error, setError] = useState(false);

  const handleInputChange = (textInput: string) => {
    console.log(textInput);
    const filtered = filterUsers(textInput, usersList, typeFilter);
    setUsersListFiltred(filtered);
    setInputSearch(textInput);
  };

  const handleResetInput = () => {
    if (textInput.current) {
      textInput.current.value = '';
    }
    setInputSearch('');
    setUsersListFiltred(usersList);
  };

  useEffect(() => {
    setError(!checkInputString(String(textInput.current?.value)));
  }, [textInput.current?.value]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__input}>
        <input
          type="text"
          ref={textInput}
          placeholder="Search by name"
          className={styles.input}
          onChange={() => {
            handleInputChange(textInput.current?.value.trim() || '');
          }}
        />
        <button className={styles.button_clear} onClick={handleResetInput}>
          <span className={styles.button_text}>Clear</span>
        </button>
      </div>
      {error && (
        <p className={styles.error}>
          Invalid input format! Only letters, not symbols.
        </p>
      )}
    </div>
  );
};
