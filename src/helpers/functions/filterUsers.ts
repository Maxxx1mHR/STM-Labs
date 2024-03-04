import { TypeFilter } from '@type/type';
import { User } from '@type/user.interface';

// Функция фильтрации пользователей по имени
export const filterUsers = (
  searchText: string,
  listOfUsers: User[],
  typeFilter: TypeFilter
) => {
  // Если в строке поиска ничего нет, вернуть исходный список пользователей
  if (!searchText) {
    return listOfUsers;
  }

  // Строка поиска в нижнем регистре
  const searchTextLower = searchText.toLowerCase();

  const filterFunction = (user: User) => {
    // Полное имя пользователя в нижнем регистре
    const fullName = `${user.name.first} ${user.name.last}`.toLowerCase();

    // Фильтрация по подстроке или началу имени и фамилии в зависимости от типа фильтра
    return typeFilter === 'substring'
      ? fullName.includes(searchTextLower)
      : fullName.startsWith(searchTextLower) ||
          `${user.name.last} ${user.name.first}`
            .toLowerCase()
            .startsWith(searchTextLower);
  };

  return listOfUsers.filter(filterFunction);
};
