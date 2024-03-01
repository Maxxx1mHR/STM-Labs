import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IUser } from '../types';

interface UsersState {
  usersList: IUser[];
}

const initialState: UsersState = {
  usersList: [],
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
  },
});

export const { setUsers } = usersSlice.actions;

export default usersSlice.reducer;
