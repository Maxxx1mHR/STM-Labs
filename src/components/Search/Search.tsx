import { useEffect, useRef, useState } from 'react';
import styles from './Search.module.scss';
import { checkInputString } from '@helpers/validation/checkInputString';
import { useSelector } from 'react-redux';
import { RootState } from '@redux/store';

interface SearchProps {
  handleInputChange: (searchText: string) => void;
  handleResetInput: (
    textInput: React.RefObject<HTMLInputElement> | null
  ) => void;
}

export const Search = ({
  handleInputChange,
  handleResetInput,
}: SearchProps) => {
  const textInput = useRef<HTMLInputElement>(null);

  const [error, setError] = useState(false);
  const searchText = useSelector(
    (state: RootState) => state.search.initialState.searchText
  );

  useEffect(() => {
    setError(!checkInputString(searchText));
  }, [searchText]);

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
            handleResetInput(textInput);
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
