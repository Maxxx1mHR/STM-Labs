// import { debounce } from '@helpers/functions/debounce';

// import { FilterType } from '../FilterType/FilterType';
// import { Search } from '../Search/Search';

// export const Header = () => {
//   const handleInputChange = debounce((searchText: string) => {
//     // const filtered =
//     //   typeFiler === 'substring'
//     //     ? filterUsersBySubstring(searchText, usersList)
//     //     : filterUsersByStartWordWith(searchText, usersList);
//     // dispatch(setSearchText(searchText));
//     // dispatch(setFilteredUsers(filtered));
//   }, 300);

//   const handleResetInput = (
//     textInput: React.RefObject<HTMLInputElement> | null
//   ) => {
//     if (textInput?.current) {
//       textInput.current.value = '';
//       // dispatch(setSearchText(''));
//       // dispatch(setFilteredUsers(usersList));
//     }
//   };

//   const handleSwitchTypeFilter = (typeFiler: string) => {
//     const filtered = typeFiler === 'substring';
//     // ? filterUsersBySubstring(searchText, usersList)
//     // : filterUsersByStartWordWith(searchText, usersList);
//     // dispatch(setFilteredUsers(filtered));
//   };

//   return (
//     <section>
//       <FilterType />
//       <Search
//         handleInputChange={handleInputChange}
//         handleResetInput={handleResetInput}
//       />
//     </section>
//   );
// };
