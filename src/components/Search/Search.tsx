import { useRef } from 'react';
import styles from './Search.module.scss';

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
    </div>
  );
};
