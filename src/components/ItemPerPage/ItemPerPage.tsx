import { useDispatch } from 'react-redux';
import styles from './ItemPerPage.module.scss';
import { setCountUsersPerPage } from '@redux/routerSlice';

export const ItemPerPage = () => {
  const countItem = [15, 30, 50, 100];

  const dispatch = useDispatch();

  return (
    <div className={styles.count}>
      <h2 className={styles.count__header}>Choose users per page</h2>
      <select
        className={styles.count__select}
        onChange={(e) => {
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
