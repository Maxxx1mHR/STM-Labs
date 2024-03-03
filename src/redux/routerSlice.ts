import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const ALL_COUNT_USERS = 5000;
const countUsersPerPage = 15;
const countPage = Math.ceil(ALL_COUNT_USERS / countUsersPerPage);

const initialState = {
  ALL_COUNT_USERS,
  countUsersPerPage,
  page: 1,
  countPage,
};

const routerSlice = createSlice({
  name: 'router',
  initialState: {
    initialState,
  },
  reducers: {
    setCountUsersPerPage(state, action: PayloadAction<number>) {
      state.initialState.countUsersPerPage = action.payload;
    },
    setCountPage(state) {
      // state.initialState.countPage = Math.ceil(
      //   ALL_COUNT_USERS / state.initialState.countUsersPerPage
      // );
    },
    setFirstPage(state) {
      state.initialState.page = 1;
    },
    setLastPage(state) {
      state.initialState.page = Math.ceil(
        ALL_COUNT_USERS / state.initialState.countUsersPerPage
      );
    },
    setNextPage(state) {
      state.initialState.page += 1;
    },
    setPrevPage(state) {
      state.initialState.page -= 1;
    },
  },
});

export const {
  setCountUsersPerPage,
  setCountPage,
  setFirstPage,
  setLastPage,
  setNextPage,
  setPrevPage,
} = routerSlice.actions;

export default routerSlice.reducer;
