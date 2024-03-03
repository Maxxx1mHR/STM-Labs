import { useDispatch, useSelector } from 'react-redux';
import styles from './Navigation.module.scss';
import { RootState } from '@redux/store';
import {
  setFirstPage,
  setLastPage,
  setNextPage,
  setPrevPage,
} from '@redux/routerSlice';

export const Navigation = () => {
  const countPages = useSelector(
    (state: RootState) => state.router.initialState.countPages
  );

  const page = useSelector(
    (state: RootState) => state.router.initialState.page
  );

  const dispatch = useDispatch();

  const incrementPage = () => {
    if (page === countPages) {
      return;
    }
    dispatch(setNextPage());
  };

  const decrementPage = () => {
    if (page === 1) {
      return;
    }
    dispatch(setPrevPage());
  };

  const setStartPage = () => {
    if (page === 1) {
      return;
    }
    dispatch(setFirstPage());
  };

  const setEndPage = () => {
    if (page === countPages) {
      return;
    }
    dispatch(setLastPage());
  };

  const firstButtonClasses =
    page === 1
      ? `${styles.navigation__button} ${styles.disabled}`
      : styles.navigation__button;

  const lastButtonClasses =
    page === countPages
      ? `${styles.navigation__button} ${styles.disabled}`
      : styles.navigation__button;

  return (
    <section className={`${styles.navigation} container`}>
      <div className={styles.navigation__buttons}>
        <button className={firstButtonClasses} onClick={setStartPage}>
          <span className={styles.navigation__text}>First</span>
        </button>
        <button className={firstButtonClasses} onClick={decrementPage}>
          <span className={styles.navigation__text}>Prev</span>
        </button>
        <button className={lastButtonClasses} onClick={incrementPage}>
          <span className={styles.navigation__text}>Next</span>
        </button>
        <button className={lastButtonClasses} onClick={setEndPage}>
          <span className={styles.navigation__text}>Last</span>
        </button>
      </div>
      <div className={styles.pages}>
        {page} / {countPages}
      </div>
    </section>
  );
};
