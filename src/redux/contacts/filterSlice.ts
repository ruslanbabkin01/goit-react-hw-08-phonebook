import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface IFilterState {
  filter: string;
}

const filterInitialState: IFilterState = {
  filter: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setFilter(state, action: PayloadAction<string>) {
      state.filter = action.payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;

export const { setFilter } = filterSlice.actions;
