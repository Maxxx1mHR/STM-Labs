import { useDispatch, useSelector } from 'react-redux';
import { useGetUsersQuery } from '../../redux/usersApi';
import { RootState } from '../../redux/store';
import { UsersList } from '../UsersList/UsersList';
import { useEffect } from 'react';
import { setUsers } from '../../redux/usersSlice';

export const App = () => {
  const dispatch = useDispatch();
  const { data: users, error, isLoading } = useGetUsersQuery({ count: 15 });

  useEffect(() => {
    if (!isLoading && !error && users) {
      dispatch(setUsers(users.results));
    }
  }, [dispatch, isLoading, error, users]);

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <section className="main container">
      <h1>Test assignment for the position of Junior Frontend Developer</h1>
      <UsersList />
    </section>
  );
};
