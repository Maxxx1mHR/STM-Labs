import styles from './Users.module.scss';
import { formatDate } from '@helpers/functions/formatDate';
import { User } from '@type/interfaces/user.interface';

interface UsersList {
  usersList: User[];
}

export const UsersList = ({ usersList }: UsersList) => {
  // if (filteredUsers.length === 0 && searchText !== '') {
  //   return (
  //     <div className={styles.nav_bottom}>
  //       <h2 className={styles.not_found}>
  //         No users matching the search filter were found!
  //       </h2>
  //     </div>
  //   );
  // }
  // searchText === '' ? usersList : filteredUsers
  return (
    <>
      <section className="container">
        <div className={styles.nav_bottom}>
          <div className={styles.wrapper}>
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
                    <div className={styles.tooltip}>
                      <img
                        src={item.picture.thumbnail}
                        alt="Small resolution image user"
                        className={styles.small_image}
                      />
                      <div className={styles.tooltipText}>
                        <img
                          src={item.picture.large}
                          alt="Large resolution image user"
                          className={styles.large_image}
                        />
                      </div>
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
          </div>
        </div>
      </section>
    </>
  );
};
