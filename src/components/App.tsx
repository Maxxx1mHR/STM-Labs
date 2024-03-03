import { useDispatch, useSelector } from 'react-redux';
import { useGetUsersQuery } from '@redux/usersApi';
import { UsersList } from './UsersList/UsersList';
import { useEffect } from 'react';
import { setFilteredUsers, setUsers } from '@redux/usersSlice';
import { Loader } from './Loader/Loader';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import { RootState } from '@redux/store';
import {
  filterUsersByStartWordWith,
  filterUsersBySubstring,
} from '@helpers/functions/filterUsers';
import { setSearchText } from '@redux/searchSlice';
import { useSearchParams } from 'react-router-dom';
import { setCountUsersPerPage, setPage } from '@redux/routerSlice';

export const App = () => {
  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();

  const getPage = searchParams.get('page');
  const getResults = searchParams.get('results');

  useEffect(() => {
    if (getResults) {
      dispatch(setCountUsersPerPage(Number(getResults)));
    }
    if (getPage) {
      dispatch(setPage(Number(getPage)));
    }
  }, []);

  const countUsersPerPage = useSelector(
    (state: RootState) => state.router.initialState.countUsersPerPage
  );

  const page = useSelector(
    (state: RootState) => state.router.initialState.page
  );

  const typeFiler = useSelector(
    (state: RootState) => state.search.initialState.filterType
  );

  const searchText = useSelector(
    (state: RootState) => state.search.initialState.searchText
  );

  const {
    data: users,
    error,
    isLoading,
  } = useGetUsersQuery({
    page: page,
    count: countUsersPerPage,
  });

  useEffect(() => {
    if (!isLoading && !error && users) {
      dispatch(setUsers(users.results));

      const filtered =
        typeFiler === 'substring'
          ? filterUsersBySubstring(searchText, users.results)
          : filterUsersByStartWordWith(searchText, users.results);
      dispatch(setSearchText(searchText));
      dispatch(setFilteredUsers(filtered));
    }
  }, [dispatch, isLoading, error, users]);

  return (
    <ErrorBoundary>
      <div className="wrapper">
        <header>
          <h1>Test assignment for the position of Junior Frontend Developer</h1>
        </header>
        <main className="main">
          <Header />
          {isLoading ? <Loader /> : <UsersList />}
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
};
