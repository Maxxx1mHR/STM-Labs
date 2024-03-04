import { useEffect, useState } from 'react';
import { UsersList } from './UsersList/UsersList';
import { Loader } from './Loader/Loader';
import { Footer } from './Footer/Footer';
import { ErrorBoundary } from './ErrorBoundary/ErrorBoundary';
import { Search } from './Search/Search';
import { FilterType } from './FilterType/FilterType';
import { User } from '@type/user.interface';
import { getAllUsers } from '@service/UsersService';
import { TypeFilter } from '@type/type';
import { USERS_PER_PAGE } from '@helpers/constants';

export const App = () => {
  const [usersList, setUsersList] = useState<User[]>([]);
  const [usersListFiltred, setUsersListFiltred] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [typeFilter, setTypeFilter] = useState<TypeFilter>('substring');
  const [inputSearch, setInputSearch] = useState('');
  const [usersPerPage] = useState(USERS_PER_PAGE);

  // Функция для получения пользователей
  const getUsers = async () => {
    setIsLoading(true);

    try {
      const results = await getAllUsers(usersPerPage);
      if (results) {
        setUsersList(results.results);
      }
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  // Еффект для загрузки пользователей при первом монтировании компонента
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <ErrorBoundary>
      <div className="wrapper">
        <header>
          <h1>Test assignment for the position of Junior Frontend Developer</h1>
        </header>
        <main className="main">
          <section>
            <FilterType
              inputSearch={inputSearch}
              usersList={usersList}
              setUsersListFiltred={setUsersListFiltred}
              typeFilter={typeFilter}
              setTypeFilter={setTypeFilter}
            />
            <Search
              usersList={usersList}
              setInputSearch={setInputSearch}
              typeFilter={typeFilter}
              setUsersListFiltred={setUsersListFiltred}
            />
          </section>
          {isLoading ? (
            <Loader />
          ) : (
            <UsersList
              usersList={usersList}
              inputSearch={inputSearch}
              usersListFiltred={usersListFiltred}
            />
          )}
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
};
