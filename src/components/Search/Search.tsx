import { useEffect, useRef, useState } from 'react';
import styles from './Search.module.scss';
import { checkInputString } from '@helpers/validation/checkInputString';
import { TypeFilter } from '@type/type';
import { User } from '@type/user.interface';
import { filterUsers } from '@helpers/functions/filterUsers';

interface SearchProps {
  usersList: User[];
  setUsersList: (users: User[]) => void;

  setInputSearch: (inputSearch: string) => void;
  typeFilter: TypeFilter;
  setUsersListFiltred: (users: User[]) => void;
  //   handleInputChange: (searchText: string) => void;
  //   handleResetInput: (
  //     textInput: React.RefObject<HTMLInputElement> | null
  //   ) => void;
}

export const Search = ({
  usersList,
  setUsersList,
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
    console.log(filtered);
    // setUsersList(filtered);
  };
  // const searchText = useSelector(
  //   (state: RootState) => state.search.initialState.searchText
  // );

  // useEffect(() => {
  //   setError(!checkInputString(searchText));
  // }, [searchText]);

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
        <button
          className={styles.button_clear}
          onClick={() => {
            // handleResetInput(textInput);
          }}
        >
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
