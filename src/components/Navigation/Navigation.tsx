import { useDispatch, useSelector } from 'react-redux';
import styles from './Navigation.module.scss';
import { RootState } from '@redux/store';
import {
  setFirstPage,
  setLastPage,
  setNextPage,
  setPrevPage,
} from '@redux/routerSlice';
import { useSearchParams } from 'react-router-dom';

export const Navigation = () => {
  const [, setSearchParams] = useSearchParams();

  const countPages = useSelector(
    (state: RootState) => state.router.initialState.countPages
  );

  const page = useSelector(
    (state: RootState) => state.router.initialState.page
  );

  const countUsersPerPage = useSelector(
    (state: RootState) => state.router.initialState.countUsersPerPage
  );

  const dispatch = useDispatch();

  const incrementPage = () => {
    if (page === countPages) {
      return;
    }
    setSearchParams({
      page: String(page + 1),
      results: String(countUsersPerPage),
    });
    dispatch(setNextPage());
  };

  const decrementPage = () => {
    if (page === 1) {
      return;
    }
    setSearchParams({
      page: String(page - 1),
      results: String(countUsersPerPage),
    });
    dispatch(setPrevPage());
  };

  const setStartPage = () => {
    if (page === 1) {
      return;
    }
    setSearchParams({ page: '1', results: String(countUsersPerPage) });
    dispatch(setFirstPage());
  };

  const setEndPage = () => {
    if (page === countPages) {
      return;
    }
    setSearchParams({
      page: String(countPages),
      results: String(countUsersPerPage),
    });
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
