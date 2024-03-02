import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchText: '',
  filterType: 'substring',
};

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    initialState,
  },
  reducers: {
    setSearchText(state, action: PayloadAction<string>) {
      state.initialState.searchText = action.payload;
    },
    setFilterType(state, action: PayloadAction<string>) {
      state.initialState.filterType = action.payload;
    },
  },
});

export const { setSearchText, setFilterType } = searchSlice.actions;

export default searchSlice.reducer;
