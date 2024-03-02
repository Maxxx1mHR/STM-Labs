import { useDispatch } from 'react-redux';
import { useGetUsersQuery } from '../../redux/usersApi';
import { UsersList } from '../UsersList/UsersList';
import { useEffect, useState } from 'react';
import { setUsers } from '../../redux/usersSlice';
import { Loader } from '../Loader/Loader';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import ErrorBoundary from '../../errorBoundary/ErrorBoundary';

export const App = () => {
  const dispatch = useDispatch();
  const { data: users, error, isLoading } = useGetUsersQuery({ count: 15 });

  useEffect(() => {
    if (!isLoading && !error && users) {
      dispatch(setUsers(users.results));
    }
  }, [dispatch, isLoading, error, users]);

  return (
    <ErrorBoundary>
      <div className="wrapper">
        <header>
          <h1>Test assignment for the position of Junior Frontend Developer</h1>
        </header>
        <main className="main">
          <section>
            {/* <Search /> */}
            <Header />
          </section>
          <section className="container">
            {isLoading ? <Loader /> : <UsersList />}
          </section>
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
};
