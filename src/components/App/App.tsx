import { useDispatch, useSelector } from 'react-redux';
import { useGetUsersQuery } from '../../redux/usersApi';
import { RootState } from '../../redux/store';

export const App = () => {
  const dispatch = useDispatch();

  const { data: usersList, error, isLoading } = useGetUsersQuery({ count: 15 });

  console.log(usersList?.results);

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <section className="main container">
      <h1>Test assignment for the position of Junior Frontend Developer</h1>
    </section>
  );
};
