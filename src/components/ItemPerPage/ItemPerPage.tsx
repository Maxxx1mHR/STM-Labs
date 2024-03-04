import { useDispatch, useSelector } from 'react-redux';
import styles from './ItemPerPage.module.scss';
import { setCountUsersPerPage } from '@redux/routerSlice';
import { useSearchParams } from 'react-router-dom';
import { RootState } from '@redux/store';

export const ItemPerPage = () => {
  const countItem = [15, 30, 50, 100];

  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const getPage = searchParams.get('page');
  const page = useSelector(
    (state: RootState) => state.router.initialState.page
  );

  return (
    <div className={styles.count}>
      <h2 className={styles.count__header}>Choose users per page</h2>
      <select
        className={styles.count__select}
        onChange={(e) => {
          setSearchParams({
            page: getPage ? getPage : String(page),
            results: e.target.value,
          });
          dispatch(setCountUsersPerPage(Number(e.target.value)));
        }}
      >
        {countItem.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};
