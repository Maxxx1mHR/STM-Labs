import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import styles from './Users.module.scss';
import { formatDate } from '../../helpers/functions/formatDate';

export const UsersList = ({ searchText }: { searchText: string }) => {
  const usersList = useSelector(
    (state: RootState) => state.users.initialState.usersList
  );

  const filteredUsers = useSelector(
    (state: RootState) => state.users.initialState.filteredUsers
  );

  console.log('filter', filteredUsers);

  return (
    <div className={styles.wrapper}>
      <ul className={styles.users__list}>
        {(searchText === '' ? usersList : filteredUsers).map((item) => (
          <li className={styles.users__item} key={item.login.uuid}>
            <h2 className={styles.users__header}>
              {item.name.first} {item.name.last}
            </h2>
            <div className={styles.wrapper__image}>
              <img
                src={item.picture.thumbnail}
                alt="Small Image User"
                className={styles.small_image}
              />
            </div>
            <ul className={styles.users__info}>
              <li>
                <div>
                  <span className={styles.label}>Location:</span>
                  {item.location.state}
                </div>
              </li>
              <li>
                <div>
                  <span className={styles.label}>Email:</span>
                  {item.email}
                </div>
              </li>
              <li>
                <div>
                  <span className={styles.label}>Phone: </span>
                  {item.phone}
                </div>
              </li>
              <li>
                <div>
                  <span className={styles.label}>Registered:</span>
                  {formatDate(item.registered.date)}
                </div>
              </li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};
