import { UsersList } from './UsersList/UsersList';
import { useEffect, useState } from 'react';
import { Loader } from './Loader/Loader';
import { Footer } from './Footer/Footer';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

import { User } from '@type/user.interface';
import { getAllUsers } from '@service/UsersService';
import { FilterType } from './FilterType/FilterType';
import { Search } from './Search/Search';
import { TypeFilter } from '@type/type';

export const App = () => {
  const [usersList, setUsersList] = useState<User[]>([]);
  const [usersListFiltred, setUsersListFiltred] = useState<User[]>([]);

  const [isLoading, setIsLoading] = useState(false);
  const [typeFilter, setTypeFilter] = useState<TypeFilter>('substring');

  const [inputSearch, setInputSearch] = useState('');
  const [usersPerPage] = useState(15);

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
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

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
          <UsersList
            usersList={usersList}
            inputSearch={inputSearch}
            usersListFiltred={usersListFiltred}
          />
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
};
