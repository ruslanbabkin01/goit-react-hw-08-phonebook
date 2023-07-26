import { AnyAction, createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';
import { Contact } from '../../../@types/types';

interface IState {
  items: Contact[];
  isLoading: boolean;
  error: string | null;
}

const initialState: IState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = (state: IState) => {
  state.isLoading = true;
};

function isError(action: AnyAction) {
  return action.type.endsWith('rejected');
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(
          contact => contact._id !== action.payload._id
        );
      })
      .addMatcher(isError, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
