import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Notify } from 'notiflix';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/contacts');
      return data.data;
    } catch (e) {
      Notify.failure(e.response.data.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const { data } = await axios.post('/contacts', contact);
      Notify.success(`Contact ${contact.name} added to the contacts`);
      return data;
    } catch (e) {
      console.log(e.response.data.message);
      Notify.failure(e.response.data.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/contacts/${contactId}`);
      return data.data;
    } catch (e) {
      Notify.failure(e.response.data.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
