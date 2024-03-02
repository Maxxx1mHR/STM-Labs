import { IUser } from '../../types';

export const filterUsersBySubstring = (
  searchText: string,
  listOfUsers: IUser[]
) => {
  console.log('...', searchText);
  if (!searchText) {
    console.log('te');
    return listOfUsers;
  }
  return listOfUsers.filter(({ name }) =>
    `${name.first} ${name.last}`
      .toLowerCase()
      .includes(searchText.toLowerCase())
  );
};

export const filterUsersByStartWordWith = (
  searchText: string,
  listOfUsers: IUser[]
) => {
  if (!searchText) {
    return listOfUsers;
  }

  const searchTextLower = searchText.toLowerCase();

  const filteredUsers = listOfUsers.filter(
    ({ name }) =>
      `${name.first} ${name.last}`.toLowerCase().startsWith(searchTextLower) ||
      `${name.last} ${name.first}`.toLowerCase().startsWith(searchTextLower)
  );

  return filteredUsers;
};
