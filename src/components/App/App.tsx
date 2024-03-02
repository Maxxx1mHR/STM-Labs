import { useDispatch, useSelector } from 'react-redux';
import { useGetUsersQuery } from '../../redux/usersApi';
import { UsersList } from '../UsersList/UsersList';
import { useEffect, useState } from 'react';
import { setUsers } from '../../redux/usersSlice';
import { Search } from '../Search/Search';

export const App = () => {
  const dispatch = useDispatch();
  const { data: users, error, isLoading } = useGetUsersQuery({ count: 15 });

  useEffect(() => {
    if (!isLoading && !error && users) {
      dispatch(setUsers(users.results));
    }
  }, [dispatch, isLoading, error, users]);

  const [searchText, setSearchText] = useState('');

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <section className="main container">
      <h1>Test assignment for the position of Junior Frontend Developer</h1>
      <Search setSearchText={setSearchText} />
      <UsersList searchText={searchText} />
    </section>
  );
};
