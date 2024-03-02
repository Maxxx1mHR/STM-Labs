import { Dispatch, SetStateAction, useRef, useState } from 'react';
import { debounce } from '../../helpers/functions/debounce';
import { filterUsersBySubstring } from '../../helpers/functions/filterUsers';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { setFilteredUsers } from '../../redux/usersSlice';
import styles from './Search.module.scss';

export const Search = ({
  setSearchText,
}: {
  setSearchText: Dispatch<SetStateAction<string>>;
}) => {
  const dispatch = useDispatch();

  const usersList = useSelector(
    (state: RootState) => state.users.initialState.usersList
  );

  const textInput = useRef<HTMLInputElement>(null);

  const handleInputChange = debounce((searchText: string) => {
    const filtered = filterUsersBySubstring(searchText, usersList);
    setSearchText(searchText);
    dispatch(setFilteredUsers(filtered));
  }, 300);

  return (
    <div className={styles.wrapper}>
      <input
        type="text"
        ref={textInput}
        placeholder="Search by name"
        className={styles.input}
        onChange={() => {
          const searchText = textInput.current?.value || '';
          handleInputChange(searchText);
        }}
      />
      <button
        className={styles.button_clear}
        onClick={() => {
          console.log('1');
          if (textInput.current) {
            textInput.current.value = '';
            dispatch(setFilteredUsers(usersList));
          }
        }}
      >
        <span className={styles.button_text}>Clear</span>
      </button>
    </div>
  );
};
