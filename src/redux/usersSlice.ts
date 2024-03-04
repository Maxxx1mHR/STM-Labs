import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IUser } from '@type/interfaces/user.interface';

interface UsersState {
  usersList: IUser[];
  filteredUsers: IUser[];
}

const initialState: UsersState = {
  usersList: [],
  filteredUsers: [],
};

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    initialState,
  },
  reducers: {
    setUsers(state, action: PayloadAction<IUser[]>) {
      state.initialState.usersList = action.payload;
    },
    setFilteredUsers(state, action: PayloadAction<IUser[]>) {
      state.initialState.filteredUsers = action.payload;
    },
  },
});

export const { setUsers, setFilteredUsers } = usersSlice.actions;

export default usersSlice.reducer;
