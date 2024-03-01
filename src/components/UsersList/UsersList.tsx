import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import styles from './Users.module.scss';

export const UsersList = () => {
  const usersList = useSelector(
    (state: RootState) => state.users.initialState.usersList
  );
  return (
    <div className={styles.table}>
      <div className={styles.row}>
        <div className={styles.cell}>Name</div>
        <div className={styles.cell}>Picture</div>
        <div className={styles.cell}>location</div>
        <div className={styles.cell}>email</div>
        <div className={styles.cell}>phone</div>
        <div className={styles.cell}>registred</div>
      </div>

      {usersList.map((item) => (
        <ul className={styles.row} key={item.login.uuid}>
          <li className={styles.cell}>
            {item.name.first} {item.name.last}
          </li>
          <li className={styles.cell}>
            <div className={styles.wrapper__image}>
              <img
                src={item.picture.thumbnail}
                alt="Small Image User"
                className={styles.small_image}
              />
            </div>
          </li>
          <li className={styles.cell}>
            {item.location.state} {item.location.city}
          </li>
          <li className={styles.cell}>{item.email}</li>
          <li className={styles.cell}>{item.phone}</li>
          <li className={styles.cell}>{item.registered.date}</li>
        </ul>
      ))}
    </div>
  );
};
