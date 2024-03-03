import styles from './Users.module.scss';
import { formatDate } from '@helpers/functions/formatDate';

export const UsersList = () => {
  // if (filteredUsers.length === 0 && searchText !== '') {
  //   return (
  //     <div className={styles.nav_bottom}>
  //       <h2 className={styles.not_found}>
  //         No users matching the search filter were found!
  //       </h2>
  //     </div>
  //   );
  // }

  return (
    <>
      <section className="container">
        <div className={styles.nav_bottom}>
          <div className={styles.wrapper}>
            <ul className={styles.users__list}>
              {/* {(searchText === '' ? usersList : filteredUsers).map((item) => (
                <li className={styles.users__item} key={item.login.uuid}>
                  <h2 className={styles.users__header}>
                    {item.name.first} {item.name.last}
                  </h2>
                  <div className={styles.container}>
                    <div className={styles.wrapper__image}>
                      <img
                        src={item.picture.thumbnail}
                        alt="Small resolution image user"
                        className={styles.small_image}
                      />
                      <img
                        src={item.picture.large}
                        alt="Large resolution image user"
                        className={styles.large_image}
                      />
                    </div>
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
              ))} */}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};
