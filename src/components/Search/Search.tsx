import { useRef, useState } from 'react';
import { TypeFilter } from '@type/type';
import { User } from '@type/user.interface';
import { filterUsers } from '@helpers/functions/filterUsers';
import { checkInputString } from '@helpers/validation/checkInputString';
import { debounce } from '@helpers/functions/debounce';
import styles from './Search.module.scss';

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
  const [inputError, setInputError] = useState(false);

  // Обработчик фильтраци пользователей с задержкой
  const handleInputChange = debounce((textInput: string) => {
    const filtered = filterUsers(textInput, usersList, typeFilter);
    setUsersListFiltred(filtered);
    setInputSearch(textInput);
    setInputError(!checkInputString(textInput));
  }, 280);

  // Сброс параметров поиска до состояния по умолчанию
  const handleResetInput = () => {
    if (textInput.current) {
      textInput.current.value = '';
    }
    setInputSearch('');
    setUsersListFiltred(usersList);
    setInputError(false);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__input}>
        <input
          type="text"
          ref={textInput}
          placeholder="Search by name"
          className={styles.wrapper__text}
          onChange={() => {
            handleInputChange(textInput.current?.value || '');
          }}
        />
        <button className={styles.button_clear} onClick={handleResetInput}>
          Clear
        </button>
      </div>
      {inputError && (
        <p className={styles.error}>
          Invalid input format! Only letters, not symbols.
        </p>
      )}
    </div>
  );
};
