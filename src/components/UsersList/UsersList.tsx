import styles from './UsersList.module.scss';
import { formatDate } from '@helpers/functions/formatDate';
import { User } from '@type/user.interface';

interface UsersList {
  usersList: User[];
  inputSearch: string;
  usersListFiltred: User[];
}

export const UsersList = ({
  usersList,
  inputSearch,
  usersListFiltred,
}: UsersList) => {
  if (!usersListFiltred.length && inputSearch) {
    return (
      <h2 className={styles.not_found}>
        No users matching the search filter were found!
      </h2>
    );
  }

  const users = inputSearch ? usersListFiltred : usersList;
  return (
    <>
      <section className="container">
        <div className={styles.wrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={`${styles.table__cell} ${styles.table__header}`}>
                  Name
                </th>
                <th className={`${styles.table__cell} ${styles.table__header}`}>
                  Picture
                </th>
                <th className={`${styles.table__cell} ${styles.table__header}`}>
                  Location
                </th>
                <th className={`${styles.table__cell} ${styles.table__header}`}>
                  Email
                </th>
                <th className={`${styles.table__cell} ${styles.table__header}`}>
                  Phone
                </th>
                <th className={`${styles.table__cell} ${styles.table__header}`}>
                  Registered
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((item) => (
                <tr key={item.login.uuid}>
                  <td
                    className={`${styles.table__cell} ${styles.table__description}`}
                  >
                    {item.name.first} {item.name.last}
                  </td>
                  <td
                    className={`${styles.table__cell} ${styles.table__description}`}
                  >
                    <div className={styles.tooltip}>
                      <img
                        src={item.picture.thumbnail}
                        alt="Small resolution image user"
                        className={styles.table__image_small}
                      />
                      <div className={styles.tooltip__image}>
                        <img
                          src={item.picture.large}
                          alt="Large resolution image user"
                          className={styles.table__image_large}
                        />
                      </div>
                    </div>
                  </td>
                  <td
                    className={`${styles.table__cell} ${styles.table__description}`}
                  >
                    {item.location.state} {item.location.city}
                  </td>
                  <td
                    className={`${styles.table__cell} ${styles.table__description}`}
                  >
                    {item.email}
                  </td>
                  <td
                    className={`${styles.table__cell} ${styles.table__description}`}
                  >
                    {item.phone}
                  </td>
                  <td
                    className={`${styles.table__cell} ${styles.table__description}`}
                  >
                    {formatDate(item.registered.date)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};
