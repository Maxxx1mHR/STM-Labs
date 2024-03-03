import { UsersList } from './UsersList/UsersList';
import { useEffect } from 'react';
import { Loader } from './Loader/Loader';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import {
  filterUsersByStartWordWith,
  filterUsersBySubstring,
} from '@helpers/functions/filterUsers';

export const App = () => {
  useEffect(() => {}, []);

  return (
    <ErrorBoundary>
      <div className="wrapper">
        <header>
          <h1>Test assignment for the position of Junior Frontend Developer</h1>
        </header>
        <main className="main">
          <Header />
          <UsersList />
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
};
