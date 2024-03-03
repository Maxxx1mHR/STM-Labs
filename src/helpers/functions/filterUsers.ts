import { TypeFilter } from '@type/type';
import { User } from '@type/user.interface';

export const filterUsers = (
  searchText: string,
  listOfUsers: User[],
  typeFilter: TypeFilter
) => {
  if (!searchText) {
    return listOfUsers;
  }

  const searchTextLower = searchText.toLowerCase();

  const filterFunction = (user: User) => {
    const fullName = `${user.name.first} ${user.name.last}`.toLowerCase();
    return typeFilter === 'substring'
      ? fullName.includes(searchTextLower)
      : fullName.startsWith(searchTextLower) ||
          `${user.name.last} ${user.name.first}`
            .toLowerCase()
            .startsWith(searchTextLower);
  };

  return listOfUsers.filter(filterFunction);
};

// export const filterUsersByStartWordWith = (
//   searchText: string,
//   listOfUsers: User[]
// ) => {
//   if (!searchText) {
//     return listOfUsers;
//   }

//   const searchTextLower = searchText.toLowerCase();

//   const filteredUsers = listOfUsers.filter(
//     ({ name }) =>
//       `${name.first} ${name.last}`.toLowerCase().startsWith(searchTextLower) ||
//       `${name.last} ${name.first}`.toLowerCase().startsWith(searchTextLower)
//   );

//   return filteredUsers;
// };
