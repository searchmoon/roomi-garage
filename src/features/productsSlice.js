import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchItem: '',
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getSearchItem: (state, action) => {
      state.searchItem = action.payload;
    },
  },
});

export const { getSearchItem } = productsSlice.actions;

export default productsSlice.reducer;
