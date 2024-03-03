import { UsersList } from './UsersList/UsersList';
import { useEffect, useState } from 'react';
import { Loader } from './Loader/Loader';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import {
  filterUsersByStartWordWith,
  filterUsersBySubstring,
} from '@helpers/functions/filterUsers';
import { User } from '@type/interfaces/user.interface';
import { getAllUsers } from '@service/UsersService';

export const App = () => {
  const [usersList, setUsersList] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [usersPerPage] = useState(15);

  const getUsers = async () => {
    setIsLoading(true);

    try {
      const results = await getAllUsers(usersPerPage);
      console.log(results.results);
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

  return (
    <ErrorBoundary>
      <div className="wrapper">
        <header>
          <h1>Test assignment for the position of Junior Frontend Developer</h1>
        </header>
        <main className="main">
          <Header />
          <UsersList usersList={usersList} />
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
};
